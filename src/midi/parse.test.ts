import { expect, test } from "../testing";
import { parseReply, songFromReply, type ParseReply } from "./parse";

/** A format-0 file of 480 ticks per beat: tempo 1 s per beat, one note of 2 beats from beat 1. */
const FILE = new Uint8Array([
  0x4d, 0x54, 0x68, 0x64, 0, 0, 0, 6, 0, 0, 0, 1, 0x01, 0xe0,
  0x4d, 0x54, 0x72, 0x6b, 0, 0, 0, 21,
  0x00, 0xff, 0x51, 0x03, 0x0f, 0x42, 0x40, // tempo 1000000 us per beat
  0x83, 0x60, 0x90, 60, 100, // at tick 480, note-on C4
  0x87, 0x40, 0x80, 60, 0, // at tick 1440, note-off C4
  0x00, 0xff, 0x2f, 0x00,
]);

test("a_posted_song_rebuilds_with_a_working_tempo_map", async () => {
  // structuredClone does to the reply what postMessage does.
  const reply: ParseReply = structuredClone(await parseReply({ id: 7, bytes: FILE }));
  if (!reply.ok) throw new Error(reply.message);
  expect(reply.id).toBe(7);
  const song = songFromReply(reply.song);
  expect(song.notes.map((note) => [note.pitch, note.start, note.end])).toEqual([[60, 1, 3]]);
  expect(song.tempoMap.ticksToSeconds(960)).toBe(2);
  expect(song.tempoMap.positionAtTick(1440)).toEqual({ measure: 0, beat: 3 });
});

test("a_file_that_does_not_parse_replies_with_its_message_and_offset", async () => {
  const reply = await parseReply({ id: 1, bytes: new Uint8Array([0x4d, 0x54, 0x68, 0x64, 0, 0, 0, 2]) });
  expect(reply).toEqual({ id: 1, ok: false, message: "The MIDI header is shorter than 6 bytes (at byte 4)", offset: 4 });
});
