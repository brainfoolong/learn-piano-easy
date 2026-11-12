/**
 * Wait mode: the song stops at each moment the learner plays, until they hold every key of it.
 *
 * The learner's notes are those of the chosen hands that their keyboard can play. A moment is the
 * learner's notes that start on one tick. Wait mode holds the transport's clock at the next moment
 * ahead, so the song time, the scene and the scheduler all stop there. Once every key of the moment is
 * struck and held, it lets the clock run on to the next moment. The app plays every other note.
 *
 * Decisions, and what each costs:
 * - Each track takes a hand: right, left, split at middle C, or none. The learner sets it in the tracks
 *   panel. Until then `autoHands` picks it: of the first two pitched tracks, the one whose notes lie
 *   higher on average is the right hand and the other the left. A lone pitched track splits.
 * - A note outside the learner's keyboard range is never required. With `foldOutsideNotes`, it is
 *   required on the key it folds onto, as the scene shows it.
 * - A key counts for a moment when it was struck after the last moment released and is still held. A
 *   key held on from before never counts again, so a repeated note is struck anew. A key struck early,
 *   before the clock reaches its moment, counts once the clock gets there.
 * - A paused song takes no moment, so the learner can try a chord before playing on.
 * - The clock holds ahead of time, so the notes the app plays at a moment wait for the learner too. A
 *   seek clears the hold, and the next frame sets it again. In that frame the scheduler may queue the
 *   app's notes up to its look-ahead past the next moment.
 * - The core, `WaitMode`, reads a clock and the bus through small interfaces, so its tests need no browser.
 * - Wait mode checks once a frame and on each note-on, and finds the next moment by a linear search.
 */
import { normalizeRange } from "../keyboard/range";
import type { KeyRange } from "../render/key-layout";
import { fitPitch } from "../keyboard/song-fit";
import type { Note, Song } from "../midi/song";
import type { Transport } from "../play/transport";
import type { SettingId } from "../settings/schema";
import type { SettingsStore } from "../settings/store";
import type { InputBus } from "./input-bus";

/** The hands the learner plays. */
export type Hands = "both" | "right" | "left";

/** Which notes are the learner's: their hands, their keyboard, and whether outside notes fold onto it. */
export interface LearnerPart {
  readonly hands: Hands;
  readonly range: KeyRange;
  readonly fold: boolean;
}

/** The learner's notes that start on one tick, and the keys that play them. */
export interface Moment {
  readonly start: number;
  readonly pitches: readonly number[];
}

/** Song times closer than this are one time, in seconds. */
const EPSILON = 1e-6;

/** Middle C, where one track splits between the hands. */
const SPLIT_PITCH = 60;

/** The hand that plays a track: one hand, both split at middle C, or none, so the app plays it. */
export type TrackHand = "right" | "left" | "split" | "none";

/** The hand each track of `song` takes until the learner picks one, by track index. */
export function autoHands(song: Song): TrackHand[] {
  const hands: TrackHand[] = song.tracks.map(() => "none");
  const pitched = song.tracks.filter((track) => !track.percussion && track.notes.length > 0);
  const [first, second] = pitched;
  if (first === undefined) return hands;
  if (second === undefined) {
    hands[first.index] = "split";
    return hands;
  }
  const mean = (notes: readonly Note[]) => notes.reduce((sum, note) => sum + note.pitch, 0) / notes.length;
  const firstIsRight = mean(first.notes) >= mean(second.notes);
  hands[first.index] = firstIsRight ? "right" : "left";
  hands[second.index] = firstIsRight ? "left" : "right";
  return hands;
}

/** The hand that plays `note` when its track takes `hand`, or undefined when no hand plays it. */
export function handOfNote(note: Note, hand: TrackHand | undefined): "right" | "left" | undefined {
  if (hand === "split") return note.pitch < SPLIT_PITCH ? "left" : "right";
  return hand === "right" || hand === "left" ? hand : undefined;
}

/** The key the learner plays `note` on, or undefined when the app plays it. */
export function keyOf(note: Note, part: LearnerPart): number | undefined {
  return fitPitch(note.pitch, part.range, part.fold);
}

/** The notes of `song` the learner plays, in start order, with `hands` giving each track's hand by index. */
export function requiredNotes(song: Song, part: LearnerPart, hands: readonly TrackHand[] = autoHands(song)): Note[] {
  return song.notes.filter((note) => {
    const plays = handOfNote(note, hands[note.track]);
    if (plays === undefined || (part.hands !== "both" && plays !== part.hands)) return false;
    return keyOf(note, part) !== undefined;
  });
}

/** `notes`, the learner's in start order, grouped into moments by their start tick. */
export function momentsOf(notes: readonly Note[], part: LearnerPart): Moment[] {
  const moments: { start: number; tick: number; pitches: number[] }[] = [];
  for (const note of notes) {
    const key = keyOf(note, part);
    if (key === undefined) continue;
    const last = moments[moments.length - 1];
    if (last !== undefined && last.tick === note.startTick) {
      if (!last.pitches.includes(key)) last.pitches.push(key);
    } else moments.push({ start: note.start, tick: note.startTick, pitches: [key] });
  }
  return moments.map(({ start, pitches }) => ({ start, pitches }));
}

/** What wait mode needs of the clock. A `Transport` is one. */
export interface WaitClock {
  /** The song time now, in seconds. */
  readonly time: number;
  /** Whether the song plays. A paused song takes no moment. */
  readonly playing: boolean;
  /** The song time that song time stops at, or undefined. A seek clears it. */
  readonly heldAt: number | undefined;
  /** Stops song time at `seconds` ahead, or lets it run with undefined. */
  holdAt(seconds: number | undefined): void;
}

/** Holds a clock at each moment until the learner holds its keys. */
export class WaitMode {
  readonly #clock: WaitClock;
  readonly #unsubscribe: () => void;
  #moments: readonly Moment[] = [];
  /** The moment the clock holds at, or undefined while none is ahead. */
  #target: Moment | undefined;
  /** The start of the moment the learner last played, or -Infinity. */
  #passed = -Infinity;
  /** The keys struck since the last moment released, and held since. */
  readonly #struck = new Set<number>();

  constructor(bus: Pick<InputBus, "subscribe">, clock: WaitClock) {
    this.#clock = clock;
    this.#unsubscribe = bus.subscribe((event) => {
      if (event.type === "noteOn") {
        this.#struck.add(event.pitch);
        this.#check();
      } else if (event.type === "noteOff") this.#struck.delete(event.pitch);
    });
  }

  /** The moment the clock holds at, or undefined. */
  get target(): Moment | undefined {
    return this.#target;
  }

  /** Waits for `moments`, in start order, or for nothing when empty. */
  setMoments(moments: readonly Moment[]): void {
    this.#moments = moments;
    this.tick();
  }

  /** Holds the clock at the next moment ahead, and lets it run once the learner holds its keys. Call it every frame. */
  tick(): void {
    const time = this.#clock.time;
    if (time < this.#passed - EPSILON) this.#passed = -Infinity;
    const floor = Math.max(time - EPSILON, this.#passed + EPSILON);
    this.#target = this.#moments.find((moment) => moment.start >= floor);
    if (this.#target?.start !== this.#clock.heldAt) this.#clock.holdAt(this.#target?.start);
    this.#check();
  }

  /** Stops listening and lets the clock run. */
  dispose(): void {
    this.#unsubscribe();
    this.#clock.holdAt(undefined);
  }

  #check(): void {
    const target = this.#target;
    if (target === undefined || !this.#clock.playing || this.#clock.time < target.start - EPSILON) return;
    if (!target.pitches.every((pitch) => this.#struck.has(pitch))) return;
    for (const pitch of target.pitches) this.#struck.delete(pitch);
    this.#passed = target.start;
    this.tick();
  }
}

/** The settings that change which notes are the learner's. */
const PART_SETTINGS: ReadonlySet<SettingId> = new Set<SettingId>(["playHands", "keyboardFirstNote", "keyboardLastNote", "foldOutsideNotes"]);

/** The learner's part as the settings say. */
export function learnerPart(settings: Pick<SettingsStore, "get">): LearnerPart {
  return {
    hands: settings.get("playHands"),
    range: normalizeRange(settings.get("keyboardFirstNote"), settings.get("keyboardLastNote")),
    fold: settings.get("foldOutsideNotes"),
  };
}

/** Where wait mode reads each track's hand. The `TrackState` of `src/library/track-settings.ts` is one. */
export interface TrackHands {
  /** The hand of each track of the open song, by track index. */
  hands(): readonly TrackHand[];
  /** Hears each change of the hands. Returns what stops it. */
  subscribe(listener: () => void): () => void;
}

/**
 * Gives `transport` the learner's notes from the settings and the track hands, and runs wait mode while `waitForNotes` is
 * on. Wait mode then checks every frame. Returns what stops it.
 */
export function attachWaitMode(transport: Transport, bus: InputBus, settings: SettingsStore, tracks: TrackHands): () => void {
  const wait = new WaitMode(bus, transport);
  const refresh = () => {
    const part = learnerPart(settings);
    wait.setMoments(settings.get("waitForNotes") ? momentsOf(transport.required, part) : []);
  };
  const pick = () => {
    const part = learnerPart(settings);
    const hands = tracks.hands();
    transport.learner = (shown) => requiredNotes(shown, part, hands);
  };
  const stopTracks = tracks.subscribe(pick);
  const stopShow = transport.onShow(refresh);
  const stopSettings = settings.subscribe((id) => {
    if (PART_SETTINGS.has(id)) pick();
    else if (id === "waitForNotes") {
      transport.learnerPlays = settings.get("waitForNotes");
      refresh();
    }
  });
  transport.learnerPlays = settings.get("waitForNotes");
  pick();
  let frame = requestAnimationFrame(function each() {
    wait.tick();
    frame = requestAnimationFrame(each);
  });
  return () => {
    cancelAnimationFrame(frame);
    stopTracks();
    stopShow();
    stopSettings();
    wait.dispose();
  };
}
