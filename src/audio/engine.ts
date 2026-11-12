/**
 * The audio engine: one `AudioContext`, a sampler for the song and one for the learner's playing, and
 * the audio settings applied to both as they change.
 *
 * The song's sampler feeds the song gain, and the learner's feeds the input gain. Both gains feed one
 * bus, and the bus feeds the effects, the equaliser and reverb, which feed the speakers. The
 * `masterGain` and `inputGain` settings set the two gains, and `volumeMain` sets the bus.
 *
 * Decisions, and what each costs:
 * - The engine reads every audio setting through the `SettingsStore` and follows its changes. A change
 *   shapes the next notes, and notes already sounding keep their shape.
 * - Both samplers share the one sound set, so a note decodes once whoever plays it.
 * - A browser starts an `AudioContext` suspended until the page is touched. `resume` wakes it, and the
 *   app calls it from its first user gesture.
 * - The sound set loads on the first `resume`, never at start-up. A visitor who never plays downloads
 *   none, and an offline start fetches nothing. The first notes stay silent until the set is ready.
 * - A sound set that fails to load calls `onFontError`, and `ready` still resolves.
 * - A gain change glides over `GAIN_GLIDE` seconds, so a slider never clicks.
 * - The `scheduler` plays a song on the song's sampler, by the song clock the transport hands in. The
 *   `metronome` is one of its parts, and feeds the bus directly, so the song volume leaves it alone.
 *   Its MIDI clicks go to the output the shell hands it through `metronome.midiOut`.
 * - The `background` track is a part too. It feeds the speakers past the effects, at `bgTrackVolume`
 *   times `volumeMain`, and the shell hands it the file the learner picks.
 */

import type { SettingId } from "../settings/schema";
import type { SettingsStore } from "../settings/store";
import { BackgroundTrack, type BackgroundOptions } from "./background-track";
import { Effects, type EffectsOptions } from "./effects";
import { envelopeFromSettings } from "./envelope";
import { Metronome, type MetronomeOptions } from "./metronome";
import { Sampler, type SamplerOptions } from "./sampler";
import { Scheduler, type ScheduleOptions, type SongTimeline } from "./scheduler";
import { loadSoundfont } from "./soundfont";

/** The time constant, in seconds, of a gain change. */
export const GAIN_GLIDE = 0.015;

/** The settings that change how a sampler plays. */
const SAMPLER_SETTINGS: ReadonlySet<SettingId> = new Set<SettingId>([
  "adsrAttack",
  "adsrDecay",
  "adsrSustain",
  "adsrReleaseKey",
  "adsrReleasePedal",
  "velocityStrength",
  "detune",
  "sustainEnabled",
]);

/** The settings that change how the scheduler queues. The free metronome queues the same way. */
const SCHEDULE_SETTINGS: ReadonlySet<SettingId> = new Set<SettingId>(["scheduleAheadMs", "scheduleIntervalMs"]);

/** The settings that change how the metronome plays. */
const METRONOME_SETTINGS: ReadonlySet<SettingId> = new Set<SettingId>([
  "enableMetronome",
  "metronomeVolume",
  "synchedMetronome",
  "metronomeMidiOutput",
  "metronomeNoteNumber",
  "metronomeInstrument",
]);

/** The settings that change how the background track plays. */
const BACKGROUND_SETTINGS: ReadonlySet<SettingId> = new Set<SettingId>(["bgTrackEnable", "bgTrackSpeed", "bgTrackOffset", "bgTrackLoop"]);

/** The equaliser's band gains, one per band of `EQ_BANDS`. */
const BAND_SETTINGS = ["equalizerGain0", "equalizerGain1", "equalizerGain2", "equalizerGain3", "equalizerGain4"] as const;

/** The settings that change the effects. */
const EFFECT_SETTINGS: ReadonlySet<SettingId> = new Set<SettingId>([
  "enableReverb",
  "reverbImpulseResponse",
  "enableEqualizer",
  ...BAND_SETTINGS,
]);

/** The sound of the app, from the audio settings in `settings`. */
export class AudioEngine {
  /** The context every node lives in. Its clock is the one notes are scheduled against. */
  readonly context: AudioContext;
  /** Plays the song's notes. */
  readonly song: Sampler<AudioBuffer>;
  /** Plays the learner's notes. */
  readonly input: Sampler<AudioBuffer>;
  /** The node both samplers' gains and the metronome feed, before the speakers. */
  readonly bus: GainNode;
  /** Plays a song on `song`, queueing ahead on the audio clock. */
  readonly scheduler: Scheduler;
  /** Clicks on the beats, in time with the scheduler's song or free. */
  readonly metronome: Metronome;
  /** Plays the learner's background track in time with the song. */
  readonly background: BackgroundTrack;
  /** Resolves once the current sound set is loaded or has failed. It never rejects. */
  ready: Promise<void> = Promise.resolve();
  /** Called when the sound set fails to load. */
  onFontError: ((error: unknown) => void) | undefined;

  readonly #settings: SettingsStore;
  readonly #songGain: GainNode;
  readonly #inputGain: GainNode;
  readonly #effects: Effects;
  readonly #unsubscribe: () => void;
  /** Whether `resume` ran once, so the sound set loads. */
  #started = false;

  /** `timeline` is the song clock on `context`'s clock, which the scheduler queues by. */
  constructor(settings: SettingsStore, context: AudioContext, timeline: SongTimeline) {
    this.#settings = settings;
    this.context = context;
    this.bus = context.createGain();
    this.bus.gain.value = settings.get("volumeMain");
    this.#effects = new Effects(context, context.destination, this.#effectsOptions());
    this.bus.connect(this.#effects.input);
    this.#songGain = context.createGain();
    this.#inputGain = context.createGain();
    this.#songGain.gain.value = settings.get("masterGain");
    this.#inputGain.gain.value = settings.get("inputGain");
    this.#songGain.connect(this.bus);
    this.#inputGain.connect(this.bus);
    this.song = new Sampler(context, this.#songGain, this.#samplerOptions());
    this.input = new Sampler(context, this.#inputGain, this.#samplerOptions());
    this.scheduler = new Scheduler(this.song, timeline, this.#scheduleOptions());
    this.metronome = new Metronome(context, this.bus, this.#metronomeOptions());
    this.scheduler.addPart(this.metronome);
    this.background = new BackgroundTrack(context, context.destination, this.#backgroundOptions());
    this.background.gain.gain.value = this.#backgroundGain();
    this.scheduler.addPart(this.background);
    this.#unsubscribe = settings.subscribe((id) => this.#onSetting(id));
  }

  /** The audio clock, in seconds. */
  get currentTime(): number {
    return this.context.currentTime;
  }

  /**
   * Wakes the context, and on the first call starts loading the sound set. Call it from a user gesture,
   * since a browser starts the context suspended.
   */
  async resume(): Promise<void> {
    if (!this.#started) {
      this.#started = true;
      this.ready = this.#loadFont();
    }
    if (this.context.state === "suspended") await this.context.resume();
  }

  /** Stops following the settings and closes the context. The engine plays nothing after. */
  async dispose(): Promise<void> {
    this.#unsubscribe();
    this.scheduler.stop();
    this.metronome.stopFree();
    await this.context.close();
  }

  #onSetting(id: SettingId): void {
    const now = this.context.currentTime;
    if (id === "masterGain") this.#songGain.gain.setTargetAtTime(this.#settings.get("masterGain"), now, GAIN_GLIDE);
    else if (id === "inputGain") this.#inputGain.gain.setTargetAtTime(this.#settings.get("inputGain"), now, GAIN_GLIDE);
    else if (id === "volumeMain") {
      this.bus.gain.setTargetAtTime(this.#settings.get("volumeMain"), now, GAIN_GLIDE);
      this.background.gain.gain.setTargetAtTime(this.#backgroundGain(), now, GAIN_GLIDE);
    } else if (id === "bgTrackVolume") this.background.gain.gain.setTargetAtTime(this.#backgroundGain(), now, GAIN_GLIDE);
    else if (BACKGROUND_SETTINGS.has(id)) this.background.configure(this.#backgroundOptions());
    else if (SAMPLER_SETTINGS.has(id)) {
      const options = this.#samplerOptions();
      this.song.configure(options);
      this.input.configure(options);
    } else if (SCHEDULE_SETTINGS.has(id)) {
      const options = this.#scheduleOptions();
      this.scheduler.configure(options);
      this.metronome.configure(options);
    } else if (METRONOME_SETTINGS.has(id)) this.metronome.configure(this.#metronomeOptions());
    else if (EFFECT_SETTINGS.has(id)) this.#effects.configure(this.#effectsOptions());
  }

  #effectsOptions(): EffectsOptions {
    return {
      reverb: this.#settings.get("enableReverb"),
      room: this.#settings.get("reverbImpulseResponse"),
      equalizer: this.#settings.get("enableEqualizer"),
      bandGains: BAND_SETTINGS.map((id) => this.#settings.get(id)),
    };
  }

  #backgroundOptions(): BackgroundOptions {
    return {
      enabled: this.#settings.get("bgTrackEnable"),
      speed: this.#settings.get("bgTrackSpeed") / 100,
      offset: this.#settings.get("bgTrackOffset"),
      loop: this.#settings.get("bgTrackLoop"),
    };
  }

  #backgroundGain(): number {
    return (this.#settings.get("bgTrackVolume") / 100) * this.#settings.get("volumeMain");
  }

  #scheduleOptions(): ScheduleOptions {
    return { aheadMs: this.#settings.get("scheduleAheadMs"), intervalMs: this.#settings.get("scheduleIntervalMs") };
  }

  #metronomeOptions(): MetronomeOptions {
    return {
      ...this.#scheduleOptions(),
      enabled: this.#settings.get("enableMetronome"),
      volume: this.#settings.get("metronomeVolume"),
      synced: this.#settings.get("synchedMetronome"),
      speakers: this.#settings.get("metronomeMidiOutput") !== "midi",
      midi: this.#settings.get("metronomeMidiOutput") !== "speakers",
      midiNote: this.#settings.get("metronomeNoteNumber"),
      midiSound: this.#settings.get("metronomeInstrument"),
    };
  }

  #samplerOptions(): SamplerOptions {
    return {
      envelope: envelopeFromSettings(this.#settings),
      velocityStrength: this.#settings.get("velocityStrength"),
      detune: this.#settings.get("detune"),
      sustainEnabled: this.#settings.get("sustainEnabled"),
    };
  }

  /** Loads the sound set into both samplers. */
  async #loadFont(): Promise<void> {
    let font;
    try {
      font = await loadSoundfont(this.context);
    } catch (error) {
      this.onFontError?.(error);
      return;
    }
    this.song.font = font;
    this.input.font = font;
  }
}
