/** The world map of *Learn Piano* in Russian. A text it leaves out shows in English. */
import { formatNumber, plural } from "../format";
import type { Translation } from "../translation";
import type { learnMap as en } from "./learn-map.en";

const n = (value: number) => formatNumber("ru", value);
const days = (value: number) => `${n(value)} ${plural("ru", value, { one: "день", few: "дня", many: "дней", other: "дня" })}`;

export const learnMap: Translation<typeof en> = {
  lead: "Идите по тропе урок за уроком. Каждый мир заканчивается финальным испытанием.",
  loading: "Загрузка курса…",
  continue: "Продолжить",
  nextUp: "Дальше",
  world: (world: number) => `Мир ${n(world)}`,
  progress: (done: number, all: number) =>
    `${n(done)} из ${n(all)} ${plural("ru", all, { one: "урока", few: "уроков", many: "уроков", other: "урока" })}`,
  locked: "Чтобы открыть этот мир, пройдите финальное испытание предыдущего мира или проверку, чтобы пропустить мир.",
  beaten: "Пройдено",
  node: {
    locked: (name: string) => `${name}, урок закрыт`,
    open: (name: string) => `${name}, урок открыт`,
    done: (name: string, stars: number) => `${name}, ${n(stars)} из ${n(3)} звёзд`,
  },
  medal: (world: string, earned: boolean) => `Значок «${world}», ${earned ? "получен" : "ещё не получен"}`,
  skipTest: {
    title: (world: string) => `${world}: проверка, чтобы пропустить мир`,
    text: "Уже знаете это? Пройдите проверку, и все уроки этого мира откроются.",
    action: "Пройти проверку",
  },
  bar: {
    label: "Ваш прогресс",
    streak: (count: number) => `${days(count)} подряд`,
    level: (level: number) => `Уровень ${n(level)}`,
    today: "Сегодня",
    todayGoal: (xp: number, goal: number) => `Сегодня: ${n(xp)} из ${n(goal)} XP`,
    days: (count: number) => days(count),
  },
};
