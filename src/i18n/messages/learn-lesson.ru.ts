/** The lesson view of *Learn Piano* in Russian. A text it leaves out shows in English. */
import { formatNumber, plural } from "../format";
import type { Translation } from "../translation";
import type { learnLesson as en } from "./learn-lesson.en";

const n = (value: number) => formatNumber("ru", value);
const percent = (value: number) => `${n(value)} %`;
/** A count of beats in the accusative, such as "2 доли" or "5 долей". */
const beats = (value: number) => `${n(value)} ${plural("ru", value, { one: "долю", few: "доли", many: "долей", other: "доли" })}`;

export const learnLesson: Translation<typeof en> = {
  stepOf: (step: number, count: number) => `Шаг ${n(step)} из ${n(count)}`,
  leave: "Выйти из урока",
  leaveDialog: {
    title: "Выйти из урока?",
    body: "Прогресс в этом уроке сохранится, только когда урок закончится.",
    stay: "Продолжить урок",
    leave: "Выйти",
    close: "Закрыть",
  },
  lacks: {
    touch: "Моя клавиатура не различает громко и тихо",
    pedal: "У моей клавиатуры нет педали",
  },
  loading: "Загрузка урока…",
  missing: "Такого урока нет.",
  backToCourse: "Назад к курсу",
  band: {
    continue: "Продолжить",
    right: "Верно!",
    tryAgain: "Почти получилось. Попробуйте ещё раз.",
  },
  demo: {
    play: "Послушать",
    playAgain: "Послушать ещё раз",
    skip: "Пропустить",
    piano: "Фортепиано играет пример",
    playing: "Звучит",
    slow: "Медленно",
    side: "Вид сбоку",
  },
  quiz: {
    answers: "Ответы",
    wrong: "Почти получилось. Попробуйте другой ответ.",
    hint: "Подсвеченный ответ — верный.",
  },
  findKey: {
    piano: "Фортепиано. Нажмите клавишу, которую называет шаг.",
    marks: { next: "Эта клавиша", correct: "Верно", mistake: "Не эта" },
    wrong: "Это другая клавиша. Попробуйте ещё раз.",
    hint: "Подсвеченная клавиша — нужная.",
    timeUp: "Время вышло.",
    secondsLeft: (seconds: number) => `${n(seconds)} с`,
  },
  playNotes: {
    piano: "Фортепиано. Сыграйте фразу по порядку.",
    marks: { next: "Сыграйте эту", correct: "Сыграно", mistake: "Не эта" },
    wrong: "Это другая нота. Попробуйте ещё раз.",
    hint: (note: string) => `Следующая нота — ${note}.`,
    hintChord: (...notes: string[]) => `Теперь сыграйте ${notes.slice(0, -1).join(", ")} и ${notes.at(-1)} вместе.`,
    expression: {
      "too-loud": "Клавиша нужная, но слишком громко. Сыграйте тихо.",
      "too-soft": "Клавиша нужная, но слишком тихо. Сыграйте громко.",
      "pedal-up": "Клавиша нужная. Держите педаль нажатой, пока играете.",
      "pedal-down": "Клавиша нужная. Снимите педаль, прежде чем играть.",
    },
  },
  listen: {
    question: (pair: number, count: number) => `Пара ${n(pair)} из ${n(count)}`,
    playAgain: "Послушать ещё раз",
    group: "Второй звук выше, ниже или такой же?",
    answers: { higher: "Выше", lower: "Ниже", same: "Такой же" },
    wrong: "Почти получилось. Послушайте ещё раз и попробуйте другой ответ.",
    hint: "Подсвеченный ответ — верный.",
    roundAgain: (right: number, asked: number) =>
      `Верно ${n(right)} из ${n(asked)} ${plural("ru", asked, { one: "ответа", few: "ответов", many: "ответов", other: "ответа" })}. Давайте ещё один раунд.`,
  },
  readNote: {
    staff: { treble: "Нота на нотном стане в скрипичном ключе", bass: "Нота на нотном стане в басовом ключе" },
    count: (note: number, total: number) => `Нота ${n(note)} из ${n(total)}`,
    answers: "Названия нот",
    letters: { C: "до", D: "ре", E: "ми", F: "фа", G: "соль", A: "ля", B: "си" },
    piano: "Фортепиано. Сыграйте ноту с нотного стана.",
    marks: { next: "Эта клавиша", correct: "Верно", mistake: "Не эта" },
    wrongName: "Это другая нота. Посмотрите ещё раз.",
    wrongKey: "Это другая клавиша. Попробуйте ещё раз.",
    hintName: "Подсвеченное название — верное.",
    hintKey: "Подсвеченная клавиша — нужная.",
    again: "Несколько ответов пока неверны. Пройдём их ещё раз.",
  },
  rhythmTap: {
    start: "Старт",
    listen: "Послушайте: один такт отсчёта.",
    tap: "Теперь нажимайте любую клавишу на каждый щелчок.",
    piano: "Панель для ритма. Нажимайте любую клавишу на долю.",
    marks: { next: "Нажмите здесь", correct: "В долю", mistake: "Мимо доли" },
    short: (hits: number, count: number) =>
      `Вы попали в ${n(hits)} из ${n(count)} ${plural("ru", count, { one: "доли", few: "долей", many: "долей", other: "доли" })}. Попробуйте ещё раз.`,
    hint: "Нажимайте в тот момент, когда слышите щелчок. Точки мигают на каждую долю.",
    play: "Теперь играйте каждую ноту на свой щелчок.",
    phrasePiano: "Клавиши. Сыграйте фразу точно в такт щелчкам.",
    shortNotes: (hits: number, notes: number) =>
      `Вы сыграли вовремя ${n(hits)} из ${n(notes)} ${plural("ru", notes, { one: "ноты", few: "нот", many: "нот", other: "ноты" })}. Попробуйте ещё раз.`,
    restSounded: "В паузе прозвучала клавиша. Поднимите палец и не играйте в паузе.",
    phraseHint: "Играйте каждую ноту на свой щелчок и отпускайте клавишу перед паузой. Точки мигают на каждую долю.",
    pattern: {
      taps: (countIn: number, taps: number) => `Отсчитайте ${beats(countIn)}. Затем отстучите ${beats(taps)}.`,
      phrase: (countIn: number, ...parts: string[]) => `Отсчитайте ${beats(countIn)}. Затем сыграйте${parts.length > 0 ? `: ${parts.join(", ")}` : ""}.`,
      held: (note: string, count: number) => `${note} на ${beats(count)}`,
      rest: (count: number) => (count === 1 ? "пауза" : `пауза на ${beats(count)}`),
    },
  },
  song: {
    play: "Сыграть в проигрывателе",
    goal: (value: number) => `Сыграйте песню и попадите в ${percent(value)} нот.`,
    notYet: (value: number) => `Песня ждёт вас. Сыграйте её снова, когда захотите, и постарайтесь попасть в ${percent(value)} нот.`,
    played: (value: number) => `Вы сыграли песню и попали в ${percent(value)} нот.`,
  },
  recap: {
    heading: "Чему вы научились",
  },
  end: {
    heading: "Урок пройден",
    stars: (count: number) => `${n(count)} из ${n(3)} звёзд`,
    again: "Пройти ещё раз",
    saving: "Сохраняем прогресс…",
    saved: "Сохранено на этом устройстве.",
    unsaved: "Этот браузер ничего не хранит, поэтому результат останется, только пока вкладка открыта.",
    failed: "Не удалось сохранить прогресс.",
    retry: "Попробовать ещё раз",
    xp: (number: string) => `+${number} XP`,
    level: (level: number, toNext: number) => `Уровень ${n(level)}: до уровня ${n(level + 1)} осталось ${n(toNext)} XP`,
    skipOpened: (world: string) => `Все уроки мира «${world}» теперь открыты.`,
    skipShort: (stars: number) =>
      `Чтобы открыть этот мир, наберите ${n(stars)} ${plural("ru", stars, { one: "звезду", few: "звезды", many: "звёзд", other: "звезды" })}. Попробуйте ещё раз, когда захотите.`,
  },
  moment: {
    continue: "Продолжить",
    level: {
      heading: "Новый уровень!",
      name: (level: number) => `Уровень ${n(level)}`,
      text: "Каждый урок ведёт вас дальше. Так держать!",
    },
    badge: { heading: "Новый значок!" },
  },
};
