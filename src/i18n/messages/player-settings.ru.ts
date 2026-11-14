/** The player's settings panel in Russian. A text it leaves out shows in English. */
import { parsePitch } from "../../keyboard/range";
import { pitchClassName } from "../../theory/note-names";
import { formatNumber, plural } from "../format";
import type { Translation } from "../translation";
import type { playerSettings as en } from "./player-settings.en";
import { playerSettingsLook } from "./player-settings-look.ru";
import { playerSettingsPlay } from "./player-settings-play.ru";

/** A tonic given in letters, such as `B♭`, in Russian solfège, such as `си♭`. Any other name stays as it is. */
function solfege(tonic: string): string {
  const pitch = parsePitch(`${tonic}4`);
  if (pitch === undefined) return tonic;
  return pitchClassName(pitch, { system: "solfege", accidentals: tonic.endsWith("♭") ? "flats" : "sharps", locale: "ru" });
}

export const playerSettings: Translation<typeof en> = {
  panel: {
    title: "Настройки",
    close: "Закрыть настройки",
    search: "Поиск в настройках",
    clearSearch: "Очистить поиск",
    sections: "Разделы настроек",
    found: (count) => {
      const n = formatNumber("ru", count);
      return plural("ru", count, {
        one: `Найдена ${n} настройка`,
        few: `Найдено ${n} настройки`,
        many: `Найдено ${n} настроек`,
        other: `Найдено ${n} настройки`,
      });
    },
    emptyTitle: "Ничего не найдено",
    empty: (query) => `Нет настроек по запросу «${query}». Попробуйте другое слово.`,
    showAll: "Показать все настройки",
    changed: (count) => `Изменено: ${formatNumber("ru", count)}`,
    changedTotal: (count) => {
      if (count === 0) return "Все настройки по умолчанию.";
      const n = formatNumber("ru", count);
      return plural("ru", count, {
        one: `Изменена ${n} настройка`,
        few: `Изменено ${n} настройки`,
        many: `Изменено ${n} настроек`,
        other: `Изменено ${n} настройки`,
      });
    },
    reset: (label) => `Сбросить «${label}» до значения по умолчанию`,
    resetAll: "Сбросить все настройки",
    confirmResetAll: "Сбросить все настройки по умолчанию? Все изменения пропадут.",
  },
  groups: {
    basics: "Основное",
    audio: "Аудио",
    instrument: "Инструмент",
    scene: "Сцена",
    reading: "Подсказки",
    app: "Приложение",
  },
  sections: {
    general: "Общие",
    loop: "Повтор фрагмента",
    audio: "Звук",
    backing: "Аккомпанемент",
    view: "Вид",
    keyboard: "Ваша клавиатура",
    input: "Ввод",
    piano: "Фортепиано",
    notes: "Падающие ноты",
    lanes: "Полосы и линии",
    particles: "Частицы",
    labels: "Подписи",
    lyrics: "Текст песни",
    coding: "Раскраска нот",
    sheet: "Ноты",
    pdf: "Экспорт в PDF",
    offline: "Без интернета",
  },
  about: {
    general: "Как запускается проигрыватель, как идёт песня и что показывает шкала времени.",
    loop: "Повторяйте фрагмент, пока он не ляжет в пальцы.",
    audio: "Громкость, тембр фортепиано, метроном и эквалайзер.",
    backing: "Свой аудиофайл, который звучит вместе с песней.",
    view: "Камера, свечение и то, как далеко вперёд видно песню.",
    keyboard: "Клавиши вашей клавиатуры, чтобы фортепиано на экране совпадало с ней.",
    input: "Как вы играете: режим, устройства и что проверяет проигрыватель.",
    piano: "Фортепиано на экране: его клавиши, цвета и эффекты.",
    notes: "Форма и свечение падающих нот.",
    lanes: "Полосы за нотами, а также линии и метки на них.",
    particles: "Пламя, искры и свои частицы там, где нота попадает в клавишу.",
    labels: "Названия на нотах и клавишах, а также аккорды песни.",
    lyrics: "Слова песни, строка за строкой поверх сцены.",
    coding: "Свой цвет для каждой высоты звука или каждого пальца.",
    sheet: "Песня в виде нот, рядом с падающими нотами или вместо них.",
    pdf: "Сохраните падающие ноты как страницы для печати.",
    offline: "Что приложение хранит, чтобы можно было играть без интернета.",
  },
  subheadings: {
    generalApp: "Приложение и данные",
    generalSong: "Песня",
    generalReadouts: "Показатели и шкала времени",
    audioVolume: "Громкость и сила нажатия",
    audioRoom: "Реверберация и строй",
    audioEnvelope: "Огибающая",
    audioMetronome: "Метроном",
    audioEqualizer: "Эквалайзер",
    audioTiming: "Тайминг",
    inputMode: "Режим",
    inputDevices: "Устройства и клавиши",
    inputAlong: "Игра вместе с песней",
    inputScore: "Счёт и игра",
    pianoPressed: "Нажатые клавиши",
    pianoLook: "Цвета и размер",
    pianoFlare: "Вспышка",
    pianoWave: "Волна",
    lanesColours: "Цвета полос",
    lanesLines: "Линии тактов и долей",
    lanesHeld: "Удерживаемые клавиши",
    lanesMarkers: "Метки и педаль",
    particlesEffects: "Эффекты",
    particlesLook: "Свои частицы: вид",
    particlesLife: "Свои частицы: количество и жизнь",
    particlesMotion: "Свои частицы: движение",
    particlesWander: "Свои частицы: блуждание и качание",
    particlesStart: "Свои частицы: точка старта",
    labelsNotes: "На нотах",
    labelsPiano: "На фортепиано",
    labelsChords: "Аккорды",
    codingPitch: "По высоте звука",
    codingFinger: "По пальцам",
    sheetLayout: "Расположение",
    sheetNotation: "Нотная запись",
    sheetCursor: "Курсор и цвета",
  },
  settings: { ...playerSettingsPlay, ...playerSettingsLook },
  range: {
    label: "Размер клавиатуры",
    keys: (count) =>
      `${formatNumber("ru", count)} ${plural("ru", count, { one: "клавиша", few: "клавиши", many: "клавиш", other: "клавиши" })}`,
    custom: "Свой",
    summary: (keys, first, last) => `${keys}, ${first}–${last}`,
    octaveDown: "− Октава",
    octaveDownName: "На октаву ниже",
    octaveUp: "Октава +",
    octaveUpName: "На октаву выше",
  },
  key: (tonic, mode) => `${solfege(tonic)} ${{ major: "мажор", minor: "минор" }[mode] ?? mode}`,
};
