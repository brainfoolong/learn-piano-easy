/** The player's settings from the notes to the offline files, in Indonesian. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { playerSettingsLook as en } from "./player-settings-look.en";

export const playerSettingsLook: Translation<typeof en> = {
  // Notes
  showHitKeys: {
    label: "Nyalakan not yang berbunyi",
    help: "Not menyala dengan warnanya sendiri selama berbunyi.",
  },
  noteWidth: {
    label: "Lebar not (% dari tuts)",
    help: "Seberapa lebar setiap not yang jatuh, diukur terhadap tutsnya.",
  },
  roundedNotes: {
    label: "Sudut not membulat",
    help: "Membuat sudut not yang jatuh menjadi bulat.",
  },
  noteBorderRadius: {
    label: "Jari-jari sudut (%)",
    help: "Seberapa bulat sudut sebuah not.",
  },
  minNoteHeight: {
    label: "Panjang not terpendek",
    help: "Dalam lebar tuts, agar not yang sangat pendek tetap terlihat.",
  },
  strokeNotes: {
    label: "Cahaya tepi",
    help: "Pinggiran cahaya dengan warna milik setiap not.",
  },
  strokeNotesWidth: {
    label: "Kekuatan cahaya tepi",
    help: "Seberapa terang pinggiran cahaya di sekitar setiap not.",
  },
  noteEndedShrink: {
    label: "Not yang dimainkan masuk ke tutsnya",
    help: "Not tenggelam ke dalam tutsnya selama berbunyi. Jika dimatikan, not terus berjalan melewati tuts.",
  },
  playedNoteFalloffSpeed: {
    label: "Seberapa jauh not melewati tuts",
    help: "Dalam lebar tuts, saat not yang dimainkan tidak mengecil.",
  },
  showSustainedNotes: {
    label: "Tampilkan lama pedal menahan not",
    help: "Ekor tipis memanjang dari setiap not yang ditahan pedal.",
  },
  sustainedNotesOpacity: {
    label: "Kecerahan ekor pedal (%)",
    help: "Seberapa jelas ekor pedal terlihat di belakang not.",
  },

  // Lanes
  bgCol1: {
    label: "Warna jalur",
    help: "Warna jalur di atas tuts putih.",
  },
  bgCol5: {
    label: "Warna jalur tuts hitam",
    help: "Warna jalur di atas tuts hitam.",
  },
  bgCol3: {
    label: "Warna pemisah oktaf",
    help: "Warna garis antara setiap B dan C berikutnya.",
  },
  drawMeasureLines: {
    label: "Garis birama",
    help: "Garis yang melintang jalur di awal setiap birama.",
  },
  measureLineThickness: {
    label: "Ketebalan garis birama",
    help: "Seberapa tebal garis di setiap birama.",
  },
  measureLineColor: {
    label: "Warna garis birama",
    help: "Warna garis di setiap birama.",
  },
  enableDrawBeatLines: {
    label: "Garis ketukan",
    help: "Garis yang lebih samar melintang jalur di setiap ketukan.",
  },
  beatLineThickness: {
    label: "Ketebalan garis ketukan",
    help: "Seberapa tebal garis di setiap ketukan.",
  },
  beatLineColor: {
    label: "Warna garis ketukan",
    help: "Warna garis di setiap ketukan.",
  },
  enableDrawMeasureNumbers: {
    label: "Nomor birama",
    help: "Nomor setiap birama, di samping garisnya.",
  },
  measureNumbersColor: {
    label: "Warna nomor birama",
    help: "Warna nomor-nomor birama.",
  },
  highlightInputLanes: {
    label: "Nyalakan jalur tuts yang kamu tahan",
    help: "Jalur di atas tuts menjadi lebih terang selama kamu menahan tuts itu.",
  },
  inputLaneOpacity: {
    label: "Kekuatan cahaya jalur",
    help: "Seberapa terang jalur saat kamu menahan tutsnya.",
  },
  showMarkersSong: {
    label: "Penanda",
    help: "Garis beserta teksnya di tempat lagu menamai sebuah bagian, seperti bait.",
  },
  showSustainPeriods: {
    label: "Rentang pedal",
    help: "Pita yang melintang jalur selama lagu menahan pedal sustain.",
  },
  showSustainOnOffs: {
    label: "Pedal diinjak dan dilepas",
    help: "Garis bertanda “Ped.” di tempat pedal diinjak, dan “✱” di tempat pedal dilepas.",
  },
  showSustainChannels: {
    label: "Kanal pedal",
    help: "Menunjukkan kanal MIDI setiap rentang pedal.",
  },

  // Particles
  showParticles: {
    label: "Partikel",
    help: "Efek naik dari setiap tuts yang berbunyi. Efek ini membebani kartu grafis, jadi awalnya dimatikan.",
  },
  particlesFlames: {
    label: "Api",
    help: "Setiap tuts terbakar dengan warna notnya. Api paling membebani kartu grafis.",
  },
  particlesSparks: {
    label: "Percikan",
    help: "Percikan kecil yang terang terbang naik dari setiap tuts.",
  },
  particlesEmbers: {
    label: "Bara",
    help: "Bara yang berpijar melayang pelan naik dari setiap tuts.",
  },
  particlesStars: {
    label: "Bintang",
    help: "Bintang kecil yang berputar dan titik-titik naik dari setiap tuts, lalu jatuh kembali.",
  },
  particlesCustom: {
    label: "Partikelmu sendiri",
    help: "Partikel yang dibuat dari pengaturan di bawah.",
  },
  particlesTexture: {
    label: "Bentuk",
    help: "Gambar yang ditampilkan setiap partikelmu.",
    options: { circle: "Cahaya", spark: "Percikan", smoke: "Asap", star: "Bintang", ring: "Cincin" },
  },
  particlesBlending: {
    label: "Pembauran",
    help: "“Tambah cahaya” mencerahkan apa yang ada di belakangnya, seperti api. “Tutupi” menyembunyikannya, seperti asap.",
    options: { additive: "Tambah cahaya", normal: "Tutupi" },
  },
  particleOverrideColor: {
    label: "Warna sendiri",
    help: "Jika dimatikan, setiap partikel memakai warna tutsnya.",
  },
  particleColor: {
    label: "Warna",
    help: "Warna partikelmu, saat partikel memakai warna sendiri.",
  },
  particlesOpacity: {
    label: "Opasitas",
    help: "Seberapa padat setiap partikel terlihat. Nilai yang lebih rendah membuat latarnya lebih tembus.",
  },
  particleSize: {
    label: "Ukuran",
    help: "Dalam lebar tuts.",
  },
  particleAmount: {
    label: "Jumlah",
    help: "Partikel per tuts per frame, pada 60 frame per detik.",
  },
  particleLife: {
    label: "Umur (detik)",
    help: "Berapa lama setiap partikel bertahan sebelum menghilang.",
  },
  particleSpeed: {
    label: "Kecepatan gerak",
    help: "Mempercepat atau memperlambat setiap gerakan partikel.",
  },
  particleFadeOut: {
    label: "Memudar",
    help: "Bagian akhir dari umur partikel, saat partikel memudar.",
  },
  particlesShrink: {
    label: "Mengecil",
    help: "Bagian ukuran yang hilang dari partikel. Di bawah 0, partikel membesar.",
  },
  particleSpeedX: {
    label: "Kecepatan ke samping",
    help: "Kecepatan ke samping tertinggi, dalam lebar tuts per detik.",
  },
  particleSpeedY: {
    label: "Kecepatan naik",
    help: "Kecepatan naik tertinggi, dalam lebar tuts per detik.",
  },
  particlesFriction: {
    label: "Hambatan",
    help: "Seberapa cepat partikel melambat saat terbang.",
  },
  particleRising: {
    label: "Gravitasi",
    help: "Di atas 0, partikel jatuh kembali. Di bawah 0, partikel naik lebih cepat.",
  },
  particlesRotation: {
    label: "Sudut (°)",
    help: "Seberapa jauh setiap partikel diputar saat muncul.",
  },
  particlesRotationRandom: {
    label: "Sudut acak (°)",
    help: "Setiap partikel muncul dengan putaran acak, paling besar sudut ini.",
  },
  particlesRotationSpeed: {
    label: "Putaran (° per detik)",
    help: "Seberapa cepat setiap partikel berputar saat terbang.",
  },
  particleNoiseResX: {
    label: "Detail simpangan ke samping",
    help: "Nilai yang lebih tinggi membuat simpangan ke samping partikel dari tuts yang berdekatan makin berbeda.",
  },
  particleNoiseStrengthX: {
    label: "Simpangan ke samping",
    help: "Seberapa jauh partikel bergeser secara acak ke samping.",
  },
  particleNoiseResY: {
    label: "Detail simpangan naik",
    help: "Nilai yang lebih tinggi membuat simpangan naik dari tuts yang berdekatan makin berbeda.",
  },
  particleNoiseStrengthY: {
    label: "Simpangan naik",
    help: "Seberapa jauh partikel bergeser naik turun secara acak saat naik.",
  },
  particleNoiseStrengthSize: {
    label: "Simpangan ukuran",
    help: "Seberapa banyak setiap partikel membesar dan mengecil secara acak.",
  },
  turbulenceXAmplitude: {
    label: "Ayunan ke samping",
    help: "Seberapa jauh partikel berayun ke kiri dan ke kanan.",
  },
  turbulenceXFrequency: {
    label: "Laju ayunan ke samping",
    help: "Jumlah ayunan per detik.",
  },
  turbulenceYAmplitude: {
    label: "Ayunan naik",
    help: "Seberapa jauh partikel berayun naik turun saat naik.",
  },
  turbulenceYFrequency: {
    label: "Laju ayunan naik",
    help: "Jumlah ayunan per detik.",
  },
  particleYOffset: {
    label: "Tinggi awal",
    help: "Dalam lebar tuts, di atas tuts.",
  },
  particleDistributionX: {
    label: "Titik awal selebar tuts",
    help: "Tempat setiap partikel muncul pada lebar tutsnya.",
    options: { across: "Di mana saja selebar tuts", centre: "Di tengahnya" },
  },
  particleDistributionXSpread: {
    label: "Sebaran awal (%)",
    help: "Bagian lebar tuts tempat partikel muncul.",
  },
  particleDistributionY: {
    label: "Titik awal sepanjang tuts",
    help: "Tempat setiap partikel muncul sepanjang tutsnya.",
    options: { hitLine: "Di garis tekan", key: "Di mana saja di permukaan atasnya" },
  },
  particleDistributionZ: {
    label: "Lapisan",
    help: "Apakah tuts menutupi partikel, atau partikel menutupi piano.",
    options: { behind: "Tertutup tuts", front: "Di depan piano" },
  },

  // Labels
  pitchNotationSystem: {
    label: "Nama not",
    help: "Cara nama di not dan tuts ditulis. Do selalu C.",
    options: { auto: "Ikuti bahasaku", letters: "Huruf: C D E", solfege: "Solmisasi: Do Re Mi" },
  },
  noteLabel: {
    label: "Label not",
    help: "Teks di setiap not: pilih mana saja, atau tidak satu pun. Pilih sebuah not, lalu tekan 1 sampai 5 untuk mengatur jarinya.",
    options: { name: "Nama not", keyBinding: "Tombol komputer", fingering: "Jari" },
  },
  noteLabelColor: {
    label: "Warna label not",
    help: "Warna teks di setiap not.",
  },
  showKeyNamesOnPianoWhite: {
    label: "Nama di tuts putih",
    help: "Setiap tuts putih menunjukkan nama notnya.",
  },
  showKeyNamesOnPianoBlack: {
    label: "Nama di tuts hitam",
    help: "Setiap tuts hitam menunjukkan nama notnya.",
  },
  showPianoKeyNameFlats: {
    label: "Tuts hitam dinamai dengan mol",
    help: "D♭ sebagai ganti C♯, hanya pada tuts. Not mengikuti nada dasar lagu.",
  },
  octaveLabel: {
    label: "Oktaf pada nama tuts",
    help: "Menambahkan nomor oktaf ke nama di tuts, seperti C4.",
    options: { none: "Tidak ada", all: "Di setiap tuts", onlyC: "Hanya di C" },
  },
  showKeyBindingsOnPiano: {
    label: "Tombol komputer di piano",
    help: "Setiap tuts menunjukkan tombol komputer yang memainkannya.",
  },
  showChords: {
    label: "Nama akor",
    help: "Menamai setiap akor yang dibentuk not, termasuk not yang ditahan pedal.",
  },
  chordLabelStyle: {
    label: "Gaya label akor",
    help: "Cara setiap nama akor digambar.",
    options: { bar: "Bilah di atas tuts akor", ribbon: "Pita melintang jalur" },
  },
  chordLabelPlacement: {
    label: "Posisi label akor",
    help: "Puncak adalah ujung akor yang jauh dari piano.",
    options: {
      above: "Di atas akor",
      top: "Di puncaknya",
      middle: "Di tengahnya",
      bottom: "Di dasarnya",
      below: "Di bawah akor",
    },
  },
  showChordRomanNumerals: {
    label: "Angka Romawi",
    help: "Tingkat setiap akor dalam nada dasar lagu, seperti V7.",
  },
  chordBlocks: {
    label: "Blok not",
    help: "Blok di atas setiap not dari akor yang dinamai menunjukkan not apa itu.",
    options: { none: "Tidak ada", tone: "Nada akor", degree: "Tingkat tangga nada" },
  },
  chordToneNotation: {
    label: "Penulisan blok not",
    help: "Apakah blok not memakai tanda singkat atau kata lengkap.",
    options: { simple: "Singkat: R ♭3 5", full: "Lengkap: akar, terts ♭3, kuint" },
  },
  chordMarkRoot: {
    label: "Tandai nada akar",
    help: "Nada akar setiap akor membawa blok emas.",
  },

  // Lyrics
  lyricsEnabled: {
    label: "Lirik",
    help: "Menampilkan lirik lagu, jika ada, satu baris setiap kali.",
  },
  lyricsBackground: {
    label: "Warna latar",
    help: "Warna pita di belakang lirik.",
  },
  lyricsFontColor: {
    label: "Warna teks",
    help: "Warna kata yang belum dinyanyikan.",
  },
  lyricsFontColorPlayed: {
    label: "Warna teks yang sudah dinyanyikan",
    help: "Warna kata yang sudah dinyanyikan.",
  },
  lyricsFontColorActive: {
    label: "Warna suku kata yang sedang dinyanyikan",
    help: "Suku kata yang sedang dinyanyikan tampil menonjol dengan warna ini.",
  },
  lyricsFontSize: {
    label: "Ukuran teks (px)",
    help: "Seberapa besar lirik ditulis.",
  },
  lyricsY: {
    label: "Tinggi (% dari atas)",
    help: "Letak bagian tengah baris lirik di dalam tampilan. 0 adalah tepi atas.",
  },
  lyricsCursorEnabled: {
    label: "Kursor",
    help: "Titik di atas suku kata yang sedang dinyanyikan.",
  },
  lyricsBouncingCursor: {
    label: "Kursor memantul",
    help: "Titik melompat dari setiap suku kata ke suku kata berikutnya.",
  },

  // Coding
  enableColorCodingNote: {
    label: "Warnai not menurut tinggi nada",
    help: "Masing-masing dari 12 tinggi nada punya warnanya sendiri.",
  },
  enableColorCodingNotePiano: {
    label: "Warnai tuts menurut tinggi nada",
    help: "Setiap tuts menyala dengan warna tinggi nadanya selama berbunyi.",
  },
  colorCodeNote0: { help: "Warna setiap C." },
  colorCodeNote1: { label: "C♯ atau D♭", help: "Warna setiap C♯ atau D♭." },
  colorCodeNote2: { help: "Warna setiap D." },
  colorCodeNote3: { label: "D♯ atau E♭", help: "Warna setiap D♯ atau E♭." },
  colorCodeNote4: { help: "Warna setiap E." },
  colorCodeNote5: { help: "Warna setiap F." },
  colorCodeNote6: { label: "F♯ atau G♭", help: "Warna setiap F♯ atau G♭." },
  colorCodeNote7: { help: "Warna setiap G." },
  colorCodeNote8: { label: "G♯ atau A♭", help: "Warna setiap G♯ atau A♭." },
  colorCodeNote9: { help: "Warna setiap A." },
  colorCodeNote10: { label: "A♯ atau B♭", help: "Warna setiap A♯ atau B♭." },
  colorCodeNote11: { help: "Warna setiap B." },
  enableColorCodingFinger: {
    label: "Warnai not menurut jari",
    help: "Not tanpa jari tetap memakai warnanya yang lain.",
  },
  enableColorCodingFingerPiano: {
    label: "Warnai tuts menurut jari",
    help: "Setiap tuts menyala dengan warna jari yang memainkannya.",
  },
  colorCodeFinger1Right: { label: "Tangan kanan, jari 1", help: "Warna not yang dimainkan ibu jari kanan." },
  colorCodeFinger2Right: { label: "Tangan kanan, jari 2", help: "Warna not yang dimainkan telunjuk kanan." },
  colorCodeFinger3Right: { label: "Tangan kanan, jari 3", help: "Warna not yang dimainkan jari tengah kanan." },
  colorCodeFinger4Right: { label: "Tangan kanan, jari 4", help: "Warna not yang dimainkan jari manis kanan." },
  colorCodeFinger5Right: { label: "Tangan kanan, jari 5", help: "Warna not yang dimainkan kelingking kanan." },
  colorCodeFingerDefaultRight: {
    label: "Tangan kanan, tanpa jari",
    help: "Warna not tangan kanan yang jarinya belum diatur.",
  },
  colorCodeFinger1Left: { label: "Tangan kiri, jari 1", help: "Warna not yang dimainkan ibu jari kiri." },
  colorCodeFinger2Left: { label: "Tangan kiri, jari 2", help: "Warna not yang dimainkan telunjuk kiri." },
  colorCodeFinger3Left: { label: "Tangan kiri, jari 3", help: "Warna not yang dimainkan jari tengah kiri." },
  colorCodeFinger4Left: { label: "Tangan kiri, jari 4", help: "Warna not yang dimainkan jari manis kiri." },
  colorCodeFinger5Left: { label: "Tangan kiri, jari 5", help: "Warna not yang dimainkan kelingking kiri." },
  colorCodeFingerDefaultLeft: {
    label: "Tangan kiri, tanpa jari",
    help: "Warna not tangan kiri yang jarinya belum diatur.",
  },

  // Sheet
  enableSheet: {
    label: "Tampilkan partitur",
    help: "Lagu sebagai partitur, di atas tampilan.",
  },
  enableFullSheet: {
    label: "Partitur saja",
    help: "Partitur memenuhi layar sebagai ganti tampilan.",
  },
  sheetMeasureScroll: {
    label: "Gulir partitur bersama lagu",
    help: "Jika dimatikan, birama tersusun dalam baris, dan baris yang sedang dimainkan tetap terlihat.",
  },
  sheetMeasureNumbers: {
    label: "Nomor birama",
    help: "Tempat partitur menunjukkan nomor setiap birama.",
    options: { off: "Tidak ada", lineStart: "Di awal setiap baris", every: "Di setiap birama" },
  },
  enableGrandStaff: {
    label: "Gabungkan dua paranada dengan kurung kurawal",
    help: "Kurung kurawal paranada ganda, di awal setiap baris.",
  },
  sheetAutoClef: {
    label: "Pilih kunci menurut not",
    help: "Jika dimatikan, paranada pertama memakai kunci G dan sisanya kunci F.",
  },
  overrideTimeSignature: {
    label: "Tanda birama",
    help: "Tanda birama yang dipakai partitur. Pilih satu jika tanda birama lagu itu salah.",
    options: { auto: "Dari lagu" },
  },
  sheetMinNoteDenom: {
    label: "Nilai not terpendek",
    help: "Not terpendek yang ditulis partitur. Triol dari not itu tetap bisa ditulis.",
    options: {
      "4": "Seperempat",
      "8": "Seperdelapan",
      "16": "Seperenambelas",
      "32": "Sepertigapuluh dua",
      "64": "Seperenampuluh empat",
    },
  },
  hideRestsBelow: {
    label: "Sembunyikan istirahat lebih pendek dari",
    help: "Menghilangkan tanda istirahat pendek, agar partitur lebih mudah dibaca.",
    options: {
      none: "Jangan sembunyikan",
      "4": "Seperempat",
      "8": "Seperdelapan",
      "16": "Seperenambelas",
      "32": "Sepertigapuluh dua",
    },
  },
  renderSheetCursor: {
    label: "Kursor",
    help: "Garis menandai posisi di lagu.",
  },
  sheetColorActiveNotes: {
    label: "Warnai not yang berbunyi",
    help: "Not di partitur berubah warna selama berbunyi.",
  },
  sheetColorByTrack: {
    label: "Not yang berbunyi memakai warna treknya",
    help: "Jika dimatikan, not memakai warna di bawah.",
  },
  sheetActiveNotesColor: {
    label: "Warna not yang berbunyi",
    help: "Warna not di partitur selama berbunyi.",
  },
  sheetHighlightActiveNotes: {
    label: "Cahaya di belakang not yang berbunyi",
    help: "Cahaya lembut muncul di belakang setiap not di partitur selama berbunyi.",
  },
  sheetActiveHighlightColor: {
    label: "Warna cahaya",
    help: "Warna cahaya di belakang not yang berbunyi.",
  },
  sheetActiveGrowEffect: {
    label: "Not yang berbunyi membesar",
    help: "Not di partitur menjadi lebih besar selama berbunyi.",
  },
  sheetRenderInputNotes: {
    label: "Gambar not yang kamu mainkan",
    help: "Setiap tuts yang kamu tahan muncul sebagai not di kursor.",
  },
  sheetShowHoverInfo: {
    label: "Namai not di bawah penunjuk",
    help: "Arahkan penunjuk ke not atau akor di partitur untuk melihat nama notnya.",
  },
  sheetBgColor: {
    label: "Warna kertas",
    help: "Warna di belakang partitur. Pada kertas gelap, tintanya menjadi terang.",
  },

  // PDF
  pdfExportButtonGroup: {
    label: "Simpan not sebagai PDF",
    help: "Membuka dialog yang menyimpan not jatuh dari lagu yang terbuka sebagai halaman, dengan panjang yang kamu atur.",
  },
  exportPdfBackground: {
    label: "Pakai warna latar",
    help: "Halaman memakai warna jalur dan tuts. Jika dimatikan, halaman dicetak di kertas putih.",
  },

  // Offline
  offlineCache: {
    label: "Kelola file tanpa internet",
    help: "Menampilkan ukuran aplikasi, lagu, dan suara piano, lalu menyimpan atau menghapus masing-masing.",
  },
  autoCacheSongs: {
    label: "Tetap simpan lagu",
    help: "Menyimpan semua lagu contoh sekarang, dan lagi setelah setiap pembaruan.",
  },
  autoCacheSounds: {
    label: "Tetap simpan suara piano",
    help: "Menyimpan semua set suara sekarang, dan lagi setelah setiap pembaruan.",
  },
};
