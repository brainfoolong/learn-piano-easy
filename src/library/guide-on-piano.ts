/**
 * The guide of a version on the piano: its fingers as note keys for the fingering editor, and its start
 * keys and bar marks for the scene.
 *
 * Decisions, and what each costs:
 * - The guide's fingers apply only when each hand's list holds one finger per note of its track. A
 *   guide written for other notes would mark the wrong ones, so it gives no fingers at all.
 * - A tip shows as a mark at its first bar, and a tricky spot as a mark at its bar. The mark says only
 *   what kind it is, since the lanes have room for a few words, and the guide panel holds the text.
 *   The mark's words come from the live locale when the marks are made, and keep that language.
 * - A bar counts from 1, and bar 1 starts at the song's first measure, as the loop's measures do.
 * - The start keys move with the song's transposition, so they light the keys the shown notes press.
 */
import { t } from "../i18n/live";
import { playerLibrary } from "../i18n/messages/player-library.en";
import type { Song, TimedText } from "../midi/song";
import type { Finger, Hand } from "../theory/fingering";
import type { TipKind, VersionGuide } from "./guide";

/** The track that holds each hand's notes in a song of ours. */
export const HAND_TRACK: Readonly<Record<Hand, number>> = { right: 0, left: 1 };

/** A key of the start position, and the hand whose finger rests on it. */
export interface StartKey {
  pitch: number;
  hand: Hand;
}

/** What the scene shows of a guide: its marks on the lanes and its start keys. */
export interface PianoGuide {
  /** In time order. */
  marks: TimedText[];
  /** From the lowest key. */
  starts: StartKey[];
}

/** The guide's fingers by note key, as `noteKey` in `src/theory/fingering-editor.ts` writes it, or undefined when they do not fit `song`. */
export function guideFingers(song: Song, version: VersionGuide): Map<string, Finger> | undefined {
  const out = new Map<string, Finger>();
  for (const hand of ["right", "left"] as const) {
    const track = HAND_TRACK[hand];
    const fingers = version.fingers[hand];
    if (song.tracks[track]?.notes.length !== fingers.length) return undefined;
    fingers.forEach((finger, index) => out.set(`${track}:${index}`, finger));
  }
  return out;
}

/** The text of a tip's mark, by its kind, in the live locale. */
export function tipMarkText(kind: TipKind): string {
  const m = t().player.library.guide;
  return m.tipMark(m.tipKinds[kind]);
}

/** The text of a tricky spot's mark, in the live locale. */
export function trickyMarkText(): string {
  return t().player.library.guide.trickyMark;
}

/** A tricky spot's mark in English, the default locale the tests run in. */
export const TRICKY_MARK_TEXT = playerLibrary.guide.trickyMark;

/** The marks and start keys of `version` in `song`, its start keys moved `transpose` semitones. */
export function pianoGuide(song: Song, version: VersionGuide, transpose = 0): PianoGuide {
  const at = (bar: number, text: string): TimedText => {
    const tick = song.tempoMap.tickOfPosition(bar - 1, 0);
    return { track: 0, tick, seconds: song.tempoMap.ticksToSeconds(tick), text };
  };
  const sorted = [
    ...version.tips.map((tip) => at(tip.fromBar, tipMarkText(tip.kind))),
    ...version.tricky.map((spot) => at(spot.bar, trickyMarkText())),
  ].sort((a, b) => a.tick - b.tick);
  // Two marks on one bar share one line, so their texts never draw over each other.
  const marks: TimedText[] = [];
  for (const mark of sorted) {
    const last = marks.at(-1);
    if (last?.tick === mark.tick) last.text = `${last.text} · ${mark.text}`;
    else marks.push(mark);
  }
  const starts: StartKey[] = [];
  for (const hand of ["right", "left"] as const) {
    for (const pitch of version.start[hand]) if (pitch !== null) starts.push({ pitch: pitch + transpose, hand });
  }
  return { marks, starts: starts.sort((a, b) => a.pitch - b.pitch) };
}
