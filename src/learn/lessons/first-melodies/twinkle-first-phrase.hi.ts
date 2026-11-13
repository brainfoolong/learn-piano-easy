/** *Twinkle's first phrase* in Hindi. */
import type { Translation } from "../../../i18n/translation";
import type { TwinkleFirstPhraseTexts } from "./twinkle-first-phrase.en";

export const twinkleFirstPhraseHi: Translation<TwinkleFirstPhraseTexts> = {
  title: "Twinkle Twinkle Little Star का पहला टुकड़ा",
  steps: {
    "phrase-demo": {
      text: "Twinkle Twinkle Little Star का पहला टुकड़ा सुनें। इसका एक नोट C पोज़िशन से बाहर है।",
    },
    "one-key-past": {
      text: "वह नोट A है, G के ठीक बाद वाली सफ़ेद कुंजी। हाथ C पोज़िशन में ही रहता है। A बजाने के लिए छोटी उँगली को फैलाकर एक कुंजी दाईं ओर ले जाएँ।",
    },
    "find-a": {
      text: "अपना दायाँ हाथ C पोज़िशन में रखें। छोटी उँगली को फैलाकर G से आगे ले जाएँ और A दबाएँ।",
    },
    "leap-quiz": {
      text: "धुन C से शुरू होती है, फिर ऊपर की ओर एक बड़ी छलाँग लगाती है। वह किस नोट पर पहुँचती है?",
    },
    "climb-up": {
      text: "पहला हिस्सा बजाएँ: दो बार C, दो बार G, दो बार A, फिर G। अँगूठा दोनों C बजाता है, और बाकी सब छोटी उँगली बजाती है। वह फैलकर A तक जाती है और फिर वापस आती है।",
    },
    "walk-down": {
      text: "अब दूसरा हिस्सा एक-एक कदम नीचे उतरता है: F, E, D और C, हर नोट दो बार। उँगलियाँ इस क्रम में चलेंगी: 4, 3, 2 और 1।",
    },
    "whole-phrase": {
      text: "दोनों हिस्सों को जोड़ें। पूरा टुकड़ा बिना रुके बजाएँ।",
    },
    recap: {
      text: "बहुत बढ़िया। पहली बार आपकी उँगली पाँच कुंजियों से आगे पहुँची।",
      points: [
        "धुन एक नोट के लिए C पोज़िशन से बाहर जा सकती है।",
        "छोटी उँगली फैलकर G से A तक पहुँचती है।",
        "धुन बड़ी छलाँग भी लगा सकती है, जैसे C से ऊपर G तक।",
      ],
    },
  },
};
