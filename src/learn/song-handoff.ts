/**
 * The hand-off of a lesson's song step to the player and back: the one request in flight between them.
 *
 * A song step asks with `ask`, and the lesson view moves to the player. The player reads `current`,
 * opens the version in lesson mode, and ends the request with `end`. A scored take at the step's
 * accuracy ends it with the take, and the banner's way back ends it without one. The lesson view then
 * moves back to the lesson, and the step reads what `ask` resolved.
 *
 * Decisions, and what each costs:
 * - **One request at a time.** A new `ask` ends the last one without a take, so a stale step never
 *   hears a later song's take.
 * - **It lives in memory only.** A reload ends the lesson anyway, since a lesson's progress is kept
 *   only once it ends.
 * - **It imports nothing,** so the player's chunk reads it without loading any of the lesson's code.
 */

/** What a song step asks the player for. */
export interface SongRequest {
  /** The version's catalog file, from `songs/`, such as `ours/<slug>/common.mid`. */
  file: string;
  /** The index of the practice step of the version's guide that the player applies. */
  practice: number;
  /** The accuracy a scored take must reach, from 0 to 1. */
  accuracy: number;
  /** The step's text in the lesson's locale, which the player's banner shows as the goal. */
  goal: string;
  /** `sheet` shows the sheet music and hides the falling notes while the request is in flight. */
  view?: "sheet";
}

/** A scored take that met the request's accuracy. */
export interface SongTake {
  /** The take's accuracy, from 0 to 1. */
  accuracy: number;
}

/** The request in flight, and what ends it. */
export class SongHandoff {
  #pending: { request: SongRequest; resolve: (take: SongTake | undefined) => void } | undefined;
  readonly #listeners = new Set<() => void>();

  /** The request in flight, or undefined when none is. */
  get current(): SongRequest | undefined {
    return this.#pending?.request;
  }

  /** Puts `request` in flight, ending the last one without a take. Resolves the take that ends it, or undefined. */
  ask(request: SongRequest): Promise<SongTake | undefined> {
    this.end(undefined);
    return new Promise((resolve) => {
      this.#pending = { request, resolve };
      this.#notify();
    });
  }

  /** Ends the request in flight with `take`, or without one. Does nothing when none is in flight. */
  end(take: SongTake | undefined): void {
    const pending = this.#pending;
    if (pending === undefined) return;
    this.#pending = undefined;
    pending.resolve(take);
    this.#notify();
  }

  /** Calls `listener` each time a request starts or ends. Returns what stops it. */
  subscribe(listener: () => void): () => void {
    this.#listeners.add(listener);
    return () => this.#listeners.delete(listener);
  }

  #notify(): void {
    for (const listener of this.#listeners) listener();
  }
}

/** The site's one hand-off, shared by every lesson and the player. */
export const songHandoff = new SongHandoff();
