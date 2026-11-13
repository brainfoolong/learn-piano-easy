/** The Spanish catalog. It is a translation of the English one, so a text it leaves out shows in English. */
import { formatNumber, plural } from "../format";
import type { Translation } from "../translation";
import { dataPage } from "./data.es";
import { en, type Messages } from "./en";
import { learnBadges } from "./learn-badges.es";
import { learnLesson } from "./learn-lesson.es";
import { learnMap } from "./learn-map.es";
import { learnProfile } from "./learn-profile.es";
import { learnSetup } from "./learn-setup.es";
import { playerBar } from "./player-bar.es";
import { playerInput } from "./player-input.es";
import { playerLibrary } from "./player-library.es";
import { playerSettings } from "./player-settings.es";
import { playerShell } from "./player-shell.es";
import { playModes } from "./play-modes.es";
import { sponsorPage } from "./sponsor.es";

const SITE_NAME = en.siteName;

export const es: Translation<Messages> = {
  noscript: `${SITE_NAME} necesita JavaScript para funcionar.`,
  pages: {
    home: {
      description:
        "Aprende piano tocando. Un curso guiado, un piano 3D y tu teclado MIDI. Gratis, de código abierto y sin conexión.",
    },
    play: {
      title: "Piano libre",
      description: "Abre un archivo MIDI, mira cómo sus notas vuelan hacia un piano 3D y toca junto con tu teclado MIDI.",
    },
    modes: {
      title: "Modos de juego",
      description: "Formas de tocar listas para usar: un juego con puntos y chispas, o una canción que te espera y nombra cada nota.",
    },
    learn: {
      title: "Aprende piano",
      description: "Un curso de piano guiado, hecho como un juego, un pequeño paso a la vez.",
    },
    profile: {
      title: "Tu progreso",
      description: "Tu nivel, tus insignias y cuánto has tocado.",
    },
    about: {
      title: "Acerca de",
      description: "Qué es Learn Piano Easy, y las licencias de todo lo que incluye.",
    },
    data: {
      title: "Tus datos",
      description: "Guarda todo lo que tienes en este navegador en un solo archivo, y recupéralo en cualquier dispositivo.",
    },
    sponsor: {
      title: "Apoyar",
      description: "Learn Piano Easy es gratis y lo hace una sola persona. Así puedes ayudar a que crezca.",
    },
    imprint: {
      title: "Aviso legal",
      description: "Quién gestiona Learn Piano Easy, con la dirección y el contacto.",
    },
    privacy: {
      title: "Política de privacidad",
      description: "Qué guarda Learn Piano Easy en tu dispositivo, qué cuenta y cómo desactivar el conteo.",
    },
    design: {
      title: "Sistema de diseño",
      description: "Cada componente del sitio en cada estado.",
    },
    lesson: {
      title: "Lección",
      description: "Una lección corta de Aprende piano, paso a paso.",
    },
  },
  lessonPage: {
    description: (title: string, world: string, intro: string) => `${title}. Una lección de piano gratis de «${world}». ${intro}`,
  },
  topBar: {
    home: `${SITE_NAME}, inicio`,
    nav: "Principal",
    learn: "Aprende piano",
    play: "Piano libre",
    modes: "Modos de juego",
    menu: "Menú",
    language: "Idioma",
    theme: "Tema",
    themeSystem: "Como el sistema",
    themeLight: "Claro",
    themeDark: "Oscuro",
  },
  landing: {
    hero: {
      eyebrow: "Gratis y de código abierto",
      lead: "Mira cómo las notas caen sobre las teclas y luego tócalas tú, una canción a la vez.",
      start: "Empezar a aprender",
      play: "Tocar libremente",
      proofs: ["Sin cuenta", "Funciona sin conexión", "Sin anuncios"],
      mascot: "Nuestro profe de piano, un simio de pelaje color miel, toca un piano vertical en una sala soleada",
      greeting: "¡Hola! Soy tu profe de piano. ¿Tocamos?",
      demo: {
        eyebrow: "Pruébalo aquí",
        heading: "Las notas caen, y tú tocas",
        text: "Así se ve cada canción. Cada nota cae sobre su tecla, y tú presionas la tecla cuando llega.",
      },
      piano: "El reproductor, con las notas de Twinkle, Twinkle, Little Star cayendo sobre sus teclas",
      hint: "Cuando suene, presiona sus teclas para acompañarlo.",
      playSong: "Reproducir",
      stopSong: "Detener",
    },
    twoWays: {
      eyebrow: "Dos formas de tocar",
      heading: "Aprende paso a paso, o simplemente toca",
      lead: "Elige la parte que va con tu día. Puedes cambiar cuando quieras.",
      learn: {
        tag: "Curso guiado",
        title: "Aprende piano",
        text: "Un curso guiado de pasos pequeños. Cada uno enseña una habilidad, y una canción la pone en práctica.",
        action: "Empezar a aprender",
        picture: "El mapa del curso, con su primera lección terminada y la siguiente abierta",
      },
      play: {
        tag: "Cualquier canción",
        title: "Piano libre",
        text: "Abre cualquier canción, mira cómo sus notas vuelan hacia un piano 3D, y toca junto con ella.",
        action: "Tocar libremente",
        picture: "El piano 3D, con notas cayendo sobre sus teclas",
      },
    },
    howItWorks: {
      eyebrow: "Cómo se aprende",
      heading: "Cuatro pasos, una y otra vez",
      lead: "Cada lección sigue el mismo ciclo corto, así siempre sabes qué viene después.",
      steps: [
        { title: "Aprende una habilidad", text: "Una lección corta muestra algo nuevo, como una nota, un ritmo o una posición de la mano." },
        { title: "Practícala", text: "Tócala en tu propio teclado. El piano te espera y marca cada nota correcta." },
        { title: "Toca una canción de verdad", text: "Usa la habilidad en una canción de la biblioteca, en un nivel que te quede bien." },
        { title: "Gana insignias", text: "Cada lección da XP, y cada mundo que terminas da una insignia." },
      ],
    },
    rarities: {
      eyebrow: "Una melodía, cuatro niveles",
      heading: "Cada canción crece contigo",
      lead: "Cada canción nuestra viene en cuatro versiones. Cambia entre ellas y mira cómo crece el Himno a la alegría.",
      control: "Versión",
      piano: "Un piano que toca el Himno a la alegría",
      names: { common: "Principiante", rare: "Fácil", epic: "Intermedio", legendary: "Difícil" },
      taglines: {
        common: "Tus primeros días. Una posición de la mano, notas lentas y un bajo que te espera.",
        rare: "Tus primeras semanas. Corcheas, acordes sencillos y un bajo que se mueve.",
        epic: "Tus primeros meses. Acordes arpegiados, y un pulgar que pasa por debajo.",
        legendary: "Más o menos un año después. Las dos manos ocupadas, rápidas e independientes.",
      },
    },
    devices: {
      eyebrow: "Toca con lo que tengas",
      heading: "¿No tienes piano? Empieza igual",
      lead: "Cualquiera de estos toca las notas. Un teclado de verdad se siente mejor, y los demás te dejan empezar hoy.",
      ways: [
        { title: "Un teclado MIDI", text: "Conéctalo por USB y permite MIDI una vez. Desde entonces, el sitio lo encuentra solo." },
        { title: "Una pantalla táctil", text: "Toca las teclas en la pantalla, con todos los dedos que quieras." },
        { title: "El teclado de tu computadora", text: "Las teclas de letras y números tocan dos octavas, y puedes mover cualquier nota a otra tecla." },
      ],
      piano: "Un piano pequeño para probar",
      start: "Cargar el piano pequeño para tocarlo",
      hint: "Toca una tecla para oírla.",
    },
    free: {
      eyebrow: "Gratis, y tuyo",
      heading: "Nada que pagar, nada que firmar",
      lead: "El sitio es un regalo de alguien que ama el piano. Seguirá siendo gratis.",
      promises: [
        { title: "Gratis, sin cuenta", text: "Abre el sitio y toca. No hay registro ni nada que comprar." },
        { title: "Código abierto", text: "Cada línea de código es pública bajo la licencia MIT. Léela, cámbiala, compártela." },
        { title: "Funciona sin conexión", text: "Una vez cargado, el sitio funciona sin red. Las canciones que ya abriste también suenan sin conexión." },
        { title: "Sin anuncios, sin perfiles", text: "Nada de lo que tocas sale de tu dispositivo. Solo contamos las visitas, sin cookies, y no vendemos nada." },
      ],
    },
    questions: {
      eyebrow: "Preguntas",
      heading: "Lo primero que se pregunta",
      items: [
        {
          question: "¿Necesito un piano?",
          answer: "No. Lo mejor es un teclado MIDI, pero una pantalla táctil o el teclado de tu computadora también tocan cada nota.",
        },
        {
          question: "¿Qué navegadores funcionan?",
          answer: "Cualquier navegador actual reproduce. Un teclado MIDI necesita Web MIDI, que tienen Chrome, Edge y Firefox, pero no Safari.",
        },
        {
          question: "¿Necesito una cuenta?",
          answer: "No. No hay nada en que registrarse, y tu configuración se queda en este navegador.",
        },
        {
          question: "¿Funciona sin conexión?",
          answer: "Sí. Abre el sitio una vez con conexión, y desde entonces funciona sin ella. Una canción suena sin conexión una vez que la abriste.",
        },
        {
          question: "¿Puedo tocar mis propias canciones?",
          answer: "Sí. Abre cualquier archivo MIDI o MusicXML en Piano libre. Se lee en tu dispositivo y nunca se sube.",
        },
        {
          question: "¿Qué canciones hay en la biblioteca?",
          answer: "Nuestros propios arreglos de melodías conocidas, cada uno en cuatro versiones, algunas piezas propias y piezas clásicas de colecciones libres.",
        },
        {
          question: "¿De verdad es gratis?",
          answer: "Sí. Es de código abierto bajo la licencia MIT, sin anuncios y sin planes de pago.",
        },
      ],
    },
    lastCall: {
      heading: "Todo listo, cuando quieras",
      lead: "Elige por dónde entrar. Puedes cambiar cuando quieras.",
    },
  },
  footer: {
    tagline: "Aprende piano tocando. Gratis, de código abierto y sin conexión.",
    nav: "Sitio",
    explore: "Explorar",
    about: "Acerca de y licencias",
    language: "Esta página en",
    license: "Código abierto bajo la licencia MIT.",
  },
  counts: {
    badges: (n: number) => `${formatNumber("es", n)} ${plural("es", n, { one: "insignia", many: "de insignias", other: "insignias" })}`,
    minutesPlayed: (n: number) =>
      `${formatNumber("es", n)} ${plural("es", n, { one: "minuto tocado", many: "de minutos tocados", other: "minutos tocados" })}`,
    xp: (n: number) => `${formatNumber("es", n)} XP`,
  },
  lesson: learnLesson,
  badges: learnBadges,
  map: learnMap,
  profile: learnProfile,
  setup: learnSetup,
  data: dataPage,
  sponsor: sponsorPage,
  playModes,
  player: { shell: playerShell, bar: playerBar, library: playerLibrary, input: playerInput, settings: playerSettings },
  ui: {
    pianoKeys: {
      noWebgl:
        "Este navegador no puede dibujar el piano. Activa la aceleración por hardware en su configuración, o toca con tu teclado MIDI o el de la computadora.",
    },
  },
};
