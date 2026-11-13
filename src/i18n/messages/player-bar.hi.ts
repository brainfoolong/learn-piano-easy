/** The player's bar in Hindi. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { playerBar as en } from "./player-bar.en";

export const playerBar: Translation<typeof en> = {
  actions: {
    play: "चलाएँ या रोकें",
    stop: "बंद करें और शुरुआत पर जाएँ",
    seekBack: "5 सेकंड पीछे जाएँ",
    seekForward: "5 सेकंड आगे जाएँ",
    toStart: "शुरुआत पर जाएँ",
    faster: "तेज़",
    slower: "धीमा",
    transposeUp: "ऊपर ट्रांसपोज़ करें",
    transposeDown: "नीचे ट्रांसपोज़ करें",
    loop: "चुने गए माप लूप में चलाएँ, फिर पूरा गाना, फिर बंद",
    loopStart: "इस माप से लूप",
    loopEnd: "इस माप तक लूप",
    zoomIn: "ज़ूम इन",
    zoomOut: "ज़ूम आउट",
    fit: "पूरा गाना दिखाएँ",
    viewLeft: "व्यू बाईं ओर ले जाएँ",
    viewRight: "व्यू दाईं ओर ले जाएँ",
    fullscreen: "फ़ुल स्क्रीन",
  },
  controls: {
    play: "चलाएँ",
    pause: "रोकें",
    stop: "बंद करें",
    speed: "स्पीड",
    transpose: "ट्रांसपोज़",
    loop: "लूप",
    repeatAll: "सब दोहराएँ",
    loopTitles: {
      off: "सेटिंग में चुने गए माप लूप में चलाएँ",
      measures: "इसकी जगह पूरा गाना दोहराएँ",
      song: "दोहराना बंद करें",
    },
    more: "और टूल",
    zoom: "ज़ूम",
    fit: "फ़िट",
    view: "व्यू",
    leaveFullScreen: "फ़ुल स्क्रीन से बाहर निकलें",
    expert: "एक्सपर्ट",
    expertTitles: {
      off: "सारे टूल दिखाएँ",
      on: "सिर्फ़ मुख्य टूल दिखाएँ",
    },
  },
  hotkeys: {
    none: "कोई नहीं",
  },
  hotkeyDialog: {
    pressKey: "कोई बटन दबाएँ…",
    keyFor: (label: string) => `${label} के लिए बटन`,
    clear: "हटाएँ",
    clearTitle: (label: string) => `${label} का बटन हटाएँ`,
    resetAll: "सारे बटन रीसेट करें",
    help: "किसी बटन को दबाएँ, फिर कीबोर्ड पर वह बटन दबाएँ जो आप चाहते हैं। Esc दबाने पर यह डायलॉग बंद हो जाता है।",
    off: "सेटिंग में कीबोर्ड शॉर्टकट बंद हैं, इसलिए ये बटन अभी कुछ नहीं करते।",
    open: "कीबोर्ड शॉर्टकट बदलें",
  },
  timeline: {
    position: "गाने में जगह",
  },
};
