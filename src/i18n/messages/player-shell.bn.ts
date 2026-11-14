/** The player's shell in Bengali. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { playerShell as en } from "./player-shell.en";

/** `n` seconds with two decimals and no digit grouping, such as `১২.৫০`. */
const seconds = (n: number) => formatNumber("bn", n, { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: false });
/** `n` with one decimal and no digit grouping, such as `৬.৬`. */
const tenths = (n: number) => formatNumber("bn", n, { minimumFractionDigits: 1, maximumFractionDigits: 1, useGrouping: false });
/** A Bengali noun does not change after a count, so a count of files takes the classifier `টি` alone. */
const files = (n: number) => `${formatNumber("bn", n)}টি ফাইল`;

export const playerShell: Translation<typeof en> = {
  dialog: {
    close: "বন্ধ করুন",
    hotkeys: "কিবোর্ড শর্টকাট",
    keyBindings: "কম্পিউটারের কিবোর্ডের কী",
    pdf: "PDF হিসেবে সেভ করুন",
    offlineFiles: "অফলাইন ফাইল",
    tracks: "ট্র্যাক",
    songs: "গান",
    guide: (title) => `${title}: অনুশীলনের গাইড`,
    about: "Learn Piano Easy সম্পর্কে",
  },
  toast: {
    dismiss: "বন্ধ করুন",
  },
  topbar: {
    songs: "গান",
    tracks: "ট্র্যাক",
    guide: "গাইড",
    settings: "সেটিংস",
    about: "পরিচিতি",
    openSong: "খোলা গান",
    demoSong: "ডেমো গান",
    songFallback: "গান",
  },
  songs: {
    noneFound: "কোনো গানের ফাইল পাওয়া যায়নি।",
    wrongKind: "শুধু MIDI আর MusicXML ফাইল যোগ করা যায়।",
    added: (n) => `“আপনার গান” তালিকায় ${formatNumber("bn", n)}টি গান যোগ করা হয়েছে।`,
    notKept: (reason) => `গানগুলো সেভ করা যায়নি: ${reason}`,
    soundsFailed: "পিয়ানোর আওয়াজ লোড করা যায়নি, তাই গানগুলো কোনো আওয়াজ ছাড়াই চলবে।",
  },
  guide: {
    step: (n, summary) => `ধাপ ${formatNumber("bn", n)}: ${summary}।`,
    barLoops: (bar) => `বার ${bar} লুপে চলছে।`,
    topBeaten: (title) => `আপনি ${title} পার করেছেন, এটিই এই গানের শেষ ধাপ। দারুণ বাজিয়েছেন!`,
    beaten: (title, next) => `আপনি ${title} পার করেছেন! এবার ${next}।`,
    playNext: (next) => `${next} বাজান`,
  },
  lesson: {
    label: "পাঠ",
    target: (percent) => `স্কোর গোনা হয় এমন একটি চেষ্টায় ${formatNumber("bn", percent)}% নোট ঠিক বাজান।`,
    back: "পাঠে ফিরে যান",
    missing: "পাঠের গানটি গানের তালিকায় নেই।",
  },
  finger: {
    label: "বেছে নেওয়া নোট",
    setByYou: "আপনার ঠিক করা",
    fromGuide: "গাইড থেকে",
    suggested: "প্রস্তাবিত",
    none: "আঙুল নেই",
    finger: (finger, source) => `${finger} নম্বর আঙুল, ${source}`,
    line: (note, said) => `${note}: ${said}। আঙুল ঠিক করতে 1 থেকে 5 চাপুন, খালি করতে 0, শেষ করতে Esc।`,
  },
  backgroundTrack: {
    notAudio: (file) => `${file} এমন অডিও নয়, যা এই ব্রাউজার চালাতে পারে।`,
    playsAlong: (file) => `${file} গানটির সঙ্গে বাজছে।`,
  },
  about: {
    license: "লাইসেন্স",
    notices: "তৃতীয় পক্ষের নোটিস",
    packageLicense: (name) => `${name}-এর লাইসেন্স`,
    offline: "এই লেখাটি এখনো অফলাইনে পাওয়া যায় না।",
    intro:
      "Learn Piano Easy একটি বিনামূল্যের, ওপেন সোর্স অ্যাপ। এতে ধাপে ধাপে কোর্স আর নিজের MIDI ফাইল দিয়ে পিয়ানো শেখা যায়। এটি ব্রাউজারে অফলাইনেও চলে।",
    build: (version) => `বিল্ড ${version}`,
  },
  cache: {
    groups: {
      app: { label: "অ্যাপ", description: "পেজ, তার কোড আর গানের তালিকা। অফলাইনে খুলতে অ্যাপের এগুলো দরকার।" },
      songs: { label: "গান", description: "অ্যাপের সঙ্গে আসা সব গান, যাতে যেকোনোটি অফলাইনে খোলে।" },
      sounds: { label: "পিয়ানোর আওয়াজ", description: "সব সাউন্ড সেট, যাতে যে সেটই বেছে নেওয়া থাকুক, পিয়ানো অফলাইনে বাজে।" },
    },
    bytes: (n) => `${formatNumber("bn", n, { useGrouping: false })} B`,
    kilobytes: (n) => `${tenths(n)} KB`,
    megabytes: (n) => `${tenths(n)} MB`,
    groupsFailed: (n, labels) => `${labels} থেকে ${files(n)} অফলাইনে ব্যবহারের জন্য সেভ করা যায়নি।`,
    updated: (labels) => `আপডেট হয়েছে। ${labels} আবার অফলাইনে ব্যবহারের জন্য সেভ করা আছে।`,
    unavailable: "এই ব্রাউজার এই পেজের জন্য কোনো অফলাইন ফাইল রাখে না।",
    reading: "সেভ করা ফাইল পড়া হচ্ছে…",
    unreadable: "অফলাইন ফাইলের তালিকা পড়া যায়নি। পেজটি আবার লোড করে আরেকবার চেষ্টা করুন।",
    intro: "সেভ করা ফাইল নেটওয়ার্ক ছাড়াও কাজ করে। প্রতিটি অংশ আলাদা করে সেভ করা বা সরানো যায়।",
    allSaved: "সব সেভ করা আছে",
    noneSaved: "সেভ করা নেই",
    someSaved: (count, total) => `${formatNumber("bn", total)}টি ফাইলের মধ্যে ${formatNumber("bn", count)}টি সেভ করা আছে`,
    status: (size, total, state) => `${size}, ${files(total)}, ${state}।`,
    saving: (done, total) => `${formatNumber("bn", total)}টি ফাইলের মধ্যে ${formatNumber("bn", done)}টি সেভ হচ্ছে…`,
    failed: (n) => `${files(n)} সেভ করা যায়নি।`,
    save: "সেভ করুন",
    saveAgain: "আবার সেভ করুন",
    remove: "সরান",
    saveGroup: (label) => `${label} সেভ করুন`,
    removeGroup: (label) => `${label} সরান`,
    keep: "প্রতিটি আপডেটের পরেও সেভ করে রাখুন",
  },
  update: {
    ready: "নতুন ভার্শন তৈরি।",
    reload: "আবার লোড করুন",
  },
  scene: {
    piano: "পিয়ানো",
    pianoRange: (range) => `পিয়ানো, ${range}`,
    startKeys: (keys) => `, শুরুর চাবি ${keys}`,
    chord: (chord) => `, কর্ড ${chord}`,
  },
  demo: {
    /** Each line keeps the English's seven or eight syllables, and "|" parts the syllables inside a word. */
    lyrics: [
      "দে|খুন আ|লো ঝ|রে প|ড়ে",
      "যেই আ|সে চা|বি চা|পুন",
      "প্রথ|মে ধী|রে প|রে দ্রু|ত",
      "শিগ|গি|রই হাত চিন|বে পথ",
    ],
    part: (n) => `অংশ ${formatNumber("bn", n)}`,
    leftHand: "বাঁ হাত",
    rightHand: "ডান হাত",
  },
  chords: {
    root: "রুট",
    /** A chord tone stays as the chart prints it, such as `♭3`, since a Bengali ordinal would mix two sets of digits. */
    ordinal: (tone) => String(tone),
  },
  overlays: {
    fps: "প্রতি সেকেন্ডে ফ্রেম",
    tempo: "টেম্পো",
    bpmValue: (n) => `${formatNumber("bn", n, { useGrouping: false })} BPM`,
    fpsValue: (n) => `${formatNumber("bn", n, { useGrouping: false })} FPS`,
    track: (track, channel) => `ট্র্যাক ${formatNumber("bn", track)}, চ্যানেল ${formatNumber("bn", channel)}`,
    velocity: (velocity) => `জোর ${formatNumber("bn", velocity)}`,
    timing: (start, length) => `শুরু ${seconds(start)} সেকেন্ডে, চলে ${seconds(length)} সেকেন্ড`,
  },
  sheet: {
    label: "স্বরলিপি",
    empty: "স্বরলিপিতে কোনো ট্র্যাক দেখানো হচ্ছে না। “ট্র্যাক” থেকে একটি চালু করুন।",
  },
};
