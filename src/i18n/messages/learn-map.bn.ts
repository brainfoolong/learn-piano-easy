/** The world map of *Learn Piano* in Bengali. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { learnMap as en } from "./learn-map.en";

export const learnMap: Translation<typeof en> = {
  lead: "একটি একটি পাঠ করে পথ ধরে এগিয়ে চলুন। প্রতিটি জগৎ শেষ হয় একটি বড় চ্যালেঞ্জ দিয়ে।",
  loading: "কোর্স লোড হচ্ছে…",
  continue: "চালিয়ে যান",
  nextUp: "এরপর",
  world: (n: number) => `জগৎ ${formatNumber("bn", n)}`,
  progress: (done: number, all: number) => `${formatNumber("bn", all)}টির মধ্যে ${formatNumber("bn", done)}টি পাঠ`,
  locked: "এটি খুলতে আগের জগতের বড় চ্যালেঞ্জ জয় করুন, বা এর এগিয়ে যাওয়ার পরীক্ষায় পাস করুন।",
  beaten: "জয় হয়েছে",
  node: {
    locked: (name: string) => `${name}, লক করা`,
    open: (name: string) => `${name}, খোলা`,
    done: (name: string, stars: number) => `${name}, ৩টির মধ্যে ${formatNumber("bn", stars)}টি তারা`,
  },
  medal: (world: string, earned: boolean) => `“${world}” ব্যাজ, ${earned ? "পাওয়া হয়েছে" : "এখনো পাওয়া হয়নি"}`,
  skipTest: {
    title: (world: string) => `এগিয়ে যাওয়ার পরীক্ষা: ${world}`,
    text: "এগুলো আগেই জানেন? এখানকার সব পাঠ খুলতে এগিয়ে যাওয়ার পরীক্ষায় পাস করুন।",
    action: "পরীক্ষা দিন",
  },
  bar: {
    label: "আপনার অগ্রগতি",
    streak: (days: number) => `টানা ${formatNumber("bn", days)} দিন`,
    level: (level: number) => `লেভেল ${formatNumber("bn", level)}`,
    today: "আজ",
    todayGoal: (xp: number, goal: number) => `আজ: ${formatNumber("bn", goal)}-এর মধ্যে ${formatNumber("bn", xp)} XP`,
    days: (days: number) => `${formatNumber("bn", days)} দিন`,
  },
};
