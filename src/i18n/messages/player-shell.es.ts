/** The player's shell in Spanish. A text it leaves out shows in English. */
import { formatNumber, plural } from "../format";
import type { Translation } from "../translation";
import type { playerShell as en } from "./player-shell.en";

/** `n` seconds with two decimals and no digit grouping, such as `12.50`. */
const seconds = (n: number) => formatNumber("es", n, { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: false });
/** `n` with one decimal and no digit grouping, such as `6.6`. */
const tenths = (n: number) => formatNumber("es", n, { minimumFractionDigits: 1, maximumFractionDigits: 1, useGrouping: false });
const files = (n: number) => `${formatNumber("es", n)} ${plural("es", n, { one: "archivo", many: "de archivos", other: "archivos" })}`;

export const playerShell: Translation<typeof en> = {
  dialog: {
    close: "Cerrar",
    hotkeys: "Atajos de teclado",
    keyBindings: "Teclas del teclado de la computadora",
    pdf: "Guardar como PDF",
    offlineFiles: "Archivos sin conexión",
    tracks: "Pistas",
    songs: "Canciones",
    guide: (title) => `Guía de ${title}`,
    about: "Acerca de Learn Piano Easy",
  },
  toast: {
    dismiss: "Descartar",
  },
  topbar: {
    songs: "Canciones",
    tracks: "Pistas",
    guide: "Guía",
    settings: "Configuración",
    about: "Acerca de",
    openSong: "Canción abierta",
    demoSong: "Canción de demostración",
    songFallback: "Canción",
  },
  songs: {
    noneFound: "No se encontraron archivos de canciones.",
    wrongKind: "Solo se pueden agregar archivos MIDI y MusicXML.",
    added: (n) => {
      const count = formatNumber("es", n);
      return plural("es", n, {
        one: `Se agregó ${count} canción a «Tus canciones».`,
        many: `Se agregaron ${count} de canciones a «Tus canciones».`,
        other: `Se agregaron ${count} canciones a «Tus canciones».`,
      });
    },
    notKept: (reason) => `No se pudieron guardar las canciones: ${reason}`,
    soundsFailed: "No se pudieron cargar los sonidos del piano, así que las canciones se reproducen sin sonido.",
  },
  guide: {
    step: (n, summary) => `Paso ${formatNumber("es", n)}: ${summary}.`,
    barLoops: (bar) => `El compás ${formatNumber("es", bar)} se repite en bucle.`,
    topBeaten: (title) => `Superaste ${title}, el último paso de esta canción. ¡Muy bien tocado!`,
    beaten: (title, next) => `¡Superaste ${title}! Ahora sigue ${next}.`,
    playNext: (next) => `Tocar ${next}`,
  },
  lesson: {
    label: "Lección",
    target: (percent) => `Acierta el ${formatNumber("es", percent)}% de las notas en un intento con puntuación.`,
    back: "Volver a la lección",
    missing: "La canción de la lección no está en el catálogo.",
  },
  finger: {
    label: "Nota seleccionada",
    setByYou: "elegido por ti",
    fromGuide: "de la guía",
    suggested: "sugerido",
    none: "sin dedo",
    finger: (finger, source) => `dedo ${finger}, ${source}`,
    line: (note, said) => `${note}: ${said}. Presiona del 1 al 5 para elegir el dedo, 0 para borrarlo y Esc para terminar.`,
  },
  backgroundTrack: {
    notAudio: (file) => `${file} no es un audio que este navegador pueda reproducir.`,
    playsAlong: (file) => `${file} suena junto con la canción.`,
  },
  about: {
    license: "Licencia",
    notices: "Avisos de terceros",
    packageLicense: (name) => `Licencia de ${name}`,
    offline: "Este texto todavía no está disponible sin conexión.",
    intro:
      "Learn Piano Easy es una aplicación gratuita y de código abierto para aprender piano, con un curso guiado y tus propios archivos MIDI. Funciona sin conexión en tu navegador.",
    build: (version) => `Compilación ${version}`,
  },
  cache: {
    groups: {
      app: { label: "Aplicación", description: "La página, su código y la lista de canciones. La aplicación los necesita para abrirse sin conexión." },
      songs: { label: "Canciones", description: "Todas las canciones que trae la aplicación, para que cualquiera de ellas se abra sin conexión." },
      sounds: { label: "Sonidos del piano", description: "Todos los juegos de sonidos, para que el piano suene sin conexión con el juego que elijas." },
    },
    bytes: (n) => `${formatNumber("es", n, { useGrouping: false })} B`,
    kilobytes: (n) => `${tenths(n)} KB`,
    megabytes: (n) => `${tenths(n)} MB`,
    groupsFailed: (n, labels) =>
      `${plural("es", n, { one: "No se pudo", many: "No se pudieron", other: "No se pudieron" })} guardar ${files(n)} de ${labels} para usar sin conexión.`,
    updated: (labels) => `Se actualizó. Se guardaron otra vez para usar sin conexión: ${labels}.`,
    unavailable: "Este navegador no guarda archivos sin conexión para esta página.",
    reading: "Leyendo lo guardado…",
    unreadable: "No se pudo leer la lista de archivos sin conexión. Vuelve a cargar la página y prueba otra vez.",
    intro: "Los archivos guardados funcionan sin red. Cada parte se puede guardar o quitar por separado.",
    allSaved: "todo guardado",
    noneSaved: "sin guardar",
    someSaved: (count, total) => `${formatNumber("es", count)} de ${files(total)} guardados`,
    status: (size, total, state) => `${size}, ${files(total)}, ${state}.`,
    saving: (done, total) => `Guardando ${formatNumber("es", done)} de ${files(total)}…`,
    failed: (n) => `${plural("es", n, { one: "No se pudo", many: "No se pudieron", other: "No se pudieron" })} guardar ${files(n)}.`,
    save: "Guardar",
    saveAgain: "Guardar otra vez",
    remove: "Quitar",
    saveGroup: (label) => `Guardar ${label}`,
    removeGroup: (label) => `Quitar ${label}`,
    keep: "Mantener guardado después de cada actualización",
  },
  update: {
    ready: "La nueva versión está lista.",
    reload: "Volver a cargar",
  },
  scene: {
    startKeys: (keys) => `, teclas de inicio ${keys}`,
    chord: (chord) => `, acorde ${chord}`,
  },
  demo: {
    lyrics: [
      "Mi|ra las lu|ces ba|jar",
      "to|ca ca|da te|cla al lle|gar",
      "pri|me|ro len|to, lue|go ve|loz",
      "y tus ma|nos sa|brán dón|de an|dar",
    ],
    part: (n) => `Parte ${formatNumber("es", n)}`,
    leftHand: "Mano izquierda",
    rightHand: "Mano derecha",
  },
  chords: {
    root: "Fundamental",
    /** A chord tone as a feminine ordinal, since the interval it names is feminine: `♭3.ª` for *tercera*. */
    ordinal: (tone) => `${tone}.ª`,
  },
  overlays: {
    fps: "Cuadros por segundo",
    bpmValue: (n) => `${formatNumber("es", n, { useGrouping: false })} BPM`,
    fpsValue: (n) => `${formatNumber("es", n, { useGrouping: false })} FPS`,
    track: (track, channel) => `Pista ${track}, canal ${channel}`,
    velocity: (velocity) => `Intensidad ${velocity}`,
    timing: (start, length) => `Empieza en ${seconds(start)} s, dura ${seconds(length)} s`,
  },
  sheet: {
    label: "Partitura",
    empty: "La partitura no muestra ninguna pista. Activa una en Pistas.",
  },
};
