import type { TimedText } from "../midi/song";
import { expect, test } from "../testing";
import { LAST_HOLD, LEAD, LINE_GAP, lineAt, lyricLines, syllableAt } from "./lyrics";

const lyric = (seconds: number, text: string): TimedText => ({ track: 0, tick: seconds * 480, seconds, text });
const texts = (lines: ReturnType<typeof lyricLines>) => lines.map((line) => line.syllables.map((s) => s.text).join(""));

test("lyrics_break_at_returns_slashes_and_gaps", () => {
  const lines = lyricLines([
    lyric(0, "Twin"),
    lyric(0.5, "kle "),
    lyric(1, "star\r"),
    lyric(2, "How "),
    lyric(2.5, "I "),
    lyric(3, "won"),
    lyric(3.5, "der"),
    lyric(4, "\\Up "),
    lyric(4.5, "a"),
    lyric(5, "bove"),
    lyric(5.5 + LINE_GAP + 1, "Like "),
  ]);
  expect(texts(lines)).toEqual(["Twinkle star", "How I wonder", "Up above", "Like "]);
  // Each line holds until the next starts, or `LAST_HOLD` after its last syllable.
  expect(lines[0]!.end).toBe(2);
  expect(lines[2]!.end).toBe(5 + LAST_HOLD);
});

test("unspaced_lyrics_take_a_space_after_each_word", () => {
  const lines = lyricLines([lyric(0, "Hap-"), lyric(0.5, "py"), lyric(1, "day")]);
  expect(texts(lines)).toEqual(["Happy day "]);
});

test("the_cursor_follows_the_sung_syllable", () => {
  const lines = lyricLines([lyric(10, "one "), lyric(11, "two "), lyric(13, "three")]);
  expect(lineAt(lines, 10 - LEAD - 0.1)).toBe(-1);
  expect(lineAt(lines, 10 - LEAD)).toBe(0);
  expect(lineAt(lines, 13 + LAST_HOLD)).toBe(-1);
  const line = lines[0]!;
  expect(syllableAt(line, 9)).toEqual({ index: -1, progress: 0 });
  expect(syllableAt(line, 12)).toEqual({ index: 1, progress: 0.5 });
  expect(syllableAt(line, 14)).toEqual({ index: 2, progress: 0.5 });
});
