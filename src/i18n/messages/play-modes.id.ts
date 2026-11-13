/** The play modes in Indonesian. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { playModes as en } from "./play-modes.en";

export const playModes: Translation<typeof en> = {
  eyebrow: "Bersedia, siap, main!",
  lead: "Pilih satu mode, dan pemutar langsung menyiapkan lagu, bantuan, dan tampilan yang pas. Lalu kamu tinggal bermain.",
  note: "Mode mengubah beberapa pengaturan pemutar. Setelah dimulai, kamu bisa membatalkannya dengan sekali pilih, dan mengubah pengaturan apa pun nanti.",
  traits: "Yang diatur",
  song: (title: string) => `Lagu: ${title}`,
  noSong: "Tidak butuh lagu",
  start: "Mulai",
  groups: {
    fun: {
      heading: "Main untuk hiburan",
      lead: "Poin, percikan, dan pertunjukan. Pilih satu, dan biarkan piano menghiburmu.",
    },
    learn: {
      heading: "Pelajari lagu",
      lead: "Setiap mode membantumu belajar lagu dengan caranya sendiri, dari satu tangan bergantian sampai membaca partitur.",
    },
    skills: {
      heading: "Latih keterampilan",
      lead: "Temukan not dengan cepat, main bebas, atau dengarkan cara kerja akor. Beberapa mode sama sekali tidak butuh lagu.",
    },
  },
  modes: {
    game: {
      tag: "Untuk hiburan",
      name: "Mode permainan",
      text: "Setiap not yang kamu mainkan dengan tepat memberi poin, dan piano membalas dengan kilauan. Kejar kombo dan kalahkan skor terbaikmu.",
      traits: ["Poin dan kombo di level mudah", "Percikan, kilatan, dan piano yang bersinar", "Lagu pendek yang mudah diingat"],
      song: "In the Hall of the Mountain King, Pemula",
    },
    challenge: {
      tag: "Untuk ahli",
      name: "Tantangan",
      text: "Mode permainan di level tersulit, tanpa nama not dan tanpa petunjuk. Hanya permainan tanpa cela yang meraih skor tertinggi.",
      traits: ["Poin dan kombo di level sulit", "Tanpa nama not dan tanpa petunjuk tuts", "Versi lagu yang lebih sulit"],
      song: "In the Hall of the Mountain King, Sedang",
    },
    concert: {
      tag: "Duduk santai",
      name: "Konser",
      text: "Piano memainkan lagu untukmu, dengan api, bintang, dan kamera yang bergerak. Tonton pertunjukannya, atau ikut main kalau berani.",
      traits: ["Kamera ala film", "Api, bintang, dan percikan", "Piano yang bersinar dan gelombang cahaya"],
      song: "Carol of the Bells, Sulit",
    },
    playAlong: {
      tag: "Langkah demi langkah",
      name: "Ikut main",
      text: "Lagu menunggumu di setiap not. Setiap not menampilkan nama dan jarinya, dan setiap tuts menampilkan namanya.",
      traits: ["Not menunggumu", "Nama not dan jari di atas not", "Nama di tuts putih dan tuts hitam"],
      song: "Ode to Joy, Pemula",
    },
    oneHand: {
      tag: "Mulai dari yang kecil",
      name: "Satu tangan dulu",
      text: "Pelajari tangan kanan dulu, sementara aplikasi memainkan tangan kiri. Lagu menunggu setiap notmu.",
      traits: ["Hanya tangan kananmu yang bermain", "Aplikasi memainkan tangan kiri", "Ganti tangan di pengaturan, di bagian “Tanganmu”"],
      song: "Jingle Bells, Pemula",
    },
    readMusic: {
      tag: "Partitur",
      name: "Baca partitur",
      text: "Partitur tampil di atas piano, dan lagu menunggumu. Not tidak punya nama, jadi kamu membacanya dari paranada.",
      traits: ["Partitur di atas piano", "Not menunggumu", "Cahaya lembut di belakang setiap not yang berbunyi"],
      song: "Mary Had a Little Lamb, Pemula",
    },
    slowSteady: {
      tag: "Latihan",
      name: "Pelan tapi pasti",
      text: "Empat birama pertama diulang, mulai dengan setengah kecepatan. Setiap putaran sedikit lebih cepat, sampai kamu bermain dengan kecepatan penuh.",
      traits: ["Empat birama pertama diulang", "Mulai dengan setengah kecepatan, lebih cepat tiap putaran", "Hitungan awal sebelum setiap putaran"],
      song: "Für Elise, Mudah",
    },
    rhythm: {
      tag: "Tepat waktu",
      name: "Penjaga ritme",
      text: "Metronom berdetak, dan setiap not yang kamu mainkan dinilai dari ketepatan waktunya. Tanpa nama not dan tanpa menunggu, hanya ketukan.",
      traits: ["Metronom di setiap ketukan", "Setiap not dinilai dari ketepatan waktunya", "Lagu tidak pernah menunggu"],
      song: "Twinkle Twinkle Little Star, Mudah",
    },
    colourByFinger: {
      tag: "Jari",
      name: "Warna per jari",
      text: "Setiap jari punya warnanya sendiri, di not dan di tuts. Lagu menunggu sampai kamu menemukan jari yang tepat.",
      traits: ["Not berwarna sesuai jari", "Tuts menyala dengan warna jarinya", "Not menunggumu"],
      song: "Twinkle Twinkle Little Star, Pemula",
    },
    noteTrainer: {
      tag: "Not",
      name: "Latihan not",
      text: "Aplikasi menyebut sebuah not, dan kamu menemukannya di tuts. Di akhir, kamu melihat not mana yang tertukar.",
      traits: ["Not C mayor, dari C tengah ke atas", "Sepuluh not per ronde", "Daftar not yang tertukar di akhir"],
    },
    freeJam: {
      tag: "Hanya kamu",
      name: "Main sesukamu",
      text: "Tanpa lagu dan tanpa aturan. Mainkan apa saja, dan piano menjawab dengan percikan dan cahaya. Rekam dan simpan sebagai file MIDI.",
      traits: ["Main bebas, tanpa lagu", "Percikan, bintang, dan piano yang bersinar", "Rekam dan simpan permainanmu"],
    },
    chordExplorer: {
      tag: "Harmoni",
      name: "Penjelajah akor",
      text: "Setiap akor lagu diberi nama saat diputar, dengan tingkatnya dalam nada dasar. Balok di atas not menunjukkan tempat setiap not dalam tangga nada.",
      traits: ["Nama akor saat lagu diputar", "Angka Romawi untuk setiap akor", "Tingkat tangga nada, dengan setiap nada akar ditandai"],
      song: "Canon in D, Mudah",
    },
  },
  toast: {
    started: (name: string) => `${name} aktif.`,
    undo: "Urungkan",
    undone: "Pengaturanmu sendiri sudah kembali.",
  },
};
