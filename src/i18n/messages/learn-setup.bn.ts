/** The first setup of *Learn Piano* in Bengali. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { learnSetup as en } from "./learn-setup.en";

export const learnSetup: Translation<typeof en> = {
  title: "“পিয়ানো শিখুন” অংশে স্বাগতম",
  welcome: "হ্যালো! আমি আপনাকে পিয়ানো শেখাব। ছোট্ট তিনটি প্রশ্ন, তারপর বাজানো শুরু।",
  mascot: "আপনার পিয়ানো শিক্ষক, মধু রঙের লোমওয়ালা একটি বনমানুষ, গায়ে কর্ডুরয়ের জ্যাকেট",
  close: "প্রস্তুতি এড়িয়ে যান",
  progress: "প্রস্তুতি",
  steps: ["আপনার পিয়ানো", "আপনার অভিজ্ঞতা", "আপনার দৈনিক লক্ষ্য"],
  doneStep: "সম্পন্ন",
  next: "চালিয়ে যান",
  device: {
    question: "আপনি কীসে বাজাবেন?",
    midi: { name: "MIDI কিবোর্ড", text: "ডিজিটাল পিয়ানো বা কিবোর্ড, USB দিয়ে লাগানো।" },
    computer: { name: "কম্পিউটারের কিবোর্ড", text: "অক্ষরের কীগুলো নোট বাজায়।" },
    screen: { name: "স্ক্রিন", text: "স্ক্রিনের চাবিগুলো চাপুন।" },
    noMidi: "এই ব্রাউজারে MIDI নেই। এর বদলে কম্পিউটারের কিবোর্ড বা স্ক্রিনে বাজান।",
    check: "যেকোনো একটি চাবি বা কী চাপুন, দেখি আমরা শুনতে পাই কি না।",
    checkMidi: "MIDI কিবোর্ডের যেকোনো চাবি চাপুন।",
    checkComputer: "Q, W বা E-র মতো একটি অক্ষরের কী চাপুন।",
    checkScreen: "নিচের একটি চাবি চাপুন।",
    heard: (note: string) => `শুনতে পেয়েছি: এটি ছিল ${note}।`,
    keys: "বাজিয়ে দেখার একটি পিয়ানো",
    skip: "যাচাই এড়িয়ে যান",
    marks: { next: "এই চাবিটি চাপুন", correct: "শোনা গেছে", mistake: "শোনা গেছে" },
  },
  before: {
    question: "আপনি কি আগে পিয়ানো বাজিয়েছেন?",
    never: "কখনো না",
    little: "একটু",
    yes: "হ্যাঁ, বাজাতে পারি",
    skipTests: "ম্যাপের প্রতিটি জগতে একটি এগিয়ে যাওয়ার পরীক্ষা আছে। পাস করলে সেই জগতের সব পাঠ একসঙ্গে খুলে যায়।",
  },
  goal: {
    question: "দিনে কতটা?",
    lead: "টানা দিন বাড়াতে প্রতিদিন লক্ষ্য পূরণ করুন। তিনটি তারা নিয়ে একটি নতুন পাঠ শেষ করলে ৩০ XP পাওয়া যায়।",
    label: "দৈনিক লক্ষ্য",
    names: { "10": "আরামে", "20": "নিয়মিত", "30": "উৎসাহী", "50": "সাহসী" },
    option: (xp: number, name: string) => `${formatNumber("bn", xp)} XP, ${name}`,
    start: "শেখা শুরু করুন",
  },
};
