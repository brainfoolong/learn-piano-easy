/** The Indonesian catalog. It is a translation of the English one, so a text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import { dataPage } from "./data.id";
import { en, type Messages } from "./en";
import { learnBadges } from "./learn-badges.id";
import { learnLesson } from "./learn-lesson.id";
import { learnMap } from "./learn-map.id";
import { learnProfile } from "./learn-profile.id";
import { learnSetup } from "./learn-setup.id";
import { playerBar } from "./player-bar.id";
import { playerInput } from "./player-input.id";
import { playerLibrary } from "./player-library.id";
import { playerSettings } from "./player-settings.id";
import { playerShell } from "./player-shell.id";
import { playModes } from "./play-modes.id";
import { sponsorPage } from "./sponsor.id";

const SITE_NAME = en.siteName;

export const id: Translation<Messages> = {
  noscript: `${SITE_NAME} butuh JavaScript agar bisa berjalan.`,
  pages: {
    home: {
      description:
        "Belajar piano sambil bermain. Kursus terpandu, piano 3D, dan keyboard MIDI-mu. Gratis, sumber terbuka, dan bisa tanpa internet.",
    },
    play: {
      title: "Main Piano Saja",
      description: "Buka file MIDI, lihat notnya melayang ke piano 3D, lalu ikut mainkan di keyboard MIDI-mu.",
    },
    modes: {
      title: "Mode bermain",
      description:
        "Cara bermain yang siap pakai: permainan dengan poin dan percikan cahaya, atau lagu yang menunggumu, dengan nama setiap not tertulis.",
    },
    learn: {
      title: "Belajar Piano",
      description: "Kursus piano terpandu yang dibuat seperti permainan, selangkah demi selangkah.",
    },
    profile: {
      title: "Kemajuanmu",
      description: "Levelmu, lencanamu, dan seberapa banyak kamu sudah bermain.",
    },
    about: {
      title: "Tentang",
      description: "Apa itu Learn Piano Easy, dan lisensi semua yang disertakannya.",
    },
    data: {
      title: "Datamu",
      description: "Simpan semua yang ada di browser ini ke satu file, lalu pulihkan di perangkat apa pun.",
    },
    sponsor: {
      title: "Dukungan",
      description: "Learn Piano Easy gratis dan dibuat oleh satu orang. Begini cara kamu bisa membantunya tumbuh.",
    },
    imprint: {
      title: "Informasi hukum",
      description: "Siapa yang menjalankan Learn Piano Easy, beserta alamat dan kontaknya.",
    },
    privacy: {
      title: "Kebijakan privasi",
      description:
        "Apa yang disimpan Learn Piano Easy di perangkatmu, apa yang dihitungnya, dan cara mematikan penghitungan itu.",
    },
    design: {
      title: "Sistem desain",
      description: "Setiap komponen situs dalam setiap keadaannya.",
    },
    lesson: {
      title: "Pelajaran",
      description: "Pelajaran singkat dari Belajar Piano, selangkah demi selangkah.",
    },
  },
  lessonPage: {
    description: (title: string, world: string, intro: string) =>
      `${title}. Pelajaran piano gratis dari “${world}”. ${intro}`,
  },
  topBar: {
    home: `${SITE_NAME}, beranda`,
    menu: "Menu",
    nav: "Utama",
    learn: "Belajar Piano",
    play: "Main Piano Saja",
    modes: "Mode bermain",
    language: "Bahasa",
    theme: "Tema",
    themeSystem: "Ikuti sistem",
    themeLight: "Terang",
    themeDark: "Gelap",
  },
  landing: {
    hero: {
      eyebrow: "Gratis dan sumber terbuka",
      lead: "Lihat not jatuh ke tuts, lalu mainkan sendiri, lagu demi lagu.",
      start: "Mulai belajar",
      play: "Main saja",
      proofs: ["Tanpa akun", "Bisa tanpa internet", "Tanpa iklan"],
      mascot: "Guru piano kami, seekor kera berbulu warna madu, memainkan piano tegak di ruangan yang cerah",
      greeting: "Halo! Aku guru pianomu. Ayo kita main?",
      demo: {
        eyebrow: "Coba di sini",
        heading: "Not jatuh, dan kamu yang main",
        text: "Setiap lagu tampak seperti ini. Setiap not jatuh ke tutsnya, dan kamu menekan tuts itu saat not mendarat.",
      },
      piano: "Pemutar, dengan not Twinkle, Twinkle, Little Star yang jatuh ke tutsnya",
      hint: "Begitu lagu diputar, tekan tutsnya untuk ikut bermain.",
      playSong: "Putar",
      stopSong: "Hentikan",
    },
    twoWays: {
      eyebrow: "Dua cara bermain",
      heading: "Belajar selangkah demi selangkah, atau main saja",
      lead: "Pilih bagian yang cocok dengan harimu. Kamu bisa beralih kapan saja.",
      learn: {
        tag: "Kursus terpandu",
        title: "Belajar Piano",
        text: "Kursus terpandu dari langkah-langkah kecil. Setiap langkah mengajarkan satu keterampilan, lalu sebuah lagu memakainya.",
        action: "Mulai belajar",
        picture: "Peta kursus, dengan pelajaran pertama selesai dan pelajaran berikutnya terbuka",
      },
      play: {
        tag: "Lagu apa pun",
        title: "Main Piano Saja",
        text: "Buka lagu apa pun, lihat notnya melayang ke piano 3D, lalu ikut mainkan.",
        action: "Main saja",
        picture: "Piano 3D, dengan not yang jatuh ke tutsnya",
      },
    },
    howItWorks: {
      eyebrow: "Cara belajarnya",
      heading: "Empat langkah, berulang terus",
      lead: "Setiap pelajaran mengikuti putaran singkat yang sama, jadi kamu selalu tahu apa yang datang berikutnya.",
      steps: [
        {
          title: "Pelajari keterampilan",
          text: "Pelajaran singkat menunjukkan satu hal baru, seperti not, ritme, atau posisi tangan.",
        },
        { title: "Berlatih",text: "Mainkan di keyboardmu sendiri. Piano menunggumu dan menandai setiap not yang benar." },
        { title: "Mainkan lagu sungguhan", text: "Pakai keterampilan itu di lagu dari pustaka, dengan level yang cocok untukmu." },
        { title: "Raih lencana", text: "Setiap pelajaran memberi XP, dan setiap dunia yang kamu selesaikan memberi lencana." },
      ],
    },
    rarities: {
      eyebrow: "Satu melodi, empat level",
      heading: "Setiap lagu tumbuh bersamamu",
      lead: "Setiap lagu kami punya empat versi. Ganti versinya dan lihat Ode to Joy tumbuh.",
      control: "Versi",
      piano: "Piano yang memainkan Ode to Joy",
      names: { common: "Pemula", rare: "Mudah", epic: "Sedang", legendary: "Sulit" },
      taglines: {
        common: "Hari-hari pertamamu. Satu posisi tangan, not yang pelan, dan bas yang menunggumu.",
        rare: "Minggu-minggu pertamamu. Not seperdelapan, akor sederhana, dan bas yang bergerak.",
        epic: "Bulan-bulan pertamamu. Akor terurai, dan ibu jari yang menyusup.",
        legendary: "Sekitar setahun berlatih. Kedua tangan sibuk, cepat, dan mandiri.",
      },
    },
    devices: {
      eyebrow: "Main dengan yang kamu punya",
      heading: "Tak punya piano? Mulai saja",
      lead: "Semua ini bisa memainkan not. Keyboard sungguhan terasa paling enak, dan dengan yang lain kamu bisa mulai hari ini.",
      ways: [
        { title: "Keyboard MIDI", text: "Colokkan lewat USB dan izinkan MIDI sekali. Setelah itu, situs menemukannya sendiri." },
        { title: "Layar sentuh", text: "Ketuk tuts di layar, dengan jari sebanyak yang kamu mau." },
        {
          title: "Keyboard komputermu",
          text: "Tombol huruf dan angka memainkan dua oktaf, dan kamu bisa memindahkan not mana pun ke tombol lain.",
        },
      ],
      piano: "Piano kecil untuk dicoba",
      start: "Muat piano kecil untuk memainkannya",
      hint: "Sentuh tuts untuk mendengarnya.",
    },
    free: {
      eyebrow: "Gratis, dan milikmu",
      heading: "Tak perlu bayar, tak perlu daftar",
      lead: "Situs ini hadiah dari seseorang yang mencintai piano, dan akan tetap gratis.",
      promises: [
        {
          title: "Gratis, tanpa akun",
          text: "Buka situsnya dan mulai bermain. Tidak ada pendaftaran dan tidak ada yang perlu dibeli.",
        },
        {
          title: "Sumber terbuka",
          text: "Setiap baris kode terbuka untuk umum di bawah Lisensi MIT. Baca, ubah, dan bagikan.",
        },
        {
          title: "Bisa tanpa internet",
          text: "Setelah dimuat, situs berjalan tanpa jaringan. Lagu yang pernah kamu buka juga bisa diputar tanpa internet.",
        },
        {
          title: "Tanpa iklan, tanpa profil",
          text: "Apa pun yang kamu mainkan tidak keluar dari perangkatmu. Kami hanya menghitung kunjungan halaman, tanpa cookie, dan tidak menjual apa pun.",
        },
      ],
    },
    questions: {
      eyebrow: "Pertanyaan",
      heading: "Yang pertama kali ditanyakan orang",
      items: [
        {
          question: "Apakah aku butuh piano?",
          answer: "Tidak. Keyboard MIDI paling bagus, tetapi layar sentuh atau keyboard komputermu juga bisa memainkan setiap not.",
        },
        {
          question: "Browser mana yang bisa dipakai?",
          answer:
            "Browser terkini mana pun bisa memutar lagu. Keyboard MIDI butuh Web MIDI, yang ada di Chrome, Edge, dan Firefox, tetapi tidak di Safari.",
        },
        {
          question: "Apakah aku butuh akun?",
          answer: "Tidak. Tidak ada yang perlu didaftarkan, dan pengaturanmu tetap tersimpan di browser ini.",
        },
        {
          question: "Apakah bisa dipakai tanpa internet?",
          answer:
            "Bisa. Buka situsnya sekali saat terhubung ke internet, dan setelah itu situs berjalan tanpa jaringan. Lagu yang sudah pernah kamu buka juga bisa diputar tanpa internet.",
        },
        {
          question: "Bisakah aku memainkan laguku sendiri?",
          answer:
            "Bisa. Buka file MIDI atau MusicXML apa pun di Main Piano Saja. File itu dibaca di perangkatmu dan tidak pernah diunggah.",
        },
        {
          question: "Lagu apa saja yang ada di pustaka?",
          answer:
            "Aransemen kami sendiri dari melodi terkenal, masing-masing dalam empat versi, beberapa karya kami sendiri, dan karya klasik dari koleksi terbuka.",
        },
        {
          question: "Benar-benar gratis?",
          answer: "Ya. Aplikasi ini sumber terbuka di bawah Lisensi MIT, tanpa iklan dan tanpa versi berbayar.",
        },
      ],
    },
    lastCall: {
      heading: "Siap kapan pun kamu siap",
      lead: "Pilih cara memulai. Kamu bisa beralih kapan saja.",
    },
  },
  footer: {
    tagline: "Belajar piano sambil bermain. Gratis, sumber terbuka, dan bisa tanpa internet.",
    nav: "Situs",
    explore: "Jelajahi",
    about: "Tentang dan lisensi",
    legal: "Hukum",
    language: "Halaman ini dalam",
    license: "Sumber terbuka di bawah Lisensi MIT.",
  },
  counts: {
    badges: (n: number) => `${formatNumber("id", n)} lencana`,
    minutesPlayed: (n: number) => `${formatNumber("id", n)} menit bermain`,
  },
  lesson: learnLesson,
  badges: learnBadges,
  map: learnMap,
  profile: learnProfile,
  setup: learnSetup,
  data: dataPage,
  sponsor: sponsorPage,
  playModes,
  player: { shell: playerShell, bar: playerBar, library: playerLibrary, input: playerInput, settings: playerSettings },
  ui: {
    pianoKeys: {
      noWebgl:
        "Browser ini tidak dapat menggambar piano. Aktifkan akselerasi perangkat keras di pengaturannya, atau mainkan dengan keyboard MIDI atau keyboard komputermu.",
    },
  },
};
