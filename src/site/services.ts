/**
 * The site's services: the learner's input and the audio engine, each made once on first use.
 *
 * Every page that hears the learner or makes a sound asks here, so a MIDI keyboard connects once and
 * one audio context serves the whole site. A service lives as long as the tab, like the player.
 *
 * Only a page's own chunk imports this module, never the site's bundle. The landing page then loads no
 * audio code. Bun puts a module that two chunks share into a chunk of its own, which runs once, so
 * every page still gets the same service.
 */
import { AudioEngine } from "../audio/engine";
import { InputBus } from "../input/input-bus";
import { MidiDevices } from "../input/web-midi";
import { SongClock } from "../play/clock";
import type { SettingsStore } from "../settings/store";

/** The learner's notes, and the MIDI devices that feed them. */
export interface InputService {
  bus: InputBus;
  midi: MidiDevices;
}

/** The audio engine, and the song clock that times it. */
export interface AudioService {
  clock: SongClock;
  engine: AudioEngine;
}

let input: InputService | undefined;
let audio: AudioService | undefined;

/** The input service, made on the first call, which connects a granted MIDI keyboard. */
export function inputService(settings: SettingsStore): InputService {
  if (input === undefined) {
    const bus = new InputBus();
    const midi = new MidiDevices(bus, settings);
    void midi.autoConnect();
    input = { bus, midi };
  }
  return input;
}

/** The audio service, made on the first call on a new audio context. */
export function audioService(settings: SettingsStore): AudioService {
  if (audio === undefined) {
    const context = new AudioContext();
    const clock = new SongClock(context);
    audio = { clock, engine: new AudioEngine(settings, context, clock) };
  }
  return audio;
}
