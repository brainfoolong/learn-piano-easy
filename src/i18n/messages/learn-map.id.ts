/** The world map of *Learn Piano* in Indonesian. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { learnMap as en } from "./learn-map.en";

export const learnMap: Translation<typeof en> = {
  lead: "Jelajahi jalannya, pelajaran demi pelajaran. Setiap dunia berakhir dengan tantangan akhir.",
  loading: "Memuat kursus…",
  continue: "Lanjutkan",
  nextUp: "Berikutnya",
  world: (n: number) => `Dunia ${formatNumber("id", n)}`,
  progress: (done: number, all: number) => `${formatNumber("id", done)} dari ${formatNumber("id", all)} pelajaran`,
  locked: "Taklukkan tantangan akhir dunia sebelumnya, atau lulus tes lompat dunia ini, untuk membukanya.",
  beaten: "Ditaklukkan",
  node: {
    locked: (name: string) => `${name}, terkunci`,
    open: (name: string) => `${name}, terbuka`,
    done: (name: string, stars: number) => `${name}, ${formatNumber("id", stars)} dari 3 bintang`,
  },
  medal: (world: string, earned: boolean) => `Lencana “${world}”, ${earned ? "sudah diraih" : "belum diraih"}`,
  skipTest: {
    title: (world: string) => `Tes lompat: ${world}`,
    text: "Sudah bisa? Lulus tes lompat untuk membuka setiap pelajaran di sini.",
    action: "Ikuti tes lompat",
  },
  bar: {
    label: "Kemajuanmu",
    streak: (days: number) => `${formatNumber("id", days)} hari beruntun`,
    level: (level: number) => `Level ${formatNumber("id", level)}`,
    today: "Hari ini",
    todayGoal: (xp: number, goal: number) => `Hari ini: ${formatNumber("id", xp)} dari ${formatNumber("id", goal)} XP`,
    days: (days: number) => `${formatNumber("id", days)} hari`,
  },
};
