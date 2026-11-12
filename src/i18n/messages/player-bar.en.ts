/** The player's control bar in English: its buttons, the timeline, the hotkeys and their dialog. */
import { formatNumber } from "../format";

export const playerBar = {
  /** What each action of `src/play/hotkeys.ts` does, as the hotkey dialog lists it and a bar button's tooltip says. */
  actions: {
    play: "Play or pause",
    stop: "Stop and go to the start",
    seekBack: "Go back 5 seconds",
    seekForward: "Go forward 5 seconds",
    toStart: "Go to the start",
    faster: "Faster",
    slower: "Slower",
    transposeUp: "Transpose up",
    transposeDown: "Transpose down",
    loop: "Loop the measures, then the whole song, then off",
    loopStart: "Loop from this measure",
    loopEnd: "Loop to this measure",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
    fit: "Fit to song",
    viewLeft: "Move view left",
    viewRight: "Move view right",
    fullscreen: "Full screen",
  },
  controls: {
    play: "Play",
    pause: "Pause",
    stop: "Stop",
    speed: "Speed",
    /** The speed readout, such as `100 %`. */
    speedPercent: (n: number) => `${formatNumber("en", n)} %`,
    transpose: "Transpose",
    loop: "Loop",
    /** The Loop button's label while it repeats the whole song. */
    repeatAll: "Repeat all",
    /** What the Loop button's next click does, by the mode it is in. */
    loopTitles: {
      off: "Loop the measures set in the settings",
      measures: "Repeat the whole song instead",
      song: "Stop repeating",
    },
    /** The button that opens the other tools on a phone. */
    more: "More tools",
    zoom: "Zoom",
    fit: "Fit",
    view: "View",
    leaveFullScreen: "Leave full screen",
    /** The name of the key that shows or hides the expert tools. */
    expert: "Expert",
    /** What the Expert key's next click does, as its tooltip says, by whether the expert tools show. */
    expertTitles: {
      off: "Show every tool",
      on: "Show the main tools only",
    },
  },
  hotkeys: {
    /** The names of the modifier keys in a combo. */
    modifiers: { Ctrl: "Ctrl", Alt: "Alt", Shift: "Shift", Meta: "Meta" },
    /** What an unbound key reads as. */
    none: "None",
  },
  hotkeyDialog: {
    pressKey: "Press a key…",
    keyFor: (label: string) => `Key for ${label}`,
    clear: "Clear",
    clearTitle: (label: string) => `Clear the key for ${label}`,
    resetAll: "Reset all keys",
    help: "Click a key, then press the key you want. Escape closes this dialog.",
    off: "Hotkeys are turned off in the settings, so these keys do nothing now.",
    /** The settings panel's button that opens the dialog. */
    open: "Change hotkeys",
  },
  timeline: {
    position: "Song position",
  },
};
