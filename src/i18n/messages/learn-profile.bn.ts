/** The profile of *Learn Piano* in Bengali. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { learnProfile as en } from "./learn-profile.en";

const n = (value: number) => formatNumber("bn", value);
const days = (value: number) => `${n(value)} দিন`;

export const learnProfile: Translation<typeof en> = {
  loading: "আপনার অগ্রগতি লোড হচ্ছে…",
  level: {
    heading: "লেভেল",
    name: (level: number) => `লেভেল ${n(level)}`,
    total: (xp: number) => `মোট ${n(xp)} XP`,
    toNext: (level: number) => `লেভেল ${n(level)} পর্যন্ত`,
  },
  streak: {
    heading: "টানা দিন",
    current: (count: number) => days(count),
    currentLabel: "এখন পর্যন্ত টানা",
    best: (count: number) => `সেরা: ${days(count)}`,
    today: (xp: number, goal: number) =>
      xp >= goal
        ? `আজ: ${n(xp)} XP, ${n(goal)}-এর লক্ষ্য পূরণ হয়েছে`
        : `আজ: ${n(goal)}-এর মধ্যে ${n(xp)} XP`,
  },
  calendar: {
    heading: "গত আট সপ্তাহ",
    label: (met: number, played: number) =>
      `গত আট সপ্তাহে ${days(met)} লক্ষ্য পূরণ হয়েছে, আর ${days(played)} পাঠ হয়েছে।`,
    met: "লক্ষ্য পূরণ",
    played: "বাজানো হয়েছে",
    none: "পাঠ হয়নি",
  },
  stats: {
    heading: "পরিসংখ্যান",
    lessons: "শেষ করা পাঠ",
    threeStars: "তিন তারার পাঠ",
    days: "বাজানোর দিন",
    badges: "পাওয়া ব্যাজ",
  },
  badges: {
    heading: "ব্যাজ",
    lead: (earned: number, all: number) => `${n(all)}টির মধ্যে ${n(earned)}টি পাওয়া হয়েছে`,
    earned: (name: string) => `${name}, পাওয়া হয়েছে`,
    locked: (name: string) => `${name}, এখনো পাওয়া হয়নি`,
  },
  choices: {
    heading: "আপনার সেটিংস",
    goal: "দৈনিক লক্ষ্য",
    goalHelp: "টানা দিন ধরে রাখতে প্রতিদিন যত XP লাগে।",
    sounds: "পুরস্কারের আওয়াজ",
    soundsHelp: "ধাপ পার হলে, তারা পেলে, নতুন লেভেলে আর ব্যাজ পেলে টুংটাং আওয়াজ হয়। পিয়ানো সবসময় বাজে।",
  },
  data: {
    heading: "আপনার ডেটা",
    lead: "আপনার অগ্রগতি এই ব্রাউজারে থাকে। “আপনার ডেটা” পেজটি বাকি সবকিছুর সঙ্গে এটিও একটি ফাইলে সেভ করে, আর ফিরিয়ে আনে।",
    open: "ব্যাকআপ নিন বা ফিরিয়ে আনুন",
    reset: "সব অগ্রগতি রিসেট করুন",
    failed: "সেভ করা যায়নি। কিছুই বদলায়নি।",
    resetDone: "আপনার অগ্রগতি রিসেট হয়েছে। আগে যা ছিল, তার সবই ব্যাকআপ ফাইলে আছে।",
    close: "বন্ধ করুন",
    cancel: "অগ্রগতি রেখে দিন",
    ask: {
      title: "সব অগ্রগতি রিসেট করবেন?",
      text: "এতে এই ব্রাউজার থেকে সব পাঠ, তারা, XP পয়েন্ট আর ব্যাজ মুছে যাবে। আপনার সেটিংস থেকে যাবে।",
      next: "চালিয়ে যান",
    },
    askAgain: {
      title: "আপনি কি নিশ্চিত?",
      text: "আগে একটি ব্যাকআপ ফাইল সেভ হবে, তাই পরে সবকিছু ফিরিয়ে আনতে পারবেন। তারপর আপনার অগ্রগতি নতুন করে শুরু হবে।",
      confirm: "অগ্রগতি রিসেট করুন",
    },
  },
};
