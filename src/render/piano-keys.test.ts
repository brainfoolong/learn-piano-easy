import { expect, test } from "../testing";
import { noteName } from "../theory/note-names";
import { describeMarks, type Mark, MARKS } from "../ui/mark";
import { layoutKeys } from "./key-layout";
import { flatView, frameOf, keySpans, MARK_STRENGTH, MARK_TOKENS, markColors, reachSpan } from "./piano-keys";

test("marks_are_named_for_a_screen_reader", () => {
  const markNames: Record<Mark, string> = { next: "Play next", correct: "Right", mistake: "Wrong" };
  const marks = new Map<number, Mark>([
    [67, "next"],
    [60, "correct"],
    [64, "correct"],
    [66, "mistake"],
  ]);
  const fingers = new Map([
    [60, 1],
    [67, 5],
  ]);
  const name = (pitch: number) => noteName(pitch);

  // Each mark names its keys from low to high, in the order next, right, wrong, with any finger.
  expect(describeMarks(marks, markNames, name, fingers, (finger) => `finger ${finger}`)).toBe(
    "Play next: G4 (finger 5). Right: C4 (finger 1), E4. Wrong: F♯4",
  );
  // Without a way to say a finger, the keys are named alone, and no marks say nothing.
  expect(describeMarks(marks, markNames, name, fingers)).toBe("Play next: G4. Right: C4, E4. Wrong: F♯4");
  expect(describeMarks(new Map(), markNames, name, fingers)).toBe("");
});

test("the_reach_spans_the_shown_keys", () => {
  const layout = layoutKeys({ first: 48, last: 72 });
  const key = (pitch: number) => layout.key(pitch)!;

  // From the left edge of C4 to the right edge of C5.
  expect(reachSpan(layout, { first: 60, last: 72 })).toEqual({ first: 60, last: 72, x: key(60).x, width: key(72).x + key(72).width - key(60).x });
  // A reach that starts on a black key starts at its edge.
  expect(reachSpan(layout, { first: 61, last: 64 })).toEqual({ first: 61, last: 64, x: key(61).x, width: key(64).x + key(64).width - key(61).x });
  // A reach wider than the keys shown stops at their edges, and one beside them shows nothing.
  expect(reachSpan(layout, { first: 36, last: 96 })).toEqual({ first: 48, last: 72, x: 0, width: layout.width });
  expect(reachSpan(layout, { first: 84, last: 96 })).toBeUndefined();
});

test("a_mark_takes_its_token_colour", () => {
  const tokens: Record<string, string> = { "--c-brand": "#f6a723", "--c-success-vivid": "#22c55e", "--c-mistake": "#c2283a" };
  const read = (token: string) => tokens[token] ?? "#000000";

  // The next key is honey, a right one vivid green and a wrong one red, each read from its token.
  expect(MARK_TOKENS).toEqual({ next: "--c-brand", correct: "--c-success-vivid", mistake: "--c-mistake" });
  expect(markColors(read)).toEqual({ next: "#f6a723", correct: "#22c55e", mistake: "#c2283a" });
  // Each mark is a strong tint, so it reads as its colour on a white key.
  for (const mark of MARKS) expect(MARK_STRENGTH[mark]).toBeGreaterThanOrEqual(0.7);
  // Each mark reads its own token, so no two marks share a colour.
  expect(new Set(MARKS.map((mark) => MARK_TOKENS[mark])).size).toBe(MARKS.length);
});

test("every_key_span_lies_inside_the_frame_in_pitch_order", () => {
  const layout = layoutKeys({ first: 48, last: 72 });
  const frame = frameOf(layout, true);
  const spans = keySpans(layout, frame);
  // The keys span the frame from edge to edge, and the finger band adds room above them only.
  expect(spans[0]!.left).toBe(0);
  expect(spans.at(-1)!.left + spans.at(-1)!.width).toBeCloseTo(1, 9);
  expect(frameOf(layout, false).bottom).toBe(frame.bottom);
  expect(frameOf(layout, false).top).toBeLessThan(frame.top);

  expect(spans.map((span) => span.pitch)).toEqual(layout.keys.map((key) => key.pitch));
  for (const span of spans) {
    const inside = span.left >= 0 && span.top >= 0 && span.left + span.width <= 1 && span.top + span.height <= 1;
    expect({ pitch: span.pitch, inside }).toEqual({ pitch: span.pitch, inside: true });
  }
  // A black key's span sits between its white neighbours and ends before them.
  const [c, cSharp, d] = [spans[0]!, spans[1]!, spans[2]!];
  expect(cSharp.black).toBe(true);
  expect(cSharp.left).toBeGreaterThan(c.left);
  expect(cSharp.left + cSharp.width).toBeLessThan(d.left + d.width);
  expect(cSharp.top + cSharp.height).toBeLessThan(c.top + c.height);

  // A box twice as tall as the frame keeps the keys' width and front edge, and shows more above them.
  const { view, inset } = flatView(frame, (frame.right - frame.left) / (frame.top - frame.bottom) / 2);
  expect([view.left, view.right, view.bottom]).toEqual([frame.left, frame.right, frame.bottom]);
  expect(inset.width).toBe(1);
  expect(inset.top).toBeCloseTo(0.5, 9);
  expect(inset.height).toBeCloseTo(0.5, 9);
});
