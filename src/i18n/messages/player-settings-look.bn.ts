/** The player's settings from the notes to the offline files, in Bengali. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { playerSettingsLook as en } from "./player-settings-look.en";

export const playerSettingsLook: Translation<typeof en> = {
  // Notes
  showHitKeys: {
    label: "বাজতে থাকা নোট জ্বলে উঠুক",
    help: "নোট যতক্ষণ বাজে, ততক্ষণ নিজের রঙে জ্বলে থাকে।",
  },
  noteWidth: {
    label: "নোটের প্রস্থ (চাবির শতাংশ)",
    help: "প্রতিটি নেমে আসা নোট কতটা চওড়া, তার চাবির তুলনায়।",
  },
  roundedNotes: {
    label: "গোল কোণের নোট",
    help: "নেমে আসা নোটের কোণগুলো গোল করে।",
  },
  noteBorderRadius: {
    label: "কোণের গোলাই (%)",
    help: "একটি নোটের কোণ কতটা গোল।",
  },
  minNoteHeight: {
    label: "নোটের সবচেয়ে কম দৈর্ঘ্য",
    help: "চাবির প্রস্থে, যাতে খুব ছোট নোটও দেখা যায়।",
  },
  strokeNotes: {
    label: "কিনারার আভা",
    help: "প্রতিটি নোটের নিজের রঙে আলোর একটি কিনারা।",
  },
  strokeNotesWidth: {
    label: "কিনারার আভার জোর",
    help: "প্রতিটি নোটের চারপাশের আলোর কিনারা কতটা উজ্জ্বল।",
  },
  noteEndedShrink: {
    label: "বাজানো নোট চাবির ভেতরে ঢুকে যায়",
    help: "নোট বাজার সময় তার চাবির ভেতরে ডুবে যায়। বন্ধ থাকলে সেটি চাবি পেরিয়ে চলতে থাকে।",
  },
  playedNoteFalloffSpeed: {
    label: "বাজানো নোট চাবি পেরিয়ে কতদূর যায়",
    help: "চাবির প্রস্থে, যখন বাজানো নোট ঢুকে যায় না।",
  },
  showSustainedNotes: {
    label: "প্যাডেল নোট কতক্ষণ ধরে রাখে, তা দেখান",
    help: "প্যাডেল যে নোট ধরে রাখে, তার পেছনে একটি সরু লেজ চলে।",
  },
  sustainedNotesOpacity: {
    label: "প্যাডেলের লেজের উজ্জ্বলতা (%)",
    help: "নোটের পেছনে প্যাডেলের লেজ কতটা স্পষ্ট দেখা যায়।",
  },

  // Lanes
  bgCol1: {
    label: "লেনের রং",
    help: "সাদা চাবির উপরের লেনগুলোর রং।",
  },
  bgCol5: {
    label: "কালো চাবির লেনের রং",
    help: "কালো চাবির উপরের লেনগুলোর রং।",
  },
  bgCol3: {
    label: "অক্টেভ ভাগের লাইনের রং",
    help: "প্রতিটি B নোট আর তার পরের C নোটের মাঝের লাইনের রং।",
  },
  drawMeasureLines: {
    label: "বার লাইন",
    help: "প্রতিটি বারের শুরুতে লেনগুলোর উপর দিয়ে একটি লাইন।",
  },
  measureLineThickness: {
    label: "বার লাইনের পুরুত্ব",
    help: "প্রতিটি বারের লাইন কতটা মোটা।",
  },
  measureLineColor: {
    label: "বার লাইনের রং",
    help: "প্রতিটি বারের লাইনের রং।",
  },
  enableDrawBeatLines: {
    label: "বিটের লাইন",
    help: "প্রতিটি বিটে লেনগুলোর উপর দিয়ে একটি হালকা লাইন।",
  },
  beatLineThickness: {
    label: "বিটের লাইনের পুরুত্ব",
    help: "প্রতিটি বিটের লাইন কতটা মোটা।",
  },
  beatLineColor: {
    label: "বিটের লাইনের রং",
    help: "প্রতিটি বিটের লাইনের রং।",
  },
  enableDrawMeasureNumbers: {
    label: "বার নম্বর",
    help: "প্রতিটি বারের নম্বর, তার লাইনের পাশে।",
  },
  measureNumbersColor: {
    label: "বার নম্বরের রং",
    help: "বার নম্বরগুলোর রং।",
  },
  highlightInputLanes: {
    label: "চেপে ধরা চাবির লেন জ্বলে উঠুক",
    help: "আপনি যতক্ষণ একটি চাবি চেপে ধরে রাখেন, তার উপরের লেন উজ্জ্বল হয়।",
  },
  inputLaneOpacity: {
    label: "লেনের আলোর জোর",
    help: "চাবি চেপে ধরে রাখলে তার লেন কতটা উজ্জ্বল হয়।",
  },
  showMarkersSong: {
    label: "চিহ্ন",
    help: "গানে যেখানে কোনো অংশের নাম আছে, যেমন একটি স্তবক, সেখানে একটি লাইন আর তার লেখা।",
  },
  showSustainPeriods: {
    label: "প্যাডেলের সময়",
    help: "গান যতক্ষণ সাসটেন প্যাডেল চেপে রাখে, ততক্ষণ লেনগুলোর উপর দিয়ে একটি পট্টি।",
  },
  showSustainOnOffs: {
    label: "প্যাডেল চাপা আর ছাড়া",
    help: "প্যাডেল যেখানে চাপা হয় সেখানে “Ped.” লেখা একটি লাইন, আর যেখানে ছাড়া হয় সেখানে “✱”।",
  },
  showSustainChannels: {
    label: "প্যাডেলের চ্যানেল",
    help: "প্যাডেলের প্রতিটি সময়ের MIDI চ্যানেল দেখায়।",
  },

  // Particles
  showParticles: {
    label: "কণা",
    help: "বাজতে থাকা প্রতিটি চাবি থেকে ইফেক্ট উঠে আসে। এতে গ্রাফিক্স কার্ডের উপর চাপ পড়ে, তাই শুরুতে এটি বন্ধ থাকে।",
  },
  particlesFlames: {
    label: "শিখা",
    help: "প্রতিটি চাবি তার নোটের রঙে জ্বলে। গ্রাফিক্স কার্ডের উপর এর চাপই সবচেয়ে বেশি।",
  },
  particlesSparks: {
    label: "ফুলকি",
    help: "প্রতিটি চাবি থেকে ছোট উজ্জ্বল ফুলকি উড়ে ওঠে।",
  },
  particlesEmbers: {
    label: "অঙ্গার",
    help: "প্রতিটি চাবি থেকে জ্বলন্ত অঙ্গার ধীরে ধীরে ভেসে ওঠে।",
  },
  particlesStars: {
    label: "তারা",
    help: "প্রতিটি চাবি থেকে ছোট ঘূর্ণি তারা আর বিন্দু উঠে আবার নেমে আসে।",
  },
  particlesCustom: {
    label: "নিজের কণা",
    help: "নিচের সেটিংস দিয়ে তৈরি কণা।",
  },
  particlesTexture: {
    label: "গড়ন",
    help: "আপনার নিজের প্রতিটি কণা যে ছবি দেখায়।",
    options: { circle: "আভা", spark: "ফুলকি", smoke: "ধোঁয়া", star: "তারা", ring: "আংটি" },
  },
  particlesBlending: {
    label: "মেশানো",
    help: "“আলো যোগ” পেছনের জিনিস উজ্জ্বল করে, আগুনের মতো। “ঢেকে দিন” তা লুকিয়ে ফেলে, ধোঁয়ার মতো।",
    options: { additive: "আলো যোগ", normal: "ঢেকে দিন" },
  },
  particleOverrideColor: {
    label: "নিজের রং",
    help: "বন্ধ থাকলে প্রতিটি কণা তার চাবির রং নেয়।",
  },
  particleColor: {
    label: "রং",
    help: "কণার নিজের রং চালু থাকলে, তাদের রং।",
  },
  particlesOpacity: {
    label: "গাঢ়তা",
    help: "প্রতিটি কণা কতটা নিরেট দেখায়। কম মানে পেছনের জিনিস বেশি দেখা যায়।",
  },
  particleSize: {
    label: "আকার",
    help: "চাবির প্রস্থে।",
  },
  particleAmount: {
    label: "পরিমাণ",
    help: "প্রতি চাবিতে প্রতি ফ্রেমে কয়টি কণা, প্রতি সেকেন্ডে ৬০ ফ্রেম ধরে।",
  },
  particleLife: {
    label: "আয়ু (সেকেন্ড)",
    help: "প্রতিটি কণা মিলিয়ে যাওয়ার আগে কতক্ষণ থাকে।",
  },
  particleSpeed: {
    label: "চলনের গতি",
    help: "কণাগুলোর সব নড়াচড়া দ্রুত বা ধীর করে।",
  },
  particleFadeOut: {
    label: "মিলিয়ে যাওয়া",
    help: "আয়ুর শেষ দিকের কতটা অংশ ধরে একটি কণা মিলিয়ে যায়।",
  },
  particlesShrink: {
    label: "ছোট হওয়া",
    help: "একটি কণা তার আকারের কতটা হারায়। ০-এর নিচে সেটি বড় হয়।",
  },
  particleSpeedX: {
    label: "পাশে সরার গতি",
    help: "পাশে সরার সর্বোচ্চ গতি, প্রতি সেকেন্ডে চাবির প্রস্থে।",
  },
  particleSpeedY: {
    label: "ওঠার গতি",
    help: "ওঠার সর্বোচ্চ গতি, প্রতি সেকেন্ডে চাবির প্রস্থে।",
  },
  particlesFriction: {
    label: "বাধা",
    help: "উড়তে উড়তে কণাগুলো কত দ্রুত ধীর হয়।",
  },
  particleRising: {
    label: "অভিকর্ষ",
    help: "০-এর উপরে কণাগুলো আবার নেমে আসে, ০-এর নিচে আরও দ্রুত ওঠে।",
  },
  particlesRotation: {
    label: "কোণ (°)",
    help: "শুরুতে প্রতিটি কণা কতটা ঘোরানো থাকে।",
  },
  particlesRotationRandom: {
    label: "এলোমেলো কোণ (°)",
    help: "প্রতিটি কণা শুরুতে এই কোণ পর্যন্ত এলোমেলো পরিমাণে ঘোরানো থাকে।",
  },
  particlesRotationSpeed: {
    label: "ঘোরা (প্রতি সেকেন্ডে °)",
    help: "উড়তে উড়তে প্রতিটি কণা কত দ্রুত ঘোরে।",
  },
  particleNoiseResX: {
    label: "পাশে এলোমেলো সরণের সূক্ষ্মতা",
    help: "বেশি মানে পাশাপাশি চাবির কণাগুলো পাশে আরও আলাদাভাবে এলোমেলো সরে।",
  },
  particleNoiseStrengthX: {
    label: "পাশে এলোমেলো সরণ",
    help: "কণাগুলো এলোমেলোভাবে পাশে কতদূর সরে যায়।",
  },
  particleNoiseResY: {
    label: "ওঠার এলোমেলো সরণের সূক্ষ্মতা",
    help: "বেশি মানে পাশাপাশি চাবির কণাগুলোর ওঠার এলোমেলো সরণ আরও আলাদা হয়।",
  },
  particleNoiseStrengthY: {
    label: "ওঠার এলোমেলো সরণ",
    help: "ওঠার সময় কণাগুলো এলোমেলোভাবে উপরে-নিচে কতদূর সরে যায়।",
  },
  particleNoiseStrengthSize: {
    label: "আকারের এলোমেলো বদল",
    help: "প্রতিটি কণা এলোমেলোভাবে কতটা বড়-ছোট হয়।",
  },
  turbulenceXAmplitude: {
    label: "পাশের দোলা",
    help: "কণাগুলো এপাশ-ওপাশ কতদূর দোলে।",
  },
  turbulenceXFrequency: {
    label: "পাশের দোলার হার",
    help: "প্রতি সেকেন্ডে কতবার দোলে।",
  },
  turbulenceYAmplitude: {
    label: "ওঠার দোলা",
    help: "ওঠার সময় কণাগুলো উপরে-নিচে কতদূর দোলে।",
  },
  turbulenceYFrequency: {
    label: "ওঠার দোলার হার",
    help: "প্রতি সেকেন্ডে কতবার দোলে।",
  },
  particleYOffset: {
    label: "শুরুর উচ্চতা",
    help: "চাবির উপরে, চাবির প্রস্থে।",
  },
  particleDistributionX: {
    label: "চাবির আড়াআড়ি শুরু",
    help: "চাবির আড়াআড়ি কোথায় প্রতিটি কণা শুরু হয়।",
    options: { across: "আড়াআড়ি যেকোনো জায়গায়", centre: "ঠিক মাঝখানে" },
  },
  particleDistributionXSpread: {
    label: "শুরুর ছড়ানো (%)",
    help: "চাবির প্রস্থের কতটা জুড়ে কণা শুরু হয়।",
  },
  particleDistributionY: {
    label: "চাবির লম্বালম্বি শুরু",
    help: "চাবির লম্বালম্বি কোথায় প্রতিটি কণা শুরু হয়।",
    options: { hitLine: "হিট লাইনে", key: "চাবির উপরের দিকের যেকোনো জায়গায়" },
  },
  particleDistributionZ: {
    label: "স্তর",
    help: "চাবিগুলো কণাকে লুকায়, নাকি কণাগুলো পিয়ানোকে ঢেকে দেয়।",
    options: { behind: "চাবির আড়ালে", front: "পিয়ানোর সামনে" },
  },

  // Labels
  pitchNotationSystem: {
    label: "নোটের নাম",
    help: "নোট আর চাবির উপরের নাম কীভাবে লেখা হয়। Do সবসময় C।",
    options: { auto: "আমার ভাষা যেভাবে লেখে", letters: "অক্ষর: C D E", solfege: "সোলফেজ: Do Re Mi" },
  },
  noteLabel: {
    label: "নোটের লেবেল",
    help: "প্রতিটি নোটের উপরের লেখা: যেকোনোটি বেছে নিন, বা একটিও না। একটি নোট চাপুন, তারপর আঙুল ঠিক করতে 1 থেকে 5 কী চাপুন।",
    options: { name: "নোটের নাম", keyBinding: "কম্পিউটারের কী", fingering: "আঙুল" },
  },
  noteLabelColor: {
    label: "নোটের লেবেলের রং",
    help: "প্রতিটি নোটের উপরের লেখার রং।",
  },
  showKeyNamesOnPianoWhite: {
    label: "সাদা চাবিতে নাম",
    help: "প্রতিটি সাদা চাবিতে তার নোটের নাম দেখায়।",
  },
  showKeyNamesOnPianoBlack: {
    label: "কালো চাবিতে নাম",
    help: "প্রতিটি কালো চাবিতে তার নোটের নাম দেখায়।",
  },
  showPianoKeyNameFlats: {
    label: "কালো চাবির নাম ফ্ল্যাট দিয়ে",
    help: "C♯-এর জায়গায় D♭, শুধু চাবিতে। নোটগুলো গানের স্কেল মেনে চলে।",
  },
  octaveLabel: {
    label: "চাবির নামে অক্টেভ",
    help: "চাবির নামের সঙ্গে অক্টেভের নম্বর যোগ করে, যেমন C4।",
    options: { none: "কোথাও না", all: "সব চাবিতে", onlyC: "শুধু C-তে" },
  },
  showKeyBindingsOnPiano: {
    label: "পিয়ানোতে কম্পিউটারের কী",
    help: "প্রতিটি চাবিতে দেখায়, কম্পিউটারের কোন কী সেটি বাজায়।",
  },
  showChords: {
    label: "কর্ডের নাম",
    help: "নোটগুলো মিলে যে কর্ড হয়, প্যাডেলে ধরা নোটসহ, তার নাম দেখায়।",
  },
  chordLabelStyle: {
    label: "কর্ডের লেবেলের ধরন",
    help: "প্রতিটি কর্ডের নাম কীভাবে আঁকা হয়।",
    options: { bar: "কর্ডের চাবিগুলোর উপরে একটি পট্টি", ribbon: "লেনগুলো জুড়ে একটি ফিতা" },
  },
  chordLabelPlacement: {
    label: "কর্ডের লেবেলের জায়গা",
    help: "উপর মানে কর্ডের দূরের প্রান্ত, পিয়ানো থেকে দূরে।",
    options: {
      above: "কর্ডের উপরে",
      top: "তার উপরের দিকে",
      middle: "তার মাঝখানে",
      bottom: "তার নিচের দিকে",
      below: "কর্ডের নিচে",
    },
  },
  showChordRomanNumerals: {
    label: "রোমান সংখ্যা",
    help: "গানের স্কেলে প্রতিটি কর্ডের ডিগ্রি, যেমন V7।",
  },
  chordBlocks: {
    label: "নোটের ব্লক",
    help: "নাম দেওয়া কর্ডের প্রতিটি নোটের উপরে একটি ব্লক বলে দেয়, নোটটি কী।",
    options: { none: "কিছুই না", tone: "কর্ডের নোট", degree: "স্কেলের ডিগ্রি" },
  },
  chordToneNotation: {
    label: "নোটের ব্লকের লেখা",
    help: "নোটের ব্লকে ছোট চিহ্ন থাকবে, নাকি পুরো শব্দ।",
    options: { simple: "ছোট করে: R ♭3 5", full: "পুরো: রুট ♭থার্ড ফিফথ" },
  },
  chordMarkRoot: {
    label: "রুট নোট চিহ্নিত করুন",
    help: "প্রতিটি কর্ডের রুট নোটে একটি সোনালি ব্লক থাকে।",
  },

  // Lyrics
  lyricsEnabled: {
    label: "গানের কথা",
    help: "গানে কথা থাকলে, একবারে একটি লাইন করে দেখায়।",
  },
  lyricsBackground: {
    label: "পেছনের রং",
    help: "গানের কথার পেছনের পট্টির রং।",
  },
  lyricsFontColor: {
    label: "লেখার রং",
    help: "যে কথাগুলো এখনও আসেনি, তাদের রং।",
  },
  lyricsFontColorPlayed: {
    label: "গাওয়া লেখার রং",
    help: "যে কথাগুলো গাওয়া হয়ে গেছে, তাদের রং।",
  },
  lyricsFontColorActive: {
    label: "এখন গাওয়া শব্দাংশের রং",
    help: "যে শব্দাংশ এখন গাওয়া হচ্ছে, সেটি এই রঙে আলাদা করে চোখে পড়ে।",
  },
  lyricsFontSize: {
    label: "লেখার আকার (px)",
    help: "গানের কথা কত বড় করে লেখা হয়।",
  },
  lyricsY: {
    label: "উচ্চতা (উপর থেকে শতাংশ)",
    help: "দৃশ্যের কোথায় গানের কথার লাইনের মাঝখানটা থাকে। ০ মানে একদম উপরের কিনারা।",
  },
  lyricsCursorEnabled: {
    label: "কার্সর",
    help: "এখন গাওয়া শব্দাংশের উপরে একটি বিন্দু।",
  },
  lyricsBouncingCursor: {
    label: "লাফানো কার্সর",
    help: "বিন্দুটি প্রতিটি শব্দাংশ থেকে পরেরটিতে লাফিয়ে যায়।",
  },

  // Coding
  enableColorCodingNote: {
    label: "পিচ অনুযায়ী নোটের রং",
    help: "১২টি পিচের প্রতিটি নিজের রং পায়।",
  },
  enableColorCodingNotePiano: {
    label: "পিচ অনুযায়ী চাবির রং",
    help: "প্রতিটি চাবি বাজার সময় তার পিচের রঙে জ্বলে ওঠে।",
  },
  colorCodeNote0: { help: "প্রতিটি C নোটের রং।" },
  colorCodeNote1: { label: "C♯ বা D♭", help: "প্রতিটি C♯ বা D♭ নোটের রং।" },
  colorCodeNote2: { help: "প্রতিটি D নোটের রং।" },
  colorCodeNote3: { label: "D♯ বা E♭", help: "প্রতিটি D♯ বা E♭ নোটের রং।" },
  colorCodeNote4: { help: "প্রতিটি E নোটের রং।" },
  colorCodeNote5: { help: "প্রতিটি F নোটের রং।" },
  colorCodeNote6: { label: "F♯ বা G♭", help: "প্রতিটি F♯ বা G♭ নোটের রং।" },
  colorCodeNote7: { help: "প্রতিটি G নোটের রং।" },
  colorCodeNote8: { label: "G♯ বা A♭", help: "প্রতিটি G♯ বা A♭ নোটের রং।" },
  colorCodeNote9: { help: "প্রতিটি A নোটের রং।" },
  colorCodeNote10: { label: "A♯ বা B♭", help: "প্রতিটি A♯ বা B♭ নোটের রং।" },
  colorCodeNote11: { help: "প্রতিটি B নোটের রং।" },
  enableColorCodingFinger: {
    label: "আঙুল অনুযায়ী নোটের রং",
    help: "যে নোট কোনো হাত বাজায় না, সেটি তার অন্য রংটিই রাখে।",
  },
  enableColorCodingFingerPiano: {
    label: "আঙুল অনুযায়ী চাবির রং",
    help: "প্রতিটি চাবি সেই আঙুলের রঙে জ্বলে ওঠে, যেটি তা বাজায়।",
  },
  colorCodeFinger1Right: { label: "ডান হাত, 1 নম্বর আঙুল", help: "ডান হাতের বুড়ো আঙুলে বাজানো নোটের রং।" },
  colorCodeFinger2Right: { label: "ডান হাত, 2 নম্বর আঙুল", help: "ডান হাতের তর্জনীতে বাজানো নোটের রং।" },
  colorCodeFinger3Right: { label: "ডান হাত, 3 নম্বর আঙুল", help: "ডান হাতের মধ্যমায় বাজানো নোটের রং।" },
  colorCodeFinger4Right: { label: "ডান হাত, 4 নম্বর আঙুল", help: "ডান হাতের অনামিকায় বাজানো নোটের রং।" },
  colorCodeFinger5Right: { label: "ডান হাত, 5 নম্বর আঙুল", help: "ডান হাতের কড়ে আঙুলে বাজানো নোটের রং।" },
  colorCodeFingerDefaultRight: {
    label: "ডান হাত, আঙুল ছাড়া",
    help: "ডান হাতের যে নোটে আঙুল ঠিক করা নেই, তার রং।",
  },
  colorCodeFinger1Left: { label: "বাঁ হাত, 1 নম্বর আঙুল", help: "বাঁ হাতের বুড়ো আঙুলে বাজানো নোটের রং।" },
  colorCodeFinger2Left: { label: "বাঁ হাত, 2 নম্বর আঙুল", help: "বাঁ হাতের তর্জনীতে বাজানো নোটের রং।" },
  colorCodeFinger3Left: { label: "বাঁ হাত, 3 নম্বর আঙুল", help: "বাঁ হাতের মধ্যমায় বাজানো নোটের রং।" },
  colorCodeFinger4Left: { label: "বাঁ হাত, 4 নম্বর আঙুল", help: "বাঁ হাতের অনামিকায় বাজানো নোটের রং।" },
  colorCodeFinger5Left: { label: "বাঁ হাত, 5 নম্বর আঙুল", help: "বাঁ হাতের কড়ে আঙুলে বাজানো নোটের রং।" },
  colorCodeFingerDefaultLeft: {
    label: "বাঁ হাত, আঙুল ছাড়া",
    help: "বাঁ হাতের যে নোটে আঙুল ঠিক করা নেই, তার রং।",
  },

  // Sheet
  enableSheet: {
    label: "স্বরলিপি দেখান",
    help: "গানটি স্বরলিপি হিসেবে, দৃশ্যের উপরের দিকে।",
  },
  enableFullSheet: {
    label: "শুধু স্বরলিপি",
    help: "দৃশ্যের বদলে স্বরলিপি পুরো স্ক্রিন জুড়ে থাকে।",
  },
  sheetMeasureScroll: {
    label: "গানের সঙ্গে স্বরলিপি সরে যাক",
    help: "বন্ধ থাকলে বারগুলো সারি সারি সাজানো থাকে, আর যে সারি বাজছে সেটি চোখের সামনে থাকে।",
  },
  sheetMeasureNumbers: {
    label: "বার নম্বর",
    help: "স্বরলিপিতে প্রতিটি বারের নম্বর কোথায় দেখায়।",
    options: { off: "কোথাও না", lineStart: "প্রতিটি সারির শুরুতে", every: "প্রতিটি বারে" },
  },
  enableGrandStaff: {
    label: "দুটি স্টাফ বন্ধনী দিয়ে জুড়ুন",
    help: "গ্র্যান্ড স্টাফের বন্ধনী, প্রতিটি সারির শুরুতে।",
  },
  sheetAutoClef: {
    label: "নোট দেখে প্রতিটি ক্লেফ বেছে নিন",
    help: "বন্ধ থাকলে প্রথম স্টাফে ট্রেবল ক্লেফ, আর বাকিগুলোতে বেস ক্লেফ।",
  },
  overrideTimeSignature: {
    label: "টাইম সিগনেচার",
    help: "স্বরলিপি যে টাইম সিগনেচারে লেখা হয়। গানের নিজেরটি ভুল হলে একটি বেছে নিন।",
    options: { auto: "গান থেকে" },
  },
  sheetMinNoteDenom: {
    label: "সবচেয়ে ছোট নোট",
    help: "স্বরলিপি সবচেয়ে ছোট যে নোট লেখে। তার ট্রিপলেটও লেখা যায়।",
    options: {
      "4": "কোয়ার্টার",
      "8": "এইটথ",
      "16": "সিক্সটিন্থ",
      "32": "থার্টি-সেকেন্ড",
      "64": "সিক্সটি-ফোর্থ",
    },
  },
  hideRestsBelow: {
    label: "ছোট রেস্ট লুকান",
    help: "ছোট রেস্টগুলো বাদ দেয়, যাতে স্বরলিপি পড়া সহজ হয়।",
    options: {
      none: "কোনোটিই না",
      "4": "কোয়ার্টারের চেয়ে ছোট",
      "8": "এইটথের চেয়ে ছোট",
      "16": "সিক্সটিন্থের চেয়ে ছোট",
      "32": "থার্টি-সেকেন্ডের চেয়ে ছোট",
    },
  },
  renderSheetCursor: {
    label: "কার্সর",
    help: "একটি লাইন গানের জায়গাটি দেখায়।",
  },
  sheetColorActiveNotes: {
    label: "বাজতে থাকা নোটের রং",
    help: "স্বরলিপির নোট বাজার সময় রং বদলায়।",
  },
  sheetColorByTrack: {
    label: "বাজতে থাকা নোট ট্র্যাকের রং নেয়",
    help: "বন্ধ থাকলে নিচের রংটি নেয়।",
  },
  sheetActiveNotesColor: {
    label: "বাজতে থাকা নোটের রং",
    help: "স্বরলিপির একটি নোট বাজার সময় তার রং।",
  },
  sheetHighlightActiveNotes: {
    label: "বাজতে থাকা নোটের পেছনে আভা",
    help: "স্বরলিপির প্রতিটি নোট বাজার সময় তার পেছনে নরম আলো দেখা যায়।",
  },
  sheetActiveHighlightColor: {
    label: "আভার রং",
    help: "বাজতে থাকা নোটের পেছনের আলোর রং।",
  },
  sheetActiveGrowEffect: {
    label: "বাজতে থাকা নোট বড় হয়",
    help: "স্বরলিপির একটি নোট বাজার সময় বড় হয়ে ওঠে।",
  },
  sheetRenderInputNotes: {
    label: "আপনার বাজানো নোট আঁকুন",
    help: "আপনার চেপে ধরা প্রতিটি চাবি কার্সরের জায়গায় একটি নোট হয়ে দেখা যায়।",
  },
  sheetShowHoverInfo: {
    label: "পয়েন্টারের নিচের নোটের নাম",
    help: "স্বরলিপির কোনো নোট বা কর্ডের উপর পয়েন্টার রাখুন, তার নোটগুলোর নাম দেখতে পাবেন।",
  },
  sheetBgColor: {
    label: "কাগজের রং",
    help: "স্বরলিপির পেছনের রং। গাঢ় কাগজে কালি হালকা হয়ে যায়।",
  },

  // PDF
  pdfExportButtonGroup: {
    label: "নোটগুলো PDF হিসেবে সেভ করুন",
    help: "একটি ডায়ালগ খোলে, যা খোলা গানের নেমে আসা নোটগুলো পাতা হিসেবে সেভ করে। পাতার দৈর্ঘ্য আপনি ঠিক করেন।",
  },
  exportPdfBackground: {
    label: "পেছনের রং ব্যবহার করুন",
    help: "পাতাগুলো লেন আর চাবির রং নেয়। বন্ধ থাকলে সাদা কাগজে প্রিন্ট হয়।",
  },

  // Offline
  offlineCache: {
    label: "অফলাইন ফাইল সামলান",
    help: "অ্যাপ, গান আর পিয়ানোর আওয়াজ কতটা জায়গা নেয় তা দেখায়, আর প্রতিটি সেভ করে বা সরায়।",
  },
  autoCacheSongs: {
    label: "গানগুলো সেভ করে রাখুন",
    help: "উদাহরণের সব গান এখনই সেভ করে, আর প্রতিটি আপডেটের পরে আবার।",
  },
  autoCacheSounds: {
    label: "পিয়ানোর আওয়াজ সেভ করে রাখুন",
    help: "সব সাউন্ড সেট এখনই সেভ করে, আর প্রতিটি আপডেটের পরে আবার।",
  },
};
