import { join } from "node:path";

import { expect, test } from "../testing";
import { Soundfont, loadSoundfont, noteNumber, type SampleDecoder } from "./soundfont";

/** A decoder that returns the decoded bytes as an array, and counts its calls. */
function fakeDecoder(): SampleDecoder<number[]> & { calls: number } {
  return {
    calls: 0,
    async decodeAudioData(data) {
      this.calls++;
      return [...new Uint8Array(data)];
    },
  };
}

test("note_names_map_to_midi_numbers", () => {
  expect(["A0", "Bb0", "C4", "F#3", "C8", "H2"].map(noteNumber)).toEqual([21, 22, 60, 54, 108, undefined]);
});

test("a_note_decodes_once_on_first_need", async () => {
  const decoder = fakeDecoder();
  const font = new Soundfont({ C4: "data:audio/mp3;base64,AQID", E4: "BAU=" }, decoder);
  expect(decoder.calls).toBe(0);
  const [a, b] = await Promise.all([font.sample(60), font.sample(60)]);
  expect(a).toEqual([1, 2, 3]);
  expect(b).toBe(a);
  expect(await font.sample(64)).toEqual([4, 5]);
  expect(decoder.calls).toBe(2);
});

test("a_missing_note_plays_from_the_nearest_sample", async () => {
  const font = new Soundfont({ C4: "AQID", E4: "BAU=" }, fakeDecoder());
  expect([10, 61, 62, 63, 120].map((n) => font.nearest(n))).toEqual([60, 60, 60, 64, 64]);
  expect(await font.sample(63)).toEqual([4, 5]);
});

test("a_failed_decode_is_tried_again", async () => {
  let fail = true;
  const decoder: SampleDecoder<string> = {
    decodeAudioData: async () => {
      if (fail) throw new Error("bad");
      return "ok";
    },
  };
  const font = new Soundfont({ C4: "AQID" }, decoder);
  await expect(font.sample(60)).rejects.toThrow("bad");
  fail = false;
  expect(await font.sample(60)).toBe("ok");
});

test("the_shipped_sound_set_plays_every_piano_key_within_a_semitone", async () => {
  const fetcher = async (url: string) => new Response(Bun.file(join(import.meta.dir, "../../public", url)));
  const font = await loadSoundfont(fakeDecoder(), fetcher);
  let widest = 0;
  for (let key = 21; key <= 108; key++) widest = Math.max(widest, Math.abs(font.nearest(key) - key));
  expect({ low: font.notes[0], high: font.notes.at(-1), withinASemitone: widest <= 1 })
    .toEqual({ low: 21, high: 108, withinASemitone: true });
});
