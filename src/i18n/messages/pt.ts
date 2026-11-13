/** The catalog in Brazilian Portuguese. It is a translation of the English one, so a text it leaves out shows in English. */
import { formatNumber, plural } from "../format";
import type { Translation } from "../translation";
import { dataPage } from "./data.pt";
import { en, type Messages } from "./en";
import { learnBadges } from "./learn-badges.pt";
import { learnLesson } from "./learn-lesson.pt";
import { learnMap } from "./learn-map.pt";
import { learnProfile } from "./learn-profile.pt";
import { learnSetup } from "./learn-setup.pt";
import { playerBar } from "./player-bar.pt";
import { playerInput } from "./player-input.pt";
import { playerLibrary } from "./player-library.pt";
import { playerSettings } from "./player-settings.pt";
import { playerShell } from "./player-shell.pt";
import { playModes } from "./play-modes.pt";
import { sponsorPage } from "./sponsor.pt";

const SITE_NAME = en.siteName;

export const pt: Translation<Messages> = {
  noscript: `${SITE_NAME} precisa de JavaScript para funcionar.`,
  pages: {
    home: {
      description:
        "Aprenda piano tocando. Um curso guiado, um piano 3D e seu teclado MIDI. Grátis, de código aberto e sem conexão.",
    },
    play: {
      title: "Piano livre",
      description: "Abra um arquivo MIDI, veja as notas voarem em direção a um piano 3D e toque junto no seu teclado MIDI.",
    },
    modes: {
      title: "Modos de tocar",
      description: "Formas prontas de tocar: um jogo com pontos e faíscas, ou uma música que espera você e diz o nome de cada nota.",
    },
    learn: {
      title: "Aprenda piano",
      description: "Um curso de piano guiado, feito como um jogo, um pequeno passo de cada vez.",
    },
    profile: {
      title: "Seu progresso",
      description: "Seu nível, suas medalhas e quanto você já tocou.",
    },
    about: {
      title: "Sobre",
      description: "O que é o Learn Piano Easy e as licenças de tudo o que ele inclui.",
    },
    data: {
      title: "Seus dados",
      description: "Salve tudo o que você tem neste navegador em um só arquivo e recupere em qualquer dispositivo.",
    },
    sponsor: {
      title: "Apoiar",
      description: "O Learn Piano Easy é grátis e feito por uma pessoa só. Veja como você pode ajudar o projeto a crescer.",
    },
    imprint: {
      title: "Aviso legal",
      description: "Quem mantém o Learn Piano Easy, com o endereço e o contato.",
    },
    privacy: {
      title: "Política de privacidade",
      description: "O que o Learn Piano Easy armazena no seu dispositivo, o que ele conta e como desativar a contagem.",
    },
    design: {
      title: "Sistema de design",
      description: "Cada componente do site em cada estado.",
    },
    lesson: {
      title: "Lição",
      description: "Uma lição curta de Aprenda piano, passo a passo.",
    },
  },
  lessonPage: {
    description: (title: string, world: string, intro: string) => `${title}. Uma lição de piano grátis de “${world}”. ${intro}`,
  },
  topBar: {
    home: `${SITE_NAME}, início`,
    nav: "Principal",
    learn: "Aprenda piano",
    play: "Piano livre",
    modes: "Modos de tocar",
    menu: "Menu",
    language: "Idioma",
    theme: "Tema",
    themeSystem: "Padrão do sistema",
    themeLight: "Claro",
    themeDark: "Escuro",
  },
  landing: {
    hero: {
      eyebrow: "Grátis e de código aberto",
      lead: "Veja as notas caírem sobre as teclas. Depois é sua vez de tocar, uma música de cada vez.",
      start: "Começar a aprender",
      play: "Só tocar",
      proofs: ["Sem conta", "Funciona sem conexão", "Sem anúncios"],
      mascot: "Nosso professor de piano, um macaco de pelo cor de mel, toca um piano vertical em uma sala ensolarada",
      greeting: "Olá! Sou seu professor de piano. Vamos tocar?",
      demo: {
        eyebrow: "Experimente aqui",
        heading: "As notas caem, e você toca",
        text: "Toda música é assim. Cada nota cai sobre a sua tecla, e você toca a tecla quando a nota chega.",
      },
      piano: "O player, com as notas de Twinkle, Twinkle, Little Star caindo sobre as teclas",
      hint: "Quando a música começar, toque as teclas para acompanhar.",
      playSong: "Reproduzir",
      stopSong: "Parar",
    },
    twoWays: {
      eyebrow: "Duas formas de tocar",
      heading: "Aprenda passo a passo, ou só toque",
      lead: "Escolha a parte que combina com o seu dia. Você pode trocar quando quiser.",
      learn: {
        tag: "Curso guiado",
        title: "Aprenda piano",
        text: "Um curso guiado em pequenos passos. Cada passo ensina uma habilidade, e uma música coloca essa habilidade em prática.",
        action: "Começar a aprender",
        picture: "O mapa do curso, com a primeira lição concluída e a próxima aberta",
      },
      play: {
        tag: "Qualquer música",
        title: "Piano livre",
        text: "Abra qualquer música, veja as notas voarem em direção a um piano 3D e toque junto.",
        action: "Só tocar",
        picture: "O piano 3D, com notas caindo sobre as teclas",
      },
    },
    howItWorks: {
      eyebrow: "Como se aprende",
      heading: "Quatro passos, sempre de novo",
      lead: "Cada lição segue o mesmo ciclo curto, então você sempre sabe o que vem depois.",
      steps: [
        { title: "Aprenda uma habilidade", text: "Uma lição curta mostra algo novo, como uma nota, um ritmo ou uma posição da mão." },
        { title: "Pratique", text: "Toque no seu próprio teclado. O piano espera você e marca cada nota certa." },
        { title: "Toque uma música de verdade", text: "Use a habilidade em uma música da biblioteca, em um nível que combine com você." },
        { title: "Ganhe medalhas", text: "Cada lição dá XP, e cada mundo que você termina dá uma medalha." },
      ],
    },
    rarities: {
      eyebrow: "Uma melodia, quatro níveis",
      heading: "Cada música cresce com você",
      lead: "Cada música nossa vem em quatro versões. Troque entre elas e veja Ode to Joy crescer.",
      control: "Versão",
      piano: "Um piano tocando Ode to Joy",
      names: { common: "Iniciante", rare: "Fácil", epic: "Intermediário", legendary: "Difícil" },
      taglines: {
        common: "Seus primeiros dias. Uma posição da mão, notas lentas e um baixo que espera você.",
        rare: "Suas primeiras semanas. Colcheias, acordes simples e um baixo que se move.",
        epic: "Seus primeiros meses. Acordes quebrados e a passagem do polegar.",
        legendary: "Cerca de um ano depois. As duas mãos ocupadas, rápidas e independentes.",
      },
    },
    devices: {
      eyebrow: "Toque com o que você tem",
      heading: "Sem piano? Comece mesmo assim",
      lead: "Qualquer um destes toca as notas. Um teclado de verdade é o melhor, e os outros deixam você começar hoje.",
      ways: [
        { title: "Um teclado MIDI", text: "Conecte por USB e permita o MIDI uma vez. Depois disso, o site encontra o teclado sozinho." },
        { title: "Uma tela sensível ao toque", text: "Toque as teclas na tela, com quantos dedos quiser." },
        { title: "O teclado do seu computador", text: "As teclas de letras e números tocam duas oitavas, e você pode mover qualquer nota para outra tecla." },
      ],
      piano: "Um pequeno piano para experimentar",
      start: "Carregar o pequeno piano para tocar",
      hint: "Toque uma tecla para ouvir.",
    },
    free: {
      eyebrow: "Grátis, e seu",
      heading: "Nada a pagar, nada a assinar",
      lead: "O site é um presente de alguém que ama o piano. Ele continua grátis.",
      promises: [
        { title: "Grátis, sem conta", text: "Abra o site e toque. Não há cadastro nem nada para comprar." },
        { title: "Código aberto", text: "Cada linha de código é pública sob a licença MIT. Leia, mude, compartilhe." },
        { title: "Funciona sem conexão", text: "Depois de carregado, o site funciona sem internet. As músicas que você já abriu também tocam sem conexão." },
        { title: "Sem anúncios, sem perfis", text: "Nada do que você toca sai do seu dispositivo. Só contamos as visitas às páginas, sem cookies, e não vendemos nada." },
      ],
    },
    questions: {
      eyebrow: "Perguntas",
      heading: "O que as pessoas perguntam primeiro",
      items: [
        {
          question: "Preciso de um piano?",
          answer: "Não. Um teclado MIDI é o melhor, mas uma tela sensível ao toque ou o teclado do seu computador também tocam cada nota.",
        },
        {
          question: "Quais navegadores funcionam?",
          answer: "Qualquer navegador atual reproduz. Um teclado MIDI precisa de Web MIDI, que o Chrome, o Edge e o Firefox têm e o Safari não tem.",
        },
        {
          question: "Preciso de uma conta?",
          answer: "Não. Não há cadastro, e suas configurações ficam neste navegador.",
        },
        {
          question: "Funciona sem conexão?",
          answer: "Sim. Abra o site uma vez com internet, e depois ele funciona sem conexão. Uma música toca sem conexão depois que você a abre uma vez.",
        },
        {
          question: "Posso tocar minhas próprias músicas?",
          answer: "Sim. Abra qualquer arquivo MIDI ou MusicXML em Piano livre. Ele é lido no seu dispositivo e nunca é enviado.",
        },
        {
          question: "Quais músicas estão na biblioteca?",
          answer: "Nossos próprios arranjos de melodias conhecidas, cada um em quatro versões, algumas peças nossas e peças clássicas de coleções abertas.",
        },
        {
          question: "É grátis mesmo?",
          answer: "Sim. É de código aberto sob a licença MIT, sem anúncios e sem plano pago.",
        },
      ],
    },
    lastCall: {
      heading: "Tudo pronto, quando você quiser",
      lead: "Escolha por onde começar. Você pode trocar quando quiser.",
    },
  },
  footer: {
    tagline: "Aprenda piano tocando. Grátis, de código aberto e sem conexão.",
    nav: "Site",
    explore: "Explorar",
    about: "Sobre e licenças",
    legal: "Informações legais",
    language: "Esta página em",
    license: "Código aberto sob a licença MIT.",
  },
  counts: {
    badges: (n: number) => `${formatNumber("pt", n)} ${plural("pt", n, { one: "medalha", many: "de medalhas", other: "medalhas" })}`,
    minutesPlayed: (n: number) =>
      `${formatNumber("pt", n)} ${plural("pt", n, { one: "minuto tocado", many: "de minutos tocados", other: "minutos tocados" })}`,
    xp: (n: number) => `${formatNumber("pt", n)} XP`,
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
        "Este navegador não consegue desenhar o piano. Ative a aceleração de hardware nas configurações dele, ou toque no seu teclado MIDI ou no teclado do computador.",
    },
  },
};
