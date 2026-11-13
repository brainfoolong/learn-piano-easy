/** The player's input texts in Spanish. A text it leaves out shows in English. */
import { formatNumber, plural } from "../format";
import type { Translation } from "../translation";
import type { playerInput as en } from "./player-input.en";

export const playerInput: Translation<typeof en> = {
  devices: {
    heading: "Dispositivos MIDI",
    connect: "Conectar dispositivos MIDI",
    input: "Entrada MIDI",
    output: "Salida MIDI",
    everyInput: "Todas las entradas",
    noOutput: "Sin salida",
    notConnected: (name: string) => `${name} (no conectado)`,
    unsupported: "Este navegador no puede acceder a dispositivos MIDI. Chrome, Edge y Firefox sí pueden.",
    off: "Conecta tus dispositivos MIDI para tocar con un teclado MIDI.",
    asking: "Esperando el permiso del navegador…",
    denied: "Se denegó el acceso MIDI. Permítelo en la configuración del sitio del navegador y vuelve a conectar.",
    noInputs: "No hay ningún dispositivo MIDI conectado.",
    inputsFound: (n: number) => {
      const count = formatNumber("es", n);
      return plural("es", n, {
        one: `Se encontró ${count} entrada MIDI.`,
        many: `Se encontraron ${count} de entradas MIDI.`,
        other: `Se encontraron ${count} entradas MIDI.`,
      });
    },
  },
  freePlay: {
    heading: "Tocar libremente",
    record: "Grabar",
    stop: "Detener",
    stopRecording: "Detener grabación",
    save: "Guardar",
    saveTitle: "Guardar como archivo MIDI",
    recording: (clock: string) => `Grabando ${clock}`,
    recorded: (n: number) => {
      const count = formatNumber("es", n);
      return plural("es", n, {
        one: `Se grabó ${count} nota. Con «Guardar» la conservas como archivo MIDI.`,
        many: `Se grabaron ${count} de notas. Con «Guardar» las conservas como archivo MIDI.`,
        other: `Se grabaron ${count} notas. Con «Guardar» las conservas como archivo MIDI.`,
      });
    },
    hint: "Toca libremente, o selecciona «Grabar» para conservar lo que tocas.",
  },
  history: {
    empty: "Aún no hay intentos terminados de esta canción. Tócala hasta el final con la puntuación activada.",
    hands: { both: "Ambas", right: "Derecha", left: "Izquierda" },
    columns: {
      date: "Fecha",
      speed: "Velocidad",
      hands: "Manos",
      accuracy: "Precisión",
      hits: "Aciertos",
      perfect: "Perfectas",
      misses: "Perdidas",
      mistakes: "Errores",
    },
  },
  keyBinding: {
    help: "Selecciona la tecla de una nota y luego presiona la tecla de la computadora que debe tocarla. Escape cierra este diálogo.",
    open: "Cambiar teclas",
  },
  learnRange: {
    lowest: "Toca tu tecla más grave…",
    highest: "Ahora tu tecla más aguda…",
    start: "Detectar con tu teclado",
    title: "Detectar el rango con tu teclado",
  },
  pitchPractice: {
    heading: "Práctica de oído",
    hear: "Escuchar",
    hearTitle: "Escuchar la nota",
    again: "Empezar de nuevo",
    againTitle: "Empezar una ronda nueva",
    empty: "No hay notas para preguntar",
    emptyHint: "La tonalidad no tiene notas entre las notas elegidas de tu teclado.",
    done: "Ronda terminada",
    found: (n: number, count: number) => `${formatNumber("es", n)} de ${formatNumber("es", count)} notas encontradas.`,
    play: (note: string) => `Toca ${note}`,
    progress: (i: number, count: number) => `Nota ${formatNumber("es", i)} de ${formatNumber("es", count)}`,
    wrong: (note: string) => `No es ${note}. Prueba otra vez.`,
    right: (note: string) => `${note} es correcto.`,
    results: "Resultados de la práctica de oído",
    mistakes: (n: number, count: number) => {
      const notes = `${formatNumber("es", count)} ${plural("es", count, { one: "nota", many: "de notas", other: "notas" })}`;
      if (n === 0) return `Ningún error en ${notes}.`;
      return `${formatNumber("es", n)} ${plural("es", n, { one: "error", many: "de errores", other: "errores" })} en ${notes}.`;
    },
    columns: { note: "Nota", asked: "Preguntada", mistakes: "Errores", playedInstead: "Tocada en su lugar" },
    firstTry: (n: number, count: number) => `${formatNumber("es", n)} de ${formatNumber("es", count)} encontradas al primer intento.`,
  },
  scoring: {
    heading: "Puntuación",
    judgements: { perfect: "Perfecta", hit: "Acierto", mistake: "Error", miss: "Perdida" },
    counts: (hits: number, perfect: number, misses: number, mistakes: number) =>
      `Aciertos ${formatNumber("es", hits)} · Perfectas ${formatNumber("es", perfect)} · Perdidas ${formatNumber("es", misses)} · Errores ${formatNumber("es", mistakes)}`,
    history: "Historial",
    historyTitle: "Tus intentos de esta canción",
    readError: "No se pudo leer el historial.",
    saved: "Intento guardado en el historial.",
    saveError: "No se pudo guardar este intento.",
  },
  game: {
    levels: { easy: "Fácil", hard: "Difícil" },
    words: {
      perfect: "Perfecto",
      great: "Genial",
      good: "Bien",
      hold: "Mantén",
      release: "Limpia",
      wrong: "Nota falsa",
      miss: "Perdida",
      short: "Muy corta",
      long: "Muy larga",
      late: "Tarde",
    },
    name: "Juego",
    score: "Puntuación",
    multiplier: "Multiplicador",
    held: (points: string) => `Mantén ${points}`,
    burst: (multiplier: number) => `¡Combo ×${formatNumber("es", multiplier)}!`,
    inARow: (combo: number) => `${formatNumber("es", combo)} seguidas`,
    announce: (multiplier: number, combo: number) =>
      `Combo por ${formatNumber("es", multiplier)}, ${formatNumber("es", combo)} seguidas.`,
    result: "Resultado del intento",
    complete: "Intento terminado",
    bestCombo: (combo: number) => `Mejor combo ${formatNumber("es", combo)}`,
    stats: {
      perfect: "Perfecto",
      great: "Genial",
      good: "Bien",
      wrong: "Falsas",
      miss: "Perdidas",
      late: "Tarde",
      short: "Muy cortas",
      long: "Muy largas",
    },
    helped: "Con «Esperar tus notas»",
    close: "Cerrar",
    closeName: "Cerrar el resultado del intento",
  },
  pdf: {
    noSong: "Primero abre una canción y luego guarda sus notas como PDF.",
    intro: (title: string) => `Guarda en PDF las notas que caen de ${title} sobre un piano, con unos segundos de la canción en cada página.`,
    secondsPerPage: "Segundos por página",
    background: "Usar colores de fondo",
    pages: (pages: number, seconds: number) =>
      `${formatNumber("es", pages)} ${plural("es", pages, { one: "página", many: "de páginas", other: "páginas" })}, cada una con ${formatNumber("es", seconds)} segundos de la canción.`,
    save: "Guardar PDF",
    pageHeading: (title: string, from: string, to: string, page: number, count: number) =>
      `${title}   ${from} a ${to}   página ${formatNumber("es", page)} de ${formatNumber("es", count)}`,
  },
};
