# Indonesian: the style guide and glossary

Every writer and reviewer of an Indonesian text reads this file whole first. The method is
[translation.md](../../agent/translation.md), and this file adds only what is Indonesian. The machine's half
of these rules is the `id` entry of `src/i18n/typography.ts`.

## 1. Variant and readers

- **The variety is standard Indonesian, *bahasa baku*.** Its spelling is EYD, the official rules, and its
  word forms are those of KBBI, the official dictionary. MS § 1.1 names both as its norms.
- **Most readers live in Indonesia.** Readers in Malaysia and Brunei read it too, but the words are
  Indonesia's: *ponsel*, never *telefon bimbit*.
- **The readers are beginners of every age,** children and adults, who learn piano alone in a browser.
- **The text is standard, never stiff.** MS § 2.1 asks for everyday conversation, and § 2.1.1 prefers
  *butuh* over *membutuhkan*. Slang, *bahasa gaul*, is never used.

| Avoid | Write | Why |
|---|---|---|
| gue, lo, lu | aku, kamu | Jakarta slang |
| nggak, gak, enggak | tidak, tak | spoken forms; MS § 4.1.8 allows *tak* |
| banget, aja, udah, kayak, bikin | sekali, saja, sudah, seperti, membuat | spoken forms |
| dong, deh, sih, kok, yuk | the plain sentence; *ayo* | spoken particles |
| silahkan, praktek, merubah, resiko, ijin | (no *silakan*, see § 2), praktik, mengubah, risiko, izin | non-standard spellings |
| dimana, diatas, kebawah | di mana, di atas, ke bawah | EYD writes the prepositions *di* and *ke* apart |
| apapun, siapapun | apa pun, siapa pun | EYD writes *pun* apart, except in *meskipun*, *walaupun* and the like |
| Anda | kamu | see *Address* |

## 2. Address

- **The learner is *kamu*, and the possessive is *-mu*:** *tangan kananmu*, *lagumu*. *Anda*, *engkau* and
  *kau* are never used.
- **This departs from both sources on purpose.** MS § 2.2.1 and Android write *Anda* throughout. They speak
  to adults who manage a computer. This app is a teacher beside a learner, who is often a child. Android
  itself turns to *kamu* where it speaks to a young user: *Perangkat ini dikelola oleh orang tuamu.*
- **The teacher speaks as *aku*.** *Aku* pairs with *kamu*, where *saya* pairs with *Anda*. The project
  speaks as *kami*, as MS § 2.2.2 does: *Kami tidak menyimpan datamu.*
- **"Let's" is *ayo* or *mari*:** *Ayo main!* *Kita* includes the learner, and *kami* never does.
- **An instruction is a short imperative:** *Tekan*, *Pilih*, *Mainkan*, *Letakkan*, *Dengarkan*. MS § 2.2
  writes them bare.
- **A word for "please" is dropped:** no *silakan*, *mohon* or *tolong*. MS § 2.1.2 lists all three to
  avoid, and the warmth sits in the wording.
- **The particle *-lah* and the softeners are rare.** *Cobalah lagi* is warm once in a lesson, but a
  button is bare: *Coba lagi*.
- **A button, a menu item or a tab is a verb or a noun:** *Lanjutkan*, *Buka lagu*, *Pengaturan*.
- **A setting's name is a noun or a verb,** and its help text is a plain sentence about what it does.
- **A question to the learner is short:** *Keluar dari pelajaran ini?* MS § 4.1.15 uses fragments such as
  *Lanjutkan?* *Apakah* opens a question only where it reads ambiguous without it.
- **The active voice comes first,** as MS § 4.1.17 asks. A passive *di-* form is fine where the doer does
  not matter: *Lagu disimpan.*
- **An error names what failed, never the learner's mistake.** MS § 5.5.2 gives *Tidak dapat …* and
  *Gagal …*: *Tidak dapat menyimpan.* *Terjadi kesalahan* stands for "Something went wrong".

## 3. Voice

Warm, plain and short, as a good teacher speaks. MS § 3.2 asks for one verb per sentence where it can.
Prefer the short everyday word: *pakai* over *menggunakan* in a lesson, *lihat* over *menampilkan*, *bisa*
over *dapat* in prose, *ubah* over *modifikasi*. An error keeps *Tidak dapat*, as § 2 says.

| English | Indonesian | Why it reads warm and plain |
|---|---|---|
| Hi, I'm your piano teacher. Shall we play? | Halo! Aku guru pianomu. Ayo kita main? | *Ayo kita main?* invites, as the English does. *Aku* is how a friendly teacher speaks to a child. |
| Not quite. Try again. | Hampir. Coba lagi. | *Hampir* is how a teacher softens a miss. *Kurang tepat* reads like an exam sheet. |
| Every lesson takes you further. Keep going! | Setiap pelajaran membawamu lebih jauh. Terus semangat! | *Terus semangat!* is the everyday cheer. *Lanjutkan!* would sound like a button. |

## 4. Gender

- **Indonesian has almost no grammatical gender.** *Dia* is he and she, and adjectives never agree. MS
  § 3.1 says so.
- **A gendered word is avoided:** no *-wan* or *-wati*, no *Saudara* or *Saudari*, no *Bapak* or *Ibu*.
  MS § 3.1 asks this.
- **A person of the craft takes the neutral word:** *pianis*, *guru*, *komponis*, *penyanyi*, *pemain*.
- **The teacher is *guru piano*,** an ape, with no gender in the word.
- **Where a person must be named, write *orang*:** *orang yang bermain*, as MS § 3.1 suggests.
- *Selamat datang!* and *Terima kasih* have no gender, so they stay.

## 5. Terms

One term per idea, in every file. Sources: WP is Indonesian Wikipedia, by article title. EP is edupoint.id's
piano guide. DN is dutanada.com. GR is Gramedia's education blog. WH is Indonesian wikiHow, which is
translated from English and so the weakest. MS is Microsoft's Indonesian style guide. AN is Android's
Indonesian strings (`values-in`). A row marked *unsourced* rests on common usage alone, and *Open* lists it.

### The piano glossary

| English | Indonesian | Sources |
|---|---|---|
| key (of the piano) | tuts | WP *Piano*; EP |
| white key, black key | tuts putih, tuts hitam | WH; EP |
| keyboard (the piano's) | papan tuts; *deretan tuts* in prose | WP *Piano*, one source |
| keyboard (a MIDI one) | keyboard MIDI | EP and WH write *keyboard* for the instrument |
| note (a written sign, a key played) | not | WP *Not*; DN; EP |
| a sound; pitch | nada; tinggi nada | WP *Tala*; WP *Paranada* |
| middle C | C tengah | WP *Kunci (musik)*; EP |
| octave | oktaf | WP *Oktaf*; EP |
| half step, whole step | setengah nada, satu nada; a count of half steps is *N kali setengah nada*, since *empat setengah nada* reads as 4½ tones | WP *Kres*; GR *tangga-nada-mayor* |
| sharp, flat, natural (the signs) | kres, mol, pugar | WP *Tanda kromatis*; EP |
| accidental | tanda kromatis | WP *Tanda kromatis*; EP |
| staff | paranada | WP *Paranada*; EP; DN |
| grand staff | paranada ganda | the course's own term, defined where it first appears; EP writes *dua paranada* |
| treble clef, bass clef | kunci G, kunci F | WP *Kunci (musik)*; DN; EP |
| ledger line | garis bantu | WP *Garis bantu (musik)*; EP |
| line, space (of the staff) | garis, spasi | WP *Paranada*; EP |
| landmark (a note read at a glance) | not patokan | the course's own term, defined where it first appears |
| bar | birama | WP *Birama*; GR *birama* |
| bar line | garis birama | WP *Birama*; GR *birama* |
| time signature | tanda birama | WP *Tanda birama*; EP; DN |
| beat (one count of a bar) | ketukan: *birama tiga ketukan* | WP *Tempo (musik)*; EP; GR |
| hold for two beats | tahan selama dua ketukan | follows *ketukan* |
| the beat (the steady pulse) | denyut ketukan; *ketukan* where it is clear | the course's own term, unsourced |
| three-four time | birama 3/4 | WP *Birama*; GR *birama* |
| count-in | hitungan awal | the course's own term, defined where it first appears |
| rhythm | ritme | WP *Ritme*; GR *ritme*. *Irama* also reads as a song's style. |
| tempo; speed | tempo; kecepatan | WP *Tempo (musik)*; GR *tempo* |
| metronome | metronom | WP *Metronom*, one source |
| whole, half, quarter note | not penuh, not setengah, not seperempat | WP *Not empat ketuk*; DN; EP |
| eighth, sixteenth note | not seperdelapan, not seperenambelas | DN; EP |
| thirty-second, sixty-fourth note | not sepertigapuluh dua, not seperenampuluh empat | follows the row above, unsourced |
| dotted | bertitik: *not setengah bertitik* | WP *Nilai not*, one source |
| rest; quarter rest | tanda istirahat; tanda istirahat seperempat | WP *Tanda istirahat (musik)*; EP |
| tie | garis ikat | unsourced |
| slur | tanda legato | WP *Notasi musik*, one source |
| repeat sign | tanda ulang | unsourced |
| first, second ending | akhiran pertama, akhiran kedua | unsourced |
| first, second, last time through | pada putaran pertama, kedua, terakhir | everyday words |
| pickup | birama gantung | Indonesian song books, unsourced; WP *Daftar istilah musik* writes *anacrusis* |
| syncopation | sinkopasi | GR *ritme*, one source |
| scale | tangga nada | WP *Tangga nada*; GR; EP |
| major, minor | mayor, minor | WP *Tangga nada mayor*; GR |
| key (of a song) | nada dasar | WP *Notasi musik*; GR *harmoni* |
| key signature | tanda mula | EP; GR *tangga-nada-mayor*. WP's title *Tanda kunci* clashes with *kunci G*. |
| scale degree | tingkat: *tingkat ke-5* | WP *Harmoni (musik)*; GR *harmoni* |
| chord | akor | WP *Akor*; GR. *Akord* is not used. |
| triad; major, minor triad | trisuara; trisuara mayor, trisuara minor | WP *Harmoni (musik)*, one source |
| root | nada akar | WP *Akar (akord)*. *Nada dasar* is kept for the key. |
| inversion; root position | pembalikan; posisi dasar | WP *Akor* for *pembalikan*; *posisi dasar* is unsourced |
| G seventh (chord) | akor G7, read *G septim* | WP *Harmoni (musik)*; GR *tempo* |
| broken chord | akor terurai | unsourced; WP describes it only |
| arpeggio | arpeggio | WP *Daftar istilah musik*; EP |
| Alberti bass, waltz bass, stride bass | bas Alberti, bas wals, bas stride | the guides' own terms |
| bass note | not bas | the course's own term |
| interval | interval | WP *Interval (musik)*; GR *interval-nada* |
| third, fourth, fifth, sixth, seventh | terts, kuart, kuint, sekst, septim | WP *Interval (musik)*; GR. *Kwint* is not used. |
| major third, minor third | terts mayor, terts minor | WP *Interval (musik)*; GR |
| open fifth | kuint kosong | the course's own term, since its lessons say it "sounds open" |
| step, skip, leap (between keys) | geser, loncatan kecil, lompatan | the course's own terms, defined where they first appear. *Langkah* is kept for a lesson's step. |
| tune, melody | melodi | WP *Melodi*; GR *melodi* |
| phrase | frasa | WP *Frasa (musik)*; GR. KBBI spells *frasa*. |
| figure (a short musical idea) | *pola* when it repeats, else *motif* | everyday words |
| call and answer (phrases) | tanya-jawab | everyday words |
| pattern (of notes) | pola | everyday word |
| verse, chorus | bait, refrein | GR *harmoni*; WP *Refrein* |
| coda | koda | WP *Koda (musik)*, one source |
| dynamics | dinamika | WP *Dinamika (musik)*; EP |
| loud, soft | keras, lembut | WP *Dinamika (musik)*, one source |
| legato, staccato | legato, staccato | WP *Legato*; WH. WP's *stakato* is not used, so the word matches the score. |
| crescendo, diminuendo | crescendo, diminuendo | WP *Crescendo*, one source |
| hairpin | tanda crescendo, tanda diminuendo; a quiz that asks which is which names the shape: *tanda > yang menyempit*, *tanda < yang melebar* | no source names it |
| mark (p, f, rit.) | tanda | the course's own term |
| fermata | fermata | the Italian word, unsourced |
| turn (ornament); ornament | hiasan turn; hiasan | unsourced |
| mordent | mordent | the Italian word, unsourced |
| double notes | not ganda | the guides' own term |
| a run (fast notes) | rentetan not cepat | the guides' own term |
| octave bass | bas oktaf | the guides' own term |
| pedal | pedal | WH; EP |
| sustain pedal | pedal sustain; *pedal kanan* in a lesson | WH, one source |
| soft pedal | pedal kiri | the plain name, unsourced |
| press a pedal, lift it | injak pedal, lepaskan pedal | the plain verbs of a foot |
| fingering | penjarian | EP; WH |
| finger numbers | 1 ibu jari, 2 telunjuk, 3 jari tengah, 4 jari manis, 5 kelingking | WH; EP. *Telunjuk* is the everyday word, unsourced. |
| right hand, left hand, both hands | tangan kanan, tangan kiri, kedua tangan | EP; WH; DN |
| hand position; C position | posisi tangan; posisi C | the course's own terms |
| thumb under, finger over | ibu jari menyusup, jari menyeberang | the course's own terms, unsourced |
| a shape the hand holds; the octave shape | posisi; posisi oktaf | the guides' own terms. *Bentuk* reads as translated. |
| a stretch between two fingers; the same shape of an interval | rentangan; rentangan yang sama | the guides' own terms |
| the shape of a melody | alur: *alur yang sama dengan birama 6* | the guides' own term |
| even notes; play them evenly | not yang rata; dengan rata | the guides' own terms. *Not yang sama* reads as the same note. |
| on the beat; on beat 1 | tepat pada ketukan; pada ketukan 1 | § 8 keeps a beat's digit |
| three times as long | tiga kali panjangnya | *Tiga kali lebih panjang* can read as four times |
| little finger, in prose | kelingking | after the finger numbers above |
| a pair (two notes struck together) | pasangan not | the guides' own term |
| a rub (a soft dissonance); rubs against | gesekan; bergesekan dengan | the guides' own terms |
| bounce (the wrist, a finger) | memantul: *biarkan pergelangan memantul* | everyday word |
| plucked (bass, octaves) | dipetik | the guides' own term |
| conductor, bandleader | dirigen | everyday word |
| film score | musik film | everyday words |
| hymnal; set words to music | buku himne; menggubah | everyday words |
| wrist | pergelangan tangan | everyday word |
| fingertips | ujung jari | everyday word |
| by feel | dengan rabaan | everyday word |
| sight-reading | membaca cepat | WH, one source |
| play (the piano, a key, a note) | main, bermain piano; memainkan, mainkan | everyday words; see *Which "play" is which* |
| practise | berlatih; latihan | everyday words |
| song; piece | lagu; karya | everyday words |
| sheet music | partitur | WP *Partitur*; EP |
| high, low (pitch) | tinggi, rendah | WP *Paranada*; WH |
| transpose | transposisi; memindahkan nada dasar | WH writes *mengubah nada*, one source |
| stem, note head | tangkai not, kepala not | WP *Nilai not*; EP |
| piano bench | bangku piano | everyday word |
| at full speed; at three-quarter speed | dengan kecepatan penuh; dengan tiga perempat kecepatan | the guides' own terms, after *kecepatan* |
| waltz | wals | WP *Wals*; GR *birama* |
| carol; sea shanty; jig | lagu Natal; lagu pelaut; jig | WP *Musik Natal* for *lagu Natal*; the others are unsourced |
| suite, symphony, sonata, concerto | suite, simfoni, sonata, konserto | everyday words of concerts |
| movement, overture, variation | bagian, overture, variasi | everyday words of concerts |
| march, hymn, lullaby, nocturne | mars, himne, lagu ninabobo, nokturno | WP *Tempo (musik)*; WP *Himne*; WP *Ninabobo* |
| organ (the church's) | orgel; *orgel pipa* | KBBI. *Organ* reads as an electric keyboard, unsourced |
| the Christ Child | Kanak-kanak Yesus | church usage, unsourced |
| a move of the hand | gerakan | *langkah* is kept for a lesson's step |
| attack, decay, sustain, release | attack, decay, sustain, release | synthesizer usage keeps the English |
| enharmonic | enharmonis | WP *Akor*, one source |

### The interface glossary

| English | Indonesian | Sources |
|---|---|---|
| Settings | Pengaturan | MS. AN writes *Setelan*, which also means a suit of clothes. |
| Songs (the library's panel); library | Lagu; pustaka lagu | everyday words, unsourced |
| Open, Close, Cancel | Buka, Tutup, Batal | MS; AN |
| Back, Next, Previous | Kembali, Berikutnya, Sebelumnya | AN; MS for *Berikutnya* |
| Continue | Lanjutkan | AN; MS § 4.1.15 |
| OK, Done | Oke, Selesai | AN |
| Skip | Lewati | AN |
| Reset | Atur ulang | the standard form; AN writes *Reset* |
| Save | Simpan | MS; AN |
| Delete; Remove | Hapus | MS; AN. AN writes *Hapus* for both. |
| Restore (a backup) | Pulihkan | AN |
| Search | Cari | the everyday word; AN writes *Telusuri*, which reads like a web search |
| Play, Pause, Stop (playback) | Putar, Jeda, Hentikan | AN *Putar*, *Jeda*; *Hentikan* is the imperative of AN's *Berhenti* |
| Loop (button); a loop | Ulangi; pengulangan | the word of music players, unsourced |
| Speed | Kecepatan | AN *Kecepatan kursor* |
| Volume, Mute | Volume, Bisukan | AN |
| Fullscreen | Layar penuh | AN |
| Theme; Light, Dark, Like the system | Tema; Terang, Gelap, Ikuti sistem | AN *Tema gelap*, *Terang*. AN's *Default sistem* is a loan, and *Ikuti sistem* says what it does. |
| Language | Bahasa | AN |
| computer keyboard; computer key | keyboard komputer; tombol | AN *Keyboard fisik*. *Tuts* is kept for the piano. |
| touch screen | layar sentuh | AN |
| device; connect, disconnect | perangkat; hubungkan, putuskan | AN |
| folder; file | folder; file | MS; AN. Neither writes *berkas*. |
| browser | browser | AN. *Peramban* is rare outside KBBI. |
| offline | tanpa internet | plain words, unsourced |
| Install, Update | Instal, Perbarui; *pembaruan* | MS § 2.1.2; AN |
| app | aplikasi | MS; AN |
| Help, Tip | Bantuan, Tips | MS; AN |
| Try again (a button); in prose | Coba lagi; *Coba lagi.* | MS § 2.2.1; AN |
| tap, click or press a control | pilih | MS § 3.2 prefers *Pilih* to *Klik*, since it fits every input |
| press a computer key; press a piano key | tekan tombol; tekan tuts | everyday verb |
| choose (one of several) | pilih | MS; AN |
| find, look for | temukan, cari | MS *Temukan* |
| a page of the site; a printed page | halaman | everyday word |
| lesson, step, world | pelajaran, langkah, dunia | the course's own terms |
| quiz; demo | kuis; contoh | KBBI *kuis*. *Contoh* is plainer than *demo*. |
| boss (a world's last lesson) | tantangan akhir; a title is *Tantangan akhir: <song>* | the words of games |
| skip test | tes lompat | the course's own term |
| level; Level up! | level; Naik level! | AN *level*; the word of games |
| XP | XP | kept |
| badge, achievement | lencana | the word of games, unsourced |
| streak | beruntun: *3 hari beruntun*; a heading or a *-mu* form is *Hari beruntun*, *hari beruntunmu* | everyday word, unsourced |
| daily goal | target harian | everyday words, unsourced |
| score; points | skor; poin | everyday words, unsourced |
| stars | bintang | everyday word |
| take (one recorded play) | percobaan | everyday word |
| Favourites | Favorit | AN |
| track (of a MIDI file) | trek | the word of audio apps, unsourced |
| progress | kemajuan | everyday word |
| backup; back up | cadangan; cadangkan | AN *Cadangkan data saya* |
| guide (a song's) | panduan | everyday word |
| a setting; options | pengaturan; opsi | MS; AN |
| the player (of songs) | pemutar | AN's media words |
| Beginner, Easy, Medium, Hard, Advanced, Expert | Pemula, Mudah, Sedang, Sulit, Mahir, Ahli | the usual ladder of levels |
| Easy, Normal, Hard (a song) | Mudah, Normal, Sulit | the same ladder |
| common, rare, epic, legendary (a version) | biasa, langka, epik, legendaris | the words of games |
| Perfect, Great, Good | Sempurna, Hebat, Bagus | the words of rhythm games |
| Wrong note, Too short, Too long, Late | Not salah, Terlalu pendek, Terlalu panjang, Terlambat | plain words |
| free play; pitch practice | Main bebas; Latihan pendengaran | the course's own terms |
| hotkeys | pintasan keyboard | AN |
| velocity (of a key) | kekuatan tekan | *kecepatan* is taken by Speed |
| lane; timeline | jalur; linimasa | the player's own terms; KBBI *linimasa* |
| hit, miss, mistake | kena, terlewat, salah | plain words |
| add; remove | tambahkan; hapus | AN |
| open source | sumber terbuka | everyday words, unsourced |
| download | unduh; *unduhan* | MS writes *diunduh* and *File unduhan*. AN writes *Download*. |
| error (a title); a failure in a message | Kesalahan; *Tidak dapat …* | MS § 5.5.2 |
| loading | Memuat… | AN |
| Expert (the bar's key for the expert tools); expert tools | Lanjutan; alat lanjutan | *Ahli* stays the level |
| view (of the scene) | tampilan | everyday word |
| Clear (a field, a key binding) | Kosongkan | *Hapus* is taken by Delete |
| how loud (a sound's level) | volume | see the piano glossary for *keras* |
| Play modes | Mode bermain | the site's own term |
| sound set; background track | set suara; iringan | plain words, unsourced |
| hit line; hit window | garis tekan; rentang waktu tekan | the player's own terms |
| loop trainer; a pass of a loop | latihan berulang; putaran | the player's own terms |
| reverb; equaliser; detune | gema; equalizer; penyetelan halus | the words of audio apps |
| particles; markers; labels | partikel; penanda; label | plain words |
| tag (search); round (a game) | tag; ronde | plain words |
| Preview (a song) | Dengarkan; Berhenti mendengarkan | plain words |
| the scene (the 3D piano and its notes) | tampilan 3D; *tampilan* in prose | *Adegan* reads as a film's scene |
| default | bawaan; *nilai bawaan* | AN *bawaan* |
| custom | kustom | AN |
| input; output (MIDI) | masukan; keluaran | KBBI |
| MIDI channel | kanal MIDI | KBBI *kanal* |
| combo; multiplier; accuracy | kombo; pengali; ketepatan | the words of rhythm games |
| root (of a chord); a chord tone | akar; *ke-5*, *ke-♭3* | the player's own short labels |
| Offline files (a title); offline | File tanpa internet; *tanpa internet* | everyday words. *Luring* is KBBI's but few learners know it. |
| frame; frames per second | frame; *frame per detik* | the word of games. *Bingkai* reads as a picture frame. |
| particles wander; sway | simpangan; ayunan | plain words, unsourced |
| the teacher, an ape | kera | everyday word |
| Sponsor (the page) | Dukungan; *Dukung di GitHub* | *Sponsor* reads as a company's |
| setup (the first visit) | persiapan | everyday word |

### Which "play" is which

- **A key, a note, a song on the piano:** *mainkan*, or *main* without an object. *Mainkan C dan E
  bersamaan.* *Bermain piano* is the craft.
- **Starting playback of a song:** *putar*. The transport's *Play* is *Putar*.
- **A song that sounds on its own:** *lagu diputar*, as in *Sedang diputar*.
- **A game or a mode:** *main*, and *Mode permainan* for *Game mode*.
- **A lesson's "Play again" that replays a demo:** *Dengarkan lagi*, since the learner listens.
- **"Your turn":** *Giliranmu.*
- **A control is never *dimainkan*.** *Pilih Putar*, never *Mainkan Putar*.

### A guide's recurring steps

The song guides repeat these steps word for word. Each English step has one Indonesian text in every guide.
A step that only differs in its bars or its section follows the nearest row's shape.

| English | Indonesian |
|---|---|
| Play the whole song with both hands at three-quarter speed. | Mainkan seluruh lagu dengan kedua tangan, dengan tiga perempat kecepatan. |
| Play the whole song with both hands at full speed. | Mainkan seluruh lagu dengan kedua tangan, dengan kecepatan penuh. |
| Play the whole song with both hands, a little slower than written. | Mainkan seluruh lagu dengan kedua tangan, sedikit lebih lambat dari tertulis. |
| Now play it at full speed. | Sekarang mainkan dengan kecepatan penuh. |
| Now play it at full speed, with the pedal. | Sekarang mainkan dengan kecepatan penuh, dengan pedal. |
| Join the hands on the first eight bars, slowly. | Gabungkan kedua tangan pada 8 birama pertama, pelan-pelan. |
| Put both hands together on the whole song, slowly. | Gabungkan kedua tangan pada seluruh lagu, pelan-pelan. |
| Join the hands on bars 9 to 16, slowly. | Gabungkan kedua tangan pada birama 9 sampai 16, pelan-pelan. |
| Play the right hand alone on the first eight bars, and let the song wait for each note. | Mainkan tangan kanan saja pada 8 birama pertama, dan biarkan lagu menunggu setiap not. |
| Play the right hand alone, slowly, and let the song wait for each note. | Mainkan tangan kanan saja, pelan-pelan, dan biarkan lagu menunggu setiap not. |
| Play the left hand alone, and press the notes of each chord together. | Mainkan tangan kiri saja, dan tekan not setiap akor bersamaan. |
| Keep the Alberti bass soft, so the tune sings above it. | Mainkan bas Alberti dengan lembut, agar melodi bernyanyi di atasnya. |
| Change the pedal on each new bass note, twice in every bar. | Ganti pedal di setiap not bas baru, dua kali dalam setiap birama. |
| Now the left hand alone. It holds one shape for each bar. | Sekarang tangan kiri saja. Tangan kiri menahan satu posisi di setiap birama. |
| Now the left hand alone. It holds one shape for half a bar or a whole bar. | Sekarang tangan kiri saja. Tangan kiri menahan satu posisi selama setengah atau satu birama penuh. |
| Now the left hand alone. It keeps one shape and changes it at most once a bar. | Sekarang tangan kiri saja. Tangan kiri menahan satu posisi dan menggantinya paling banyak sekali per birama. |
| Play the right hand's octaves alone, with the thumb and finger 5 kept in one shape. | Mainkan oktaf tangan kanan saja, dengan ibu jari dan jari 5 dalam satu posisi. |

More rules the guides settle:

- **A step that plays one part names the part, then *saja*:** *Mainkan bas Alberti saja.*
- **"First time through" is *pada putaran pertama*,** and the second and the last time follow it. A step
  names the part, then the hand, then the time: *Mainkan arpeggio tangan kiri saja, pada putaran kedua.*
- **Loud is *keras*, never *tinggi*.** *Tinggi* is kept for pitch.
- **Rhythm syllables are *ta*,** such as *“taa, ta-ta”*.
- **A work's title capitalises its main words,** as EYD asks: *Simfoni Kesembilan*, *Tarian Hungaria*.
- **The *-nya* that means "its" is used where English writes "its":** *Mainkan melodinya.* It never stands
  for the learner's own hand, which is *-mu*.

### A lesson's recurring lines

The lessons repeat these lines. Each English line has one Indonesian text in every world.

| English | Indonesian |
|---|---|
| Well done. | Bagus sekali. |
| Your turn. | Giliranmu. |
| Your turn, after one bar of count-in. | Giliranmu, setelah satu birama hitungan awal. |
| Watch and listen. | Perhatikan dan dengarkan. |
| Listen and watch. | Dengarkan dan perhatikan. |
| Listen. | Dengarkan. |
| Put your right hand in C position. | Letakkan tangan kananmu di posisi C. |
| Put your right thumb on middle C. | Letakkan ibu jari kananmu di C tengah. |
| Keep your hand where it is. | Biarkan tanganmu di tempatnya. |
| Press Start and listen to four clicks first. | Tekan Mulai, lalu dengarkan dulu empat klik. |

## 6. Kept words

- **Learn Piano Easy**, **MIDI**, **Web MIDI**, **MusicXML** and **XP** stay as they are.
- **A kept word stands after the noun it qualifies:** *keyboard MIDI*, *file PDF*.
- **Units and formats:** BPM, FPS, PDF, USB, Hz, kHz, dB, ms, KB and MB.
- **Product and site names:** GitHub, Matomo, Wikipedia, Wikimedia Commons, Mutopia, Chrome, Edge,
  Firefox and Safari.
- **A computer key keeps its name:** Esc, Shift, Enter, Q or Z. MS keeps Ctrl and Alt and writes
  *Spasi* for the space bar.
- **Italian music words:** *legato*, *staccato*, *crescendo*, *diminuendo*, *forte*, *piano*, *tempo*,
  *arpeggio* and *fermata*, as Indonesian teaching keeps them. *Koda* takes WP's spelling.
- **The printed marks of a score:** `p`, `mp`, `mf`, `f`, `pp`, `ff`, `rit.`, `rall.`, `cresc.`, `dim.`,
  `a tempo` and `Ped.`
- **Catalog numbers:** `BWV 1068`, `K. 525`.
- **The song titles and the composers' names.** A title is data shared by every locale, and the library
  searches it.
- **A film keeps the title the English guide writes,** such as *The Shining*. A book, an opera or a
  symphony takes its usual Indonesian name where one exists, such as *Simfoni Kesembilan*. A kept title
  with a mark, such as *Moulin Rouge!*, goes in the `kept` list.
- **A city takes its Indonesian name,** such as *Wina* for Vienna. One without, such as London or
  Olomouc, keeps its own.
- **The sections "Learn Piano" and "Just Play Piano" are translated,** since they say what a learner does.
  "Learn Piano" is *Belajar Piano*, and "Just Play Piano" is *Main Piano Saja*. Neither takes quotes.
- **The worlds' titles are** Kenali piano, Melodi pertama, Ritme, Membaca not, Kedua tangan, Tangga nada
  dan nada dasar, Akor and Ekspresi. `src/learn/course.ts` takes them when Indonesian ships.
- The `kept` list of `src/i18n/typography.ts` holds each kept word a test could misread, and each label
  that is the same in both languages, such as *Normal*, *Volume*, *Menu*, *Level* and *Audio*.

## 7. Note names

- **Notes are letters:** C D E F G A B, uppercase. Staff notation in Indonesia names them so: WP *Tangga
  nada*, DN, EP and GR.
- **Do re mi appears only where the English means singing.** It is how Indonesians read number notation,
  *not angka*, which is movable. It names no fixed key, so a lesson never uses it for one.
- **A sharp or a flat in running text is a word after the letter:** *F kres*, *B mol*. WH and EP write so.
  The German forms *Fis* and *Bes* of formal theory are never used.
- **A name the screen shows,** such as `F♯4` on a key, keeps the form of `src/theory/note-names.ts`. A
  text that points at that label writes it the same way, and a lesson may write `F♯` once it has taught it.
- **The octave number is scientific:** middle C is `C4`. A lesson names a note by its place, as the
  English does: *C tengah*.
- **"Low C" is *C rendah*, and "high C" is *C tinggi*.** These words name pitch alone. Loudness takes
  *keras* and *lembut*, so the two never blur.
- **A key is its letter and its quality:** *C mayor*, *A minor*, *F kres minor*. A chord puts *akor*
  first: *akor C*, *akor A minor*.
- **A spelled-out chord lists its letters with commas:** *C, E, dan G*.
- **A letter needs no article:** *Tekan C*, *dari C ke G*, *turun ke G*.
- **A plural of notes counts the letter:** *kedua C*, *tiga G pendek*. Where it reads oddly, write *dua
  tuts C*.
- **A letter that code checks,** such as a quiz answer, stays the catalog's own.

## 8. Numbers

- **`Intl` formats every number for `id`:** `1.234,5`, with a comma for decimals. MS § 4.1.14 writes the
  same.
- **A percent sign follows its number without a space:** `80%`, as CLDR writes it.
- **Fingers, octaves, bars, beats and lessons keep their digits:** *birama 3*, *jari 3*, *pelajaran 5*.
- **A count from one to nine in prose is a word,** such as *tiga tuts*, when the English writes it so. A
  label or a counter keeps the digit.
- **An ordinal in prose is *ke-* joined to its word:** *birama kedua*, *pelajaran ketiga*. *Pertama* is
  the first. Beside a digit, write *ke-3*, with the hyphen EYD asks for.
- **"Twice as fast" is *dua kali lebih cepat*.** *Kecepatan ganda* reads plainer in a label.
- **"X of Y" is *X dari Y*:** *3 dari 8 pelajaran*.
- **Indonesian has one plural form.** `Intl` names only `other`, so a counted message has one form, and
  it reads well for 0, 1 and many: *0 lagu*, *1 lagu*, *5 lagu*.
- **A noun is never doubled where a count already shows the plural:** *3 lagu*, *beberapa not*, *semua
  pelajaran*. MS § 4.1.11 says doubling is often not needed. *Lagu-lagu* stands only without a count.
- **A time signature is printed as figures:** `3/4`, read *tiga per empat*.

## 9. Marks

Each rule has its pattern in the `id` entry of `src/i18n/typography.ts`. The rules test reads a text
with each kept word written as `X`.

| Rule | Pattern (`mustNot`) |
|---|---|
| A quote stands in “ ”, never in straight quotes or « ». | `["«»„]` |
| No space stands before a period, a comma, a colon, a semicolon, ?, ! or %. | `\s[.,:;?!%]` |
| An ellipsis is the one character …. | `\.\.\.` |
| The learner is *kamu*, never *Anda*, *engkau* or slang. | *anda*, *engkau*, *gue*, *lo*, *lu* and the like, as whole words, ignoring case |
| No word asks "please". | *silakan*, *silahkan*, *mohon*, *tolong*, as whole words |
| The text is standard Indonesian, with no *bahasa gaul*. | *nggak*, *gak*, *banget*, *aja*, *udah*, *dong*, *sih* and the like |
| A word takes its standard EYD spelling. | *praktek*, *merubah*, *resiko*, *ijin*, *jaman* and the like |
| The preposition *di* or *ke* stands apart from the place it names. | *dimana*, *diatas*, *kebawah* and the like |
| The particle *pun* stands apart after a question word. | *apapun*, *siapapun*, *manapun*, *kapanpun* |
| A noun is never doubled where a count already shows the plural. | a digit or a count word, then a doubled word |
| A range between digits takes – with no spaces. | a dash with a space on either side |

- **Quotes are “ ”, with ‘ ’ inside,** as MS § 4.1.14 writes them: *Pilih “Putar”*.
- **A name the learner looks for is in quotes only when it could read as part of the sentence:** *Pilih
  “Putar”*. A section's name such as *Main Piano Saja* takes none.
- **A counted beat stands in quotes:** *Hitung “1-2” pada setiap not setengah.*
- **An ellipsis is the one character …,** with no space before it. Android writes it so in most strings.
  MS writes three periods, which a font may break across lines.
- **A label is sentence case:** only its first word and its proper names take a capital. Android writes
  its labels so. MS § 4.1.5 asks title case of menus, but one case across the site reads calmer.
- **Days, months and languages take a capital,** as EYD asks: *Senin*, *Januari*, *bahasa Indonesia*.
  The word *bahasa* stays lowercase inside a sentence.
- **A list of three or more takes a comma before *dan* or *atau*:** *C, E, dan G*. MS § 4.1.14 and EYD
  write it so.
- **A range has an en dash and no spaces:** *birama 1–4*, as MS § 4.1.14 writes it. Prose may write
  *birama 1 sampai 4*.
- **A list item that is a sentence ends with a period.** A fragment has none.
- **The em dash is avoided.** MS § 4.1.14 puts a comma or parentheses in its place.
- **A loanword with an Indonesian prefix or suffix takes a hyphen only before a capital or a digit:**
  *di-download* is never written, since *unduh* is the word. *ke-3* and *se-Indonesia* take one.

## 10. Length

Indonesian runs about a fifth to a third longer than English. A button or a label keeps about the English
length. Prose may grow.

| Long | Short, for a label |
|---|---|
| pedal sustain | pedal |
| tanda birama | birama |
| tanda istirahat | istirahat |
| membaca cepat | membaca |
| tangan kanan, tangan kiri | kanan, kiri |
| keyboard komputer | keyboard |
| Berhenti mendengarkan | Berhenti |
| pustaka lagu | Lagu |

- **A button that does not fit loses words, never meaning:** *Buka lagu* becomes *Buka*.
- **An abbreviation is avoided in prose.**

## 11. Calibration

Each row is the chosen translation, and why it beat the next best one.

| Kind | English | Indonesian | Why it beat the next best |
|---|---|---|---|
| Button | Continue | Lanjutkan | Android's label. *Lanjut* is the spoken form. |
| Transport tooltip | Play or pause | Putar atau jeda | *Putar* is the playback verb. *Mainkan* would mean playing the piano. |
| Tooltip | Loop the bars set in the settings | Ulangi birama yang dipilih di pengaturan | *Dipilih* is plain. *Ditetapkan* reads like a manual. |
| Setting and help | Wait for your notes / The song stops at each of your notes until you hold every key of it. | Tunggu notmu / Lagu berhenti di setiap notmu sampai kamu menahan semua tutsnya. | *-mu* keeps the address short. *Not Anda* would break § 2. |
| Error | Your browser refused to save. Nothing changed. | Tidak dapat menyimpan di browser. Tidak ada yang berubah. | The form of MS § 5.5.2. *Browser-mu menolak* gives the browser a will. |
| Toast | A new version is ready. | Versi baru sudah siap. | *Sudah* makes it news. *Versi baru siap* reads like a headline. |
| Dialog | Reset all progress? / Are you sure? | Atur ulang semua kemajuan? / Kamu yakin? | *Kamu yakin?* is how a person asks. *Apakah Anda yakin?* is a form's. |
| Counter | 3 of 8 lessons | 3 dari 8 pelajaran | The plain order, with no doubled noun. |
| Streak | 3-day streak | 3 hari beruntun | Short and everyday. *Streak 3 hari* is a calque. |
| Feedback | Right! | Benar! | A teacher's word. *Tepat!* reads like a quiz machine. |
| Lesson recap | Well done. You can count bars of four now. | Bagus sekali. Sekarang kamu bisa menghitung birama empat ketukan. | *Bisa* is everyday. *Dapat* would read like a report card. |
| Greeting | Hi, I'm your piano teacher. Shall we play? | Halo! Aku guru pianomu. Ayo kita main? | *Saya* would pair with *Anda* and sound like an office. |
| Badge | Night owl / Finish a lesson at 10 at night or later. | Burung hantu / Selesaikan pelajaran pada pukul 10 malam atau lebih. | The badge is the bird, and *pukul* is how a time is written. |
| Joke | Quality control is a cat that walks over the keys now and then. | Pengendali mutunya seekor kucing yang sesekali berjalan di atas tuts. | *Sesekali* keeps the deadpan. A word-for-word *adalah* sounds stiff. |
| Level up | Level up! / Every lesson takes you further. Keep going! | Naik level! / Setiap pelajaran membawamu lebih jauh. Terus semangat! | *Naik level* is the word of games, and every learner knows it. |
| Lesson explanation | The right pedal is the sustain pedal. While it is down, every note keeps sounding after you let go of its key. | Pedal kanan adalah pedal sustain. Selama pedal diinjak, setiap not tetap berbunyi walau tutsnya sudah kamu lepas. | *Diinjak* is the foot's verb. *Ditekan ke bawah* is a calque. |
| Lesson instruction | Your turn. Put your right thumb on middle C and play C and E together. | Giliranmu. Letakkan ibu jari kanan di C tengah, lalu mainkan C dan E bersamaan. | *Lalu* joins two steps as a teacher speaks. |
| Quiz | How many black keys are in the smaller group? / One, Two, Three, Four | Berapa tuts hitam di kelompok yang lebih kecil? / Satu, Dua, Tiga, Empat | *Berapa* needs no doubled noun. Each answer is a bare number word. |
| Rhythm | Count "1-2" for each half note. | Hitung “1-2” pada setiap not setengah. | *Not setengah* is what every Indonesian method teaches. |
| Guide, about | Beethoven wrote this tune for the last movement of his Ninth Symphony, first played in Vienna in 1824. | Beethoven menulis melodi ini untuk bagian terakhir Simfoni Kesembilan miliknya, yang pertama kali dimainkan di Wina pada 1824. | *Wina* is the Indonesian name, and *bagian* is the concert word. |
| Guide, tricky bar | Look before you jump. | Lihat dulu sebelum melompat. | Short and imperative, as the English is. |
| Mode name | Free jam | Main sesukamu | An invitation, as the course's free play is. *Jam bebas* reads as a clock. |

## 12. Sources

- **Microsoft Indonesian Localization Style Guide,** `aka.ms/indonesian-styleguide`. It settled the
  imperatives, the dropped *silakan*, the error forms, the quotes, the en dash, the serial comma, the
  separators and the loanwords *file*, *folder* and *unduh*. Its *Anda* this guide does not follow, as § 2
  says.
- **Android's Indonesian strings,** `values-in` of the framework, Settings, SystemUI and SettingsLib.
  They settled the labels: *Batal*, *Lanjutkan*, *Lewati*, *Pulihkan*, *Putar*, *Jeda*, *Layar penuh*,
  *Bisukan*, *Memuat…* and the sentence case. They also showed *kamu* in a text for young users.
- **CLDR,** through `Intl`. It settled the separators, the percent sign and the one plural form.
- **Indonesian Wikipedia's music articles,** each named in the glossary. They settled most music terms.
- **edupoint.id, dutanada.com and Gramedia's education blog.** They are the teaching sources for the
  staff, the clefs, the note values, the time signature, the key signature and the intervals.
- **Indonesian wikiHow.** It is the only source for *membaca cepat* and the sustain pedal, and it is
  translated from English.
- **No Indonesian piano method was read.** Purwacaraka, Yamaha Music Indonesia and the school books did
  not load.

## Open

- No Indonesian piano method was reached. A teacher's read would confirm *not patokan*, *hitungan awal*,
  *geser*, *loncatan kecil*, *ibu jari menyusup* and *paranada ganda*.
- *Garis ikat*, *tanda ulang*, *akhiran pertama*, *birama gantung*, *akor terurai* and *posisi dasar* have
  no source that was read.
- *Lencana*, *beruntun*, *target harian*, *trek* and *pustaka lagu* have no source. Each is the everyday
  word, and the site uses it.
- *Pengaturan* has MS alone, against Android's *Setelan*.
- Indonesian titles exist for some songs, such as *Malam Kudus*. Whether the library shows them is a
  feature, not a translation.
