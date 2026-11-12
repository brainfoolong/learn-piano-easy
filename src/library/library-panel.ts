/**
 * The song explorer: every song of the catalog and every upload as a card, found by a search, by tags
 * and by a sort, with a preview and a star on each card.
 *
 * The shell shows it in a dialog. The panel is built once and kept, and `shown` puts it back as the
 * learner left it. Every button runs one of the shell's `LibraryActions`, so the panel stays a view.
 *
 * Its head holds the search, the quick filter for the difficulty, "Fits my keyboard", the count and
 * the sort. A rail beside the cards holds the other tags of `tags.ts`, kind by kind. With no filter
 * on, the cards start with what the learner played, the favourites, the uploads and the next steps
 * of the beginner path. Its look is `library-panel.css`.
 *
 * Decisions, and what each costs:
 * - A song is one card and counts once, whatever its versions. A song of ours shows its versions as
 *   steps in the card's head, and its original score as the last step. The card shows one version at
 *   a time. Its title, meter, length, tags, preview and main button are that version's.
 * - A card shows the version the learner picked on it, else the one last played, else the easiest. A
 *   pick lasts until the page is left. A filter narrows the choice to the versions that pass it, so
 *   a card under "Hard" opens the hard version. The steps still offer every version.
 * - A pick draws the song's cards anew in place. No other card moves, and the result keeps its order
 *   until the next redraw.
 * - The star is the song's. It is on when any version is a favourite, so a star set on one version
 *   before stays. Taking it off clears every version.
 * - A card names its difficulty in words alone. The catalog's number fills the meter and sorts the
 *   cards, and the learner never reads it.
 * - The view is one object: the query, the chosen tags, the sort, the scroll and how many cards are
 *   drawn. It is written to `sessionStorage` under `VIEW_KEY`, so a reload of the page keeps it too.
 * - A change of the view redraws the cards, `CHUNK` at first. A sentinel under them draws the next
 *   chunk as it comes near, so a keystroke builds a screen of cards and never the whole catalog.
 * - `shown` draws as many cards as were drawn before, then restores the scroll. It then brings the
 *   open song's card into view when the filters keep it, drawing up to it first.
 * - The open song's card is marked `aria-current`. The head names the song too, so it is found even
 *   when a filter hides its card. That button clears the filters and goes to the card.
 * - A lead section shows only while no filter is on, so a search shows each song once.
 * - A card's main button is a layer over the whole card, named by the song's title, and it opens the
 *   song. Its focus ring is then the card's. The star, the preview and the tags sit above it. Their
 *   names leave the song's title out, so the title names one button alone.
 * - A card's tags leave the Tab order, since the rail offers the same filters. The arrow keys move
 *   between the cards, and from the search field the down arrow enters them.
 * - A star and a preview change their buttons in place. The lead sections follow at the next redraw,
 *   so no card moves under the pointer.
 * - A song's length and a version's skills come from its catalog row, written by the song tools. A
 *   row costs a few bytes more, and the explorer parses no song to sort or tag the catalog.
 * - A song without a length, such as an upload, is read from its file when its card comes into view,
 *   and kept by `SongMemory`. That costs one fetch per card seen, which the service worker keeps for
 *   the preview. A browser that asks to save data measures only on a sort by length.
 * - A version without skills takes them from its guide, read once the panel first shows. Skills
 *   already remembered are trusted, so a guide that changes shows its new skills late.
 * - A preview stops when the dialog closes and when a song opens. `preview.ts` owns the rest.
 *
 * Bounds: a lead section shows `LEAD` cards, and the composers' group `COMPOSERS_SHOWN` until opened.
 */
import "./library-panel.css";
import type { AudioEngine } from "../audio/engine";
import { localize, onLocale, type Pick as TextPick, t } from "../i18n/live";
import { normalizeRange } from "../keyboard/range";
import type { SettingsStore, StorageLike } from "../settings/store";
import { button, type ButtonVariant } from "../ui/components/button";
import { mascot } from "../ui/components/mascot";
import { el } from "../ui/dom";
import { icon } from "../ui/icons/icons";
import { beginnerPath } from "./beginner-path";
import { originalName, originalTagline, rarityName, rarityTagline } from "./guide";
import { loadGuide } from "./guide-panel";
import { createMeasurer, createPreviewer } from "./preview";
import {
  type CatalogSong,
  COLLECTIONS,
  filterSongs,
  foldText,
  highlightRanges,
  NO_FILTER,
  queryWords,
  type Sort,
  SORTS,
  type SongEntry,
  songEntries,
  songTitle,
  sortSongs,
} from "./search";
import { SKILLS } from "./skills";
import { SongMemory } from "./song-memory";
import {
  composerOf,
  levelOf,
  LEVELS,
  matchesTags,
  SETS,
  songTags,
  STYLES,
  TAG_KINDS,
  type TagKey,
  type TagKind,
  tagId,
  tagKey,
  tagKind,
  tagName,
  YOURS,
} from "./tags";
import { titleOf, type Upload } from "./uploads";

/** What the panel's buttons do. The shell owns each, so the panel stays a view. */
export interface LibraryActions {
  open(song: CatalogSong): void;
  openUpload(upload: Upload): void;
  removeUpload(upload: Upload): void;
  exportUpload(upload: Upload): void;
  addFiles(): void;
  addFolder(): void;
  /** Pauses the transport, so a preview is heard alone. */
  pause(): void;
  /** Says `message` in a toast. */
  toast(message: string): void;
}

export interface LibraryPanel {
  readonly element: HTMLElement;
  /** Shows `songs` as the catalog. */
  setSongs(songs: readonly CatalogSong[]): void;
  /** Shows `uploads` as the learner's own songs. */
  setUploads(uploads: readonly Upload[]): void;
  /** Shows `message` in place of the cards, such as when the catalog failed to load. */
  setError(message: string): void;
  /** Marks the song known as `id` as the one that plays now, and notes the play. */
  setCurrent(id: string | undefined): void;
  /** Call it once the panel is in its dialog: it restores the view and brings the open song into view. */
  shown(): void;
  dispose(): void;
}

/** The `sessionStorage` key the view lives under. */
export const VIEW_KEY = "learn-piano-easy.songExplorer";

/** How many cards a redraw and each later step draw. */
const CHUNK = 48;

/** How many cards a lead section shows. */
const LEAD = 6;

/** How many composers their group shows until the learner opens it. */
const COMPOSERS_SHOWN = 8;

/** The kinds of tag the head offers as quick filters. The rail holds the others. */
const QUICK_KINDS: readonly TagKind[] = ["level"];

/** What the learner sees of the explorer, kept across a close and a reload. */
interface View {
  query: string;
  tags: TagKey[];
  sort: Sort;
  fits: boolean;
  /** The scroll of the cards, in pixels. */
  scroll: number;
  /** How many cards of the result are drawn. */
  shown: number;
  /** Whether the rail is open on a narrow screen. */
  rail: boolean;
}

/** What one card shows: a version of a catalog song or an upload, under the id its settings use. */
interface Item {
  id: string;
  title: string;
  song?: CatalogSong;
  upload?: Upload;
}

/** The view kept in `storage`, or a fresh one when none is kept or its shape is wrong. */
function readView(storage: StorageLike | null): View {
  const fresh: View = { query: "", tags: [], sort: "suggested", fits: false, scroll: 0, shown: CHUNK, rail: false };
  try {
    const raw = JSON.parse(storage?.getItem(VIEW_KEY) ?? "null") as Partial<View> | null;
    if (typeof raw !== "object" || raw === null) return fresh;
    return {
      query: typeof raw.query === "string" ? raw.query : "",
      // A tag of a kind the explorer no longer has would hide every song, so it is dropped.
      tags: Array.isArray(raw.tags) ? raw.tags.filter((key) => typeof key === "string" && (TAG_KINDS as readonly string[]).includes(key.split(":")[0]!)) : [],
      sort: SORTS.includes(raw.sort as Sort) ? (raw.sort as Sort) : "suggested",
      fits: raw.fits === true,
      scroll: typeof raw.scroll === "number" ? raw.scroll : 0,
      shown: typeof raw.shown === "number" ? raw.shown : CHUNK,
      rail: raw.rail === true,
    };
  } catch {
    return fresh;
  }
}

/** `seconds` as minutes and seconds, such as `2:05`. */
function formatLength(seconds: number): string {
  return `${Math.floor(seconds / 60)}:${String(Math.round(seconds) % 60).padStart(2, "0")}`;
}

/** `text` as nodes, with each part that holds a word of `words` in a `mark`. */
function marked(text: string, words: readonly string[]): (Node | string)[] {
  const parts: (Node | string)[] = [];
  let at = 0;
  for (const [start, end] of highlightRanges(text, words)) {
    if (start > at) parts.push(text.slice(at, start));
    parts.push(el("mark", { text: text.slice(start, end) }));
    at = end;
  }
  if (at < text.length) parts.push(text.slice(at));
  return parts;
}

/** A small button labelled `label` that runs `onClick`, whose title and accessible name are `name`. */
function namedButton(label: string, name: string, variant: ButtonVariant, onClick: () => void): HTMLButtonElement {
  const target = button({ label, variant, size: "small", onClick });
  target.title = name;
  target.setAttribute("aria-label", name);
  return target;
}

/** A small button that runs `onClick`. Its label, title and accessible name follow the live locale. */
function localButton(text: TextPick, title: TextPick, onClick: () => void): HTMLButtonElement {
  const target = button({ label: "", size: "small", onClick });
  localize(target.querySelector(".btn__label")!, text);
  localize(target, title, "title");
  return localize(target, title, "aria-label");
}

/** The file of the catalog song at `file`, from the network or the service worker's cache. */
async function fetchSong(file: string): Promise<Uint8Array> {
  const response = await fetch(`./songs/${file}`);
  if (!response.ok) throw new Error(String(response.status));
  return new Uint8Array(await response.arrayBuffer());
}

/** A song explorer whose buttons run `actions`, and whose previews sound on `engine`. */
export function createLibraryPanel(
  settings: SettingsStore,
  actions: LibraryActions,
  engine: Pick<AudioEngine, "context" | "song" | "resume" | "ready">,
): LibraryPanel {
  const session: StorageLike | null = typeof sessionStorage === "undefined" ? null : sessionStorage;
  const memory = new SongMemory(typeof localStorage === "undefined" ? null : localStorage);
  const view = readView(session);
  const saveData = (navigator as { connection?: { saveData?: boolean } }).connection?.saveData === true;
  let songs: readonly CatalogSong[] = [];
  let uploads: readonly Upload[] = [];
  let failed = false;
  let current: string | undefined;
  /** The catalog as one entry per song, and the entry each of its rows belongs to. */
  let entries: SongEntry[] = [];
  let entryOf = new Map<CatalogSong, SongEntry>();
  /** The file of the version the learner picked on a song's card, by the entry's key. */
  const picks = new Map<string, string>();
  /** Each catalog row's id, its tags and the text a query may match beside its own. */
  let index = new Map<CatalogSong, { id: string; tags: ReadonlySet<TagKey>; text: string }>();
  let byId = new Map<string, Item>();
  /** Each file's step on the beginner path, from 1, and how many songs the path holds. */
  let steps = new Map<string, number>();
  let pathSongs = 0;
  /** The result the cards are drawn from, as the version each song shows, and how many of them are drawn. */
  let result: CatalogSong[] = [];
  let drawn = 0;
  let words: string[] = [];
  let grid = el("ul", { class: "song-grid" });
  /** The filter buttons of the head and the rail, by tag, so a redraw sets which are pressed. */
  const filterButtons = new Map<TagKey, HTMLButtonElement>();
  let skillsAsked = false;

  const say = () => t().player.library.panel;
  const save = () => {
    try {
      session?.setItem(VIEW_KEY, JSON.stringify(view));
    } catch {
      // A storage that refuses only costs the view on a reload.
    }
  };
  const idOf = (song: CatalogSong) => `catalog:${song.file}`;
  const read = (item: Item) => (item.upload !== undefined ? Promise.resolve(item.upload.bytes) : fetchSong(item.song!.file));

  /** The ids of every version of the song `item` is one of, or its own id for an upload. */
  const versionIds = (item: Item): string[] => (item.song === undefined ? [item.id] : entryOf.get(item.song)!.versions.map(idOf));
  /** When any version of the song `item` is one of was last played, in ms since the epoch, or undefined. */
  const playedAt = (item: Item): number | undefined => {
    const times = versionIds(item).flatMap((id) => memory.playedAt(id) ?? []);
    return times.length === 0 ? undefined : Math.max(...times);
  };

  /**
   * Whether `item` carries the tag `key`. The learner's own tags are answered from the memory, for
   * the song as a whole. Every other tag is the version's own.
   */
  const has = (item: Item, key: TagKey): boolean => {
    if (key === "yours:favourite") return versionIds(item).some((id) => memory.isFavourite(id));
    if (key === "yours:played") return playedAt(item) !== undefined;
    if (key === "yours:upload") return item.upload !== undefined;
    return item.song !== undefined && index.get(item.song)!.tags.has(key);
  };

  /** The version of `entry` its card shows, out of `open`: the learner's pick, else the last played, else the easiest. */
  const shownOf = (entry: SongEntry, open: readonly CatalogSong[] = entry.versions): CatalogSong => {
    const picked = picks.get(entry.key);
    const played = open.filter((row) => memory.playedAt(idOf(row)) !== undefined).sort((a, b) => memory.playedAt(idOf(b))! - memory.playedAt(idOf(a))!);
    return open.find((row) => row.file === picked) ?? played[0] ?? open[0]!;
  };
  /** Forgets the pick on the card of the open song, so the card shows the version that plays. */
  const unpickCurrent = () => {
    const song = current === undefined ? undefined : byId.get(current)?.song;
    if (song !== undefined) picks.delete(entryOf.get(song)!.key);
  };

  // The head: the search, the open song, the quick filters, the count and the sort.
  const search = el("input", {
    class: "song-explorer__field",
    attrs: { type: "search", "data-control": "text", enterkeyhint: "search", autocomplete: "off", spellcheck: "false" },
    props: { value: view.query },
    on: {
      input: () => {
        view.query = search.value;
        redraw();
      },
      keydown: (event) => {
        // A search field clears itself on Escape. The dialog closes on that key, and the query must outlive the close.
        if (event.key === "Escape") event.preventDefault();
        if (event.key !== "ArrowDown") return;
        const first = results.querySelector<HTMLElement>(".song-card__open");
        if (first === null) return;
        event.preventDefault();
        first.focus();
      },
    },
  });
  localize(search, (m) => m.player.library.panel.search.placeholder, "placeholder");
  localize(search, (m) => m.player.library.panel.search.label, "aria-label");
  const nowTitle = el("span", { class: "song-explorer__now-title" });
  const now = el("button", {
    class: "song-explorer__now",
    attrs: { type: "button", hidden: "" },
    on: {
      click: () => {
        unpickCurrent();
        draw(true);
        if (current !== undefined && !result.some((song) => idOf(song) === current)) {
          clear();
          redraw();
        }
        reveal(true);
      },
    },
    children: [el("span", { class: "song-bars", attrs: { "aria-hidden": "true" }, children: [el("i"), el("i"), el("i")] }), nowTitle],
  });
  const fits = el("input", {
    class: "toggle",
    attrs: { type: "checkbox", role: "switch", "data-control": "toggle" },
    props: { checked: view.fits },
    on: {
      change: () => {
        view.fits = fits.checked;
        redraw();
      },
    },
  });
  localize(fits, (m) => m.player.library.panel.fits, "aria-label");
  const quick = el("div", { class: "song-explorer__quick" });
  const count = el("output", { class: "library-count", attrs: { "aria-live": "polite" } });
  const measuring = localize(el("span", { class: "song-explorer__note", attrs: { hidden: "" } }), (m) => m.player.library.panel.measuring);
  const sort = el("select", {
    attrs: { "data-control": "select" },
    children: SORTS.map((id) => localize(el("option", { attrs: { value: id } }), (m) => m.player.library.panel.sort[id])),
    on: {
      change: () => {
        view.sort = sort.value as Sort;
        redraw();
      },
    },
  });
  sort.value = view.sort;
  localize(sort, (m) => m.player.library.panel.sort.label, "aria-label");
  const clearButton = localButton(
    (m) => m.player.library.panel.clear,
    (m) => m.player.library.panel.clear,
    () => {
      clear();
      redraw();
      search.focus();
    },
  );
  clearButton.classList.add("song-explorer__clear");
  const railLabel = el("span");
  const railToggle = el("button", {
    class: "song-explorer__filters",
    attrs: { type: "button", "aria-expanded": String(view.rail) },
    on: {
      click: () => {
        view.rail = !view.rail;
        syncFilters();
        save();
      },
    },
    children: [icon("chevron-down"), railLabel],
  });
  const rail = el("aside", { class: "song-explorer__rail" });
  localize(rail, (m) => m.player.library.panel.filters, "aria-label");
  const results = el("div", { class: "song-explorer__results" });
  const sentinel = el("div", { class: "song-explorer__sentinel", attrs: { "aria-hidden": "true" } });

  const element = el("div", {
    class: "library-panel song-explorer",
    children: [
      el("div", {
        class: "song-explorer__head",
        children: [
          el("div", {
            class: "song-explorer__search",
            children: [el("label", { class: "song-explorer__box", children: [icon("search"), search] }), now],
          }),
          el("div", {
            class: "song-explorer__bar",
            children: [
              quick,
              el("label", { class: "library-filter", children: [fits, localize(el("span"), (m) => m.player.library.panel.fits)] }),
            ],
          }),
          el("div", {
            class: "song-explorer__status",
            children: [
              count,
              measuring,
              clearButton,
              railToggle,
              el("label", { class: "song-explorer__sort", children: [localize(el("span"), (m) => m.player.library.panel.sort.label), sort] }),
            ],
          }),
        ],
      }),
      el("div", { class: "song-explorer__main", children: [rail, results] }),
    ],
  });

  /** Takes every filter off. The sort stays, since it hides nothing. */
  function clear(): void {
    view.query = search.value = "";
    view.tags = [];
    view.fits = fits.checked = false;
  }

  function toggleTag(key: TagKey): void {
    view.tags = view.tags.includes(key) ? view.tags.filter((other) => other !== key) : [...view.tags, key];
    redraw();
  }

  /** A filter chip for the tag `key`: a small one on a card, or one of the head or the rail, with `total` when it has one. */
  function tagButton(key: TagKey, small: boolean, total?: number): HTMLButtonElement {
    const kind = tagKind(key);
    const name = tagName(key);
    const node = el("button", {
      class: small ? "tag tag--small" : "tag",
      attrs: { type: "button", "data-kind": kind, "aria-pressed": String(view.tags.includes(key)) },
      on: { click: () => toggleTag(key) },
      children: [
        el("span", { class: "tag__dot", attrs: { "aria-hidden": "true" } }),
        el("span", { class: "tag__label", children: small ? marked(name, words) : [name] }),
        total === undefined ? null : el("span", { class: "tag__count", attrs: { "aria-hidden": "true" }, text: String(total) }),
      ],
    });
    if (kind === "level") node.dataset.level = tagId(key);
    if (small) {
      node.tabIndex = -1;
      node.title = say().tagTitle(name);
    }
    return node;
  }

  /** Reads the catalog into the index, then builds the filter chips from the tags it found. */
  function reindex(): void {
    const path = beginnerPath(songs);
    steps = new Map(path.map((song, i) => [song.file, i + 1]));
    entries = songEntries(songs);
    entryOf = new Map(entries.flatMap((entry) => entry.versions.map((song) => [song, entry] as const)));
    pathSongs = new Set(path.map((song) => entryOf.get(song))).size;
    const listed = new Map(songs.flatMap((song) => (song.skills === undefined ? [] : [[song.file, song.skills] as const])));
    const context = { path: new Set(steps.keys()), skills: (file: string) => listed.get(file) ?? memory.skills(file) };
    /** How many songs carry each tag. A song carries a tag when one of its versions does. */
    const totals = new Map<TagKey, number>();
    index = new Map();
    byId = new Map(uploads.map((upload) => [upload.id, { id: upload.id, title: titleOf(upload.name), upload }]));
    for (const entry of entries) {
      const carried = new Set<TagKey>();
      for (const song of entry.versions) {
        const tags = songTags(song, context);
        for (const key of tags) carried.add(key);
        index.set(song, { id: idOf(song), tags: new Set(tags), text: tags.map(tagName).join(" ") });
        byId.set(idOf(song), { id: idOf(song), title: songTitle(song), song });
      }
      for (const key of carried) totals.set(key, (totals.get(key) ?? 0) + 1);
    }

    const keysOf: Record<TagKind, TagKey[]> = {
      level: LEVELS.map((id) => tagKey("level", id)),
      yours: YOURS.map((id) => tagKey("yours", id)),
      collection: [...COLLECTIONS, ...SETS].map((id) => tagKey("collection", id)),
      style: STYLES.map((id) => tagKey("style", id)),
      skill: SKILLS.map((skill) => tagKey("skill", skill.id)),
      composer: [...totals.keys()].filter((key) => tagKind(key) === "composer").sort((a, b) => totals.get(b)! - totals.get(a)!),
    };
    filterButtons.clear();
    const group = (kind: TagKind): HTMLElement | null => {
      const keys = keysOf[kind].filter((key) => kind === "yours" || totals.has(key));
      if (keys.length === 0) return null;
      const chips = keys.map((key, i) => {
        const chip = tagButton(key, false, totals.get(key));
        if (kind === "composer" && i >= COMPOSERS_SHOWN) chip.dataset.extra = "";
        filterButtons.set(key, chip);
        return chip;
      });
      const name = say().kinds[kind];
      const box = el("div", {
        class: "tag-group",
        attrs: { role: "group", "aria-label": name, "data-kind": kind },
        children: [el("span", { class: "tag-group__name", attrs: { "aria-hidden": "true" }, text: name }), el("div", { class: "tag-group__chips", children: chips })],
      });
      const hidden = keys.length - COMPOSERS_SHOWN;
      if (kind === "composer" && hidden > 0) {
        const more = el("button", {
          class: "tag-group__more",
          attrs: { type: "button", "aria-expanded": "false" },
          text: say().more(hidden),
          on: {
            click: () => {
              const open = box.toggleAttribute("data-all");
              more.setAttribute("aria-expanded", String(open));
              more.textContent = open ? say().fewer : say().more(hidden);
            },
          },
        });
        box.append(more);
      }
      return box;
    };
    quick.replaceChildren(...QUICK_KINDS.flatMap((kind) => group(kind) ?? []));
    rail.replaceChildren(...(["yours", "collection", "style", "skill", "composer"] as const).flatMap((kind) => group(kind) ?? []));
  }

  /** Sets which filter chips are pressed, and what the head says of the filters and the open song. */
  function syncFilters(): void {
    for (const [key, chip] of filterButtons) chip.setAttribute("aria-pressed", String(view.tags.includes(key)));
    const inRail = view.tags.filter((key) => !QUICK_KINDS.includes(tagKind(key))).length;
    railLabel.textContent = inRail === 0 ? say().filters : say().filtersOn(inRail);
    railToggle.setAttribute("aria-expanded", String(view.rail));
    rail.toggleAttribute("data-open", view.rail);
    clearButton.hidden = view.query.trim() === "" && view.tags.length === 0 && !view.fits;
    const item = current === undefined ? undefined : byId.get(current);
    now.hidden = item === undefined;
    nowTitle.textContent = item === undefined ? "" : say().nowPlayingTitle(item.title);
    measuring.hidden = !(view.sort === "length" && measurer.waiting > 0);
  }

  /** The length of the song `id` in seconds, from its catalog row or else as measured. */
  const lengthOf = (id: string): number | undefined => byId.get(id)?.song?.seconds ?? memory.length(id);
  const learnLength = (id: string, seconds: number) => {
    memory.setLength(id, seconds);
    for (const node of results.querySelectorAll<HTMLElement>(".song-card__length")) {
      if (node.dataset.id === id) node.textContent = formatLength(memory.length(id)!);
    }
  };
  const measurer = createMeasurer(learnLength, () => {
    if (view.sort === "length" && element.isConnected) draw(true);
    else syncFilters();
  });
  /** Measures a card's song once the card comes into view. */
  const seen =
    typeof IntersectionObserver === "undefined" || saveData
      ? undefined
      : new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;
              seen!.unobserve(entry.target);
              const item = byId.get((entry.target as HTMLElement).dataset.id ?? "");
              if (item !== undefined && lengthOf(item.id) === undefined) measurer.want(item.id, () => read(item));
            }
          },
          { root: results },
        );

  /** Draws a preview button as the previewer's state asks. */
  const paintPreview = (node: HTMLButtonElement) => {
    const state = previewer.state?.id === node.dataset.id ? previewer.state : undefined;
    node.dataset.state = state?.phase ?? "idle";
    node.setAttribute("aria-label", state === undefined ? say().preview.start : say().preview.stop);
    node.querySelector(".icon")!.replaceWith(icon(state?.phase === "playing" ? "pause" : "play"));
    if (state?.phase !== "playing") return;
    node.style.setProperty("--preview-ms", `${state.ms}ms`);
    node.style.setProperty("--preview-at", `${Math.round(state.startedAt - performance.now())}ms`);
  };
  const previewer = createPreviewer({
    engine,
    pause: () => actions.pause(),
    failed: (id) => actions.toast(say().preview.failed(byId.get(id)?.title ?? "")),
    measured: learnLength,
    changed: () => results.querySelectorAll<HTMLButtonElement>(".song-card__preview").forEach(paintPreview),
  });

  /** Shows the version `row` on every card of the song `entry`, as the learner picked it on the card `from`. */
  function pick(entry: SongEntry, row: CatalogSong, from: HTMLElement): void {
    if (entry.versions.some((song) => idOf(song) === previewer.state?.id)) previewer.stop();
    picks.set(entry.key, row.file);
    const at = result.findIndex((song) => entryOf.get(song) === entry);
    if (at !== -1) result[at] = row;
    for (const node of results.querySelectorAll<HTMLElement>(".song-card")) {
      if (node.dataset.song !== entry.key) continue;
      const next = card(byId.get(idOf(row))!, node.closest('[data-section="path"]') !== null);
      seen?.unobserve(node);
      node.replaceWith(next);
      if (node === from) next.querySelector<HTMLElement>('.song-step[aria-pressed="true"]')!.focus({ preventScroll: true });
    }
  }

  /** The card of `item`. With `onPath`, the card shows the version's place on the beginner path. */
  function card(item: Item, onPath = false): HTMLLIElement {
    const { song, upload, id } = item;
    const entry = song === undefined ? undefined : entryOf.get(song)!;
    const versions = entry === undefined || entry.versions.length < 2 ? [] : entry.versions;
    const step = song === undefined || !onPath ? undefined : steps.get(song.file);
    // A song with versions takes its title from the first, so the card reads the same whichever shows.
    const lead = versions[0] ?? song;
    const title = lead === undefined ? item.title : lead.rarity === undefined ? lead.title : (lead.piece ?? lead.title);
    const by = lead === undefined ? upload!.name : [composerOf(lead.composer), lead.rarity === undefined ? lead.piece : null].filter(Boolean).join(" · ");
    const length = lengthOf(id);
    const ids = versionIds(item);
    const songKey = entry?.key ?? id;

    const star = el("button", {
      class: "song-card__star",
      attrs: { type: "button", "aria-label": say().favourite.label, "aria-pressed": String(ids.some((one) => memory.isFavourite(one))), title: say().favourite.title(title) },
      on: {
        click: () => {
          const on = !ids.some((one) => memory.isFavourite(one));
          if (on) memory.setFavourite(id, true);
          else for (const one of ids) memory.setFavourite(one, false);
          for (const other of results.querySelectorAll<HTMLElement>(".song-card__star")) {
            if (other.closest<HTMLElement>(".song-card")!.dataset.song === songKey) other.setAttribute("aria-pressed", String(on));
          }
        },
      },
      children: [icon("star")],
    });
    /** The head of the card: a step per version, or the one difficulty, or that the file is the learner's. */
    const head: HTMLElement =
      versions.length > 0
        ? el("div", {
            class: "song-card__steps",
            attrs: { role: "group", "aria-label": say().kinds.level },
            children: versions.map((row) => {
              const name = row.rarity === undefined ? originalName() : rarityName(row.rarity);
              const tagline = row.rarity === undefined ? originalTagline() : rarityTagline(row.rarity);
              return el("button", {
                class: "song-step",
                attrs: {
                  type: "button",
                  "aria-label": name,
                  "aria-pressed": String(row === song),
                  "data-level": row.rarity === undefined ? "original" : levelOf(row.difficulty),
                  title: t().player.library.rarity.stepTitle(name, tagline),
                },
                on: { click: (event) => pick(entry!, row, (event.currentTarget as HTMLElement).closest<HTMLElement>(".song-card")!) },
                children: row === song ? [el("span", { class: "tag__dot", attrs: { "aria-hidden": "true" } }), el("span", { class: "song-step__name", text: name })] : [name.charAt(0)],
              });
            }),
          })
        : el("span", {
            class: "song-card__kicker",
            attrs: song === undefined ? {} : { "data-level": levelOf(song.difficulty) },
            children: song === undefined ? [say().yours.upload] : [el("span", { class: "tag__dot", attrs: { "aria-hidden": "true" } }), tagName(tagKey("level", levelOf(song.difficulty)))],
          });
    const preview = el("button", {
      class: "song-card__preview",
      attrs: { type: "button", "data-id": id, title: say().preview.title(item.title) },
      on: { click: () => void previewer.toggle(id, () => read(item)) },
      children: [el("span", { class: "song-card__sweep", attrs: { "aria-hidden": "true" } }), icon("play")],
    });
    paintPreview(preview);

    // A tag the query matched comes first, so the learner sees why the card is here.
    const shown = song === undefined ? [] : [...index.get(song)!.tags].filter((key) => tagKind(key) !== "level");
    const matched = (key: TagKey) => Number(words.some((word) => foldText(tagName(key)).includes(word)));
    shown.sort((a, b) => matched(b) - matched(a));

    const node = el("li", {
      class: "song-card",
      attrs: { "data-id": id, "data-song": songKey, ...(id === current ? { "aria-current": "true" } : {}) },
      children: [
        el("div", {
          class: "song-card__top",
          children: [head, star],
        }),
        el("button", {
          class: "song-card__open library-song",
          attrs: { type: "button", "aria-label": item.title, title: item.title },
          on: { click: () => (upload !== undefined ? actions.openUpload(upload) : actions.open(song!)) },
        }),
        el("div", {
          class: "song-card__text",
          children: [
            el("span", { class: "song-card__title library-title", children: marked(title, words) }),
            el("span", { class: "song-card__by", children: marked(by, words) }),
          ],
        }),
        el("div", {
          class: "song-card__meta",
          children: [
            song === undefined ? null : el("span", { class: "song-card__meter", attrs: { "aria-hidden": "true", style: `--level: ${song.difficulty}` }, children: [el("i")] }),
            step === undefined ? null : el("span", { class: "song-card__step", text: say().step(step) }),
            el("span", { class: "song-card__length", attrs: { "data-id": id, title: say().lengthTitle }, text: length === undefined ? "" : formatLength(length) }),
            song === undefined ? null : el("span", { class: "library-license", attrs: { title: song.credit }, text: song.license }),
          ],
        }),
        el("div", {
          class: "song-card__foot",
          children: [
            el("div", { class: "song-card__tags", children: shown.map((key) => tagButton(key, true)) }),
            upload === undefined ? null : namedButton(say().own.export, say().own.exportTitle(item.title), "ghost", () => actions.exportUpload(upload)),
            upload === undefined ? null : namedButton(say().own.delete, say().own.deleteTitle(item.title), "ghost", () => actions.removeUpload(upload)),
            preview,
          ],
        }),
      ],
    });
    if (length === undefined) seen?.observe(node);
    return node;
  }

  /** A section named by `name`, with its cards in a grid and an optional line and action in its head. */
  function section(kind: string, name: string, cards: Node[], extra: (Node | null)[] = []): HTMLElement {
    return el("section", {
      class: "song-section",
      attrs: { "aria-label": name, "data-section": kind },
      children: [
        el("div", { class: "song-section__head", children: [el("h3", { class: "song-section__name", text: name }), ...extra] }),
        cards.length === 0 ? null : el("ul", { class: "song-grid", children: cards }),
      ],
    });
  }

  /** Draws the next `n` cards of the result, and hides the sentinel once all are drawn. */
  function more(n: number): void {
    const next = result.slice(drawn, drawn + n);
    grid.append(...next.map((song) => card(byId.get(idOf(song))!)));
    drawn += next.length;
    view.shown = Math.max(CHUNK, drawn);
    sentinel.hidden = drawn >= result.length;
    // Watching anew makes the observer report a sentinel that is still near, so the next chunk follows.
    reach?.unobserve(sentinel);
    if (!sentinel.hidden) reach?.observe(sentinel);
  }
  const reach =
    typeof IntersectionObserver === "undefined"
      ? undefined
      : new IntersectionObserver((entries) => entries.some((entry) => entry.isIntersecting) && more(CHUNK), { root: results, rootMargin: "600px" });

  /** A change the learner made to the view: the cards start again from the top. */
  function redraw(): void {
    view.scroll = 0;
    view.shown = CHUNK;
    draw(false);
  }

  /** Draws the head's state and the cards. With `keep`, as many cards as before and the same scroll. */
  function draw(keep: boolean, enter = false): void {
    if (failed) return;
    const m = say();
    words = queryWords(view.query);
    const fit = view.fits ? { fits: normalizeRange(settings.get("keyboardFirstNote"), settings.get("keyboardLastNote")) } : {};
    const found = new Set(filterSongs(songs, { ...NO_FILTER, query: view.query, ...fit, text: (song) => index.get(song)!.text }));
    const passes = (song: CatalogSong) => found.has(song) && matchesTags((key) => has(byId.get(idOf(song))!, key), view.tags);
    // A song passes when one of its versions does, and its card shows a version that passed.
    const passing = entries.flatMap((entry) => {
      const open = entry.versions.filter(passes);
      return open.length === 0 ? [] : [shownOf(entry, open)];
    });
    const length = (song: CatalogSong) => song.seconds ?? memory.length(idOf(song));
    result = sortSongs(passing, view.sort, { length, played: (song) => playedAt(byId.get(idOf(song))!) });
    if (view.sort === "length") for (const song of result) if (length(song) === undefined) measurer.want(idOf(song), () => fetchSong(song.file));
    const own = uploads
      .map((upload) => byId.get(upload.id)!)
      .filter((item) => words.every((word) => foldText(item.upload!.name).includes(word)) && matchesTags((key) => has(item, key), view.tags));
    const plain = words.length === 0 && view.tags.length === 0 && !view.fits;
    count.textContent = m.count(result.length);
    syncFilters();

    seen?.disconnect();
    const parts: Node[] = [];
    /** The first `LEAD` songs that `ids` name, each once, as the cards of the versions they show. */
    const cardsOf = (ids: readonly string[]) => {
      const shown = new Map<string, Item>();
      for (const id of ids) {
        const item = byId.get(id);
        if (item === undefined) continue;
        const entry = item.song === undefined ? undefined : entryOf.get(item.song)!;
        const key = entry?.key ?? id;
        if (!shown.has(key)) shown.set(key, entry === undefined ? item : byId.get(idOf(shownOf(entry)))!);
      }
      return [...shown.values()].slice(0, LEAD).map((item) => card(item));
    };
    if (plain) {
      const played = cardsOf(memory.played);
      if (played.length > 0) parts.push(section("continue", m.sections.continue, played));
      const starred = cardsOf(memory.favourites);
      if (starred.length > 0) parts.push(section("favourites", m.sections.favourites, starred));
    }
    if (uploads.length === 0 ? plain : own.length > 0) {
      const region = section("own", m.own.heading, own.map((item) => card(item)), [
        localButton((x) => x.player.library.panel.own.addFiles.label, (x) => x.player.library.panel.own.addFiles.title, () => actions.addFiles()),
        localButton((x) => x.player.library.panel.own.addFolder.label, (x) => x.player.library.panel.own.addFolder.title, () => actions.addFolder()),
        uploads.length === 0 ? el("p", { class: "library-hint", text: m.own.hint }) : null,
      ]);
      region.classList.add("library-own");
      parts.push(region);
    }
    if (plain && steps.size > 0) {
      // The next steps the learner has not played, one per song, so no song shows twice.
      const ahead = new Map<SongEntry, CatalogSong>();
      for (const song of beginnerPath(songs)) {
        const entry = entryOf.get(song)!;
        if (memory.playedAt(idOf(song)) === undefined && !ahead.has(entry)) ahead.set(entry, song);
      }
      const next = [...ahead.values()].slice(0, LEAD);
      const all = button({
        label: m.sections.pathAll(pathSongs),
        size: "small",
        onClick: () => {
          view.tags = [tagKey("collection", "path")];
          view.sort = sort.value = "difficulty";
          redraw();
        },
      });
      parts.push(
        section("path", m.sections.path, next.map((song) => card(byId.get(idOf(song))!, true)), [
          el("p", { class: "song-section__lead", text: m.sections.pathLead }),
          all,
        ]),
      );
    }
    grid = el("ul", { class: "song-grid" });
    drawn = 0;
    if (result.length > 0) {
      const all = section("all", plain ? m.sections.all : m.sections.results, []);
      all.append(grid);
      parts.push(all);
    } else if (own.length === 0 && !plain && songs.length > 0) {
      parts.push(
        el("div", {
          class: "song-explorer__empty",
          children: [
            mascot({ pose: "portrait", alt: "", size: "large" }),
            el("h3", { text: m.empty.title }),
            el("p", { text: m.empty.message }),
            button({ label: m.clear, variant: "primary", onClick: () => (clear(), redraw(), search.focus()) }),
          ],
        }),
      );
    }
    results.toggleAttribute("data-enter", enter);
    results.replaceChildren(...parts, sentinel);
    more(keep ? view.shown : CHUNK);
    results.scrollTop = keep ? view.scroll : 0;
    save();
  }

  /** Brings the open song's card into view, drawing up to it first. With `focus`, the card takes the focus. */
  function reveal(focus = false): void {
    if (current === undefined) return;
    const box = results.getBoundingClientRect();
    /** How far a card lies outside the cards' viewport, in pixels, or 0 when it shows whole. */
    const away = (node: HTMLElement) => {
      const own = node.getBoundingClientRect();
      return Math.max(0, box.top - own.top, own.bottom - box.bottom);
    };
    const find = () => [...results.querySelectorAll<HTMLElement>(".song-card")].filter((node) => node.dataset.id === current);
    let nodes = find();
    // A card of the song that shows already wins. Otherwise its card in the result is drawn, and the nearest one is taken.
    if (!nodes.some((node) => away(node) === 0)) {
      const at = result.findIndex((song) => idOf(song) === current);
      if (at >= drawn) more(at + 1 - drawn);
      nodes = find();
    }
    const node = nodes.sort((a, b) => away(a) - away(b))[0];
    if (node === undefined) return;
    if (away(node) > 0) node.scrollIntoView({ block: "center" });
    if (focus) node.querySelector<HTMLElement>(".song-card__open")!.focus({ preventScroll: true });
  }

  /** Reads the guide of each song of ours whose rows lack skills, one after another, and keeps them. */
  async function loadSkills(): Promise<void> {
    const firsts = new Map<string, CatalogSong>();
    for (const song of songs) if (song.song !== undefined && song.skills === undefined && !firsts.has(song.song)) firsts.set(song.song, song);
    const missing = [...firsts.values()].filter((song) => memory.skills(song.file) === undefined);
    if (missing.length === 0 || saveData) return;
    for (const song of missing) {
      const guide = await loadGuide(song);
      for (const version of Object.values(guide?.versions ?? {})) memory.setSkills(version.file, version.skills);
    }
    reindex();
    if (element.isConnected) draw(true);
  }

  results.addEventListener("scroll", () => {
    if (element.isConnected) view.scroll = results.scrollTop;
  });
  // The arrow keys move between the cards by where each card sits, so they follow the grid's columns.
  results.addEventListener("keydown", (event) => {
    const from = (event.target as HTMLElement).closest<HTMLElement>(".song-card__open");
    if (from === null || !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
    const opens = [...results.querySelectorAll<HTMLElement>(".song-card__open")];
    const at = opens.indexOf(from);
    const box = from.getBoundingClientRect();
    const sameColumn = (node: HTMLElement) => Math.abs(node.getBoundingClientRect().left - box.left) < box.width / 2;
    const below = (node: HTMLElement) => node.getBoundingClientRect().top > box.top + 1;
    const above = (node: HTMLElement) => node.getBoundingClientRect().top < box.top - 1;
    const to =
      event.key === "ArrowRight"
        ? opens[at + 1]
        : event.key === "ArrowLeft"
          ? opens[at - 1]
          : event.key === "ArrowDown"
            ? (opens.slice(at + 1).find((node) => below(node) && sameColumn(node)) ?? opens.slice(at + 1).find(below))
            : (opens.slice(0, at).reverse().find((node) => above(node) && sameColumn(node)) ?? opens.slice(0, at).reverse().find(above));
    event.preventDefault();
    if (to === undefined) return event.key === "ArrowUp" || event.key === "ArrowLeft" ? search.focus() : undefined;
    to.focus();
  });
  const savePage = () => {
    save();
    memory.flush();
  };
  if (typeof window !== "undefined") window.addEventListener("pagehide", savePage);

  const unsubscribe = settings.subscribe((id) => {
    if (view.fits && (id === "keyboardFirstNote" || id === "keyboardLastNote")) draw(true);
  });
  // A change of locale names the tags anew, and draws the cards in it. An error in their place stays.
  const stopLocale = onLocale(() => {
    reindex();
    draw(true);
  });

  return {
    element,
    setSongs(next) {
      songs = next;
      failed = false;
      reindex();
      draw(true);
    },
    setUploads(next) {
      uploads = next;
      reindex();
      draw(true);
    },
    setError(message) {
      failed = true;
      count.textContent = "";
      results.replaceChildren(el("p", { class: "library-error", text: message }));
    },
    setCurrent(id) {
      current = id;
      unpickCurrent();
      if (id !== undefined) memory.play(id);
      previewer.stop();
      if (element.isConnected) draw(true);
    },
    shown() {
      draw(true, true);
      reveal();
      element.closest("dialog")?.addEventListener(
        "close",
        () => {
          previewer.stop();
          save();
        },
        { once: true },
      );
      // A touch screen keeps its keyboard down until the learner asks for the search.
      if (!matchMedia("(pointer: coarse)").matches) search.focus({ preventScroll: true });
      if (!skillsAsked) void loadSkills();
      skillsAsked = true;
    },
    dispose() {
      previewer.stop();
      memory.flush();
      unsubscribe();
      stopLocale();
      seen?.disconnect();
      reach?.disconnect();
      window.removeEventListener("pagehide", savePage);
      element.remove();
    },
  };
}
