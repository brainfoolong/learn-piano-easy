/** The player's bar in Russian. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { playerBar as en } from "./player-bar.en";

export const playerBar: Translation<typeof en> = {
  actions: {
    play: "Воспроизвести или поставить на паузу",
    stop: "Остановить и вернуться в начало",
    seekBack: "Назад на 5 секунд",
    seekForward: "Вперёд на 5 секунд",
    toStart: "В начало",
    faster: "Быстрее",
    slower: "Медленнее",
    transposeUp: "Транспонировать выше",
    transposeDown: "Транспонировать ниже",
    loop: "Повторять выбранные такты, затем всю песню, затем выключить",
    loopStart: "Повтор с этого такта",
    loopEnd: "Повтор до этого такта",
    zoomIn: "Увеличить",
    zoomOut: "Уменьшить",
    fit: "Показать всю песню",
    viewLeft: "Сдвинуть вид влево",
    viewRight: "Сдвинуть вид вправо",
    fullscreen: "Во весь экран",
  },
  controls: {
    play: "Воспроизвести",
    pause: "Пауза",
    stop: "Стоп",
    speed: "Скорость",
    speedPercent: (n: number) => `${formatNumber("ru", n)} %`,
    transpose: "Транспонировать",
    loop: "Цикл",
    repeatAll: "Повторять всё",
    loopTitles: {
      off: "Повторять по кругу такты, выбранные в настройках",
      measures: "Вместо этого повторять всю песню",
      song: "Не повторять",
    },
    more: "Другие инструменты",
    zoom: "Масштаб",
    fit: "Вписать",
    view: "Вид",
    leaveFullScreen: "Выйти из полноэкранного режима",
    expert: "Расширенные",
    expertTitles: {
      off: "Показать все инструменты",
      on: "Показать только основные инструменты",
    },
  },
  hotkeys: {
    none: "Нет",
  },
  hotkeyDialog: {
    pressKey: "Нажмите клавишу…",
    keyFor: (label: string) => `Клавиша для «${label}»`,
    clear: "Очистить",
    clearTitle: (label: string) => `Очистить клавишу для «${label}»`,
    resetAll: "Сбросить все клавиши",
    help: "Нажмите на клавишу в списке, затем нажмите нужную клавишу на клавиатуре. Клавиша Esc закрывает это окно.",
    off: "Сочетания клавиш выключены в настройках, поэтому сейчас эти клавиши ничего не делают.",
    open: "Изменить сочетания клавиш",
  },
  timeline: {
    position: "Позиция в песне",
  },
};
