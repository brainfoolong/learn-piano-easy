/** The lesson view of *Learn Piano* in Indonesian. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { learnLesson as en } from "./learn-lesson.en";

const n = (value: number) => formatNumber("id", value);

export const learnLesson: Translation<typeof en> = {
  stepOf: (step: number, count: number) => `Langkah ${n(step)} dari ${n(count)}`,
  leave: "Keluar dari pelajaran",
  leaveDialog: {
    title: "Keluar dari pelajaran ini?",
    body: "Kemajuanmu di pelajaran ini baru disimpan setelah pelajaran selesai.",
    stay: "Terus belajar",
    leave: "Keluar",
    close: "Tutup",
  },
  lacks: {
    touch: "Keyboardku tidak bisa membunyikan not keras dan lembut",
    pedal: "Keyboardku tidak punya pedal",
  },
  loading: "Memuat pelajaran…",
  missing: "Pelajaran ini tidak ada.",
  backToCourse: "Kembali ke kursus",
  band: {
    continue: "Lanjutkan",
    right: "Benar!",
    tryAgain: "Hampir. Coba lagi.",
  },
  demo: {
    play: "Dengarkan",
    playAgain: "Dengarkan lagi",
    skip: "Lewati",
    piano: "Piano yang memainkan contoh",
    playing: "Sedang diputar",
    slow: "Pelan",
    side: "Tampak samping",
  },
  quiz: {
    answers: "Jawaban",
    wrong: "Hampir. Coba jawaban lain.",
    hint: "Jawaban yang disorot itulah yang benar.",
  },
  findKey: {
    piano: "Piano. Tekan tuts yang disebut langkah ini.",
    marks: { next: "Tuts ini", correct: "Benar", mistake: "Bukan yang ini" },
    wrong: "Itu tuts lain. Coba lagi.",
    hint: "Tuts yang disorot itulah jawabannya.",
    timeUp: "Waktu habis.",
    secondsLeft: (seconds: number) => `${seconds} dtk`,
  },
  playNotes: {
    piano: "Piano. Mainkan frasa ini secara berurutan.",
    marks: { next: "Mainkan ini berikutnya", correct: "Sudah dimainkan", mistake: "Bukan yang ini" },
    wrong: "Itu not lain. Coba lagi.",
    hint: (note: string) => `Not berikutnya adalah ${note}.`,
    hintChord: (...notes: string[]) => {
      const and = notes.length > 2 ? ", dan " : " dan ";
      return `Berikutnya, mainkan ${notes.slice(0, -1).join(", ")}${and}${notes.at(-1)} bersamaan.`;
    },
    expression: {
      "too-loud": "Tutsnya benar, tetapi terlalu keras. Mainkan dengan lembut.",
      "too-soft": "Tutsnya benar, tetapi terlalu lembut. Mainkan dengan keras.",
      "pedal-up": "Tutsnya benar. Injak pedal saat kamu memainkannya.",
      "pedal-down": "Tutsnya benar. Lepaskan pedal sebelum kamu memainkannya.",
    },
  },
  listen: {
    question: (pair: number, count: number) => `Pasangan ${n(pair)} dari ${n(count)}`,
    playAgain: "Dengarkan lagi",
    group: "Apakah not kedua lebih tinggi, lebih rendah, atau sama?",
    answers: { higher: "Lebih tinggi", lower: "Lebih rendah", same: "Sama" },
    wrong: "Hampir. Dengarkan lagi dan coba jawaban lain.",
    hint: "Jawaban yang disorot itulah yang benar.",
    roundAgain: (right: number, asked: number) => `${n(right)} dari ${n(asked)} benar. Ayo main satu ronde lagi.`,
  },
  readNote: {
    staff: { treble: "Not pada paranada kunci G", bass: "Not pada paranada kunci F" },
    count: (note: number, total: number) => `Not ${n(note)} dari ${n(total)}`,
    answers: "Nama not",
    piano: "Piano. Mainkan not yang ada di paranada.",
    marks: { next: "Tuts ini", correct: "Benar", mistake: "Bukan yang ini" },
    wrongName: "Itu not lain. Lihat lagi.",
    wrongKey: "Itu tuts lain. Coba lagi.",
    hintName: "Nama yang disorot itulah yang benar.",
    hintKey: "Tuts yang disorot itulah jawabannya.",
    again: "Masih ada beberapa yang belum benar. Ayo kita ulangi.",
  },
  rhythmTap: {
    start: "Mulai",
    listen: "Dengarkan: satu birama hitungan awal.",
    tap: "Sekarang tekan tuts apa saja di setiap bunyi klik.",
    piano: "Area ketuk.Tekan tuts apa saja tepat pada ketukan.",
    marks: { next: "Ketuk di sini", correct: "Tepat pada ketukan", mistake: "Meleset dari ketukan" },
    short: (hits: number, beats: number) => `Kamu mengetuk ${n(hits)} dari ${n(beats)} ketukan. Coba lagi.`,
    hint: "Ketuk tepat saat kamu mendengar klik. Titik-titik berkedip pada setiap ketukan.",
    play: "Sekarang mainkan setiap not pada kliknya.",
    phrasePiano: "Tuts. Mainkan frasa ini mengikuti bunyi klik.",
    shortNotes: (hits: number, notes: number) => `${n(hits)} dari ${n(notes)} not tepat waktu. Coba lagi.`,
    restSounded: "Ada tuts yang berbunyi saat istirahat. Angkat jarimu dan biarkan hening di sana.",
    phraseHint:
      "Mainkan setiap not pada kliknya, dan angkat tuts sebelum istirahat. Titik-titik berkedip pada setiap ketukan.",
    pattern: {
      taps: (countIn: number, taps: number) => `Hitungan awal ${n(countIn)} ketukan. Lalu ketuk ${n(taps)} ketukan.`,
      phrase: (countIn: number, ...parts: string[]) =>
        `Hitungan awal ${n(countIn)} ketukan. Lalu mainkan${parts.length > 0 ? `: ${parts.join(", ")}` : ""}.`,
      held: (note: string, beats: number) => `${note} ditahan selama ${n(beats)} ketukan`,
      rest: (beats: number) => (beats === 1 ? "istirahat" : `istirahat selama ${n(beats)} ketukan`),
    },
  },
  song: {
    play: "Mainkan di pemutar",
    goal: (percent: number) => `Mainkan lagu ini dengan ${n(percent)}% not yang benar.`,
    notYet: (percent: number) =>
      `Lagu ini menunggumu. Mainkan lagi kapan saja, dan usahakan mencapai ${n(percent)}%.`,
    played: (percent: number) => `Kamu memainkannya dengan ${n(percent)}% not yang benar.`,
  },
  recap: {
    heading: "Yang kamu pelajari",
  },
  end: {
    heading: "Pelajaran selesai",
    stars: (stars: number) => `${n(stars)} dari ${n(3)} bintang`,
    again: "Main lagi",
    saving: "Menyimpan kemajuanmu…",
    saved: "Tersimpan di perangkat ini.",
    unsaved: "Browser ini tidak menyimpan data, jadi hasil ini hanya bertahan sampai kamu menutup tab.",
    failed: "Tidak dapat menyimpan kemajuanmu.",
    retry: "Coba lagi",
    level: (level: number, toNext: number) => `Level ${n(level)}: ${n(toNext)} XP lagi menuju level ${n(level + 1)}`,
    skipOpened: (world: string) => `Semua pelajaran di “${world}” kini terbuka.`,
    skipShort: (stars: number) => `Butuh ${n(stars)} bintang untuk membuka dunia ini. Coba lagi kapan saja.`,
  },
  moment: {
    continue: "Lanjutkan",
    level: {
      heading: "Naik level!",
      name: (level: number) => `Level ${n(level)}`,
      text: "Setiap pelajaran membawamu lebih jauh. Terus semangat!",
    },
    badge: { heading: "Lencana baru!" },
  },
};
