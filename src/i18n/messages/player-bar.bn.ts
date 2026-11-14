/** The player's bar in Bengali. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { playerBar as en } from "./player-bar.en";

export const playerBar: Translation<typeof en> = {
  actions: {
    play: "চালান বা পজ করুন",
    stop: "থামান আর শুরুতে ফিরে যান",
    seekBack: "৫ সেকেন্ড পিছিয়ে যান",
    seekForward: "৫ সেকেন্ড এগিয়ে যান",
    toStart: "শুরুতে ফিরে যান",
    faster: "আরও দ্রুত",
    slower: "আরও ধীরে",
    transposeUp: "উপরে ট্রান্সপোজ করুন",
    transposeDown: "নিচে ট্রান্সপোজ করুন",
    loop: "বেছে নেওয়া বারগুলো লুপে চালান, তারপর পুরো গানটি, তারপর বন্ধ",
    loopStart: "এই বারটি থেকে লুপ",
    loopEnd: "এই বারটি পর্যন্ত লুপ",
    zoomIn: "জুম ইন",
    zoomOut: "জুম আউট",
    fit: "পুরো গানটি দেখান",
    viewLeft: "দৃশ্য বাঁয়ে সরান",
    viewRight: "দৃশ্য ডানে সরান",
    fullscreen: "ফুল স্ক্রিন",
  },
  controls: {
    play: "চালান",
    pause: "পজ করুন",
    stop: "থামান",
    speed: "গতি",
    speedPercent: (n: number) => `${formatNumber("bn", n)}%`,
    transpose: "ট্রান্সপোজ",
    loop: "লুপ",
    repeatAll: "সব রিপিট",
    loopTitles: {
      off: "সেটিংসে বেছে নেওয়া বারগুলো লুপে চালান",
      measures: "এর বদলে পুরো গানটি রিপিট করুন",
      song: "রিপিট বন্ধ করুন",
    },
    more: "অন্যান্য টুল",
    zoom: "জুম",
    fit: "ফিট করুন",
    view: "দৃশ্য",
    leaveFullScreen: "ফুল স্ক্রিন থেকে বেরিয়ে যান",
    expert: "আরও টুল",
    expertTitles: {
      off: "সব টুল দেখান",
      on: "শুধু মূল টুলগুলো দেখান",
    },
  },
  hotkeys: {
    none: "নেই",
  },
  hotkeyDialog: {
    pressKey: "একটি কী চাপুন…",
    keyFor: (label: string) => `“${label}”-এর কী`,
    clear: "খালি করুন",
    clearTitle: (label: string) => `“${label}”-এর কী খালি করুন`,
    resetAll: "সব কী রিসেট করুন",
    help: "তালিকার একটি কী চাপুন, তারপর কিবোর্ডে যে কী চান সেটি চাপুন। Esc কী চাপলে এই ডায়ালগ বন্ধ হয়।",
    off: "সেটিংসে কিবোর্ড শর্টকাট বন্ধ করা আছে, তাই এই কীগুলো এখন কিছুই করে না।",
    open: "কিবোর্ড শর্টকাট বদলান",
  },
  timeline: {
    position: "গানের অবস্থান",
  },
};
