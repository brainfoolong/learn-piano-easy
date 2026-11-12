/**
 * Web MIDI: the learner's MIDI keyboard as input, and a MIDI device as output, chosen, remembered and
 * followed as devices come and go.
 *
 * The chosen input's notes and sustain pedal go onto the input bus. The chosen output is the port the
 * modes send to, such as key lighting and the metronome.
 *
 * Decisions, and what each costs:
 * - Access is asked for only once the learner presses the connect button, or at start when the browser
 *   already grants it. A visitor with no MIDI device never sees the browser's permission prompt.
 * - The input choice defaults to every input, so a keyboard plugged in plays at once. The output
 *   defaults to none, so the app sends nothing to a device the learner did not choose.
 * - A choice stays when its device goes away, and the device plays again when it comes back. A device
 *   is matched by its id, then by its name, because a browser may give it a new id on the next visit.
 * - With `saveMidiDevices` on, the choices are kept in local storage under `STORAGE_KEY`, apart from the
 *   settings. A settings file then never carries one machine's devices to another.
 * - A device that goes away lets go every MIDI key, because its note-offs never arrive.
 * - A note-on at velocity 0 is a note-off, as the MIDI standard says. Every channel is heard.
 * - Parsing a message and matching a device are pure, so their tests run without a browser.
 *
 * Gaps: a MIDI note does not count as a user gesture, so the sound waits for the learner's first click
 * or key press after the page loads.
 */
import { noteChange } from "../data/changes";
import type { SettingsStore } from "../settings/store";
import type { InputBus } from "./input-bus";

/** Where the chosen devices are kept, apart from the settings. */
export const STORAGE_KEY = "learn-piano-easy.midi-devices";

/** A MIDI port as the learner sees it. */
export interface DeviceInfo {
  id: string;
  name: string;
}

/** What a MIDI message means to the app, or undefined for a message it ignores. */
export type MidiMessage =
  | { type: "noteOn"; pitch: number; velocity: number }
  | { type: "noteOff"; pitch: number }
  | { type: "pedal"; down: boolean };

/** The meaning of the MIDI message `data`. Sustain is controller 64, down from a value of 64. */
export function parseMidiMessage(data: ArrayLike<number>): MidiMessage | undefined {
  if (data.length < 3) return undefined;
  const status = (data[0] as number) & 0xf0;
  const a = (data[1] as number) & 0x7f;
  const b = (data[2] as number) & 0x7f;
  if (status === 0x90 && b > 0) return { type: "noteOn", pitch: a, velocity: b };
  if (status === 0x80 || status === 0x90) return { type: "noteOff", pitch: a };
  if (status === 0xb0 && a === 64) return { type: "pedal", down: b >= 64 };
  return undefined;
}

/** The device of `devices` that `wanted` names, by id first and then by name. */
export function findDevice<D extends { id: string; name: string | null }>(devices: readonly D[], wanted: DeviceInfo | undefined): D | undefined {
  if (wanted === undefined) return undefined;
  return devices.find((d) => d.id === wanted.id) ?? devices.find((d) => d.name === wanted.name);
}

/** Where Web MIDI stands in this browser. */
export type MidiState = "unsupported" | "off" | "asking" | "on" | "denied";

/** The part of `Storage` the devices use, so a test can pass its own. */
interface DeviceStorage {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

interface Remembered {
  input?: DeviceInfo;
  output?: DeviceInfo;
}

/** The MIDI devices: access, the two choices, and the chosen input feeding the bus. */
export class MidiDevices {
  #state: MidiState;
  #access: MIDIAccess | undefined;
  #input: DeviceInfo | undefined;
  #output: DeviceInfo | undefined;
  readonly #bus: InputBus;
  readonly #settings: Pick<SettingsStore, "get">;
  readonly #storage: DeviceStorage | null;
  readonly #listening = new Set<MIDIInput>();
  readonly #listeners = new Set<() => void>();

  constructor(bus: InputBus, settings: Pick<SettingsStore, "get">, storage: DeviceStorage | null = pageStorage()) {
    this.#bus = bus;
    this.#settings = settings;
    this.#storage = storage;
    this.#state = typeof navigator !== "undefined" && "requestMIDIAccess" in navigator ? "off" : "unsupported";
    const remembered = this.#remembered();
    this.#input = remembered.input;
    this.#output = remembered.output;
  }

  get state(): MidiState {
    return this.#state;
  }

  /** The input ports connected now. */
  get inputs(): DeviceInfo[] {
    return this.#ports("inputs");
  }

  /** The output ports connected now. */
  get outputs(): DeviceInfo[] {
    return this.#ports("outputs");
  }

  /** The input chosen, or undefined for every input. */
  get input(): DeviceInfo | undefined {
    return this.#input;
  }

  /** The output chosen, or undefined for none. */
  get output(): DeviceInfo | undefined {
    return this.#output;
  }

  /** The chosen output's port while it is connected, or undefined. */
  get outputPort(): MIDIOutput | undefined {
    const outputs = this.#access === undefined ? [] : [...this.#access.outputs.values()].filter((p) => p.state === "connected");
    return findDevice(outputs, this.#output);
  }

  /** Hears every change of the state, the devices or the choices. Returns what stops it. */
  subscribe(listener: () => void): () => void {
    this.#listeners.add(listener);
    return () => this.#listeners.delete(listener);
  }

  /** Connects at start when the browser already grants MIDI access, without a prompt. */
  async autoConnect(): Promise<void> {
    if (this.#state !== "off") return;
    try {
      const status = await navigator.permissions.query({ name: "midi" as PermissionName });
      if (status.state === "granted") await this.connect();
    } catch {
      // A browser that cannot query the MIDI permission waits for the connect button.
    }
  }

  /** Asks the browser for MIDI access, and listens to the chosen input once it is given. */
  async connect(): Promise<void> {
    if (this.#state === "unsupported" || this.#state === "on" || this.#state === "asking") return;
    this.#set("asking");
    try {
      this.#access = await navigator.requestMIDIAccess();
    } catch {
      this.#set("denied");
      return;
    }
    this.#access.onstatechange = () => this.#follow();
    this.#state = "on";
    this.#follow();
  }

  /** Plays from the input with `id`, or from every input when it is undefined. */
  chooseInput(id: string | undefined): void {
    this.#input = id === undefined ? undefined : this.inputs.find((d) => d.id === id) ?? this.#input;
    this.#remember();
    this.#follow();
  }

  /** Sends to the output with `id`, or to none when it is undefined. */
  chooseOutput(id: string | undefined): void {
    this.#output = id === undefined ? undefined : this.outputs.find((d) => d.id === id) ?? this.#output;
    this.#remember();
    this.#notify();
  }

  /** Listens to every connected input the choice takes, and to nothing else. */
  #follow(): void {
    const ports = this.#access === undefined ? [] : [...this.#access.inputs.values()].filter((p) => p.state === "connected");
    const chosen = this.#input === undefined ? ports : [findDevice(ports, this.#input)].filter((p) => p !== undefined);
    const wanted = new Set(chosen);
    let lost = false;
    for (const port of this.#listening) {
      if (wanted.has(port)) continue;
      port.onmidimessage = null;
      this.#listening.delete(port);
      lost = true;
    }
    for (const port of wanted) {
      if (this.#listening.has(port)) continue;
      port.onmidimessage = (event) => this.#hear(event.data);
      this.#listening.add(port);
    }
    if (lost) this.#bus.releaseAll("midi");
    this.#notify();
  }

  #hear(data: Uint8Array | null): void {
    const message = data === null ? undefined : parseMidiMessage(data);
    if (message === undefined) return;
    if (message.type === "noteOn") this.#bus.noteOn(message.pitch, message.velocity, "midi");
    else if (message.type === "noteOff") this.#bus.noteOff(message.pitch, "midi");
    else this.#bus.pedal(message.down, "midi");
  }

  #ports(kind: "inputs" | "outputs"): DeviceInfo[] {
    if (this.#access === undefined) return [];
    return [...this.#access[kind].values()]
      .filter((p) => p.state === "connected")
      .map((p) => ({ id: p.id, name: p.name ?? p.id }));
  }

  #remembered(): Remembered {
    if (this.#storage === null || !this.#settings.get("saveMidiDevices")) return {};
    try {
      const raw: unknown = JSON.parse(this.#storage.getItem(STORAGE_KEY) ?? "{}");
      const out: Remembered = {};
      if (typeof raw !== "object" || raw === null) return out;
      const input = deviceOf((raw as Record<string, unknown>).input);
      const output = deviceOf((raw as Record<string, unknown>).output);
      if (input) out.input = input;
      if (output) out.output = output;
      return out;
    } catch {
      return {};
    }
  }

  #remember(): void {
    if (this.#storage === null) return;
    if (!this.#settings.get("saveMidiDevices")) this.#storage.removeItem(STORAGE_KEY);
    else this.#storage.setItem(STORAGE_KEY, JSON.stringify({ input: this.#input, output: this.#output }));
    noteChange("memory");
  }

  #set(state: MidiState): void {
    this.#state = state;
    this.#notify();
  }

  #notify(): void {
    for (const listener of [...this.#listeners]) listener();
  }
}

/** `raw` as a device, or undefined when it is not one. */
function deviceOf(raw: unknown): DeviceInfo | undefined {
  if (typeof raw !== "object" || raw === null) return undefined;
  const { id, name } = raw as Record<string, unknown>;
  return typeof id === "string" && typeof name === "string" ? { id, name } : undefined;
}

function pageStorage(): DeviceStorage | null {
  try {
    return typeof localStorage === "undefined" ? null : localStorage;
  } catch {
    return null;
  }
}
