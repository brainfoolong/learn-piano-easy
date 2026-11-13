/** The lesson view of *Learn Piano* in Hindi. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { learnLesson as en } from "./learn-lesson.en";

export const learnLesson: Translation<typeof en> = {
  stepOf: (step: number, count: number) => `${formatNumber("hi", count)} में से चरण ${formatNumber("hi", step)}`,
  leave: "पाठ से बाहर निकलें",
  leaveDialog: {
    title: "क्या पाठ से बाहर निकलना है?",
    body: "इस पाठ की प्रगति तभी सेव होती है, जब पाठ पूरा हो जाए।",
    stay: "सीखना जारी रखें",
    leave: "बाहर निकलें",
    close: "बंद करें",
  },
  lacks: {
    touch: "मेरा कीबोर्ड ज़ोर से और हल्के से नहीं बजा सकता",
    pedal: "मेरे कीबोर्ड में पेडल नहीं है",
  },
  loading: "पाठ लोड हो रहा है…",
  missing: "यह पाठ मौजूद नहीं है।",
  backToCourse: "कोर्स पर वापस जाएँ",
  band: {
    continue: "जारी रखें",
    right: "सही!",
    tryAgain: "बस थोड़ा-सा चूक गए। फिर से कोशिश करें।",
  },
  demo: {
    play: "सुनें",
    playAgain: "फिर से सुनें",
    skip: "छोड़ें",
    piano: "उदाहरण बजाता हुआ पियानो",
    playing: "बज रहा है",
    slow: "धीमा",
    side: "साइड व्यू",
  },
  quiz: {
    answers: "जवाब",
    wrong: "बस थोड़ा-सा चूक गए। कोई दूसरा जवाब आज़माएँ।",
    hint: "चमकता हुआ जवाब सही है।",
  },
  findKey: {
    piano: "पियानो। इस चरण में बताई गई कुंजी दबाएँ।",
    marks: { next: "यह कुंजी", correct: "सही", mistake: "यह नहीं" },
    wrong: "यह कोई दूसरी कुंजी है। फिर से कोशिश करें।",
    hint: "चमकती हुई कुंजी ही सही है।",
    timeUp: "समय खत्म।",
    secondsLeft: (seconds: number) => `${seconds} सेकंड`,
  },
  playNotes: {
    piano: "पियानो। धुन का टुकड़ा क्रम से बजाएँ।",
    marks: { next: "अब इसे बजाएँ", correct: "बज गया", mistake: "यह नहीं" },
    wrong: "यह कोई दूसरा नोट है। फिर से कोशिश करें।",
    hint: (note: string) => `अगला नोट ${note} है।`,
    hintChord: (...notes: string[]) => `अब ${notes.slice(0, -1).join(", ")} और ${notes.at(-1)} एक साथ बजाएँ।`,
    expression: {
      "too-loud": "कुंजी सही है, पर बहुत ज़ोर से बजी। इसे हल्के से बजाएँ।",
      "too-soft": "कुंजी सही है, पर बहुत हल्के से बजी। इसे ज़ोर से बजाएँ।",
      "pedal-up": "कुंजी सही है। इसे बजाते समय पेडल दबाए रखें।",
      "pedal-down": "कुंजी सही है। इसे बजाने से पहले पेडल छोड़ें।",
    },
  },
  listen: {
    question: (n: number, count: number) => `${formatNumber("hi", count)} में से जोड़ी ${formatNumber("hi", n)}`,
    playAgain: "फिर से सुनें",
    group: "क्या दूसरा नोट ऊपर है, नीचे है या वैसा ही है?",
    answers: { higher: "ऊपर", lower: "नीचे", same: "वैसा ही" },
    wrong: "बस थोड़ा-सा चूक गए। फिर से सुनें और कोई दूसरा जवाब आज़माएँ।",
    hint: "चमकता हुआ जवाब सही है।",
    roundAgain: (right: number, asked: number) =>
      `${formatNumber("hi", asked)} में से ${formatNumber("hi", right)} जवाब सही थे। चलिए, एक और राउंड खेलते हैं।`,
  },
  readNote: {
    staff: { treble: "ट्रेबल स्टाफ़ पर एक नोट", bass: "बेस स्टाफ़ पर एक नोट" },
    count: (n: number, total: number) => `${formatNumber("hi", total)} में से नोट ${formatNumber("hi", n)}`,
    answers: "नोटों के नाम",
    piano: "पियानो। स्टाफ़ पर लिखा नोट बजाएँ।",
    marks: { next: "यह कुंजी", correct: "सही", mistake: "यह नहीं" },
    wrongName: "यह कोई दूसरा नोट है। फिर से देखें।",
    wrongKey: "यह कोई दूसरी कुंजी है। फिर से कोशिश करें।",
    hintName: "चमकता हुआ नाम सही है।",
    hintKey: "चमकती हुई कुंजी ही सही है।",
    again: "कुछ जवाब अभी सही नहीं हुए। चलिए, इन्हें एक बार और देखते हैं।",
  },
  rhythmTap: {
    start: "शुरू करें",
    listen: "सुनें: गिनती के लिए एक माप।",
    tap: "अब हर टिक के साथ कोई भी कुंजी दबाएँ।",
    piano: "टैप पैड। बीट पर कोई भी कुंजी दबाएँ।",
    marks: { next: "यहाँ दबाएँ", correct: "बीट पर", mistake: "बीट से हटकर" },
    short: (hits: number, beats: number) =>
      `${formatNumber("hi", beats)} में से ${formatNumber("hi", hits)} बीट पर कुंजी दबी। फिर से कोशिश करें।`,
    hint: "टिक सुनते ही दबाएँ। बिंदु हर बीट पर चमकते हैं।",
    play: "अब हर नोट उसके टिक पर बजाएँ।",
    phrasePiano: "कुंजियाँ। धुन का टुकड़ा टिक के साथ लय में बजाएँ।",
    shortNotes: (hits: number, notes: number) =>
      `${formatNumber("hi", notes)} में से ${formatNumber("hi", hits)} नोट समय पर बजे। फिर से कोशिश करें।`,
    restSounded: "रेस्ट में कोई कुंजी बज गई। वहाँ उँगली उठाएँ, ताकि कुछ न बजे।",
    phraseHint: "हर नोट उसके टिक पर बजाएँ, और रेस्ट से पहले कुंजी छोड़ें। बिंदु हर बीट पर चमकते हैं।",
    pattern: {
      taps: (countIn: number, taps: number) =>
        `${formatNumber("hi", countIn)} बीट तक गिनें। फिर ${formatNumber("hi", taps)} बीट पर दबाएँ।`,
      phrase: (countIn: number, ...parts: string[]) =>
        `${formatNumber("hi", countIn)} बीट तक गिनें। फिर क्रम से बजाएँ${parts.length > 0 ? `: ${parts.join(", ")}` : ""}।`,
      held: (note: string, beats: number) => `${note}, ${formatNumber("hi", beats)} बीट तक दबाकर`,
      rest: (beats: number) => (beats === 1 ? "रेस्ट" : `${formatNumber("hi", beats)} बीट का रेस्ट`),
    },
  },
  song: {
    play: "प्लेयर में बजाएँ",
    goal: (percent: number) => `इसे ${formatNumber("hi", percent)}% सही नोटों के साथ बजाएँ।`,
    notYet: (percent: number) =>
      `गाना आपका इंतज़ार कर रहा है। जब चाहें इसे फिर से बजाएँ, और ${formatNumber("hi", percent)}% का लक्ष्य रखें।`,
    played: (percent: number) => `आपने इसे ${formatNumber("hi", percent)}% सही नोटों के साथ बजाया।`,
  },
  recap: {
    heading: "आपने क्या सीखा",
  },
  end: {
    heading: "पाठ पूरा हुआ",
    stars: (n: number) => `${formatNumber("hi", 3)} में से ${formatNumber("hi", n)} स्टार`,
    again: "फिर से बजाएँ",
    saving: "आपकी प्रगति सेव हो रही है…",
    saved: "इस डिवाइस पर सेव हो गया।",
    unsaved: "यह ब्राउज़र कुछ सेव नहीं रखता, इसलिए यह नतीजा टैब बंद होने तक ही रहेगा।",
    failed: "आपकी प्रगति सेव नहीं की जा सकी।",
    retry: "फिर से कोशिश करें",
    level: (level: number, toNext: number) =>
      `लेवल ${formatNumber("hi", level)}: लेवल ${formatNumber("hi", level + 1)} तक ${formatNumber("hi", toNext)} XP बाकी`,
    skipOpened: (world: string) => `“${world}” के सारे पाठ अब खुल गए हैं।`,
    skipShort: (stars: number) => `${formatNumber("hi", stars)} स्टार मिलने पर यह दुनिया खुलती है। जब चाहें, फिर से कोशिश करें।`,
  },
  moment: {
    continue: "जारी रखें",
    level: {
      heading: "लेवल अप!",
      name: (level: number) => `लेवल ${formatNumber("hi", level)}`,
      text: "हर पाठ आपको एक कदम आगे ले जाता है। ऐसे ही बढ़ते रहिए!",
    },
    badge: { heading: "नया बैज!" },
  },
};
