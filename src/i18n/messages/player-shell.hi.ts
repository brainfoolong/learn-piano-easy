/** The player's shell in Hindi. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { playerShell as en } from "./player-shell.en";

/** `n` seconds with two decimals and no digit grouping, such as `12.50`. */
const seconds = (n: number) => formatNumber("hi", n, { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: false });
/** `n` files. Only 1 is singular, since Hindi says `0 फ़ाइलें`. */
const files = (n: number) => `${formatNumber("hi", n)} ${n === 1 ? "फ़ाइल" : "फ़ाइलें"}`;
/** `n` files in the oblique case, as a postposition such as `में से` needs it: `40 फ़ाइलों`. */
const filesOblique = (n: number) => `${formatNumber("hi", n)} ${n === 1 ? "फ़ाइल" : "फ़ाइलों"}`;
/** "could not be saved", agreeing with the feminine `फ़ाइल` in number. */
const couldNotSave = (n: number) => (n === 1 ? "सेव नहीं की जा सकी" : "सेव नहीं की जा सकीं");

export const playerShell: Translation<typeof en> = {
  dialog: {
    close: "बंद करें",
    hotkeys: "कीबोर्ड शॉर्टकट",
    keyBindings: "कंप्यूटर कीबोर्ड के बटन",
    pdf: "PDF के रूप में सेव करें",
    offlineFiles: "ऑफ़लाइन फ़ाइलें",
    tracks: "ट्रैक",
    songs: "गाने",
    guide: (title) => `${title} की अभ्यास गाइड`,
    about: "Learn Piano Easy के बारे में",
  },
  toast: {
    dismiss: "बंद करें",
  },
  topbar: {
    songs: "गाने",
    tracks: "ट्रैक",
    guide: "गाइड",
    settings: "सेटिंग",
    about: "जानकारी",
    openSong: "अभी खुला गाना",
    demoSong: "डेमो गाना",
    songFallback: "गाना",
  },
  songs: {
    noneFound: "गाने की कोई फ़ाइल नहीं मिली।",
    wrongKind: "सिर्फ़ MIDI और MusicXML फ़ाइलें जोड़ी जा सकती हैं।",
    added: (n) =>
      `“आपके गाने” में ${formatNumber("hi", n)} ${n === 1 ? "गाना जोड़ा गया" : "गाने जोड़े गए"}।`,
    notKept: (reason) => `गाने सेव नहीं किए जा सके: ${reason}`,
    soundsFailed: "पियानो की आवाज़ें लोड नहीं हो सकीं, इसलिए गाने बिना आवाज़ के चलेंगे।",
  },
  guide: {
    step: (n, summary) => `चरण ${formatNumber("hi", n)}: ${summary}।`,
    barLoops: (bar) => `माप ${formatNumber("hi", bar)} लूप में चल रहा है।`,
    topBeaten: (title) => `आपने ${title} पार कर लिया, जो इस गाने का आखिरी चरण है। बहुत बढ़िया बजाया!`,
    beaten: (title, next) => `आपने ${title} पार कर लिया! अब ${next} की बारी है।`,
    playNext: (next) => `${next} बजाएँ`,
  },
  lesson: {
    label: "पाठ",
    target: (percent) => `स्कोर वाली एक कोशिश में ${formatNumber("hi", percent)}% नोट सही बजाएँ।`,
    back: "पाठ पर वापस जाएँ",
    missing: "इस पाठ का गाना लाइब्रेरी में नहीं है।",
  },
  finger: {
    label: "चुना गया नोट",
    setByYou: "आपकी चुनी हुई",
    fromGuide: "अभ्यास गाइड से",
    suggested: "सुझाई गई",
    none: "कोई उँगली नहीं",
    finger: (finger, source) => `उँगली ${finger}, ${source}`,
    line: (note, said) =>
      `${note}: ${said}। उँगली चुनने के लिए 1 से 5, हटाने के लिए 0 और खत्म करने के लिए Esc दबाएँ।`,
  },
  backgroundTrack: {
    notAudio: (file) => `${file} ऐसा ऑडियो नहीं है जिसे यह ब्राउज़र चला सके।`,
    playsAlong: (file) => `${file} को गाने के साथ चलाया जा रहा है।`,
  },
  about: {
    license: "लाइसेंस",
    notices: "थर्ड-पार्टी सूचनाएँ",
    packageLicense: (name) => `${name} का लाइसेंस`,
    offline: "यह टेक्स्ट अभी ऑफ़लाइन उपलब्ध नहीं है।",
    intro:
      "Learn Piano Easy पियानो सीखने का एक मुफ़्त, ओपन सोर्स ऐप है। इसमें एक गाइडेड कोर्स है, और आप अपनी MIDI फ़ाइलें भी बजा सकते हैं। यह आपके ब्राउज़र में ऑफ़लाइन चलता है।",
    build: (version) => `बिल्ड ${version}`,
  },
  cache: {
    groups: {
      app: { label: "ऐप", description: "पेज, उसका कोड और गानों की सूची। ऐप को ऑफ़लाइन खोलने के लिए यह ज़रूरी है।" },
      songs: { label: "गाने", description: "ऐप के साथ आने वाले सारे गाने, ताकि हर गाना ऑफ़लाइन खुल सके।" },
      sounds: { label: "पियानो की आवाज़ें", description: "आवाज़ों के सारे सेट, ताकि कोई भी सेट चुना हो, पियानो ऑफ़लाइन बजे।" },
    },
    groupsFailed: (n, labels) => `${labels} की ${files(n)} ऑफ़लाइन इस्तेमाल के लिए ${couldNotSave(n)}।`,
    updated: (labels) => `अपडेट हो गया। ${labels} को फिर से ऑफ़लाइन इस्तेमाल के लिए सेव कर लिया गया।`,
    unavailable: "यह ब्राउज़र इस पेज के लिए कोई ऑफ़लाइन फ़ाइल नहीं रखता।",
    reading: "सेव की गई चीज़ें पढ़ी जा रही हैं…",
    unreadable: "ऑफ़लाइन फ़ाइलों की सूची पढ़ी नहीं जा सकी। पेज फिर से लोड करें और फिर से कोशिश करें।",
    intro: "सेव की गई फ़ाइलें नेटवर्क के बिना भी काम करती हैं। हर हिस्सा अलग से सेव किया या हटाया जा सकता है।",
    allSaved: "सब सेव है",
    noneSaved: "सेव नहीं है",
    someSaved: (count, total) => `${filesOblique(total)} में से ${formatNumber("hi", count)} सेव`,
    status: (size, total, state) => `${size}, ${files(total)}, ${state}।`,
    saving: (done, total) => `सेव किया जा रहा है: ${filesOblique(total)} में से ${formatNumber("hi", done)}…`,
    failed: (n) => `${files(n)} ${couldNotSave(n)}।`,
    save: "सेव करें",
    saveAgain: "फिर से सेव करें",
    remove: "हटाएँ",
    saveGroup: (label) => `${label} सेव करें`,
    removeGroup: (label) => `${label} हटाएँ`,
    keep: "हर अपडेट के बाद सेव रखें",
  },
  update: {
    ready: "नया वर्शन तैयार है।",
    reload: "फिर से लोड करें",
  },
  scene: {
    piano: "पियानो",
    pianoRange: (range) => `पियानो, ${range}`,
    startKeys: (keys) => `, शुरुआती कुंजियाँ ${keys}`,
    chord: (chord) => `, कॉर्ड ${chord}`,
  },
  demo: {
    /** A space parts words and "|" parts the syllables the notes sing, seven or eight to a line. */
    lyrics: [
      "दे|खें गिर|ती रो|श|नी",
      "आ|ते ही कुं|जी द|बा|एँ",
      "पह|ले धी|रे, फिर ते|ज़ी से",
      "जल्|दी हाथ राह जा|नें|गे",
    ],
    part: (n) => `भाग ${formatNumber("hi", n)}`,
    leftHand: "बायाँ हाथ",
    rightHand: "दायाँ हाथ",
  },
  chords: {
    root: "रूट नोट",
    /** A chord tone, such as `♭3`, written as a Hindi ordinal, such as `♭3रा` or `5वाँ`. */
    ordinal: (tone) => {
      const n = Number(/\d+$/.exec(String(tone))?.[0]);
      const suffix = n === 1 ? "ला" : n === 2 || n === 3 ? "रा" : n === 4 ? "था" : n === 6 ? "ठा" : "वाँ";
      return `${tone}${suffix}`;
    },
  },
  overlays: {
    fps: "फ़्रेम प्रति सेकंड",
    tempo: "टेम्पो",
    track: (track, channel) => `ट्रैक ${track}, चैनल ${channel}`,
    velocity: (velocity) => `ज़ोर ${velocity}`,
    timing: (start, length) => `${seconds(start)} सेकंड पर शुरू, ${seconds(length)} सेकंड लंबा`,
  },
  sheet: {
    label: "शीट म्यूज़िक",
    empty: "शीट म्यूज़िक में कोई ट्रैक नहीं दिख रहा। ‘ट्रैक’ में से किसी एक को चालू करें।",
  },
};
