/**
 * The keys of a step that listens: the lesson's 3D piano view under the step, which the input bus feeds
 * and which feeds the bus.
 *
 * - **Every input reaches the step through the bus.** A touch on a key goes onto the bus as a `pointer`
 *   note, so the step hears it as it hears a MIDI or a computer key. The lesson view plays the bus's
 *   notes, so each note sounds once, whatever played it.
 * - **A key sinks while any source holds it,** as the bus keeps it.
 * - **The step marks the keys** through `marks`, which the view follows.
 * - **The view is the host's,** shared by every step of the lesson. Each step shows its own options on
 *   it, which drop the last step's.
 * - **A step that asks for notes passes them as `notes`.** The host then shifts the computer keyboard
 *   by octaves to reach them, and the view marks the keys it reaches. The mark shows the whole span the
 *   bound keys play, never which key is asked. A step that takes any key passes none.
 */
import type { InputEvent } from "../../input/input-bus";
import { KEY_VELOCITY } from "../../input/keyboard";
import type { KeyRange } from "../../render/key-layout";
import type { KeyNames } from "../../render/piano-keys";
import type { Mark } from "../../ui/mark";
import { signal, type Signal } from "../../ui/signal";
import type { StepHost } from "./step";

export interface ListeningKeysOptions {
  /** The piano's accessible name. */
  label: string;
  range: KeyRange;
  /** Which keys show their name, `none` when absent. */
  names?: KeyNames;
  /** What a screen reader calls each mark. */
  markNames: Readonly<Record<Mark, string>>;
  /**
   * The notes the step asks for, which the computer keyboard shifts by octaves to reach. The keys it
   * reaches are then marked. Absent for a step that takes any key, which neither shifts nor marks.
   */
  notes?: readonly number[];
  /** Called with each note the learner starts, from any input. */
  onNote(pitch: number, event: Extract<InputEvent, { type: "noteOn" }>): void;
}

/** The keys of a step that listens, and what stops it hearing. */
export interface ListeningKeys {
  /** The host's piano view, for the step to put in its tree. */
  element: HTMLElement;
  marks: Signal<ReadonlyMap<number, Mark>>;
  /** Stops hearing the bus, and lets go every key a pointer holds. */
  dispose(): void;
}

/** The keys of `host`'s step, shown on the host's piano view, which hear the bus and play onto it. */
export function listeningKeys(host: StepHost, options: ListeningKeysOptions): ListeningKeys {
  const bus = host.input;
  const marks = signal<ReadonlyMap<number, Mark>>(new Map());
  const pressed = signal<ReadonlySet<number>>(bus.held);
  const piano = host.piano;
  piano.show({
    label: options.label,
    range: options.range,
    names: options.names ?? "none",
    marks,
    markNames: options.markNames,
    pressed,
    ...(options.notes === undefined ? {} : { reach: host.reachKeys(options.notes) }),
    onPress: (pitch) => bus.noteOn(pitch, KEY_VELOCITY, "pointer"),
    onRelease: (pitch) => bus.noteOff(pitch, "pointer"),
  });
  const stop = bus.subscribe((event) => {
    if (event.type === "pedal") return;
    pressed.set(bus.held);
    if (event.type === "noteOn") options.onNote(event.pitch, event);
  });
  return {
    element: piano.element,
    marks,
    dispose() {
      stop();
      bus.releaseAll("pointer");
    },
  };
}
