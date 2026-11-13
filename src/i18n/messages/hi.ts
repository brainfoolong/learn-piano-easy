/** The Hindi catalog. It is a translation of the English one, so a text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import { dataPage } from "./data.hi";
import { en, type Messages } from "./en";
import { learnBadges } from "./learn-badges.hi";
import { learnLesson } from "./learn-lesson.hi";
import { learnMap } from "./learn-map.hi";
import { learnProfile } from "./learn-profile.hi";
import { learnSetup } from "./learn-setup.hi";
import { playerBar } from "./player-bar.hi";
import { playerInput } from "./player-input.hi";
import { playerLibrary } from "./player-library.hi";
import { playerSettings } from "./player-settings.hi";
import { playerShell } from "./player-shell.hi";
import { playModes } from "./play-modes.hi";
import { sponsorPage } from "./sponsor.hi";

const SITE_NAME = en.siteName;

export const hi: Translation<Messages> = {
  noscript: `${SITE_NAME} चलाने के लिए JavaScript ज़रूरी है।`,
  pages: {
    home: {
      description: "बजाते-बजाते पियानो सीखें। गाइडेड कोर्स, 3D पियानो और आपका MIDI कीबोर्ड। मुफ़्त, ओपन सोर्स और ऑफ़लाइन।",
    },
    play: {
      title: "बस पियानो बजाएँ",
      description: "MIDI फ़ाइल खोलें, उसके नोट 3D पियानो की ओर उड़ते देखें, और अपने MIDI कीबोर्ड पर साथ-साथ बजाएँ।",
    },
    modes: {
      title: "बजाने के मोड",
      description: "बजाने के तैयार तरीके: पॉइंट और चिंगारियों वाला गेम, या ऐसा गाना जो आपका इंतज़ार करे और हर नोट का नाम दिखाए।",
    },
    learn: {
      title: "पियानो सीखें",
      description: "गेम जैसा गाइडेड पियानो कोर्स, एक बार में एक छोटा कदम।",
    },
    profile: {
      title: "आपकी प्रगति",
      description: "आपका लेवल, आपके बैज और आपने कितना बजाया है।",
    },
    about: {
      title: "परिचय",
      description: "Learn Piano Easy क्या है, और इसमें शामिल हर चीज़ के लाइसेंस।",
    },
    data: {
      title: "आपका डेटा",
      description: "इस ब्राउज़र में रखा आपका सब कुछ एक फ़ाइल में सेव करें, और किसी भी डिवाइस पर वापस लाएँ।",
    },
    sponsor: {
      title: "स्पॉन्सर",
      description: "Learn Piano Easy मुफ़्त है और इसे एक ही व्यक्ति बनाता है। यहाँ जानें कि आप इसे बढ़ाने में कैसे मदद कर सकते हैं।",
    },
    imprint: {
      title: "कानूनी जानकारी",
      description: "Learn Piano Easy कौन चलाता है, पते और संपर्क के साथ।",
    },
    privacy: {
      title: "प्राइवेसी पॉलिसी",
      description: "Learn Piano Easy आपके डिवाइस पर क्या रखता है, क्या गिनता है, और यह गिनती कैसे बंद करें।",
    },
    design: {
      title: "डिज़ाइन सिस्टम",
      description: "साइट का हर कंपोनेंट, उसकी हर स्थिति में।",
    },
    lesson: {
      title: "पाठ",
      description: "पियानो सीखें कोर्स का एक छोटा पाठ, एक बार में एक चरण।",
    },
  },
  lessonPage: {
    description: (title: string, world: string, intro: string) => `${title}। “${world}” दुनिया का एक मुफ़्त पियानो पाठ। ${intro}`,
  },
  topBar: {
    home: `${SITE_NAME}, होम`,
    nav: "मुख्य",
    learn: "पियानो सीखें",
    play: "बस पियानो बजाएँ",
    modes: "बजाने के मोड",
    menu: "मेनू",
    language: "भाषा",
    theme: "थीम",
    themeSystem: "सिस्टम जैसा",
    themeLight: "लाइट",
    themeDark: "डार्क",
  },
  landing: {
    hero: {
      eyebrow: "मुफ़्त और ओपन सोर्स",
      lead: "नोटों को कुंजियों पर गिरते देखें, फिर उन्हें खुद बजाएँ, एक बार में एक गाना।",
      start: "सीखना शुरू करें",
      play: "बस बजाएँ",
      proofs: ["कोई अकाउंट नहीं", "ऑफ़लाइन चलता है", "कोई विज्ञापन नहीं"],
      mascot: "हमारे पियानो टीचर, शहद जैसे रंग के फ़र वाला एक वानर, धूप भरे कमरे में अपराइट पियानो बजा रहे हैं",
      greeting: "नमस्ते! मैं आपका पियानो टीचर हूँ। चलिए, बजाना शुरू करें?",
      demo: {
        eyebrow: "यहीं आज़माएँ",
        heading: "नोट गिरते हैं, आप बजाते हैं",
        text: "हर गाना ऐसा ही दिखता है। हर नोट अपनी कुंजी पर गिरता है, और उसके पहुँचते ही आप वह कुंजी दबाएँ।",
      },
      piano: "प्लेयर, जिसकी कुंजियों पर Twinkle, Twinkle, Little Star के नोट गिर रहे हैं",
      hint: "गाना चलते ही उसकी कुंजियाँ दबाकर साथ बजाएँ।",
      playSong: "चलाएँ",
      stopSong: "बंद करें",
    },
    twoWays: {
      eyebrow: "बजाने के दो तरीके",
      heading: "कदम-दर-कदम सीखें, या बस बजाएँ",
      lead: "आज जो आपके मन का हो, वह चुनें। आप कभी भी बदल सकते हैं।",
      learn: {
        tag: "गाइडेड कोर्स",
        title: "पियानो सीखें",
        text: "छोटे-छोटे चरणों वाला गाइडेड कोर्स। हर चरण एक हुनर सिखाता है, और एक गाना उसे काम में लाता है।",
        action: "सीखना शुरू करें",
        picture: "कोर्स का नक्शा, जिसमें पहला पाठ पूरा है और अगला खुला है",
      },
      play: {
        tag: "कोई भी गाना",
        title: "बस पियानो बजाएँ",
        text: "कोई भी गाना खोलें, उसके नोट 3D पियानो की ओर उड़ते देखें, और साथ-साथ बजाएँ।",
        action: "बस बजाएँ",
        picture: "3D पियानो, जिसकी कुंजियों पर नोट गिर रहे हैं",
      },
    },
    howItWorks: {
      eyebrow: "सीखना कैसे होता है",
      heading: "चार कदम, बार-बार",
      lead: "हर पाठ एक ही छोटे क्रम पर चलता है, इसलिए आपको हमेशा पता रहता है कि आगे क्या है।",
      steps: [
        { title: "एक हुनर सीखें", text: "एक छोटा पाठ एक नई चीज़ दिखाता है, जैसे कोई नोट, कोई लय या हाथ की कोई पोज़िशन।" },
        { title: "अभ्यास करें", text: "इसे अपने कीबोर्ड पर बजाएँ। पियानो आपका इंतज़ार करता है और हर सही नोट पर निशान लगाता है।" },
        { title: "असली गाना बजाएँ", text: "लाइब्रेरी के किसी गाने में यह हुनर आज़माएँ, अपने लेवल के हिसाब से।" },
        { title: "बैज कमाएँ", text: "हर पाठ से XP मिलता है, और हर पूरी दुनिया पर एक बैज।" },
      ],
    },
    rarities: {
      eyebrow: "एक धुन, चार लेवल",
      heading: "हर गाना आपके साथ बढ़ता है",
      lead: "हमारा हर गाना चार वर्शन में आता है। इनके बीच बदलें और देखें कि Ode to Joy कैसे बढ़ता है।",
      control: "वर्शन",
      piano: "Ode to Joy बजाता हुआ पियानो",
      names: { common: "शुरुआती", rare: "आसान", epic: "मध्यम", legendary: "कठिन" },
      taglines: {
        common: "पहले कुछ दिन। हाथ की एक पोज़िशन, धीमे नोट और आपका इंतज़ार करता बेस।",
        rare: "पहले कुछ हफ़्ते। एट्थ नोट, आसान कॉर्ड और चलता हुआ बेस।",
        epic: "पहले कुछ महीने। ब्रोकन कॉर्ड, और नीचे से निकलता अँगूठा।",
        legendary: "करीब एक साल बाद। दोनों हाथ व्यस्त, तेज़ और एक-दूसरे से आज़ाद।",
      },
    },
    devices: {
      eyebrow: "जो है, उसी पर बजाएँ",
      heading: "पियानो नहीं है? फिर भी शुरू करें",
      lead: "इनमें से हर एक पर नोट बजते हैं। असली कीबोर्ड सबसे अच्छा लगता है, और बाकी से आप आज ही शुरू कर सकते हैं।",
      ways: [
        { title: "MIDI कीबोर्ड", text: "इसे USB से जोड़ें और एक बार MIDI की अनुमति दें। उसके बाद साइट इसे खुद ढूँढ लेती है।" },
        { title: "टचस्क्रीन", text: "स्क्रीन पर कुंजियाँ दबाएँ, जितनी चाहें उतनी उँगलियों से।" },
        { title: "आपका कंप्यूटर कीबोर्ड", text: "अक्षरों और अंकों के बटन दो ऑक्टेव बजाते हैं, और आप किसी भी नोट को दूसरे बटन पर ले जा सकते हैं।" },
      ],
      piano: "आज़माने के लिए एक छोटा पियानो",
      start: "बजाने के लिए छोटा पियानो लोड करें",
      hint: "कोई कुंजी दबाकर सुनें।",
    },
    free: {
      eyebrow: "मुफ़्त, और आपका अपना",
      heading: "न कोई पैसा, न कोई साइन-अप",
      lead: "यह साइट पियानो से प्यार करने वाले एक व्यक्ति का तोहफ़ा है। यह मुफ़्त ही रहेगी।",
      promises: [
        { title: "मुफ़्त, बिना अकाउंट", text: "साइट खोलें और बजाएँ। न साइन-अप करना है, न कुछ खरीदना है।" },
        { title: "ओपन सोर्स", text: "कोड की हर लाइन MIT लाइसेंस के तहत सबके लिए खुली है। पढ़ें, बदलें, शेयर करें।" },
        { title: "ऑफ़लाइन चलता है", text: "एक बार लोड होने के बाद साइट बिना नेटवर्क के चलती है। आपके खोले हुए गाने भी ऑफ़लाइन चलते हैं।" },
        { title: "न विज्ञापन, न प्रोफ़ाइल", text: "आप जो भी बजाते हैं, वह आपके डिवाइस से बाहर नहीं जाता। हम सिर्फ़ पेज विज़िट गिनते हैं, बिना कुकी के, और कुछ नहीं बेचते।" },
      ],
    },
    questions: {
      eyebrow: "सवाल",
      heading: "लोग सबसे पहले क्या पूछते हैं",
      items: [
        {
          question: "क्या पियानो होना ज़रूरी है?",
          answer: "नहीं। MIDI कीबोर्ड सबसे अच्छा है, पर टचस्क्रीन या आपका कंप्यूटर कीबोर्ड भी हर नोट बजाता है।",
        },
        {
          question: "यह किन ब्राउज़र में चलता है?",
          answer: "आज का कोई भी ब्राउज़र गाने चलाता है। MIDI कीबोर्ड के लिए Web MIDI चाहिए, जो Chrome, Edge और Firefox में है, पर Safari में नहीं।",
        },
        {
          question: "क्या अकाउंट बनाना ज़रूरी है?",
          answer: "नहीं। साइन-अप करने को कुछ नहीं है, और आपकी सेटिंग इसी ब्राउज़र में रहती हैं।",
        },
        {
          question: "क्या यह ऑफ़लाइन चलता है?",
          answer: "हाँ। ऑनलाइन रहते हुए साइट एक बार खोलें, फिर यह ऑफ़लाइन चलती है। कोई गाना एक बार खोलने के बाद ऑफ़लाइन भी चलता है।",
        },
        {
          question: "क्या अपने गाने भी बजाए जा सकते हैं?",
          answer: "हाँ। बस पियानो बजाएँ वाले हिस्से में कोई भी MIDI या MusicXML फ़ाइल खोलें। वह आपके डिवाइस पर ही पढ़ी जाती है, कभी अपलोड नहीं होती।",
        },
        {
          question: "लाइब्रेरी में कौन-से गाने हैं?",
          answer: "जानी-मानी धुनों के हमारे अपने अरेंजमेंट, हर एक चार वर्शन में, हमारी कुछ अपनी रचनाएँ, और खुले संग्रहों से क्लासिकल रचनाएँ।",
        },
        {
          question: "क्या यह सच में मुफ़्त है?",
          answer: "हाँ। यह MIT लाइसेंस के तहत ओपन सोर्स है। न विज्ञापन हैं, न कोई पेड प्लान।",
        },
      ],
    },
    lastCall: {
      heading: "जब आप तैयार हों, तब शुरू करें",
      lead: "शुरुआत का एक रास्ता चुनें। आप कभी भी बदल सकते हैं।",
    },
  },
  footer: {
    tagline: "बजाते-बजाते पियानो सीखें। मुफ़्त, ओपन सोर्स और ऑफ़लाइन।",
    nav: "साइट",
    explore: "देखें",
    about: "परिचय और लाइसेंस",
    legal: "कानूनी",
    language: "यह पेज इस भाषा में",
    license: "MIT लाइसेंस के तहत ओपन सोर्स।",
  },
  counts: {
    badges: (n: number) => `${formatNumber("hi", n)} बैज`,
    minutesPlayed: (n: number) => `${formatNumber("hi", n)} मिनट का अभ्यास`,
    xp: (n: number) => `${formatNumber("hi", n)} XP`,
  },
  lesson: learnLesson,
  badges: learnBadges,
  map: learnMap,
  profile: learnProfile,
  setup: learnSetup,
  data: dataPage,
  sponsor: sponsorPage,
  playModes,
  player: { shell: playerShell, bar: playerBar, library: playerLibrary, input: playerInput, settings: playerSettings },
  ui: {
    pianoKeys: {
      noWebgl: "यह ब्राउज़र पियानो नहीं दिखा सकता। इसकी सेटिंग में हार्डवेयर एक्सेलरेशन चालू करें, या अपने MIDI या कंप्यूटर कीबोर्ड पर बजाएँ।",
    },
  },
};
