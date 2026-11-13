/** The player's settings from the notes to the offline files, in Spanish. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { playerSettingsLook as en } from "./player-settings-look.en";

export const playerSettingsLook: Translation<typeof en> = {
  // Notes
  showHitKeys: {
    label: "Iluminar las notas que suenan",
    help: "Una nota brilla en su propio color mientras suena.",
  },
  noteWidth: {
    label: "Ancho de la nota (% de la tecla)",
    help: "Qué tan ancha es cada nota que cae, en relación con su tecla.",
  },
  roundedNotes: {
    label: "Notas redondeadas",
    help: "Da esquinas redondas a las notas que caen.",
  },
  noteBorderRadius: {
    label: "Radio de las esquinas (%)",
    help: "Qué tan redondas son las esquinas de una nota.",
  },
  minNoteHeight: {
    label: "Largo mínimo de una nota",
    help: "En anchos de tecla, para que una nota muy corta se siga viendo.",
  },
  strokeNotes: {
    label: "Brillo del borde",
    help: "Un borde de luz en el propio color de cada nota.",
  },
  strokeNotesWidth: {
    label: "Intensidad del brillo del borde",
    help: "Qué tan brillante es el borde de luz de cada nota.",
  },
  noteEndedShrink: {
    label: "Hundir las notas tocadas en su tecla",
    help: "Una nota se hunde en su tecla mientras suena. Si lo desactivas, sigue de largo más allá de las teclas.",
  },
  playedNoteFalloffSpeed: {
    label: "Recorrido de las notas tocadas tras las teclas",
    help: "En anchos de tecla, cuando las notas tocadas no se hunden.",
  },
  showSustainedNotes: {
    label: "Mostrar cuánto sostiene el pedal una nota",
    help: "Una cola fina sigue a cada nota que el pedal sostiene.",
  },
  sustainedNotesOpacity: {
    label: "Brillo de las colas del pedal (%)",
    help: "Qué tan visibles son las colas del pedal detrás de las notas.",
  },

  // Lanes
  bgCol1: {
    label: "Color de los carriles",
    help: "El color de los carriles sobre las teclas blancas.",
  },
  bgCol5: {
    label: "Color de los carriles de las teclas negras",
    help: "El color de los carriles sobre las teclas negras.",
  },
  bgCol3: {
    label: "Color del separador de octavas",
    help: "El color de la línea entre cada si y el do siguiente.",
  },
  drawMeasureLines: {
    label: "Líneas divisorias",
    help: "Una línea cruza los carriles al inicio de cada compás.",
  },
  measureLineThickness: {
    label: "Grosor de las líneas divisorias",
    help: "Qué tan gruesa es la línea de cada compás.",
  },
  measureLineColor: {
    label: "Color de las líneas divisorias",
    help: "El color de la línea de cada compás.",
  },
  enableDrawBeatLines: {
    label: "Líneas de los tiempos",
    help: "Una línea más tenue cruza los carriles en cada tiempo.",
  },
  beatLineThickness: {
    label: "Grosor de las líneas de los tiempos",
    help: "Qué tan gruesa es la línea de cada tiempo.",
  },
  beatLineColor: {
    label: "Color de las líneas de los tiempos",
    help: "El color de la línea de cada tiempo.",
  },
  enableDrawMeasureNumbers: {
    label: "Números de compás",
    help: "El número de cada compás, junto a su línea.",
  },
  measureNumbersColor: {
    label: "Color de los números de compás",
    help: "El color de los números de compás.",
  },
  highlightInputLanes: {
    label: "Iluminar el carril de cada tecla presionada",
    help: "El carril sobre una tecla se ilumina mientras la mantienes presionada.",
  },
  inputLaneOpacity: {
    label: "Intensidad de la luz del carril",
    help: "Qué tan brillante se vuelve un carril mientras mantienes presionada su tecla.",
  },
  showMarkersSong: {
    label: "Marcadores",
    help: "Una línea con su texto donde la canción nombra una parte, como una estrofa.",
  },
  showSustainPeriods: {
    label: "Tramos del pedal",
    help: "Una franja cruza los carriles mientras la canción mantiene pisado el pedal de resonancia.",
  },
  showSustainOnOffs: {
    label: "Pedal pisado y soltado",
    help: "Una línea marcada «Ped.» donde se pisa el pedal, y «✱» donde se suelta.",
  },
  showSustainChannels: {
    label: "Canales del pedal",
    help: "Muestra el canal MIDI de cada tramo del pedal.",
  },

  // Particles
  showParticles: {
    label: "Partículas",
    help: "Surgen efectos de cada tecla que suena. Exigen mucho a la tarjeta gráfica, así que empiezan desactivados.",
  },
  particlesFlames: {
    label: "Llamas",
    help: "Cada tecla arde con su nota, en el color de la nota. Son lo que más exige a la tarjeta gráfica.",
  },
  particlesSparks: {
    label: "Chispas",
    help: "Pequeñas chispas brillantes saltan de cada tecla.",
  },
  particlesEmbers: {
    label: "Brasas",
    help: "Brasas encendidas suben despacio desde cada tecla.",
  },
  particlesStars: {
    label: "Estrellas",
    help: "Pequeñas estrellas y puntos giratorios suben desde cada tecla y vuelven a caer.",
  },
  particlesCustom: {
    label: "Tus propias partículas",
    help: "Partículas hechas con las opciones de abajo.",
  },
  particlesTexture: {
    label: "Forma",
    help: "La imagen que muestra cada una de tus partículas.",
    options: { circle: "Resplandor", spark: "Chispa", smoke: "Humo", star: "Estrella", ring: "Anillo" },
  },
  particlesBlending: {
    label: "Mezcla",
    help: "Sumar luz aclara lo que hay detrás, como el fuego. Cubrir lo oculta, como el humo.",
    options: { additive: "Sumar luz", normal: "Cubrir" },
  },
  particleOverrideColor: {
    label: "Color propio",
    help: "Si lo desactivas, cada partícula toma el color de su tecla.",
  },
  particleColor: {
    label: "Color",
    help: "El color de tus partículas, cuando tienen color propio.",
  },
  particlesOpacity: {
    label: "Opacidad",
    help: "Qué tan sólida se ve cada partícula. Con valores más bajos se ve más a través de ella.",
  },
  particleSize: {
    label: "Tamaño",
    help: "En anchos de tecla.",
  },
  particleAmount: {
    label: "Cantidad",
    help: "Partículas por tecla y por fotograma, a 60 fotogramas por segundo.",
  },
  particleLife: {
    label: "Duración (s)",
    help: "Cuánto dura cada partícula antes de desaparecer.",
  },
  particleSpeed: {
    label: "Velocidad del movimiento",
    help: "Acelera o frena cada movimiento de las partículas.",
  },
  particleFadeOut: {
    label: "Desvanecimiento",
    help: "La parte de su vida en la que una partícula se desvanece, al final.",
  },
  particlesShrink: {
    label: "Encogimiento",
    help: "La parte de su tamaño que pierde una partícula. Por debajo de 0, crece.",
  },
  particleSpeedX: {
    label: "Velocidad lateral",
    help: "La velocidad lateral máxima, en anchos de tecla por segundo.",
  },
  particleSpeedY: {
    label: "Velocidad de subida",
    help: "La velocidad de subida máxima, en anchos de tecla por segundo.",
  },
  particlesFriction: {
    label: "Resistencia",
    help: "Qué tan rápido se frenan las partículas al volar.",
  },
  particleRising: {
    label: "Gravedad",
    help: "Por encima de 0, las partículas vuelven a caer. Por debajo de 0, suben más rápido.",
  },
  particlesRotation: {
    label: "Ángulo (°)",
    help: "Cuánto está girada cada partícula al empezar.",
  },
  particlesRotationRandom: {
    label: "Ángulo aleatorio (°)",
    help: "Cada partícula empieza girada al azar, hasta este ángulo.",
  },
  particlesRotationSpeed: {
    label: "Giro (° por segundo)",
    help: "Qué tan rápido gira cada partícula al volar.",
  },
  particleNoiseResX: {
    label: "Detalle de la deriva lateral",
    help: "Con valores más altos, las partículas de teclas vecinas se desvían hacia los lados de forma más distinta.",
  },
  particleNoiseStrengthX: {
    label: "Deriva lateral",
    help: "Cuánto se desvían las partículas al azar hacia los lados.",
  },
  particleNoiseResY: {
    label: "Detalle de la deriva al subir",
    help: "Con valores más altos, la deriva al subir difiere más entre teclas vecinas.",
  },
  particleNoiseStrengthY: {
    label: "Deriva al subir",
    help: "Cuánto se desvían las partículas al azar hacia arriba y abajo mientras suben.",
  },
  particleNoiseStrengthSize: {
    label: "Variación del tamaño",
    help: "Cuánto crece y se encoge cada partícula al azar.",
  },
  turbulenceXAmplitude: {
    label: "Vaivén lateral",
    help: "Cuánto se balancean las partículas de un lado a otro.",
  },
  turbulenceXFrequency: {
    label: "Frecuencia del vaivén lateral",
    help: "Vaivenes por segundo.",
  },
  turbulenceYAmplitude: {
    label: "Vaivén al subir",
    help: "Cuánto se balancean las partículas arriba y abajo mientras suben.",
  },
  turbulenceYFrequency: {
    label: "Frecuencia del vaivén al subir",
    help: "Vaivenes por segundo.",
  },
  particleYOffset: {
    label: "Altura inicial",
    help: "En anchos de tecla sobre la tecla.",
  },
  particleDistributionX: {
    label: "Inicio a lo ancho de la tecla",
    help: "Dónde empieza cada partícula a lo ancho de su tecla.",
    options: { across: "En cualquier punto a lo ancho", centre: "En su centro" },
  },
  particleDistributionXSpread: {
    label: "Dispersión inicial (%)",
    help: "La parte del ancho de la tecla en la que empiezan las partículas.",
  },
  particleDistributionY: {
    label: "Inicio a lo largo de la tecla",
    help: "Dónde empieza cada partícula a lo largo de su tecla.",
    options: { hitLine: "En la línea de impacto", key: "En cualquier punto de su parte superior" },
  },
  particleDistributionZ: {
    label: "Capa",
    help: "Si las teclas ocultan las partículas o las partículas cubren el piano.",
    options: { behind: "Ocultas por las teclas", front: "Delante del piano" },
  },

  // Labels
  pitchNotationSystem: {
    label: "Nombres de las notas",
    help: "Cómo se escriben los nombres en las notas y las teclas. Do siempre es C.",
    options: { auto: "Como en mi idioma", letters: "Letras: C D E", solfege: "Solfeo: Do Re Mi" },
  },
  noteLabel: {
    label: "Etiquetas de las notas",
    help: "Los textos de cada nota: elige los que quieras, o ninguno. Selecciona una nota y presiona de 1 a 5 para asignarle un dedo.",
    options: { name: "Nombre de la nota", keyBinding: "Tecla de la computadora", fingering: "Dedo" },
  },
  noteLabelColor: {
    label: "Color de las etiquetas",
    help: "El color del texto de cada nota.",
  },
  showKeyNamesOnPianoWhite: {
    label: "Nombres en las teclas blancas",
    help: "Cada tecla blanca muestra el nombre de su nota.",
  },
  showKeyNamesOnPianoBlack: {
    label: "Nombres en las teclas negras",
    help: "Cada tecla negra muestra el nombre de su nota.",
  },
  showPianoKeyNameFlats: {
    label: "Teclas negras con bemoles",
    help: "Re♭ en lugar de do♯, solo en las teclas. Las notas siguen la tonalidad de la canción.",
  },
  octaveLabel: {
    label: "Octava en los nombres de las teclas",
    help: "Agrega el número de octava a los nombres de las teclas, como Do4.",
    options: { none: "Ninguna", all: "En cada tecla", onlyC: "Solo en do" },
  },
  showKeyBindingsOnPiano: {
    label: "Teclas de la computadora en el piano",
    help: "Cada tecla muestra la tecla de la computadora que la toca.",
  },
  showChords: {
    label: "Nombres de los acordes",
    help: "Nombra cada acorde que forman las notas, incluidas las que sostiene el pedal.",
  },
  chordLabelStyle: {
    label: "Estilo del nombre del acorde",
    help: "Cómo se dibuja cada nombre de acorde.",
    options: { bar: "Barra sobre las teclas del acorde", ribbon: "Cinta a lo ancho de los carriles" },
  },
  chordLabelPlacement: {
    label: "Posición del nombre del acorde",
    help: "El extremo superior es el final lejano del acorde, el más alejado del piano.",
    options: {
      above: "Encima del acorde",
      top: "En su extremo superior",
      middle: "En su centro",
      bottom: "En su extremo inferior",
      below: "Debajo del acorde",
    },
  },
  showChordRomanNumerals: {
    label: "Números romanos",
    help: "El grado de cada acorde en la tonalidad de la canción, como V7.",
  },
  chordBlocks: {
    label: "Bloques de notas",
    help: "Un bloque sobre cada nota de un acorde con nombre dice qué es la nota.",
    options: { none: "Ninguno", tone: "Nota del acorde", degree: "Grado de la escala" },
  },
  chordToneNotation: {
    label: "Notación de los bloques",
    help: "Si los bloques de notas usan signos cortos o palabras completas.",
    options: { simple: "Abreviada: R ♭3 5", full: "Completa: Fundamental ♭3.ª 5.ª" },
  },
  chordMarkRoot: {
    label: "Marcar la fundamental",
    help: "La fundamental de cada acorde lleva un bloque dorado.",
  },

  // Lyrics
  lyricsEnabled: {
    label: "Letra",
    help: "Muestra la letra de una canción, si la tiene, línea por línea.",
  },
  lyricsBackground: {
    label: "Color de fondo",
    help: "El color de la franja detrás de la letra.",
  },
  lyricsFontColor: {
    label: "Color del texto",
    help: "El color de las palabras que aún no se cantan.",
  },
  lyricsFontColorPlayed: {
    label: "Color del texto cantado",
    help: "El color de las palabras ya cantadas.",
  },
  lyricsFontColorActive: {
    label: "Color de la sílaba que se canta",
    help: "La sílaba que se canta ahora resalta en este color.",
  },
  lyricsFontSize: {
    label: "Tamaño del texto (px)",
    help: "Qué tan grande se escribe la letra.",
  },
  lyricsY: {
    label: "Altura (% desde arriba)",
    help: "Dónde queda el centro de la línea de la letra en la escena. 0 es el borde superior.",
  },
  lyricsCursorEnabled: {
    help: "Un punto sobre la sílaba que se canta ahora.",
  },
  lyricsBouncingCursor: {
    label: "Cursor saltarín",
    help: "El punto salta de cada sílaba a la siguiente.",
  },

  // Coding
  enableColorCodingNote: {
    label: "Colorear las notas según su altura",
    help: "Cada una de las 12 alturas tiene su propio color.",
  },
  enableColorCodingNotePiano: {
    label: "Colorear las teclas según su altura",
    help: "Cada tecla se ilumina en el color de su altura mientras suena.",
  },
  colorCodeNote0: { label: "Do", help: "El color de cada do." },
  colorCodeNote1: { label: "Do♯ o Re♭", help: "El color de cada do♯ o re♭." },
  colorCodeNote2: { label: "Re", help: "El color de cada re." },
  colorCodeNote3: { label: "Re♯ o Mi♭", help: "El color de cada re♯ o mi♭." },
  colorCodeNote4: { label: "Mi", help: "El color de cada mi." },
  colorCodeNote5: { label: "Fa", help: "El color de cada fa." },
  colorCodeNote6: { label: "Fa♯ o Sol♭", help: "El color de cada fa♯ o sol♭." },
  colorCodeNote7: { label: "Sol", help: "El color de cada sol." },
  colorCodeNote8: { label: "Sol♯ o La♭", help: "El color de cada sol♯ o la♭." },
  colorCodeNote9: { label: "La", help: "El color de cada la." },
  colorCodeNote10: { label: "La♯ o Si♭", help: "El color de cada la♯ o si♭." },
  colorCodeNote11: { label: "Si", help: "El color de cada si." },
  enableColorCodingFinger: {
    label: "Colorear las notas según el dedo",
    help: "Una nota que ninguna mano toca conserva su otro color.",
  },
  enableColorCodingFingerPiano: {
    label: "Colorear las teclas según el dedo",
    help: "Cada tecla se ilumina en el color del dedo que la toca.",
  },
  colorCodeFinger1Right: { label: "Mano derecha, dedo 1", help: "El color de las notas que toca el pulgar derecho." },
  colorCodeFinger2Right: { label: "Mano derecha, dedo 2", help: "El color de las notas que toca el índice derecho." },
  colorCodeFinger3Right: { label: "Mano derecha, dedo 3", help: "El color de las notas que toca el medio derecho." },
  colorCodeFinger4Right: { label: "Mano derecha, dedo 4", help: "El color de las notas que toca el anular derecho." },
  colorCodeFinger5Right: { label: "Mano derecha, dedo 5", help: "El color de las notas que toca el meñique derecho." },
  colorCodeFingerDefaultRight: {
    label: "Mano derecha, sin dedo",
    help: "El color de las notas de la mano derecha sin dedo asignado.",
  },
  colorCodeFinger1Left: { label: "Mano izquierda, dedo 1", help: "El color de las notas que toca el pulgar izquierdo." },
  colorCodeFinger2Left: { label: "Mano izquierda, dedo 2", help: "El color de las notas que toca el índice izquierdo." },
  colorCodeFinger3Left: { label: "Mano izquierda, dedo 3", help: "El color de las notas que toca el medio izquierdo." },
  colorCodeFinger4Left: { label: "Mano izquierda, dedo 4", help: "El color de las notas que toca el anular izquierdo." },
  colorCodeFinger5Left: { label: "Mano izquierda, dedo 5", help: "El color de las notas que toca el meñique izquierdo." },
  colorCodeFingerDefaultLeft: {
    label: "Mano izquierda, sin dedo",
    help: "El color de las notas de la mano izquierda sin dedo asignado.",
  },

  // Sheet
  enableSheet: {
    label: "Mostrar la partitura",
    help: "La canción como partitura, sobre la parte superior de la escena.",
  },
  enableFullSheet: {
    label: "Solo la partitura",
    help: "La partitura llena la pantalla en lugar de la escena.",
  },
  sheetMeasureScroll: {
    label: "Desplazar la partitura con la canción",
    help: "Si lo desactivas, los compases se ordenan en líneas, y la línea que suena queda a la vista.",
  },
  sheetMeasureNumbers: {
    label: "Números de compás",
    help: "Dónde muestra la partitura el número de cada compás.",
    options: { off: "Ninguno", lineStart: "Al inicio de cada línea", every: "En cada compás" },
  },
  enableGrandStaff: {
    label: "Unir dos pentagramas con una llave",
    help: "La llave que une los dos pentagramas del piano, al inicio de cada línea.",
  },
  sheetAutoClef: {
    label: "Elegir cada clave según las notas",
    help: "Si lo desactivas, el primer pentagrama lleva clave de sol y los demás, clave de fa.",
  },
  overrideTimeSignature: {
    label: "Indicación de compás",
    help: "La indicación de compás de la partitura. Elige una cuando la de la canción esté mal.",
    options: { auto: "De la canción" },
  },
  sheetMinNoteDenom: {
    label: "Figura más corta",
    help: "La nota más corta que escribe la partitura. Sus tresillos también caben.",
    options: { "4": "Negra", "8": "Corchea", "16": "Semicorchea", "32": "Fusa", "64": "Semifusa" },
  },
  hideRestsBelow: {
    label: "Ocultar silencios más cortos que",
    help: "Omite los silencios cortos, para que la partitura se lea más fácil.",
    options: { none: "No ocultar", "4": "Una negra", "8": "Una corchea", "16": "Una semicorchea", "32": "Una fusa" },
  },
  renderSheetCursor: {
    help: "Una línea marca el punto de la canción.",
  },
  sheetColorActiveNotes: {
    label: "Colorear las notas que suenan",
    help: "Las notas de la partitura cambian de color mientras suenan.",
  },
  sheetColorByTrack: {
    label: "Notas que suenan con el color de su pista",
    help: "Si lo desactivas, toman el color de abajo.",
  },
  sheetActiveNotesColor: {
    label: "Color de las notas que suenan",
    help: "El color de una nota de la partitura mientras suena.",
  },
  sheetHighlightActiveNotes: {
    label: "Brillo detrás de las notas que suenan",
    help: "Una luz suave aparece detrás de cada nota de la partitura mientras suena.",
  },
  sheetActiveHighlightColor: {
    label: "Color del brillo",
    help: "El color de la luz detrás de las notas que suenan.",
  },
  sheetActiveGrowEffect: {
    label: "Agrandar las notas que suenan",
    help: "Una nota de la partitura se agranda mientras suena.",
  },
  sheetRenderInputNotes: {
    label: "Dibujar las notas que tocas",
    help: "Cada tecla que mantienes presionada aparece como una nota en el cursor.",
  },
  sheetShowHoverInfo: {
    label: "Nombrar las notas bajo el puntero",
    help: "Señala una nota o un acorde de la partitura para ver los nombres de sus notas.",
  },
  sheetBgColor: {
    label: "Color del papel",
    help: "El color detrás de la partitura. Sobre papel oscuro, la tinta se vuelve clara.",
  },

  // PDF
  pdfExportButtonGroup: {
    label: "Guardar las notas como PDF",
    help: "Abre un diálogo que guarda las notas que caen de la canción abierta en páginas del largo que elijas.",
  },
  exportPdfBackground: {
    label: "Usar colores de fondo",
    help: "Las páginas toman los colores de los carriles y las teclas. Si lo desactivas, se imprimen sobre papel blanco.",
  },

  // Offline
  offlineCache: {
    label: "Administrar archivos sin conexión",
    help: "Muestra el tamaño de la aplicación, las canciones y los sonidos del piano, y guarda o elimina cada uno.",
  },
  autoCacheSongs: {
    label: "Mantener guardadas las canciones",
    help: "Guarda ahora todas las canciones de ejemplo, y otra vez después de cada actualización.",
  },
  autoCacheSounds: {
    label: "Mantener guardados los sonidos del piano",
    help: "Guarda ahora todos los juegos de sonidos, y otra vez después de cada actualización.",
  },
};
