/** The boss of *Scales and keys* in Russian. */
import type { Translation } from "../../../i18n/translation";
import type { JingleBellsTexts } from "./jingle-bells.en";

export const jingleBellsRu: Translation<JingleBellsTexts> = {
  title: "Финальное испытание: Jingle Bells двумя руками",
  steps: {
    intro: {
      text: "Песня Jingle Bells написана в тональности до мажор, поэтому ключевых знаков нет. Мелодия ходит вверх и вниз по ступеням гаммы до мажор. Левая рука в каждом такте держит одну низкую ноту или квинту.",
    },
    song: {
      text: "Сыграйте Jingle Bells двумя руками в полном темпе. Держите правую руку в позиции до, а каждую басовую ноту держите весь такт.",
    },
  },
};
