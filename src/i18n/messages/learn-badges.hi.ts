/** The badges of *Learn Piano* in Hindi. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { learnBadges as en } from "./learn-badges.en";

export const learnBadges: Translation<typeof en> = {
  cheer: "आपके पियानो टीचर आपका हौसला बढ़ा रहे हैं",
  fixed: {
    "first-note": { name: "पहला नोट", description: "किसी पाठ में अपना पहला नोट बजाएँ।" },
    "first-lesson": { name: "पहला पाठ", description: "अपना पहला पाठ पूरा करें।" },
    "first-three-stars": { name: "तीन स्टार", description: "कोई पाठ तीन स्टार के साथ पूरा करें।" },
    "three-stars-ten": { name: "स्टारों का खज़ाना", description: "दस पाठों में तीन-तीन स्टार पाएँ।" },
    "first-daily-goal": { name: "लक्ष्य पूरा!", description: "पहली बार अपना रोज़ का लक्ष्य पूरा करें।" },
    "streak-3": { name: "लगातार तीन दिन", description: "लगातार तीन दिन अपना रोज़ का लक्ष्य पूरा करें।" },
    "streak-7": { name: "पूरा एक हफ़्ता", description: "लगातार सात दिन अपना रोज़ का लक्ष्य पूरा करें।" },
    "streak-30": { name: "पूरा एक महीना", description: "लगातार तीस दिन अपना रोज़ का लक्ष्य पूरा करें।" },
    "streak-100": { name: "दिनों का शतक", description: "लगातार सौ दिन अपना रोज़ का लक्ष्य पूरा करें।" },
    "notes-1000": { name: "एक हज़ार नोट", description: "पाठों में एक हज़ार नोट बजाएँ।" },
    "notes-10000": { name: "दस हज़ार नोट", description: "पाठों में दस हज़ार नोट बजाएँ।" },
    "rhythm-ace": { name: "लय में माहिर", description: "लय वाला कोई चरण पहली ही कोशिश में पार करें।" },
    "sight-reader": { name: "नोट पढ़ने में माहिर", description: "बिना गलती के लगातार दस नोट पढ़ें।" },
    "early-bird": { name: "सुबह-सवेरे", description: "सुबह 8 बजे से पहले कोई पाठ पूरा करें।" },
    "night-owl": { name: "रात का उल्लू", description: "रात 10 बजे या उसके बाद कोई पाठ पूरा करें।" },
    comeback: { name: "फिर से स्वागत है", description: "एक हफ़्ते दूर रहने के बाद लौटकर कोई पाठ करें।" },
    legendary: { name: "कठिन गाना", description: "बस पियानो बजाएँ वाले हिस्से में हमारे किसी गाने का ‘कठिन’ वर्शन शुरू से आखिर तक बजाएँ।" },
  },
  world: {
    name: (world: string) => `“${world}” में महारत`,
    description: (world: string) => `“${world}” की बड़ी चुनौती जीतें।`,
  },
};
