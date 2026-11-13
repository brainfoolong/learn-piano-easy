/** The player's settings up to the notes, in Spanish. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { playerSettingsPlay as en } from "./player-settings-play.en";

export const playerSettingsPlay: Translation<typeof en> = {
  // Site
  siteTheme: {
    label: "Tema del sitio",
    help: "Los colores de las páginas del sitio. El tema de la escena define los colores del piano y sus carriles.",
    options: { system: "Como el sistema", light: "Claro", dark: "Oscuro" },
  },
  language: {
    label: "Idioma",
    help: "Con «Como el navegador», el sitio se abre en el idioma del navegador cuando lo tiene.",
    options: { auto: "Como el navegador" },
  },
  learnSounds: {
    label: "Sonidos de recompensa",
    help: "Los sonidos de Aprende piano por un paso superado, una estrella, un nuevo nivel y una insignia. El piano siempre suena.",
  },
  learnDailyGoal: {
    label: "Meta diaria",
    help: "Los XP que necesita un día de Aprende piano para mantener tu racha.",
  },
  learnSetupDone: {
    label: "Primera visita completada",
    help: "Aprende piano muestra su breve configuración inicial en tu primera visita, hasta que se completa.",
  },
  expertControls: {
    label: "Herramientas de experto",
    help: "El botón Experto de la barra de control muestra la velocidad, la transposición, el primer y el último compás del bucle, el ajuste y el desplazamiento lateral de la vista.",
  },
  // General
  theme: {
    label: "Tema de la escena",
    help: "Define los colores del piano y sus carriles. El tema del sitio, en la barra superior, define el resto del reproductor.",
    options: { dark: "Oscuro", light: "Claro" },
  },
  yourData: {
    label: "Crear o restaurar una copia de seguridad de tus datos",
    help: "Abre la página que guarda tu configuración, tu progreso, tus canciones y tus puntuaciones en un archivo, y los restaura.",
  },
  startWithLastSong: {
    label: "Reabrir la última canción al iniciar",
    help: "Abre la canción que tocaste por última vez cada vez que abres el reproductor.",
  },
  saveIndexedDb: {
    label: "Guardar tus archivos en este navegador",
    help: "Las canciones que abres desde tu computadora siguen en tu biblioteca después de recargar la página.",
  },
  disableHotkeys: {
    label: "Desactivar los atajos de teclado",
    help: "Las teclas de la computadora ya no reproducen, mueven ni repiten la canción.",
  },
  hotKeyBindings: {
    label: "Atajos de teclado",
    help: "Las teclas que reproducen, mueven, repiten y acercan la canción.",
  },
  leadIn: {
    label: "Tiempo antes de la primera nota (s)",
    help: "Cada canción empieza este tiempo antes de su primera nota, y espera lo mismo cada vez que vuelve a empezar desde el final.",
  },
  restartSongOnEnd: {
    label: "Reiniciar la canción al terminar",
    help: "La canción vuelve a sonar desde el principio después de su última nota.",
  },
  playNotesOnScrollEnabled: {
    label: "Reproducir las notas al arrastrar la línea de tiempo",
    help: "Escuchas cada nota que pasas mientras arrastras por la canción.",
  },
  fitZoomOnNewSong: {
    label: "Ajustar el zoom a cada canción nueva",
    help: "Una canción que abres cabe entera en los carriles delante del piano.",
  },
  transposeOffset: {
    label: "Transponer (semitonos)",
    help: "Sube o baja todas las notas de la canción.",
  },
  reverseNoteDirection: {
    label: "Invertir la dirección de las notas",
    help: "Las notas se alejan del piano en lugar de acercarse.",
  },
  renderOffset: {
    label: "Desfase de la imagen (ms)",
    help: "Retrasa la imagen respecto al sonido, o la adelanta por debajo de 0.",
  },
  showBPM: {
    label: "Mostrar el tempo en BPM",
    help: "Muestra los pulsos por minuto actuales de la canción sobre la escena, junto a los cuadros por segundo.",
  },
  showFps: {
    label: "Mostrar los cuadros por segundo",
    help: "Muestra cuántas imágenes por segundo dibuja la escena. Un número bajo significa que la imagen va lenta.",
  },
  showNoteDebugInfo: {
    label: "Mostrar los detalles de una nota al pasar el puntero",
    help: "Al señalar una nota se ven su altura, su momento, su duración y su intensidad.",
  },
  showMilliseconds: {
    label: "Mostrar milisegundos en la línea de tiempo",
    help: "El tiempo de la línea de tiempo muestra también las milésimas de segundo.",
  },
  progressBarMeasures: {
    label: "Mostrar la línea de tiempo en compases",
    help: "La línea de tiempo cuenta compases en lugar de minutos y segundos.",
  },
  progressBarMeasureLines: {
    label: "Mostrar líneas divisorias en la línea de tiempo",
    help: "Dibuja una línea fina en la línea de tiempo donde empieza cada compás.",
  },
  showMarkersTimeline: {
    label: "Mostrar marcadores en la línea de tiempo",
    help: "Muestra en la línea de tiempo los marcadores propios de la canción, como la estrofa o el estribillo.",
  },
  // Loop
  enableLoop: {
    label: "Repetir un pasaje",
    help: "Repite una y otra vez los compases de abajo, para que puedas practicarlos.",
  },
  loopStart: {
    label: "Primer compás del bucle",
    help: "El bucle empieza al principio de este compás.",
  },
  loopEnd: {
    label: "Último compás del bucle",
    help: "El bucle termina al final de este compás.",
  },
  loopDelay: {
    label: "Conteo previo (tiempos)",
    help: "Los tiempos que suenan antes de cada vuelta del bucle.",
  },
  enableLoopBeats: {
    label: "Clic en los tiempos del conteo previo",
    help: "Escuchas un clic en cada tiempo del conteo previo.",
  },
  autoLoop: {
    label: "Empezar cada vuelta enseguida",
    help: "Si está desactivado, la canción se pausa en el conteo previo después de cada vuelta.",
  },
  muteLoop: {
    label: "Silenciar la canción fuera del bucle",
    help: "Solo suenan las notas de los compases del bucle.",
  },
  loopTrainer: {
    label: "Entrenador de bucle",
    help: "Empieza lento y sube la velocidad un 5% después de cada vuelta, hasta el 100%.",
  },
  loopTrainerSpeed: {
    label: "Velocidad inicial del entrenador (%)",
    help: "La velocidad de la primera vuelta del entrenador de bucle.",
  },
  // Audio
  volumeMain: {
    label: "Volumen",
    help: "El volumen de todo lo que suena en la aplicación.",
  },
  masterGain: {
    label: "Volumen de la canción",
    help: "Qué tan fuerte suenan las notas de la canción.",
  },
  inputGain: {
    label: "Volumen de lo que tocas",
    help: "Qué tan fuerte suenan las notas que tocas en tu teclado.",
  },
  velocityStrength: {
    label: "Respuesta a la intensidad",
    help: "Cuánto cambia el volumen de una nota según su intensidad de pulsación.",
  },
  sustainEnabled: {
    label: "Pedal de resonancia",
    help: "Las notas siguen sonando mientras el pedal está pisado, ya sea por la canción o por ti.",
  },
  enableReverb: {
    label: "Reverberación",
    help: "Agrega al sonido el eco de una sala.",
  },
  reverbImpulseResponse: {
    label: "Sala de la reverberación",
    help: "La sala que imita la reverberación. Una sala más grande resuena más tiempo.",
    options: { room: "Habitación", hall: "Sala de conciertos", church: "Iglesia" },
  },
  detune: {
    label: "Ajuste de afinación (cents)",
    help: "Afina todas las notas un poco más alto o más bajo. 100 cents son un semitono.",
  },
  adsrAttack: {
    label: "Ataque (s)",
    help: "Cuánto tarda una nota en llegar a su volumen máximo.",
  },
  adsrDecay: {
    label: "Caída (s)",
    help: "Cuánto tarda una nota en bajar a su nivel de sostenimiento.",
  },
  adsrSustain: {
    label: "Nivel de sostenimiento (%)",
    help: "El volumen que conserva una nota mantenida.",
  },
  adsrReleaseKey: {
    label: "Liberación tras la tecla (s)",
    help: "Cuánto tarda una nota en apagarse al soltar su tecla.",
  },
  adsrReleasePedal: {
    label: "Liberación tras el pedal (s)",
    help: "Cuánto tarda una nota mantenida en apagarse al soltar el pedal.",
  },
  enableMetronome: {
    label: "Metrónomo",
    help: "Suena un clic en cada tiempo de la canción.",
  },
  metronomeMidiOutput: {
    label: "Salida del metrónomo",
    help: "Dónde suena el metrónomo.",
    options: { both: "Altavoces y dispositivo MIDI", midi: "Dispositivo MIDI", speakers: "Altavoces" },
  },
  metronomeNoteNumber: {
    label: "Nota del metrónomo en el dispositivo MIDI",
    help: "La nota que el metrónomo envía a tu dispositivo MIDI en cada tiempo.",
  },
  metronomeInstrument: {
    label: "Sonido del metrónomo en el dispositivo MIDI",
    help: "Con la batería, la nota elige el tambor.",
    options: { woodblock: "Bloque de madera", drums: "Batería" },
  },
  metronomeVolume: {
    label: "Volumen del metrónomo",
    help: "Qué tan fuerte suena el clic del metrónomo.",
  },
  synchedMetronome: {
    label: "Mantener el metrónomo al ritmo de la canción",
    help: "Activado, el metrónomo marca los tiempos de la canción y sigue sus cambios de tempo y de velocidad. Desactivado, marca un pulso fijo al tempo de la canción donde empieza la reproducción. Los cambios posteriores de tempo y de velocidad no afectan ese pulso. Empieza y se detiene con la reproducción. Se silencia durante el conteo previo de un bucle y vuelve a sonar en el primer tiempo del bucle.",
  },
  enableEqualizer: {
    label: "Ecualizador",
    help: "Sube o baja el volumen de los sonidos graves, medios y agudos.",
  },
  equalizerGain0: {
    label: "Graves, 60 Hz (dB)",
    help: "Sube o baja los sonidos más graves.",
  },
  equalizerGain1: {
    label: "Medios graves, 250 Hz (dB)",
    help: "Sube o baja la parte media baja y cálida del sonido.",
  },
  equalizerGain2: {
    label: "Medios, 1 kHz (dB)",
    help: "Sube o baja la parte media del sonido.",
  },
  equalizerGain3: {
    label: "Medios agudos, 4 kHz (dB)",
    help: "Sube o baja la parte media alta y brillante del sonido.",
  },
  equalizerGain4: {
    label: "Agudos, 12 kHz (dB)",
    help: "Sube o baja los sonidos más agudos.",
  },
  scheduleAheadMs: {
    label: "Anticipación del audio (ms)",
    help: "Con cuánta anticipación se programan las notas. Un valor mayor es más estable, y uno menor reacciona más rápido.",
  },
  scheduleIntervalMs: {
    label: "Intervalo de programación del audio (ms)",
    help: "Cada cuánto se programan las notas siguientes.",
  },
  // Backing track
  bgTrackFile: {
    label: "Elegir un archivo de audio",
    help: "Una grabación para tocar con ella, como una banda de acompañamiento. Se conserva hasta que se recarga la página.",
  },
  bgTrackEnable: {
    label: "Reproducir la pista de fondo",
    help: "La grabación elegida suena junto con la canción.",
  },
  bgTrackVolume: {
    label: "Volumen (%)",
    help: "Qué tan fuerte suena la pista de fondo.",
  },
  bgTrackSpeed: {
    label: "Velocidad (%)",
    help: "Qué tan rápido avanza la pista respecto a la canción, para ajustar una grabación con otro tempo.",
  },
  bgTrackOffset: {
    label: "Desfase (segundos)",
    help: "El segundo de la canción en que suena el inicio de la pista. Por debajo de 0 se omite el inicio de la pista.",
  },
  bgTrackLoop: {
    label: "Repetir la pista de fondo",
    help: "La pista vuelve a empezar desde el principio cuando termina.",
  },
  // View
  cameraPreset: {
    label: "Cámara",
    help: "Arrastra la escena para mirar alrededor, salvo en la vista plana. Haz doble clic en ella para volver a esta cámara. La vista plana se alinea con un teclado justo debajo de la pantalla.",
    options: {
      classic: "Clásica, desde arriba",
      player: "Desde el banco del piano",
      cinematic: "Cinematográfica, con movimiento lento",
      flat: "Plana, las teclas llenan el ancho de la pantalla",
    },
  },
  resetCamera: {
    label: "Volver a la cámara",
    help: "Devuelve la cámara a su lugar después de arrastrar la escena.",
  },
  glowMode: {
    label: "Brillo",
    help: "En automático, el brillo se apaga en un dispositivo que ahorra energía o cuando la imagen va lenta.",
    options: { auto: "Automático", on: "Activado", off: "Desactivado" },
  },
  glowStrength: {
    label: "Intensidad del brillo",
    help: "Cuánto brillan las notas y las teclas.",
  },
  zoomByMeasures: {
    label: "Zoom por compases",
    help: "Los carriles muestran un número de compases en lugar de un número de segundos.",
  },
  noteToHeightConst: {
    label: "Segundos visibles por adelantado",
    help: "Cuántos segundos de las próximas notas muestran los carriles. Con menos segundos, las notas se ven más largas y más rápidas.",
  },
  measuresShownOnScreen: {
    label: "Compases visibles por adelantado",
    help: "Cuántos compases de las próximas notas muestran los carriles con el zoom por compases.",
  },
  // Keyboard
  keyboardFirstNote: {
    label: "Primera tecla",
    help: "La tecla más grave de tu teclado, como C2 o 36.",
  },
  keyboardLastNote: {
    label: "Última tecla",
    help: "La tecla más aguda de tu teclado, como C7 o 96.",
  },
  foldOutsideNotes: {
    label: "Llevar las notas fuera de tus teclas a tu rango",
    help: "Las notas que le faltan a tu teclado se mueven por octavas a tus teclas, y las tocas ahí.",
  },
  // Input
  playMode: {
    label: "Modo",
    help: "El modo «Tocar libremente» deja la canción a un lado para que toques y grabes. La práctica de oído te pide encontrar notas.",
    options: { player: "Tocar una canción", freePlay: "Tocar libremente y grabar", pitchPractice: "Práctica de oído" },
  },
  pitchPracticeKey: {
    label: "Tonalidad de la práctica de oído",
    help: "La práctica de oído pide solo las notas de esta tonalidad.",
    options: {
      chromatic: "Todas las teclas, blancas y negras",
      C: "Do mayor",
      G: "Sol mayor",
      D: "Re mayor",
      A: "La mayor",
      E: "Mi mayor",
      B: "Si mayor",
      Gb: "Sol♭ mayor",
      Db: "Re♭ mayor",
      Ab: "La♭ mayor",
      Eb: "Mi♭ mayor",
      Bb: "Si♭ mayor",
      F: "Fa mayor",
    },
  },
  pitchPracticeFirstNote: {
    label: "Nota más grave de la práctica",
    help: "La nota más grave que pide la práctica de oído, dentro de tu teclado.",
  },
  pitchPracticeLastNote: {
    label: "Nota más aguda de la práctica",
    help: "La nota más aguda que pide la práctica de oído, dentro de tu teclado.",
  },
  pitchPracticeCount: {
    label: "Notas por ronda de la práctica",
    help: "Cuántas notas pide la práctica de oído antes de mostrar tu resultado.",
  },
  saveMidiDevices: {
    label: "Recordar los dispositivos MIDI elegidos",
    help: "El reproductor se conecta a la misma entrada y salida MIDI la próxima vez que lo abres.",
  },
  keyBindings: {
    label: "Teclas de la computadora",
    help: "Las teclas de la computadora que tocan notas. De Z a M tocan de Do3 a Si3, y de Q a I tocan de Do4 a Do5.",
  },
  waitForNotes: {
    label: "Esperar tus notas",
    help: "La canción se detiene en cada una de tus notas hasta que mantengas presionadas todas sus teclas. En el modo juego, una nota que se espera mucho cuenta como tardía.",
  },
  playHands: {
    label: "Tus manos",
    help: "Las manos con las que se puntúa lo que tocas. Con «Esperar tus notas» activado, la aplicación toca la mano que dejas fuera.",
    options: { both: "Ambas manos", right: "Mano derecha", left: "Mano izquierda" },
  },
  playalongSilentNotes: {
    label: "Iluminar en tu teclado MIDI las teclas por tocar",
    help: "Envía cada nota siguiente muy suave a la salida MIDI, para que un teclado con teclas iluminadas la muestre.",
  },
  playalongSilentNotesChannel: {
    label: "Canal MIDI de las luces de las teclas",
    help: "El canal MIDI en el que tu teclado escucha para encender las luces de sus teclas.",
  },
  enableScoreMode: {
    label: "Puntuar cada nota",
    help: "Compara cada nota que tocas con la canción y guarda tu precisión por canción.",
  },
  scoreHitWindow: {
    label: "Margen de acierto (ms)",
    help: "Una nota tocada así de cerca de su momento, antes o después, es un acierto.",
  },
  scorePerfectWindow: {
    label: "Margen perfecto (ms)",
    help: "Un acierto así de cerca de su momento es perfecto.",
  },
  enableGameMode: {
    label: "Modo juego",
    help: "Da puntos por aciertos precisos y notas mantenidas, resta por cada error y multiplica los puntos según tu combo de aciertos seguidos.",
  },
  gameDifficulty: {
    label: "Dificultad del juego",
    help: "Qué tan exigente es el margen de tiempo, y cuánto da una nota y cuánto cuesta un error.",
    options: { easy: "Fácil: unas horas tocando", normal: "Normal: unos meses", hard: "Difícil: cerca de un año" },
  },
  // Piano
  clickablePiano: {
    label: "Tocar el piano con clics o toques",
    help: "Las teclas de la pantalla suenan al hacer clic en ellas o tocarlas.",
  },
  highlightActivePianoKeys: {
    label: "Colorear las teclas presionadas",
    help: "Colorea las teclas que mantienes con los colores de abajo.",
  },
  inputNoteColorWhite: {
    label: "Color de tus teclas blancas",
    help: "El color de una tecla blanca que mantienes.",
  },
  inputNoteColorBlack: {
    label: "Color de tus teclas negras",
    help: "El color de una tecla negra que mantienes.",
  },
  pianoWhiteKeyColor: {
    label: "Color de las teclas blancas",
    help: "El color de las teclas blancas del piano.",
  },
  pianoBlackKeyColor: {
    label: "Color de las teclas negras",
    help: "El color de las teclas negras del piano.",
  },
  pianoVelvetColor: {
    label: "Color del fieltro",
    help: "La tira de fieltro detrás de las teclas.",
  },
  pianoBackgroundColor: {
    label: "Color de fondo",
    help: "El color detrás del piano y de los carriles.",
  },
  pianoPosition: {
    label: "Altura del piano en pantalla (%)",
    help: "Sube o baja el piano en la pantalla.",
  },
  whiteKeyHeight: {
    label: "Largo de las teclas blancas (%)",
    help: "Qué tan largas se dibujan las teclas blancas.",
  },
  enableKeyFlare: {
    label: "Destello en las teclas presionadas",
    help: "Una luz brillante resplandece sobre cada tecla que suena.",
  },
  pianoLineEnabled: {
    label: "Línea de onda sobre las teclas",
    help: "Una línea que ondula sobre cada tecla que suena.",
  },
  pianoLineSpeed: {
    label: "Velocidad de la onda",
    help: "Qué tan rápido se mueven las ondas de la línea.",
  },
  pianoLineResolution: {
    label: "Ondas por octava",
    help: "Cuántas ondas caben a lo ancho de una octava. Más ondas se ven más finas.",
  },
  pianoLineAmplitude: {
    label: "Altura de la onda",
    help: "En anchos de tecla, sobre una tecla que suena con toda su fuerza.",
  },
  pianoLineColor: {
    label: "Color de la línea de onda",
    help: "El color de la línea de onda.",
  },
  pianoLineOpacity: {
    label: "Opacidad de la línea de onda",
    help: "Qué tan visible es la línea de onda. Un valor menor la hace más tenue.",
  },
  pianoLineYOffset: {
    label: "Altura de la línea de onda",
    help: "En anchos de tecla sobre las teclas.",
  },
};
