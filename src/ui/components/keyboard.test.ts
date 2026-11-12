import { FULL_RANGE, isBlack, layoutKeys } from "../../render/key-layout";
import { noteName } from "../../theory/note-names";
import { expect, test } from "../../testing";
import { BLACK_LENGTH, describeMarks, FINGER_BAND, keyboardGeometry, type Mark, WHITE_LENGTH, WHITE_WIDTH } from "./keyboard";

test("keys_sit_where_the_3d_piano_puts_them", () => {
  for (const range of [FULL_RANGE, { first: 48, last: 72 }, { first: 61, last: 66 }, { first: 60, last: 60 }]) {
    const layout = layoutKeys(range);
    for (const fingers of [false, true]) {
      const geometry = keyboardGeometry(range, fingers);
      // The same range, widened to white keys the same way, and as wide as its white keys.
      expect(geometry.range).toEqual(layout.range);
      expect(geometry.width).toBe(layout.width * WHITE_WIDTH);
      expect(geometry.top).toBe(fingers ? FINGER_BAND : 0);
      expect(geometry.height).toBe(geometry.top + WHITE_LENGTH);
      expect(geometry.keys.length).toBe(layout.keys.length);

      // Each key's place and width scale the 3D piano's by one white key's width.
      for (const box of geometry.keys) {
        const key = layout.key(box.pitch)!;
        expect({ pitch: box.pitch, black: box.black }).toEqual({ pitch: key.pitch, black: isBlack(key.pitch) });
        expect(box.x / WHITE_WIDTH).toBeCloseTo(key.x, 9);
        expect(box.width / WHITE_WIDTH).toBeCloseTo(key.width, 9);
        expect(box.y).toBe(geometry.top);
        expect(box.height).toBe(box.black ? BLACK_LENGTH : WHITE_LENGTH);
      }

      // Every black key draws after every white key, so it sits on top.
      const firstBlack = geometry.keys.findIndex((box) => box.black);
      if (firstBlack >= 0) expect(geometry.keys.slice(firstBlack).every((box) => box.black)).toBe(true);
    }
  }
});

test("every_highlighted_key_is_named_for_a_screen_reader", () => {
  const markNames: Record<Mark, string> = { next: "Play next", correct: "Right", mistake: "Wrong" };
  const marks = new Map<number, Mark>([
    [64, "next"],
    [60, "next"],
    [67, "correct"],
    [61, "mistake"],
    [70, "mistake"],
  ]);
  const text = describeMarks(marks, markNames, (pitch) => noteName(pitch));

  // Every marked key is named, after the name of its mark, and an unmarked key is not.
  for (const [pitch, mark] of marks) {
    const name = noteName(pitch);
    expect({ pitch, named: text.includes(name) }).toEqual({ pitch, named: true });
    const after = text.lastIndexOf(markNames[mark], text.indexOf(name));
    expect({ pitch, markBefore: after >= 0 }).toEqual({ pitch, markBefore: true });
  }
  expect(text.includes(noteName(62))).toBe(false);
  expect(text).toBe("Play next: C4, E4. Right: G4. Wrong: C♯4, A♯4");

  // A finger is named with its key, and no marks say nothing.
  const fingered = describeMarks(new Map([[60, "next"]]), markNames, (pitch) => noteName(pitch), new Map([[60, 1]]), (f) => `finger ${f}`);
  expect(fingered).toBe("Play next: C4 (finger 1)");
  expect(describeMarks(new Map(), markNames, (pitch) => noteName(pitch))).toBe("");
});
