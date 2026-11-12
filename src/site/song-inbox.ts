/**
 * The song inbox: song files that reach the site from outside, held until the player takes them.
 *
 * Files arrive two ways, on any page of the site. They are dropped on the page, or the installed app is
 * launched with them through the manifest's file handler. The site hands each batch to the inbox and
 * shows the player, which may not exist yet, since it is a chunk loaded on its first show. The player
 * takes the inbox's files once it is built, and every later batch as it comes.
 *
 * This module sits in the site's bundle, so it stays small and imports no player code.
 */

/** Files waiting for the player, and the player's handler once it takes them. */
export class SongInbox {
  #waiting: File[][] = [];
  #taker: ((files: File[]) => void) | undefined;

  /** Hands `files` to the player, or keeps them until it takes the inbox. */
  give(files: File[]): void {
    if (this.#taker === undefined) this.#waiting.push(files);
    else this.#taker(files);
  }

  /** Hands every batch kept so far to `taker`, at once and in order, and every later batch as it comes. */
  take(taker: (files: File[]) => void): void {
    this.#taker = taker;
    const waiting = this.#waiting;
    this.#waiting = [];
    for (const files of waiting) taker(files);
  }
}

/** The one inbox of the page. */
export const songInbox = new SongInbox();

/** The part of the Launch Handler API that opening launched files needs. */
interface LaunchQueue {
  setConsumer(consumer: (params: { files: readonly { getFile(): Promise<File> }[] }) => void): void;
}

/**
 * Hands the files an installed app is launched with to `onFiles`, through the manifest's file handler.
 * The launch handler focuses the open window, so a later launch arrives here too. Returns whether the
 * browser has the API at all.
 */
export function attachLaunchQueue(onFiles: (files: File[]) => void): boolean {
  const queue = (window as unknown as { launchQueue?: LaunchQueue }).launchQueue;
  if (queue === undefined) return false;
  queue.setConsumer((params) => {
    if (params.files.length === 0) return;
    void Promise.all(params.files.map((handle) => handle.getFile())).then(onFiles, () => onFiles([]));
  });
  return true;
}

/** Hands every file dropped on `target` to `onFiles`, and marks the target while files hover it. */
export function attachDrop(target: HTMLElement, onFiles: (files: File[]) => void): () => void {
  const carriesFiles = (event: DragEvent) => event.dataTransfer?.types.includes("Files") === true;
  const over = (event: DragEvent) => {
    if (!carriesFiles(event)) return;
    event.preventDefault();
    target.classList.add("drop-target");
  };
  const leave = (event: DragEvent) => {
    if (event.relatedTarget === null || !target.contains(event.relatedTarget as Node)) target.classList.remove("drop-target");
  };
  const drop = (event: DragEvent) => {
    if (!carriesFiles(event)) return;
    event.preventDefault();
    target.classList.remove("drop-target");
    onFiles([...(event.dataTransfer?.files ?? [])]);
  };
  target.addEventListener("dragover", over);
  target.addEventListener("dragleave", leave);
  target.addEventListener("drop", drop);
  return () => {
    target.removeEventListener("dragover", over);
    target.removeEventListener("dragleave", leave);
    target.removeEventListener("drop", drop);
  };
}
