/**
 * Parsing a song file off the main thread: the messages between the page and `parse-worker.ts`, and
 * `SongParser`, the page's side of the worker.
 *
 * Decisions, and what each costs:
 * - A file is a MIDI file when it starts with `MThd`. Otherwise it is read as MusicXML when it looks
 *   like a score, plain or `.mxl`, and as MIDI when it does not, so its error names MIDI's header.
 * - The page posts a file's bytes with a request id, and the worker posts back the `Song` or the error.
 *   The id pairs each reply with its request, so parses may overlap.
 * - The bytes are copied into the worker, not transferred, so the caller keeps them, such as to store
 *   an upload. A copy costs about a millisecond per megabyte, and a MIDI file is rarely one megabyte.
 * - A posted object loses its class, so the reply carries the tempo map's `inputs`. `songFromReply`
 *   rebuilds the `TempoMap` on the page, which costs one pass over the tempo and signature changes.
 * - Any error in the worker becomes a rejected `SongParseError`, so a broken file never crashes the
 *   page. A `MidiReadError` keeps its byte offset, and any other error has none.
 * - The worker loads from `./parse-worker.js`, a relative URL, so it works under any base path.
 */

import { looksLikeMusicXml, readMusicXmlBytes } from "./musicxml";
import { MidiReadError, readMidi, type MidiFile } from "./smf-read";
import { songFromMidi, type Song } from "./song";
import { TempoMap, type TempoMapInputs } from "./tempo-map";

/** The page asks the worker to parse `bytes`. */
export interface ParseRequest {
  id: number;
  bytes: Uint8Array;
}

/** A `Song` as a worker posts it: its tempo map is the map's inputs. */
export type PostedSong = Omit<Song, "tempoMap"> & { tempoMap: TempoMapInputs };

/** The worker's answer to the request of the same `id`. */
export type ParseReply =
  | { id: number; ok: true; song: PostedSong }
  | { id: number; ok: false; message: string; offset: number | null };

/** A file that did not parse. `offset` is the byte where reading failed, or null when unknown. */
export class SongParseError extends Error {
  readonly offset: number | null;

  constructor(message: string, offset: number | null) {
    super(message);
    this.name = "SongParseError";
    this.offset = offset;
  }
}

/** The `MidiFile` of a song file's `bytes`: a MusicXML score when it looks like one, else a MIDI file. */
export async function readSongFile(bytes: Uint8Array): Promise<MidiFile> {
  const midi = bytes[0] === 0x4d && bytes[1] === 0x54 && bytes[2] === 0x68 && bytes[3] === 0x64;
  return !midi && looksLikeMusicXml(bytes) ? readMusicXmlBytes(bytes) : readMidi(bytes);
}

/** The reply to `request`. It never rejects: an error becomes a failed reply. */
export async function parseReply(request: ParseRequest): Promise<ParseReply> {
  try {
    const song = songFromMidi(await readSongFile(request.bytes));
    return { id: request.id, ok: true, song: { ...song, tempoMap: song.tempoMap.inputs } };
  } catch (error) {
    const offset = error instanceof MidiReadError ? error.offset : null;
    return { id: request.id, ok: false, message: error instanceof Error ? error.message : String(error), offset };
  }
}

/** The `Song` of a successful reply, with its tempo map rebuilt. */
export function songFromReply(song: PostedSong): Song {
  return { ...song, tempoMap: TempoMap.fromInputs(song.tempoMap) };
}

/** The page's side of the parse worker. One instance serves every parse. */
export class SongParser {
  private readonly worker: Worker;
  private nextId = 0;
  private readonly waiting = new Map<number, { resolve: (song: Song) => void; reject: (error: Error) => void }>();

  constructor(url = "./parse-worker.js") {
    this.worker = new Worker(url, { type: "module" });
    this.worker.addEventListener("message", (event: MessageEvent<ParseReply>) => this.settle(event.data));
    this.worker.addEventListener("error", (event) => {
      event.preventDefault();
      this.failAll(new SongParseError(`The MIDI parser stopped: ${event.message}`, null));
    });
  }

  /** The song of the MIDI or MusicXML file `bytes`. Rejects with a `SongParseError` when it does not parse. */
  parse(bytes: Uint8Array): Promise<Song> {
    const id = this.nextId++;
    return new Promise((resolve, reject) => {
      this.waiting.set(id, { resolve, reject });
      this.worker.postMessage({ id, bytes } satisfies ParseRequest);
    });
  }

  /** Stops the worker. Every parse still waiting rejects. */
  dispose(): void {
    this.worker.terminate();
    this.failAll(new SongParseError("The MIDI parser was stopped", null));
  }

  private settle(reply: ParseReply): void {
    const waiter = this.waiting.get(reply.id);
    if (!waiter) return;
    this.waiting.delete(reply.id);
    if (reply.ok) waiter.resolve(songFromReply(reply.song));
    else waiter.reject(new SongParseError(reply.message, reply.offset));
  }

  private failAll(error: Error): void {
    for (const waiter of this.waiting.values()) waiter.reject(error);
    this.waiting.clear();
  }
}
