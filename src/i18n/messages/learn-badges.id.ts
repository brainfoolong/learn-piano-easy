/** The badges of *Learn Piano* in Indonesian. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { learnBadges as en } from "./learn-badges.en";

export const learnBadges: Translation<typeof en> = {
  cheer: "Guru pianomu bersorak untukmu",
  fixed: {
    "first-note": { name: "Not pertama", description: "Mainkan not pertamamu dalam pelajaran." },
    "first-lesson": { name: "Pelajaran pertama", description: "Selesaikan pelajaran pertamamu." },
    "first-three-stars": { name: "Tiga bintang", description: "Selesaikan pelajaran dengan tiga bintang." },
    "three-stars-ten": { name: "Pengumpul bintang", description: "Raih tiga bintang di sepuluh pelajaran." },
    "first-daily-goal": { name: "Target tercapai", description: "Capai target harianmu untuk pertama kalinya." },
    "streak-3": { name: "Tiga hari beruntun", description: "Capai target harianmu tiga hari beruntun." },
    "streak-7": { name: "Seminggu beruntun", description: "Capai target harianmu tujuh hari beruntun." },
    "streak-30": { name: "Sebulan beruntun", description: "Capai target harianmu tiga puluh hari beruntun." },
    "streak-100": { name: "Seratus hari", description: "Capai target harianmu seratus hari beruntun." },
    "notes-1000": { name: "Seribu not", description: "Mainkan seribu not dalam pelajaran." },
    "notes-10000": { name: "Sepuluh ribu not", description: "Mainkan sepuluh ribu not dalam pelajaran." },
    "rhythm-ace": { name: "Jagoan ritme", description: "Lulus langkah ritme pada percobaan pertama." },
    "sight-reader": { name: "Pembaca cepat", description: "Baca sepuluh not berturut-turut tanpa salah." },
    "early-bird": { name: "Ayam jago", description: "Selesaikan pelajaran sebelum pukul 8 pagi." },
    "night-owl": { name: "Burung hantu", description: "Selesaikan pelajaran pada pukul 10 malam atau lebih." },
    comeback: { name: "Selamat datang kembali", description: "Kembali untuk satu pelajaran setelah seminggu absen." },
    legendary: {
      name: "Lagu sulit",
      description: "Mainkan versi Sulit dari salah satu lagu kami sampai selesai di Main Piano Saja.",
    },
  },
  world: {
    name: (world: string) => `“${world}” dikuasai`,
    description: (world: string) => `Taklukkan tantangan akhir dunia “${world}”.`,
  },
};
