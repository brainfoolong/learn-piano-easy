/** The player's control bar in Spanish. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { playerBar as en } from "./player-bar.en";

export const playerBar: Translation<typeof en> = {
  actions: {
    play: "Reproducir o pausar",
    stop: "Detener y volver al inicio",
    seekBack: "Retroceder 5 segundos",
    seekForward: "Avanzar 5 segundos",
    toStart: "Ir al inicio",
    faster: "Más rápido",
    slower: "Más lento",
    transposeUp: "Transponer hacia arriba",
    transposeDown: "Transponer hacia abajo",
    loop: "Repetir en bucle los compases elegidos, luego toda la canción, luego desactivar",
    loopStart: "Repetir desde este compás",
    loopEnd: "Repetir hasta este compás",
    zoomIn: "Acercar",
    zoomOut: "Alejar",
    fit: "Ajustar a la canción",
    viewLeft: "Mover la vista a la izquierda",
    viewRight: "Mover la vista a la derecha",
    fullscreen: "Pantalla completa",
  },
  controls: {
    play: "Reproducir",
    pause: "Pausar",
    stop: "Detener",
    speed: "Velocidad",
    speedPercent: (n: number) => `${formatNumber("es", n)}%`,
    transpose: "Transponer",
    loop: "Repetir",
    repeatAll: "Repetir todo",
    loopTitles: {
      off: "Repetir en bucle los compases elegidos en la configuración",
      measures: "Repetir toda la canción en su lugar",
      song: "Dejar de repetir",
    },
    more: "Más herramientas",
    fit: "Ajustar",
    view: "Vista",
    leaveFullScreen: "Salir de pantalla completa",
    expert: "Experto",
    expertTitles: {
      off: "Mostrar todas las herramientas",
      on: "Mostrar solo las herramientas principales",
    },
  },
  hotkeys: {
    none: "Ninguna",
  },
  hotkeyDialog: {
    pressKey: "Presiona una tecla…",
    keyFor: (label: string) => `Tecla para ${label}`,
    clear: "Borrar",
    clearTitle: (label: string) => `Borrar la tecla de ${label}`,
    resetAll: "Restablecer todas las teclas",
    help: "Selecciona una tecla y luego presiona la tecla que quieras. Esc cierra este diálogo.",
    off: "Los atajos de teclado están desactivados en la configuración, así que estas teclas ahora no hacen nada.",
    open: "Cambiar atajos de teclado",
  },
  timeline: {
    position: "Posición en la canción",
  },
};
