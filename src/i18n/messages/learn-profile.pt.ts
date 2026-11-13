/** The profile of *Learn Piano* in Brazilian Portuguese. A text it leaves out shows in English. */
import { formatNumber, plural } from "../format";
import type { Translation } from "../translation";
import type { learnProfile as en } from "./learn-profile.en";

const n = (value: number) => formatNumber("pt", value);
const days = (value: number) => `${n(value)} ${plural("pt", value, { one: "dia", many: "de dias", other: "dias" })}`;
const inDays = (value: number) => (value === 0 ? "nenhum dia" : days(value));

export const learnProfile: Translation<typeof en> = {
  loading: "Carregando seu progresso…",
  level: {
    heading: "Nível",
    name: (level: number) => `Nível ${n(level)}`,
    total: (xp: number) => `${n(xp)} XP no total`,
    toNext: (level: number) => `Até o nível ${n(level)}`,
  },
  streak: {
    heading: "Sequência",
    current: (count: number) => days(count),
    currentLabel: "seguidos agora",
    best: (count: number) => `Recorde: ${days(count)}`,
    today: (xp: number, goal: number) =>
      xp >= goal ? `Hoje: ${n(xp)} XP, meta de ${n(goal)} alcançada` : `Hoje: ${n(xp)} de ${n(goal)} XP`,
  },
  calendar: {
    heading: "As últimas oito semanas",
    label: (met: number, played: number) =>
      `Nas últimas oito semanas, você alcançou a meta em ${inDays(met)} e fez uma lição em ${inDays(played)}.`,
    met: "Meta alcançada",
    played: "Com lição",
    none: "Sem lição",
  },
  stats: {
    heading: "Estatísticas",
    lessons: "Lições concluídas",
    threeStars: "Lições com três estrelas",
    days: "Dias de prática",
    badges: "Medalhas conquistadas",
  },
  badges: {
    heading: "Medalhas",
    lead: (earned: number, all: number) => `${n(earned)} de ${n(all)} conquistadas`,
    earned: (name: string) => `${name}, conquistada`,
    locked: (name: string) => `${name}, ainda não conquistada`,
  },
  choices: {
    heading: "Suas configurações",
    goal: "Meta diária",
    goalHelp: "Os XP de que um dia precisa para manter sua sequência.",
    sounds: "Sons de recompensa",
    soundsHelp: "Sininhos para um passo concluído, uma estrela, um novo nível e uma medalha. O piano sempre soa.",
  },
  data: {
    heading: "Seus dados",
    lead: "Seu progresso fica neste navegador. A página “Seus dados” salva o progresso com todo o resto em um arquivo, e também o restaura.",
    open: "Fazer backup ou restaurar",
    reset: "Redefinir todo o progresso",
    failed: "Não foi possível salvar no navegador. Nada mudou.",
    resetDone: "Seu progresso foi redefinido. O arquivo de backup contém tudo o que ele tinha.",
    close: "Fechar",
    cancel: "Manter meu progresso",
    ask: {
      title: "Redefinir todo o progresso?",
      text: "Isto remove deste navegador cada lição, estrela, ponto de XP e medalha. Suas configurações continuam.",
      next: "Continuar",
    },
    askAgain: {
      title: "Quer mesmo fazer isso?",
      text: "Primeiro um arquivo de backup é salvo, para você poder restaurar tudo depois. Então seu progresso começa do zero.",
      confirm: "Redefinir meu progresso",
    },
  },
};
