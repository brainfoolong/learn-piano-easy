/** The profile of *Learn Piano* in Russian. A text it leaves out shows in English. */
import { formatNumber, plural } from "../format";
import type { Translation } from "../translation";
import type { learnProfile as en } from "./learn-profile.en";

const n = (value: number) => formatNumber("ru", value);
const days = (value: number) => `${n(value)} ${plural("ru", value, { one: "день", few: "дня", many: "дней", other: "дня" })}`;

export const learnProfile: Translation<typeof en> = {
  loading: "Загрузка прогресса…",
  level: {
    heading: "Уровень",
    name: (level: number) => `Уровень ${n(level)}`,
    total: (xp: number) => `Всего ${n(xp)} XP`,
    toNext: (level: number) => `До уровня ${n(level)}`,
  },
  streak: {
    heading: "Серия",
    current: (count: number) => days(count),
    currentLabel: "подряд",
    best: (count: number) => `Рекорд: ${days(count)}`,
    today: (xp: number, goal: number) =>
      xp >= goal ? `Сегодня: ${n(xp)} XP, цель в ${n(goal)} XP выполнена` : `Сегодня: ${n(xp)} из ${n(goal)} XP`,
  },
  calendar: {
    heading: "Последние восемь недель",
    label: (met: number, played: number) =>
      `Последние восемь недель. Дней с выполненной целью: ${n(met)}. Дней с уроком: ${n(played)}.`,
    met: "Цель выполнена",
    played: "Был урок",
    none: "Без урока",
  },
  stats: {
    heading: "Статистика",
    lessons: "Уроков пройдено",
    threeStars: "Уроков с тремя звёздами",
    days: "Дней с занятиями",
    badges: "Значков получено",
  },
  badges: {
    heading: "Значки",
    lead: (earned: number, all: number) => `Получено ${n(earned)} из ${n(all)}`,
    earned: (name: string) => `${name}, получен`,
    locked: (name: string) => `${name}, ещё не получен`,
  },
  choices: {
    heading: "Ваши настройки",
    goal: "Цель на день",
    goalHelp: "Сколько XP нужно набрать за день, чтобы серия продолжалась.",
    sounds: "Звуки наград",
    soundsHelp: "Звуки за пройденный шаг, звезду, новый уровень и значок. Фортепиано звучит всегда.",
  },
  data: {
    heading: "Ваши данные",
    lead: "Прогресс хранится в этом браузере. На странице «Ваши данные» можно сохранить его со всем остальным в один файл и восстановить.",
    open: "Копия и восстановление",
    reset: "Сбросить весь прогресс",
    failed: "Не удалось сохранить. Ничего не изменилось.",
    resetDone: "Прогресс сброшен. В файле резервной копии сохранено всё, что в нём было.",
    close: "Закрыть",
    cancel: "Оставить прогресс",
    ask: {
      title: "Сбросить весь прогресс?",
      text: "Из этого браузера будут удалены все уроки, звёзды, очки XP и значки. Настройки останутся.",
      next: "Продолжить",
    },
    askAgain: {
      title: "Вы уверены?",
      text: "Сначала сохранится файл резервной копии, чтобы потом можно было всё восстановить. Затем прогресс начнётся заново.",
      confirm: "Сбросить прогресс",
    },
  },
};
