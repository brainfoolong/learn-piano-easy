/**
 * The body of the Data page at `data/`: it saves the learner's whole backup, and restores one.
 *
 * Its parts, top to bottom: a lead that names what this browser keeps, the card that saves, the card
 * that restores, and in Chromium browsers the folder card. A status line under them says what each
 * did. The page's frame and heading are built by `src/site/views.ts`, so the heading shows before this
 * chunk loads.
 *
 * - **The save card** shows when the last backup was saved, from `lastBackup`, read again on each show.
 *   A learner without a synced folder then sees how old their copy is.
 * - **The restore asks first.** A dialog says that progress, songs and scores merge, and that settings
 *   take the file's values. A file that is none of ours changes nothing, and the status line says so.
 * - **A restore reloads the page once it has written.** The settings, the tracks, the song memory and
 *   the fingers keep their state in memory, and a reload makes every view read the restored values.
 *   A note in `sessionStorage` survives the reload, so the page then says the restore is done.
 * - **The folder card** shows the state of `src/data/folder-sync.ts`: connect, reconnect, the folder's
 *   last write, or the question when the folder holds data this browser did not write. The question
 *   offers the folder's restore first. A browser without `showDirectoryPicker` shows no folder card.
 *
 * Decisions, and what each costs:
 * - **The stores open on each action,** through `browserStores`, so a visit that saves nothing opens
 *   no database. The cost is one open per click.
 * - **A store that refuses a write ends the restore with a line that says so.** Parts written before it
 *   stay, and the file still holds every part, so a second try loses nothing.
 */
import "./data-view.css";
import { messagesOf, type Locale } from "../i18n/locale";
import type { SettingsStore } from "../settings/store";
import { button } from "../ui/components/button";
import { dialog } from "../ui/components/dialog";
import { el } from "../ui/dom";
import { pickFile } from "../ui/files";
import { type Signal, signal } from "../ui/signal";
import { browserStores, lastBackup, pageStorage, saveBackup } from "./backup-file";
import {
  connectFolder,
  disconnectFolder,
  folderState,
  folderSupported,
  type FolderState,
  onFolderState,
  reconnectFolder,
  replaceFolder,
  restoreFromFolder,
  startFolderSync,
} from "./folder-sync";
import { restoreFile } from "./parts";

/** The `sessionStorage` key that carries the news of a restore across its reload. */
const RESTORED_KEY = "learn-piano-easy.dataRestored";

/** The Data page's body. */
export interface DataBody {
  element: HTMLElement;
  /** Reads the last backup's age again, and says a restore that the last load finished. */
  shown(): void;
}

/** Whether the times `a` and `b` fall on the same day of the learner's calendar. */
function sameDay(a: number, b: number): boolean {
  return new Date(a).toDateString() === new Date(b).toDateString();
}

/** What the folder card borrows from the page: the busy signal, the runner, the status line and the reload after a restore. */
interface PageTools {
  busy: Signal<boolean>;
  run: (work: () => Promise<void>) => Promise<void>;
  say: (text: string) => void;
  reloadRestored: () => void;
}

/** The card that connects a folder and shows its sync. Its buttons are made once, and each state shows its own. */
function folderCard(locale: Locale, settings: SettingsStore, page: PageTools): HTMLElement {
  const t = messagesOf(locale).data.folder;
  const { busy, run, say } = page;
  const line = el("p", { class: "data__age" });
  const more = el("p", { class: "data__age" });
  const actions = el("div", { class: "data__actions" });

  /** Runs `work`, and stays quiet when the learner closed the browser's folder picker. */
  const act = (work: () => Promise<void>) => () =>
    void run(async () => {
      try {
        await work();
      } catch (error) {
        if (!(error instanceof DOMException && error.name === "AbortError")) throw error;
      }
    });

  const connect = button({ label: t.connect, variant: "primary", busy, onClick: act(() => connectFolder(settings)) });
  const reconnect = button({ label: t.reconnectAction, variant: "primary", icon: "rotate-ccw", busy, onClick: act(() => reconnectFolder(settings)) });
  const restore = button({
    label: t.restoreAction,
    variant: "primary",
    icon: "rotate-ccw",
    busy,
    onClick: act(async () => {
      if (await restoreFromFolder()) page.reloadRestored();
      else say(t.gone);
    }),
  });
  const replace = button({
    label: t.replaceAction,
    busy,
    onClick: act(async () => {
      await replaceFolder();
      say(t.replaced);
    }),
  });
  const disconnect = button({ label: t.disconnect, variant: "ghost", icon: "x", busy, onClick: act(disconnectFolder) });

  const when = (at: number) =>
    new Intl.DateTimeFormat(locale, sameDay(at, Date.now()) ? { timeStyle: "short" } : { dateStyle: "medium", timeStyle: "short" }).format(at);

  const show = (state: FolderState) => {
    const shown = (first: string, second: string, ...buttons: HTMLElement[]) => {
      line.textContent = first;
      line.hidden = first === "";
      more.textContent = second;
      more.hidden = second === "";
      actions.replaceChildren(...buttons);
    };
    if (state.kind === "off") return shown("", "", connect);
    if (state.kind === "starting") return shown(t.starting, "");
    if (state.kind === "reconnect") return shown(t.reconnect(state.name), "", reconnect, disconnect);
    const sync = state.sync;
    if (sync.kind === "asking") {
      const from = sync.written === undefined ? "" : t.askingFrom(new Intl.DateTimeFormat(locale, { dateStyle: "long", timeStyle: "short" }).format(sync.written));
      return shown(t.asking(state.name), from, restore, replace, disconnect);
    }
    if (sync.kind === "failed") return shown(t.failed, "", reconnect, disconnect);
    return shown(t.synced(state.name), sync.kind === "synced" ? t.written(when(sync.written)) : t.waiting, disconnect);
  };

  show(folderState());
  onFolderState(show);
  void startFolderSync(settings).then(() => show(folderState()));

  return el("section", {
    class: "data__card",
    attrs: { "aria-label": t.heading },
    children: [el("h2", { class: "data__heading", text: t.heading }), el("p", { class: "data__text", text: t.text }), line, more, actions],
  });
}

/** The body of the Data page in `locale`, which saves and restores with `settings` as the settings store. */
export function dataBody(locale: Locale, settings: SettingsStore): DataBody {
  const t = messagesOf(locale).data;
  const busy = signal(false);
  const status = el("p", { class: "data__status", attrs: { role: "status" } });
  const age = el("p", { class: "data__age" });
  const say = (text: string) => {
    status.textContent = text;
  };

  const showAge = () => {
    const at = lastBackup(pageStorage());
    const date = at === undefined ? "" : new Intl.DateTimeFormat(locale, { dateStyle: "long" }).format(at);
    age.textContent = at === undefined ? t.save.never : sameDay(at, Date.now()) ? t.save.today : t.save.on(date);
  };

  /** Runs `work` with the buttons busy, and says `failed` when it rejects. */
  const run = async (work: () => Promise<void>) => {
    busy.set(true);
    try {
      await work();
    } catch {
      say(t.failed);
    } finally {
      busy.set(false);
    }
  };

  const save = () =>
    void run(async () => {
      await saveBackup(await browserStores(settings));
      showAge();
      say(t.save.done);
    });

  /** Reloads the page after a restore, with a note that makes the reloaded page say so. */
  const reloadRestored = () => {
    try {
      sessionStorage.setItem(RESTORED_KEY, "1");
    } catch {
      // Without the note, the reloaded page only lacks its line.
    }
    location.reload();
  };

  const restore = (text: string) =>
    void run(async () => {
      say(t.reading);
      const result = await restoreFile(await browserStores(settings), text);
      if (result === undefined) return say(t.notOurs);
      reloadRestored();
    });

  const ask = (file: File) => {
    const confirm = dialog({
      title: t.ask.title,
      body: el("div", { class: "data__ask", children: [el("p", { text: t.ask.merge }), el("p", { text: t.ask.replace })] }),
      closeLabel: t.ask.close,
      actions: [
        button({ label: t.ask.cancel, onClick: () => confirm.close() }),
        button({
          label: t.ask.confirm,
          variant: "primary",
          onClick: () => {
            confirm.close();
            void file.text().then(restore, () => say(t.notOurs));
          },
        }),
      ],
    });
    confirm.open();
  };

  const card = (heading: string, text: string, extra: Node[], action: HTMLElement) =>
    el("section", {
      class: "data__card",
      children: [el("h2", { class: "data__heading", text: heading }), el("p", { class: "data__text", text }), ...extra, el("div", { class: "data__actions", children: [action] })],
    });

  const element = el("div", {
    class: "data",
    children: [
      el("p", { class: "data__lead", text: t.lead }),
      el("div", {
        class: "data__cards",
        children: [
          card(t.save.heading, t.save.text, [age], button({ label: t.save.action, variant: "primary", icon: "file-down", busy, onClick: save })),
          card(t.restore.heading, t.restore.text, [], button({ label: t.restore.action, icon: "rotate-ccw", busy, onClick: () => pickFile(".json,application/json", ask) })),
          ...(folderSupported() ? [folderCard(locale, settings, { busy, run, say, reloadRestored })] : []),
        ],
      }),
      status,
    ],
  });

  return {
    element,
    shown() {
      showAge();
      try {
        if (sessionStorage.getItem(RESTORED_KEY) === null) return;
        sessionStorage.removeItem(RESTORED_KEY);
        say(t.restored);
      } catch {
        // A browser without `sessionStorage` never set the note.
      }
    },
  };
}
