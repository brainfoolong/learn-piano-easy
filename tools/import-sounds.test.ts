import { expect, test } from "../src/testing";
import { layer, onsetFrame, parseSfz, RATE, shape, tailFrame } from "./import-sounds";

const SFZ = `// A comment <region> sample=ignored.wav
<group> amp_veltrack=73 ampeg_release=1
<region> sample=dir\\A0v1.wav lokey=21 hikey=22 lovel=1 hivel=64 pitch_keycenter=21
<region> sample=dir\\A0v2.wav lokey=21 hikey=22 lovel=65 pitch_keycenter=21
<region> sample=dir\\C4v1.wav lokey=59 hikey=61 lovel=1 hivel=64
<region> sample=dir\\C4v2.wav lokey=59 hikey=61 lovel=65
<group> trigger=release volume=-4
<region> sample=dir\\rel1.wav lokey=21 hikey=21
<group> on_locc64=126
<region> sample=dir\\pedalD1.wav lokey=-1 hikey=-1
`;

test("sfz_regions_map_to_notes_and_layers", () => {
  const regions = parseSfz(SFZ);
  expect(regions.length).toBe(6);
  expect(regions[0]).toEqual({ sample: "dir/A0v1.wav", lokey: 21, hikey: 22, lovel: 1, hivel: 64, keycenter: 21, trigger: "attack" });
  expect(regions[3]!.keycenter).toBe(60);
  expect(regions[4]!.trigger).toBe("release");
  expect([...layer(regions, 84)]).toEqual([
    [21, "dir/A0v2.wav"],
    [60, "dir/C4v2.wav"],
  ]);
  expect([...layer(regions, 30)]).toEqual([
    [21, "dir/A0v1.wav"],
    [60, "dir/C4v1.wav"],
  ]);
  expect(() => layer(parseSfz(SFZ + "<group>\n<region> sample=x.wav pitch_keycenter=21"), 84)).toThrow("two samples");
});

/** Stereo frames: `silence` frames of near silence, then a tone that decays by `perSecond` dB. */
function note(silence: number, seconds: number, perSecond: number): Float32Array {
  const count = silence + Math.round(seconds * RATE);
  const out = new Float32Array(count * 2);
  for (let f = 0; f < count; f++) {
    const t = (f - silence) / RATE;
    const x = f < silence ? 1e-5 : 0.5 * 10 ** ((-perSecond * t) / 20) * Math.cos(2 * Math.PI * 440 * t);
    out[f * 2] = x;
    out[f * 2 + 1] = x;
  }
  return out;
}

test("onset_is_the_first_loud_sample", () => {
  const frames = note(500, 0.5, 10);
  const onset = onsetFrame(frames, 2);
  expect(onset).toBe(500 - 44);
  expect(onsetFrame(note(10, 0.5, 10), 2)).toBe(0);
});

test("tail_ends_where_the_note_falls_silent", () => {
  // At 20 dB a second, the note is 60 dB down after 3 s.
  const frames = note(0, 6, 20);
  const end = tailFrame(frames, 2) / RATE;
  expect(end).toBeGreaterThan(2.9);
  expect(end).toBeLessThan(3.1);
  const capped = shape(note(0, 6, 5), 2, { maxSeconds: 2, fadeSeconds: 0.5 });
  expect(capped.length / 2).toBe(2 * RATE);
  expect(Math.abs(capped.at(-2)!)).toBeLessThan(1e-6);
  // The last quarter of the fade is at most a sixteenth of the note's level there.
  const lastQuarter = capped.subarray(capped.length - RATE / 4);
  expect(Math.max(...lastQuarter.map(Math.abs))).toBeLessThan(0.5 / 16);
});
