/** The player's settings from the site's own to the piano's, in Indonesian. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { playerSettingsPlay as en } from "./player-settings-play.en";

export const playerSettingsPlay: Translation<typeof en> = {
  // Site
  siteTheme: {
    label: "Tema situs",
    help: "Warna halaman situs. Tema adegan mengatur warna piano dan jalurnya.",
    options: { system: "Ikuti sistem", light: "Terang", dark: "Gelap" },
  },
  language: {
    label: "Bahasa",
    help: "Dengan “Ikuti browser”, situs terbuka dalam bahasa browser jika bahasa itu tersedia.",
    options: { auto: "Ikuti browser" },
  },
  learnSounds: {
    label: "Suara hadiah",
    help: "Bunyi dari Belajar Piano untuk langkah yang lulus, bintang, level baru, dan lencana. Piano selalu berbunyi.",
  },
  learnDailyGoal: {
    label: "Target harian",
    help: "XP yang dibutuhkan sehari di Belajar Piano agar hari beruntunmu terus berlanjut.",
  },
  learnSetupDone: {
    label: "Kunjungan pertama selesai",
    help: "Belajar Piano menampilkan pengaturan awal yang singkat pada kunjungan pertamamu, sampai selesai.",
  },
  expertControls: {
    label: "Alat lanjutan",
    help: "Tombol “Lanjutan” di bilah kontrol menampilkan kecepatan, transposisi, birama pertama dan terakhir pengulangan, penyesuaian zoom, dan geser samping tampilan.",
  },
  // General
  theme: {
    label: "Tema adegan",
    help: "Mengatur warna piano dan jalurnya. Tema situs di bilah atas mengatur bagian lain pemutar.",
    options: { dark: "Gelap", light: "Terang" },
  },
  yourData: {
    label: "Cadangkan atau pulihkan datamu",
    help: "Membuka halaman yang menyimpan pengaturan, kemajuan, lagu, dan skormu ke satu file, lalu memulihkannya.",
  },
  startWithLastSong: {
    label: "Buka lagu terakhir saat mulai",
    help: "Lagu yang terakhir kamu mainkan terbuka setiap kali kamu membuka pemutar.",
  },
  saveIndexedDb: {
    label: "Simpan filemu di browser ini",
    help: "Lagu yang kamu buka dari komputer tetap ada di pustaka lagu setelah halaman dimuat ulang.",
  },
  disableHotkeys: {
    label: "Matikan pintasan keyboard",
    help: "Tombol komputer tidak lagi memutar lagu, melompat di dalamnya, atau mengulanginya.",
  },
  hotKeyBindings: {
    label: "Pintasan keyboard",
    help: "Tombol untuk memutar lagu, melompat di dalamnya, mengulanginya, dan mengatur zoom.",
  },
  leadIn: {
    label: "Waktu sebelum not pertama (detik)",
    help: "Setiap lagu dimulai sekian detik sebelum not pertamanya. Lagu menunggu selama itu lagi setiap kali diputar ulang dari akhir.",
  },
  restartSongOnEnd: {
    label: "Ulangi lagu saat selesai",
    help: "Lagu diputar lagi dari awal setelah not terakhirnya.",
  },
  playNotesOnScrollEnabled: {
    label: "Bunyikan not saat menggeser linimasa",
    help: "Kamu mendengar setiap not yang kamu lewati saat menggeser lagu.",
  },
  fitZoomOnNewSong: {
    label: "Paskan zoom untuk setiap lagu baru",
    help: "Lagu yang kamu buka muat seluruhnya di jalur di depan piano.",
  },
  transposeOffset: {
    label: "Transposisi (setengah nada)",
    help: "Memindahkan setiap not lagu ke atas atau ke bawah.",
  },
  reverseNoteDirection: {
    label: "Balik arah not",
    help: "Not bergerak menjauhi piano, bukan mendekatinya.",
  },
  renderOffset: {
    label: "Selisih gambar (ms)",
    help: "Menunda gambar terhadap suara, atau menampilkannya lebih awal jika di bawah 0.",
  },
  showBPM: {
    label: "Tampilkan tempo dalam BPM",
    help: "Menampilkan ketukan per menit lagu saat ini di atas tampilan 3D, di samping jumlah frame per detik.",
  },
  showFps: {
    label: "Tampilkan frame per detik",
    help: "Menampilkan berapa gambar per detik yang digambar tampilan 3D. Angka rendah berarti gambar berjalan lambat.",
  },
  showNoteDebugInfo: {
    label: "Tampilkan detail not saat ditunjuk",
    help: "Menunjuk sebuah not menampilkan tinggi nada, waktu, panjang, dan kekuatan tekannya.",
  },
  showMilliseconds: {
    label: "Tampilkan milidetik di linimasa",
    help: "Waktu di linimasa juga menampilkan perseribu detik.",
  },
  progressBarMeasures: {
    label: "Tampilkan linimasa dalam birama",
    help: "Linimasa menghitung birama, bukan menit dan detik.",
  },
  progressBarMeasureLines: {
    label: "Tampilkan garis birama di linimasa",
    help: "Menggambar garis tipis di linimasa pada awal setiap birama.",
  },
  showMarkersTimeline: {
    label: "Tampilkan penanda di linimasa",
    help: "Menampilkan penanda milik lagu, seperti bait atau refrein, di linimasa.",
  },
  // Loop
  enableLoop: {
    label: "Ulangi satu bagian",
    help: "Mengulangi birama di bawah ini terus-menerus agar kamu bisa melatihnya.",
  },
  loopStart: {
    label: "Birama pertama pengulangan",
    help: "Pengulangan dimulai di awal birama ini.",
  },
  loopEnd: {
    label: "Birama terakhir pengulangan",
    help: "Pengulangan berakhir di akhir birama ini.",
  },
  loopDelay: {
    label: "Hitungan awal (ketukan)",
    help: "Ketukan yang dimainkan sebelum setiap putaran pengulangan.",
  },
  enableLoopBeats: {
    label: "Bunyi klik pada hitungan awal",
    help: "Kamu mendengar bunyi klik di setiap ketukan hitungan awal.",
  },
  autoLoop: {
    label: "Mulai setiap putaran langsung",
    help: "Jika mati, lagu berhenti sejenak di hitungan awal setelah setiap putaran.",
  },
  muteLoop: {
    label: "Bisukan lagu di luar pengulangan",
    help: "Hanya not dari birama yang diulang yang berbunyi.",
  },
  loopTrainer: {
    label: "Latihan berulang",
    help: "Mulai pelan dan menambah kecepatan 5% setelah setiap putaran, sampai 100%.",
  },
  loopTrainerSpeed: {
    label: "Kecepatan awal latihan berulang (%)",
    help: "Kecepatan putaran pertama latihan berulang.",
  },
  // Audio
  volumeMain: {
    label: "Volume",
    help: "Volume semua yang diputar aplikasi.",
  },
  masterGain: {
    label: "Volume lagu",
    help: "Seberapa keras not lagu berbunyi.",
  },
  inputGain: {
    label: "Volume permainanmu",
    help: "Seberapa keras not yang kamu mainkan di keyboardmu berbunyi.",
  },
  velocityStrength: {
    label: "Pengaruh kekuatan tekan",
    help: "Seberapa besar kekuatan tekan sebuah not mengubah kerasnya bunyi.",
  },
  sustainEnabled: {
    label: "Pedal sustain",
    help: "Not tetap berbunyi selama lagu atau kamu menginjak pedal.",
  },
  enableReverb: {
    label: "Gema",
    help: "Menambahkan gema sebuah ruangan ke suara.",
  },
  reverbImpulseResponse: {
    label: "Ruang gema",
    help: "Ruangan yang ditiru oleh gema. Ruangan yang lebih besar bergema lebih lama.",
    options: { room: "Ruangan", hall: "Gedung konser", church: "Gereja" },
  },
  detune: {
    label: "Penyetelan halus (sen)",
    help: "Menyetel setiap not sedikit lebih tinggi atau lebih rendah. 100 sen sama dengan setengah nada.",
  },
  adsrAttack: {
    label: "Attack (detik)",
    help: "Berapa lama not mencapai volume penuh.",
  },
  adsrDecay: {
    label: "Decay (detik)",
    help: "Berapa lama not turun ke level sustain.",
  },
  adsrSustain: {
    label: "Level sustain (%)",
    help: "Volume yang dipertahankan not yang ditahan.",
  },
  adsrReleaseKey: {
    label: "Release setelah tuts (detik)",
    help: "Berapa lama not memudar setelah tutsnya dilepas.",
  },
  adsrReleasePedal: {
    label: "Release setelah pedal (detik)",
    help: "Berapa lama not yang ditahan memudar setelah pedal dilepas.",
  },
  enableMetronome: {
    label: "Metronom",
    help: "Berbunyi klik di setiap ketukan lagu.",
  },
  metronomeMidiOutput: {
    label: "Keluaran metronom",
    help: "Tempat metronom berbunyi.",
    options: { both: "Speaker dan perangkat MIDI", midi: "Perangkat MIDI", speakers: "Speaker" },
  },
  metronomeNoteNumber: {
    label: "Not metronom di perangkat MIDI",
    help: "Not yang dikirim metronom ke perangkat MIDI-mu di setiap ketukan.",
  },
  metronomeInstrument: {
    label: "Bunyi metronom di perangkat MIDI",
    help: "Dengan set drum, not menentukan drum yang berbunyi.",
    options: { woodblock: "Balok kayu", drums: "Set drum", piano: "Piano" },
  },
  metronomeVolume: {
    label: "Volume metronom",
    help: "Seberapa keras klik metronom.",
  },
  synchedMetronome: {
    label: "Selaraskan metronom dengan lagu",
    help: "Jika aktif, metronom berbunyi pada ketukan lagu dan mengikuti perubahan tempo dan kecepatannya. Jika mati, metronom menjaga ketukan tetap pada tempo lagu di titik pemutaran dimulai. Perubahan tempo dan kecepatan sesudahnya tidak mengubah ketukan itu. Metronom mulai dan berhenti bersama pemutaran. Metronom diam selama hitungan awal pengulangan, lalu mulai lagi pada ketukan pertama pengulangan.",
  },
  enableEqualizer: {
    label: "Equalizer",
    help: "Membuat suara rendah, tengah, dan tinggi lebih keras atau lebih pelan.",
  },
  equalizerGain0: {
    label: "Rendah, 60 Hz (dB)",
    help: "Menaikkan atau menurunkan suara paling rendah.",
  },
  equalizerGain1: {
    label: "Tengah rendah, 250 Hz (dB)",
    help: "Menaikkan atau menurunkan bagian tengah bawah suara yang hangat.",
  },
  equalizerGain2: {
    label: "Tengah, 1 kHz (dB)",
    help: "Menaikkan atau menurunkan bagian tengah suara.",
  },
  equalizerGain3: {
    label: "Tengah tinggi, 4 kHz (dB)",
    help: "Menaikkan atau menurunkan bagian tengah atas suara yang cerah.",
  },
  equalizerGain4: {
    label: "Tinggi, 12 kHz (dB)",
    help: "Menaikkan atau menurunkan suara paling tinggi.",
  },
  scheduleAheadMs: {
    label: "Antrean audio ke depan (ms)",
    help: "Seberapa jauh ke depan not diantrekan. Lebih besar lebih stabil, lebih kecil lebih cepat bereaksi.",
  },
  scheduleIntervalMs: {
    label: "Interval penjadwalan audio (ms)",
    help: "Seberapa sering not berikutnya diantrekan.",
  },
  // Backing track
  bgTrackFile: {
    label: "Pilih file audio",
    help: "Rekaman untuk mengiringi permainanmu, seperti band pengiring. File ini disimpan sampai halaman dimuat ulang.",
  },
  bgTrackEnable: {
    label: "Putar iringan",
    help: "Rekaman yang dipilih diputar bersama lagu.",
  },
  bgTrackVolume: {
    label: "Volume (%)",
    help: "Seberapa keras iringan berbunyi.",
  },
  bgTrackSpeed: {
    label: "Kecepatan (%)",
    help: "Seberapa cepat iringan berjalan dibanding lagu, agar cocok dengan rekaman bertempo lain.",
  },
  bgTrackOffset: {
    label: "Selisih (detik)",
    help: "Detik lagu saat awal iringan berbunyi. Di bawah 0, awal iringan dilewati.",
  },
  bgTrackLoop: {
    label: "Ulangi iringan",
    help: "Iringan dimulai lagi dari awal setelah selesai.",
  },
  // View
  cameraPreset: {
    label: "Kamera",
    help: "Seret adegan untuk melihat sekeliling, kecuali dalam tampilan datar. Klik dua kali untuk kembali ke kamera ini. Tampilan datar sejajar dengan keyboard tepat di bawah layar.",
    options: {
      classic: "Klasik, dari atas",
      player: "Dari bangku piano",
      cinematic: "Sinematik, bergerak pelan",
      flat: "Datar, tuts memenuhi lebar layar",
    },
  },
  resetCamera: {
    label: "Kembali ke kamera",
    help: "Mengembalikan kamera setelah kamu menyeret adegan.",
  },
  glowMode: {
    label: "Cahaya",
    help: "Dengan “Otomatis”, cahaya mati di perangkat yang menghemat daya, atau saat gambar berjalan lambat.",
    options: { auto: "Otomatis", on: "Nyala", off: "Mati" },
  },
  glowStrength: {
    label: "Kekuatan cahaya",
    help: "Seberapa terang not dan tuts bersinar.",
  },
  zoomByMeasures: {
    label: "Zoom per birama",
    help: "Jalur menampilkan sejumlah birama, bukan sejumlah detik.",
  },
  noteToHeightConst: {
    label: "Detik yang terlihat ke depan",
    help: "Berapa detik not mendatang yang ditampilkan jalur. Makin sedikit detik, makin panjang dan cepat notnya.",
  },
  measuresShownOnScreen: {
    label: "Birama yang terlihat ke depan",
    help: "Berapa birama not mendatang yang ditampilkan jalur saat zoom per birama.",
  },
  // Keyboard
  keyboardFirstNote: {
    label: "Tuts pertama",
    help: "Tuts terendah keyboardmu, seperti C2 atau 36.",
  },
  keyboardLastNote: {
    label: "Tuts terakhir",
    help: "Tuts tertinggi keyboardmu, seperti C7 atau 96.",
  },
  foldOutsideNotes: {
    label: "Pindahkan not di luar tutsmu ke dalam jangkauan",
    help: "Not yang tidak ada di keyboardmu dipindah per oktaf ke tutsmu, dan kamu memainkannya di sana.",
  },
  // Input
  playMode: {
    label: "Mode bermain",
    help: "Main bebas mengesampingkan lagu agar kamu bisa bermain dan merekam. Latihan pendengaran memintamu mencari not.",
    options: { player: "Mainkan lagu", freePlay: "Main bebas dan rekam", pitchPractice: "Latihan pendengaran" },
  },
  pitchPracticeKey: {
    label: "Nada dasar latihan pendengaran",
    help: "Latihan pendengaran hanya menanyakan not dari nada dasar ini.",
    options: {
      chromatic: "Semua tuts, hitam dan putih",
      C: "C mayor",
      G: "G mayor",
      D: "D mayor",
      A: "A mayor",
      E: "E mayor",
      B: "B mayor",
      Gb: "G♭ mayor",
      Db: "D♭ mayor",
      Ab: "A♭ mayor",
      Eb: "E♭ mayor",
      Bb: "B♭ mayor",
      F: "F mayor",
    },
  },
  pitchPracticeFirstNote: {
    label: "Not terendah latihan pendengaran",
    help: "Not terendah yang ditanyakan latihan pendengaran, dalam batas keyboardmu.",
  },
  pitchPracticeLastNote: {
    label: "Not tertinggi latihan pendengaran",
    help: "Not tertinggi yang ditanyakan latihan pendengaran, dalam batas keyboardmu.",
  },
  pitchPracticeCount: {
    label: "Not per ronde latihan pendengaran",
    help: "Berapa not yang ditanyakan latihan pendengaran sebelum hasilmu ditampilkan.",
  },
  saveMidiDevices: {
    label: "Ingat perangkat MIDI yang dipilih",
    help: "Pemutar terhubung ke masukan dan keluaran MIDI yang sama saat kamu membukanya lagi.",
  },
  keyBindings: {
    label: "Tombol keyboard komputer",
    help: "Tombol komputer yang memainkan not. Z sampai M memainkan C3 sampai B3, dan Q sampai I memainkan C4 sampai C5.",
  },
  waitForNotes: {
    label: "Tunggu notmu",
    help: "Lagu berhenti di setiap notmu sampai kamu menahan semua tutsnya. Dalam mode permainan, not yang lama ditunggu dinilai terlambat.",
  },
  playHands: {
    label: "Tanganmu",
    help: "Tangan yang permainannya dinilai. Jika “Tunggu notmu” aktif, aplikasi memainkan tangan yang tidak kamu mainkan.",
    options: { both: "Kedua tangan", right: "Tangan kanan", left: "Tangan kiri" },
  },
  playalongSilentNotes: {
    label: "Nyalakan tuts yang harus dimainkan di keyboard MIDI-mu",
    help: "Mengirim setiap not berikutnya dengan sangat pelan ke keluaran MIDI, agar keyboard dengan lampu tuts menampilkannya.",
  },
  playalongSilentNotesChannel: {
    label: "Kanal MIDI lampu tuts",
    help: "Kanal MIDI yang didengarkan keyboardmu untuk lampu tutsnya.",
  },
  enableScoreMode: {
    label: "Nilai setiap not",
    help: "Menilai setiap not yang kamu mainkan terhadap lagu, dan menyimpan akurasimu per lagu.",
  },
  scoreHitWindow: {
    label: "Rentang waktu tekan (ms)",
    help: "Not yang dimainkan sedekat ini dengan waktunya, lebih awal atau terlambat, dihitung kena.",
  },
  scorePerfectWindow: {
    label: "Rentang waktu sempurna (ms)",
    help: "Not yang kena sedekat ini dengan waktunya dihitung sempurna.",
  },
  enableGameMode: {
    label: "Mode permainan",
    help: "Memberi poin untuk not yang kena tepat dan not yang ditahan, mengurangi poin untuk setiap kesalahan, dan melipatgandakan kombo not yang kena beruntun.",
  },
  gameDifficulty: {
    label: "Tingkat kesulitan permainan",
    help: "Seberapa ketat ketepatan waktunya, serta berapa poin yang didapat dari sebuah not dan hilang karena kesalahan.",
    options: { easy: "Mudah: beberapa jam bermain", normal: "Normal: beberapa bulan", hard: "Sulit: sekitar setahun" },
  },
  // Piano
  clickablePiano: {
    label: "Mainkan piano dengan klik atau sentuhan",
    help: "Tuts di layar berbunyi saat kamu mengeklik atau mengetuknya.",
  },
  highlightActivePianoKeys: {
    label: "Warnai tuts yang ditekan",
    help: "Mewarnai tuts yang kamu tahan dengan warna di bawah.",
  },
  inputNoteColorWhite: {
    label: "Warna tuts putihmu",
    help: "Warna tuts putih yang kamu tahan.",
  },
  inputNoteColorBlack: {
    label: "Warna tuts hitammu",
    help: "Warna tuts hitam yang kamu tahan.",
  },
  pianoWhiteKeyColor: {
    label: "Warna tuts putih",
    help: "Warna tuts putih piano.",
  },
  pianoBlackKeyColor: {
    label: "Warna tuts hitam",
    help: "Warna tuts hitam piano.",
  },
  pianoVelvetColor: {
    label: "Warna kain laken",
    help: "Jalur kain laken di belakang tuts.",
  },
  pianoBackgroundColor: {
    label: "Warna latar",
    help: "Warna di belakang piano dan jalur.",
  },
  pianoPosition: {
    label: "Tinggi piano di layar (%)",
    help: "Menggeser piano ke atas atau ke bawah di layar.",
  },
  whiteKeyHeight: {
    label: "Panjang tuts putih (%)",
    help: "Seberapa panjang tuts putih digambar.",
  },
  enableKeyFlare: {
    label: "Kilau pada tuts yang ditekan",
    help: "Cahaya terang bersinar di atas setiap tuts yang berbunyi.",
  },
  pianoLineEnabled: {
    label: "Garis gelombang di atas tuts",
    help: "Garis yang beriak di atas setiap tuts yang berbunyi.",
  },
  pianoLineSpeed: {
    label: "Kecepatan gelombang",
    help: "Seberapa cepat gelombang garis bergerak.",
  },
  pianoLineResolution: {
    label: "Gelombang per oktaf",
    help: "Berapa gelombang yang muat dalam satu oktaf. Makin banyak gelombang, makin halus tampilannya.",
  },
  pianoLineAmplitude: {
    label: "Tinggi gelombang",
    help: "Dalam lebar tuts, di atas tuts yang berbunyi dengan kekuatan penuh.",
  },
  pianoLineColor: {
    label: "Warna garis gelombang",
    help: "Warna garis gelombang.",
  },
  pianoLineOpacity: {
    label: "Kepekatan garis gelombang",
    help: "Seberapa jelas garis gelombang terlihat. Makin rendah, makin samar.",
  },
  pianoLineYOffset: {
    label: "Tinggi garis gelombang",
    help: "Dalam lebar tuts, di atas tuts.",
  },
};
