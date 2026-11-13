/** The player's settings panel in Spanish. A text it leaves out shows in English. */
import { parsePitch } from "../../keyboard/range";
import { pitchClassName } from "../../theory/note-names";
import { formatNumber, plural } from "../format";
import type { Translation } from "../translation";
import type { playerSettings as en } from "./player-settings.en";
import { playerSettingsLook } from "./player-settings-look.es";
import { playerSettingsPlay } from "./player-settings-play.es";

/** A tonic given in letters, such as `B♭`, in Spanish solfège, such as `Si♭`. Any other name stays as it is. */
function solfege(tonic: string): string {
  const pitch = parsePitch(`${tonic}4`);
  if (pitch === undefined) return tonic;
  return pitchClassName(pitch, { system: "solfege", accidentals: tonic.endsWith("♭") ? "flats" : "sharps", locale: "es" });
}

export const playerSettings: Translation<typeof en> = {
  panel: {
    title: "Configuración",
    close: "Cerrar la configuración",
    search: "Buscar en la configuración",
    clearSearch: "Borrar la búsqueda",
    sections: "Secciones de la configuración",
    found: (count) => (count === 1 ? "Se encontró 1 opción" : `Se encontraron ${count} opciones`),
    emptyTitle: "No se encontró nada",
    empty: (query) => `Ninguna opción coincide con «${query}». Prueba con otra palabra.`,
    showAll: "Mostrar todas las opciones",
    changed: (count) => (count === 1 ? "1 cambio" : `${count} cambios`),
    changedTotal: (count) =>
      count === 0
        ? "Todas las opciones tienen su valor predeterminado."
        : count === 1
          ? "1 opción cambiada"
          : `${count} opciones cambiadas`,
    reset: (label) => `Restablecer «${label}» a su valor predeterminado`,
    resetAll: "Restablecer todo",
    confirmResetAll: "¿Restablecer todas las opciones a su valor predeterminado? Se perderán tus cambios.",
  },
  groups: {
    basics: "Lo básico",
    instrument: "Tu instrumento",
    scene: "La escena",
    reading: "Ayudas de lectura",
    app: "Aplicación",
  },
  sections: {
    loop: "Bucle",
    audio: "Sonido",
    backing: "Pista de fondo",
    view: "Vista",
    keyboard: "Tu teclado",
    input: "Entrada",
    notes: "Notas",
    lanes: "Carriles y líneas",
    particles: "Partículas",
    labels: "Etiquetas",
    lyrics: "Letra",
    coding: "Código de colores",
    sheet: "Partitura",
    pdf: "Exportar a PDF",
    offline: "Sin conexión",
  },
  about: {
    general: "Cómo empieza el reproductor, cómo avanza una canción y qué muestra la línea de tiempo.",
    loop: "Repite un pasaje hasta que te salga solo.",
    audio: "El volumen, el timbre del piano, el metrónomo y el ecualizador.",
    backing: "Un archivo de audio propio que suena junto con la canción.",
    view: "La cámara, el brillo y cuánto de la canción ves por adelantado.",
    keyboard: "Las teclas de tu propio teclado, para que el piano en pantalla coincida con él.",
    input: "Cómo tocas: el modo, tus dispositivos y lo que revisa el reproductor.",
    piano: "El piano en pantalla: sus teclas, sus colores y sus efectos.",
    notes: "La forma y el brillo de las notas que caen.",
    lanes: "Los carriles detrás de las notas, y las líneas y marcas sobre ellos.",
    particles: "Llamas, chispas y tus propias partículas donde una nota llega a su tecla.",
    labels: "Nombres sobre las notas y las teclas, y los acordes de la canción.",
    lyrics: "La letra de la canción, línea por línea sobre la escena.",
    coding: "Un color para cada altura o para cada dedo.",
    sheet: "La canción como partitura, junto a las notas que caen o en su lugar.",
    pdf: "Guarda las notas que caen como páginas para imprimir.",
    offline: "Lo que la aplicación guarda para que puedas tocar sin conexión.",
  },
  subheadings: {
    generalApp: "Aplicación y datos",
    generalSong: "La canción",
    generalReadouts: "Indicadores y línea de tiempo",
    audioVolume: "Volumen y toque",
    audioRoom: "Reverberación y afinación",
    audioEnvelope: "Envolvente",
    audioMetronome: "Metrónomo",
    audioEqualizer: "Ecualizador",
    audioTiming: "Sincronización",
    inputMode: "Modo",
    inputDevices: "Dispositivos y teclas",
    inputAlong: "Tocar con la canción",
    inputScore: "Puntuación y juego",
    pianoPressed: "Teclas que presionas",
    pianoLook: "Colores y tamaño",
    pianoFlare: "Destello",
    pianoWave: "Línea de onda",
    lanesColours: "Colores de los carriles",
    lanesLines: "Líneas de compás y de tiempo",
    lanesHeld: "Teclas que mantienes",
    lanesMarkers: "Marcadores y pedal",
    particlesEffects: "Efectos",
    particlesLook: "Tus partículas: aspecto",
    particlesLife: "Tus partículas: cantidad y duración",
    particlesMotion: "Tus partículas: movimiento",
    particlesWander: "Tus partículas: deriva y vaivén",
    particlesStart: "Tus partículas: dónde nacen",
    labelsNotes: "En las notas",
    labelsPiano: "En el piano",
    labelsChords: "Acordes",
    codingPitch: "Por altura",
    codingFinger: "Por dedo",
    sheetLayout: "Diseño",
    sheetNotation: "Notación",
    sheetCursor: "Cursor y colores",
  },
  settings: { ...playerSettingsPlay, ...playerSettingsLook },
  range: {
    label: "Tamaño del teclado",
    keys: (count) => `${formatNumber("es", count)} ${plural("es", count, { one: "tecla", many: "de teclas", other: "teclas" })}`,
    custom: "Personalizado",
    summary: (keys, first, last) => `${keys}, de ${first} a ${last}`,
    octaveDown: "− Octava",
    octaveDownName: "Bajar una octava",
    octaveUp: "Octava +",
    octaveUpName: "Subir una octava",
  },
  key: (tonic, mode) => `${solfege(tonic)} ${{ major: "mayor", minor: "menor" }[mode] ?? mode}`,
};
