/** The player's shell in Indonesian. A text it leaves out shows in English. */
import { formatNumber } from "../format";
import type { Translation } from "../translation";
import type { playerShell as en } from "./player-shell.en";

/** `n` seconds with two decimals and no digit grouping, such as `12,50`. */
const seconds = (n: number) => formatNumber("id", n, { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: false });
/** `n` with one decimal and no digit grouping, such as `1,5`. */
const tenths = (n: number) => formatNumber("id", n, { minimumFractionDigits: 1, maximumFractionDigits: 1, useGrouping: false });
/** Indonesian has one plural form, so a count of files never doubles its noun. */
const files = (n: number) => `${formatNumber("id", n)} file`;

export const playerShell: Translation<typeof en> = {
  dialog: {
    close: "Tutup",
    hotkeys: "Pintasan keyboard",
    keyBindings: "Tombol keyboard komputer",
    pdf: "Simpan sebagai PDF",
    offlineFiles: "File tanpa internet",
    tracks: "Trek",
    songs: "Lagu",
    guide: (title) => `Panduan ${title}`,
    about: "Tentang Learn Piano Easy",
  },
  toast: {
    dismiss: "Tutup",
  },
  topbar: {
    songs: "Lagu",
    tracks: "Trek",
    guide: "Panduan",
    settings: "Pengaturan",
    about: "Tentang",
    openSong: "Lagu yang dibuka",
    demoSong: "Lagu contoh",
    songFallback: "Lagu",
  },
  songs: {
    noneFound: "Tidak ada file lagu yang ditemukan.",
    wrongKind: "Hanya file MIDI dan MusicXML yang bisa ditambahkan.",
    added: (n) => `${formatNumber("id", n)} lagu ditambahkan ke “Lagumu”.`,
    notKept: (reason) => `Tidak dapat menyimpan lagu: ${reason}`,
    soundsFailed: "Tidak dapat memuat suara piano, jadi lagu diputar tanpa suara.",
  },
  guide: {
    step: (n, summary) => `Langkah ${formatNumber("id", n)}: ${summary}.`,
    barLoops: (bar) => `Birama ${formatNumber("id", bar)} diulang.`,
    topBeaten: (title) => `Kamu berhasil melewati ${title}, langkah terakhir lagu ini. Permainanmu hebat!`,
    beaten: (title, next) => `Kamu berhasil melewati ${title}! Berikutnya: ${next}.`,
    playNext: (next) => `Mainkan ${next}`,
  },
  lesson: {
    label: "Pelajaran",
    target: (percent) => `Mainkan ${formatNumber("id", percent)}% not dengan benar dalam percobaan yang dinilai.`,
    back: "Kembali ke pelajaran",
    missing: "Lagu pelajaran ini tidak ada di katalog.",
  },
  finger: {
    label: "Not yang dipilih",
    setByYou: "diatur olehmu",
    fromGuide: "dari panduan",
    suggested: "disarankan",
    none: "tanpa jari",
    finger: (finger, source) => `jari ${finger}, ${source}`,
    line: (note, said) => `${note}: ${said}. Tekan 1 sampai 5 untuk mengaturnya, 0 untuk mengosongkan, Esc untuk selesai.`,
  },
  backgroundTrack: {
    notAudio: (file) => `${file} bukan audio yang bisa diputar browser ini.`,
    playsAlong: (file) => `${file} diputar bersama lagu.`,
  },
  about: {
    license: "Lisensi",
    notices: "Pemberitahuan pihak ketiga",
    packageLicense: (name) => `Lisensi ${name}`,
    offline: "Teks ini belum tersedia tanpa internet.",
    intro:
      "Learn Piano Easy adalah aplikasi gratis dan sumber terbuka untuk belajar piano, dengan kursus terpandu dan file MIDI milikmu sendiri. Aplikasi ini berjalan di browser, tanpa internet.",
    build: (version) => `Versi ${version}`,
  },
  cache: {
    groups: {
      app: { label: "Aplikasi", description: "Halaman, kodenya, dan daftar lagu. Aplikasi butuh ini agar bisa dibuka tanpa internet." },
      songs: { label: "Lagu", description: "Semua lagu bawaan aplikasi, agar setiap lagu bisa dibuka tanpa internet." },
      sounds: { label: "Suara piano", description: "Semua set suara, agar piano tetap berbunyi tanpa internet, set mana pun yang dipilih." },
    },
    bytes: (n) => `${formatNumber("id", n, { useGrouping: false })} B`,
    kilobytes: (n) => `${tenths(n)} KB`,
    megabytes: (n) => `${tenths(n)} MB`,
    groupsFailed: (n, labels) => `${files(n)} dari ${labels} tidak dapat disimpan untuk dipakai tanpa internet.`,
    updated: (labels) => `Diperbarui. ${labels} kembali tersimpan untuk dipakai tanpa internet.`,
    unavailable: "Browser ini tidak menyimpan file untuk dipakai tanpa internet di halaman ini.",
    reading: "Membaca yang tersimpan…",
    unreadable: "Tidak dapat membaca daftar file tanpa internet. Muat ulang halaman, lalu coba lagi.",
    intro: "File yang disimpan tetap berfungsi tanpa jaringan. Setiap bagian bisa disimpan atau dihapus sendiri.",
    allSaved: "semua tersimpan",
    noneSaved: "belum tersimpan",
    someSaved: (count, total) => `${formatNumber("id", count)} dari ${files(total)} tersimpan`,
    status: (size, total, state) => `${size}, ${files(total)}, ${state}.`,
    saving: (done, total) => `Menyimpan ${formatNumber("id", done)} dari ${files(total)}…`,
    failed: (n) => `${files(n)} tidak dapat disimpan.`,
    save: "Simpan",
    saveAgain: "Simpan lagi",
    remove: "Hapus",
    saveGroup: (label) => `Simpan ${label}`,
    removeGroup: (label) => `Hapus ${label}`,
    keep: "Tetap simpan setelah setiap pembaruan",
  },
  update: {
    ready: "Versi baru sudah siap.",
    reload: "Muat ulang",
  },
  scene: {
    startKeys: (keys) => `, tuts awal ${keys}`,
    chord: (chord) => `, akor ${chord}`,
  },
  demo: {
    /** Each line keeps the English's seven or eight syllables, and "|" parts the syllables inside a word. */
    lyrics: [
      "Li|hat ca|ha|ya tu|run",
      "te|kan tuts sa|at ti|ba",
      "pe|lan du|lu la|lu ce|pat",
      "nan|ti ta|ngan|mu ha|fal",
    ],
    part: (n) => `Bagian ${formatNumber("id", n)}`,
    leftHand: "Tangan kiri",
    rightHand: "Tangan kanan",
  },
  chords: {
    root: "Akar",
    /** A chord tone, such as `♭3`, written as an ordinal with the prefix `ke-`, such as `ke-♭3`. */
    ordinal: (tone) => `ke-${tone}`,
  },
  overlays: {
    fps: "Bingkai per detik",
    bpmValue: (n) => `${formatNumber("id", n, { useGrouping: false })} BPM`,
    fpsValue: (n) => `${formatNumber("id", n, { useGrouping: false })} FPS`,
    track: (track, channel) => `Trek ${track}, kanal ${channel}`,
    velocity: (velocity) => `Kekuatan tekan ${velocity}`,
    timing: (start, length) => `Mulai pada detik ${seconds(start)}, selama ${seconds(length)} detik`,
  },
  sheet: {
    label: "Partitur",
    empty: "Tidak ada trek yang tampil di partitur. Nyalakan satu di “Trek”.",
  },
};
