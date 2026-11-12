import { expect, test } from "../testing";
import { findDevice, parseMidiMessage } from "./web-midi";

test("a_note_on_at_velocity_0_is_a_note_off", () => {
  expect(parseMidiMessage([0x90, 60, 100])).toEqual({ type: "noteOn", pitch: 60, velocity: 100 });
  // Every channel is heard.
  expect(parseMidiMessage([0x93, 60, 0])).toEqual({ type: "noteOff", pitch: 60 });
  expect(parseMidiMessage([0x80, 60, 64])).toEqual({ type: "noteOff", pitch: 60 });
  expect(parseMidiMessage([0xb0, 64, 127])).toEqual({ type: "pedal", down: true });
  expect(parseMidiMessage([0xb0, 64, 10])).toEqual({ type: "pedal", down: false });
  expect(parseMidiMessage([0xb0, 7, 100])).toBeUndefined();
  expect(parseMidiMessage([0xfe])).toBeUndefined();
});

test("a_remembered_device_is_found_by_its_name_when_its_id_changed", () => {
  const ports = [
    { id: "a", name: "Digital Piano" },
    { id: "b", name: "Controller" },
  ];
  expect(findDevice(ports, { id: "b", name: "Renamed" })?.id).toBe("b");
  expect(findDevice(ports, { id: "old", name: "Digital Piano" })?.id).toBe("a");
  expect(findDevice(ports, { id: "old", name: "Gone" })).toBeUndefined();
  expect(findDevice(ports, undefined)).toBeUndefined();
});
