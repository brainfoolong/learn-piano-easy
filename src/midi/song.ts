/**
 * The song model: a read MIDI file becomes the notes, tracks, pedal periods and texts the app plays from.
 *
 * Decisions, and what each costs:
 * - Every time is kept in ticks and in seconds. The tempo map converts between them, and the song keeps
 *   it for measures and beats.
 * - Notes pair note-on and note-off per track, channel and pitch, first in first out. A note-on with
 *   velocity 0 is a note-off. A note-off with no open note is dropped. A note left open ends at its
 *   track's last event, so a cut-off file still has every note it started.
 * - A note whose on and off share a tick is kept with no length. How long it shows is the renderer's
 *   call, not the model's.
 * - The sustain pedal is controller 64, down from a value of 64. A pedal period pairs per track and
 *   channel, and one left down ends at its track's last event like a note.
 * - A track's `program` is its first program change, or 0 when it has none. A track is percussion
 *   when it has notes and all of them sit on channel 10.
 * - Key signatures, markers and lyrics are merged from all tracks in tick order.
 *
 * Bounds: the model holds one entry per note and pedal period of the file, and nothing else per event.
 *
 * Gaps: program changes during a track, other controllers and pitch bend are not modelled yet. The
 * `audio-engine` goal adds what its sound needs.
 */

import type { MidiEvent, MidiFile, MidiProblem } from "./smf-read";
import { TempoMap } from "./tempo-map";

/** The MIDI channel, counted from 0, that General MIDI gives to percussion. */
export const PERCUSSION_CHANNEL = 9;

/** The sustain pedal's controller number. */
export const SUSTAIN_CONTROLLER = 64;

/** One played note. `pitch` is the MIDI note number, 60 being middle C. */
export interface Note {
  track: number;
  channel: number;
  pitch: number;
  velocity: number;
  startTick: number;
  endTick: number;
  start: number;
  end: number;
}

/** A time the sustain pedal is held down on one channel of one track. */
export interface PedalPeriod {
  track: number;
  channel: number;
  startTick: number;
  endTick: number;
  start: number;
  end: number;
}

export interface KeySignature {
  tick: number;
  seconds: number;
  /** Negative for flats, from -7 to 7. */
  sharps: number;
  minor: boolean;
}

/** A marker or a lyric, with the track it came from. */
export interface TimedText {
  track: number;
  tick: number;
  seconds: number;
  text: string;
}

export interface SongTrack {
  index: number;
  /** The track's first name event, or "" without one. */
  name: string;
  program: number;
  percussion: boolean;
  /** The channels its notes use, in ascending order. */
  channels: number[];
  /** In start order, then pitch order. */
  notes: Note[];
  /** In start order. */
  pedals: PedalPeriod[];
}

export interface Song {
  tempoMap: TempoMap;
  /** One per track of the file, in the file's order, empty ones included. */
  tracks: SongTrack[];
  /** Every track's notes, in start order, then pitch order. */
  notes: Note[];
  keySignatures: KeySignature[];
  markers: TimedText[];
  lyrics: TimedText[];
  /** The tick of the last event of any track. */
  endTick: number;
  /** The seconds of `endTick`. */
  duration: number;
  /** The breaks the reader found. The tracks they break end there. */
  problems: MidiProblem[];
}

/** The length of `song` in seconds: the end of its last note. */
export function songLength(song: Song): number {
  return song.notes.reduce((end, note) => Math.max(end, note.end), 0);
}

/** The song of a read MIDI file. */
export function songFromMidi(file: MidiFile): Song {
  const tempoMap = TempoMap.fromMidi(file);
  const tracks = file.tracks.map((track, index) => readTrack(track.events, index, tempoMap));
  const keySignatures: KeySignature[] = [];
  const markers: TimedText[] = [];
  const lyrics: TimedText[] = [];
  let endTick = 0;
  file.tracks.forEach((track, index) => {
    for (const event of track.events) {
      endTick = Math.max(endTick, event.tick);
      if (event.kind !== "meta") continue;
      const seconds = tempoMap.ticksToSeconds(event.tick);
      if (event.meta === "keySignature") {
        keySignatures.push({ tick: event.tick, seconds, sharps: event.sharps, minor: event.minor });
      } else if (event.meta === "marker") {
        markers.push({ track: index, tick: event.tick, seconds, text: event.text });
      } else if (event.meta === "lyric") {
        lyrics.push({ track: index, tick: event.tick, seconds, text: event.text });
      }
    }
  });
  const byTick = (a: { tick: number }, b: { tick: number }): number => a.tick - b.tick;
  return {
    tempoMap,
    tracks,
    notes: tracks.flatMap((track) => track.notes).sort(byStartThenPitch),
    keySignatures: keySignatures.sort(byTick),
    markers: markers.sort(byTick),
    lyrics: lyrics.sort(byTick),
    endTick,
    duration: tempoMap.ticksToSeconds(endTick),
    problems: file.problems,
  };
}

function byStartThenPitch(a: Note, b: Note): number {
  return a.startTick - b.startTick || a.pitch - b.pitch;
}

function readTrack(events: readonly MidiEvent[], index: number, tempoMap: TempoMap): SongTrack {
  const endTick = events.length > 0 ? events[events.length - 1]!.tick : 0;
  const notes: Note[] = [];
  const pedals: PedalPeriod[] = [];
  /** The open notes' start ticks and velocities, first in first out, by `channel * 128 + pitch`. */
  const openNotes = new Map<number, { tick: number; velocity: number }[]>();
  /** The tick each channel's pedal went down, by channel. */
  const pedalDown = new Map<number, number>();
  let name: string | null = null;
  let program: number | null = null;

  const endNote = (channel: number, pitch: number, startTick: number, velocity: number, tick: number): void => {
    notes.push({
      track: index,
      channel,
      pitch,
      velocity,
      startTick,
      endTick: tick,
      start: tempoMap.ticksToSeconds(startTick),
      end: tempoMap.ticksToSeconds(tick),
    });
  };
  const endPedal = (channel: number, startTick: number, tick: number): void => {
    pedals.push({
      track: index,
      channel,
      startTick,
      endTick: tick,
      start: tempoMap.ticksToSeconds(startTick),
      end: tempoMap.ticksToSeconds(tick),
    });
  };

  for (const event of events) {
    switch (event.kind) {
      case "noteOn":
      case "noteOff": {
        const key = event.channel * 128 + event.note;
        if (event.kind === "noteOn" && event.velocity > 0) {
          const open = openNotes.get(key);
          if (open) open.push({ tick: event.tick, velocity: event.velocity });
          else openNotes.set(key, [{ tick: event.tick, velocity: event.velocity }]);
        } else {
          const started = openNotes.get(key)?.shift();
          if (started) endNote(event.channel, event.note, started.tick, started.velocity, event.tick);
        }
        break;
      }
      case "controller": {
        if (event.controller !== SUSTAIN_CONTROLLER) break;
        const downAt = pedalDown.get(event.channel);
        if (event.value >= 64 && downAt === undefined) {
          pedalDown.set(event.channel, event.tick);
        } else if (event.value < 64 && downAt !== undefined) {
          endPedal(event.channel, downAt, event.tick);
          pedalDown.delete(event.channel);
        }
        break;
      }
      case "program":
        program ??= event.program;
        break;
      case "meta":
        if (event.meta === "trackName") name ??= event.text;
        break;
    }
  }

  for (const [key, open] of openNotes) {
    for (const started of open) endNote(key >> 7, key & 0x7f, started.tick, started.velocity, endTick);
  }
  for (const [channel, downAt] of pedalDown) endPedal(channel, downAt, endTick);
  notes.sort(byStartThenPitch);
  pedals.sort((a, b) => a.startTick - b.startTick);

  const channels = [...new Set(notes.map((note) => note.channel))].sort((a, b) => a - b);
  return {
    index,
    name: name ?? "",
    program: program ?? 0,
    percussion: channels.length === 1 && channels[0] === PERCUSSION_CHANNEL,
    channels,
    notes,
    pedals,
  };
}
