/** *Mary's first phrase* in Hindi. */
import type { Translation } from "../../../i18n/translation";
import type { MaryFirstPhraseTexts } from "./mary-first-phrase.en";

export const maryFirstPhraseHi: Translation<MaryFirstPhraseTexts> = {
  title: "Mary Had a Little Lamb का पहला टुकड़ा",
  steps: {
    "phrase-demo": {
      text: "Mary Had a Little Lamb का पहला आधा हिस्सा सुनें। यह कदमों, दोहराए गए नोटों और एक छलाँग से बना है। ये सब आप पहले से जानते हैं।",
    },
    "first-note-quiz": {
      text: "धुन किस नोट से शुरू होती है?",
    },
    "the-fingers": {
      text: "दायाँ हाथ C पोज़िशन में रखें, अँगूठा मध्य C पर। इस धुन में चार उँगलियाँ लगती हैं: 1 C पर, 2 D पर, 3 E पर और 5 G पर।",
    },
    "g-finger-quiz": {
      text: "G कौन-सी उँगली बजाती है?",
      answers: ["उँगली 2", "उँगली 3", "उँगली 5"],
    },
    "bars-one-two": {
      text: "शुरुआत बजाएँ: E, D, C, D, फिर तीन बार E। उँगलियाँ इस क्रम में चलेंगी: 3, 2, 1, 2, फिर 3, 3, 3।",
    },
    "bars-three-four": {
      text: "अब अगला हिस्सा: तीन बार D, फिर E, फिर दो बार G। उँगलियाँ इस क्रम में चलेंगी: 2, 2, 2, फिर 3, 5, 5।",
    },
    "whole-phrase": {
      text: "अब पूरा टुकड़ा बिना रुके बजाएँ: E D C D E E E, D D D, E G G।",
    },
    recap: {
      text: "बहुत बढ़िया। आपने एक असली गाने का पहला आधा हिस्सा बजा लिया।",
      points: [
        "यह धुन कदमों, दोहराए गए नोटों और एक छलाँग से बनी है।",
        "धुन छोटे-छोटे हिस्सों में सीखी जाती है, फिर उन्हें जोड़ा जाता है।",
        "उँगलियों के नंबर हाथ को बताते हैं कि कहाँ जाना है।",
      ],
    },
  },
};
