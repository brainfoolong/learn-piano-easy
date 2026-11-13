/** The first setup of *Learn Piano* in Indonesian. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { learnSetup as en } from "./learn-setup.en";

export const learnSetup: Translation<typeof en> = {
  title: "Selamat datang di Belajar Piano",
  welcome: "Halo! Aku guru pianomu. Tiga pertanyaan singkat, lalu kita main.",
  mascot: "Guru pianomu, seekor kera berbulu warna madu yang memakai jaket korduroi",
  close: "Lewati persiapan",
  progress: "Persiapan",
  steps: ["Pianomu", "Pengalamanmu", "Target harianmu"],
  doneStep: "Selesai",
  next: "Lanjutkan",
  device: {
    question: "Kamu akan bermain dengan apa?",
    midi: { name: "Keyboard MIDI", text: "Piano digital atau keyboard, dicolokkan lewat USB." },
    computer: { name: "Keyboard komputer", text: "Tombol huruf memainkan not." },
    screen: { name: "Layar", text: "Ketuk atau klik tuts di layar." },
    noMidi: "Browser ini tidak mendukung MIDI. Mainkan dengan keyboard komputer atau layar saja.",
    check: "Tekan tuts apa saja untuk memastikan kami mendengarnya.",
    checkMidi: "Tekan tuts apa saja di keyboard MIDI-mu.",
    checkComputer: "Tekan tombol huruf, misalnya Q, W, atau E.",
    checkScreen: "Ketuk salah satu tuts di bawah.",
    heard: (note: string) => `Kami mendengarmu: itu tadi ${note}.`,
    keys: "Piano untuk dicoba",
    skip: "Lewati pemeriksaan",
    marks: { next: "Coba tuts ini", correct: "Terdengar", mistake: "Terdengar" },
  },
  before: {
    question: "Kamu pernah bermain piano?",
    never: "Belum pernah",
    little: "Sedikit",
    yes: "Ya, aku bisa bermain",
    skipTests: "Setiap dunia di peta punya tes lompat. Lulus tes itu untuk membuka semua pelajaran di dunia itu sekaligus.",
  },
  goal: {
    question: "Berapa banyak setiap hari?",
    lead: "Capai targetmu setiap hari agar hari beruntunmu bertambah. Pelajaran baru dengan tiga bintang memberi 30 XP.",
    label: "Target harian",
    names: { "10": "Santai", "20": "Tekun", "30": "Bersemangat", "50": "Berani" },
    option: (xp: number, name: string) => `${formatNumber("id", xp)} XP, ${name}`,
    start: "Mulai belajar",
  },
};
