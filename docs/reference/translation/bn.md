# Bengali: the style guide and glossary

Every writer and reviewer of a Bengali text reads this file whole first. The method is
[translation.md](../../agent/translation.md), and this file adds only what is Bengali. The machine's half
of these rules is the `bn` entry of `src/i18n/typography.ts`.

## 1. Variant and readers

- **The variety is standard written Bengali, the *chalit* form.** Pages carry `lang` `bn`, and `Intl`
  formats for `bn-BD`. The locale table's row says so, and this guide confirms it.
- **`bn-BD` is kept,** since most readers live in Bangladesh. CLDR gives `bn-IN` the same digits, grouping
  and plural forms, so a reader in West Bengal sees the same numbers.
- **The spelling is Bangla Academy's,** which the West Bengal academy shares for the words this site uses.
  A loanword takes the short `ি`: `কিবোর্ড`, `ডিভাইস`, `তৈরি`, `দেরি`. § 9 lists the spellings the rules test checks.
- **The register is the everyday one of Bengali apps.** Microsoft's Bangla (India) guide asks for warm,
  crisp and conversational text, with the words people say.
- **The readers are beginners of every age** in Bangladesh and West Bengal, who learn piano alone in a
  browser. Many know the English words of music, but not their Sanskrit coinages.
- **A common English loanword is written in Bengali script** where Bengali apps use it: `নোট`, `কর্ড`,
  `স্কেল`, `ফাইল`, `সেটিংস`. Android's Bengali strings write these, and Microsoft's guide allows them.
- **A word used in one country only is avoided.** The text needs neither `পানি` nor `জল`, and a greeting
  is `হ্যালো` or `স্বাগতম`, never `নমস্কার` or `আসসালামু আলাইকুম`.
- **A heavy Sanskritized coinage is never used.**

| Avoid | Write | Why |
|---|---|---|
| নির্বাচন করুন | বেছে নিন | Android; Microsoft's form reads formal |
| প্রচেষ্টা করুন | চেষ্টা করুন | Microsoft marks "attempt" as a word to replace |
| স্বরসমষ্টি | কর্ড | Bengali Wikipedia's *সঙ্গীত* uses `কর্ড` in running text |
| স্বরগ্রাম | স্কেল | Bengali Wikipedia uses `স্কেল` in running text |
| অষ্টক, সপ্তক for an octave | অক্টেভ | `সপ্তক` names the register of Indian music's seven svaras |
| মাত্রা for a beat or a bar | বিট, বার | `মাত্রা` is the beat of Indian *tala* |
| স্বর for a note | নোট | `স্বর` reads as a sargam svara, or a vowel |
| স্বরপরম্পরা for an arpeggio | আর্পেজিও | Bengali Wikipedia's coinage, which no learner says |
| আস্তে for soft | হালকা করে | `আস্তে` also means slowly |
| ব্যবহারকারী for the learner | আপনি | Microsoft § *Address* calls the third person formal and cold |

## 2. Address

- **The learner is `আপনি`, never `তুমি` or `তুই`.** Microsoft's guide uses the formal pronoun alone, and
  every Android string does too.
- **An instruction is the polite imperative in `-ুন` or `-ন`:** `চাপুন`, `বাজান`, `শুনুন`, `বেছে নিন`,
  `রাখুন`. Microsoft and Android both use it. The forms `বাজাও` and `চাপো` are never used.
- **A button or a menu item is the same imperative, or a short noun:** `খুলুন`, `চালিয়ে যান`, `সেটিংস`.
- **A setting's name is a noun phrase,** and its help text is a plain sentence about what it does.
- **A question to the learner is a plain question with `কি`:** `আপনি কি এই পাঠটি ছেড়ে যেতে চান?`
- **An error names what failed, never the learner's mistake:** `সেভ করা যায়নি।` Microsoft's guide writes
  `পারেনি`, and the impersonal `যায়নি` gives the browser no will.
- **One verb serves a button, a piano key and a computer key: `চাপুন`.** It holds for a tap, a click and a
  press alike. Picking one item from several is `বেছে নিন`.
- **`দয়া করে` is rare.** The polite imperative is polite already. A teacher's warmth sits in the wording,
  with `চলুন` or `এবার` where it fits: `চলুন, আবার শুনি।`
- **`আপনার` stands only where the owner is not plain.** Microsoft's guide asks for fewer possessives:
  `ডান হাত C পজিশনে রাখুন।`, not `আপনার ডান হাত`.

## 3. Voice

Warm, plain and short, as a good teacher speaks. Prefer the everyday word: `চেষ্টা` over `প্রচেষ্টা`,
`সাহায্য` over `সহায়তা`, `শুরু করুন` over `আরম্ভ করুন`, `বদলান` over `পরিবর্তন করুন` in speech-like texts.

| English | Bengali | Why it reads warm and plain |
|---|---|---|
| Hi, I'm your piano teacher. Shall we play? | হ্যালো! আমি আপনাকে পিয়ানো শেখাব। চলুন, বাজানো শুরু করি? | `চলুন` invites, as the English does. The verb `শেখাব` names no gender, where `শিক্ষক` would. |
| Not quite. Try again. | একটুর জন্য হলো না। আবার চেষ্টা করুন। | `একটুর জন্য` softens the miss. `আবার চেষ্টা করুন` is Android's own form. |
| Every lesson takes you further. Keep going! | প্রতিটি পাঠ আপনাকে আরও এগিয়ে নেয়। এভাবেই চালিয়ে যান! | The lesson is the subject, and `চালিয়ে যান` is Android's *Continue*. |

"Well done." is `খুব ভালো হয়েছে।` in every lesson, with the dari of the calm English.

## 4. Gender

A Bengali verb has no gender, and an adjective rarely shows one. Microsoft's guide says so, and asks for
text that names no gender. The risk is a noun that describes a person.

- **No noun for the learner names a gender or an age:** never `ছাত্র`, `ছাত্রী`, `ভাই`, `আপু`, `দাদা`,
  `দিদি` or `খোকা`. The learner is `আপনি`.
- **The teacher has no noun either.** It speaks of what it does: `আমি আপনাকে পিয়ানো শেখাব।` Where a noun
  cannot be avoided, it is `শিক্ষক`, the common form, never `শিক্ষিকা`.
- **A word that is male or female in Sanskrit takes its common form:** `শিল্পী`, `বাদক`, `সুরকার`.
- **A composer named in a guide keeps the pronoun their sources use,** since a guide states facts. Bengali's
  `তিনি` serves every person.

## 5. Terms

One term per idea, in every file. Sources: WP is Bengali Wikipedia, by article title. MB is Music Blocks'
Bengali strings, which are mostly machine-made and never count alone. MS is Microsoft's Bangla (India)
style guide. AN is Android's `values-bn` strings. A row marked *unsourced* rests on common usage alone,
and *Open* lists the weak rows.

The term list is the English column of the newest guide, [id.md](id.md). The English texts have not
changed since it was made, apart from one setting's wording.

### The piano glossary

| English | Bengali | Sources |
|---|---|---|
| piano | পিয়ানো | WP *পিয়ানো*; WP *সঙ্গীত*; MB |
| key (of the piano) | চাবি: `সাদা চাবি`, `কালো চাবি` | WP *পিয়ানো*; MB |
| keyboard (the piano's, or a MIDI one) | কিবোর্ড: `MIDI কিবোর্ড` | WP *পিয়ানো*. WP *কীবোর্ড* writes `কী`, which § 1's spelling rule replaces. |
| note (a sound, or a written sign) | নোট; `নোটগুলো` where a plural shows | WP *সঙ্গীত*; MB |
| a sound; pitch | আওয়াজ; পিচ | MB *পিচ*. WP's `স্বরতীক্ষ্ণতা` is a coinage. |
| high, low (pitch) | উঁচু, নিচু: `উঁচু পিচ` | everyday words. A note by its place is `উপরের`, `নিচের`, as § 7 says. |
| middle C | মধ্য C | WP *পিয়ানো* writes `মধ্যম C`. `মধ্যম` is also sargam's ম, so this guide drops its `ম`. |
| octave | অক্টেভ | WP *হারমোনিয়াম*, one source. WP's `অষ্টক` and `সপ্তক` name Indian registers. |
| half step, whole step | সেমিটোন, টোন | unsourced, the English terms |
| sharp, flat, natural (the signs) | শার্প, ফ্ল্যাট, ন্যাচারাল | WP *স্বরমাধুর্য* writes `এ-ফ্ল্যাট`; the rest unsourced. MB's `তীক্ষ্ণ` and `সমতল` are literal. |
| accidental | শার্প বা ফ্ল্যাটের চিহ্ন | the course's own phrase, unsourced |
| staff | স্টাফ | WP *স্বরলিপি*; WP *স্বরমাধুর্য*; WP *সঙ্গীত* |
| grand staff | গ্র্যান্ড স্টাফ | follows `স্টাফ` |
| treble clef, bass clef | ট্রেবল ক্লেফ, বেস ক্লেফ | unsourced, the English terms. MB's `তিনগুণ` is wrong. |
| ledger line | লেজার লাইন | unsourced, the English term |
| line, space (of the staff) | লাইন, ফাঁক | everyday words, unsourced |
| landmark (a note read at a glance) | চেনা নোট | the course's own term, defined where it first appears |
| bar | বার: `বার 3`, `3 নম্বর বার`, `চারটি বার` | WP *স্বরমাধুর্য*, one source. § 8 keeps it apart from `দুবার`, "twice". |
| bar line | বার লাইন | follows `বার` |
| time signature | টাইম সিগনেচার | unsourced, the English term |
| beat (one count of a bar) | বিট: `প্রতি বারে তিনটি বিট`, `আধা বিট` | MB *প্রতি মিনিটে বীট*, spelled here with `ি` |
| hold for two beats; through the next beat | দুই বিট ধরে রাখুন; পরের বিট শেষ হওয়া পর্যন্ত | the course's own terms |
| the beat (the steady pulse) | বিট | as above |
| three-four time | 3/4 টাইম | follows `টাইম সিগনেচার` |
| count-in | শুরুর গোনা | everyday words, unsourced |
| rhythm | ছন্দ | WP *ছন্দ*; WP *তাল*; MB |
| tempo; speed | টেম্পো; গতি | AN *গতি*; MB *গতি*. `লয়` names Indian music's tempo. |
| metronome | মেট্রোনোম | unsourced, the English term |
| whole, half, quarter note | হোল নোট, হাফ নোট, কোয়ার্টার নোট | MB *কোয়ার্টার নোট*, one source |
| eighth, sixteenth note | এইটথ নোট, সিক্সটিন্থ নোট | follows the row above |
| thirty-second, sixty-fourth note | থার্টি-সেকেন্ড নোট, সিক্সটি-ফোর্থ নোট | follows the row above |
| dotted | ডটেড: `ডটেড হাফ নোট` | follows the row above, unsourced |
| rest; quarter rest | রেস্ট; কোয়ার্টার রেস্ট | unsourced. A hand that rests `বিশ্রাম নেয়`, as MB writes. |
| tie | টাই | unsourced, the English term |
| slur | স্লার | unsourced, the English term |
| repeat sign | রিপিট চিহ্ন | unsourced |
| first, second ending | প্রথম সমাপ্তি, দ্বিতীয় সমাপ্তি | unsourced |
| first, second, last time through | প্রথমবার, দ্বিতীয়বার, শেষবার | everyday words |
| pickup, upbeat | পিকআপ: `পিকআপ নোট` | unsourced, the English term |
| syncopation | সিনকোপেশন | unsourced, the English term |
| scale | স্কেল | WP *পিয়ানো*; WP *সঙ্গীত*; MB |
| major, minor | মেজর, মাইনর | WP *সঙ্গীত*; WP *স্বরগ্রাম* |
| key (of a song) | স্কেল: `গানটি G মেজর স্কেলে` | Bengali singers say it so, unsourced. WP *সঙ্গীত* writes `কী`, the computer's key. |
| key signature | কী সিগনেচার | unsourced, the English term of the score |
| scale degree | ডিগ্রি: `পঞ্চম ডিগ্রি` | unsourced. `ধাপ` stays a lesson's step. |
| chord | কর্ড | WP *কর্ড* (title); WP *সঙ্গীত* |
| triad; major, minor triad | ট্রায়াড; মেজর ট্রায়াড, মাইনর ট্রায়াড | WP *কর্ড* writes `ত্রিস্বর`, which this guide does not follow |
| root | রুট নোট | unsourced, the English term |
| inversion; root position | ইনভার্শন; রুট পজিশন | unsourced, the English terms |
| G seventh (chord) | G7 কর্ড | follows `কর্ড` |
| broken chord | ভাঙা কর্ড | WP *কর্ড* writes `ভগ্ন স্বরসমষ্টি`; this is its everyday form |
| arpeggio | আর্পেজিও | WP *কর্ড* names it in English |
| Alberti bass, waltz bass, stride bass | আলবের্তি বেস, ওয়াল্টজ বেস, স্ট্রাইড বেস | the guides' own terms |
| bass note | বেস নোট | follows `বেস ক্লেফ` |
| interval | ইন্টারভাল | unsourced, the English term |
| third, fourth, fifth, sixth, seventh | থার্ড, ফোর্থ, ফিফথ, সিক্সথ, সেভেন্থ | MB *মেজর তৃতীয়* is literal; the English names as learners say them |
| major third, minor third | মেজর থার্ড, মাইনর থার্ড | follows the rows above |
| open fifth | ওপেন ফিফথ | follows the rows above |
| step, skip, leap (between keys) | পাশের চাবিতে যাওয়া, একটি চাবি বাদ দিয়ে যাওয়া, লাফ | everyday words; a lesson defines each |
| tune, melody | সুর | WP *সঙ্গীত*; WP *স্বরমাধুর্য* |
| phrase | সুরের অংশ | everyday words, unsourced |
| figure (a short musical idea) | `প্যাটার্ন` when it repeats, else `সুরের টুকরো` | everyday words |
| call and answer (phrases) | প্রশ্ন-উত্তর | everyday words, unsourced |
| pattern (of notes) | প্যাটার্ন | everyday word |
| verse, chorus | স্তবক, কোরাস | everyday words, unsourced |
| coda | কোডা | unsourced, the Italian term |
| dynamics | আওয়াজের জোর | everyday words, unsourced |
| loud, soft | জোরে, হালকা করে | everyday words. `আস্তে` also means slowly, so it is never used. |
| legato, staccato | লেগাটো, স্ট্যাকাটো | MB *স্ট্যাকাটো*, one source |
| crescendo, diminuendo | ক্রেসেন্ডো, ডিমিনুয়েন্ডো | unsourced. MB's `ক্রিসসেন্ডো` is misspelled. |
| hairpin | হেয়ারপিন চিহ্ন | unsourced |
| mark (p, f, rit.) | চিহ্ন | everyday word |
| fermata | ফার্মাটা | unsourced, the Italian term |
| hold (a fermata's note) | টেনে রাখা: `নোটটি একটু টেনে রাখুন` | everyday words. `থামা` reads as stop. |
| turn (ornament); ornament | টার্ন; অলংকার | unsourced |
| mordent | মরডেন্ট | unsourced, the Italian term |
| double notes | জোড়া নোট | the guides' own term |
| a run (fast notes) | দ্রুত নোটের সারি | the guides' own term |
| octave bass | অক্টেভ বেস | the guides' own term |
| pedal | প্যাডেল | WP *সঙ্গীত*, one source |
| sustain pedal | সাসটেন প্যাডেল; `ডান প্যাডেল` in a lesson | unsourced |
| soft pedal | সফট প্যাডেল; `বাঁ প্যাডেল` in a lesson | follows the row above |
| press a pedal, lift it | প্যাডেল চাপুন, প্যাডেল ছাড়ুন | the plain verbs of a foot |
| fingering | আঙুল চালানোর নিয়ম; `ফিঙ্গারিং` in a short label | everyday words, unsourced |
| finger numbers | 1 বুড়ো আঙুল, 2 তর্জনী, 3 মধ্যমা, 4 অনামিকা, 5 কড়ে আঙুল | WP titles for `তর্জনী` and `অনামিকা`. The others are the everyday names. |
| right hand, left hand, both hands | ডান হাত, বাঁ হাত, দুই হাত: `দুই হাতে` | everyday words. `বাম` is formal. |
| hand position; C position | হাতের পজিশন; C পজিশন | the course's own terms |
| thumb under, finger over | বুড়ো আঙুল নিচ দিয়ে নেওয়া, আঙুল উপর দিয়ে নেওয়া | the course's own terms |
| a shape the hand holds; the octave shape | হাতের আকার; অক্টেভের আকার | the guides' own terms |
| a stretch between two fingers | দুই আঙুলের ফাঁক | the guides' own term |
| even notes; play them evenly | সমান নোট; সমানভাবে বাজান | the guides' own terms |
| three times as long | তিন গুণ লম্বা | everyday words |
| a pair (two notes struck together) | নোটের জোড়া | the guides' own term |
| a rub (a soft dissonance) | ঘষা লাগা আওয়াজ | the guides' own term |
| bounce (the wrist, a finger) | লাফানো: `কবজিকে লাফাতে দিন` | everyday word |
| lift (a finger, a key) | তোলা | everyday word |
| land (on a key, a beat) | গিয়ে পড়া: `C-তে গিয়ে পড়ুন` | everyday words |
| stretch, spread (the hand) | ছড়ানো | everyday word |
| roll (a chord) | কর্ডের নোটগুলো নিচ থেকে উপরে একে একে বাজানো | the guides' own term |
| wrist; a loose wrist | কবজি; আলগা কবজি | everyday words |
| let ring | আওয়াজ বাজতে দিন | everyday words |
| fingertips | আঙুলের ডগা | everyday words |
| by feel | ছুঁয়ে ছুঁয়ে | everyday words |
| sight-reading | দেখে দেখে বাজানো | everyday words, unsourced |
| ear training | শুনে চেনার অনুশীলন | everyday words, unsourced |
| play (the piano, a key, a note) | বাজানো | WP *পিয়ানো*; see *Which "play" is which* |
| practise | অনুশীলন করা | everyday word, unsourced |
| song; piece | গান; রচনা | everyday words |
| sheet music | স্বরলিপি | WP *স্বরলিপি*; WP *সঙ্গীত*. WP's `স্টাফ স্বরলিপি` names the Western kind. |
| transpose | ট্রান্সপোজ করা | unsourced, the English term. MB's `স্থানান্তর` reads as moving house. |
| stem, note head | স্টেম, নোট হেড | unsourced, the English terms |
| piano bench | পিয়ানোর বেঞ্চ | everyday words |
| at full speed; at three-quarter speed | পুরো গতিতে; তিন-চতুর্থাংশ গতিতে | the guides' own terms, after `গতি` |
| waltz | ওয়াল্টজ | unsourced, the English term |
| carol; sea shanty; jig | ক্যারল; নাবিকদের গান; জিগ | unsourced |
| suite, symphony, sonata, concerto | সুইট, সিম্ফনি, সোনাটা, কনচের্তো | WP *সিম্ফনি* (title); WP *সঙ্গীত* for `সোনাটা` and `কনচের্তো` |
| movement, overture, variation | মুভমেন্ট, ওভারচার, ভ্যারিয়েশন | unsourced. WP's `বৈচিত্র` reads as variety. |
| march, hymn, lullaby, nocturne | মার্চ, স্তোত্র, ঘুমপাড়ানি গান, নকটার্ন | WP titles for `স্তোত্র` and `ঘুমপাড়ানি গান` |
| organ (the church's) | অর্গান | WP *অর্গান* |
| aria, tone poem, hornpipe, galop | আরিয়া, টোন পোয়েম, হর্নপাইপ, গ্যালপ | unsourced, the European terms |
| conductor, bandleader | কন্ডাক্টর | everyday word |
| film score | সিনেমার সংগীত | everyday words |
| enharmonic | এনহারমোনিক | unsourced, the English term |
| attack, decay, sustain, release | অ্যাটাক, ডিকে, সাসটেন, রিলিজ | the terms of synthesizers |

### The interface glossary

| English | Bengali | Sources |
|---|---|---|
| Settings | সেটিংস | AN |
| Songs (the library's panel); library | গান; গানের তালিকা | the app's own terms |
| Open, Close, Cancel | খুলুন, বন্ধ করুন, বাতিল করুন | AN |
| Back, Next, Previous | ফিরে যান, পরবর্তী, পূর্ববর্তী | AN |
| Continue | চালিয়ে যান | AN |
| OK, Done | ঠিক আছে, সম্পন্ন | AN |
| Skip | এড়িয়ে যান | AN |
| Reset | রিসেট করুন | AN |
| Save | সেভ করুন | AN |
| Delete; Remove | মুছুন; সরান | AN. The two acts differ here, as they do in AN. |
| Restore (a backup) | ফিরিয়ে আনুন | everyday words. AN's `পুনরুদ্ধার করুন` reads formal. |
| Clear (a field, a key binding) | খালি করুন | everyday words. `মুছুন` is taken by Delete. |
| Search | খুঁজুন | everyday word. AN's `সার্চ` is the keyboard's key. |
| Play, Pause, Stop (playback) | চালান, পজ করুন, থামান | AN *চালান*, *থামান*. AN's `বিরাম দিন` reads formal. |
| Loop (button); a loop | লুপ; লুপে চালান | the word of music players, unsourced |
| Speed | গতি | AN |
| Volume, Mute | ভলিউম, মিউট করুন | AN |
| Fullscreen | ফুল স্ক্রিন | AN |
| Theme; Light, Dark, Like the system | থিম; লাইট, ডার্ক, সিস্টেমের মতো | AN *ডার্ক থিম*; `সিস্টেমের মতো` is unsourced |
| Language | ভাষা | AN |
| computer keyboard; computer key | কম্পিউটারের কিবোর্ড; কী: `Esc কী চাপুন` | AN. A piano's key is `চাবি`, so the two never blur. |
| touch screen | টাচস্ক্রিন | AN |
| device; connect, disconnect | ডিভাইস; কানেক্ট করুন, ডিসকানেক্ট করুন | AN |
| folder; file | ফোল্ডার; ফাইল | AN |
| browser | ব্রাউজার | AN |
| offline | অফলাইন | everyday word; AN has none |
| Install, Update | ইনস্টল করুন, আপডেট করুন | AN |
| app | অ্যাপ | AN |
| Help, Tip | সাহায্য, টিপস | AN *সাহায্য*; `টিপস` is unsourced |
| Try again | আবার চেষ্টা করুন | AN |
| tap, click or press a control | চাপুন | AN *আলতো চাপুন*, shortened so it fits every input |
| press a computer key; press a piano key | কী চাপুন; চাবি চাপুন | as above |
| choose (one of several) | বেছে নিন | AN |
| find, look for | খুঁজে নিন, খুঁজুন | everyday words |
| a page of the site; a printed page | পেজ; পাতা | everyday words |
| lesson, step, world | পাঠ, ধাপ, জগৎ | the course's own terms |
| quiz; demo | কুইজ; ডেমো | everyday words |
| boss (a world's last lesson) | বড় চ্যালেঞ্জ | the course's own term |
| skip test | এগিয়ে যাওয়ার পরীক্ষা | the course's own term |
| level; Level up! | লেভেল; লেভেল আপ! | AN *লেভেল*; the word of games |
| XP | XP, a kept word | the word of games |
| badge, achievement | ব্যাজ | the word of games, unsourced |
| streak | টানা দিন: `টানা ৩ দিন` | everyday words, unsourced |
| daily goal | দৈনিক লক্ষ্য | everyday words, unsourced |
| score; points | স্কোর; পয়েন্ট | everyday words |
| stars | তারা | everyday word |
| take (one recorded play) | চেষ্টা | everyday word |
| Favourites | পছন্দের গান | AN *পছন্দের* |
| track (of a MIDI file) | ট্র্যাক | AN |
| progress | অগ্রগতি | everyday word, unsourced |
| backup; back up | ব্যাকআপ; ব্যাকআপ নিন | AN |
| guide (a song's) | অনুশীলনের গাইড | the app's own term |
| a setting; options | সেটিং; বিকল্প | AN |
| the player (of songs) | প্লেয়ার | everyday word |
| Beginner, Easy, Medium, Hard, Advanced, Expert | প্রাথমিক, সহজ, মাঝারি, কঠিন, অভিজ্ঞ, দক্ষ | the usual ladder. Each is an adjective, so none names a person's gender. |
| Easy, Normal, Hard (a song) | সহজ, সাধারণ, কঠিন | the same ladder |
| common, rare, epic, legendary (a version) | কমন, রেয়ার, এপিক, লেজেন্ডারি | the words of games |
| Perfect, Great, Good | পারফেক্ট, দারুণ, ভালো | the words of rhythm games |
| Wrong note, Too short, Too long, Late | ভুল নোট, খুব ছোট, খুব লম্বা, দেরিতে | everyday words |
| free play; pitch practice | মন খুলে বাজান; সুর চেনার অনুশীলন | the course's own terms |
| hotkeys | কিবোর্ড শর্টকাট | AN; MB |
| velocity (of a key) | জোর | the same idea as dynamics |
| lane; timeline | লেন; টাইমলাইন | the player's own terms |
| hit, miss, mistake | ঠিক নোট, ফসকে যাওয়া নোট, ভুল নোট | everyday words |
| add; remove | যোগ করুন; সরান | AN |
| open source | ওপেন সোর্স | everyday words |
| download | ডাউনলোড করুন | MS lists it among the loan verbs |
| error (a title); a failure in a message | সমস্যা; `… করা যায়নি` | MS § *Error messages* for the failure. AN's `ত্রুটি` reads like a log. |
| loading | লোড হচ্ছে… | AN |
| Expert (the bar's key for the expert tools); expert tools | আরও টুল; উন্নত টুল | `দক্ষ` stays the level |
| view; the scene (the 3D piano and its notes) | দৃশ্য; 3D দৃশ্য | everyday words |
| Play modes | বাজানোর মোড | the site's own term |
| sound set; background track | সাউন্ড সেট; সঙ্গত | everyday words |
| hit line; hit window | হিট লাইন; চাপার সময়সীমা | the player's own terms |
| loop trainer; a pass of a loop | লুপ অনুশীলন; একটি পাক | the player's own terms |
| reverb; equaliser; detune | রিভার্ব; ইকুয়ালাইজার; সূক্ষ্ম টিউনিং | the terms of audio apps |
| particles; markers; labels | কণা; চিহ্ন; লেবেল | everyday words |
| colour; glow; opacity | রং; আভা; গাঢ়তা | everyday words |
| size; shape | আকার; গড়ন | `আকার` means size. A hand's shape is `হাতের আকার`, as the piano glossary says. |
| tag (search); round (a game) | ট্যাগ; রাউন্ড | everyday words |
| Preview (a song) | শুনে দেখুন; শোনা থামান | everyday words |
| default | ডিফল্ট | AN |
| custom | কাস্টম | everyday word |
| input; output (MIDI) | ইনপুট; আউটপুট | everyday words |
| MIDI channel | MIDI চ্যানেল | everyday word |
| combo; multiplier; accuracy | কম্বো; গুণক; নির্ভুলতা | the words of rhythm games |
| frame; frames per second | ফ্রেম; `প্রতি সেকেন্ডে ফ্রেম` | the word of games |
| difficulty; length (of a song) | কঠিনতা; দৈর্ঘ্য | everyday words |
| record; export; filter | রেকর্ড করুন; এক্সপোর্ট করুন; ফিল্টার | AN *রেকর্ড*, *ফিল্টার* |
| camera; zoom; side view | ক্যামেরা; জুম; পাশ থেকে দৃশ্য | everyday words |
| lyrics; bar numbers | গানের কথা; বার নম্বর | everyday words; follows `বার` |
| guided course | ধাপে ধাপে কোর্স | the app's own term |
| top bar; control bar | উপরের বার; কন্ট্রোল বার | the player's own terms |
| click (of the metronome) | টিক | everyday word |
| low, high band (of the equaliser) | লো, হাই | the terms of audio apps; never `বেস`, which names a note |
| leave (a lesson, a page) | বেরিয়ে যান | everyday words. `এড়িয়ে যান` is Skip. |
| skill (a song's technique tag) | কৌশল | everyday word |
| folk tune; counter-melody | লোকসুর; পাশাপাশি চলা আরেকটি সুর | follow `সুর` |
| in key widths (a unit); per second | চাবির প্রস্থে; প্রতি সেকেন্ডে চাবির প্রস্থে | the player's own unit |
| Sponsor (the page) | সমর্থন করুন; `GitHub-এ সমর্থন করুন` | `স্পনসর` reads as a company's |
| setup (the first visit) | প্রস্তুতি | everyday word |
| a section named by an imperative, mid-sentence | `“শুধু পিয়ানো বাজান” অংশে` | the quotes keep the name from reading as a verb |
| On, Off, Auto; when off | চালু, বন্ধ, অটো; বন্ধ থাকলে | AN |
| site; data; sync | সাইট; ডেটা; সিঙ্ক | AN |
| button; dialog; pointer; cursor | বোতাম; ডায়ালগ; পয়েন্টার; কার্সর | AN |
| Apply; Reload; Undo | প্রয়োগ করুন; আবার লোড করুন; ফিরিয়ে নিন | AN. `পূর্বাবস্থায় ফেরান` reads formal. |
| background (a colour, a page's) | পটভূমি | everyday word. `ব্যাকগ্রাউন্ড` would blur with the background track. |
| free (no cost) | বিনামূল্যে | everyday word. `ফ্রি` reads as slang. |
| About; Legal notice; Privacy policy | পরিচিতি; আইনি তথ্য; গোপনীয়তা নীতি | the usual site labels |
| the course's map | ম্যাপ | the word of games. `মানচিত্র` reads like geography. |
| Repeat; Repeat all | রিপিট; সব রিপিট | the word of music players, kept apart from `লুপ` |
| arrangement; harmony | অ্যারেঞ্জমেন্ট; হারমোনি | the words musicians use |
| Classical, Baroque, Romantic, Impressionist, Contemporary | ক্লাসিক্যাল, বারোক, রোমান্টিক, ইমপ্রেশনিস্ট, সমকালীন | the loanwords Bengali writes |
| Ragtime; Christmas | র‍্যাগটাইম; বড়দিন | `রাগ…` alone would read as a raga |
| effects; flare; sparks; wave line | ইফেক্ট; ঝলক; ফুলকি; ঢেউ রেখা | everyday words |
| falling notes; a strip or band | নেমে আসা নোট; পট্টি | `বার` stays the musical bar |
| layout; timing; envelope | লেআউট; টাইমিং; এনভেলপ | the words of apps and synthesizers |
| a seconds unit in a label | সেকেন্ড, written in full | an abbreviation needs an ASCII period |
| a percent unit in a label | শতাংশ: `(চাবির শতাংশ)` | a `%` after a space breaks the marks |
| More tools (beside the Expert key) | অন্যান্য টুল | `আরও টুল` is the Expert key |

### Which "play" is which

- **A key, a note, a song on the piano:** `বাজানো`. `C আর E একসঙ্গে বাজান।`
- **Starting playback of a song:** `চালানো`. The transport's *Play* is `চালান`.
- **A game or a mode:** `গেম`, and `গেম মোড` for *Game mode*.
- **A lesson's "Play again" that replays a demo:** `আবার শুনুন`, since the learner listens.
- **"Your turn":** `এবার আপনার পালা।`
- **A control is never `বাজান`.** `“চালান” চাপুন`, never `চালান বাজান`.

### A guide's recurring steps

The song guides repeat these steps word for word. Each English step has one Bengali text in every guide.
A step that only differs in its bars or its section follows the nearest row's shape.

| English | Bengali |
|---|---|
| Play the whole song with both hands at three-quarter speed. | দুই হাতে পুরো গানটি তিন-চতুর্থাংশ গতিতে বাজান। |
| Join the hands on the whole song at three-quarter speed. | দুই হাতে পুরো গানটি তিন-চতুর্থাংশ গতিতে বাজান। |
| Play the whole song with both hands at full speed. | দুই হাতে পুরো গানটি পুরো গতিতে বাজান। |
| Play the whole song with both hands, a little slower than written. | দুই হাতে পুরো গানটি লেখা গতির চেয়ে একটু ধীরে বাজান। |
| Now play it at full speed. | এবার পুরো গতিতে বাজান। |
| Now play it at full speed, with the pedal. | এবার প্যাডেলসহ পুরো গতিতে বাজান। |
| Now play it at full speed, and let the last chord ring. | এবার পুরো গতিতে বাজান, আর শেষ কর্ডের আওয়াজ বাজতে দিন। |
| Join the hands on the first eight bars, slowly. | প্রথম আটটি বার দুই হাতে ধীরে ধীরে বাজান। |
| Put both hands together on the whole song, slowly. | দুই হাতে পুরো গানটি ধীরে ধীরে বাজান। |
| Put both hands together, slowly. | দুই হাতে ধীরে ধীরে বাজান। |
| Join the hands on the first verse, slowly. | প্রথম স্তবকটি দুই হাতে ধীরে ধীরে বাজান। |
| Join the hands on the first time through, slowly. | প্রথমবারের অংশটি দুই হাতে ধীরে ধীরে বাজান। |
| Join the hands on bars 9 to 16, slowly. | 9 থেকে 16 নম্বর বার দুই হাতে ধীরে ধীরে বাজান। |
| Play the first four bars with the right hand alone, and let the song wait for each note. | প্রথম চারটি বার শুধু ডান হাতে বাজান, আর প্রতিটি নোটের জন্য গানটিকে অপেক্ষা করতে দিন। |
| Play the right hand alone on the first eight bars, and let the song wait for each note. | প্রথম আটটি বার শুধু ডান হাতে বাজান, আর প্রতিটি নোটের জন্য গানটিকে অপেক্ষা করতে দিন। |
| Play bars 1 to 4 with the right hand alone, and let the song wait for each note. | 1 থেকে 4 নম্বর বার শুধু ডান হাতে বাজান, আর প্রতিটি নোটের জন্য গানটিকে অপেক্ষা করতে দিন। |
| Play the right hand alone, slowly, and let the song wait for each note. | শুধু ডান হাতে ধীরে ধীরে বাজান, আর প্রতিটি নোটের জন্য গানটিকে অপেক্ষা করতে দিন। |
| Play the left hand alone, and press the notes of each chord together. | শুধু বাঁ হাতে বাজান, আর প্রতিটি কর্ডের নোটগুলো একসঙ্গে চাপুন। |
| Now the left hand alone. It holds one shape for each bar. | এবার শুধু বাঁ হাত। প্রতিটি বারে হাত একই আকারে থাকে। |
| Now the left hand alone. It holds one shape for half a bar or a whole bar. | এবার শুধু বাঁ হাত। আধা বার বা একটি পুরো বার ধরে হাত একই আকারে থাকে। |
| Now the left hand alone. It keeps one shape and changes it at most once a bar. | এবার শুধু বাঁ হাত। হাত একই আকারে থাকে, আর প্রতিটি বারে বড়জোর একবার আকার বদলায়। |
| Play the Alberti bass alone until it rolls by itself: low, high, middle, high. | আলবের্তি বেস আলাদা করে বাজান, যতক্ষণ না সেটি নিজে থেকে গড়িয়ে চলে: নিচের, উপরের, মাঝের, উপরের। |
| Keep the Alberti bass soft, so the tune sings above it. | আলবের্তি বেস হালকা করে বাজান, যাতে সুরটি তার উপরে গেয়ে ওঠে। |
| Play the right hand's thirds and sixths alone, and press both notes of each pair as one. | ডান হাতের থার্ড আর সিক্সথ আলাদা করে বাজান, আর প্রতিটি জোড়ার দুটি নোট একসঙ্গে চাপুন। |
| The tune is the top note of each pair, so let the upper finger lead. | প্রতিটি জোড়ার উপরের নোটটিই সুর, তাই উপরের আঙুলকে পথ দেখাতে দিন। |
| Play the right hand's chords alone, and let the top finger sing the tune. | ডান হাতের কর্ডগুলো আলাদা করে বাজান, আর সবচেয়ে উপরের আঙুলকে সুরটি গাইতে দিন। |
| Play the top note of each chord a little louder than the others. | প্রতিটি কর্ডের সবচেয়ে উপরের নোটটি বাকিগুলোর চেয়ে একটু জোরে বাজান। |
| Play the right hand's octaves alone, with the thumb and finger 5 kept in one shape. | ডান হাতের অক্টেভগুলো আলাদা করে বাজান, বুড়ো আঙুল আর 5 নম্বর আঙুল একই আকারে রেখে। |
| Play the stride bass alone: jump down for the octave, then back up for the chord. | স্ট্রাইড বেস আলাদা করে বাজান: অক্টেভের জন্য নিচে লাফ দিন, তারপর কর্ডের জন্য আবার উপরে আসুন। |
| Change the pedal on each new bass note, twice in every bar. | প্রতিটি নতুন বেস নোটে প্যাডেল বদলান, প্রতিটি বারে দুবার। |
| Hold the pedal down for each whole bar, and change it right on the bar line. | প্রতিটি বারের পুরোটা প্যাডেল চেপে রাখুন, আর ঠিক বার লাইনে সেটি বদলান। |
| Up high, the octaves should ring like bells. Keep the wrist loose. | উপরের দিকে অক্টেভগুলো ঘণ্টার মতো বাজবে। কবজি আলগা রাখুন। |

More rules the guides settle:

- **A step that plays one part names the part, then `আলাদা করে`:** `আলবের্তি বেস আলাদা করে বাজান।` A
  hand alone is `শুধু ডান হাতে`.
- **"First time through" is `প্রথমবার`,** and the second and the last time follow it: `দ্বিতীয়বারের অংশটি`.
- **Loud is `জোরে`, never `উঁচু`.** `উঁচু` is kept for pitch.
- **Rhythm syllables are `টা`,** such as `“টা-আ, টা-টা”`.
- **A song is `গানটি` once it is named or plain,** as Bengali marks a known thing with `টি`.

### A lesson's recurring lines

The lessons repeat these lines. Each English line has one Bengali text in every world.

| English | Bengali |
|---|---|
| Well done. | খুব ভালো হয়েছে। |
| Your turn. | এবার আপনার পালা। |
| Your turn, after one bar of count-in. | শুরুর গোনার একটি বার শেষ হলে আপনার পালা। |
| Watch and listen. | দেখুন আর শুনুন। |
| Listen and watch. | শুনুন আর দেখুন। |
| Listen. | শুনুন। |
| Put your right hand in C position. | ডান হাত C পজিশনে রাখুন। |
| Put your right thumb on middle C. | ডান হাতের বুড়ো আঙুল মধ্য C-তে রাখুন। |
| Keep your hand where it is. | হাত যেখানে আছে, সেখানেই রাখুন। |
| Press Start and listen to four clicks first. | “শুরু” চাপুন, আর আগে চারটি টিক শুনুন। |

## 6. Kept words

- **Learn Piano Easy**, **MIDI**, **Web MIDI**, **MusicXML** and **XP** stay as they are.
- **Units and formats:** BPM, FPS, PDF, USB, Hz, kHz, dB, ms, KB, MB, px and 3D. Microsoft's guide keeps
  a value's unit after a space: `১৬ MB`.
- **Technical names:** JavaScript, MIT, and a computer key such as Esc, Q or Z. A Roman numeral of a chord,
  such as V7, stays too.
- **Product and site names:** GitHub, Matomo, Wikipedia, Wikimedia Commons, Mutopia, Chrome, Edge,
  Firefox and Safari. Microsoft's guide keeps product names in Latin letters.
- **The printed marks of a score:** `p`, `mp`, `mf`, `f`, `pp`, `ff`, `rit.`, `rall.`, `cresc.`,
  `decresc.`, `dim.`, `a tempo` and `Ped.`
- **The Italian word behind a mark stays in Latin letters** where the English names it, such as `piano`,
  `forte`, `mezzo-piano` and `ritardando`. In Bengali script, `পিয়ানো` would read as the instrument.
- **A technique's name is a Bengali-script loanword,** as § 5 lists: `লেগাটো`, `স্ট্যাকাটো`, `ক্রেসেন্ডো`.
- **Catalog numbers:** `BWV 1068`, `K. 525`.
- **The note letters and chord symbols,** as § 7 says.
- **A song title stays in Latin letters,** without quotes. A title is data shared by every locale, and
  the library searches it.
- **A Latin word takes a Bengali ending after a hyphen,** as Microsoft's guide joins product names:
  `MIDI-র`, `GitHub-এ`, `C-তে`.
- **A composer with a Bengali Wikipedia article takes its spelling:** `বেটহোফেন`, `মোৎসার্ট`, `বাখ`,
  `শোপাঁ`, `হ্যান্ডেল`, `শুবার্ট`, `ব্রামস`, `দেবুসি`, `ভিভালদি`, `হাইডন` and `চাইকোভস্কি`. A full
  name follows the article's title, such as `ইয়োহান জেবাস্টিয়ান বাখ`.
- **Two titles are simplified,** since the article's own text varies. Haydn is `হাইডন`, not `হাইডেন`.
  Tchaikovsky is `চাইকোভস্কি`, without the article's explicit hasanta, which some fonts draw badly.
- **A city Bengali news names takes its everyday spelling,** such as `ভিয়েনা` or `প্যারিস`. A smaller
  place stays in Latin letters, such as Leipzig, Hexham or Olomouc.
- **Every other person's name stays in Latin letters,** since a guessed spelling would mislead. Grieg,
  Mendelssohn, Satie, Bizet, Mahler and Ravel have no Bengali article.
- **The sections "Learn Piano" and "Just Play Piano" are translated,** since they describe what a
  learner does. "Learn Piano" is `পিয়ানো শিখুন`, and "Just Play Piano" is `শুধু পিয়ানো বাজান`.
- **The worlds' titles are** পিয়ানোর সঙ্গে পরিচয়, প্রথম সুর, ছন্দ, স্বরলিপি পড়া, দুই হাতে, স্কেল, কর্ড
  and ভাব দিয়ে বাজানো. `src/learn/course.ts` takes them when Bengali ships.
- The `kept` list of `src/i18n/typography.ts` holds each kept word a test could misread.

## 7. Note names

- **Notes are letters:** C D E F G A B, uppercase, in Latin letters. Bengali Wikipedia's *পিয়ানো* writes
  `C`, and the key labels show Latin letters.
- **A letter is never spelled out in Bengali script,** as `সি` or `জি`. WP *সঙ্গীত* does so, but a
  spelled `ই` or `এ` reads as a vowel or a word.
- **Sargam, `সা রে গা মা`, is never used.** It is movable, so it names no fixed key.
- **A sharp or a flat in running text is a word after the letter:** `F শার্প`, `B ফ্ল্যাট`,
  `C শার্প মাইনর`. WP *স্বরমাধুর্য* writes `এ-ফ্ল্যাট` in this order.
- **A name the screen shows,** such as `F♯4` on a key, keeps the form of `src/theory/note-names.ts`. A
  text that points at that label writes it the same way.
- **The octave number is scientific:** middle C is `C4`. A lesson names a note by its place, as the
  English does: `মধ্য C`.
- **"Low C" is `নিচের C`, and "high C" is `উপরের C`.** A note or a key named by its place takes `উপরের`
  or `নিচের`. A sound's height is `উঁচু পিচ` or `নিচু পিচ`.
- **A key is its letter and its quality:** `C মেজর`, `A মাইনর`. A chord adds `কর্ড`: `C কর্ড`,
  `A মাইনর কর্ড`.
- **A spelled-out chord lists its letters with commas:** `C, E আর G`.
- **A note letter takes its case ending after a hyphen:** `C-তে`, `E-র`, `G-এর`. A postposition stands
  after a space: `C থেকে`, `G পর্যন্ত`.
- **A letter that code checks,** such as a quiz answer, stays the catalog's own.

## 8. Numbers

- **`Intl` formats every number for `bn-BD`:** `১২,৩৪,৫৬৭.৫`, grouped in lakhs. No separator is set by hand.
- **A count in a sentence takes Bengali digits:** `৩টি পাঠ`, `টানা ৫ দিন`, `১৮২৪ সালে`. CLDR's
  default for `bn` writes them, Android's strings write `১৬`, and Microsoft's examples write `৩–৫`.
- **A message formats its count with `formatNumber`,** never with a bare `${n}`, so its digits are Bengali.
- **Fingers, octaves, bars, beats and time signatures keep Western digits,** as printed music does:
  `বার 3`, `9 থেকে 16 নম্বর বার`, `3 নম্বর আঙুল`, `C4`, `3/4`. Their numbers name what the score shows.
- **One number never mixes the two sets of digits,** and a sentence avoids mixing them where it can.
- **A percent sign follows its number without a space:** `৮০%`, as CLDR writes it.
- **A small count the English spells out is a Bengali word in prose:** `তিনটি চাবি`, `দুই হাত`.
- **A counted noun takes the classifier `টি` and no plural ending:** `৩টি পাঠ`, never `৩টি পাঠগুলো`. The
  classifier joins its number with no space. A unit takes no classifier: `৫ মিনিট`, `১০ XP`, `৩ দিন`.
- **A count of bars takes `টি`, and a count of times joins `বার`:** `চারটি বার` is four bars, and `দুবার`
  is twice. A number and a separate `বার`, such as `চার বার`, is never written, since it could mean either.
- **An ordinal in prose is a Bengali word:** `তৃতীয় আঙুল`, `দ্বিতীয় স্তবক`. A bar is named by its number
  instead, `বার 3` or `3 নম্বর বার`, since `প্রথম বার` also reads as "the first time".
- **Bengali has two plural forms, `one` and `other`.** `Intl` puts both 0 and 1 in `one`. A Bengali noun
  does not change after a number, so both forms are the same text.
- **"X of Y" is `Yটির মধ্যে Xটি`** in every counter, such as `৮টির মধ্যে ৩টি পাঠ`.

## 9. Marks

Each rule has its pattern in the `bn` entry of `src/i18n/typography.ts`. The rules test reads a text
with each kept word written as `X`.

| Rule | Pattern (`mustNot`) |
|---|---|
| A sentence ends with the dari `।`. An ASCII period stands only inside a number. | `(?<![0-9০-৯])\.\|\.(?![0-9০-৯])` |
| The dari is U+0964, never the double dari `॥` or the look-alike `৷`. | `[॥৷]` |
| No space stands before `।`, `?`, `!`, `:`, `;`, `,` or `%`. | `\s[।?!:;,%]` |
| A quote stands in `“ ”`, with `‘ ’` inside. Never straight quotes or `« »`. | `["'«»]` |
| One number never mixes Western and Bengali digits. | `[0-9][০-৯]\|[০-৯][0-9]` |
| A range of numbers takes `–` with no spaces: `৩–৫`. | `[0-9০-৯]\s*-\s*[0-9০-৯]\|[0-9০-৯]\s+–\|–\s+[0-9০-৯]` |
| A count's classifier joins its number: `৩টি`. | `[০-৯]\s+(?:টি\|টা\|জন)(?![\p{L}\p{M}])` |
| A Latin word or letter takes a Bengali ending after a hyphen: `C-তে`. | `[A-Za-z][ঀ-৿]\|[ঀ-৿][A-Za-z]` |
| `ড়`, `ঢ়` and `য়` are the letter and the nukta, never one precomposed character. | U+09DC, U+09DD or U+09DF |
| `ো` and `ৌ` are one character each, never two vowel signs. | U+09C7 followed by U+09BE or U+09D7 |
| Khanda ta is `ৎ`, never `ত` with a hasanta and a joiner. | U+09A4 U+09CD U+200D |
| The learner is `আপনি`, never `তুমি` or `তুই`. | `তুমি`, `তোমার`, `তুই` and their forms, as whole words |
| An instruction is the `আপনি` imperative. | `বাজাও`, `চাপো`, `শোনো`, `দেখো` and the like, as whole words |
| A count of times joins `বার`: `দুবার`. | a number word or digits, a space, then `বার` |
| A word takes its Bangla Academy spelling. | `তৈরী`, `দেরী`, `সরকারী`, `ইংরেজী`, `চাবী`, `আঙ্গুল`, `সঙ্গীত`, `কিভাবে` |

- **The dari ends every sentence,** in a button's help, a lesson and a guide. Microsoft's guide and
  Android's newer strings use it, with no space before it and one after it.
- **`?` and `!` end a question and an exclamation,** with no dari after them.
- **A comma, a colon and a semicolon are the Latin ones,** with a space after them, as Microsoft's guide asks.
- **An interface word the learner looks for stands in `“ ”`:** `“চালান” চাপুন।` Microsoft's guide quotes
  `“ওকে”` so.
- **A counted beat stands in `“ ”`:** `“1, 2” গুনুন।` The beats keep Western digits, as § 8 says.
- **The "and" of a count is `অ্যান্ড`,** as the English says it: `“1 অ্যান্ড 2 অ্যান্ড” গুনুন।`
- **An ellipsis is the one character `…`.** A progress message is impersonal: `ফোল্ডার খোঁজা হচ্ছে…`
- **A dash between two clauses is avoided,** since Microsoft's guide calls it rare. A comma or a new
  sentence takes its place.
- **Emphasis is bold, never italic.** Bengali fonts have no true italic, and a slanted one reads badly.
- **`কী` asks "what", and `কি` asks yes or no,** as Bangla Academy spells them. Examples are `এটি কী?`
  and `আপনি কি তৈরি?` The computer's key is also `কী`, and it always follows the key's name: `Esc কী`.
- **The Academy's spelling of `সংগীত`, `আঙুল` and `কীভাবে` holds,** where Bengali Wikipedia mixes forms.
- **`উপর` is written, never `ওপর`.** Both are standard, and one form keeps the files alike.

## 10. Length

Bengali runs a little wider than English. A Bengali line also needs more height, since vowel signs and
conjuncts reach above and below it. `src/ui/tokens.css` sets the Bengali font stack and the line height.

| Long | Short, for a label |
|---|---|
| সাসটেন প্যাডেল | প্যাডেল |
| কম্পিউটারের কিবোর্ড | কিবোর্ড |
| তিন-চতুর্থাংশ গতি | ¾ গতি |
| সুর চেনার অনুশীলন | সুর চেনা |
| অনুশীলনের গাইড | গাইড |
| লুপে চালান | লুপ |

- **A label stays a phrase, never a clipped word.** `গান খুলুন` may become `খুলুন`.
- **A button drops `করুন` only where the noun alone is the everyday label,** as `সেটিংস` and `লুপ` are.
- **A conjunct never breaks across a line.** The browser keeps a grapheme whole, so a text needs no
  soft hyphen.

## 11. Calibration

Each row is the chosen translation, and why it beat the next best one.

| Kind | English | Bengali | Why it beat the next best |
|---|---|---|---|
| Button | Continue | চালিয়ে যান | Android's label. `পরবর্তী` is *Next*, so it stays free for that. |
| Transport tooltip | Play or pause | চালান বা পজ করুন | `চালান` is the playback verb. `বাজান` would mean playing the piano. |
| Tooltip | Loop the bars set in the settings | সেটিংসে বেছে নেওয়া বারগুলো লুপে চালান | `বেছে নেওয়া` is plain. `নির্ধারিত` would read like a manual. |
| Setting and help | Wait for your notes / The song stops at each of your notes until you hold every key of it. | আপনার নোটের জন্য অপেক্ষা / আপনার প্রতিটি নোটে গানটি থেমে থাকে, যতক্ষণ না আপনি তার সব চাবি চেপে ধরেন। | The song is the subject, and `যতক্ষণ না` is how a teacher says "until". |
| Error | Your browser refused to save. Nothing changed. | সেভ করা যায়নি। কিছুই বদলায়নি। | Impersonal, as Microsoft's error forms are. `আপনার ব্রাউজার রাজি হয়নি` gives the browser a will. |
| Toast | A new version is ready. | নতুন ভার্শন তৈরি। | `ভার্শন` is the app word. `সংস্করণ` reads like a book's edition. |
| Dialog | Reset all progress? / Are you sure? | সব অগ্রগতি রিসেট করবেন? / আপনি কি নিশ্চিত? | The future `করবেন` asks politely, as Android's `ডিসকানেক্ট করবেন?` does. |
| Counter | 3 of 8 lessons | ৮টির মধ্যে ৩টি পাঠ | The order of Bengali counters. `৩/৮ পাঠ` reads like a fraction. |
| Streak | 3-day streak | টানা ৩ দিন | Short and everyday. `৩ দিনের স্ট্রিক` is a calque. |
| Feedback | Right! | ঠিক! | A teacher's word. `সঠিক!` reads like an exam sheet. |
| Greeting | Hi, I'm your piano teacher. Shall we play? | হ্যালো! আমি আপনাকে পিয়ানো শেখাব। চলুন, বাজানো শুরু করি? | The verb names no gender. `আমি আপনার শিক্ষক` would make the teacher a man to many readers. |
| Badge | Night owl / Finish a lesson at 10 at night or later. | রাতজাগা পাখি / রাত ১০টা বা তার পরে একটি পাঠ শেষ করুন। | `রাতজাগা পাখি` keeps the joke and names no gender. `পেঁচা` alone reads as an insult. |
| Joke | Quality control is a cat that walks over the keys now and then. | মান যাচাইয়ের কাজটা করে একটি বিড়াল, যে মাঝে মাঝে চাবির উপর দিয়ে হেঁটে যায়। | The deadpan stays, and the cat is the subject. |
| Level up | Level up! / Every lesson takes you further. Keep going! | লেভেল আপ! / প্রতিটি পাঠ আপনাকে আরও এগিয়ে নেয়। এভাবেই চালিয়ে যান! | `লেভেল আপ` is the word of games. `স্তর বেড়েছে` reads like a system log. |
| Lesson explanation | The right pedal is the sustain pedal. While it is down, every note keeps sounding after you let go of its key. | ডান প্যাডেলটি হলো সাসটেন প্যাডেল। এটি চাপা থাকলে চাবি ছেড়ে দেওয়ার পরেও প্রতিটি নোট বাজতে থাকে। | `চাপা থাকলে` is short and plain. `যখন এটি নিচে থাকে` reads translated. |
| Lesson instruction | Your turn. Put your right thumb on middle C and play C and E together. | এবার আপনার পালা। ডান হাতের বুড়ো আঙুল মধ্য C-তে রাখুন, তারপর C আর E একসঙ্গে বাজান। | Two polite imperatives, as a teacher says them. `তারপর` keeps the order. |
| Quiz | How many black keys are in the smaller group? / One, Two, Three, Four | ছোট দলটিতে কয়টি কালো চাবি আছে? / একটি, দুটি, তিনটি, চারটি | Each answer is the counted word a learner says aloud. |
| Rhythm | Count "1-2" for each half note. | প্রতিটি হাফ নোটে “1, 2” গুনুন। | `হাফ নোট` is what learners say. `অর্ধেক নোট` reads like a machine. |
| Guide, about | Beethoven wrote this tune for the last movement of his Ninth Symphony, first played in Vienna in 1824. | বেটহোফেন এই সুরটি লিখেছিলেন তাঁর নবম সিম্ফনির শেষ মুভমেন্টের জন্য। এটি প্রথম বাজানো হয় ১৮২৪ সালে, ভিয়েনায়। | The year is a count in prose, so its digits are Bengali. `তাঁর` is the polite "his". |
| Guide, tricky bar | Look before you jump. | লাফ দেওয়ার আগে দেখে নিন। | Short and imperative, as the English is. |
| Mode name | Free jam | মন খুলে বাজান | An invitation, as the course's free play is. `ফ্রি জ্যাম` would stay opaque. |

## 12. Sources

- **Microsoft Bangla (India) Style Guide,** `aka.ms/bangla-india-styleguide`. It settled `আপনি`, the
  `-ুন` imperative, the dari and its spaces, the Latin comma and colon, and `“ ”`. It also settled the en
  dash of a range, the Bengali digits, the gender rule, the error forms and the loanwords. Its pages were read as images.
- **No Microsoft guide for Bangladesh was found.** The style guides page lists only the India guide, so
  Bangla Academy's spelling rests on this guide's choice, as *Open* says.
- **Android's strings,** `values-bn` of the framework, Settings and SystemUI. AOSP has one Bengali for
  both countries. They settled the labels, `চাপুন`, `বেছে নিন`, `গতি`, `লোড হচ্ছে…` and the digits.
- **CLDR,** through `Intl`. It settled the lakh grouping, the Bengali digits, the percent sign and the
  plural forms `one` and `other`.
- **Bengali Wikipedia's music articles,** each named in the glossary. Their coverage of Western theory is
  thin. They settled `চাবি`, `স্টাফ`, `স্কেল`, `কর্ড`, `সুর`, `ছন্দ`, `স্বরলিপি` and the composers'
  spellings. Their `স্বর` coinages are not followed, as § 1 says.
- **Music Blocks' Bengali strings,** `sugarlabs/musicblocks`, `locales/bn.json`. Most entries are machine
  translations, such as `নাবালক` for minor. They count only beside a better source.
- **No Bengali piano method was reached.** No school music book of Bangladesh or West Bengal, and no
  Bengali keyboard course, was found.

## Open

- No Bengali piano method was reached. A Bengali piano teacher's read would confirm the loanwords of
  notation: the note values, `রেস্ট`, `টাই`, `স্লার`, `টাইম সিগনেচার` and `কী সিগনেচার`.
- **`বার` for a bar rests on one source,** and § 8 keeps it apart from "times". A teacher may prefer
  `মেজার`.
- **The key of a song is `স্কেল`,** as Bengali singers say it. The world *Scales and keys* would show it first.
- **No Bangladesh guide was read.** A reader from Bangladesh and one from West Bengal would each catch
  words that read as the other country's.
- Many terms rest on one source or none, as the glossary marks them. Each is the everyday word, chosen
  over a coinage no learner says.
