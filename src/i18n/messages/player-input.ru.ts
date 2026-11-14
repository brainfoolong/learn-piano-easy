/** The player's input in Russian. A text it leaves out shows in English. */
import { formatNumber, plural } from "../format";
import type { Translation } from "../translation";
import type { playerInput as en } from "./player-input.en";

export const playerInput: Translation<typeof en> = {
  percent: (n: number) => `${formatNumber("ru", n)} %`,
  devices: {
    heading: "MIDI-устройства",
    connect: "Подключить MIDI-устройства",
    input: "MIDI-вход",
    output: "MIDI-выход",
    everyInput: "Все входы",
    noOutput: "Без выхода",
    notConnected: (name: string) => `${name} (не подключено)`,
    unsupported: "Этот браузер не видит MIDI-устройства. Chrome, Edge и Firefox их видят.",
    off: "Подключите MIDI-устройства, чтобы играть на MIDI-клавиатуре.",
    asking: "Ждём разрешения браузера…",
    denied: "Доступ к MIDI не разрешён. Разрешите его в настройках сайта в браузере и подключитесь снова.",
    noInputs: "MIDI-устройства не подключены.",
    inputsFound: (n: number) =>
      plural("ru", n, {
        one: `Найден ${formatNumber("ru", n)} MIDI-вход.`,
        few: `Найдено ${formatNumber("ru", n)} MIDI-входа.`,
        many: `Найдено ${formatNumber("ru", n)} MIDI-входов.`,
        other: `Найдено ${formatNumber("ru", n)} MIDI-входа.`,
      }),
  },
  freePlay: {
    heading: "Свободная игра",
    record: "Записать",
    stop: "Стоп",
    stopRecording: "Остановить запись",
    save: "Сохранить",
    saveTitle: "Сохранить как MIDI-файл",
    recording: (clock: string) => `Запись ${clock}`,
    recorded: (n: number) =>
      `Записано: ${formatNumber("ru", n)} ${plural("ru", n, { one: "нота", few: "ноты", many: "нот", other: "ноты" })}. Кнопка «Сохранить» сохранит их в MIDI-файл.`,
    hint: "Играйте свободно или нажмите «Записать», чтобы сохранить сыгранное.",
  },
  history: {
    empty: "У этой песни пока нет завершённых попыток. Сыграйте её до конца с включённым счётом.",
    hands: { both: "Обе", right: "Правая", left: "Левая" },
    columns: {
      date: "Дата",
      speed: "Скорость",
      hands: "Руки",
      accuracy: "Точность",
      hits: "Попадания",
      perfect: "Идеально",
      misses: "Промахи",
      mistakes: "Ошибки",
    },
  },
  keyBinding: {
    help: "Нажмите клавишу фортепиано, затем нажмите клавишу компьютера, которая будет играть эту ноту. Клавиша Esc закрывает это окно.",
    open: "Изменить клавиши",
  },
  learnRange: {
    lowest: "Нажмите самую нижнюю клавишу…",
    highest: "Теперь самую верхнюю…",
    start: "Определить по клавиатуре",
    title: "Определить диапазон по вашей клавиатуре",
  },
  pitchPractice: {
    heading: "Тренировка слуха",
    hear: "Послушать",
    hearTitle: "Послушать ноту",
    again: "Заново",
    againTitle: "Начать новый раунд",
    empty: "Нет нот для вопросов",
    emptyHint: "В этой тональности нет нот между выбранными нотами на вашей клавиатуре.",
    done: "Раунд пройден",
    found: (n: number, count: number) =>
      `Найдено ${formatNumber("ru", n)} из ${formatNumber("ru", count)} ${plural("ru", count, { one: "ноты", few: "нот", many: "нот", other: "ноты" })}.`,
    play: (note: string) => `Сыграйте ${note}`,
    progress: (i: number, count: number) => `Нота ${formatNumber("ru", i)} из ${formatNumber("ru", count)}`,
    wrong: (note: string) => `Не ${note}. Попробуйте ещё раз.`,
    right: (note: string) => `${note} — верно.`,
    results: "Результаты тренировки слуха",
    mistakes: (n: number, count: number) =>
      `${n === 0 ? "Ни одной ошибки" : `${formatNumber("ru", n)} ${plural("ru", n, { one: "ошибка", few: "ошибки", many: "ошибок", other: "ошибки" })}`} на ${formatNumber("ru", count)} ${plural("ru", count, { one: "ноту", few: "ноты", many: "нот", other: "ноты" })}.`,
    columns: { note: "Нота", asked: "Вопросы", mistakes: "Ошибки", playedInstead: "Сыграно вместо" },
    firstTry: (n: number, count: number) => `${formatNumber("ru", n)} из ${formatNumber("ru", count)} найдено с первой попытки.`,
  },
  scoring: {
    heading: "Счёт",
    judgements: { perfect: "Идеально", hit: "Попадание", mistake: "Ошибка", miss: "Промах" },
    counts: (hits: number, perfect: number, misses: number, mistakes: number) =>
      `Попадания ${formatNumber("ru", hits)} · Идеально ${formatNumber("ru", perfect)} · Промахи ${formatNumber("ru", misses)} · Ошибки ${formatNumber("ru", mistakes)}`,
    history: "История",
    historyTitle: "Ваши попытки в этой песне",
    readError: "Не удалось прочитать историю.",
    saved: "Попытка сохранена в истории.",
    saveError: "Не удалось сохранить эту попытку.",
  },
  game: {
    levels: { easy: "Лёгкая", normal: "Обычная", hard: "Сложная" },
    words: {
      perfect: "Идеально",
      great: "Отлично",
      good: "Хорошо",
      hold: "Удержано",
      release: "Чисто",
      wrong: "Не та нота",
      miss: "Промах",
      short: "Слишком коротко",
      long: "Слишком долго",
      late: "Поздно",
    },
    name: "Игра",
    score: "Счёт",
    combo: "комбо",
    multiplier: "Множитель",
    held: (points: string) => `Удержано ${points}`,
    burst: (multiplier: number) => `Комбо ×${formatNumber("ru", multiplier)}!`,
    inARow: (combo: number) => `${formatNumber("ru", combo)} подряд`,
    announce: (multiplier: number, combo: number) =>
      `Комбо, множитель ${formatNumber("ru", multiplier)}, ${formatNumber("ru", combo)} подряд.`,
    result: "Итог попытки",
    complete: "Попытка завершена",
    bestCombo: (combo: number) => `Лучшее комбо ${formatNumber("ru", combo)}`,
    stats: {
      perfect: "Идеально",
      great: "Отлично",
      good: "Хорошо",
      wrong: "Не та нота",
      miss: "Промах",
      late: "Поздно",
      short: "Слишком коротко",
      long: "Слишком долго",
    },
    helped: "С режимом «Ждать ваши ноты»",
    close: "Закрыть",
    closeName: "Закрыть итог попытки",
  },
  pdf: {
    noSong: "Сначала откройте песню, затем сохраните её ноты в PDF.",
    intro: (title: string) =>
      `Сохраняет падающие ноты песни «${title}» над клавиатурой фортепиано, по несколько секунд песни на каждой странице.`,
    secondsPerPage: "Секунд на страницу",
    background: "Использовать цвета фона",
    pages: (pages: number, seconds: number) =>
      `${formatNumber("ru", pages)} ${plural("ru", pages, { one: "страница", few: "страницы", many: "страниц", other: "страницы" })}, на каждой ${formatNumber("ru", seconds)} ${plural("ru", seconds, { one: "секунда", few: "секунды", many: "секунд", other: "секунды" })} песни.`,
    save: "Сохранить PDF",
    pageHeading: (title: string, from: string, to: string, page: number, count: number) =>
      `${title}   ${from}–${to}   страница ${formatNumber("ru", page)} из ${formatNumber("ru", count)}`,
  },
};
