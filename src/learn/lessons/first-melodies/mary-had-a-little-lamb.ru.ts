/** The boss of *First melodies* in Russian. */
import type { Translation } from "../../../i18n/translation";
import type { MaryTexts } from "./mary-had-a-little-lamb.en";

export const maryRu: Translation<MaryTexts> = {
  title: "Финальное испытание: Mary Had a Little Lamb",
  steps: {
    intro: {
      text: "Этот мир заканчивается целой песней. Вы играете её в проигрывателе, и он ждёт каждую вашу ноту.",
    },
    song: {
      text: "Сыграйте все восемь тактов песни Mary Had a Little Lamb правой рукой.",
    },
  },
};
