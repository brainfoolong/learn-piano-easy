/**
 * The device control: how the learner connects MIDI devices and picks the input and the output, at the
 * head of the settings panel's Input section.
 *
 * It shows what `MidiDevices` reports and follows its changes, so a device plugged in joins the menus
 * at once. Before access is granted, it shows a button that asks for it. A chosen device that is
 * unplugged stays in its menu, marked as not connected.
 *
 * It lives as long as the settings panel, so its texts follow the live locale of `src/i18n/live.ts`.
 * The fixed labels are localized once, and the status and the menus are rebuilt on a change.
 */
import { localize, onLocale, t } from "../i18n/live";
import { button, el } from "../ui/dom";
import type { DeviceInfo, MidiDevices } from "./web-midi";

/** The menu value of "every input" and of "no output". */
const NONE = "";

/** The device control over `devices`, with what stops it following them. */
export function createDeviceControl(devices: MidiDevices): { element: HTMLElement; dispose(): void } {
  const status = el("span", { class: "range-summary", attrs: { "aria-live": "polite" } });
  const connect = button("", () => void devices.connect(), { class: "outline" });
  for (const attribute of [undefined, "title", "aria-label"]) localize(connect, (m) => m.player.input.devices.connect, attribute);
  const inputMenu = el("select", {
    attrs: { "data-control": "select" },
    on: { change: () => devices.chooseInput(inputMenu.value === NONE ? undefined : inputMenu.value) },
  });
  localize(inputMenu, (m) => m.player.input.devices.input, "aria-label");
  const outputMenu = el("select", {
    attrs: { "data-control": "select" },
    on: { change: () => devices.chooseOutput(outputMenu.value === NONE ? undefined : outputMenu.value) },
  });
  localize(outputMenu, (m) => m.player.input.devices.output, "aria-label");

  const fill = (menu: HTMLSelectElement, none: string, ports: DeviceInfo[], chosen: DeviceInfo | undefined) => {
    const options = [el("option", { props: { value: NONE }, text: none })];
    for (const port of ports) options.push(el("option", { props: { value: port.id }, text: port.name }));
    const present = chosen !== undefined && ports.some((p) => p.id === chosen.id || p.name === chosen.name);
    if (chosen !== undefined && !present) options.push(el("option", { props: { value: chosen.id }, text: t().player.input.devices.notConnected(chosen.name) }));
    menu.replaceChildren(...options);
    const match = chosen === undefined ? undefined : (ports.find((p) => p.id === chosen.id) ?? ports.find((p) => p.name === chosen.name));
    menu.value = match?.id ?? chosen?.id ?? NONE;
  };

  const show = () => {
    const words = t().player.input.devices;
    const state = devices.state;
    const on = state === "on";
    connect.hidden = state !== "off" && state !== "denied";
    inputMenu.hidden = !on;
    outputMenu.hidden = !on;
    status.textContent = {
      unsupported: words.unsupported,
      off: words.off,
      asking: words.asking,
      denied: words.denied,
      on: devices.inputs.length === 0 ? words.noInputs : words.inputsFound(devices.inputs.length),
    }[state];
    if (!on) return;
    fill(inputMenu, words.everyInput, devices.inputs, devices.input);
    fill(outputMenu, words.noOutput, devices.outputs, devices.output);
  };
  show();
  const stopDevices = devices.subscribe(show);
  const stopLocale = onLocale(show);

  const element = el("div", {
    class: "setting-row range-tools",
    children: [
      el("div", {
        class: "setting-text",
        children: [localize(el("span", { class: "setting-label" }), (m) => m.player.input.devices.heading), status],
      }),
      el("div", { class: "range-buttons", children: [connect, inputMenu, outputMenu] }),
    ],
  });
  return {
    element,
    dispose() {
      stopDevices();
      stopLocale();
    },
  };
}
