import { expect, test } from "../testing";
import { MAX_VOICES, Sampler, type GainLike, type ParamLike, type SamplerContext, type SourceLike } from "./sampler";
import { Soundfont } from "./soundfont";

/** A param that records its automation calls as text. */
function fakeParam(log: string[]): ParamLike {
  return {
    value: 0,
    setValueAtTime: (v, t) => log.push(`set ${v} @${t}`),
    linearRampToValueAtTime: (v, t) => log.push(`ramp ${v} @${t}`),
    cancelScheduledValues: (t) => log.push(`cancel @${t}`),
  };
}

interface FakeVoice {
  source: SourceLike<string>;
  gainLog: string[];
  stops: number[];
}

/** A context whose clock the test moves, keeping every voice it made. */
function fakeContext(): SamplerContext<string> & { currentTime: number; voices: FakeVoice[] } {
  const ctx = {
    currentTime: 0,
    voices: [] as FakeVoice[],
    createGain(): GainLike {
      const gainLog: string[] = [];
      ctx.voices.at(-1)!.gainLog = gainLog;
      return { gain: fakeParam(gainLog), connect() {}, disconnect() {} };
    },
    createBufferSource(): SourceLike<string> {
      const stops: number[] = [];
      const source: SourceLike<string> = {
        buffer: null,
        detune: fakeParam([]),
        onended: null,
        connect() {},
        disconnect() {},
        start() {},
        stop: (when) => stops.push(when),
      };
      ctx.voices.push({ source, gainLog: [], stops });
      return source;
    },
  };
  return ctx;
}

const OPTIONS = {
  envelope: { attack: 0, decay: 0, sustain: 1, releaseKey: 0.25, releasePedal: 2 },
  velocityStrength: 1,
  detune: 0,
  sustainEnabled: true,
};

function setup() {
  const ctx = fakeContext();
  const sampler = new Sampler(ctx, { connect() {}, disconnect() {} }, OPTIONS);
  sampler.font = new Soundfont({ C4: "AQID", E4: "BAU=" }, { decodeAudioData: async (d) => `${d.byteLength}` });
  return { ctx, sampler };
}

test("a_missing_note_is_shifted_from_the_nearest_sample", async () => {
  const { ctx, sampler } = setup();
  await sampler.noteOn(62, 127);
  await sampler.noteOn(63, 127);
  expect(ctx.voices.map((v) => [v.source.buffer, v.source.detune.value])).toEqual([
    ["3", 200],
    ["2", -100],
  ]);
});

test("the_pedal_holds_a_released_key_until_it_lifts", async () => {
  const { ctx, sampler } = setup();
  sampler.pedal(true, 0);
  await sampler.noteOn(60, 127, 0);
  sampler.noteOff(60, 1);
  expect(ctx.voices[0]!.stops).toEqual([]);
  sampler.pedal(false, 3);
  expect(ctx.voices[0]!.stops).toEqual([5]);
});

test("a_note_off_before_the_sample_decodes_still_releases_it", async () => {
  const { ctx, sampler } = setup();
  const on = sampler.noteOn(60, 127, 0);
  sampler.noteOff(60, 0.5);
  await on;
  expect(ctx.voices[0]!.stops).toEqual([0.75]);
});

test("the_voice_limit_stops_the_oldest_released_voice_first", async () => {
  const { ctx, sampler } = setup();
  for (let i = 0; i < MAX_VOICES; i++) await sampler.noteOn(30 + i, 100, i * 0.01);
  sampler.noteOff(40, 1);
  ctx.currentTime = 1;
  await sampler.noteOn(100, 100, 1);
  const cut = ctx.voices.filter((v) => v.stops.length > 0);
  expect(cut.map((v) => v.source.detune.value)).toEqual([(40 - 60) * 100]);
  expect(cut[0]!.stops.at(-1)).toBeCloseTo(1.02);
});
