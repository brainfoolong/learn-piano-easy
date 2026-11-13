/** The world map of *Learn Piano* in Hindi. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { learnMap as en } from "./learn-map.en";

export const learnMap: Translation<typeof en> = {
  lead: "रास्ते पर एक-एक पाठ करके आगे बढ़ें। हर दुनिया के आखिर में एक बड़ी चुनौती है।",
  loading: "कोर्स लोड हो रहा है…",
  continue: "जारी रखें",
  nextUp: "अगला पाठ",
  world: (n: number) => `दुनिया ${formatNumber("hi", n)}`,
  progress: (done: number, all: number) => `${formatNumber("hi", all)} में से ${formatNumber("hi", done)} पाठ`,
  locked: "इसे खोलने के लिए पिछली दुनिया की बड़ी चुनौती जीतें, या इसका आगे बढ़ने का टेस्ट पास करें।",
  beaten: "बड़ी चुनौती जीत ली",
  node: {
    locked: (name: string) => `${name}, बंद`,
    open: (name: string) => `${name}, खुला`,
    done: (name: string, stars: number) => `${name}, 3 में से ${formatNumber("hi", stars)} स्टार`,
  },
  medal: (world: string, earned: boolean) => `“${world}” का बैज, ${earned ? "मिल गया" : "अभी नहीं मिला"}`,
  skipTest: {
    title: (world: string) => `आगे बढ़ने का टेस्ट: ${world}`,
    text: "क्या आपको यह पहले से आता है? आगे बढ़ने का टेस्ट पास करें, और यहाँ के सारे पाठ खुल जाएँगे।",
    action: "आगे बढ़ने का टेस्ट दें",
  },
  bar: {
    label: "आपकी प्रगति",
    streak: (days: number) => `लगातार ${formatNumber("hi", days)} दिन`,
    level: (level: number) => `लेवल ${formatNumber("hi", level)}`,
    today: "आज",
    todayGoal: (xp: number, goal: number) => `आज: ${formatNumber("hi", goal)} में से ${formatNumber("hi", xp)} XP`,
    days: (days: number) => `${formatNumber("hi", days)} दिन`,
  },
};
