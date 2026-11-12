/**
 * The player's shell: its actions in the site's top bar, the scene area, its dialogs and its toasts.
 *
 * The scene fills the window, and every panel floats over it, so the piano is always in view.
 * The site builds the player's bar of `src/app/player-bar.ts` before the shell loads, and the shell
 * gives its buttons their actions. *Songs* and the song's title sit in the top bar's page slot, and the
 * control bar in the bar's dock under them, so the player has one floating bar. *Guide*, *Tracks*,
 * *Settings* and *About* are its menu, which the site shows in the bar when wide and in the bar's menu
 * otherwise. Fullscreen covers the player alone, so the whole bar moves into it while it lasts.
 *
 * The bar floats at the edge opposite the piano, as `barEdge` says, and moves when `pianoPosition` or
 * the direction changes. The shell sets `--bar-height` and `--controls-height` on the player to the
 * room the bar takes at the top and at the bottom, so the panels over the scene keep clear of it.
 *
 * Every dialog is the dialog component's, wide, and one shows at a time. Escape, its close button or a
 * click on the backdrop closes it. Once the last dialog or the settings panel closes, the control bar's
 * Play button takes the focus, so Space plays and pauses again. Picking a song closes the songs dialog
 * the same way. A dialog the open settings panel opened gives the focus back to the panel. Every toast is the toast component's, in a stack of the player's
 * own, so a toast shows in fullscreen too. One toast shows at a time. A toast with an action stays
 * until it is dismissed or acted on, and any other leaves after the stack's time.
 *
 * Its texts come from the live catalog's `player.shell`. A dialog or a toast reads it as it opens. The
 * bar's labels, the demo song's title and the finger line follow each change of the live locale.
 *
 * The control bar plays the open song through the transport.
 * The demo song plays until a song opens. A sound set that fails to load says so in a toast.
 *
 * The Songs button opens the library panel in a dialog, and the bar shows the open song's title.
 * The shell fetches the catalog on start, and the opener reopens the last song when its setting is on.
 * MIDI files picked, read from a folder, or taken from the site's song inbox join the learner's uploads,
 * and the first of them opens. The inbox holds files dropped on any page and files the installed app
 * is launched with. Files from the inbox skip reopening the last song.
 *
 * A play mode from the page at `modes/` arrives through the mode inbox of `src/play-modes/modes.ts`.
 * Its song opens in place of the last one, and then its settings apply. A mode without a song keeps the
 * open one. A toast says the mode is on, and its Undo puts back every setting the mode replaced. A song
 * that fails to open applies nothing.
 *
 * Each song loads with its track settings. The Tracks button opens the tracks panel in a dialog, built
 * on its first opening and kept. Each change of a track reaches the scene, the transport's mix and
 * wait mode. Deleting an upload forgets its track settings too.
 *
 * The settings panel slides in at the side, so the scene stays in view while a setting changes. It
 * leaves the way it came, and hides once that motion ends, or at once under reduced motion. It is
 * built on its first opening, and kept while hidden, so a search and the scroll place survive a close.
 * The shell hands it the export and import actions, which use the browser's download and file picker,
 * the action that returns the camera to its preset, the picker of the background track's audio file,
 * the PDF export dialog of the open song, the keyboard range control with its learn button,
 * the MIDI device control, and the buttons that open the hotkey and key binding dialogs.
 *
 * The input bus, the MIDI devices and the audio engine are the site's services of
 * `src/site/services.ts`, so they outlive the player's page. The scene, the transport, the bus's notes
 * on the input sampler and the scene's keys, and the on-screen piano are the core of
 * `src/app/player-core.ts`. Web MIDI and the computer keyboard feed the bus as well. Wait mode
 * reads the bus and holds the transport, and it hands the transport the learner's notes, which key
 * lighting reads too. Key lighting and the metronome's MIDI clicks go to the chosen MIDI output.
 * Scored mode reads the bus too, shows its panel over the scene, and keeps each take in the history.
 * Game mode reads the bus beside it, and shows its points over the keys through the scene's `keyPoint`.
 *
 * The `playMode` setting picks what the learner does. In the player mode a song plays. Free play and
 * pitch practice pause the song, and the page's `data-play-mode` hides the control bar, the score
 * panel and the game, so each mode shows only its own panel. Free play's recording saves through a download.
 *
 * Each song loads with its fingers into the fingering editor, which the scene reads for its finger
 * labels and its selected note. A click on a note selects it, and a line at the top right names its
 * finger and the keys that change it.
 *
 * A version of ours shows a Guide button once its guide loads. The guide opens in a dialog, and its
 * practice step applies to the settings and the transport, then closes the dialog. A tricky spot's Loop
 * button loops its bar the same way. A saved take that beats the version, played whole without wait
 * mode, offers the next version in a toast.
 *
 * The loaded guide also reaches the piano. The fingering editor takes its fingers, under the learner's
 * own, and the scene takes its marks and start keys. Each song load drops the last song's guide first.
 *
 * Lesson mode serves a lesson's song step, through the request of `src/learn/song-handoff.ts`. The
 * version opens in the player mode with scored mode on, and its guide's practice step applies. A banner
 * at the top left shows the step's goal, the practice step, the accuracy to reach and a way back. A
 * saved take of the version at that accuracy ends the request with its accuracy, and offers no level up.
 * The way back ends it without a take, and the lesson moves the site back. Scored mode stays on after.
 * A request with the `sheet` view shows the sheet music and hides every track's falling notes while it
 * is in flight. Its sheet draws nothing finer than a 16th, since our versions sound each note a little
 * short. The learner's own sheet settings come back when it ends, and the tracks' settings never change.
 *
 * The sheet view lies over the stage, above the scene and below the stage's panels. It follows the
 * transport's shown song, the track settings, and the keys the input bus holds.
 *
 * The site keeps the shell once made, and `run(false)` stops it while its page hides. The song pauses,
 * the scene and the control bar draw no frames, and no key reaches the piano, the hotkeys or the
 * fingering editor. `run(true)` brings each back, and the song stays paused.
 */
import type { AudioEngine } from "../audio/engine";
import { aboutPage } from "./about";
import { createPdfDialog } from "../export/pdf-dialog";
import { createCacheManager } from "../pwa/cache-manager";
import { createDeviceControl } from "../input/device-control";
import { attachGameMode } from "../game/game-mode";
import { attachFreePlay } from "../input/free-play";
import { createKeyBindingDialog, keyBindingsControl } from "../input/key-binding-dialog";
import { attachKeyLighting } from "../input/key-lighting";
import { attachKeyboard } from "../input/keyboard";
import { learnRangeButton } from "../input/learn-range";
import { accuracy, beats, openHistory } from "../input/history";
import { attachPitchPractice } from "../input/pitch-practice";
import { attachNoteScroll } from "../input/note-scroll";
import { attachScoring } from "../input/scoring";
import { attachWaitMode } from "../input/wait-mode";
import { createRangeControl } from "../keyboard/range-control";
import type { Guide } from "../library/guide";
import { guideFingers, pianoGuide } from "../library/guide-on-piano";
import { applyStep, createGuidePanel, levelUpOf, loadGuide, loopBar, stepSummary } from "../library/guide-panel";
import { createLibraryPanel, type LibraryActions } from "../library/library-panel";
import { moveStoredSongs } from "../library/moved-songs";
import { createSongOpener, loadCatalog, songIdOf } from "../library/open-song";
import { type CatalogSong, songTitle as rowTitle } from "../library/search";
import { DEMO_SONG_ID, TrackState, TrackStore } from "../library/track-settings";
import { createTracksPanel, type TracksPanel } from "../library/tracks-panel";
import { pickFiles, pickFolder, Uploads } from "../library/uploads";
import { SongParser } from "../midi/parse";
import type { Song } from "../midi/song";
import { createControlBar } from "../play/control-bar";
import { createHotkeyDialog, hotkeysControl } from "../play/hotkey-dialog";
import { demoSong } from "../render/scene";
import { songHandoff, type SongRequest } from "../learn/song-handoff";
import { createSettingsPanel, type SettingsPanel } from "../settings/panel";
import type { SettingValue } from "../settings/schema";
import type { SettingsStore } from "../settings/store";
import { SheetView } from "../sheet/sheet-view";
import { attachFingeringEditor, FingerStore, FingeringEditor } from "../theory/fingering-editor";
import { noteName } from "../theory/note-names";
import { audioService, inputService } from "../site/services";
import { songInbox } from "../site/song-inbox";
import { applyMode, applyPatch, modeInbox, type PlayMode } from "../play-modes/modes";
import { liveLocale, localize, onLocale, t } from "../i18n/live";
import { hrefOf } from "../site/site-bar";
import { dialog, type Dialog } from "../ui/components/dialog";
import { toasts } from "../ui/components/toast";
import { button, el } from "../ui/dom";
import { saveFile as download } from "../ui/files";
import type { PlayerBar } from "./player-bar";
import { createPlayerCore } from "./player-core";
import "./player.css";
import "./shell.css";

export interface Shell {
  /** Shows a wide dialog with a title and body. It replaces any open dialog. */
  openDialog(title: string, body: Node): void;
  closeDialog(): void;
  /** Shows a short message at the bottom, with an optional action button. It replaces the last one. */
  toast(message: string, action?: { label: string; run: () => void }): void;
  /** Runs the player while its page shows. Stopping pauses the song, and stops its frames and its keys. */
  run(on: boolean): void;
}

/** How long a toast with an action stays, in milliseconds: the longest a timer takes, so in effect until dismissed. */
const ACTION_TOAST_MS = 2_147_483_647;

/** Makes the player in `root`, which takes over `bar`, the bar the site already shows. */
export function createShell(root: HTMLElement, settings: SettingsStore, bar: PlayerBar): Shell {
  const stage = el("div", { class: "stage" });
  const stack = toasts();
  let openedDialog: Dialog | undefined;
  let dropToast: (() => void) | undefined;
  let panel: SettingsPanel | undefined;
  const { bus: input, midi } = inputService(settings);
  const audio = audioService(settings);
  const engine = audio.engine;
  let running = true;
  let stopKeys: (() => void) | undefined;

  /** Whether the settings panel shows and is not on its way out. */
  const settingsOpen = () => panel !== undefined && !panel.element.hidden && !panel.element.classList.contains("is-leaving");
  // The panel leaves with its motion and hides once it ends. Without the motion, as under reduced motion, it hides at once.
  const closeSettings = () => {
    if (panel === undefined || !settingsOpen()) return;
    const element = panel.element;
    settingsButton.setAttribute("aria-expanded", "false");
    controls.focusPlay();
    element.classList.add("is-leaving");
    const hide = () => {
      element.classList.remove("is-leaving");
      element.hidden = true;
    };
    const motion = element.getAnimations().find((each) => each instanceof CSSAnimation && each.animationName === "settings-leave");
    // A reopening cancels the motion, and the panel stays.
    if (motion === undefined) hide();
    else motion.finished.then(hide, () => undefined);
  };
  const toggleSettings = () => {
    if (settingsOpen()) return closeSettings();
    panel?.element.classList.remove("is-leaving");
    if (panel === undefined) {
      const range = createRangeControl(settings, [learnRangeButton(input, settings).element]);
      panel = createSettingsPanel(settings, {
        onClose: closeSettings,
        controls: {
          ...range.fields,
          hotKeyBindings: hotkeysControl(() => shell.openDialog(t().player.shell.dialog.hotkeys, createHotkeyDialog(settings))),
          keyBindings: keyBindingsControl(() =>
            shell.openDialog(t().player.shell.dialog.keyBindings, createKeyBindingDialog(settings)),
          ),
        },
        sectionTools: { keyboard: range.tools, input: createDeviceControl(midi).element },
        actions: {
          yourData: () => {
            closeSettings();
            openDataPage(root);
          },
          resetCamera: () => scene.resetCamera(),
          bgTrackFile: () => pickBackgroundTrack(engine, settings, shell),
          pdfExportButtonGroup: () => {
            const title = songTitle.textContent ?? t().player.shell.topbar.songFallback;
            const source = { song: transport.song, title, tracks: tracks.tracks };
            const save = (bytes: Uint8Array<ArrayBuffer>, name: string) => download(bytes, name, "application/pdf");
            shell.openDialog(t().player.shell.dialog.pdf, createPdfDialog(settings, source, save));
          },
          offlineCache: () => shell.openDialog(t().player.shell.dialog.offlineFiles, createCacheManager(settings)),
        },
      });
      root.append(panel.element);
    }
    panel.element.hidden = false;
    settingsButton.setAttribute("aria-expanded", "true");
    panel.focus();
  };
  const settingsButton = bar.settings;
  bar.on("settings", toggleSettings);

  const shell: Shell = {
    openDialog(title, body) {
      shell.closeDialog();
      const opened = dialog({
        title,
        body,
        wide: true,
        closeLabel: t().player.shell.dialog.close,
        onClose: () => {
          if (openedDialog === opened) openedDialog = undefined;
          // The open settings panel keeps the focus a dialog it opened gives back, and Play takes it otherwise.
          if (openedDialog === undefined && !settingsOpen()) controls.focusPlay();
        },
      });
      openedDialog = opened;
      opened.open();
    },
    closeDialog() {
      openedDialog?.close();
      openedDialog = undefined;
    },
    toast(message, action) {
      dropToast?.();
      const dismissLabel = t().player.shell.toast.dismiss;
      dropToast = stack.show(action === undefined ? { message, dismissLabel } : { message, dismissLabel, action, duration: ACTION_TOAST_MS });
    },
    run(on) {
      if (on === running) return;
      running = on;
      // A hidden player stays silent, since the page that shows plays the learner's notes itself.
      core.run(on);
      controls.run(on);
      if (on) return startKeys();
      stopKeys?.();
      stopKeys = undefined;
    },
  };

  window.addEventListener("keydown", (event) => {
    if (running && event.key === "Escape") shell.closeDialog();
  });

  const songTitle = bar.title;
  /** The open song's title, or undefined while the demo plays, whose name follows the live locale. */
  let openTitle: string | undefined;
  const showTitle = () => {
    songTitle.textContent = openTitle ?? t().player.shell.topbar.demoSong;
  };
  showTitle();
  onLocale(showTitle);
  const storage = typeof localStorage === "undefined" ? null : localStorage;
  moveStoredSongs(storage);
  const trackStore = new TrackStore(storage);
  const tracks = new TrackState(trackStore);
  let tracksPanel: TracksPanel | undefined;
  const openTracks = () => {
    tracksPanel ??= createTracksPanel(tracks);
    shell.openDialog(t().player.shell.dialog.tracks, tracksPanel.element);
  };
  const uploads = new Uploads(settings);
  const showUploads = async () => library.setUploads(await uploads.list());
  /** Adds the MIDI files among `files`, and opens the first. */
  const addSongs = async (files: File[]) => {
    try {
      const added = await uploads.add(files);
      await showUploads();
      const first = added[0];
      const say = t().player.shell.songs;
      if (first === undefined) return shell.toast(files.length === 0 ? say.noneFound : say.wrongKind);
      shell.closeDialog();
      void opener.openUpload(first);
      if (added.length > 1) shell.toast(say.added(added.length));
    } catch (error) {
      shell.toast(t().player.shell.songs.notKept(error instanceof Error ? error.message : String(error)));
    }
  };
  const libraryActions: LibraryActions = {
    pause: () => transport.pause(),
    toast: (message) => shell.toast(message),
    open: (song) => {
      shell.closeDialog();
      void opener.open(song);
    },
    openUpload: (upload) => {
      shell.closeDialog();
      void opener.openUpload(upload);
    },
    removeUpload: (upload) => {
      trackStore.forget(upload.id);
      void uploads.remove(upload.id).then(showUploads);
    },
    exportUpload: (upload) => download(upload.bytes.slice().buffer, upload.name, "audio/midi"),
    addFiles: () => void pickFiles().then(addSongs),
    addFolder: () => void pickFolder().then(addSongs),
  };
  const library = createLibraryPanel(settings, libraryActions, engine);
  void showUploads();
  let launched = false;
  songInbox.take((files) => {
    launched = true;
    void addSongs(files);
  });
  settings.subscribe((id) => {
    if (id === "saveIndexedDb") void showUploads();
  });
  const openLibrary = () => {
    shell.openDialog(t().player.shell.dialog.songs, library.element);
    library.shown();
  };

  let catalog: CatalogSong[] = [];
  /** The catalog row of the open song, and its guide once that loads. */
  let current: { row: CatalogSong | undefined; guide: Guide | undefined } = { row: undefined, guide: undefined };
  const openGuide = () => {
    const { row, guide } = current;
    if (row?.rarity === undefined || guide === undefined) return;
    const panel = createGuidePanel(guide, row.rarity, {
      apply: (step, index) => {
        applyStep(step, { settings, transport });
        shell.closeDialog();
        shell.toast(t().player.shell.guide.step(index + 1, stepSummary(step)));
      },
      loop: (bar) => {
        loopBar(bar, settings);
        shell.closeDialog();
        shell.toast(t().player.shell.guide.barLoops(bar));
      },
    });
    shell.openDialog(t().player.shell.dialog.guide(rowTitle(row)), panel);
  };
  bar.on("guide", openGuide);
  /** Shows the open version's guide on the piano: its marks and start keys, moved as the song is transposed. */
  const showGuide = () => {
    const { row, guide } = current;
    const song = transport.song;
    const version = row?.rarity === undefined ? undefined : guide?.versions[row.rarity];
    scene.setGuide(version === undefined || song === undefined ? undefined : pianoGuide(song, version, transport.transpose));
  };
  /**
   * Finds the catalog row of the song known as `id`, and once its guide loads, shows the Guide button,
   * gives the fingering editor the guide's fingers and shows the guide on the piano.
   */
  const followSong = (id: string) => {
    const row = catalog.find((song) => songIdOf({ source: "catalog", file: song.file }) === id);
    library.setCurrent(id);
    current = { row, guide: undefined };
    bar.showGuide(false);
    showGuide();
    if (row?.song === undefined) return;
    void loadGuide(row).then((guide) => {
      if (current.row !== row || guide === undefined || row.rarity === undefined) return;
      current = { row, guide };
      bar.showGuide(true);
      const song = transport.song;
      if (song !== undefined) fingering.guide(id, guideFingers(song, guide.versions[row.rarity]));
      showGuide();
    });
  };
  /** Offers the step after the open version, once a take of it beats it. */
  const offerLevelUp = (row: CatalogSong) => {
    const next = levelUpOf(catalog, row);
    const say = t().player.shell.guide;
    if (next === undefined) return shell.toast(say.topBeaten(rowTitle(row)));
    shell.toast(say.beaten(rowTitle(row), next.name), { label: say.playNext(next.name), run: () => void opener.open(next.row) });
  };

  bar.on("songs", () => openLibrary());
  bar.on("tracks", () => openTracks());
  bar.on("about", () => void openAbout(shell));
  root.replaceChildren(stage);
  const core = createPlayerCore(stage, settings, input, audio);
  const { scene, transport } = core;
  engine.onFontError = () => shell.toast(t().player.shell.songs.soundsFailed);
  // A transposition hands the scene a new song, and the start keys move with it.
  transport.onShow(showGuide);
  const controls = createControlBar(transport, scene, settings, root);
  root.append(stack.element);

  const pageBar = bar.row;
  const fullscreenMenu = el("div", { class: "player-bar__menu" });
  const fullBar = el("div", { class: "player-float" });
  /** The floating bar on screen: the site's outside fullscreen, and the player's own inside it. */
  const floating = () => (document.fullscreenElement === root ? fullBar : bar.dock.parentElement);
  // The panels over the scene keep clear of the bar, at the top or at the bottom.
  const measureBar = () => {
    const box = floating()?.getBoundingClientRect();
    if (box === undefined || box.height === 0) return;
    const app = root.getBoundingClientRect();
    const top = bar.dock.dataset.edge === "top";
    root.style.setProperty("--bar-height", `${top ? Math.ceil(box.bottom - app.top) : 0}px`);
    root.style.setProperty("--controls-height", `${top ? 0 : Math.ceil(app.bottom - box.top)}px`);
  };
  const sizer = new ResizeObserver(measureBar);
  sizer.observe(fullBar);
  const home = bar.dock.parentElement;
  if (home !== null) sizer.observe(home);
  // Fullscreen covers the player alone, so the whole bar moves into it as the player's own, and comes back on leaving.
  const placeBar = () => {
    const full = document.fullscreenElement === root;
    (full ? fullBar : bar.slot).append(pageBar);
    (full ? fullscreenMenu : bar.menuSlot).append(...bar.items);
    (full ? fullBar : bar.dock).append(controls.element);
    if (full) {
      pageBar.append(fullscreenMenu);
      root.append(fullBar);
    } else {
      fullscreenMenu.remove();
      fullBar.remove();
    }
    measureBar();
  };
  document.addEventListener("fullscreenchange", placeBar);
  placeBar();
  // The bar floats at the edge opposite the piano, so it never covers a key.
  const placeEdge = () => {
    const edge = barEdge(settings.get("pianoPosition"), settings.get("reverseNoteDirection"));
    bar.dock.dataset.edge = edge;
    fullBar.dataset.edge = edge;
    measureBar();
  };
  settings.subscribe((id) => {
    if (id === "pianoPosition" || id === "reverseNoteDirection") placeEdge();
  });
  placeEdge();
  /** Whether a lesson's request reads the sheet music, so the scene hides every track's notes. */
  let readsSheet = false;
  const showTracks = () => scene.setTracks(readsSheet ? tracks.tracks.map((track) => ({ ...track, visible: false })) : tracks.tracks);
  tracks.subscribe(() => {
    showTracks();
    scene.setKey(tracks.key);
    transport.mix = tracks.tracks;
  });
  const sheet = new SheetView(settings, transport, tracks, () => input.held);
  stage.append(sheet.element);
  const fingering = new FingeringEditor(new FingerStore(storage), tracks);
  scene.setFingering(fingering);
  stage.append(fingerStatus(fingering));
  /** Loads `song`, known as `id`, with its track settings and its fingers. */
  const loadSong = (song: Song, id: string) => {
    tracks.load(id, song);
    fingering.load(id, song);
    controls.load(song);
  };
  loadSong(demoSong(), DEMO_SONG_ID);
  const opener = createSongOpener({
    settings,
    parser: new SongParser(),
    uploads,
    load: (song, title, id) => {
      loadSong(song, id);
      openTitle = title;
      showTitle();
      followSong(id);
    },
    toast: (message, action) => shell.toast(message, action),
    storage,
  });
  /** Whether a play mode has started, whose song then opens in place of the last one. */
  let modeStarted = false;
  const catalogLoad = loadCatalog();
  catalogLoad.then(
    (songs) => {
      catalog = songs;
      library.setSongs(songs);
      if (!launched && !modeStarted && songHandoff.current === undefined) void opener.reopenLast(songs);
    },
    (error: unknown) => library.setError(error instanceof Error ? error.message : String(error)),
  );

  // A play mode from `modes/`: its song opens, its settings apply, and a toast offers to undo them.
  const startMode = async (mode: PlayMode) => {
    if (mode.song !== undefined) modeStarted = true;
    shell.closeDialog();
    closeSettings();
    const songs = mode.song === undefined ? [] : await catalogLoad.catch(() => [] as CatalogSong[]);
    const row = songs.find((song) => song.file === mode.song);
    // A song that fails to open says why in the opener's toast, and the learner's settings stay as they were.
    if (row !== undefined && !(await opener.open(row))) return;
    const before = applyMode(settings, mode);
    const say = t().playModes;
    shell.toast(say.toast.started(say.modes[mode.id].name), {
      label: say.toast.undo,
      run: () => {
        applyPatch(settings, before);
        shell.toast(t().playModes.toast.undone);
      },
    });
  };
  modeInbox.take((mode) => void startMode(mode));

  // Lesson mode: the song step's version opens with its practice step, under the lesson's banner.
  const banner = el("section", { class: "lesson-banner", attrs: { hidden: "" } });
  const practiceLine = el("p", { class: "lesson-banner__practice" });
  stage.append(banner);
  /** The request lesson mode opened last, so each request opens its song once. */
  let lessonOpened: SongRequest | undefined;
  const showBanner = (request: SongRequest | undefined) => {
    banner.hidden = request === undefined;
    if (request === undefined) return;
    const say = t().player.shell.lesson;
    banner.setAttribute("aria-label", say.label);
    practiceLine.textContent = "";
    banner.replaceChildren(
      el("p", { class: "lesson-banner__label", text: say.label }),
      el("p", { class: "lesson-banner__goal", text: request.goal }),
      practiceLine,
      el("p", { class: "lesson-banner__target", text: say.target(Math.round(request.accuracy * 100)) }),
      button(say.back, () => songHandoff.end(undefined), { class: "primary lesson-banner__back" }),
    );
  };
  /** The learner's own sheet settings while a request reads the sheet music, restored when it ends. */
  let sheetBefore: { shown: boolean; finest: SettingValue<"sheetMinNoteDenom"> } | undefined;
  const showView = (request: SongRequest | undefined) => {
    readsSheet = request?.view === "sheet";
    if (readsSheet) {
      sheetBefore ??= { shown: settings.get("enableSheet"), finest: settings.get("sheetMinNoteDenom") };
      settings.set("enableSheet", true);
      // Our versions sound each note a little short, which a grid of 32nds draws as a tie and a rest.
      settings.set("sheetMinNoteDenom", "16");
    } else if (sheetBefore !== undefined) {
      settings.set("enableSheet", sheetBefore.shown);
      settings.set("sheetMinNoteDenom", sheetBefore.finest);
      sheetBefore = undefined;
    }
    showTracks();
  };
  const followLesson = async () => {
    const request = songHandoff.current;
    if (request === lessonOpened) return;
    lessonOpened = request;
    showBanner(request);
    showView(request);
    if (request === undefined) return;
    const songs = await catalogLoad.catch(() => [] as CatalogSong[]);
    if (songHandoff.current !== request) return;
    const row = songs.find((song) => song.file === request.file);
    if (row?.rarity === undefined) return shell.toast(t().player.shell.lesson.missing);
    shell.closeDialog();
    closeSettings();
    settings.set("playMode", "player");
    settings.set("enableScoreMode", true);
    if (!(await opener.open(row)) || songHandoff.current !== request) return;
    const step = (await loadGuide(row))?.versions[row.rarity].practice[request.practice];
    if (songHandoff.current !== request || step === undefined) return;
    applyStep(step, { settings, transport });
    practiceLine.textContent = stepSummary(step);
  };
  songHandoff.subscribe(() => void followLesson());
  void followLesson();

  // The editor's key listener goes first, so a digit gives the selected note its finger and plays nothing.
  const startKeys = () => {
    const stops = [attachFingeringEditor(fingering, scene), attachKeyboard(input, settings)];
    stopKeys = () => stops.forEach((stop) => stop());
  };
  startKeys();
  attachNoteScroll(scene, transport, settings);
  attachWaitMode(transport, input, settings, tracks);
  attachScoring(transport, input, settings, {
    container: stage,
    history: openHistory(),
    openDialog: (title, body) => shell.openDialog(title, body),
    saved: (take, plain) => {
      const row = current.row;
      const request = songHandoff.current;
      if (request !== undefined && row?.file === request.file) {
        const reached = accuracy(take) ?? 0;
        if (reached >= request.accuracy) songHandoff.end({ accuracy: reached });
        return;
      }
      if (plain && beats(take) && row?.rarity !== undefined) offerLevelUp(row);
    },
  });
  attachGameMode(transport, input, settings, scene, stage);
  attachFreePlay(input, settings, { container: stage, download });
  attachPitchPractice(input, settings, {
    container: stage,
    openDialog: (title, body) => shell.openDialog(title, body),
    sound: (pitch) => {
      void engine.resume();
      void engine.input.noteOn(pitch, 80);
      setTimeout(() => engine.input.noteOff(pitch), HEAR_MS);
    },
  });
  const followPlayMode = () => {
    const mode = settings.get("playMode");
    root.dataset.playMode = mode;
    // The control bar sits in the site's bar outside fullscreen, which then hides it too.
    bar.dock.dataset.playMode = mode;
    if (mode !== "player") transport.pause();
  };
  settings.subscribe((id) => {
    if (id === "playMode") followPlayMode();
  });
  followPlayMode();
  attachKeyLighting(transport, settings, () => midi.outputPort);
  engine.metronome.midiOut = () => midi.outputPort;
  // A click on the bar while the player loaded runs now, with every part it may reach in place.
  bar.start();
  return shell;
}

/** How long pitch practice's Hear it button sounds a note, in milliseconds. */
const HEAR_MS = 800;

/**
 * The edge of the window the player's bar floats at: the top while the piano is in the lower half of
 * the screen, and the bottom otherwise. `pianoPosition` raises the piano past the middle from 50, and
 * reversed direction puts it at the top.
 */
export function barEdge(pianoPosition: number, reversed: boolean): "top" | "bottom" {
  return pianoPosition < 50 !== reversed ? "top" : "bottom";
}

/** The line that names the selected note and its finger, and says what the keys do. Hidden while none is selected. */
function fingerStatus(editor: FingeringEditor): HTMLElement {
  const element = el("div", { class: "finger-status", attrs: { role: "status" } });
  localize(element, (m) => m.player.shell.finger.label, "aria-label");
  const show = () => {
    const note = editor.selected;
    element.hidden = note === undefined;
    if (note === undefined) return;
    const say = t().player.shell.finger;
    const finger = editor.fingerOf(note);
    const set = editor.isSet(note) ? say.setByYou : editor.isGuided(note) ? say.fromGuide : say.suggested;
    const said = finger === undefined ? say.none : say.finger(finger, set);
    element.textContent = say.line(noteName(note.pitch), said);
  };
  editor.subscribe(show);
  onLocale(show);
  show();
  return element;
}

/**
 * Opens the Data page in the live locale. A link clicked inside `root` lets the site's router take it,
 * so the player stays alive behind the page, as it does for any other link.
 */
function openDataPage(root: HTMLElement): void {
  const link = el("a", { attrs: { href: hrefOf("data", liveLocale()), hidden: "" } });
  root.append(link);
  link.click();
  link.remove();
}

/** Asks for an audio file, takes it as the background track, turns the track on, and says so in a toast. */
function pickBackgroundTrack(engine: AudioEngine, settings: SettingsStore, shell: Shell): void {
  const input = el("input", { attrs: { type: "file", accept: "audio/*" } });
  input.addEventListener("change", async () => {
    const file = input.files?.[0];
    if (file === undefined) return;
    try {
      await engine.background.loadFile(file);
    } catch {
      return shell.toast(t().player.shell.backgroundTrack.notAudio(file.name));
    }
    settings.set("bgTrackEnable", true);
    shell.toast(t().player.shell.backgroundTrack.playsAlong(file.name));
  });
  input.click();
}

/** Opens the About page in a dialog. */
async function openAbout(shell: Shell): Promise<void> {
  const body = await aboutPage();
  shell.openDialog(t().player.shell.dialog.about, body);
}