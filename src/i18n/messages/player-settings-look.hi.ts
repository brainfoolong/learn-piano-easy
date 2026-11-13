/** The player's settings from the notes to the offline files, in Hindi. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { playerSettingsLook as en } from "./player-settings-look.en";

export const playerSettingsLook: Translation<typeof en> = {
  // Notes
  showHitKeys: {
    label: "बजते नोट चमकाएँ",
    help: "नोट बजते समय अपने रंग में चमकता है।",
  },
  noteWidth: {
    label: "कुंजी के मुकाबले नोट की चौड़ाई (%)",
    help: "हर गिरता नोट कितना चौड़ा हो, उसकी कुंजी के हिसाब से।",
  },
  roundedNotes: {
    label: "गोल कोनों वाले नोट",
    help: "गिरते नोटों के कोने गोल कर देता है।",
  },
  noteBorderRadius: {
    label: "कोनों की गोलाई (%)",
    help: "नोट के कोने कितने गोल हों।",
  },
  minNoteHeight: {
    label: "नोट की सबसे छोटी लंबाई",
    help: "कुंजी की चौड़ाई में, ताकि बहुत छोटा नोट भी दिखे।",
  },
  strokeNotes: {
    label: "किनारे की चमक",
    help: "हर नोट के चारों ओर उसी के रंग की रोशनी की किनारी।",
  },
  strokeNotesWidth: {
    label: "किनारे की चमक की तेज़ी",
    help: "हर नोट के चारों ओर की रोशनी कितनी तेज़ हो।",
  },
  noteEndedShrink: {
    label: "बजे नोट अपनी कुंजी में सिमटें",
    help: "नोट बजते समय अपनी कुंजी में समा जाता है। बंद होने पर वह कुंजियों से आगे निकल जाता है।",
  },
  playedNoteFalloffSpeed: {
    label: "बजे नोट कुंजियों से कितना आगे जाएँ",
    help: "कुंजी की चौड़ाई में, जब बजे नोट सिमटते नहीं।",
  },
  showSustainedNotes: {
    label: "दिखाएँ कि पेडल नोट को कितनी देर थामता है",
    help: "पेडल जिस नोट को थामता है, उससे एक पतली पूँछ आगे चलती है।",
  },
  sustainedNotesOpacity: {
    label: "पेडल की पूँछ की चमक (%)",
    help: "नोटों के पीछे पेडल की पूँछें कितनी साफ़ दिखें।",
  },

  // Lanes
  bgCol1: {
    label: "लेन का रंग",
    help: "सफ़ेद कुंजियों के ऊपर की लेन का रंग।",
  },
  bgCol5: {
    label: "काली कुंजियों की लेन का रंग",
    help: "काली कुंजियों के ऊपर की लेन का रंग।",
  },
  bgCol3: {
    label: "ऑक्टेव रेखा का रंग",
    help: "हर B और अगले C के बीच की रेखा का रंग।",
  },
  drawMeasureLines: {
    label: "माप रेखाएँ",
    help: "हर माप की शुरुआत में लेन के आर-पार एक रेखा।",
  },
  measureLineThickness: {
    label: "माप रेखा की मोटाई",
    help: "हर माप की रेखा कितनी मोटी हो।",
  },
  measureLineColor: {
    label: "माप रेखा का रंग",
    help: "हर माप की रेखा का रंग।",
  },
  enableDrawBeatLines: {
    label: "बीट रेखाएँ",
    help: "हर बीट पर लेन के आर-पार एक हल्की रेखा।",
  },
  beatLineThickness: {
    label: "बीट रेखा की मोटाई",
    help: "हर बीट की रेखा कितनी मोटी हो।",
  },
  beatLineColor: {
    label: "बीट रेखा का रंग",
    help: "हर बीट की रेखा का रंग।",
  },
  enableDrawMeasureNumbers: {
    label: "माप संख्या",
    help: "हर माप की संख्या, उसकी रेखा के पास।",
  },
  measureNumbersColor: {
    label: "माप संख्या का रंग",
    help: "माप संख्याओं का रंग।",
  },
  highlightInputLanes: {
    label: "दबाई गई कुंजियों की लेन चमकाएँ",
    help: "कुंजी दबाकर रखने पर उसके ऊपर की लेन चमक उठती है।",
  },
  inputLaneOpacity: {
    label: "लेन की रोशनी की तेज़ी",
    help: "कुंजी दबाकर रखने पर उसकी लेन कितनी चमके।",
  },
  showMarkersSong: {
    label: "मार्कर",
    help: "जहाँ गाना किसी हिस्से का नाम देता है, जैसे अंतरा, वहाँ एक रेखा और उसका नाम।",
  },
  showSustainPeriods: {
    label: "पेडल की अवधि",
    help: "जब तक गाना सस्टेन पेडल दबाए रखता है, लेन के आर-पार एक पट्टी।",
  },
  showSustainOnOffs: {
    label: "पेडल दबाना और छोड़ना",
    help: "जहाँ पेडल दबता है, वहाँ “Ped.” लिखी रेखा, और जहाँ छूटता है, वहाँ “✱”।",
  },
  showSustainChannels: {
    label: "पेडल चैनल",
    help: "हर पेडल अवधि का MIDI चैनल दिखाता है।",
  },

  // Particles
  showParticles: {
    label: "कण",
    help: "हर बजती कुंजी से इफ़ेक्ट उठते हैं। ये ग्राफ़िक्स कार्ड पर बोझ डालते हैं, इसलिए शुरू में बंद रहते हैं।",
  },
  particlesFlames: {
    label: "लपटें",
    help: "हर कुंजी अपने नोट के रंग में जलती है। इनका बोझ ग्राफ़िक्स कार्ड पर सबसे ज़्यादा है।",
  },
  particlesSparks: {
    label: "चिंगारियाँ",
    help: "हर कुंजी से छोटी, चमकीली चिंगारियाँ ऊपर उड़ती हैं।",
  },
  particlesEmbers: {
    label: "अंगारे",
    help: "हर कुंजी से दहकते अंगारे धीरे-धीरे ऊपर तैरते हैं।",
  },
  particlesStars: {
    label: "तारे",
    help: "हर कुंजी से घूमते छोटे तारे और बिंदु उठते हैं, और वापस गिरते हैं।",
  },
  particlesCustom: {
    label: "आपके अपने कण",
    help: "नीचे की सेटिंग से बने कण।",
  },
  particlesTexture: {
    label: "आकार",
    help: "आपका हर कण कौन-सी तस्वीर दिखाए।",
    options: { circle: "चमक", spark: "चिंगारी", smoke: "धुआँ", star: "तारा", ring: "छल्ला" },
  },
  particlesBlending: {
    label: "ब्लेंडिंग",
    help: "‘रोशनी जोड़ें’ पीछे की चीज़ को आग की तरह और चमका देता है। ‘ढकें’ उसे धुएँ की तरह छिपा देता है।",
    options: { additive: "रोशनी जोड़ें", normal: "ढकें" },
  },
  particleOverrideColor: {
    label: "अपना रंग",
    help: "बंद होने पर हर कण अपनी कुंजी का रंग लेता है।",
  },
  particleColor: {
    label: "रंग",
    help: "आपके कणों का रंग, जब उनका अपना रंग चालू हो।",
  },
  particlesOpacity: {
    label: "गाढ़ापन",
    help: "हर कण कितना ठोस दिखे। कम मान पर पीछे का ज़्यादा दिखता है।",
  },
  particleSize: {
    label: "साइज़",
    help: "कुंजी की चौड़ाई में।",
  },
  particleAmount: {
    label: "मात्रा",
    help: "हर कुंजी से हर फ़्रेम में कितने कण, 60 फ़्रेम प्रति सेकंड पर।",
  },
  particleLife: {
    label: "उम्र (सेकंड)",
    help: "हर कण गायब होने से पहले कितनी देर रहता है।",
  },
  particleSpeed: {
    label: "हरकत की स्पीड",
    help: "कणों की हर हरकत को तेज़ या धीमा करता है।",
  },
  particleFadeOut: {
    label: "धुँधला होना",
    help: "उम्र का वह हिस्सा, जिसमें कण आखिर में धुँधला होकर मिटता है।",
  },
  particlesShrink: {
    label: "सिकुड़ना",
    help: "कण अपने साइज़ का कितना हिस्सा खोता है। 0 से कम पर वह बढ़ता है।",
  },
  particleSpeedX: {
    label: "बगल की स्पीड",
    help: "बगल की ओर सबसे तेज़ स्पीड, कुंजी की चौड़ाई प्रति सेकंड में।",
  },
  particleSpeedY: {
    label: "उठने की स्पीड",
    help: "ऊपर उठने की सबसे तेज़ स्पीड, कुंजी की चौड़ाई प्रति सेकंड में।",
  },
  particlesFriction: {
    label: "रुकावट",
    help: "उड़ते हुए कण कितनी जल्दी धीमे होते हैं।",
  },
  particleRising: {
    label: "गुरुत्व",
    help: "0 से ऊपर कण वापस गिरते हैं, 0 से नीचे वे और तेज़ी से उठते हैं।",
  },
  particlesRotation: {
    label: "कोण (°)",
    help: "शुरू में हर कण कितना घूमा हुआ हो।",
  },
  particlesRotationRandom: {
    label: "बेतरतीब कोण (°)",
    help: "हर कण शुरू में इस कोण तक किसी भी मात्रा में घूमा होता है।",
  },
  particlesRotationSpeed: {
    label: "घुमाव (° प्रति सेकंड)",
    help: "उड़ते हुए हर कण कितनी तेज़ी से घूमता है।",
  },
  particleNoiseResX: {
    label: "बगल में भटकने की बारीकी",
    help: "ज़्यादा मान पर पास-पास की कुंजियों के कण बगल में और अलग-अलग ढंग से भटकते हैं।",
  },
  particleNoiseStrengthX: {
    label: "बगल में भटकना",
    help: "कण बेतरतीब ढंग से बगल में कितनी दूर भटकते हैं।",
  },
  particleNoiseResY: {
    label: "उठते हुए भटकने की बारीकी",
    help: "ज़्यादा मान पर पास-पास की कुंजियों का उठते हुए भटकना और अलग होता है।",
  },
  particleNoiseStrengthY: {
    label: "उठते हुए भटकना",
    help: "उठते हुए कण बेतरतीब ढंग से ऊपर-नीचे कितना भटकते हैं।",
  },
  particleNoiseStrengthSize: {
    label: "साइज़ में बदलाव",
    help: "हर कण बेतरतीब ढंग से कितना बढ़ता और घटता है।",
  },
  turbulenceXAmplitude: {
    label: "बगल में झूलना",
    help: "कण एक ओर से दूसरी ओर कितनी दूर झूलते हैं।",
  },
  turbulenceXFrequency: {
    label: "बगल में झूलने की दर",
    help: "हर सेकंड में कितनी बार झूलें।",
  },
  turbulenceYAmplitude: {
    label: "उठते हुए झूलना",
    help: "उठते हुए कण ऊपर-नीचे कितनी दूर झूलते हैं।",
  },
  turbulenceYFrequency: {
    label: "उठते हुए झूलने की दर",
    help: "हर सेकंड में कितनी बार झूलें।",
  },
  particleYOffset: {
    label: "शुरुआती ऊँचाई",
    help: "कुंजी के ऊपर, कुंजी की चौड़ाई में।",
  },
  particleDistributionX: {
    label: "कुंजी की चौड़ाई में शुरुआत",
    help: "हर कण अपनी कुंजी की चौड़ाई में कहाँ से शुरू हो।",
    options: { across: "चौड़ाई में कहीं भी", centre: "उसके बीच में" },
  },
  particleDistributionXSpread: {
    label: "शुरुआत का फैलाव (%)",
    help: "कुंजी की चौड़ाई का वह हिस्सा, जिसमें कण शुरू होते हैं।",
  },
  particleDistributionY: {
    label: "कुंजी की लंबाई में शुरुआत",
    help: "हर कण अपनी कुंजी की लंबाई में कहाँ से शुरू हो।",
    options: { hitLine: "हिट लाइन पर", key: "उसके ऊपरी हिस्से पर कहीं भी" },
  },
  particleDistributionZ: {
    label: "परत",
    help: "कुंजियाँ कणों को छिपाएँ, या कण पियानो को ढकें।",
    options: { behind: "कुंजियों के पीछे छिपे", front: "पियानो के आगे" },
  },

  // Labels
  pitchNotationSystem: {
    label: "नोट के नाम",
    help: "नोटों और कुंजियों पर नाम कैसे लिखे जाएँ। Do हमेशा C होता है।",
    options: { auto: "मेरी भाषा के हिसाब से", letters: "अक्षर: C D E", solfege: "सोलफ़ेज: Do Re Mi" },
  },
  noteLabel: {
    label: "नोट पर लेबल",
    help: "हर नोट पर लिखे टेक्स्ट: इनमें से कोई भी चुनें, या कोई नहीं। किसी नोट को दबाएँ, फिर उसकी उँगली तय करने के लिए 1 से 5 दबाएँ।",
    options: { name: "नोट का नाम", keyBinding: "कीबोर्ड का बटन", fingering: "उँगली" },
  },
  noteLabelColor: {
    label: "नोट लेबल का रंग",
    help: "हर नोट पर लिखे टेक्स्ट का रंग।",
  },
  showKeyNamesOnPianoWhite: {
    label: "सफ़ेद कुंजियों पर नाम",
    help: "हर सफ़ेद कुंजी अपने नोट का नाम दिखाती है।",
  },
  showKeyNamesOnPianoBlack: {
    label: "काली कुंजियों पर नाम",
    help: "हर काली कुंजी अपने नोट का नाम दिखाती है।",
  },
  showPianoKeyNameFlats: {
    label: "काली कुंजियों के नाम फ़्लैट से",
    help: "C♯ की जगह D♭, सिर्फ़ कुंजियों पर। नोट गाने के स्केल के हिसाब से लिखे जाते हैं।",
  },
  octaveLabel: {
    label: "कुंजी के नाम में ऑक्टेव",
    help: "कुंजियों के नामों में ऑक्टेव संख्या जोड़ता है, जैसे C4।",
    options: { none: "कहीं नहीं", all: "हर कुंजी पर", onlyC: "सिर्फ़ C पर" },
  },
  showKeyBindingsOnPiano: {
    label: "पियानो पर कीबोर्ड के बटन",
    help: "हर कुंजी दिखाती है कि कीबोर्ड का कौन-सा बटन उसे बजाता है।",
  },
  showChords: {
    label: "कॉर्ड के नाम",
    help: "नोटों से बनने वाले हर कॉर्ड का नाम दिखाता है, पेडल से थमे नोट भी गिनकर।",
  },
  chordLabelStyle: {
    label: "कॉर्ड लेबल की शैली",
    help: "हर कॉर्ड का नाम कैसे दिखे।",
    options: { bar: "कॉर्ड की कुंजियों के ऊपर पट्टी", ribbon: "लेन के आर-पार रिबन" },
  },
  chordLabelPlacement: {
    label: "कॉर्ड लेबल की जगह",
    help: "कॉर्ड का ऊपरी सिरा उसका दूर वाला सिरा है, जो पियानो से दूर होता है।",
    options: {
      above: "कॉर्ड के ऊपर",
      top: "उसके ऊपरी सिरे पर",
      middle: "उसके बीच में",
      bottom: "उसके निचले सिरे पर",
      below: "कॉर्ड के नीचे",
    },
  },
  showChordRomanNumerals: {
    label: "रोमन अंक",
    help: "गाने के स्केल में हर कॉर्ड की डिग्री, जैसे V7।",
  },
  chordBlocks: {
    label: "नोट ब्लॉक",
    help: "नाम वाले कॉर्ड के हर नोट के ऊपर एक ब्लॉक बताता है कि वह नोट क्या है।",
    options: { none: "कोई नहीं", tone: "कॉर्ड टोन", degree: "स्केल डिग्री" },
  },
  chordToneNotation: {
    label: "नोट ब्लॉक की लिखावट",
    help: "नोट ब्लॉक छोटे चिह्न दिखाएँ या पूरे शब्द।",
    options: { simple: "छोटा: R ♭3 5", full: "पूरा: रूट ♭थर्ड फ़िफ़्थ" },
  },
  chordMarkRoot: {
    label: "रूट नोट दिखाएँ",
    help: "हर कॉर्ड के रूट नोट पर एक सुनहरा ब्लॉक होता है।",
  },

  // Lyrics
  lyricsEnabled: {
    label: "बोल",
    help: "गाने में बोल हों, तो उन्हें एक बार में एक लाइन दिखाता है।",
  },
  lyricsBackground: {
    label: "बैकग्राउंड का रंग",
    help: "बोलों के पीछे की पट्टी का रंग।",
  },
  lyricsFontColor: {
    label: "टेक्स्ट का रंग",
    help: "आगे आने वाले शब्दों का रंग।",
  },
  lyricsFontColorPlayed: {
    label: "गाए गए टेक्स्ट का रंग",
    help: "पहले गाए जा चुके शब्दों का रंग।",
  },
  lyricsFontColorActive: {
    label: "अभी गाए जा रहे शब्दांश का रंग",
    help: "अभी गाया जा रहा शब्दांश इस रंग में अलग दिखता है।",
  },
  lyricsFontSize: {
    label: "टेक्स्ट का साइज़ (px)",
    help: "बोल कितने बड़े लिखे जाएँ।",
  },
  lyricsY: {
    label: "ऊपर से ऊँचाई (%)",
    help: "सीन में बोलों की लाइन का बीच कहाँ हो। 0 ऊपरी किनारा है।",
  },
  lyricsCursorEnabled: {
    label: "कर्सर",
    help: "अभी गाए जा रहे शब्दांश के ऊपर एक बिंदु।",
  },
  lyricsBouncingCursor: {
    label: "उछलता कर्सर",
    help: "बिंदु हर शब्दांश से अगले पर उछलकर जाता है।",
  },

  // Coding
  enableColorCodingNote: {
    label: "पिच के हिसाब से नोटों का रंग",
    help: "12 पिच में से हर एक का अपना रंग होता है।",
  },
  enableColorCodingNotePiano: {
    label: "पिच के हिसाब से कुंजियों का रंग",
    help: "बजते समय हर कुंजी अपनी पिच के रंग में चमकती है।",
  },
  colorCodeNote0: { help: "हर C का रंग।" },
  colorCodeNote1: { label: "C♯ या D♭", help: "हर C♯ या D♭ का रंग।" },
  colorCodeNote2: { help: "हर D का रंग।" },
  colorCodeNote3: { label: "D♯ या E♭", help: "हर D♯ या E♭ का रंग।" },
  colorCodeNote4: { help: "हर E का रंग।" },
  colorCodeNote5: { help: "हर F का रंग।" },
  colorCodeNote6: { label: "F♯ या G♭", help: "हर F♯ या G♭ का रंग।" },
  colorCodeNote7: { help: "हर G का रंग।" },
  colorCodeNote8: { label: "G♯ या A♭", help: "हर G♯ या A♭ का रंग।" },
  colorCodeNote9: { help: "हर A का रंग।" },
  colorCodeNote10: { label: "A♯ या B♭", help: "हर A♯ या B♭ का रंग।" },
  colorCodeNote11: { help: "हर B का रंग।" },
  enableColorCodingFinger: {
    label: "उँगली के हिसाब से नोटों का रंग",
    help: "जिस नोट को कोई हाथ नहीं बजाता, वह अपना दूसरा रंग रखता है।",
  },
  enableColorCodingFingerPiano: {
    label: "उँगली के हिसाब से कुंजियों का रंग",
    help: "हर कुंजी उसे बजाने वाली उँगली के रंग में चमकती है।",
  },
  colorCodeFinger1Right: { label: "दायाँ हाथ, उँगली 1", help: "दाएँ हाथ के अँगूठे से बजे नोटों का रंग।" },
  colorCodeFinger2Right: { label: "दायाँ हाथ, उँगली 2", help: "दाएँ हाथ की तर्जनी से बजे नोटों का रंग।" },
  colorCodeFinger3Right: { label: "दायाँ हाथ, उँगली 3", help: "दाएँ हाथ की मध्यमा से बजे नोटों का रंग।" },
  colorCodeFinger4Right: { label: "दायाँ हाथ, उँगली 4", help: "दाएँ हाथ की अनामिका से बजे नोटों का रंग।" },
  colorCodeFinger5Right: { label: "दायाँ हाथ, उँगली 5", help: "दाएँ हाथ की छोटी उँगली से बजे नोटों का रंग।" },
  colorCodeFingerDefaultRight: {
    label: "दायाँ हाथ, बिना उँगली",
    help: "दाएँ हाथ के उन नोटों का रंग, जिनकी उँगली तय नहीं है।",
  },
  colorCodeFinger1Left: { label: "बायाँ हाथ, उँगली 1", help: "बाएँ हाथ के अँगूठे से बजे नोटों का रंग।" },
  colorCodeFinger2Left: { label: "बायाँ हाथ, उँगली 2", help: "बाएँ हाथ की तर्जनी से बजे नोटों का रंग।" },
  colorCodeFinger3Left: { label: "बायाँ हाथ, उँगली 3", help: "बाएँ हाथ की मध्यमा से बजे नोटों का रंग।" },
  colorCodeFinger4Left: { label: "बायाँ हाथ, उँगली 4", help: "बाएँ हाथ की अनामिका से बजे नोटों का रंग।" },
  colorCodeFinger5Left: { label: "बायाँ हाथ, उँगली 5", help: "बाएँ हाथ की छोटी उँगली से बजे नोटों का रंग।" },
  colorCodeFingerDefaultLeft: {
    label: "बायाँ हाथ, बिना उँगली",
    help: "बाएँ हाथ के उन नोटों का रंग, जिनकी उँगली तय नहीं है।",
  },

  // Sheet
  enableSheet: {
    label: "शीट म्यूज़िक दिखाएँ",
    help: "सीन के ऊपरी हिस्से पर गाना, शीट म्यूज़िक के रूप में।",
  },
  enableFullSheet: {
    label: "सिर्फ़ शीट म्यूज़िक",
    help: "सीन की जगह शीट पूरी स्क्रीन भर देती है।",
  },
  sheetMeasureScroll: {
    label: "शीट गाने के साथ खिसके",
    help: "बंद होने पर माप लाइनों में खड़े रहते हैं, और बज रही लाइन नज़र में रहती है।",
  },
  sheetMeasureNumbers: {
    label: "माप संख्या",
    help: "शीट हर माप की संख्या कहाँ दिखाए।",
    options: { off: "कहीं नहीं", lineStart: "हर लाइन की शुरुआत में", every: "हर माप पर" },
  },
  enableGrandStaff: {
    label: "दो स्टाफ़ को ब्रेस से जोड़ें",
    help: "ग्रैंड स्टाफ़ का ब्रेस, हर लाइन की शुरुआत में।",
  },
  sheetAutoClef: {
    label: "हर क्लेफ़ नोटों से चुनें",
    help: "बंद होने पर पहला स्टाफ़ ट्रेबल होता है, और बाकी बेस।",
  },
  overrideTimeSignature: {
    label: "टाइम सिग्नेचर",
    help: "शीट जिस टाइम सिग्नेचर में लिखी जाती है। गाने का अपना गलत हो, तो कोई और चुनें।",
    options: { auto: "गाने से" },
  },
  sheetMinNoteDenom: {
    label: "सबसे छोटा नोट",
    help: "शीट जो सबसे छोटा नोट लिखती है। उसके ट्रिपलेट फिर भी आ जाते हैं।",
    options: {
      "4": "क्वार्टर नोट",
      "8": "एट्थ नोट",
      "16": "सिक्सटींथ नोट",
      "32": "थर्टी-सेकंड नोट",
      "64": "सिक्सटी-फ़ोर्थ नोट",
    },
  },
  hideRestsBelow: {
    label: "इससे छोटे रेस्ट छिपाएँ",
    help: "छोटे रेस्ट हटा देता है, ताकि शीट पढ़ना आसान हो।",
    options: {
      none: "कोई न छिपाएँ",
      "4": "क्वार्टर रेस्ट",
      "8": "एट्थ रेस्ट",
      "16": "सिक्सटींथ रेस्ट",
      "32": "थर्टी-सेकंड रेस्ट",
    },
  },
  renderSheetCursor: {
    label: "कर्सर",
    help: "एक रेखा गाने में अभी की जगह दिखाती है।",
  },
  sheetColorActiveNotes: {
    label: "बजते नोटों का रंग बदलें",
    help: "शीट पर नोट बजते समय रंग बदलते हैं।",
  },
  sheetColorByTrack: {
    label: "बजते नोट अपने ट्रैक का रंग लें",
    help: "बंद होने पर वे नीचे वाला रंग लेते हैं।",
  },
  sheetActiveNotesColor: {
    label: "बजते नोट का रंग",
    help: "शीट पर बजते समय नोट का रंग।",
  },
  sheetHighlightActiveNotes: {
    label: "बजते नोटों के पीछे चमक",
    help: "शीट पर हर नोट के बजते समय उसके पीछे हल्की रोशनी दिखती है।",
  },
  sheetActiveHighlightColor: {
    label: "चमक का रंग",
    help: "बजते नोटों के पीछे की रोशनी का रंग।",
  },
  sheetActiveGrowEffect: {
    label: "बजते नोट बड़े हों",
    help: "शीट पर नोट बजते समय बड़ा हो जाता है।",
  },
  sheetRenderInputNotes: {
    label: "आपके बजाए नोट दिखाएँ",
    help: "दबाकर रखी हर कुंजी कर्सर पर एक नोट बनकर दिखती है।",
  },
  sheetShowHoverInfo: {
    label: "पॉइंटर के नीचे के नोटों के नाम",
    help: "शीट पर किसी नोट या कॉर्ड पर पॉइंटर ले जाएँ, और उसके नोटों के नाम देखें।",
  },
  sheetBgColor: {
    label: "कागज़ का रंग",
    help: "शीट म्यूज़िक के पीछे का रंग। गहरे कागज़ पर स्याही हल्की हो जाती है।",
  },

  // PDF
  pdfExportButtonGroup: {
    label: "नोट PDF के रूप में सेव करें",
    help: "एक डायलॉग खोलता है, जो खुले गाने के गिरते नोटों को पेजों में सेव करता है। पेजों की लंबाई आप तय करते हैं।",
  },
  exportPdfBackground: {
    label: "बैकग्राउंड के रंग इस्तेमाल करें",
    help: "पेज लेन और कुंजियों के रंग लेते हैं। बंद होने पर वे सफ़ेद कागज़ पर छपते हैं।",
  },

  // Offline
  offlineCache: {
    label: "ऑफ़लाइन फ़ाइलें संभालें",
    help: "ऐप, गानों और पियानो की आवाज़ों का साइज़ दिखाता है, और हर एक को सेव करता है या हटाता है।",
  },
  autoCacheSongs: {
    label: "गाने सेव रखें",
    help: "हर उदाहरण गाना अभी सेव करता है, और हर अपडेट के बाद फिर से।",
  },
  autoCacheSounds: {
    label: "पियानो की आवाज़ें सेव रखें",
    help: "हर साउंड सेट अभी सेव करता है, और हर अपडेट के बाद फिर से।",
  },
};
