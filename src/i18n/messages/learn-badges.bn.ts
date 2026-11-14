/** The badges of *Learn Piano* in Bengali. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { learnBadges as en } from "./learn-badges.en";

export const learnBadges: Translation<typeof en> = {
  cheer: "আপনার পিয়ানো শিক্ষক আপনার জন্য হাততালি দিচ্ছে",
  fixed: {
    "first-note": { name: "প্রথম নোট", description: "একটি পাঠে আপনার প্রথম নোটটি বাজান।" },
    "first-lesson": { name: "প্রথম পাঠ", description: "আপনার প্রথম পাঠটি শেষ করুন।" },
    "first-three-stars": { name: "তিনটি তারা", description: "তিনটি তারা নিয়ে একটি পাঠ শেষ করুন।" },
    "three-stars-ten": { name: "তারার ঝুলি", description: "দশটি পাঠে তিনটি করে তারা পান।" },
    "first-daily-goal": { name: "লক্ষ্য পূরণ", description: "প্রথমবার আপনার দৈনিক লক্ষ্য পূরণ করুন।" },
    "streak-3": { name: "টানা তিন দিন", description: "টানা তিন দিন দৈনিক লক্ষ্য পূরণ করুন।" },
    "streak-7": { name: "টানা এক সপ্তাহ", description: "টানা সাত দিন দৈনিক লক্ষ্য পূরণ করুন।" },
    "streak-30": { name: "টানা এক মাস", description: "টানা ত্রিশ দিন দৈনিক লক্ষ্য পূরণ করুন।" },
    "streak-100": { name: "একশো দিন", description: "টানা একশো দিন দৈনিক লক্ষ্য পূরণ করুন।" },
    "notes-1000": { name: "এক হাজার নোট", description: "পাঠগুলোতে এক হাজার নোট বাজান।" },
    "notes-10000": { name: "দশ হাজার নোট", description: "পাঠগুলোতে দশ হাজার নোট বাজান।" },
    "rhythm-ace": { name: "ছন্দে পাকা", description: "প্রথম চেষ্টাতেই একটি ছন্দের ধাপ পার হন।" },
    "sight-reader": { name: "দেখেই চেনা", description: "কোনো ভুল ছাড়া টানা দশটি নোট পড়ুন।" },
    "early-bird": { name: "ভোরের পাখি", description: "সকাল ৮টার আগে একটি পাঠ শেষ করুন।" },
    "night-owl": { name: "রাতজাগা পাখি", description: "রাত ১০টা বা তার পরে একটি পাঠ শেষ করুন।" },
    comeback: { name: "আবার স্বাগতম", description: "এক সপ্তাহ দূরে থাকার পর একটি পাঠের জন্য ফিরে আসুন।" },
    legendary: {
      name: "কঠিন গান",
      description: "“শুধু পিয়ানো বাজান” অংশে আমাদের কোনো একটি গানের “কঠিন” ভার্শন শেষ পর্যন্ত বাজান।",
    },
  },
  world: {
    name: (world: string) => `“${world}” আয়ত্ত হয়েছে`,
    description: (world: string) => `“${world}” জগতের বড় চ্যালেঞ্জ জয় করুন।`,
  },
};
