/**
 * Whether a cached file is current, and the pool that works through many files a few at a time.
 *
 * A file is current when its bytes hash to the hash the build wrote for it. The build, the service
 * worker and the cache manager share `contentHash`, so an update fetches only the files whose bytes
 * changed. The hash is the first 16 hex digits of the bytes' SHA-256, which no two files of a build
 * share by chance.
 */

/** The content hash of `bytes`. */
export async function contentHash(bytes: ArrayBuffer | Uint8Array<ArrayBuffer>): Promise<string> {
  const digest = new Uint8Array(await crypto.subtle.digest("SHA-256", bytes));
  return Array.from(digest.subarray(0, 8), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

/** Whether `response` holds the bytes that hash to `hash`. It reads a clone, so `response` stays unread. */
export async function isCurrent(response: Response, hash: string): Promise<boolean> {
  return (await contentHash(await response.clone().arrayBuffer())) === hash;
}

/** Runs `task` on each of `items`, at most `limit` at once, and ends once every task has ended. */
export async function inParallel<T>(items: readonly T[], limit: number, task: (item: T) => Promise<void>): Promise<void> {
  let next = 0;
  const run = async () => {
    while (next < items.length) await task(items[next++] as T);
  };
  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, run));
}
