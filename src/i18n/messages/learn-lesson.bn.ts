/** The lesson view of *Learn Piano* in Bengali. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { learnLesson as en } from "./learn-lesson.en";

const n = (value: number) => formatNumber("bn", value);

export const learnLesson: Translation<typeof en> = {
  stepOf: (step: number, count: number) => `${n(count)}টির মধ্যে ${n(step)} নম্বর ধাপ`,
  leave: "পাঠ থেকে বেরিয়ে যান",
  leaveDialog: {
    title: "এই পাঠ থেকে বেরিয়ে যাবেন?",
    body: "এই পাঠের অগ্রগতি পাঠটি শেষ হলে তবেই সেভ হয়।",
    stay: "শেখা চালিয়ে যান",
    leave: "বেরিয়ে যান",
    close: "বন্ধ করুন",
  },
  lacks: {
    touch: "আমার কিবোর্ডে জোরে আর হালকা করে বাজানো যায় না",
    pedal: "আমার কিবোর্ডে প্যাডেল নেই",
  },
  loading: "পাঠ লোড হচ্ছে…",
  missing: "এই পাঠটি নেই।",
  backToCourse: "কোর্সে ফিরে যান",
  band: {
    continue: "চালিয়ে যান",
    right: "ঠিক!",
    tryAgain: "একটুর জন্য হলো না। আবার চেষ্টা করুন।",
  },
  demo: {
    play: "শুনুন",
    playAgain: "আবার শুনুন",
    skip: "এড়িয়ে যান",
    piano: "উদাহরণটি বাজাচ্ছে যে পিয়ানো",
    playing: "বাজছে",
    slow: "ধীরে",
    side: "পাশ থেকে দৃশ্য",
  },
  quiz: {
    answers: "উত্তর",
    wrong: "একটুর জন্য হলো না। অন্য একটি উত্তর বেছে নিন।",
    hint: "হাইলাইট করা উত্তরটিই ঠিক।",
  },
  findKey: {
    piano: "পিয়ানো। ধাপে যে চাবির কথা বলা আছে, সেটি চাপুন।",
    marks: { next: "এই চাবি", correct: "ঠিক", mistake: "এটি নয়" },
    wrong: "এটি অন্য চাবি। আবার চেষ্টা করুন।",
    hint: "হাইলাইট করা চাবিটিই সেই চাবি।",
    timeUp: "সময় শেষ।",
    secondsLeft: (seconds: number) => `${n(seconds)} সেকেন্ড`,
  },
  playNotes: {
    piano: "পিয়ানো। সুরের অংশটি ক্রম অনুযায়ী বাজান।",
    marks: { next: "এরপর এটি বাজান", correct: "বাজানো হয়েছে", mistake: "এটি নয়" },
    wrong: "এটি অন্য নোট। আবার চেষ্টা করুন।",
    hint: (note: string) => `পরের নোটটি ${note}।`,
    hintChord: (...notes: string[]) => `এবার ${notes.slice(0, -1).join(", ")} আর ${notes.at(-1)} একসঙ্গে বাজান।`,
    expression: {
      "too-loud": "চাবি ঠিক, কিন্তু খুব জোরে। হালকা করে বাজান।",
      "too-soft": "চাবি ঠিক, কিন্তু খুব হালকা। জোরে বাজান।",
      "pedal-up": "চাবি ঠিক। বাজানোর সময় প্যাডেল চেপে রাখুন।",
      "pedal-down": "চাবি ঠিক। বাজানোর আগে প্যাডেল ছাড়ুন।",
    },
  },
  listen: {
    question: (pair: number, count: number) => `${n(count)}টির মধ্যে ${n(pair)} নম্বর জোড়া`,
    playAgain: "আবার শুনুন",
    group: "দ্বিতীয় নোটটি কি বেশি উঁচু, বেশি নিচু, নাকি একই?",
    answers: { higher: "বেশি উঁচু", lower: "বেশি নিচু", same: "একই" },
    wrong: "একটুর জন্য হলো না। আবার শুনে অন্য একটি উত্তর বেছে নিন।",
    hint: "হাইলাইট করা উত্তরটিই ঠিক।",
    roundAgain: (right: number, asked: number) =>
      `${n(asked)}টির মধ্যে ${n(right)}টি ঠিক হয়েছে। চলুন, আরেকটি রাউন্ড খেলি।`,
  },
  readNote: {
    staff: { treble: "ট্রেবল স্টাফের একটি নোট", bass: "বেস স্টাফের একটি নোট" },
    count: (note: number, total: number) => `${n(total)}টির মধ্যে ${n(note)} নম্বর নোট`,
    answers: "নোটের নাম",
    piano: "পিয়ানো। স্টাফের নোটটি বাজান।",
    marks: { next: "এই চাবি", correct: "ঠিক", mistake: "এটি নয়" },
    wrongName: "এটি অন্য নোট। আবার দেখুন।",
    wrongKey: "এটি অন্য চাবি। আবার চেষ্টা করুন।",
    hintName: "হাইলাইট করা নামটিই ঠিক।",
    hintKey: "হাইলাইট করা চাবিটিই সেই চাবি।",
    again: "কয়েকটি এখনো ঠিক হয়নি। চলুন, সেগুলো আবার দেখি।",
  },
  rhythmTap: {
    start: "শুরু",
    listen: "শুনুন: শুরুর গোনার একটি বার।",
    tap: "এবার প্রতিটি টিকের সঙ্গে যেকোনো একটি চাবি চাপুন।",
    piano: "চাপার জায়গা। ঠিক বিটে যেকোনো একটি চাবি চাপুন।",
    marks: { next: "এখানে চাপুন", correct: "বিটে মিলেছে", mistake: "বিটে মেলেনি" },
    short: (hits: number, beats: number) =>
      `${n(beats)}টি বিটের মধ্যে ${n(hits)}টিতে চাপ পড়েছে। আবার চেষ্টা করুন।`,
    hint: "টিক শোনার সঙ্গে সঙ্গে চাপুন। প্রতিটি বিটে বিন্দুগুলো জ্বলে ওঠে।",
    play: "এবার প্রতিটি নোট তার টিকে বাজান।",
    phrasePiano: "চাবিগুলো। টিকের তালে তালে সুরের অংশটি বাজান।",
    shortNotes: (hits: number, notes: number) =>
      `${n(notes)}টি নোটের মধ্যে ${n(hits)}টি সময়মতো বেজেছে। আবার চেষ্টা করুন।`,
    restSounded: "রেস্টের সময় একটি চাবি বেজে উঠেছে। সেখানে আঙুল তুলে চুপ থাকুন।",
    phraseHint: "প্রতিটি নোট তার টিকে বাজান, আর রেস্টের আগে চাবি ছেড়ে দিন। প্রতিটি বিটে বিন্দুগুলো জ্বলে ওঠে।",
    pattern: {
      taps: (countIn: number, taps: number) => `শুরুর গোনা ${countIn} বিট। তারপর ${taps} বিটে চাপুন।`,
      phrase: (countIn: number, ...parts: string[]) =>
        `শুরুর গোনা ${countIn} বিট। তারপর বাজান${parts.length > 0 ? `: ${parts.join(", ")}` : ""}।`,
      held: (note: string, beats: number) => `${note}, ${beats} বিট ধরে`,
      rest: (beats: number) => (beats === 1 ? "রেস্ট" : `${beats} বিটের রেস্ট`),
    },
  },
  song: {
    play: "প্লেয়ারে বাজান",
    goal: (percent: number) => `${n(percent)}% নোট ঠিক রেখে গানটি বাজান।`,
    notYet: (percent: number) =>
      `গানটি আপনার জন্য অপেক্ষা করছে। যখন খুশি আবার বাজান, আর ${n(percent)}% ঠিক রাখার লক্ষ্য রাখুন।`,
    played: (percent: number) => `আপনি ${n(percent)}% নোট ঠিক বাজিয়েছেন।`,
  },
  recap: {
    heading: "আপনি যা শিখলেন",
  },
  end: {
    heading: "পাঠ শেষ",
    stars: (stars: number) => `${n(3)}টির মধ্যে ${n(stars)}টি তারা`,
    again: "আবার বাজান",
    saving: "আপনার অগ্রগতি সেভ হচ্ছে…",
    saved: "এই ডিভাইসে সেভ হয়েছে।",
    unsaved: "এই ব্রাউজার কিছুই জমা রাখে না, তাই ট্যাব বন্ধ করা পর্যন্তই এই ফলাফল থাকবে।",
    failed: "আপনার অগ্রগতি সেভ করা যায়নি।",
    retry: "আবার চেষ্টা করুন",
    level: (level: number, toNext: number) =>
      `লেভেল ${n(level)}: লেভেল ${n(level + 1)}-এ যেতে আরও ${n(toNext)} XP`,
    skipOpened: (world: string) => `“${world}” জগতের সব পাঠ এখন খোলা।`,
    skipShort: (stars: number) => `এই জগৎ খুলতে ${n(stars)}টি তারা লাগে। যখন খুশি আবার চেষ্টা করুন।`,
  },
  moment: {
    continue: "চালিয়ে যান",
    level: {
      heading: "লেভেল আপ!",
      name: (level: number) => `লেভেল ${n(level)}`,
      text: "প্রতিটি পাঠ আপনাকে আরও এগিয়ে নেয়। এভাবেই চালিয়ে যান!",
    },
    badge: { heading: "নতুন ব্যাজ!" },
  },
};
