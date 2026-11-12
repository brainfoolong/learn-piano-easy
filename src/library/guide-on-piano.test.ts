import { readFileSync } from "node:fs";
import { readMidi } from "../midi/smf-read";
import { songFromMidi } from "../midi/song";
import { expect, test } from "../testing";
import { readGuide } from "./guide";
import { guideFingers, pianoGuide, TRICKY_MARK_TEXT } from "./guide-on-piano";

const DIR = "public/songs/ours/ode-to-joy";
const song = songFromMidi(readMidi(new Uint8Array(readFileSync(`${DIR}/common.mid`))));
const version = readGuide(JSON.parse(readFileSync(`${DIR}/guide.json`, "utf8")))!.versions.common;

test("the_guide_marks_its_bars_and_start_keys_on_the_piano", () => {
  const fingers = guideFingers(song, version)!;
  expect(fingers.get("0:0")).toBe(version.fingers.right[0]);
  expect(fingers.get("1:0")).toBe(version.fingers.left[0]);
  expect(fingers.size).toBe(version.fingers.right.length + version.fingers.left.length);
  // A guide written for other notes gives no fingers at all.
  expect(guideFingers(song, { ...version, fingers: { right: [1], left: [] } })).toBeUndefined();

  const { marks, starts } = pianoGuide(song, version, 2);
  const ticks = marks.map((mark) => mark.tick);
  expect(ticks).toEqual([...new Set(ticks)].sort((a, b) => a - b));
  // Bar 1 starts the song, and each tricky spot's bar carries a mark.
  expect(marks[0]!.tick).toBe(0);
  const bars = marks.filter((mark) => mark.text.includes(TRICKY_MARK_TEXT)).map((mark) => song.tempoMap.positionAtTick(mark.tick).measure + 1);
  expect(bars).toEqual(version.tricky.map((spot) => spot.bar).sort((a, b) => a - b));
  // The start keys move with the transposition, from the lowest.
  const pitches = [...version.start.right, ...version.start.left].filter((pitch) => pitch !== null).map((pitch) => pitch + 2);
  expect(starts.map((key) => key.pitch)).toEqual(pitches.sort((a, b) => a - b));
});
