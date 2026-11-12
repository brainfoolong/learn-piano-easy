/**
 * A signal: our small reactive value, which a component that changes on its own takes as an option.
 *
 * It holds one value and the functions that listen to it, and nothing else. There is no dependency
 * graph and no derived value, so a reader sees every update where `set` is called. A listener runs
 * only when the value changes, never at subscribe, and runs in the order it subscribed.
 */

/** A value that tells its listeners when it changes. */
export interface Signal<T> {
  /** The current value. */
  get(): T;
  /** Sets the value, and calls every listener when it differs from the current one. */
  set(value: T): void;
  /** Calls `listener` with each new value. Returns the function that stops it. */
  subscribe(listener: (value: T) => void): () => void;
}

/** A signal that starts at `initial`. `equals` decides whether a new value is a change. */
export function signal<T>(initial: T, equals: (a: T, b: T) => boolean = Object.is): Signal<T> {
  let value = initial;
  const listeners = new Set<(value: T) => void>();
  return {
    get: () => value,
    set(next) {
      if (equals(value, next)) return;
      value = next;
      for (const listener of [...listeners]) listener(next);
    },
    subscribe(listener) {
      const own = (next: T) => listener(next);
      listeners.add(own);
      return () => listeners.delete(own);
    },
  };
}
