/**
 * The parse worker: answers each `ParseRequest` with a `ParseReply`, so a large MIDI file never blocks
 * the page. `src/midi/parse.ts` owns the messages and the page's side.
 *
 * The build bundles this file into `parse-worker.js`.
 */

import { parseReply, type ParseRequest } from "./parse";

/** The parts of the worker scope this file uses. The DOM lib does not declare them. */
interface WorkerScope {
  addEventListener(type: "message", listener: (event: MessageEvent<ParseRequest>) => void): void;
  postMessage(message: unknown): void;
}

const scope = self as unknown as WorkerScope;

scope.addEventListener("message", (event) => {
  void parseReply(event.data).then((reply) => scope.postMessage(reply));
});
