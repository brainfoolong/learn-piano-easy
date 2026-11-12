import type { Note } from "../midi/song";
import { expect, test } from "../testing";
import { KeyLights, litKeys } from "./key-lighting";

const part = { hands: "both", range: { first: 36, last: 96 }, fold: false } as const;

function note(pitch: number, beat: number): Note {
  return { track: 0, channel: 0, pitch, velocity: 80, startTick: beat * 480, endTick: beat * 480 + 240, start: beat, end: beat + 0.5 };
}

test("the_next_chord_lights_and_goes_dark_once_it_starts", () => {
  const notes = [note(60, 1), note(64, 1), note(108, 1), note(62, 2)];
  expect([...litKeys(notes, 0, part)]).toEqual([60, 64]);
  expect([...litKeys(notes, 1, part)]).toEqual([60, 64]);
  expect([...litKeys(notes, 1.1, part)]).toEqual([62]);
  expect([...litKeys(notes, 3, part)]).toEqual([]);
});

test("key_lights_send_only_the_changes_at_velocity_1", () => {
  const sent: number[][] = [];
  const port = { send: (data: number[]) => void sent.push(data) };
  const lights = new KeyLights();
  lights.show(port, 2, new Set([60, 64]));
  lights.show(port, 2, new Set([64, 67]));
  expect(sent).toEqual([
    [0x92, 60, 1],
    [0x92, 64, 1],
    [0x82, 60, 0],
    [0x92, 67, 1],
  ]);

  // Turning lighting off darkens every key it lit.
  sent.length = 0;
  lights.show(undefined, 2, new Set());
  expect(sent).toEqual([
    [0x82, 64, 0],
    [0x82, 67, 0],
  ]);
  expect(lights.lit.size).toBe(0);
});
