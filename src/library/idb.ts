/**
 * Our IndexedDB helper: opening a database, and promises for a request and a transaction.
 *
 * IndexedDB speaks in events. These three functions turn them into promises, so a store reads as plain
 * `await` code, and none of the app's modules handles an IndexedDB event itself.
 *
 * Decisions, and what each costs:
 * - `openDatabase` resolves undefined when the browser has no IndexedDB or refuses to open it, as a
 *   private window may. Each caller then keeps its data in memory for the session.
 * - A write counts as done only once its transaction completes, so a refused write rejects.
 */

/** The database `name` at `version`, or undefined when the browser has none or refuses it. */
export function openDatabase(name: string, version: number, upgrade: (db: IDBDatabase, from: number) => void): Promise<IDBDatabase | undefined> {
  return new Promise((resolve) => {
    if (typeof indexedDB === "undefined") return resolve(undefined);
    let request: IDBOpenDBRequest;
    try {
      request = indexedDB.open(name, version);
    } catch {
      return resolve(undefined);
    }
    request.onupgradeneeded = (event) => upgrade(request.result, event.oldVersion);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => resolve(undefined);
    request.onblocked = () => resolve(undefined);
  });
}

/** The result of `request`, or its error. */
export function requestDone<T>(request: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/** Settles once `transaction` completes, and rejects when it fails or aborts. */
export function transactionDone(transaction: IDBTransaction): Promise<void> {
  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
    transaction.onabort = () => reject(transaction.error);
  });
}
