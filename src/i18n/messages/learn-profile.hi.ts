/** The profile of *Learn Piano* in Hindi. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { learnProfile as en } from "./learn-profile.en";

const n = (value: number) => formatNumber("hi", value);
const days = (value: number) => `${n(value)} दिन`;

export const learnProfile: Translation<typeof en> = {
  loading: "आपकी प्रगति लोड हो रही है…",
  level: {
    heading: "लेवल",
    name: (level: number) => `लेवल ${n(level)}`,
    total: (xp: number) => `कुल ${n(xp)} XP`,
    toNext: (level: number) => `लेवल ${n(level)} तक`,
  },
  streak: {
    heading: "लगातार दिन",
    current: (count: number) => days(count),
    currentLabel: "अभी लगातार",
    best: (count: number) => `सबसे ज़्यादा: ${days(count)}`,
    today: (xp: number, goal: number) =>
      xp >= goal ? `आज: ${n(xp)} XP, ${n(goal)} का लक्ष्य पूरा` : `आज: ${n(goal)} में से ${n(xp)} XP`,
  },
  calendar: {
    heading: "पिछले आठ हफ़्ते",
    label: (met: number, played: number) =>
      `पिछले आठ हफ़्तों में ${days(met)} रोज़ का लक्ष्य पूरा हुआ, और ${days(played)} कोई पाठ हुआ।`,
    met: "लक्ष्य पूरा",
    played: "पाठ हुआ",
    none: "कोई पाठ नहीं",
  },
  stats: {
    heading: "आँकड़े",
    lessons: "पूरे किए पाठ",
    threeStars: "तीन स्टार वाले पाठ",
    days: "अभ्यास के दिन",
    badges: "मिले हुए बैज",
  },
  badges: {
    heading: "बैज",
    lead: (earned: number, all: number) => `${n(all)} में से ${n(earned)} मिले`,
    earned: (name: string) => `${name}, मिल गया`,
    locked: (name: string) => `${name}, अभी नहीं मिला`,
  },
  choices: {
    heading: "आपकी सेटिंग",
    goal: "रोज़ का लक्ष्य",
    goalHelp: "लगातार दिन बनाए रखने के लिए रोज़ इतने XP चाहिए।",
    sounds: "इनाम की आवाज़ें",
    soundsHelp: "चरण पार करने, स्टार, नए लेवल और बैज पर छोटी-सी धुन बजती है। पियानो की आवाज़ हमेशा आती है।",
  },
  data: {
    heading: "आपका डेटा",
    lead: "आपकी प्रगति इसी ब्राउज़र में रहती है। “आपका डेटा” पेज इसे बाकी सब के साथ एक फ़ाइल में सेव करता है, और वापस भी लाता है।",
    open: "बैकअप लें या वापस लाएँ",
    reset: "सारी प्रगति रीसेट करें",
    failed: "ब्राउज़र में सेव नहीं किया जा सका। कुछ नहीं बदला।",
    resetDone: "आपकी प्रगति रीसेट हो गई। बैकअप फ़ाइल में पहले का सब कुछ सुरक्षित है।",
    close: "बंद करें",
    cancel: "मेरी प्रगति रहने दें",
    ask: {
      title: "क्या सारी प्रगति रीसेट करें?",
      text: "इससे इस ब्राउज़र से हर पाठ, स्टार, XP और बैज हट जाएगा। आपकी सेटिंग बनी रहेंगी।",
      next: "जारी रखें",
    },
    askAgain: {
      title: "क्या आप पक्का ऐसा करना चाहते हैं?",
      text: "पहले एक बैकअप फ़ाइल सेव होती है, ताकि आप बाद में सब कुछ वापस ला सकें। फिर आपकी प्रगति शुरू से शुरू होती है।",
      confirm: "मेरी प्रगति रीसेट करें",
    },
  },
};
