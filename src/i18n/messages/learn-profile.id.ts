/** The profile of *Learn Piano* in Indonesian. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { learnProfile as en } from "./learn-profile.en";

const n = (value: number) => formatNumber("id", value);
const days = (value: number) => `${n(value)} hari`;

export const learnProfile: Translation<typeof en> = {
  loading: "Memuat kemajuanmu…",
  level: {
    heading: "Level",
    name: (level: number) => `Level ${n(level)}`,
    total: (xp: number) => `Total ${n(xp)} XP`,
    toNext: (level: number) => `Menuju level ${n(level)}`,
  },
  streak: {
    heading: "Beruntun",
    current: (count: number) => days(count),
    currentLabel: "beruntun saat ini",
    best: (count: number) => `Terbaik: ${days(count)}`,
    today: (xp: number, goal: number) =>
      xp >= goal ? `Hari ini: ${n(xp)} XP, target ${n(goal)} tercapai` : `Hari ini: ${n(xp)} dari ${n(goal)} XP`,
  },
  calendar: {
    heading: "Delapan minggu terakhir",
    label: (met: number, played: number) =>
      `Dalam delapan minggu terakhir, target tercapai pada ${days(met)}, dan ada pelajaran pada ${days(played)}.`,
    met: "Target tercapai",
    played: "Bermain",
    none: "Tanpa pelajaran",
  },
  stats: {
    heading: "Statistik",
    lessons: "Pelajaran selesai",
    threeStars: "Pelajaran bintang tiga",
    days: "Hari bermain",
    badges: "Lencana diraih",
  },
  badges: {
    heading: "Lencana",
    lead: (earned: number, all: number) => `${n(earned)} dari ${n(all)} diraih`,
    earned: (name: string) => `${name}, sudah diraih`,
    locked: (name: string) => `${name}, belum diraih`,
  },
  choices: {
    heading: "Pengaturanmu",
    goal: "Target harian",
    goalHelp: "XP yang dibutuhkan setiap hari agar beruntunmu terus berlanjut.",
    sounds: "Suara hadiah",
    soundsHelp: "Bunyi denting untuk langkah yang lulus, bintang, level baru, dan lencana. Piano selalu berbunyi.",
  },
  data: {
    heading: "Datamu",
    lead: "Kemajuanmu tersimpan di browser ini. Halaman “Datamu” menyimpannya bersama semua yang lain ke satu file, dan bisa memulihkannya.",
    open: "Cadangkan atau pulihkan",
    reset: "Atur ulang semua kemajuan",
    failed: "Tidak dapat menyimpan di browser. Tidak ada yang berubah.",
    resetDone: "Kemajuanmu sudah diatur ulang. File cadangan memuat semua yang tadinya ada.",
    close: "Tutup",
    cancel: "Pertahankan kemajuanku",
    ask: {
      title: "Atur ulang semua kemajuan?",
      text: "Ini menghapus setiap pelajaran, bintang, poin XP, dan lencana dari browser ini. Pengaturanmu tetap ada.",
      next: "Lanjutkan",
    },
    askAgain: {
      title: "Kamu yakin?",
      text: "File cadangan disimpan lebih dulu, jadi kamu bisa memulihkan semuanya nanti. Lalu kemajuanmu dimulai dari awal.",
      confirm: "Atur ulang kemajuanku",
    },
  },
};
