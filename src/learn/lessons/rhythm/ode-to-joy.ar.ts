/** The boss of *Rhythm* in Arabic. */
import type { Translation } from "../../../i18n/translation";
import type { OdeToJoyTexts } from "./ode-to-joy.en";

export const odeToJoyAr: Translation<OdeToJoyTexts> = {
  title: "التحدي الكبير: \u2068Ode to Joy\u2069",
  steps: {
    intro: {
      text: "ينتهي هذا العالم بلحن مشهور. كل نغماته تقريبًا سوداوات، والأخيرة تدوم نبضتين. عدّ النبضات أثناء العزف.",
    },
    song: {
      text: "اعزف أول 4 موازير من \u2068Ode to Joy\u2069 باليد اليمنى. أبق النغمة الأخيرة مضغوطة نبضتين.",
    },
  },
};
