/**
 * The 3D scene: the renderer, the lights, the camera rig and the frame loop, with the piano, the notes
 * and the lanes under one world group, sized to its container and driven by the settings.
 *
 * Decisions, and what each costs:
 * - The piano, the notes and the lanes share one world group. Reversed direction mirrors that group
 *   along z, so the three can never disagree. White key length scales the piano's own group along z,
 *   which reaches only towards the player and so never moves the hit line.
 * - The notes and the lanes take one speed and one reach from here, so a beat line and a note starting
 *   on it always meet. The speed is the reach over the zoom's span, from `secondsShown` in
 *   `src/play/view.ts`. Each frame reads the span, and a new span costs one relayout of the lanes.
 * - `shiftView` moves the camera sideways, within half the piano's width either way.
 * - A settings change marks the scene dirty, and the next frame applies every setting at once. A
 *   colour dragged across the picker then costs one apply per frame. The piano is rebuilt only when
 *   its own options change, because its key colours are set when it is built.
 * - The piano draws exactly the learner's keyboard, read through `storedRange`. A new range rebuilds
 *   the piano, and the notes, the lanes and the camera's frame follow its layout.
 * - The canvas is an image whose accessible name states the range, such as "Piano, 61 keys, C2 to C7".
 *   The name comes from the live catalog's `player.shell.scene`, and is written again on a change of it.
 *   The demo song's words are read when it is built, so a demo already showing keeps its language.
 * - The keys follow the notes. Each frame presses the key of every sounding note in its track colour
 *   and releases the rest, so a seek leaves no key stuck. A note's key is the one `fitPitch` gives it,
 *   so with `foldOutsideNotes` on a folded note presses its folded key.
 * - Each track shows as `setTracks` says: hidden, or in its own colour. A hidden track's notes neither
 *   draw nor press keys. A change of the tracks rebuilds the bars, as a new song does.
 * - Until a song is set, the scene plays a generated demo song on its own clock, so it shows it is
 *   live. `setSong` and `setTimeSource` hand the time to the caller, and each frame reads it.
 * - `setCycle` hands the transport's repeating cycle to the notes, the lanes and the chord labels.
 *   Past the cycle's end they draw its start again, so a learner reading ahead sees the next pass. The
 *   keys, hover and hits read the real notes at the wrapped time, so they need nothing more. The demo
 *   song drops the cycle, since it runs on its own clock. The lyrics may jump at the wrap.
 * - The keys the learner holds press too, in the input colours of white and black keys, over a song
 *   note on the same key. `highlightActivePianoKeys` turns that off. `keyAt` picks the key under a
 *   point by a ray against the key meshes, so a black key in front wins over the white key under it.
 * - Hover and `noteAt` find a note on the bars' plane through `NoteBars.noteAt`. Hover runs only while
 *   note details show, and `noteAt` serves the fingering editor's clicks.
 * - `laneAt` turns a point into seconds ahead of the hit line on the lanes' plane, at the last frame's
 *   speed. The note scroll of `src/input/note-scroll.ts` drags the song with it.
 * - `keyPoint` projects a point just above a key at the hit line onto the screen, through the world
 *   group and the camera as the last frame placed them. Game mode puts its popups there.
 * - Each note carries the labels `noteLabel` picks: any of its name, its computer key and its finger.
 *   The first sits at the bar's front end and each next one behind it, so a short note's labels may
 *   reach past its end. A label a note lacks, such as a finger never set, leaves no gap. A name is
 *   spelt by the song's key, which is the learner's from `setKey` or else the one found. It has no
 *   octave, so it fits a key's width. The labels are sprites from `src/render/labels.ts`, placed on
 *   the bars each frame.
 * - The keys carry their names and computer keys from `src/render/key-labels.ts`. They are placed when
 *   a setting changes, never per frame, and stay still while a pressed key dips.
 * - Chords show as `src/render/chord-labels.ts` draws them. They are found again only when the song or
 *   its key changed while chords show. The canvas's accessible name adds the sounding chord, such as
 *   "Piano, 61 keys, C2 to C7, chord Am".
 * - The fingers and the selected note are read from `setFingering`'s source each frame, so the scene
 *   needs no message for a label. The selected note glows.
 * - Colour coding by pitch or by finger, from `src/render/color-coding.ts`, colours the bars and the
 *   sounding keys in place of the track colour. A change of finger recolours every bar on the next
 *   frame, only while the colours follow the fingers.
 * - Every pressed key, a song's or the learner's, feeds the particles from `src/render/particles.ts`
 *   and the wave of `src/render/piano-line.ts`. The particles take the key's pressed colour, and the
 *   frame skips them while no preset runs. The keys the learner holds light their lanes as well.
 * - The flames of `src/render/flames.ts` burn on every pressed key while the particles and their
 *   `particlesFlames` toggle are on. A key burns in the colour of the note sounding on it, and that
 *   note's bar burns with it. A key with no note sounding burns in its pressed colour.
 * - The particles and the flames load with `import()` when `showParticles` first turns on, and the
 *   frame after their load applies the settings to them. A scene that never shows them, such as the
 *   embed's, loads neither module. The cost is a few frames without them on the play page's start.
 * - The song's lyrics show over the scene through `src/render/lyrics.ts`, and its markers and pedal
 *   periods on the lanes. The demo song carries both, so the learner can see them without a file.
 * - A song's guide, from `setGuide`, marks its tips and tricky spots on the lanes. Until the song
 *   reaches its first note, its start keys light in their hands' track colours through the piano's
 *   incoming tint, which colours a key without pressing it. The canvas's name then lists them. The
 *   transport hands the scene a new song on each transposition, so the guide outlives `setSong`, and
 *   the caller sets it anew for each song.
 * - The canvas is drawn at the device pixel ratio, capped at 2, because higher ratios cost fill rate
 *   with no visible gain. The frame loop runs only while the page is visible, through
 *   `setAnimationLoop`, and `run(false)` stops it while the scene's view hides.
 * - A frame draws only when the picture can differ from the last one drawn. That is when the song time
 *   moved, the camera moved, or `stale` was set. Every setter, a setting, a held key, a resize, a locale,
 *   a page shown again and a restored context set it. So does the pointer while note details show.
 * - A drawn frame draws the next one too while something still animates by itself. That is a key's
 *   spring or flash, the particles, the flames, the wave line, the glow's load or the shown frame rate.
 *   Any other frame returns after reading the time and moving the camera, so a paused song costs no
 *   render. The price is a rule: anything new that changes the picture sets `stale` or animates.
 * - The picture offset, `renderOffset`, is the transport's, in the time it hands `setTimeSource`.
 */
import { Color, Fog,Group, Plane, Raycaster, Scene, SRGBColorSpace, Vector2, Vector3, WebGLRenderer } from "three";

import type { Cycle } from "../audio/scheduler";
import { onLocale, t } from "../i18n/live";
import { keysOf } from "../input/keyboard";
import { rangeLabel, storedRange } from "../keyboard/range-control";
import { fitPitch } from "../keyboard/song-fit";
import { HAND_TRACK, type PianoGuide, type StartKey } from "../library/guide-on-piano";
import { builtInDefault } from "../library/track-settings";
import { type Note, type Song, type TimedText } from "../midi/song";
import { TempoMap } from "../midi/tempo-map";
import { keyLabel } from "../play/hotkeys";
import { secondsShown, zoomSettings } from "../play/view";
import { NOTE_LABELS, picksOf } from "../settings/schema";
import type { SettingsStore } from "../settings/store";
import { type Key, keyAccidentals, keySections, songKey } from "../theory/key";
import { type Accidentals, type NamingChoice, noteName } from "../theory/note-names";
import { type CameraPreset, createCameraRig } from "./cameras";
import { type BlockKind, type BlockNotation, chordMarks, type ChordPlacement, type ChordStyle, createChordLabels } from "./chord-labels";
import { codedColor, codesFingers, NO_CODING, type Played, readColorCoding } from "./color-coding";
import { createGlow, type GlowMode } from "./glow";
import { isBlack } from "./key-layout";
import { KEY_LABEL_HEIGHT, KEY_NAME_INSET, keyTexts, type OctaveLabel } from "./key-labels";
import { createLabelLayer } from "./labels";
import { createLanes } from "./lanes";
import { pianoLights } from "./lights";
import { createLyrics } from "./lyrics";
import { NoteWindow } from "./note-window";
import { createNoteBars, type NoteColor, type SustainEnd } from "./notes";
import { createOverlays } from "./overlays";
import type { FlameBar, Flames, FlameSource } from "./flames";
import type { Particles, ParticleSource, readParticleTypes } from "./particles";
import { createPiano, type Piano, type PianoOptions } from "./piano";
import { createPianoLine } from "./piano-line";
import { BLACK_KEY_LENGTH, BLACK_KEY_TOP, WHITE_KEY_LENGTH } from "./piano-geometry";

/** How one track's notes show: whether at all, and their `#rrggbbaa` colour. */
export interface TrackLook {
  readonly visible: boolean;
  readonly color: string;
}

/** What the scene reads of the fingering: each note's hand and finger, and the note the learner selected. */
export interface FingerSource {
  fingerOf(note: Note): number | undefined;
  handOf(note: Note): "right" | "left" | undefined;
  readonly selected: Note | undefined;
  /** Hears each change of the fingers or the selection. Returns what stops it. */
  subscribe(listener: () => void): () => void;
}

/** A point on the lanes' plane: the seconds it shows ahead of the hit line, and whether it is on the lanes. */
export interface LanePoint {
  readonly ahead: number;
  readonly onLanes: boolean;
}

export interface PianoScene {
  /** Shows `song`, or the demo song when it is undefined. A song stays at 0 until `setTimeSource`. */
  setSong(song: Song | undefined): void;
  /** Spells the note names by `key`, or by the key found in the song's notes when it is undefined. */
  setKey(key: Key | undefined): void;
  /** Shows each track as `looks` says, by track index. A track the list lacks shows in its built-in colour. */
  setTracks(looks: readonly TrackLook[]): void;
  /** Reads the song time to show, in seconds, from `read` on every frame. */
  setTimeSource(read: () => number): void;
  /** Shows the marks and start keys of the open song's guide, or none with undefined. A new song keeps them. */
  setGuide(guide: PianoGuide | undefined): void;
  /** Draws the start of `cycle` again past its end, as the wrapped time will reach it, or no repeat with undefined. */
  setCycle(cycle: Cycle | undefined): void;
  /** Glides the camera back to its preset after the learner dragged it. */
  resetCamera(): void;
  /** Moves the view `by` world units to the right, or to the left when negative, within the piano. */
  shiftView(by: number): void;
  /** The canvas the scene draws on, which takes the pointer. */
  readonly canvas: HTMLCanvasElement;
  /** The pitch of the piano key under the client point `x`, `y`, or undefined when no key is there. */
  keyAt(x: number, y: number): number | undefined;
  /** The note whose bar is under the client point `x`, `y`, as the last frame drew it, or undefined. */
  noteAt(x: number, y: number): Note | undefined;
  /**
   * The seconds of song between the hit line and the lanes' plane under the client point `x`, `y`, and
   * whether the point lies on the lanes. It is undefined where the pointer misses the plane.
   */
  laneAt(x: number, y: number): LanePoint | undefined;
  /** The client point just above the key of `pitch` at the hit line, or undefined off the piano or with no size. */
  keyPoint(pitch: number): { x: number; y: number } | undefined;
  /** Reads the fingers and the selected note from `source` on every frame. */
  setFingering(source: FingerSource): void;
  /** Shows `pitch` as held down by the learner, or lets it go, in the input colours. */
  holdKey(pitch: number, down: boolean): void;
  /** Starts or stops the frame loop, as while its page hides. A restart skips the time it was stopped. */
  run(on: boolean): void;
  /** Stops the frame loop and frees the GPU resources. */
  dispose(): void;
}

/** How far ahead of the hit line notes and lanes reach, in world units. */
const FAR = 60;
/** The room left of the lanes for the measure numbers, in world units. */
const NUMBER_ROOM = 2.2;
/** The case reaches this far in front of the white keys. */
const CASE_FRONT = 0.9;
/** The height of the bars' middle, where hover meets them. */
const HOVER_Y = 0.17;
/** A frame longer than this, such as after a hidden tab, is treated as this long. */
const MAX_FRAME = 0.1;
/** A note label's height, the most of its bar's width it takes, and its gap above the bar, in world units. */
const LABEL_HEIGHT = 0.9;
const LABEL_FILL = 0.95;
const LABEL_LIFT = 0.05;
/** How far from its key's front end a computer key sits, in world units. `key-labels.ts` holds the name's. */
const KEY_BINDING_INSET = { white: 1.5, black: 1.3 };
/** How high above the white key tops `keyPoint` sits, clear of the black keys, in world units. */
const KEY_POINT_HEIGHT = BLACK_KEY_TOP + 0.6;

/** Builds the scene into `container`, driven by `settings`, and starts its frame loop. */
export function createScene(container: HTMLElement, settings: SettingsStore): PianoScene {
  const renderer = new WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.domElement.setAttribute("role", "img");
  container.append(renderer.domElement);

  const scene = new Scene();
  const background = new Color();
  scene.background = background;
  const fog = new Fog(background, 40, 110);
  scene.fog = fog;

  scene.add(...pianoLights());

  const world = new Group();
  world.name = "world";
  scene.add(world);

  const rig = createCameraRig(renderer.domElement, settings.get("cameraPreset"));
  const glow = createGlow(renderer, scene, () => rig.camera, settings.get("glowMode"));
  const overlays = createOverlays(container);
  const lyrics = createLyrics(container);

  let pianoKey = "";
  let piano: Piano | undefined;
  let zoom = zoomSettings(settings);
  // The first frame corrects the speed when the zoom is by measures.
  let speed = FAR / zoom.noteToHeightConst;
  let shift = 0;
  const notes = createNoteBars({ speed, far: FAR });
  const lanes = createLanes({ speed, far: FAR });
  const labels = createLabelLayer();
  const keyLabels = createLabelLayer();
  const chords = createChordLabels();
  const pianoLine = createPianoLine();
  world.add(notes.group, lanes.group, labels.group, keyLabels.group, chords.group, pianoLine.mesh);
  /**
   * The particles and the flames, undefined until `showParticles` first turns on and their modules load.
   * The next frame then applies the settings to them.
   */
  let particles: Particles | undefined;
  let flames: Flames | undefined;
  let readTypes: typeof readParticleTypes | undefined;
  let effectsLoading = false;
  let disposed = false;
  const loadEffects = () => {
    effectsLoading = true;
    Promise.all([import("./particles"), import("./flames")]).then(
      ([particleModule, flameModule]) => {
        if (disposed) return;
        readTypes = particleModule.readParticleTypes;
        particles = particleModule.createParticles();
        flames = flameModule.createFlames();
        world.add(particles.group, flames.group);
        dirty = true;
      },
      () => {},
    );
  };
  /** Whether chords show, and whether the song's chords are to be found again before they next show. */
  let showChords = false;
  let chordsStale = true;
  /** The piano's range as the canvas names it, undefined before the piano is placed, and the chord it last named. */
  let ariaRange: string | undefined;
  let ariaChord: string | undefined;
  /** The guide's start keys, whether they lit the keys last frame, and the names the canvas gives them while lit. */
  let startKeys: readonly StartKey[] = [];
  let lit = false;
  let ariaStart: string | undefined;
  let fingering: FingerSource | undefined;
  /** The key found in the open song's notes, and the key the learner set, which wins. */
  let foundKey: Key | undefined;
  let keyOverride: Key | undefined;
  /** How the open song spells its black keys, from its key, for the note name labels. */
  let accidentals: Accidentals = "sharps";
  const spellNames = () => {
    const key = keyOverride ?? foundKey;
    accidentals = key ? keyAccidentals(key) : "sharps";
    chooseLabels();
  };
  /** The labels of each note, front to back, or none while note labels are off. */
  let labelsOf: readonly ((note: Note) => string | undefined)[] = [];

  let song = demoSong();
  lyrics.setLyrics(song.lyrics);
  let noteWindow = new NoteWindow<Note>(song.notes);
  let demoClock: number | undefined = 0;
  let now = 0;
  let timeSource: (() => number) | undefined;
  /** The colour of each pressed key, by pitch. */
  const down = new Map<number, Color>();
  /** The keys the learner holds, and their colours while `highlightActivePianoKeys` is on. */
  const held = new Set<number>();
  const heldWhite = new Color();
  const heldBlack = new Color();
  let showHeld = true;

  let looks: readonly TrackLook[] = [];
  /** The note colour of each track, by track index, filled as tracks are asked for. */
  let colors: Color[] = [];
  const colorOfTrack = (track: number): Color => {
    let color = colors[track];
    if (color === undefined) {
      color = new Color(rgb(looks[track]?.color ?? builtInDefault(track).color));
      colors[track] = color;
    }
    return color;
  };
  const trackColorOf: NoteColor = (note) => colorOfTrack(note.track);
  let coding = NO_CODING;
  let codingKey = "";
  /** One `Color` per coded colour, so a key keeps the same object while its colour holds. */
  const codedColors = new Map<number, Color>();
  const played = (note: Note): Played | undefined => {
    const hand = fingering?.handOf(note);
    return hand && { hand, finger: fingering?.fingerOf(note) };
  };
  const codedOr = (on: "notes" | "keys"): NoteColor => (note) => {
    const coded = codedColor(coding, on, note, codesFingers(coding) ? played(note) : undefined);
    if (coded === undefined) return trackColorOf(note);
    let color = codedColors.get(coded);
    if (!color) {
      color = new Color(coded);
      codedColors.set(coded, color);
    }
    return color;
  };
  /** The colour of a note's bar, and of its key while it sounds. */
  const colorOf = codedOr("notes");
  const keyColorOf = codedOr("keys");
  /** Whether the bars take their colours anew on the next frame, as after a finger changed. */
  let recolor = false;
  let stopFingering: (() => void) | undefined;

  const showSong = () => {
    if (!piano) return;
    const shown = looks.some((look) => !look.visible) ? song.notes.filter((note) => looks[note.track]?.visible !== false) : song.notes;
    noteWindow = new NoteWindow(shown);
    notes.setSong(shown, piano.layout, colorOf, pedalEnds(song));
    const pedals = song.tracks.filter((track) => looks[track.index]?.visible !== false).flatMap((track) => track.pedals);
    lanes.setSong({ tempoMap: song.tempoMap, endTick: song.endTick, markers: song.markers, pedals });
  };

  /** Picks the texts of every note's labels from the `noteLabel` setting, front to back. */
  const chooseLabels = () => {
    labelsOf = picksOf(settings.get("noteLabel"), NOTE_LABELS).map((kind): ((note: Note) => string | undefined) => {
      if (kind === "name") {
        const system = settings.get("pitchNotationSystem") as NamingChoice;
        return (note) => noteName(note.pitch, { system, accidentals, octave: false });
      }
      if (kind === "keyBinding") {
        const keys = keysOf(settings.get("keyBindings"));
        return (note) => {
          const code = keys.get(note.pitch);
          return code === undefined ? undefined : keyLabel(code);
        };
      }
      return (note) => fingering?.fingerOf(note)?.toString();
    });
  };

  /** Hands `cycle` to every layer that draws ahead by song time. */
  const showCycle = (cycle: Cycle | undefined) => {
    notes.setCycle(cycle);
    lanes.setCycle(cycle);
    chords.setCycle(cycle);
  };

  /** Draws each placed bar's labels just above it, the first at its front end and each next one behind. */
  const showLabels = () => {
    labels.begin();
    if (labelsOf.length > 0) {
      const kinds = labelsOf;
      notes.forEachShown((note, x, frontZ, width, top) => {
        let z = frontZ - LABEL_HEIGHT / 2;
        for (const label of kinds) {
          const text = label(note);
          if (text === undefined) continue;
          labels.push(text, x, top + LABEL_LIFT + LABEL_HEIGHT / 2, z, LABEL_HEIGHT, width * LABEL_FILL);
          z -= LABEL_HEIGHT;
        }
      });
    }
    labels.end();
  };

  /** Lays each key's name and computer key over it, its distance from the hit line scaled by `keyScale`. */
  const placeKeyLabels = (keyScale: number) => {
    const layout = piano!.layout;
    const texts = keyTexts(
      layout.keys.map((rect) => rect.pitch),
      {
        white: settings.get("showKeyNamesOnPianoWhite"),
        black: settings.get("showKeyNamesOnPianoBlack"),
        flats: settings.get("showPianoKeyNameFlats"),
        octave: settings.get("octaveLabel") as OctaveLabel,
        system: settings.get("pitchNotationSystem") as NamingChoice,
        bindings: settings.get("showKeyBindingsOnPiano"),
        keyBindings: settings.get("keyBindings"),
      },
    );
    const left = -layout.width / 2;
    const lift = KEY_LABEL_HEIGHT / 2 + 0.02;
    keyLabels.begin();
    for (const rect of layout.keys) {
      const text = texts.get(rect.pitch);
      if (!text) continue;
      const color = rect.black ? "black" : "white";
      const y = (rect.black ? BLACK_KEY_TOP : 0) + lift;
      const front = rect.black ? BLACK_KEY_LENGTH : WHITE_KEY_LENGTH;
      const width = rect.width * LABEL_FILL;
      const x = left + rect.center;
      if (text.name !== undefined) keyLabels.push(text.name, x, y, (front - KEY_NAME_INSET[color]) * keyScale, KEY_LABEL_HEIGHT, width);
      if (text.binding !== undefined) keyLabels.push(text.binding, x, y, (front - KEY_BINDING_INSET[color]) * keyScale, KEY_LABEL_HEIGHT, width);
    }
    keyLabels.end();
  };

  /** Names the canvas by its range, by the start keys while they light, and by `chord` when one sounds. */
  const nameCanvas = (chord: string | undefined) => {
    ariaChord = chord;
    const say = t().player.shell.scene;
    const base = ariaRange === undefined ? say.piano : say.pianoRange(ariaRange);
    const start = ariaStart === undefined ? "" : say.startKeys(ariaStart);
    renderer.domElement.setAttribute("aria-label", `${base}${start}${chord === undefined ? "" : say.chord(chord)}`);
  };
  const stopLocale = onLocale(() => {
    if (piano) ariaRange = rangeLabel(piano.layout.range);
    nameCanvas(ariaChord);
    stale = true;
  });

  /** Lights the guide's start keys in their hands' track colours while the song has not reached its first note. */
  const lightStartKeys = () => {
    const first = song.notes[0]?.start;
    const show = demoClock === undefined && first !== undefined && now <= first && startKeys.length > 0;
    if (show || lit) piano!.clearIncoming();
    lit = show;
    const named = show ? startKeys.map((key) => noteName(key.pitch)).join(" ") : undefined;
    if (named !== ariaStart) {
      ariaStart = named;
      nameCanvas(ariaChord);
    }
    if (!show) return;
    for (const key of startKeys) {
      const track = HAND_TRACK[key.hand];
      if (looks[track]?.visible !== false) piano!.markIncoming(key.pitch, colorOfTrack(track), 1);
    }
  };

  /** Finds the song's chords again, if they are stale and shown, and names the canvas by the sounding one. */
  const showChordsAt = (time: number) => {
    if (showChords && chordsStale) {
      chordsStale = false;
      const held = pedalEnds(song);
      chords.setMarks(chordMarks(song, held, keySections(song, keyOverride)), held);
    }
    chords.update(time, speed, FAR, piano!.layout, (visit) => notes.forEachShown(visit));
    const chord = chords.textAt(time);
    if (chord !== ariaChord) nameCanvas(chord);
  };

  /** Builds the piano anew when its own options changed. */
  const placePiano = () => {
    const options: PianoOptions = {
      range: storedRange(settings),
      whiteKeyColor: rgb(settings.get("pianoWhiteKeyColor")),
      blackKeyColor: rgb(settings.get("pianoBlackKeyColor")),
      feltColor: rgb(settings.get("pianoVelvetColor")),
      flare: settings.get("enableKeyFlare"),
    };
    const key = JSON.stringify(options);
    if (key === pianoKey && piano) return;
    pianoKey = key;
    if (piano) {
      world.remove(piano.group);
      piano.dispose();
    }
    piano = createPiano(options);
    world.add(piano.group);
    ariaRange = rangeLabel(piano.layout.range);
    nameCanvas(ariaChord);
    down.clear();
    notes.setLayout(piano.layout);
    lanes.setLayout(piano.layout);
    pianoLine.setLayout(piano.layout);
    showSong();
  };

  let dirty = true;
  const unsubscribe = settings.subscribe(() => {
    dirty = true;
  });
  /** Whether the next frame draws though the time and the camera hold, as after a call that changes what shows. */
  let stale = true;
  const invalidate = () => {
    stale = true;
  };
  const onVisible = () => {
    if (document.visibilityState === "visible") stale = true;
  };
  document.addEventListener("visibilitychange", onVisible);
  renderer.domElement.addEventListener("webglcontextrestored", invalidate);
  /** Whether the last drawn frame left something animating, and whether the frame rate shows, which counts every frame. */
  let animating = false;
  let countFrames = false;

  const applySettings = () => {
    dirty = false;
    placePiano();
    const layout = piano!.layout;
    const keyScale = settings.get("whiteKeyHeight") / 100;
    const reverse = settings.get("reverseNoteDirection");
    piano!.group.scale.z = keyScale;
    world.scale.z = reverse ? -1 : 1;
    background.set(rgb(settings.get("pianoBackgroundColor")));
    heldWhite.set(rgb(settings.get("inputNoteColorWhite")));
    heldBlack.set(rgb(settings.get("inputNoteColorBlack")));
    showHeld = settings.get("highlightActivePianoKeys");
    // The fog holds its own copy of the colour, so it fades the far lanes into the background.
    fog.color.copy(background);

    const radius = settings.get("roundedNotes") ? (settings.get("noteBorderRadius") / 100) * 0.8 : 0;
    notes.setOptions({
      width: settings.get("noteWidth") / 100,
      cornerRadius: radius,
      minLength: settings.get("minNoteHeight"),
      stroke: settings.get("strokeNotes") ? settings.get("strokeNotesWidth") : 0,
      shrink: settings.get("noteEndedShrink"),
      passDistance: settings.get("playedNoteFalloffSpeed"),
      sustain: settings.get("showSustainedNotes"),
      sustainDim: settings.get("sustainedNotesOpacity") / 100,
      activeGlow: settings.get("showHitKeys"),
      fold: settings.get("foldOutsideNotes"),
    });
    lanes.setOptions({
      showMeasureLines: settings.get("drawMeasureLines"),
      showBeatLines: settings.get("enableDrawBeatLines"),
      showMeasureNumbers: settings.get("enableDrawMeasureNumbers"),
      measureLineWidth: settings.get("measureLineThickness"),
      beatLineWidth: settings.get("beatLineThickness"),
      laneColor: rgb(settings.get("bgCol1")),
      blackLaneColor: rgb(settings.get("bgCol5")),
      dividerColor: rgb(settings.get("bgCol3")),
      measureColor: rgb(settings.get("measureLineColor")),
      beatColor: rgb(settings.get("beatLineColor")),
      numberColor: settings.get("measureNumbersColor"),
      showHeldLanes: settings.get("highlightInputLanes"),
      heldLaneOpacity: settings.get("inputLaneOpacity"),
      showMarkers: settings.get("showMarkersSong"),
      showPedalPeriods: settings.get("showSustainPeriods"),
      showPedalEvents: settings.get("showSustainOnOffs"),
      showPedalChannels: settings.get("showSustainChannels"),
    });
    if (settings.get("showParticles") && !effectsLoading) loadEffects();
    if (readTypes) particles?.setTypes(readTypes(settings));
    flames?.setOn(settings.get("showParticles") && settings.get("particlesFlames"));
    pianoLine.setOptions({
      enabled: settings.get("pianoLineEnabled"),
      speed: settings.get("pianoLineSpeed"),
      resolution: settings.get("pianoLineResolution"),
      amplitude: settings.get("pianoLineAmplitude"),
      color: rgb(settings.get("pianoLineColor")),
      opacity: settings.get("pianoLineOpacity"),
      yOffset: settings.get("pianoLineYOffset"),
    });

    const preset = settings.get("cameraPreset") as CameraPreset;
    if (preset !== rig.preset) rig.setPreset(preset);
    rig.setFrame({
      halfWidth: layout.width / 2 + NUMBER_ROOM,
      keyHalfWidth: layout.width / 2,
      pianoFront: (WHITE_KEY_LENGTH + CASE_FRONT) * keyScale,
      reverse,
      lift: settings.get("pianoPosition") / 100,
      shift,
    });
    zoom = zoomSettings(settings);
    glow.setMode(settings.get("glowMode") as GlowMode);
    glow.setStrength(settings.get("glowStrength"));
    countFrames = settings.get("showFps");
    overlays.showFps(countFrames);
    overlays.showBpm(settings.get("showBPM"));
    lyrics.setOptions({
      enabled: settings.get("lyricsEnabled"),
      background: settings.get("lyricsBackground"),
      color: settings.get("lyricsFontColor"),
      playedColor: settings.get("lyricsFontColorPlayed"),
      activeColor: settings.get("lyricsFontColorActive"),
      fontSize: settings.get("lyricsFontSize"),
      y: settings.get("lyricsY"),
      cursor: settings.get("lyricsCursorEnabled"),
      bouncing: settings.get("lyricsBouncingCursor"),
    });
    labels.setColor(rgb(settings.get("noteLabelColor")));
    chooseLabels();
    placeKeyLabels(keyScale);
    showChords = settings.get("showChords");
    chords.setColor(rgb(settings.get("noteLabelColor")));
    chords.setOptions({
      show: showChords,
      style: settings.get("chordLabelStyle") as ChordStyle,
      placement: settings.get("chordLabelPlacement") as ChordPlacement,
      roman: settings.get("showChordRomanNumerals"),
      blocks: settings.get("chordBlocks") as BlockKind,
      notation: settings.get("chordToneNotation") as BlockNotation,
      markRoot: settings.get("chordMarkRoot"),
      system: settings.get("pitchNotationSystem") as NamingChoice,
    });
    const nextCoding = readColorCoding(settings);
    const nextKey = JSON.stringify(nextCoding);
    if (nextKey !== codingKey) {
      coding = nextCoding;
      codingKey = nextKey;
      recolor = true;
    }
  };

  /** Presses the key of every note sounding at `time` and releases every other key. */
  const followNotes = (time: number) => {
    const sounding = new Map<number, Color>();
    const { range } = piano!.layout;
    const fold = notes.options.fold;
    soundingNotes.clear();
    // The window `[time, time)` holds nothing, so the query spans a microsecond.
    noteWindow.forEachVisible(time, time + 1e-6, (note) => {
      if (note.start > time || time >= note.end) return;
      const key = fitPitch(note.pitch, range, fold);
      if (key === undefined) return;
      sounding.set(key, keyColorOf(note));
      soundingNotes.set(key, note);
    });
    if (showHeld) for (const pitch of held) sounding.set(pitch, isBlack(pitch) ? heldBlack : heldWhite);
    for (const pitch of down.keys()) {
      if (!sounding.has(pitch)) {
        piano!.release(pitch);
        down.delete(pitch);
      }
    }
    for (const [pitch, color] of sounding) {
      if (down.get(pitch) === color) continue;
      piano!.press(pitch, color);
      down.set(pitch, color);
    }
  };

  /** The keys the learner holds, in their input colours, whether or not the keys show them. */
  const heldMap = new Map<number, Color>();
  const heldColors = (): ReadonlyMap<number, Color> => {
    heldMap.clear();
    for (const pitch of held) heldMap.set(pitch, isBlack(pitch) ? heldBlack : heldWhite);
    return heldMap;
  };

  /** Every pressed key as a particle source, in its pressed colour. */
  function* keySources(): Generator<ParticleSource> {
    const layout = piano!.layout;
    const left = -layout.width / 2;
    for (const [pitch, color] of down) {
      const key = layout.key(pitch);
      if (!key) continue;
      const top = key.black ? BLACK_KEY_TOP : 0;
      const length = key.black ? BLACK_KEY_LENGTH : WHITE_KEY_LENGTH;
      yield { pitch, x: left + key.center, top, length, width: key.width, color };
    }
  }

  /** The song's note sounding on each key, by the key's pitch, as `followNotes` last found them. */
  const soundingNotes = new Map<number, Note>();
  /** The notes whose bars burn this frame, and each bar as the notes placed it. */
  const burningNotes = new Set<Note>();
  const burningBars = new Map<Note, FlameBar>();

  /**
   * Every key that burns, in its note's colour, with its note's bar as the notes last placed it. A key
   * with no song note sounding on it burns in its pressed colour.
   */
  const flameSources = (): FlameSource[] => {
    const layout = piano!.layout;
    const left = -layout.width / 2;
    const keyScale = piano!.group.scale.z;
    const pitches = [...down.keys()];
    const sources: FlameSource[] = [];
    burningNotes.clear();
    burningBars.clear();
    for (const pitch of pitches) {
      const note = soundingNotes.get(pitch);
      if (note) burningNotes.add(note);
    }
    if (burningNotes.size > 0) {
      notes.forEachShown((note, x, frontZ, width, top, backZ) => {
        if (burningNotes.has(note)) burningBars.set(note, { id: note, x, width, top, backZ, frontZ });
      });
    }
    for (const pitch of pitches) {
      const key = layout.key(pitch);
      if (!key) continue;
      const note = soundingNotes.get(pitch);
      const color = note ? colorOf(note) : (down.get(pitch) ?? (key.black ? heldBlack : heldWhite));
      sources.push({
        pitch,
        x: left + key.center,
        width: key.width,
        top: key.black ? BLACK_KEY_TOP : 0,
        length: (key.black ? BLACK_KEY_LENGTH : WHITE_KEY_LENGTH) * keyScale,
        color,
        bar: note && burningBars.get(note),
      });
    }
    return sources;
  };

  /** The centre of every pressed key, across the world. */
  function* keyCentres(): Generator<number> {
    const layout = piano!.layout;
    for (const pitch of down.keys()) {
      const key = layout.key(pitch);
      if (key) yield key.center - layout.width / 2;
    }
  }

  // Hover: the pointer's place in the container, or undefined when it is outside.
  let pointer: { x: number; y: number } | undefined;
  const onPointerMove = (event: PointerEvent) => {
    const box = container.getBoundingClientRect();
    pointer = { x: event.clientX - box.left, y: event.clientY - box.top };
    // The pointer changes the picture only through the note card, which shows only with note details.
    if (settings.get("showNoteDebugInfo")) stale = true;
  };
  const onPointerLeave = () => {
    pointer = undefined;
    stale = true;
  };
  renderer.domElement.addEventListener("pointermove", onPointerMove);
  renderer.domElement.addEventListener("pointerleave", onPointerLeave);
  const raycaster = new Raycaster();
  const barPlane = new Plane(new Vector3(0, 1, 0), -HOVER_Y);
  const lanePlane = new Plane(new Vector3(0, 1, 0), 0);
  const ndc = new Vector2();
  const hit = new Vector3();

  /** The note under the point `x`, `y` of the container, in CSS pixels from its corner. */
  const pickNote = (x: number, y: number): Note | undefined => {
    const { clientWidth: w, clientHeight: h } = container;
    if (w === 0 || h === 0) return undefined;
    ndc.set((x / w) * 2 - 1, 1 - (y / h) * 2);
    raycaster.setFromCamera(ndc, rig.camera);
    if (!raycaster.ray.intersectPlane(barPlane, hit)) return undefined;
    world.worldToLocal(hit);
    return notes.noteAt(hit.x, hit.z);
  };

  const hover = () => {
    if (!pointer || !settings.get("showNoteDebugInfo")) return overlays.showNote(undefined, 0, 0);
    overlays.showNote(pickNote(pointer.x, pointer.y), pointer.x, pointer.y);
  };

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = container;
    if (w === 0 || h === 0) return;
    const ratio = Math.min(window.devicePixelRatio, 2);
    renderer.setPixelRatio(ratio);
    renderer.setSize(w, h, false);
    glow.setSize(w, h, ratio);
    rig.setAspect(w / h);
    // A new size clears the canvas, so it must draw again.
    stale = true;
  };
  const observer = new ResizeObserver(resize);
  observer.observe(container);
  resize();

  let last: number | undefined;
  /**
   * The song time the last drawn frame showed. A frame draws when the time moved from it, and a dying bar
   * flame rides on with its bar by the difference.
   */
  let drawnNow = 0;
  const frame = (time: number) => {
    const raw = last === undefined ? 0 : (time - last) / 1000;
    const seconds = Math.min(raw, MAX_FRAME);
    last = time;
    const changed = stale || dirty;
    if (dirty) applySettings();
    if (demoClock !== undefined) {
      demoClock = (demoClock + seconds) % song.duration;
      now = demoClock;
    } else if (timeSource !== undefined) now = timeSource();
    // The camera moves on every frame, as a drag or a glide moves it with no call to the scene.
    const turned = rig.update(seconds, time / 1000);
    // Nothing can look different from the last drawn frame, so this one draws nothing.
    if (!changed && !animating && !turned && now === drawnNow) return;
    stale = false;
    const nextSpeed = FAR / secondsShown(zoom, song.tempoMap, now);
    if (nextSpeed !== speed) {
      speed = nextSpeed;
      notes.setOptions({ speed });
      lanes.setOptions({ speed });
    }
    if (recolor) {
      recolor = false;
      notes.setColors(colorOf);
    }
    followNotes(now);
    lightStartKeys();
    lanes.setHeld(heldColors());
    const sparking = particles !== undefined && particles.emitters.length > 0;
    if (sparking) particles!.update(seconds, keySources());
    const waving = pianoLine.update(seconds, keyCentres());
    const springing = piano!.update(seconds);
    notes.setSelected(fingering?.selected);
    notes.update(now);
    showLabels();
    showChordsAt(now);
    lanes.update(now);
    lyrics.update(now);
    // The flames read the bars as placed above and the camera as the rig placed it.
    if (flames?.on) flames.update(seconds, flameSources(), Math.max(0, (now - drawnNow) * speed), rig.camera);
    drawnNow = now;
    // Whatever still moves by itself draws the next frame too.
    animating =
      springing ||
      waving ||
      countFrames ||
      glow.pending ||
      (sparking && particles!.emitters.some((emitter) => emitter.live() > 0)) ||
      (flames?.on === true && flames.live() > 0);
    const distance = rig.camera.position.length();
    fog.near = distance + 10;
    fog.far = distance + FAR + 40;
    hover();
    overlays.frame(raw);
    overlays.setBpm(60_000_000 / song.tempoMap.microsecondsPerBeatAt(song.tempoMap.secondsToTicks(now)));
    glow.render(raw);
  };
  renderer.setAnimationLoop(frame);

  return {
    run(on) {
      last = undefined;
      stale = true;
      renderer.setAnimationLoop(on ? frame : null);
    },

    setSong(next) {
      song = next ?? demoSong();
      lyrics.setLyrics(song.lyrics);
      demoClock = next ? undefined : 0;
      if (!next) showCycle(undefined);
      timeSource = undefined;
      now = 0;
      foundKey = songKey(song);
      chordsStale = true;
      spellNames();
      showSong();
      stale = true;
    },

    setKey(key) {
      keyOverride = key;
      chordsStale = true;
      spellNames();
      stale = true;
    },

    setTimeSource(read) {
      timeSource = read;
      stale = true;
    },

    setGuide(guide) {
      startKeys = guide?.starts ?? [];
      lanes.setGuideMarks(guide?.marks ?? []);
      stale = true;
    },

    setCycle(next) {
      showCycle(next);
      stale = true;
    },

    setTracks(next) {
      looks = next;
      colors = [];
      showSong();
      stale = true;
    },

    resetCamera() {
      rig.returnToPreset();
    },

    shiftView(by) {
      const half = piano ? piano.layout.width / 2 : 0;
      shift = Math.min(half, Math.max(-half, shift + by));
      dirty = true;
    },

    canvas: renderer.domElement,

    keyAt(x, y) {
      if (!piano) return undefined;
      const box = container.getBoundingClientRect();
      if (box.width === 0 || box.height === 0) return undefined;
      ndc.set(((x - box.left) / box.width) * 2 - 1, 1 - ((y - box.top) / box.height) * 2);
      raycaster.setFromCamera(ndc, rig.camera);
      return piano.keyAt(raycaster);
    },

    noteAt(x, y) {
      const box = container.getBoundingClientRect();
      return pickNote(x - box.left, y - box.top);
    },

    laneAt(x, y) {
      const box = container.getBoundingClientRect();
      if (box.width === 0 || box.height === 0 || speed <= 0) return undefined;
      ndc.set(((x - box.left) / box.width) * 2 - 1, 1 - ((y - box.top) / box.height) * 2);
      raycaster.setFromCamera(ndc, rig.camera);
      if (!raycaster.ray.intersectPlane(lanePlane, hit)) return undefined;
      world.worldToLocal(hit);
      const half = piano ? piano.layout.width / 2 : 0;
      return { ahead: -hit.z / speed, onLanes: Math.abs(hit.x) <= half && hit.z <= 0 && hit.z >= -FAR };
    },

    keyPoint(pitch) {
      const key = piano?.layout.key(pitch);
      if (!piano || !key) return undefined;
      const box = container.getBoundingClientRect();
      if (box.width === 0 || box.height === 0) return undefined;
      // Through the world group, whose z flips with reversed direction, then through the camera.
      hit.set(key.center - piano.layout.width / 2, KEY_POINT_HEIGHT, 0);
      world.localToWorld(hit).project(rig.camera);
      return { x: box.left + ((hit.x + 1) / 2) * box.width, y: box.top + ((1 - hit.y) / 2) * box.height };
    },

    setFingering(source) {
      stopFingering?.();
      fingering = source;
      // A change of finger recolours the bars only while the colours follow the fingers. Any change may relabel them.
      stopFingering = source.subscribe(() => {
        if (codesFingers(coding)) recolor = true;
        stale = true;
      });
      recolor = true;
      stale = true;
    },

    holdKey(pitch, isDown) {
      // A key held again, or let go again, changes nothing, so it draws nothing.
      if (isDown === held.has(pitch)) return;
      if (isDown) held.add(pitch);
      else held.delete(pitch);
      stale = true;
    },

    dispose() {
      renderer.setAnimationLoop(null);
      unsubscribe();
      stopLocale();
      stopFingering?.();
      document.removeEventListener("visibilitychange", onVisible);
      renderer.domElement.removeEventListener("webglcontextrestored", invalidate);
      renderer.domElement.removeEventListener("pointermove", onPointerMove);
      renderer.domElement.removeEventListener("pointerleave", onPointerLeave);
      observer.disconnect();
      piano?.dispose();
      notes.dispose();
      lanes.dispose();
      disposed = true;
      particles?.dispose();
      flames?.dispose();
      pianoLine.dispose();
      labels.dispose();
      keyLabels.dispose();
      chords.dispose();
      rig.dispose();
      glow.dispose();
      overlays.dispose();
      lyrics.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}

/** The colour of a `#rrggbbaa` setting as a number, its alpha left out. */
function rgb(hex: string): number {
  return Number.parseInt(hex.slice(1, 7), 16);
}

/** The pedal-held end of each note: the end of the pedal period of its track and channel that holds it. */
function pedalEnds(song: Song): SustainEnd {
  return (note) => {
    const pedals = song.tracks[note.track]?.pedals ?? [];
    // The last period starting at or before the note's end, by binary search over start times.
    let low = 0;
    let high = pedals.length;
    while (low < high) {
      const mid = (low + high) >>> 1;
      if (pedals[mid]!.start <= note.end) low = mid + 1;
      else high = mid;
    }
    for (let i = low - 1; i >= 0 && i >= low - 4; i--) {
      const pedal = pedals[i]!;
      if (pedal.channel === note.channel && pedal.end > note.end) return pedal.end;
    }
    return note.end;
  };
}

const DEMO_TICKS_PER_BEAT = 480;
/** The demo's chords, one per measure, as their root's pitch and whether they are minor. */
const DEMO_CHORDS = [
  [48, false],
  [45, true],
  [41, false],
  [43, false],
] as const;
const DEMO_MEASURES = 32;
/** How many measures each of the demo's lyric lines spans. The catalog's lines repeat. */
const DEMO_LINE_MEASURES = 4;
/** How many measures each of the demo's markers spans. */
const DEMO_PART_MEASURES = 8;

/**
 * A generated demo song at 120 BPM in 4/4: a left hand on track 0 and broken chords on track 1, with
 * the pedal held through each measure, a marker for each part and a line of lyrics every four measures.
 * Its words are the live catalog's `player.shell.demo`, read when it is built.
 */
export function demoSong(): Song {
  const say = t().player.shell.demo;
  const tempoMap = new TempoMap({ kind: "ticks", ticksPerBeat: DEMO_TICKS_PER_BEAT }, [{ tick: 0, microsecondsPerBeat: 500_000 }], [
    { tick: 0, numerator: 4, denominator: 4 },
  ]);
  const left: Note[] = [];
  const right: Note[] = [];
  const pedals: Song["tracks"][number]["pedals"] = [];
  const measure = DEMO_TICKS_PER_BEAT * 4;
  const note = (track: number, pitch: number, startTick: number, ticks: number, velocity: number): Note => ({
    track,
    channel: track,
    pitch,
    velocity,
    startTick,
    endTick: startTick + ticks,
    start: tempoMap.ticksToSeconds(startTick),
    end: tempoMap.ticksToSeconds(startTick + ticks),
  });
  for (let m = 0; m < DEMO_MEASURES; m++) {
    const [root, minor] = DEMO_CHORDS[m % DEMO_CHORDS.length]!;
    const at = m * measure;
    left.push(note(0, root - 12, at, measure / 2, 80), note(0, root - 5, at + measure / 2, measure / 2, 72));
    const third = minor ? 3 : 4;
    const tones = [root + 12, root + 12 + third, root + 19, root + 24, root + 24 + third, root + 31, root + 36, root + 31];
    tones.forEach((pitch, i) => right.push(note(1, pitch, at + (i * measure) / 8, measure / 8, 70 + (i % 4) * 8)));
    pedals.push({ track: 1, channel: 1, startTick: at, endTick: at + measure - 20, start: tempoMap.ticksToSeconds(at), end: tempoMap.ticksToSeconds(at + measure - 20) });
  }
  const endTick = DEMO_MEASURES * measure;
  const timed = (tick: number, text: string): TimedText => ({ track: 1, tick, seconds: tempoMap.ticksToSeconds(tick), text });
  const markers: TimedText[] = [];
  for (let m = 0; m < DEMO_MEASURES; m += DEMO_PART_MEASURES) markers.push(timed(m * measure, say.part(m / DEMO_PART_MEASURES + 1)));
  const lyrics: TimedText[] = [];
  for (let m = 0; m < DEMO_MEASURES; m += DEMO_LINE_MEASURES) {
    const words = say.lyrics[(m / DEMO_LINE_MEASURES) % say.lyrics.length]!.split(" ");
    const syllables = words.flatMap((word, w) => {
      const parts = word.split("|");
      return parts.map((part, p) => (p < parts.length - 1 ? part : w < words.length - 1 ? `${part} ` : `${part}\r`));
    });
    const step = (DEMO_LINE_MEASURES * measure) / (syllables.length + 1);
    syllables.forEach((text, i) => lyrics.push(timed(m * measure + Math.round(i * step), text)));
  }
  const notes = [...left, ...right].sort((a, b) => a.start - b.start || a.pitch - b.pitch);
  const track = (index: number, trackNotes: Note[], trackPedals: typeof pedals) => ({
    index,
    name: index === 0 ? say.leftHand : say.rightHand,
    program: 0,
    percussion: false,
    channels: [index],
    notes: trackNotes,
    pedals: trackPedals,
  });
  return {
    tempoMap,
    tracks: [track(0, left, []), track(1, right, pedals)],
    notes,
    keySignatures: [],
    markers,
    lyrics,
    endTick,
    duration: tempoMap.ticksToSeconds(endTick),
    problems: [],
  };
}
