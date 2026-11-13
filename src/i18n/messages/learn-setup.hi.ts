/** The first setup of *Learn Piano* in Hindi. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { learnSetup as en } from "./learn-setup.en";

export const learnSetup: Translation<typeof en> = {
  title: "पियानो सीखें में आपका स्वागत है",
  welcome: "नमस्ते! मैं आपका पियानो टीचर हूँ। बस तीन छोटे सवाल, फिर हम बजाना शुरू करेंगे।",
  mascot: "आपके पियानो टीचर, कॉरडरॉय की जैकेट पहने, शहद जैसे रंग के फ़र वाला एक वानर",
  close: "सेटअप छोड़ें",
  progress: "सेटअप",
  steps: ["आपका पियानो", "आपका अनुभव", "आपका रोज़ का लक्ष्य"],
  doneStep: "हो गया",
  next: "जारी रखें",
  device: {
    question: "किस पर बजाना है?",
    midi: { name: "MIDI कीबोर्ड", text: "USB से जुड़ा डिजिटल पियानो या कीबोर्ड।" },
    computer: { name: "कंप्यूटर कीबोर्ड", text: "अक्षरों वाले बटन नोट बजाते हैं।" },
    screen: { name: "स्क्रीन", text: "स्क्रीन पर बनी कुंजियाँ दबाएँ।" },
    noMidi: "इस ब्राउज़र में MIDI नहीं है। इसकी जगह कंप्यूटर कीबोर्ड या स्क्रीन पर बजाएँ।",
    check: "कोई भी कुंजी दबाएँ, ताकि हम जाँच सकें कि वह हमें सुनाई देती है।",
    checkMidi: "अपने MIDI कीबोर्ड की कोई भी कुंजी दबाएँ।",
    checkComputer: "Q, W या E जैसा कोई अक्षर वाला बटन दबाएँ।",
    checkScreen: "नीचे कोई कुंजी दबाएँ।",
    heard: (note: string) => `हमें सुनाई दिया: यह ${note} था।`,
    keys: "आज़माने के लिए एक पियानो",
    skip: "जाँच छोड़ें",
    marks: { next: "यह कुंजी आज़माएँ", correct: "सुनाई दिया", mistake: "सुनाई दिया" },
  },
  before: {
    question: "क्या आपने पहले कभी पियानो बजाया है?",
    never: "कभी नहीं",
    little: "थोड़ा-बहुत",
    yes: "हाँ, मुझे बजाना आता है",
    skipTests: "नक्शे पर हर दुनिया का एक आगे बढ़ने का टेस्ट है। इसे पास करें, और उस दुनिया के सारे पाठ एक साथ खुल जाएँगे।",
  },
  goal: {
    question: "रोज़ कितना?",
    lead: "लगातार दिन बढ़ाने के लिए हर दिन अपना लक्ष्य पूरा करें। तीन स्टार के साथ पूरे हुए नए पाठ पर 30 XP मिलते हैं।",
    label: "रोज़ का लक्ष्य",
    names: { "10": "आराम से", "20": "नियमित", "30": "जोश में", "50": "दमदार" },
    option: (xp: number, name: string) => `${formatNumber("hi", xp)} XP, ${name}`,
    start: "सीखना शुरू करें",
  },
};
