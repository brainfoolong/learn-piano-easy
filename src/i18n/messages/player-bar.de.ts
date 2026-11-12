/** The player's control bar in German. It satisfies the English section's type, so it holds every message. */
import { formatNumber } from "../format";
import type { playerBar as en } from "./player-bar.en";

export const playerBar: typeof en = {
  actions: {
    play: "Abspielen oder pausieren",
    stop: "Stoppen und zum Anfang",
    seekBack: "5 Sekunden zurück",
    seekForward: "5 Sekunden vor",
    toStart: "Zum Anfang",
    faster: "Schneller",
    slower: "Langsamer",
    transposeUp: "Höher transponieren",
    transposeDown: "Tiefer transponieren",
    loop: "Schleife über die Takte, dann das ganze Lied, dann aus",
    loopStart: "Schleife ab diesem Takt",
    loopEnd: "Schleife bis zu diesem Takt",
    zoomIn: "Vergrößern",
    zoomOut: "Verkleinern",
    fit: "An das Lied anpassen",
    viewLeft: "Ansicht nach links",
    viewRight: "Ansicht nach rechts",
    fullscreen: "Vollbild",
  },
  controls: {
    play: "Abspielen",
    pause: "Pause",
    stop: "Stopp",
    speed: "Tempo",
    speedPercent: (n: number) => `${formatNumber("de", n)} %`,
    transpose: "Transponieren",
    loop: "Schleife",
    repeatAll: "Alles wiederholen",
    loopTitles: {
      off: "Die Takte aus den Einstellungen wiederholen",
      measures: "Stattdessen das ganze Lied wiederholen",
      song: "Nicht mehr wiederholen",
    },
    more: "Weitere Werkzeuge",
    zoom: "Zoom",
    fit: "Anpassen",
    view: "Ansicht",
    leaveFullScreen: "Vollbild verlassen",
    expert: "Experte",
    expertTitles: {
      off: "Alle Werkzeuge zeigen",
      on: "Nur die wichtigsten Werkzeuge zeigen",
    },
  },
  hotkeys: {
    modifiers: { Ctrl: "Strg", Alt: "Alt", Shift: "Umschalt", Meta: "Meta" },
    none: "Keine",
  },
  hotkeyDialog: {
    pressKey: "Drück eine Taste…",
    keyFor: (label: string) => `Taste für ${label}`,
    clear: "Löschen",
    clearTitle: (label: string) => `Die Taste für ${label} löschen`,
    resetAll: "Alle Tasten zurücksetzen",
    help: "Klick auf eine Taste und drück dann die gewünschte Taste. Escape schließt diesen Dialog.",
    off: "Die Tastenkürzel sind in den Einstellungen ausgeschaltet. Diese Tasten tun gerade nichts.",
    open: "Tastenkürzel ändern",
  },
  timeline: {
    position: "Position im Lied",
  },
};
