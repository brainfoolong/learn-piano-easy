/** The player's shell in Russian. A text it leaves out shows in English. */
import { formatNumber, plural } from "../format";
import type { Translation } from "../translation";
import type { playerShell as en } from "./player-shell.en";

/** `n` seconds with two decimals and no digit grouping, such as `12,50`. */
const seconds = (n: number) => formatNumber("ru", n, { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: false });
/** `n` with one decimal and no digit grouping, such as `6,6`. */
const tenths = (n: number) => formatNumber("ru", n, { minimumFractionDigits: 1, maximumFractionDigits: 1, useGrouping: false });
/** A count of files as a subject or an object, such as `5 файлов`. */
const files = (n: number) => `${formatNumber("ru", n)} ${plural("ru", n, { one: "файл", few: "файла", many: "файлов", other: "файла" })}`;
/** A count of files after `из`, which takes the genitive, such as `из 2 файлов`. */
const filesOf = (n: number) => `${formatNumber("ru", n)} ${plural("ru", n, { one: "файла", few: "файлов", many: "файлов", other: "файла" })}`;

export const playerShell: Translation<typeof en> = {
  dialog: {
    close: "Закрыть",
    hotkeys: "Сочетания клавиш",
    keyBindings: "Клавиатура компьютера",
    pdf: "Сохранить в PDF",
    offlineFiles: "Работа без интернета",
    tracks: "Дорожки",
    songs: "Песни",
    guide: (title) => `Разбор: ${title}`,
    about: "О проекте Learn Piano Easy",
  },
  toast: {
    dismiss: "Скрыть",
  },
  topbar: {
    songs: "Песни",
    tracks: "Дорожки",
    guide: "Разбор",
    settings: "Настройки",
    about: "О проекте",
    openSong: "Открытая песня",
    demoSong: "Песня-пример",
    songFallback: "Песня",
  },
  songs: {
    noneFound: "Файлы песен не найдены.",
    wrongKind: "Добавить можно только файлы MIDI и MusicXML.",
    added: (n) =>
      `${plural("ru", n, { one: "Добавлена", few: "Добавлены", many: "Добавлено", other: "Добавлено" })} ${formatNumber("ru", n)} ${plural("ru", n, { one: "песня", few: "песни", many: "песен", other: "песни" })} в «Ваши песни».`,
    notKept: (reason) => `Не удалось сохранить песни: ${reason}`,
    soundsFailed: "Не удалось загрузить звуки фортепиано, поэтому песни идут без звука.",
  },
  guide: {
    step: (n, summary) => `Шаг ${formatNumber("ru", n)}: ${summary}.`,
    barLoops: (bar) => `Такт ${formatNumber("ru", bar)} повторяется по кругу.`,
    topBeaten: (title) => `Вы прошли «${title}», последний шаг этой песни. Отлично сыграно!`,
    beaten: (title, next) => `Вы прошли «${title}»! Дальше — «${next}».`,
    playNext: (next) => `Сыграть «${next}»`,
  },
  lesson: {
    label: "Урок",
    target: (percent) => `Попадите в ${formatNumber("ru", percent)} % нот в попытке со счётом.`,
    back: "Назад к уроку",
    missing: "Песни этого урока нет в каталоге.",
  },
  finger: {
    label: "Выбранная нота",
    setByYou: "задан вами",
    fromGuide: "из разбора",
    suggested: "предложен",
    none: "палец не задан",
    finger: (finger, source) => `палец ${formatNumber("ru", finger)}, ${source}`,
    line: (note, said) => `${note}: ${said}. Нажмите 1–5, чтобы задать палец, 0 — чтобы очистить, Esc — чтобы закончить.`,
  },
  backgroundTrack: {
    notAudio: (file) => `Этот браузер не может воспроизвести ${file}.`,
    playsAlong: (file) => `${file} звучит вместе с песней.`,
  },
  about: {
    license: "Лицензия",
    notices: "Сторонние компоненты",
    packageLicense: (name) => `Лицензия ${name}`,
    offline: "Этот текст пока недоступен без интернета.",
    intro:
      "Learn Piano Easy — бесплатное приложение с открытым исходным кодом, чтобы учиться играть на фортепиано. В нём есть пошаговый курс, и можно открывать свои MIDI-файлы. Оно работает в браузере, даже без интернета.",
    build: (version) => `Сборка ${version}`,
  },
  cache: {
    groups: {
      app: { label: "Приложение", description: "Страница, её код и список песен. Без них приложение не откроется без интернета." },
      songs: { label: "Песни", description: "Все песни, которые идут с приложением, чтобы любая открывалась без интернета." },
      sounds: { label: "Звуки фортепиано", description: "Все наборы звуков, чтобы фортепиано звучало без интернета, какой бы набор ни был выбран." },
    },
    bytes: (n) => `${formatNumber("ru", n, { useGrouping: false })} Б`,
    kilobytes: (n) => `${tenths(n)} КБ`,
    megabytes: (n) => `${tenths(n)} МБ`,
    groupsFailed: (n, labels) => `${labels}: не удалось сохранить ${files(n)} для работы без интернета.`,
    updated: (labels) => `Обновлено. Снова сохранено для работы без интернета: ${labels}.`,
    unavailable: "Этот браузер не хранит файлы этой страницы для работы без интернета.",
    reading: "Чтение сохранённых файлов…",
    unreadable: "Не удалось прочитать список сохранённых файлов. Перезагрузите страницу и попробуйте ещё раз.",
    intro: "Сохранённые файлы работают и без интернета. Каждую часть можно сохранить или удалить отдельно.",
    allSaved: "всё сохранено",
    noneSaved: "не сохранено",
    someSaved: (count, total) => `сохранено ${formatNumber("ru", count)} из ${filesOf(total)}`,
    status: (size, total, state) => `${size}, ${files(total)}, ${state}.`,
    saving: (done, total) => `Сохранение: ${formatNumber("ru", done)} из ${filesOf(total)}…`,
    failed: (n) => `Не удалось сохранить ${files(n)}.`,
    save: "Сохранить",
    saveAgain: "Сохранить снова",
    remove: "Удалить",
    saveGroup: (label) => `Сохранить «${label}»`,
    removeGroup: (label) => `Удалить «${label}»`,
    keep: "Сохранять после каждого обновления",
  },
  update: {
    ready: "Новая версия готова.",
    reload: "Перезагрузить",
  },
  scene: {
    piano: "Фортепиано",
    pianoRange: (range) => `Фортепиано, ${range}`,
    startKeys: (keys) => `, начальные клавиши ${keys}`,
    chord: (chord) => `, аккорд ${chord}`,
  },
  demo: {
    /** Each line keeps the English's seven or eight syllables, and "|" parts the syllables inside a word. */
    lyrics: [
      "Смо|три|те, как ог|ни ле|тят",
      "на|жи|май|те кла|ви|ши",
      "мед|лен|но, по|том бы|стрей",
      "ско|ро ру|ки са|ми путь най|дут",
    ],
    part: (n) => `Часть ${formatNumber("ru", n)}`,
    leftHand: "Левая рука",
    rightHand: "Правая рука",
  },
  chords: {
    root: "Основной тон",
    /** A chord tone stays as the chart prints it, such as `♭3`, since a Russian ordinal ending would crowd the chart. */
    ordinal: (tone) => String(tone),
  },
  overlays: {
    fps: "Кадров в секунду",
    tempo: "Темп",
    bpmValue: (n) => `${formatNumber("ru", n, { useGrouping: false })} BPM`,
    fpsValue: (n) => `${formatNumber("ru", n, { useGrouping: false })} FPS`,
    track: (track, channel) => `Дорожка ${formatNumber("ru", track)}, канал ${formatNumber("ru", channel)}`,
    velocity: (velocity) => `Сила нажатия ${formatNumber("ru", velocity)}`,
    timing: (start, length) => `Начало: ${seconds(start)} с, длительность: ${seconds(length)} с`,
  },
  sheet: {
    label: "Ноты",
    empty: "В нотах не показана ни одна дорожка. Включите любую в разделе «Дорожки».",
  },
};
