import { expect, test } from "../testing";
import { ACCENT_VELOCITY, BEAT_VELOCITY, Metronome, MIDI_CLICK_MS, type MetronomeContext, type MetronomeOptions } from "./metronome";

/** A context whose clock stands at `currentTime`. With the speakers off, the metronome makes no node. */
const ctx = { currentTime: 1 } as MetronomeContext;
const never = { every: () => () => {} };
const options: MetronomeOptions = {
  enabled: true,
  volume: 0.1,
  synced: true,
  speakers: false,
  midi: true,
  midiNote: 76,
  midiSound: "woodblock",
  aheadMs: 100,
  intervalMs: 25,
};

/** A metronome whose MIDI clock reads 5000 ms while the audio clock reads 1 s, with `beats` song times. */
function metronome(sent: [number[], number | undefined][]) {
  const port = { send: (data: number[], at?: number) => void sent.push([data, at]) };
  const m = new Metronome(ctx, {} as never, options, never, () => 5000);
  m.midiOut = () => port;
  return m;
}

test("a_midi_click_goes_out_timed_on_the_midi_clock", () => {
  const sent: [number[], number | undefined][] = [];
  const m = metronome(sent);
  // A count-in of two beats, the first accented, sounding at 1.5 s and 2 s on the audio clock.
  m.setCountIn([0.5, 1]);
  m.schedule(0, 2, (songTime) => songTime + 1);
  expect(sent).toEqual([
    [[0xcf, 115], undefined],
    [[0x9f, 76, ACCENT_VELOCITY], 5500],
    [[0x8f, 76, 0], 5500 + MIDI_CLICK_MS],
    [[0x9f, 76, BEAT_VELOCITY], 6000],
    [[0x8f, 76, 0], 6000 + MIDI_CLICK_MS],
  ]);

  // The drum kit plays on channel 10 and needs no program change.
  sent.length = 0;
  m.configure({ midiSound: "drums" });
  m.schedule(0, 1, (songTime) => songTime + 1);
  expect(sent.map(([data]) => data[0])).toEqual([0x99, 0x89]);
});
