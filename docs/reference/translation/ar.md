# Arabic: the style guide and glossary

Every writer and reviewer of an Arabic text reads this file whole first. The method is
[translation.md](../../agent/translation.md), and this file adds only what is Arabic. The machine's half
of these rules is the `ar` entry of `src/i18n/typography.ts`.

## 1. Variant and readers

- **The variety is Modern Standard Arabic,** which readers in every Arab country understand. No text
  uses a dialect word. Pages carry `lang` `ar` and read from right to left.
- **The register is the everyday one of apps,** never the register of a manual. Microsoft's guide § 2.1
  asks for "language that resembles conversation", not "the formal, technical language".
- **The readers are beginners of every age,** children and adults from Morocco to Iraq, who learn piano
  alone in a browser. Most met Western notation, if at all, in a school music lesson.
- **Music terms are the ones Arabic Wikipedia and music software use,** as § 5 lists. A loanword such as
  `أوكتاف` stands where readers say it. A coinage no learner says is never used.
- **The word `مقام` is never used for a key.** It names a mode of Arabic music, and a reader would take
  it so. The one exception is `دليل المقام`, the key signature, which Arabic Wikipedia titles so.

| Avoid | Write | Why |
|---|---|---|
| يتسنى لك | يمكنك | Microsoft § 2.1.2 |
| كذلك | أيضًا | Microsoft § 2.1.2 |
| اللاحقة | التالي | Microsoft § 2.1.2 |
| قم بفتح | افتح, or the label فتح | Microsoft § 2.1.3 |
| الخاص بك | the suffix ـك, or nothing | Microsoft § 2.1.3 and § 4.1.13 |
| وتر for a chord | تآلف | `وتر` is a string, as Arabic Wikipedia's *وتر (موسيقى)* uses it |
| ملاحظة for a note | نغمة | `ملاحظة` is a remark. Machine translations use it |
| ألبِث for Pause | إيقاف مؤقت | Firefox's word is obscure. Android's is plain |

## 2. Address

- **The learner is addressed in the second person singular,** as Microsoft § 2.2.1, Android and Firefox
  all do. Every text uses the one form, and never a plural such as `انقروا`.
- **A button, a menu item, a tab or a setting's name is a verbal noun or a noun:** `تشغيل`, `فتح`,
  `حفظ`, `الإعدادات`. Android labels its buttons so, and a verbal noun has no gender.
- **A tooltip is a verbal noun phrase too:** `تكرار الموازير المحددة`. Microsoft's page 14 asks for this.
- **An instruction in a lesson or a guide is the imperative:** `اعزف`, `ضع`, `اضغط`, `استمع`. A
  teacher instructs so, and Microsoft § 2.1.3, Android and Firefox all do. § 4 gives its form.
- **A help text, an explanation or feedback avoids the verb of the learner,** as § 4 says. Its subject
  is the song, the note or the key, or it invites with `لنعزف`.
- **A question to the learner starts with `هل`:** `هل تريد حذف هذا التسجيل؟`
- **An error names what failed, never the learner's mistake:** `تعذّر حفظ الملف.` Android uses `تعذّر`
  for every failure. Microsoft page 29 asks for errors that are "natural, empathetic".
- **One verb serves a button, a piano key and a computer key: `اضغط`.** It holds for a tap, a click and
  a press alike, as Android writes `اضغط على "القائمة"`. Picking one item from several is `اختر`.
- **`يُرجى` is rare.** It reads like an office notice. A teacher's warmth sits in the wording, with
  `الآن` or `هيا` where it fits.
- **"Your" is the suffix `ـك`, once at most,** or the definite article where the owner is plain. Microsoft
  § 2.1.3 and § 4.1.13 ask this: `يدك اليمنى`, or just `اليد اليمنى`.

## 3. Voice

Warm, plain and short, as a good teacher speaks. The first person plural invites the learner along, as
Microsoft § 2.2.4 allows: `لنعزف`, `هيا نبدأ`.

| English | Arabic | Why it reads warm and plain |
|---|---|---|
| Hi, I'm your piano teacher. Shall we play? | أهلًا! أنا هنا لأعلمك العزف على البيانو. هل نبدأ؟ | `هل نبدأ؟` invites, as the English does. Neither the teacher nor the learner has a gender. |
| Not quite. Try again. | ليس تمامًا. لنجرب مرة أخرى. | `لنجرب` tries together, so no verb agrees with the learner. |
| Every lesson takes you further. Keep going! | كل درس يأخذك خطوة إلى الأمام. لنواصل! | The lesson is the subject, and `ـك` unvowelled names no gender. |

"Well done." is `أحسنت!` in every lesson. It is the word Arab teachers say, and § 4 names its form.

## 4. Gender

An Arabic verb, adjective and pronoun of the second person agree with the learner's gender. The text
keeps that gender out by these means, in this order. Microsoft § 3.1 asks the same.

- **First, a verbal noun or a noun:** `تشغيل`, `إكمال درس`, `العزف باليدين`. It agrees with no one.
- **Second, a thing as the subject:** `تتوقف الأغنية عند كل نغمة.` The verb agrees with the song.
- **Third, the passive:** `حتى تُضغط مفاتيحها كلها.` Its first letter takes a damma, as Microsoft page 25
  asks, so it never reads as an active verb.
- **Fourth, the first person plural:** `لنعزف دو ومي معًا.` The teacher and the learner act together.
- **Fifth, `يمكنك` or `عليك` before a verbal noun:** `يمكنك اختيار أغنية من هنا.` Unvowelled, the
  suffix `ـك` is the same for a man and a woman.
- **Sixth, the past tense of the second person:** `أكملت الدرس!` Unvowelled, it is the same for both.
- **Where none fits, the masculine singular,** as the generic form Android and Firefox use for every
  reader: `اعزف`, `هل تريد`. This is the imperative of every instruction step.
- **Never a split form** such as `اعزف/ي` or `مستعد(ة)`. It breaks the reading of a sentence.
- **Never a present verb or an adjective of the learner where a neutral form exists:** `هل نبدأ؟`, not
  `هل أنت مستعد؟`.
- **`أحسنت` is the one praise word in the past tense,** and it reads the same for both genders unvowelled.
- **No word for a person carries an age or a gender:** never `يا بني`, `يا صديقي` or `عزيزي`.
- **The teacher speaks of itself in the first person,** with no noun such as `معلم` or `معلمة`.
- **A composer named in a guide takes the gender of the person,** since a guide states facts.

## 5. Terms

One term per idea, in every file. Sources: WP is Arabic Wikipedia, by article title. MS is MuseScore's
Arabic strings. UC is the Arabic strings of *Ukulele Companion*. MET is the Arabic strings of the
*Metronome* app by Kr0oked. AN is Android's `values-ar` strings, and FF is Firefox's Arabic strings. MSG
is Microsoft's Arabic style guide. Music Blocks' Arabic strings are machine-made, so no term rests on them.

### The piano glossary

| English | Arabic | Sources |
|---|---|---|
| key (of the piano) | مفتاح, plural مفاتيح | WP *بيانو*; MB is not counted |
| white key, black key | مفتاح أبيض, مفتاح أسود; plural مفاتيح بيضاء, مفاتيح سوداء | WP *بيانو* «36 مفتاحا أسود» |
| keyboard (the piano's) | مفاتيح البيانو | WP *بيانو*; `لوحة المفاتيح` is kept for the computer's |
| keyboard (a MIDI one) | لوحة مفاتيح MIDI | follows the row above |
| note (a sound, or a written sign) | نغمة, plural نغمات | MS *Note*; WP *نغمة موسيقية* |
| middle C | دو الوسطى | WP *دو (موسيقى)* «C الوسطي»; WP *مفتاح موسيقي* «علامة الدو المركزية» |
| octave | أوكتاف, plural أوكتافات | WP *جواب (موسيقى)* and *سلم موسيقي*; UC |
| half step, whole step | نصف بعد, بعد كامل | WP *مفتاح موسيقي*, *سلم موسيقي* and *مسافة (موسيقى)* |
| sharp, flat, natural (the signs) | دييز, بيمول, بيكار | WP *رفع (موسيقى)*, *خفض (موسيقى)*, *بيكار (موسيقى)*; MS *Sharp*, *Flat* |
| accidental | علامة تحويل | WP *إشارة تحويل*; MS *Accidental* |
| staff | المدرج, plural المدرجات | WP *مدرج (موسيقى)*; MS *Staff* |
| grand staff | المدرج المزدوج | unsourced, follows `المدرج` |
| treble clef, bass clef | مفتاح صول, مفتاح فا | MS; WP *مفتاح موسيقي* |
| ledger line | خط إضافي | unsourced |
| line, space (of the staff) | خط, فراغ | WP *مدرج (موسيقى)* writes `فسحة`. `فراغ` is the everyday word, unsourced |
| landmark (a note read at a glance) | نغمة دليلية | the course's own term, defined where it first appears |
| bar | مازورة, plural موازير: `المازورة 3` | MS *Measure*; WP *ميزان (موسيقى)* and *مقياس الإيقاع* |
| bar line | فاصل المازورة | MS *Barlines* «فواصل الموازير» |
| time signature | الميزان | UC; WP *ميزان (موسيقى)*. The bar is `مازورة`, so `الميزان` stays free |
| beat (one count of a bar) | نبضة, plural نبضات: `ثلاث نبضات في كل مازورة` | WP *نبضة (موسيقى)*; MET; UC |
| hold for two beats | أبقها مضغوطة نبضتين | follows `نبضة` |
| three-four time | ميزان 3/4 | follows `الميزان` |
| count-in | العد التمهيدي | unsourced |
| rhythm | الإيقاع | WP *إيقاع*; UC |
| tempo; speed | السرعة | MS *Tempo*; MET. WP's `سرعة الإيقاع` is the long form |
| metronome | المترونوم | MS; MET; WP's redirect *ميترونوم* |
| whole, half, quarter note | مستديرة, بيضاء, سوداء | WP *مستديرة (موسيقى)*, *بيضاء (موسيقى)*, *سوداء (موسيقى)* |
| eighth, sixteenth note | ذات السن, ذات السنين | WP *ذات السن (موسيقى)*, *ذات السنين (موسيقى)* |
| dotted | منقوطة: `بيضاء منقوطة` | WP *نقطة (موسيقى)* |
| rest; quarter rest | سكتة; سكتة سوداء | MS *Rest*; WP *ميزان (موسيقى)* «السكتات» |
| tie | رباط | MS *Tie*, one source |
| slur | قوس الوصل | MS writes `وصلة`. The arc's name reads plainer, unsourced |
| repeat sign | علامة الإعادة | MS *Repeats* «الإعادات» |
| first, second ending | النهاية الأولى, النهاية الثانية | unsourced |
| first, second time through | المرة الأولى, المرة الثانية | everyday words |
| pickup | نغمة تمهيدية | unsourced |
| syncopation | السنكوب | unsourced, the loanword Arab musicians say |
| scale | سلم, plural سلالم | WP *سلم موسيقي*; UC |
| major, minor | كبير, صغير: `سلم دو الكبير`, `لا الصغير` | WP *سلم كبير*, *سلم صغير*; MS «دو الكبير/لا الصغير» |
| key (of a song) | سلم: `الأغنية في سلم صول الكبير` | WP *سلم موسيقي*. `مفتاح` is the piano's key, and `مقام` an Arabic mode |
| key signature | دليل المقام | WP *دليل مقام*; MS «أدلة المقامات» |
| scale degree | درجة: `الدرجة الخامسة` | WP *درجة موسيقية* |
| chord | تآلف, plural تآلفات | WP *تآلف (موسيقى)*; WP *سلم موسيقي* «تركيب التآلفات» |
| triad; major, minor triad | تآلف ثلاثي; تآلف ثلاثي كبير, صغير | WP *ثالوث (موسيقى)* «تآلف ثلاثي»; UC «ثلاثي» |
| root | الأصل | WP *أصل (تآلف)* and *تآلف كبير* |
| inversion; root position | قلب; الوضع الأساسي | UC «قلب»; `الوضع الأساسي` is unsourced |
| G seventh (chord) | تآلف صول السابع | follows `تآلف` and the interval names |
| broken chord | تآلف مفكك | unsourced |
| arpeggio | أربيجيو | WP *وتر (موسيقى)*, one source |
| Alberti bass, waltz bass, stride bass | باص ألبرتي, باص الفالس, باص السترايد | the course's own terms |
| bass note | نغمة الباص | WP *نوطة بيس* writes `بيس`. `باص` is the spelling Arab musicians print most, unsourced |
| interval | مسافة | WP *مسافة (موسيقى)*, *مسافة موسيقية* |
| third, fourth, fifth, sixth, seventh | ثالثة, رابعة, خامسة, سادسة, سابعة | WP *مسافة (موسيقى)*; WP *تآلف كبير* |
| major third, minor third | ثالثة كبيرة, ثالثة صغيرة | WP *مسافة (موسيقى)* |
| open fifth | خامسة مفتوحة | unsourced, follows the row above |
| step, skip (between keys) | الانتقال إلى المفتاح المجاور, تخطي مفتاح | everyday words |
| a step, a skip, a leap (nouns) | خطوة, تخطٍ, قفزة | everyday words; a lesson defines each by the row above |
| tune, melody | لحن, plural ألحان | WP *لحن (موسيقى)*; UC |
| phrase | جملة موسيقية | WP *جملة (موسيقى)* |
| call and answer (phrases) | سؤال وجواب | everyday words, unsourced |
| pattern (of notes) | نمط | everyday word |
| verse, chorus | مقطع, لازمة | everyday words of song, unsourced |
| coda | الخاتمة | WP *خاتمة (موسيقى)*, by its title only |
| dynamics | قوة الصوت | MS writes `شدة الأداء`. `قوة الصوت` is what a learner says, unsourced |
| loud, soft | بقوة, بهدوء | everyday words. `عالٍ` and `منخفض` are kept for pitch |
| legato, staccato | متصل, متقطع: `عزف متصل`, `عزف متقطع` | MS *Staccato* «متقطّع». The Italian word stays in Latin letters where the English names it |
| crescendo, diminuendo | ازدياد تدريجي في القوة, تناقص تدريجي في القوة | MS *Crescendo* «أقوى تدريجيًا» |
| hairpin | علامة التدرج | unsourced |
| mark (p, f, rit.) | علامة | WP *إشارة تحويل* |
| fermata | علامة الإطالة | unsourced |
| hold (a fermata's note) | أطل: `أطل النغمة قليلًا` | everyday word |
| hold (the pedal holds the notes) | يبقي: `تبقي الدواسة النغمات مسموعة` | everyday word |
| fast, slow (tempo); speed up | سريع, بطيء; تسريع | everyday words |
| slow down, back in time | الإبطاء تدريجيًا, ثم العودة إلى السرعة الأصلية | everyday words |
| turn (ornament) | الدوران | unsourced |
| double notes | نغمات مزدوجة | unsourced |
| a run (fast notes) | سلسلة نغمات سريعة | the guides' own term |
| two quick notes, a group of quick notes | نغمتان سريعتان, مجموعة نغمات سريعة | the guides' own term |
| a slow waltz, a fast galop (the dance) | فالس هادئ, غالوب سريع | everyday words |
| a stab (a short, hit chord) | تآلف قصير حاد | the guides' own term |
| pedal | دواسة, plural دواسات | WP *بيانو* |
| sustain pedal | دواسة الحفاظ; `الدواسة اليمنى` in a lesson | WP *بيانو* «دواسة الحفاظ» |
| soft pedal | دواسة التخفيف; `الدواسة اليسرى` in a lesson | unsourced, follows the row above |
| press a pedal, lift it | اضغط الدواسة, ارفع قدمك عنها | the plain verbs of a foot |
| fingering | ترقيم الأصابع | MS *Fingering* «ترقيم اﻷصابع» |
| finger numbers | 1 الإبهام, 2 السبابة, 3 الوسطى, 4 البنصر, 5 الخنصر | the everyday names of the fingers, unsourced |
| a finger by number | الإصبع 3, or الإصبع الثالث | everyday words. `الوسطى` alone would blur with middle C |
| right hand, left hand, both hands | اليد اليمنى, اليد اليسرى, اليدان معًا | everyday words; UC «اليد اليسرى» |
| hand position; C position | وضعية اليد; وضعية دو | the course's own term, unsourced |
| hand shape | شكل اليد | everyday words |
| thumb under, finger over | تمرير الإبهام من تحت, عبور الإصبع من فوق | the course's own terms, unsourced |
| lift (a finger, a key) | رفع | everyday word |
| land (on a key, a beat) | الوصول إلى | everyday word |
| jump, climb, slide | قفز, صعود, انزلاق | everyday words |
| stretch, spread (the hand) | فرد اليد | everyday words |
| roll (a chord) | عزف التآلف نغمة نغمة من الأسفل إلى الأعلى | the guides' own term |
| rock (between two keys) | التأرجح بين مفتاحين | everyday words |
| wrist | المعصم | everyday word |
| let ring | اترك الصوت يرن | everyday words |
| fingertips | أطراف الأصابع | everyday words |
| by feel | باللمس | everyday word |
| sight-reading | القراءة الفورية | unsourced |
| ear training | تدريب الأذن | unsourced |
| play (the piano, a key, a note) | عزف; اعزف | WP *بيانو* «تُعزف»; MS *Play* «عزف» |
| practise | تمرّن; تمرين | UC «تمرين» |
| song; piece | أغنية; مقطوعة | WP *لحن (موسيقى)*; WP *سرعة إيقاع* «المقطوعة الموسيقية» |
| sheet music, notation | النوتة الموسيقية | WP *درجة موسيقية* «نوطة (نوتة)»; WP *تدوين موسيقي* |
| pitch; high, low (of pitch) | حدة الصوت; عالية, منخفضة | WP *درجة موسيقية* «النغمات العالية … والواطئة» |
| transpose | تصوير | MS «تصوير أدلة المقامات» |
| stem, note head | ساق النغمة, رأس النغمة | unsourced |
| piano bench | مقعد البيانو | everyday words |
| at full speed; at three-quarter speed | بالسرعة الكاملة; بثلاثة أرباع السرعة | the guides' own terms |
| waltz | فالس | unsourced, the loanword Arab readers know |
| carol; sea shanty; jig | ترنيمة الميلاد; أغنية بحارة; جيغ | unsourced |
| suite, symphony, sonata, concerto | متتالية, سيمفونية, سوناتا, كونشيرتو | WP *السيمفونية التاسعة (بيتهوفن)*; the others unsourced |
| movement, overture, variation | حركة, افتتاحية, تنويعة | WP *حركة (موسيقى)*; the others unsourced |
| march, hymn, lullaby, nocturne | مارش, ترنيمة, تهويدة, نوكتورن | unsourced |
| aria, tone poem, hornpipe, galop | آريا, قصيد سيمفوني, هورنبايب, غالوب | unsourced |
| attack, decay, sustain, release | الهجوم, التلاشي, الاستمرار, التحرير | the terms of synthesizers, unsourced |
| enharmonic | متعادل: `دو دييز وري بيمول متعادلتان` | WP *تعادل (موسيقى)* |

### The interface glossary

| English | Arabic | Sources |
|---|---|---|
| Settings | الإعدادات | AN; FF; MET |
| Songs (the library's panel); library | الأغاني; مكتبة الأغاني | the app's own term |
| Open, Close, Cancel | فتح, إغلاق, إلغاء | AN; FF in the imperative |
| Back, Next, Previous | رجوع, التالي, السابق | AN |
| Continue | متابعة | AN |
| OK, Done | حسنًا, تم | AN; MET |
| Skip | تخطٍ | AN «التخطي»; FF «تخطَّ» |
| Reset | إعادة الضبط | AN |
| Save | حفظ | AN; FF «احفظ» |
| Delete; Remove | حذف; إزالة | AN; FF «احذف». The two acts differ here |
| Restore (a backup) | استعادة | unsourced |
| Search | بحث | AN; FF «ابحث» |
| Play, Pause, Stop (playback) | تشغيل, إيقاف مؤقت, إيقاف | AN; MET |
| Loop (button); a loop | تكرار; مقطع مكرر | MS «تكرار العزف» |
| Speed | السرعة | MET; MS |
| Volume, Mute | مستوى الصوت, كتم الصوت | AN; UC; FF «اكتم الصوت» |
| Fullscreen | ملء الشاشة | FF |
| Theme; Light, Dark, Like the system | المظهر; فاتح, داكن, مثل النظام | AN; FF; MET. `مثل النظام` is unsourced |
| Language | اللغة | AN «جميع اللغات» |
| computer keyboard; computer key | لوحة المفاتيح; زر: `زر Esc` | AN. A piano's key is `مفتاح`, so the two never blur |
| touch screen | شاشة اللمس | unsourced |
| device; connect, disconnect | الجهاز; توصيل, فصل | AN |
| folder; file | مجلد; ملف | AN |
| browser | المتصفح | FF |
| offline | دون اتصال | FF |
| Install, Update | تثبيت, تحديث | FF; AN; MSG |
| app | التطبيق | AN |
| Help, Tip | مساعدة, نصيحة | AN «مساعدة»; `نصيحة` is unsourced |
| Try again (a button); in prose | إعادة المحاولة; لنجرب مرة أخرى | MSG «إعادة المحاولة»; AN |
| tap, click or press a control | اضغط على: `اضغط على «تشغيل»` | AN «اضغط على "القائمة"» |
| press a computer key | اضغط: `اضغط Esc` | FF «اضغط Esc» |
| choose (one of several) | اختر; اختيار | AN «اختيار»; FF «اختر» |
| find, look for | ابحث عن: `ابحث عن دو` | FF «ابحث» |
| a page of the site; a printed page | صفحة | everyday word |
| lesson, step, world | درس, خطوة, عالم: `الدرس 3` | the course's own terms |
| quiz; demo | اختبار قصير; عرض | everyday words |
| boss (a world's last lesson) | التحدي الكبير | the course's own term |
| skip test | اختبار التخطي | the course's own term |
| level; Level up! | المستوى; مستوى جديد! | UC «مستوى المهارة» |
| XP | XP, a kept word | the word of games |
| badge, achievement | شارة, إنجاز | UC «شارات», «الإنجازات» |
| streak | أيام متتالية: `3 أيام متتالية` | UC «متتالية» |
| daily goal | الهدف اليومي | everyday words |
| score; points | النتيجة; نقاط | UC «النقاط» |
| stars | نجوم | everyday word |
| take (one recorded play) | محاولة | everyday word |
| Favourites | المفضلة | unsourced, the word of every Arabic browser |
| track (of a MIDI file) | مسار | unsourced |
| progress | التقدم | UC «التقدم» |
| backup | نسخة احتياطية | unsourced |
| guide (a song's) | دليل التمرين | the app's own term |
| a setting; options | إعداد; خيارات | AN |
| the player (of songs) | المشغل | everyday word |
| Beginner, Easy, Medium, Hard, Advanced, Expert | مبتدئ, سهل, متوسط, صعب, متقدم, خبير | the usual ladder of levels |
| Easy, Normal, Hard (a song) | سهل, عادي, صعب | the usual ladder of levels |
| common, rare, epic, legendary (a version) | عادية, نادرة, ملحمية, أسطورية | the words of games. They agree with `نسخة` |
| Perfect, Great, Good | ممتاز, رائع, جيد | the words of rhythm games |
| Wrong note, Too short, Too long, Late | نغمة خاطئة, قصيرة جدًا, طويلة جدًا, متأخرة | everyday words. Each agrees with `نغمة` |
| free play; pitch practice | عزف حر; تمرين على تمييز النغمات | the course's own terms |
| hotkeys | اختصارات لوحة المفاتيح | unsourced |
| velocity (of a key) | قوة الضغط | the same idea as dynamics |
| lane; timeline | عمود; الخط الزمني | the player's own terms. `مسار` is kept for a MIDI track |
| hit, miss, mistake | إصابة, نغمة فائتة, نغمة خاطئة | everyday words |
| colour; glow; particles | لون; توهج; جزيئات | everyday words |
| equaliser; reverb | معادل الصوت; صدى | the terms of audio apps, unsourced |
| camera; zoom; side view | الكاميرا; تكبير; منظر جانبي | everyday words |
| lyrics; bar numbers | الكلمات; أرقام الموازير | everyday word; follows `مازورة` |
| difficulty; length (of a song) | الصعوبة; المدة | everyday words |
| record; preview; export; import | تسجيل; معاينة; تصدير; استيراد | MS «تصدير», «استيراد»; FF «استورِد» |
| filter; tag | تصفية; وسم | UC writes `الفلاتر`. `تصفية` is the Arabic word, unsourced |
| open source | مفتوح المصدر | unsourced |
| guided course; play modes | الدورة الموجهة; أوضاع العزف | the app's own terms |
| scene; top bar; control bar | المشهد; الشريط العلوي; شريط التحكم | the player's own terms |
| combo; multiplier; accuracy | كومبو; المضاعف; الدقة | the words of rhythm games |
| range (of a keyboard) | المدى | everyday word |
| click (of the metronome) | نقرة | everyday word |
| hit line | خط الإصابة | the player's own term |
| hand crossing | تقاطع اليدين | everyday words |
| low, high band (of the equaliser) | المنخفض, العالي | the terms of audio apps; never `باص`, which names a note |
| scoring; a scored take | احتساب النقاط; محاولة محتسبة | the player's own terms |
| error (a title) | خطأ | AN |
| a failure in a message | تعذّر: `تعذّر فتح الملف.` | AN |
| loading | جارٍ التحميل… | AN |
| leave (a lesson, a page) | خروج; الخروج من الدرس | everyday words. `تخطٍ` skips and never leaves |
| skill (a song's technique tag) | مهارة | UC |
| folk tune; counter-melody | لحن شعبي; لحن مرافق | follow `لحن` |
| size; shape | الحجم; الشكل | everyday words |
| opacity | العتامة | unsourced |
| in key widths (a unit); per second | بعرض المفاتيح; بعرض المفاتيح في الثانية | the player's own unit |
| a section named mid-sentence | in « »: `في قسم «العزف الحر»` | so the name never reads as part of the sentence |
| a guide's stock practice steps | see *A guide's recurring steps* below | the guides' own forms, one per English step |

### Which "play" is which

- **A key, a note, a song on the piano:** `عزف`. `اعزف دو ومي معًا.`
- **Starting playback of a song:** `تشغيل`. The transport's *Play* is `تشغيل`.
- **A game or a mode:** `لعبة`, and `وضع اللعب` for *Game mode*.
- **A lesson's "Play again" that replays a demo:** `استماع مجددًا`, since the learner listens.
- **"Your turn":** `دورك الآن.`

### A guide's recurring steps

The song guides repeat these steps word for word. Each English step has one Arabic text in every guide.
A step that only differs in its bars or its section follows the nearest row's shape.

| English | Arabic |
|---|---|
| Play the whole song with both hands at three-quarter speed. | اعزف الأغنية كاملة باليدين معًا، بثلاثة أرباع السرعة. |
| Join the hands on the whole song at three-quarter speed. | اعزف الأغنية كاملة باليدين معًا، بثلاثة أرباع السرعة. |
| Play the whole song with both hands at full speed. | اعزف الأغنية كاملة باليدين معًا، بالسرعة الكاملة. |
| Play the whole song with both hands, a little slower than written. | اعزف الأغنية كاملة باليدين معًا، أبطأ قليلًا من السرعة المكتوبة. |
| Now play it at full speed. | والآن اعزفها بالسرعة الكاملة. |
| Now play it at full speed, with the pedal. | والآن اعزفها بالسرعة الكاملة، مع الدواسة. |
| Now play it at full speed, and let the last chord ring. | والآن اعزفها بالسرعة الكاملة، واترك التآلف الأخير يرن. |
| Join the hands on the first eight bars, slowly. | اعزف أول ثماني موازير باليدين معًا، ببطء. |
| Put both hands together on the first eight bars, slowly. | اعزف أول ثماني موازير باليدين معًا، ببطء. |
| Put both hands together on the whole song, slowly. | اعزف الأغنية كاملة باليدين معًا، ببطء. |
| Put both hands together, slowly. | اعزف باليدين معًا، ببطء. |
| Join the hands on the first verse, slowly. | اعزف المقطع الأول باليدين معًا، ببطء. |
| Join the hands on the first time through, slowly. | اعزف المرة الأولى باليدين معًا، ببطء. |
| Join the hands on bars 9 to 16, slowly. | اعزف الموازير من 9 إلى 16 باليدين معًا، ببطء. |
| Play the first four bars with the right hand alone, and let the song wait for each note. | اعزف أول أربع موازير باليد اليمنى وحدها، ودع الأغنية تنتظر كل نغمة. |
| Play the right hand alone on the first eight bars, and let the song wait for each note. | اعزف أول ثماني موازير باليد اليمنى وحدها، ودع الأغنية تنتظر كل نغمة. |
| Play bars 1 to 4 with the right hand alone, and let the song wait for each note. | اعزف الموازير من 1 إلى 4 باليد اليمنى وحدها، ودع الأغنية تنتظر كل نغمة. |
| Play the right hand alone, slowly, and let the song wait for each note. | اعزف باليد اليمنى وحدها، ببطء، ودع الأغنية تنتظر كل نغمة. |
| Play the left hand alone, and press the notes of each chord together. | اعزف باليد اليسرى وحدها، واضغط نغمات كل تآلف معًا. |
| Now the left hand alone. It holds one shape for each bar. | والآن اليد اليسرى وحدها. تبقى على شكل واحد في كل مازورة. |
| Play the Alberti bass alone until it rolls by itself: low, high, middle, high. | اعزف باص ألبرتي وحده حتى ينساب من تلقاء نفسه: المنخفضة، فالعالية، فالوسطى، فالعالية. |
| Keep the Alberti bass soft, so the tune sings above it. | اعزف باص ألبرتي بهدوء، ليغني اللحن فوقه. |
| Play the right hand's thirds and sixths alone, and press both notes of each pair as one. | اعزف ثالثات اليد اليمنى وسادساتها وحدها، واضغط نغمتي كل زوج كأنهما نغمة واحدة. |
| Play the right hand's thirds alone, and keep both notes of each pair together. | اعزف ثالثات اليد اليمنى وحدها، واعزف نغمتي كل زوج معًا. |
| The tune is the top note of each pair, so let the upper finger lead. | اللحن هو النغمة العليا في كل زوج، فدع الإصبع الأعلى يقود. |
| Play the right hand's chords alone, and let the top finger sing the tune. | اعزف تآلفات اليد اليمنى وحدها، ودع الإصبع الأعلى يغني اللحن. |
| Play the top note of each chord a little louder than the others. | اعزف النغمة العليا في كل تآلف بقوة أكبر قليلًا من غيرها. |
| Play the stride bass alone: jump down for the octave, then back up for the chord. | اعزف باص السترايد وحده: اقفز إلى الأسفل للأوكتاف، ثم ارجع إلى الأعلى للتآلف. |
| Play the stride bass alone: jump down for the low octave, then back up for the chord. | اعزف باص السترايد وحده: اقفز إلى الأسفل للأوكتاف المنخفض، ثم ارجع إلى الأعلى للتآلف. |
| In stride, look at the low octave and let the hand find the chord by feel. | في باص السترايد، انظر إلى الأوكتاف المنخفض، ودع يدك تجد التآلف باللمس. |
| Use the short rest after each octave and chord to jump to the next one. | استغل السكتة القصيرة بعد كل أوكتاف وتآلف للقفز إلى ما يليه. |
| Play the arpeggios of the second verse in the left hand alone. | اعزف الأربيجيو في المقطع الثاني باليد اليسرى وحدها. |
| In each arpeggio, the third finger crosses over the thumb on the way up. | في كل أربيجيو، يعبر الإصبع الثالث فوق الإبهام في الصعود. |
| Change the pedal on each new bass note, twice in every bar. | غيّر الدواسة مع كل نغمة باص جديدة، أي مرتين في كل مازورة. |
| Hold the pedal down for each whole bar, and change it right on the bar line. | اضغط الدواسة طوال كل مازورة، وغيّرها عند فاصل المازورة تمامًا. |
| Up high, the octaves should ring like bells. Keep the wrist loose. | في الأعلى، يجب أن ترن الأوكتافات كالأجراس. اجعل معصمك مرتخيًا. |

## 6. Kept words

- **Learn Piano Easy**, **MIDI**, **Web MIDI**, **MusicXML** and **XP** stay as they are, in Latin
  letters. Microsoft § 5.2 and § 5.5 leave product names untranslated.
- **A kept word takes no article,** as Microsoft § 4.1.4 asks: `ملف MIDI`, never `الـMIDI`.
- **A kept word stands after the Arabic it qualifies,** as Microsoft § 4.1.8 shows: `جهاز MIDI`, `ملف PDF`.
- **Units and formats:** BPM, FPS, PDF, USB, Hz, kHz, dB, ms, KB, MB, px and 3D.
- **Technical names:** JavaScript, MIT, and a computer key such as Esc, Q or Z. Microsoft § 5.4.2 keeps
  key names in English in an instruction. A Roman numeral of a chord, such as V7, stays too.
- **Product and site names:** GitHub, Matomo, Wikipedia, Wikimedia Commons, Mutopia, Chrome, Edge,
  Firefox and Safari.
- **The printed marks of a score:** `p`, `mp`, `mf`, `f`, `pp`, `ff`, `rit.`, `rall.`, `cresc.`,
  `decresc.`, `dim.`, `a tempo` and `Ped.`
- **The Italian word behind a mark stays in Latin letters** where the English names it, such as `piano`,
  `forte`, `legato` and `ritardando`. In Arabic letters, `بيانو` would read as the instrument.
- **Catalog numbers:** `BWV 1068`, `K. 525`.
- **A chord symbol,** such as `Am7`, as § 7 says.
- **A song title stays in Latin letters,** without quotes. A title is data shared by every locale, and
  the library searches it.
- **A composer with an Arabic Wikipedia article takes the spelling of its title:** `بيتهوفن`, `موتسارت`,
  `باخ`. An Arab reader knows these names in Arabic letters, and a Latin name in every line reads foreign.
- **Every other person's name stays in Latin letters,** since a guessed spelling would mislead.
- **A city or a country Arabic news names takes its Arabic spelling,** such as `فيينا` or `باريس`. A
  small town stays in Latin letters, such as Hexham or Olomouc.
- **A generic dance or form is an Arabic loanword,** such as `فالس` or `هابانيرا`. A piece's title stays
  in Latin letters, such as Sarabande or Allegretto.
- **Every kept word in a sentence is isolated.** A message wraps it in `isolate()` where it is an
  argument. Where the text itself holds it, U+2068 and U+2069 wrap it in the text.
- **The sections "Learn Piano" and "Just Play Piano" are translated,** since they describe what a
  learner does. "Learn Piano" is `تعلم البيانو`, and "Just Play Piano" is `العزف الحر`.
- **The worlds' titles are** التعرف على البيانو, الألحان الأولى, الإيقاع, قراءة النوتة, اليدان معًا,
  السلالم, التآلفات and التعبير. `src/learn/course.ts` takes them when Arabic ships.
- The `kept` list of `src/i18n/typography.ts` holds each kept word a test could misread.

## 7. Note names

- **Notes are fixed solfège in Arabic letters:** `دو ري مي فا صول لا سي`. WP *مفتاح موسيقي* and *سلم
  موسيقي* list them so, and MS names keys `دو الكبير`. `صول` takes `ص`, never `سول`.
- **A Latin letter never names a note in running text.** A chord symbol such as `Am7` is the one
  exception, where a song's guide prints one.
- **A sharp or a flat in running text is a word after the syllable:** `فا دييز`, `سي بيمول`. MS writes
  `دييز` and `بيمول`, and WP *إشارة تحويل* names the signs so.
- **A name the screen shows,** such as `فا♯4` on a key, keeps the form of `src/theory/note-names.ts`. A
  text that points at that label writes it the same way, isolated.
- **The octave number is scientific:** middle C is `دو4`, as WP *دو (موسيقى)* calls C4 the standard
  note. A lesson names a note by its place, as the English does: `دو الوسطى`.
- **A note is feminine, as `نغمة` is:** `دو الوسطى`, `مي المنخفضة`, `نغمة صول`.
- **A key or a scale is masculine, as `سلم` is:** `سلم دو الكبير`, `لا الصغير`. MS writes them so.
- **A chord takes `تآلف` before its name:** `تآلف دو`, `تآلف لا الصغير`.
- **"Low C" is `دو المنخفضة`, and "high C" is `دو العالية`.** These words name pitch alone. Loudness takes
  `بقوة` and `بهدوء`, so the two never blur.
- **A spelled-out chord lists its syllables with `و`:** `دو ومي وصول`.
- **A note name never takes the article.** `الدو` reads stiff to a learner: `اعزف دو`, `من دو إلى صول`.
- **A letter that code checks,** such as a quiz answer, stays the catalog's own.

## 8. Numbers

- **Digits are Western:** `3`, never `٣`. Microsoft § 4.1.12 asks for them as "standard almost all over the
  Arab World". Android, Firefox and the music apps write them.
- **`Intl` formats every number for `ar`,** whose CLDR default writes Western digits: `1,234.5`. No
  separator is set by hand. `ar-EG` and `ar-SA` would write `١٬٢٣٤٫٥`, so the row never names a region.
- **A percent sign follows its number without a space:** `80%`. Microsoft § 4.1.15 asks it, and `Intl`
  writes it so, with its own direction marks.
- **Fingers, octaves, bars, beats and lessons keep their digits:** `المازورة 3`, `الإصبع 3`, `الدرس 5`.
- **Arabic has six plural forms:** `zero`, `one`, `two`, `few`, `many` and `other`. A counted message
  gives all six, and `Intl.PluralRules` picks one.

| Form | `n` | The shape | Example |
|---|---|---|---|
| `zero` | 0 | `لا` and the plural, without the digit | `لا دروس بعد` |
| `one` | 1 | the noun and `واحد`, without the digit | `درس واحد` |
| `two` | 2 | the dual, without the digit | `درسان` |
| `few` | 3 to 10, and 103 to 110 | the digit and the plural | `3 دروس` |
| `many` | 11 to 99, and 111 to 199 | the digit and the singular with tanween | `11 درسًا` |
| `other` | 100, 101, 102 | the digit and the singular | `100 درس` |

- **Microsoft § 4.1.12 sets the first three rows:** `لا يوجد طلاب`, `طالب واحد`, `طالبان`.
- **The dual changes with its case:** `درسان` as a subject, `درسين` after a preposition. A message picks
  the case its sentence needs.
- **A count from 3 to 10 is a digit, never a word,** since the word's gender runs against its noun. A
  learner reads `3 دروس` without that trap.
- **"X of Y" is `X من Y`** in every counter: `3 من 8`. The noun follows `Y` in the form `Y` takes.
- **An ordinal in prose is a word:** `المازورة الأولى`, `الإصبع الثالث`. Beside a digit, the noun comes
  first: `المازورة 3`.
- **A time signature is printed as figures:** `3/4`. It stays left to right, so a message isolates it.
- **A range is written with words:** `من 1 إلى 4`. A dash between digits would reorder in a right-to-left
  line.

## 9. Marks

Each rule has its pattern in the `ar` entry of `src/i18n/typography.ts`. The rules test reads a text
with each kept word written as `X`.

| Rule | Pattern (`mustNot`) |
|---|---|
| A comma is `،`. A Latin comma stands only inside a number. | `(?<!\d),\|,(?!\d)` |
| A semicolon is `؛`. | `;` |
| A question ends with `؟`. | `\?` |
| No space stands before `،`, `؛`, `؟`, `!`, `:`, `.` or `%`. | `\s[،؛؟!:.%]` |
| A space follows `،` and `؛` before the next word. | `[،؛](?=\p{L})` |
| A quote stands in `« »`. Never straight or curly double quotes. | `["“”„]` |
| Digits are Western. | `[٠-٩۰-۹]` |
| No tatweel stretches a word. | `ـ` |
| The tanween of the accusative sits on the letter before the alef: `جدًا`. | `اً` |
| An ellipsis is the one character `…`. | `\.\.\.` |
| A range between digits takes words, never a dash. | `\d\s?[-–—]\s?\d` |

- **The period, `!` and `:` are the Latin ones,** as Arabic prints them. Microsoft § 4.1.14 sets the
  spaces: none before, one after.
- **`« »` mark a quote and a name the learner looks for:** `اضغط على «تشغيل».` Arabic Wikipedia's prose
  uses them. Microsoft and Android use straight quotes, and § 12 says why this guide does not.
- **A counted beat stands in `« »`:** `عدّ «1، 2».`
- **The "and" of a count is `و`:** `«1 و 2 و»`.
- **No tashkeel is written,** as Microsoft § 4.1.7 asks, but where a word would be ambiguous without it.
  Then it marks only the letter that settles it.
- **The usual cases of needed tashkeel:** the passive's damma, `تُعزف`; the shadda of `غيّر`, which
  would read as "other"; the shadda of `تعذّر`, as Android prints it; and `عدّ`, which would read as "return".
- **The tanween of the accusative is written:** `قليلًا`, `معًا`, `حسنًا`. Android and Microsoft print it.
- **The hamza is always written** on an alef that carries one: `أنت`, `إعدادات`, `إلغاء`.
- **Final `ي` keeps its dots,** and `ى` stands only where the word ends in alef maqsura: `التالي`, `إلى`.
- **An em dash is avoided.** A comma, parentheses or a new sentence take its place.
- **Emphasis is bold, never italic.** An Arabic font has no true italic, and a slanted one reads badly.
- **No text uses `letter-spacing`,** since it breaks the joined letters. `src/ui/tokens.css` sets it to
  zero under `:lang(ar)`.

## 10. Length

Arabic runs about as wide as English, and a verbal noun label is often shorter. An Arabic line needs more
height for its dots and marks. `src/ui/tokens.css` sets the Arabic font stack and line heights.

| Long | Short, for a label |
|---|---|
| دواسة الحفاظ | الدواسة |
| لوحة مفاتيح الحاسوب | لوحة المفاتيح |
| أيام التمرين المتتالية | أيام متتالية |
| سرعة التشغيل | السرعة |
| تكرار المقطع | تكرار |
| تمرين على تمييز النغمات | تمييز النغمات |

- **A label stays a phrase, never a clipped word.** `فتح الأغنية` may become `فتح`.
- **A word never breaks across a line.** Arabic takes no hyphen, so a text needs no soft hyphen.

## 11. Calibration

Each row is the chosen translation, and why it beat the next best one.

| Kind | English | Arabic | Why it beat the next best |
|---|---|---|---|
| Button | Continue | متابعة | Android's label. `التالي` is *Next*, so it stays free for that. |
| Transport tooltip | Play or pause | تشغيل أو إيقاف مؤقت | `تشغيل` is the playback word. `عزف` would mean playing the piano. |
| Tooltip | Loop the bars set in the settings | تكرار الموازير المحددة في الإعدادات | A verbal noun phrase, as Microsoft asks of a tooltip. `كرر` would give it a gender. |
| Setting and help | Wait for your notes / The song stops at each of your notes until you hold every key of it. | انتظار نغماتك / تتوقف الأغنية عند كل نغمة من نغماتك حتى تُضغط مفاتيحها كلها. | The song is the subject, and the passive leaves the learner without a gender. |
| Error | Your browser refused to save. Nothing changed. | تعذّر الحفظ في المتصفح. لم يتغير شيء. | Android's `تعذّر` names the failure. `رفض متصفحك` gives the browser a will. |
| Toast | A new version is ready. | إصدار جديد جاهز. | `إصدار` is the app word. `نسخة` is kept for a song's version. |
| Dialog | Reset all progress? / Are you sure? | إعادة ضبط كل التقدم؟ / هل تريد ذلك فعلًا؟ | The title is a verbal noun. The question falls back to the masculine of § 4. |
| Counter | 3 of 8 lessons | 3 من 8 دروس | The order Arabic counts in. `3 / 8` reads as a fraction. |
| Streak | 3-day streak | 3 أيام متتالية | Short and everyday. `سلسلة من 3 أيام` is a calque. |
| Feedback | Right! | صحيح! | A teacher's word. `إجابة صحيحة!` reads like an exam sheet. |
| Greeting | Hi, I'm your piano teacher. Shall we play? | أهلًا! أنا هنا لأعلمك العزف على البيانو. هل نبدأ؟ | No noun names the teacher. `معلمك` would make the teacher a man. |
| Badge | Night owl / Finish a lesson at 10 at night or later. | بومة الليل / إكمال درس في الساعة 10 ليلًا أو بعدها. | `بومة الليل` keeps the joke for anyone. The condition is a verbal noun, so it has no gender. |
| Joke | Quality control is a cat that walks over the keys now and then. | مراقبة الجودة قطة تمشي على المفاتيح من حين لآخر. | The cat is the subject, and the deadpan stays. |
| Level up | Level up! / Every lesson takes you further. Keep going! | مستوى جديد! / كل درس يأخذك خطوة إلى الأمام. لنواصل! | `مستوى جديد` reads as a game. `لنواصل` invites without a gender. |
| Lesson explanation | The right pedal is the sustain pedal. While it is down, every note keeps sounding after you let go of its key. | الدواسة اليمنى هي دواسة الحفاظ. ما دامت مضغوطة، يبقى صوت كل نغمة مسموعًا بعد رفع الإصبع عن مفتاحها. | `بعد رفع الإصبع` is a verbal noun, so the learner has no gender. |
| Lesson instruction | Your turn. Put your right thumb on middle C and play C and E together. | دورك الآن. ضع إبهام يدك اليمنى على دو الوسطى، واعزف دو ومي معًا. | Two imperatives, as a teacher says them. § 4 names their form. |
| Quiz | How many black keys are in the smaller group? / One, Two, Three, Four | كم مفتاحًا أسود في المجموعة الصغرى؟ / واحد، اثنان، ثلاثة، أربعة | Each answer is a bare number word, as a learner says it aloud. |
| Rhythm | Count "1-2" for each half note. | مع كل بيضاء، عدّ «1، 2». | `بيضاء` is the note's name in Arabic notation. The shadda keeps `عدّ` from reading as "return". |
| Guide, about | Beethoven wrote this tune for the last movement of his Ninth Symphony, first played in Vienna in 1824. | كتب بيتهوفن هذا اللحن للحركة الأخيرة من سيمفونيته التاسعة، التي عُزفت أول مرة في فيينا عام 1824. | The composer and the city take their Arabic names. The passive's damma keeps `عُزفت` clear. |
| Guide, tricky bar | Look before you jump. | انظر قبل القفز. | Short and imperative, as the English is. `قبل أن تقفز` adds a second verb of the learner. |
| Mode name | Free jam | عزف حر | An invitation, as the course's free play is. `جلسة ارتجال` reads like jazz class. |

## 12. Sources

- **Microsoft Arabic Style Guide,** `aka.ms/arabic-styleguide`, written for `ar-SA`. It settled the
  second person, the imperative over `قم ب`, verbal nouns in tooltips, the gender rules and the plain
  words. It settled the spaces around marks, the `؟`, the tashkeel, the Western digits and zero, one and
  two in a count.
- **Its straight quotes are not followed.** A teacher's prose reads native with `« »`, as Arabic
  Wikipedia and the Arabic press print it. One pair is also simpler to keep and to test.
- **Its imperative for an instruction is followed in lessons and guides,** and its verbal nouns in labels
  and tooltips. Its page 13 asks for verbal nouns in every instruction, which reads like a manual.
- **Android's framework strings,** `values-ar`. They settled the verbal noun labels, `تعذّر`, `متابعة`,
  `تم`, `حسنًا`, `اضغط على`, the masculine singular as the generic form and the Western digits.
- **Firefox's Arabic strings,** `mozilla-l10n/firefox-l10n`. They confirmed the masculine singular, the
  Western digits, `ملء الشاشة`, `داكن` and `فاتح`.
- **CLDR 48,** through `Intl`. It settled the Western digits of `ar`, the six plural forms and the percent sign.
- **Arabic Wikipedia's music articles,** each named in the glossary. They settled the solfège, `دييز`,
  `بيمول`, `بيكار`, the note values, `مازورة`, `نبضة`, `دليل المقام`, `تآلف` and `أوكتاف`. Many of its
  articles are stubs.
- **MuseScore's Arabic strings,** `musescore_ar.ts`. They are the second source for the terms of
  notation: `مدرّج`, `مفتاح صول`, `مازورة`, `سكتة`, `رباط`, `دييز`, `بيمول`, `ترقيم الأصابع`.
- **The Arabic strings of *Ukulele Companion* and *Metronome*,** on GitHub. They confirmed `الميزان`,
  `نبضة`, `أوكتاف`, `السلم`, `قلب`, `متتالية` and `المترونوم`. *Ukulele Companion* may be machine-assisted,
  so no term rests on it alone.
- **No Arabic piano method or school music book was reached.** No search engine answered, and wikiHow's
  Arabic pages refuse agents.

## Open

- No Arabic piano method was reached. An Arab piano teacher's read would confirm the note values,
  `نصف بعد`, `دواسة الحفاظ`, the finger names and `قوس الوصل`.
- **The note values are the classic names,** `مستديرة`, `بيضاء`, `سوداء`. *Ukulele Companion* writes
  `كاملة`, `نصفية`, `ربعية`, and a teacher may prefer them for a child.
- **A chord is `تآلف`, as Arabic Wikipedia titles it.** Its body text says `كورد` more often, and some
  teachers may prefer it.
- Many terms rest on one source or none, as the glossary marks them. Each is the everyday word, chosen
  over a coinage no learner says.
