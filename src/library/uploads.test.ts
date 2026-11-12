import { expect, test } from "../testing";
import { isSongName, titleOf, uploadId } from "./uploads";

test("the_same_bytes_share_one_upload_id", () => {
  const a = new Uint8Array([0x4d, 0x54, 0x68, 0x64, 1, 2, 3]);
  expect(uploadId(a)).toBe(uploadId(a.slice()));
  expect(uploadId(a)).not.toBe(uploadId(new Uint8Array([0x4d, 0x54, 0x68, 0x64, 1, 2, 4])));
  expect(uploadId(a)).toMatch(/^upload-7-[0-9a-f]{8}$/);
});

test("only_midi_and_musicxml_file_names_are_taken", () => {
  const names = ["a.mid", "B.MIDI", "c.musicxml", "d.MXL", "e.xml", "f.mp3", "mid"];
  expect(names.map(isSongName)).toEqual([true, true, true, true, true, false, false]);
  expect(titleOf("my waltz.Mid")).toBe("my waltz");
  expect(titleOf("a minuet.mxl")).toBe("a minuet");
});
