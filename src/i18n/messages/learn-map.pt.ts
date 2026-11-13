/** The map of *Learn Piano* in Brazilian Portuguese. A text it leaves out shows in English. */
import { formatNumber, plural } from "../format";
import type { Translation } from "../translation";
import type { learnMap as en } from "./learn-map.en";

export const learnMap: Translation<typeof en> = {
  lead: "Siga o caminho uma lição de cada vez. Cada mundo termina com um desafio final.",
  loading: "Carregando o curso…",
  continue: "Continuar",
  nextUp: "A seguir",
  world: (n: number) => `Mundo ${formatNumber("pt", n)}`,
  progress: (done: number, all: number) =>
    `${formatNumber("pt", done)} de ${formatNumber("pt", all)} ${plural("pt", all, { one: "lição", many: "de lições", other: "lições" })}`,
  locked: "Vença o desafio final do mundo anterior, ou passe no teste de avanço deste mundo, para abri-lo.",
  beaten: "Vencido",
  node: {
    locked: (name: string) => `${name}, bloqueada`,
    open: (name: string) => `${name}, aberta`,
    done: (name: string, stars: number) => `${name}, ${formatNumber("pt", stars)} de 3 estrelas`,
  },
  medal: (world: string, earned: boolean) => `Medalha de “${world}”, ${earned ? "conquistada" : "ainda não conquistada"}`,
  skipTest: {
    title: (world: string) => `Teste de avanço: ${world}`,
    text: "Já sabe isto? Passe no teste de avanço para abrir todas as lições deste mundo.",
    action: "Fazer o teste de avanço",
  },
  bar: {
    label: "Seu progresso",
    streak: (days: number) =>
      days === 0
        ? "Nenhum dia de sequência"
        : `Sequência de ${formatNumber("pt", days)} ${plural("pt", days, { one: "dia", many: "de dias", other: "dias" })}`,
    level: (level: number) => `Nível ${formatNumber("pt", level)}`,
    today: "Hoje",
    todayGoal: (xp: number, goal: number) => `Hoje: ${formatNumber("pt", xp)} de ${formatNumber("pt", goal)} XP`,
    days: (days: number) =>
      days === 0 ? "nenhum dia" : `${formatNumber("pt", days)} ${plural("pt", days, { one: "dia", many: "de dias", other: "dias" })}`,
  },
};
