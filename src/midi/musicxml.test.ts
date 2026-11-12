import { expect, test } from "../testing";
import { readMusicXml, readMusicXmlBytes } from "./musicxml";
import { readSongFile } from "./parse";
import { readMidi, type ChannelEvent, type MidiEvent } from "./smf-read";
import { writeMidi } from "./smf-write";
import { songFromMidi, type Song } from "./song";

/** A score of `measures` for one part, with the header every test shares. */
function score(measures: string, staves = 1): string {
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE score-partwise PUBLIC "-//Recordare//DTD MusicXML 4.0 Partwise//EN" "http://www.musicxml.org/dtds/partwise.dtd">
<score-partwise version="4.0">
  <part-list>
    <score-part id="P1"><part-name>Piano</part-name></score-part>
  </part-list>
  <part id="P1">
    <!-- the staves are set in the first measure -->
    ${measures.replace("<attributes>", `<attributes><staves>${staves}</staves>`)}
  </part>
</score-partwise>`;
}

function note(step: string, octave: number, duration: number, extra = ""): string {
  const alter = step.endsWith("#") ? "<alter>1</alter>" : "";
  return `<note><pitch><step>${step[0]}</step>${alter}<octave>${octave}</octave></pitch><duration>${duration}</duration>${extra}</note>`;
}

/** A MIDI track of `events`, each at its absolute tick, with the deltas worked out. */
function track(events: ({ tick: number } & (ChannelEvent | { kind: "meta"; type: number; data: number[] }))[]): { events: MidiEvent[] } {
  let last = 0;
  return {
    events: events.map((event) => {
      const delta = event.tick - last;
      last = event.tick;
      if (event.kind !== "meta") return { ...event, delta };
      return { ...event, delta, data: new Uint8Array(event.data), meta: "unknown" } as MidiEvent;
    }),
  };
}

function on(tick: number, note: number, velocity: number, channel = 0): { tick: number } & ChannelEvent {
  return { tick, kind: "noteOn", channel, note, velocity };
}

function off(tick: number, note: number, channel = 0): { tick: number } & ChannelEvent {
  return { tick, kind: "noteOff", channel, note, velocity: 0 };
}

/** What the player hears of `song`: each note's track, pitch, velocity and times in seconds. */
function heard(song: Song): (string | number)[][] {
  return song.notes.map((n) => [n.track, n.pitch, n.velocity, n.start, n.end]);
}

test("musicxml_notes_match_their_midi", () => {
  // Two staves at 60 quarter notes per minute, so a quarter note lasts a second. Two divisions per quarter.
  const xml = score(
    `<measure number="1">
      <attributes><divisions>2</divisions><key><fifths>1</fifths><mode>major</mode></key>
        <time><beats>4</beats><beat-type>4</beat-type></time></attributes>
      <direction placement="above"><direction-type><words>Andante</words></direction-type><sound tempo="60"/></direction>
      ${note("C", 5, 2, "<staff>1</staff>")}
      ${note("D", 5, 2, "<staff>1</staff>")}
      ${note("E", 5, 4, "<staff>1</staff>")}
      ${note("G", 5, 4, "<chord/><staff>1</staff>")}
      <backup><duration>8</duration></backup>
      ${note("C", 3, 8, "<staff>2</staff>")}
    </measure>
    <measure number="2">
      <sound dynamics="100"/>
      ${note("F#", 5, 1, "<staff>1</staff>")}
      <note><rest/><duration>1</duration><staff>1</staff></note>
      ${note("B", 4, 6, "<staff>1</staff>")}
      <backup><duration>8</duration></backup>
      <direction><direction-type><pedal type="start"/></direction-type><staff>2</staff></direction>
      ${note("G", 2, 4, "<staff>2</staff>")}
      ${note("G", 3, 4, "<staff>2</staff>")}
      <direction><direction-type><pedal type="stop"/></direction-type><staff>2</staff></direction>
    </measure>`,
    2,
  );

  // The same music as a MIDI file of 480 ticks per quarter, written by hand.
  const midi = writeMidi({
    format: 1,
    division: { kind: "ticks", ticksPerBeat: 480 },
    problems: [],
    tracks: [
      track([
        { tick: 0, kind: "meta", type: 0x58, data: [4, 2, 24, 8] },
        { tick: 0, kind: "meta", type: 0x59, data: [1, 0] },
        { tick: 0, kind: "meta", type: 0x51, data: [0x0f, 0x42, 0x40] },
      ]),
      track([
        on(0, 72, 80), off(480, 72), on(480, 74, 80), off(960, 74), on(960, 76, 80), on(960, 79, 80),
        off(1920, 76), off(1920, 79), on(1920, 78, 90), off(2160, 78), on(2400, 71, 90), off(3840, 71),
      ]),
      track([
        on(0, 48, 80), off(1920, 48),
        { tick: 1920, kind: "controller", channel: 0, controller: 64, value: 127 },
        on(1920, 43, 90), off(2880, 43), on(2880, 55, 90), off(3840, 55),
        { tick: 3840, kind: "controller", channel: 0, controller: 64, value: 0 },
      ]),
    ],
  });

  const fromXml = songFromMidi(readMusicXml(xml));
  const fromMidi = songFromMidi(readMidi(midi));
  expect(heard(fromXml)).toEqual(heard(fromMidi));
  expect(fromXml.tracks.map((t) => t.pedals.map((p) => [p.start, p.end]))).toEqual(
    fromMidi.tracks.map((t) => t.pedals.map((p) => [p.start, p.end])),
  );
  expect(fromXml.keySignatures.map((k) => [k.seconds, k.sharps, k.minor])).toEqual([[0, 1, false]]);
  expect(fromXml.duration).toBe(8);
  expect(fromXml.tracks.map((t) => t.name)).toEqual(["", "Piano, staff 1", "Piano, staff 2"]);
});

test("ties_and_repeats_are_expanded", () => {
  // |: C4 tied into ending 1 :| ending 2, then one more measure. One division per quarter.
  const xml = score(
    `<measure number="1">
      <attributes><divisions>1</divisions></attributes>
      <barline location="left"><repeat direction="forward"/></barline>
      ${note("C", 4, 4, '<tie type="start"/>')}
    </measure>
    <measure number="2">
      <barline location="left"><ending number="1" type="start"/></barline>
      ${note("C", 4, 2, '<tie type="stop"/>')}
      ${note("D", 4, 2)}
      <barline location="right"><ending number="1" type="stop"/><repeat direction="backward"/></barline>
    </measure>
    <measure number="3">
      <barline location="left"><ending number="2" type="start"/></barline>
      ${note("E", 4, 4)}
      <barline location="right"><ending number="2" type="discontinue"/></barline>
    </measure>
    <measure number="4">${note("F", 4, 4)}</measure>`,
  );
  const q = 960;
  const ticks = (song: Song) => song.notes.map((n) => [n.pitch, n.startTick, n.endTick]);
  expect(ticks(songFromMidi(readMusicXml(xml)))).toEqual([
    [60, 0, 6 * q],
    [62, 6 * q, 8 * q],
    [60, 8 * q, 12 * q],
    [64, 12 * q, 16 * q],
    [65, 16 * q, 20 * q],
  ]);

  // D.C. al Fine: the first measure plays again, and the piece ends there.
  const daCapo = score(
    `<measure number="1"><attributes><divisions>1</divisions></attributes>
      ${note("G", 4, 4)}<barline location="right"><sound fine="yes"/></barline></measure>
    <measure number="2">${note("A", 4, 4)}<direction><direction-type><words>D.C. al Fine</words></direction-type>
      <sound dacapo="yes"/></direction></measure>`,
  );
  expect(ticks(songFromMidi(readMusicXml(daCapo)))).toEqual([
    [67, 0, 4 * q],
    [69, 4 * q, 8 * q],
    [67, 8 * q, 12 * q],
  ]);
});

/** A ZIP archive of `files`, each packed with deflate. The CRC is left 0, as the reader skips it. */
function zip(files: Record<string, string>): Uint8Array {
  const parts: Uint8Array[] = [];
  const central: Uint8Array[] = [];
  let offset = 0;
  for (const [name, text] of Object.entries(files)) {
    const nameBytes = new TextEncoder().encode(name);
    const packed = Bun.deflateSync(new TextEncoder().encode(text));
    const local = new DataView(new ArrayBuffer(30));
    local.setUint32(0, 0x04034b50, true);
    local.setUint16(8, 8, true);
    local.setUint32(18, packed.length, true);
    local.setUint16(26, nameBytes.length, true);
    const entry = new DataView(new ArrayBuffer(46));
    entry.setUint32(0, 0x02014b50, true);
    entry.setUint16(10, 8, true);
    entry.setUint32(20, packed.length, true);
    entry.setUint16(28, nameBytes.length, true);
    entry.setUint32(42, offset, true);
    parts.push(new Uint8Array(local.buffer), nameBytes, packed);
    central.push(new Uint8Array(entry.buffer), nameBytes);
    offset += 30 + nameBytes.length + packed.length;
  }
  const size = central.reduce((sum, bytes) => sum + bytes.length, 0);
  const end = new DataView(new ArrayBuffer(22));
  end.setUint32(0, 0x06054b50, true);
  end.setUint16(10, Object.keys(files).length, true);
  end.setUint32(12, size, true);
  end.setUint32(16, offset, true);
  const all = [...parts, ...central, new Uint8Array(end.buffer)];
  const out = new Uint8Array(all.reduce((sum, bytes) => sum + bytes.length, 0));
  let at = 0;
  for (const bytes of all) {
    out.set(bytes, at);
    at += bytes.length;
  }
  return out;
}

test("an_mxl_archive_and_a_plain_score_open_as_the_same_song", async () => {
  const xml = score(`<measure number="1"><attributes><divisions>1</divisions></attributes>${note("A", 4, 4)}</measure>`);
  const container = `<?xml version="1.0"?><container><rootfiles><rootfile full-path="score.musicxml"/></rootfiles></container>`;
  const archive = zip({ "META-INF/container.xml": container, "score.musicxml": xml });
  const fromArchive = songFromMidi(await readMusicXmlBytes(archive));
  const fromText = songFromMidi(await readSongFile(new TextEncoder().encode(xml)));
  expect(heard(fromArchive)).toEqual([[1, 69, 80, 0, 2]]);
  expect(heard(fromText)).toEqual(heard(fromArchive));
});
