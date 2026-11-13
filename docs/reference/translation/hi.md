# Hindi: the style guide and glossary

Every writer and reviewer of a Hindi text reads this file whole first. The method is
[translation.md](../../agent/translation.md), and this file adds only what is Hindi. The machine's half
of these rules is the `hi` entry of `src/i18n/typography.ts`.

## 1. Variant and readers

- **The variety is standard Hindi in Devanagari.** Pages carry `lang` `hi`, and `Intl` formats for
  `hi-IN`. The locale table's row says so, and this guide confirms it.
- **The register is the everyday one of Indian apps.** Microsoft's guide § 2.1 asks for "everyday
  conversation, rather than the formal, technical language".
- **The readers are beginners of every age** in India, children and adults, who learn piano alone in a
  browser. Many of them know English words of music, but not their Sanskrit coinages.
- **A common English loanword is written in Devanagari** where Indians say it: `नोट`, `कॉर्ड`, `स्केल`,
  `फ़ाइल`. Learner-facing Hindi music texts use these loanwords, and Hindi Wikipedia's theory pages do too.
- **A heavy Sanskritized coinage is never used.**

| Avoid | Write | Why |
|---|---|---|
| पुनः प्रयास करें | फिर से कोशिश करें | Microsoft § 2.1.1 and Android |
| परिवर्तित करें | बदलें | Microsoft § 2.1.1 |
| चयन करें | चुनें | Microsoft § 2.1.1 and Android |
| अतः | इसलिए | Microsoft § 2.1.1 |
| पूर्वावलोकन | झलक | Android; the Microsoft term reads formal |
| निर्यात करें | एक्सपोर्ट करें | the everyday word in apps |
| सप्तक for an octave | ऑक्टेव | `सप्तक` names Hindustani music's register of seven svaras |
| ताल for a beat | बीट | `ताल` names a Hindustani rhythm cycle |
| स्वर for a note | नोट | `स्वर` is a sargam svara to most readers |
| की for a piano key | कुंजी | `की` is also the postposition, so `C की` would blur |
| पूर्ण स्वर, अर्ध स्वर | होल नोट, हाफ़ नोट | the Sanskritized note values read like a textbook from nowhere |
| पदिक | पेडल | Hindi Wikipedia's coinage, which no learner says |

## 2. Address

- **The learner is `आप`, never `तुम` or `तू`.** Every example of Microsoft's guide uses `आप`, and
  Android's Hindi settings use it 124 times and `तुम` never.
- **Write `आप अपने`, never `आप आपके`.** Microsoft § 4.1.11 names it a common error.
- **An instruction is the polite imperative in `-एँ` or `-ें`:** `चुनें`, `दबाएँ`, `बजाएँ`, `सुनें`. Microsoft
  § 4.1.14 and Android both use it. The forms `चुनिए` and `चुनो` are never used.
- **A button or a menu item is the same imperative, or a short noun:** `खोलें`, `जारी रखें`, `सेटिंग`.
- **A setting's name is a noun phrase,** and its help text is a plain sentence about what it does.
- **A question to the learner starts with `क्या`:** `क्या आप यह पाठ छोड़ना चाहते हैं?` See § 4 for its verb.
- **An error is passive and impersonal,** as Microsoft § 5.4.2 asks. It names what failed, never the
  learner's mistake: `सेव नहीं किया जा सका।`
- **One verb serves a button, a piano key and a computer key: `दबाएँ`.** It holds for a tap, a click and
  a press alike. Picking one item from several is `चुनें`.
- **`कृपया` is rare.** The polite imperative is polite already. A teacher's warmth sits in the wording,
  with `चलिए` or `अब` where it fits: `चलिए, फिर से सुनते हैं।`

## 3. Voice

Warm, plain and short, as a good teacher speaks. Prefer the everyday word: `कोशिश` over `प्रयास`,
`मदद` over `सहायता`, `शुरू करें` over `आरंभ करें`, `इस्तेमाल` over `उपयोग` in speech-like texts.

| English | Hindi | Why it reads warm and plain |
|---|---|---|
| Hi, I'm your piano teacher. Shall we play? | नमस्ते! मैं आपका पियानो टीचर हूँ। चलिए, बजाना शुरू करें? | `चलिए` invites, as the English does. `टीचर` and `हूँ` carry no gender. |
| Not quite. Try again. | बस थोड़ा-सा चूक गए। फिर से कोशिश करें। | `थोड़ा-सा` softens the miss. `फिर से कोशिश करें` is Android's own form. |
| Every lesson takes you further. Keep going! | हर पाठ आपको एक कदम आगे ले जाता है। ऐसे ही बढ़ते रहिए! | The lesson is the subject, so no verb agrees with the learner. |

The second row's `चूक गए` is the honorific plural of § 4, which is how a teacher speaks to `आप`.

"Well done." is `बहुत बढ़िया।` in every lesson, with the danda of the calm English.

## 4. Gender

Hindi verbs, participles and many adjectives agree with the gender of their subject. The text keeps the
learner's gender out by choosing a form that agrees with something else. Microsoft § 3.1 asks for the same.

- **First, the imperative or the infinitive:** `दबाएँ`, `बजाना सीखें`. Neither agrees with anyone.
- **Second, the ergative past with `आपने`:** `आपने पाठ पूरा किया।` The verb agrees with `पाठ`.
- **Third, a noun or a thing as the subject:** `यह पाठ पूरा हुआ!`, not `आप पूरा कर चुके हैं।`
- **Fourth, `सकना` or `होना` on a thing:** `यहाँ से गाना चुना जा सकता है।`
- **Where none fits, the honorific plural:** `आप … रहे हैं`, `आप … चाहते हैं`, `आप … गए`. With `आप`,
  this masculine plural form is the standard address. Indian apps use it for every reader.
- **Never a split form** such as `सकता/सकती` or `गया/गई`. Microsoft § 3.1 forbids it.
- **No word for a person carries an age or a gender:** never `बेटा`, `बच्चे` or `दोस्त` for the learner.
- **The teacher has no gender either.** `मैं आपका टीचर हूँ` agrees with `आप` alone, and the teacher never
  says `गया` or `गई` of itself.
- **A composer named in a guide keeps the pronoun their sources use,** since a guide states facts.

## 5. Terms

One term per idea, in every file. Sources: WP is Hindi Wikipedia, by article title. MB is Music Blocks'
Hindi strings, an educational music app. SE is the Hindi strings of *singing-experience*. MT is the
Hindi metronome app *Metronome* by Kr0oked. MS is Microsoft's Hindi style guide or its terminology
collection. AN is Android's `values-hi` strings.

### The piano glossary

| English | Hindi | Sources |
|---|---|---|
| key (of the piano) | कुंजी, plural कुंजियाँ | WP *पियानो*; MS *key* |
| white key, black key | सफ़ेद कुंजी, काली कुंजी | WP *पियानो*; the harmonium's `सफेद तथा काली` keys on sangeetgyan.com |
| keyboard (the piano's, or a MIDI one) | कीबोर्ड | WP *कीबोर्ड उपकरण*; SE |
| note (a sound, or a written sign) | नोट, plural नोट | WP *स्वर-संगति*; MB |
| middle C | मध्य C | WP *पियानो* writes `मध्य स्वर सी`; BingeStudy writes `मध्य C` |
| octave | ऑक्टेव | MB; SE |
| half step, whole step | सेमीटोन, टोन | WP *स्वर-संगति*, one source; `टोन` is unsourced |
| sharp, flat (the signs) | शार्प, फ़्लैट | MB; WP *ब्लूज़* |
| accidental | शार्प या फ़्लैट का चिह्न | the course's own phrase, unsourced |
| staff | स्टाफ़ | WP *स्वरलिपि*; MB |
| grand staff | ग्रैंड स्टाफ़ | MB, one source |
| treble clef, bass clef | ट्रेबल क्लेफ़, बेस क्लेफ़ | BingeStudy; MB writes `ट्रेबल`, `बास` |
| ledger line | लेजर लाइन | unsourced, the English term |
| line, space (of the staff) | लाइन, feminine; स्पेस, masculine | unsourced, the English terms, as `लेजर लाइन` |
| step, skip (on the staff) | कदम, छलाँग, as on the keys | follows the nouns' row below |
| landmark (a note read at a glance) | पहचान वाला नोट | the course's own term, defined where it first appears |
| bar | माप: `माप 3`, `तीसरा माप` | MB; the Piano-LED-Visualizer strings. `बार` is avoided, since it also means "time" |
| bar line | माप रेखा | follows `माप`, unsourced |
| time signature | टाइम सिग्नेचर | unsourced; `ताल चिह्न` and `समय स्वर चिह्न` are rare coinages |
| beat (one count of a bar) | बीट, feminine: `हर माप में तीन बीट`, `आधी बीट` | WP *ब्लूज़*; MB; MT |
| hold for two beats; through the next beat | दो बीट तक दबाए रखें; अगली बीट पूरी होने तक | the course's own terms. `अगली बीट तक` alone reads as until it starts |
| the beat (the steady pulse) | बीट | as above |
| three-four time | 3/4 टाइम | follows `टाइम सिग्नेचर` |
| count-in | शुरुआती गिनती | everyday word, unsourced |
| rhythm | लय | WP *लय*; WP *धुन* |
| tempo | टेम्पो | MB; MT |
| metronome | मेट्रोनोम | WP *तालमान*; MB; MT |
| whole, half, quarter note | होल नोट, हाफ़ नोट, क्वार्टर नोट | MB, one source; the English names as Indian learners say them |
| eighth, sixteenth note | एट्थ नोट, सिक्सटींथ नोट | follows the row above |
| dotted | डॉटेड: `डॉटेड हाफ़ नोट` | follows the row above, unsourced |
| rest; quarter rest | रेस्ट; क्वार्टर रेस्ट | unsourced. A hand that rests `आराम करता है` |
| on the beat | बीट पर | everyday words |
| tie | टाई | unsourced, the English term |
| slur | स्लर | unsourced, the English term |
| repeat sign | रिपीट का चिह्न | unsourced |
| first, second ending | पहला अंत, दूसरा अंत | unsourced |
| first, second time through | पहली बार, दूसरी बार | everyday words |
| pickup, upbeat | पिकअप: `पिकअप नोट` | unsourced, the English term |
| syncopation | सिंकोपेशन | unsourced, the English term |
| scale | स्केल | WP *ब्लूज़*; MB; SE |
| major, minor | मेजर, माइनर | WP *ब्लूज़*; MB; SE |
| key (of a song) | स्केल: `यह गाना G मेजर स्केल में है` | the everyday Indian use, unsourced; see *Open* |
| key signature | की सिग्नेचर, feminine | unsourced, the English term |
| scale degree | डिग्री: `पाँचवीं डिग्री` | unsourced |
| chord | कॉर्ड | WP *स्वर-संगति*; MB; SE |
| triad; major, minor triad | ट्रायड; मेजर ट्रायड, माइनर ट्रायड | WP *स्वर-संगति* writes `प्रमुख त्रय`, which this guide does not follow |
| root | रूट नोट | unsourced, the English term |
| inversion; root position | इनवर्ज़न; रूट पोज़िशन | unsourced, the English terms |
| G seventh (chord) | G7 कॉर्ड | follows `कॉर्ड` |
| broken chord | ब्रोकन कॉर्ड | follows `कॉर्ड` |
| arpeggio | आर्पेजियो | unsourced, the Italian term |
| Alberti bass, waltz bass | अल्बर्टी बेस, वाल्ट्ज़ बेस | the course's own terms |
| bass note | बेस नोट | follows `बेस क्लेफ़` |
| third, fourth, fifth, sixth | थर्ड, फ़ोर्थ, फ़िफ़्थ, सिक्स्थ | WP *स्वर-संगति* writes `मेजर थर्ड` |
| seventh | सेवेंथ | follows the row above |
| major third, minor third | मेजर थर्ड, माइनर थर्ड | WP *स्वर-संगति*; WP *ब्लूज़* |
| open fifth | ओपन फ़िफ़्थ | follows the row above |
| step, skip (between keys) | बगल वाली कुंजी पर जाना, एक कुंजी छोड़कर जाना | everyday words |
| a step, a skip, a leap (nouns) | कदम, छलाँग, बड़ी छलाँग | everyday words; a lesson defines each by the row above |
| tune, melody | धुन | WP *धुन*; MB |
| phrase | धुन का टुकड़ा | everyday words, unsourced |
| call and answer (phrases) | सवाल-जवाब | everyday word, unsourced |
| pattern (of notes) | पैटर्न | everyday word |
| verse, chorus | अंतरा, मुखड़ा | the words of Indian song, unsourced |
| coda | कोडा | unsourced, the Italian term |
| dynamics | आवाज़ का ज़ोर | everyday words; WP *संगीत सिद्धांत*'s `गतिकी` is not followed |
| loud, soft | ज़ोर से, हल्के से | everyday words. `धीरे` means slow, so it never means soft |
| legato | लेगाटो | unsourced, the Italian term |
| staccato | स्टैकाटो | unsourced, the Italian term |
| crescendo, diminuendo | क्रेशेंडो, डिमिन्यूएंडो | MB, one source |
| hairpin | हेयरपिन चिह्न | unsourced |
| mark (p, f, rit.) | चिह्न | WP *संगीत सिद्धांत* |
| fermata | फ़र्माटा | unsourced, the Italian term |
| hold (a fermata's note) | खींचना: `नोट को थोड़ा देर तक खींचें` | everyday word. `रोकना` reads as stop |
| hold (the pedal holds the notes) | थामना: `पेडल नोटों को थामे रखता है` | everyday word. `रोकना` reads as stop |
| fast, slow (tempo); speed up | तेज़ स्पीड से, धीमी स्पीड से; स्पीड बढ़ाना | everyday words. `तेज़` alone also means loud, so tempo takes `स्पीड` |
| slow down, back in time | धीरे-धीरे धीमा करना, फिर पहले वाली गति | everyday words |
| turn (ornament) | टर्न | unsourced, the English term |
| double notes | डबल नोट | unsourced |
| stride (the bass style) | स्ट्राइड बेस | unsourced, the English term |
| a run (fast notes) | तेज़ नोटों की लड़ी | the guides' own term |
| two quick notes, a group of quick notes | दो छोटे नोट, छोटे नोटों का समूह | the guides' own term. `तेज़ नोट` alone can read as loud |
| a slow waltz, a fast galop (the dance, not a tempo) | धीमा वाल्ट्ज़, तेज़ गैलप | everyday words. A dance's kind takes no `स्पीड` |
| a stab (a short, hit chord) | छोटा कॉर्ड, or just `कॉर्ड` | a coinage such as `झटकेदार कॉर्ड` reads as made up |
| sustain pedal | सस्टेन पेडल; `दायाँ पेडल` in a lesson | WP *पियानो* names the right pedal; the Piano-LED-Visualizer strings say `पेडल` |
| soft pedal | सॉफ़्ट पेडल; `बायाँ पेडल` in a lesson | follows the row above |
| press a pedal, lift it | पेडल दबाएँ, पेडल छोड़ें | the plain verbs of a foot |
| fingering | फ़िंगरिंग | unsourced, the English term |
| finger numbers | 1 अँगूठा, 2 तर्जनी, 3 मध्यमा, 4 अनामिका, 5 छोटी उँगली | the everyday names of the fingers |
| right hand, left hand | दायाँ हाथ, बायाँ हाथ; `दाएँ हाथ से` | the Piano-LED-Visualizer strings; sangeetgyan.com |
| hand position; C position | हाथ की पोज़िशन; C पोज़िशन | the course's own term, unsourced |
| hand shape | हाथ का आकार | everyday words |
| thumb under, finger over | अँगूठा नीचे से ले जाना, उँगली ऊपर से ले जाना | the course's own terms, unsourced |
| lift (a finger, a key) | उठाना | everyday word |
| land (on a key, a beat) | पर पहुँचना | everyday word |
| jump, climb, slide | छलाँग लगाना, ऊपर चढ़ना, खिसकना | everyday words |
| stretch, spread (the hand) | फैलाना | everyday word |
| roll (a chord) | कॉर्ड को नीचे से ऊपर बिखेरकर बजाना | the guides' own term |
| rock (between two keys) | दो कुंजियों के बीच आगे-पीछे बजाना | everyday words |
| wrist | कलाई | everyday word |
| let ring | आवाज़ गूँजने दें | everyday words |
| fingertips | उँगलियों के सिरे | everyday words |
| by feel | छूकर | everyday word |
| sight-reading | साइट-रीडिंग | unsourced, the English term |
| ear training | सुनकर पहचानने का अभ्यास | everyday words, unsourced |
| play (the piano, a key, a note) | बजाना | WP *पियानो*; SE |
| practise | अभ्यास करना | MB; MT; the Piano-LED-Visualizer strings |
| song; piece | गाना; रचना | everyday word; WP *लुडविग वान बीथोवेन* |
| sheet music | शीट म्यूज़िक | the Piano-LED-Visualizer strings write `शीट`; WP's `स्वरलिपि` names Indian notation |
| pitch | पिच | WP *पियानो*; WP *सप्तक* |
| transpose | ट्रांसपोज़ करना | unsourced, the English term |
| stem, note head | स्टेम, नोट हेड | unsourced, the English terms |
| piano bench | पियानो की बेंच | everyday words |
| at full speed; at three-quarter speed | पूरी स्पीड पर; तीन-चौथाई स्पीड पर | the guides' own terms |
| waltz | वाल्ट्ज़ | unsourced, the English term |
| carol; sea shanty; jig | कैरल; नाविकों का गीत; जिग | WP *कैरल*; the others unsourced |
| suite, symphony, sonata, concerto | सुइट, सिम्फ़नी, सोनाटा, कॉन्सर्टो | WP *स्वर-संगति*, *सिंफनी*, *लुडविग वान बीथोवेन* |
| movement, overture, variation | मूवमेंट, ओवरचर, वेरिएशन | WP *सिंफनी*'s `गति` clashes with tempo, so the loanwords win |
| march, hymn, lullaby, nocturne | मार्च, ईसाई स्तुति-गीत, लोरी, नॉक्टर्न | WP *लोरी*; `भजन` names a Hindu song, so it is never a hymn |
| aria, tone poem, hornpipe, galop | आरिया, टोन पोएम, हॉर्नपाइप, गैलप | unsourced, the European terms |
| attack, decay, sustain, release | अटैक, डिके, सस्टेन, रिलीज़ | the terms of synthesizers |

### The interface glossary

| English | Hindi | Sources |
|---|---|---|
| Settings | सेटिंग | AN; MS writes `सेटिंग्स` |
| Songs (the library's panel); library | गाने; गानों की लाइब्रेरी | the app's own term |
| Open, Close, Cancel | खोलें, बंद करें, रद्द करें | MS; AN |
| Back, Next, Continue | वापस जाएँ, आगे बढ़ें, जारी रखें | MS; AN |
| OK, Done | ठीक है, हो गया | MS; AN |
| Skip | छोड़ें | MS; AN writes `अभी नहीं` for one prompt |
| Reset | रीसेट करें | MS; AN |
| Save | सेव करें | AN; MS writes `सहेजें`, which reads formal |
| Delete; Remove | मिटाएँ; हटाएँ | AN; MS gives `हटाएँ` for both, and the two acts differ here |
| Restore (a backup) | वापस लाएँ | AN; MS writes `पुनर्स्थापित करें`, a heavy coinage |
| Search | खोजें | MS; AN |
| Play, Pause, Stop (playback) | चलाएँ, रोकें, बंद करें | MS; AN |
| Loop (button); a loop | लूप; लूप में चलाएँ | MS, one source |
| Speed | स्पीड; `प्लेबैक स्पीड` in help text | MS; AN |
| Volume, Mute | वॉल्यूम, म्यूट करें | AN; MS |
| Fullscreen | फ़ुल स्क्रीन | AN; MS writes `पूर्ण स्क्रीन` |
| Theme; Light, Dark, Like the system | थीम; लाइट, डार्क, सिस्टम जैसा | MS; AN. `सिस्टम जैसा` is unsourced |
| Language | भाषा | MS; AN |
| computer keyboard; computer key | कंप्यूटर कीबोर्ड; कीबोर्ड का बटन | MS; AN *बटन दबाएं*. A piano's key is `कुंजी`, so the two never blur |
| touch screen | टचस्क्रीन | AN; MS writes `स्पर्शस्क्रीन` |
| device; connect, disconnect | डिवाइस; कनेक्ट करें, डिसकनेक्ट करें | MS; AN |
| folder; file | फ़ोल्डर; फ़ाइल | MS; AN |
| browser | ब्राउज़र | MS; AN |
| offline | ऑफ़लाइन | MS, one source |
| Install, Update | इंस्टॉल करें, अपडेट करें | MS; AN |
| app | ऐप | MS; AN |
| Help, Tip | मदद, सलाह | MS *मदद*; AN *सलाह* |
| Try again | फिर से कोशिश करें | MS § 2.1.1; AN |
| tap, click or press a control | दबाएँ | MS *दबाएँ*; AN |
| press a computer key | दबाएँ: `Esc दबाएँ` | MS; AN |
| choose (one of several) | चुनें | MS § 2.1.1; AN |
| lesson, step, world | पाठ, चरण, दुनिया: `पाठ 3` | the course's own terms |
| quiz; demo | क्विज़; डेमो | everyday words |
| boss (a world's last lesson) | बड़ी चुनौती | the course's own term |
| skip test | आगे बढ़ने का टेस्ट | the course's own term |
| level; Level up! | लेवल; लेवल अप! | MS; AN |
| XP | XP, a kept word | the word of games |
| badge, achievement | बैज, उपलब्धि | MS |
| streak | लगातार दिन: `लगातार 3 दिन` | everyday words, unsourced |
| daily goal | रोज़ का लक्ष्य | everyday words, unsourced |
| score; points | स्कोर; पॉइंट | MS *स्कोर* |
| stars | स्टार | everyday word |
| take (one recorded play) | कोशिश | everyday word |
| Favourites | पसंदीदा | MS; AN |
| track (of a MIDI file) | ट्रैक | MS; AN |
| progress | प्रगति | everyday word, unsourced |
| backup | बैकअप | MS; AN |
| guide (a song's) | अभ्यास गाइड | the app's own term, unsourced |
| a setting; options | सेटिंग; विकल्प | MS; AN |
| the player (of songs) | प्लेयर | everyday word |
| Beginner, Easy, Medium, Hard, Advanced, Expert | शुरुआती, आसान, मध्यम, कठिन, एडवांस, एक्सपर्ट | the usual ladder of levels |
| Easy, Normal, Hard (a song) | आसान, सामान्य, कठिन | the usual ladder of levels |
| common, rare, epic, legendary (a version) | कॉमन, रेयर, एपिक, लेजेंडरी | the word of games in India |
| Perfect, Great, Good | परफ़ेक्ट, बढ़िया, अच्छा | the word of rhythm games |
| Wrong note, Too short, Too long, Late | गलत नोट, बहुत छोटा, बहुत लंबा, देर से | everyday words |
| free play; pitch practice | खुलकर बजाएँ; सुर पहचानने का अभ्यास | the course's own terms |
| hotkeys | कीबोर्ड शॉर्टकट | AN; MS |
| velocity (of a key) | ज़ोर | the same idea as dynamics |
| lane; timeline | लेन; टाइमलाइन | the player's own terms |
| hit, miss, mistake | सही नोट, छूटा नोट, गलत नोट | everyday words |
| colour; glow; particles | रंग; चमक; कण | everyday words |
| equaliser; reverb | इक्वलाइज़र; रीवर्ब | the terms of audio apps |
| camera; zoom; side view | कैमरा; ज़ूम; साइड व्यू | MS; AN |
| lyrics; bar numbers | बोल; माप संख्या | everyday word; follows `माप` |
| difficulty; length (of a song) | कठिनाई; अवधि | everyday words |
| record; preview; export | रिकॉर्ड करें; झलक; एक्सपोर्ट करें | MS; AN |
| filter; tag | फ़िल्टर; टैग | MS; AN |
| open source | ओपन सोर्स | MS, one source |
| guided course; play modes | गाइडेड कोर्स; बजाने के मोड | the app's own terms |
| scene; top bar; control bar | सीन; ऊपर की पट्टी; कंट्रोल पट्टी | the player's own terms |
| combo; multiplier; accuracy | कॉम्बो; मल्टीप्लायर; सटीकता | the word of rhythm games |
| range (of a keyboard) | रेंज | everyday word |
| click (of the metronome) | टिक | everyday word |
| hit line | हिट लाइन | the player's own term |
| hand crossing | हाथ क्रॉस करना | everyday words, unsourced |
| low, high band (of the equaliser) | लो, हाई | the terms of audio apps; never `बेस`, which names a note |
| scoring; a scored take | स्कोरिंग; स्कोर वाली कोशिश | the player's own term |
| error (a title) | गड़बड़ी | AN; MS writes `त्रुटि`, which reads formal |
| leave (a lesson, a page); skip | बाहर निकलें; छोड़ें | everyday words. `छोड़ें` also releases a key, never leaves a lesson |
| skill (a song's technique tag); a skill in general | तकनीक; हुनर | everyday words |
| folk tune; counter-melody | लोकधुन; साथ चलती दूसरी धुन | follow `धुन` |
| size; shape | साइज़; आकार | everyday words. `आकार` never means size |
| opacity | गाढ़ापन | everyday word. `चमक` is only *glow* |
| in key widths (a unit); per second | कुंजी-चौड़ाई में; कुंजी-चौड़ाई प्रति सेकंड में | the player's own unit. `कुंजी की चौड़ाई में` means *within* the width |
| a section named by an imperative, mid-sentence | `बस पियानो बजाएँ वाले हिस्से में` | so the name never reads as a verb |
| a guide's stock practice steps | see *A guide's recurring steps* below | the guides' own forms, one per English step |

### Which "play" is which

- **A key, a note, a song on the piano:** `बजाना`. `C और E एक साथ बजाएँ।`
- **Starting playback of a song:** `चलाना`. The transport's *Play* is `चलाएँ`.
- **A game or a mode:** `गेम`, and `गेम मोड` for *Game mode*.
- **A lesson's "Play again" that replays a demo:** `फिर से सुनें`, since the learner listens.
- **"Your turn":** `अब आपकी बारी।`

### A guide's recurring steps

The song guides repeat these steps word for word. Each English step has one Hindi text in every guide.
A step that only differs in its bars or its section follows the nearest row's shape.

| English | Hindi |
|---|---|
| Play the whole song with both hands at three-quarter speed. | दोनों हाथों से पूरा गाना तीन-चौथाई स्पीड पर बजाएँ। |
| Join the hands on the whole song at three-quarter speed. | दोनों हाथों से पूरा गाना तीन-चौथाई स्पीड पर बजाएँ। |
| Play the whole song with both hands at full speed. | दोनों हाथों से पूरा गाना पूरी स्पीड पर बजाएँ। |
| Play the whole song with both hands, a little slower than written. | दोनों हाथों से पूरा गाना, लिखी स्पीड से थोड़ा धीमा बजाएँ। |
| Now play it at full speed. | अब इसे पूरी स्पीड पर बजाएँ। |
| Now play it at full speed, with the pedal. | अब इसे पूरी स्पीड पर पेडल के साथ बजाएँ। |
| Now play it at full speed, and let the last chord ring. | अब इसे पूरी स्पीड पर बजाएँ, और आखिरी कॉर्ड की आवाज़ गूँजने दें। |
| Join the hands on the first eight bars, slowly. | पहले आठ माप दोनों हाथों से धीरे-धीरे बजाएँ। |
| Put both hands together on the first eight bars, slowly. | पहले आठ माप दोनों हाथों से धीरे-धीरे बजाएँ। |
| Put both hands together on the whole song, slowly. | दोनों हाथों से पूरा गाना धीरे-धीरे बजाएँ। |
| Put both hands together, slowly. | दोनों हाथों से धीरे-धीरे बजाएँ। |
| Join the hands on the first verse, slowly. | पहला अंतरा दोनों हाथों से धीरे-धीरे बजाएँ। |
| Join the hands on the first time through, slowly. | पहली बार वाला हिस्सा दोनों हाथों से धीरे-धीरे बजाएँ। |
| Join the hands on bars 9 to 16, slowly. | माप 9 से 16 तक दोनों हाथों से धीरे-धीरे बजाएँ। |
| Play the first four bars with the right hand alone, and let the song wait for each note. | पहले चार माप सिर्फ़ दाएँ हाथ से बजाएँ, और गाने को हर नोट पर आपका इंतज़ार करने दें। |
| Play the right hand alone on the first eight bars, and let the song wait for each note. | पहले आठ माप सिर्फ़ दाएँ हाथ से बजाएँ, और गाने को हर नोट पर आपका इंतज़ार करने दें। |
| Play bars 1 to 4 with the right hand alone, and let the song wait for each note. | माप 1 से 4 तक सिर्फ़ दाएँ हाथ से बजाएँ, और गाने को हर नोट पर आपका इंतज़ार करने दें। |
| Play the right hand alone, slowly, and let the song wait for each note. | सिर्फ़ दाएँ हाथ से धीरे-धीरे बजाएँ, और गाने को हर नोट पर आपका इंतज़ार करने दें। |
| Play the left hand alone, and press the notes of each chord together. | सिर्फ़ बाएँ हाथ से बजाएँ, और हर कॉर्ड के नोट एक साथ दबाएँ। |
| Now the left hand alone. It holds one shape for each bar. | अब सिर्फ़ बायाँ हाथ। हर माप में यह एक ही आकार में रहता है। |
| Play the Alberti bass alone until it rolls by itself: low, high, middle, high. | सिर्फ़ अल्बर्टी बेस बजाएँ, जब तक वह अपने-आप न बहने लगे: नीचे वाला, ऊपर वाला, बीच वाला, ऊपर वाला। |
| Keep the Alberti bass soft, so the tune sings above it. | अल्बर्टी बेस हल्के से बजाएँ, ताकि धुन उसके ऊपर गा सके। |
| Play the right hand's thirds and sixths alone, and press both notes of each pair as one. | सिर्फ़ दाएँ हाथ के थर्ड और सिक्स्थ बजाएँ, और हर जोड़ी के दोनों नोट एक साथ दबाएँ। |
| Play the right hand's thirds alone, and keep both notes of each pair together. | सिर्फ़ दाएँ हाथ के थर्ड बजाएँ, और हर जोड़ी के दोनों नोट एक साथ बजाएँ। |
| The tune is the top note of each pair, so let the upper finger lead. | हर जोड़ी का ऊपर वाला नोट ही धुन है, इसलिए उसे बजाने वाली उँगली को अगुवाई करने दें। |
| Play the right hand's chords alone, and let the top finger sing the tune. | सिर्फ़ दाएँ हाथ के कॉर्ड बजाएँ, और सबसे ऊपर वाली उँगली को धुन गाने दें। |
| Play the top note of each chord a little louder than the others. | हर कॉर्ड का सबसे ऊपर वाला नोट बाकी नोटों से थोड़ा ज़ोर से बजाएँ। |
| Play the stride bass alone: jump down for the octave, then back up for the chord. | सिर्फ़ स्ट्राइड बेस बजाएँ: ऑक्टेव के लिए नीचे छलाँग लगाएँ, फिर कॉर्ड के लिए वापस ऊपर आएँ। |
| Play the stride bass alone: jump down for the low octave, then back up for the chord. | सिर्फ़ स्ट्राइड बेस बजाएँ: नीचे वाले ऑक्टेव के लिए नीचे छलाँग लगाएँ, फिर कॉर्ड के लिए वापस ऊपर आएँ। |
| In stride, look at the low octave and let the hand find the chord by feel. | स्ट्राइड बेस में नीचे वाले ऑक्टेव पर नज़र रखें, और हाथ को कॉर्ड छूकर ढूँढ़ने दें। |
| Use the short rest after each octave and chord to jump to the next one. | हर ऑक्टेव और कॉर्ड के बाद के छोटे रेस्ट में अगले पर छलाँग लगाएँ। |
| Play the arpeggios of the second verse in the left hand alone. | दूसरे अंतरे के आर्पेजियो सिर्फ़ बाएँ हाथ से बजाएँ। |
| In each arpeggio, the third finger crosses over the thumb on the way up. | हर आर्पेजियो में ऊपर जाते समय तीसरी उँगली अँगूठे के ऊपर से जाती है। |
| Change the pedal on each new bass note, twice in every bar. | हर नए बेस नोट पर पेडल बदलें, यानी हर माप में दो बार। |
| Hold the pedal down for each whole bar, and change it right on the bar line. | हर माप में पूरे समय पेडल दबाए रखें, और ठीक माप रेखा पर उसे बदलें। |
| Up high, the octaves should ring like bells. Keep the wrist loose. | ऊपर वाले हिस्से में ऑक्टेव घंटियों की तरह गूँजने चाहिए। कलाई ढीली रखें। |

## 6. Kept words

- **Learn Piano Easy**, **MIDI**, **Web MIDI**, **MusicXML** and **XP** stay as they are.
- **Units and formats:** BPM, FPS, PDF, USB, Hz, kHz, dB, ms, KB, MB, px and 3D. Microsoft § 4.1.2
  keeps acronyms.
- **Technical names:** JavaScript, MIT, and a computer key such as Esc, Q or Z. Microsoft § 5.4.4 keeps
  key names in English. A Roman numeral of a chord, such as V7, stays too.
- **Product and site names:** GitHub, Matomo, Wikipedia, Wikimedia Commons, Mutopia, Chrome, Edge,
  Firefox and Safari. Microsoft § 5.2 leaves product names untranslated.
- **The printed marks of a score:** `p`, `mp`, `mf`, `f`, `pp`, `ff`, `rit.`, `rall.`, `cresc.`,
  `decresc.`, `dim.`, `a tempo` and `Ped.`
- **The Italian word behind a mark stays in Latin letters** where the English names it, such as `piano`,
  `forte`, `mezzo-piano` and `ritardando`. In Devanagari, `पियानो` would read as the instrument.
- **A technique's name is a Devanagari loanword,** as § 5 lists: `लेगाटो`, `स्टैकाटो`, `क्रेशेंडो`.
- **Catalog numbers:** `BWV 1068`, `K. 525`.
- **The note letters and chord symbols,** as § 7 says.
- **A song title stays in Latin letters,** without quotes. A title is data shared by every locale, and
  the library searches it. Indian readers meet English titles in Latin letters every day.
- **A composer with a Hindi Wikipedia article takes its spelling:** `बीथोवेन`, `मोत्सार्ट`, `बाख`,
  `चॉपिन`, `मेंडल्ससोन` and `वाग्नर`. A full name follows the article's title, such as `योहान सेबास्तियन बाख`.
- **A city or a country Indian news names takes its everyday Devanagari spelling,** such as `वियना`,
  `पेरिस` or `बोहेमिया`. A small town stays in Latin letters, such as Hexham or Olomouc.
- **A generic dance or form is a Devanagari loanword,** such as `हबानेरा`. A piece's title stays in
  Latin letters, such as Sarabande or Allegretto.
- **Bach is `बाख`, without the nukta of the article's `बाख़`,** since § 9 puts no nukta on `ख`. Many
  Hindi texts print the bare form.
- **Every other person's name stays in Latin letters,** since a guessed spelling would mislead. Debussy,
  Grieg, Satie, Schubert, Handel, Bizet, Brahms, Mahler, Ravel and Tchaikovsky have no Hindi article.
- **The sections "Learn Piano" and "Just Play Piano" are translated,** since they describe what a
  learner does. "Learn Piano" is `पियानो सीखें`, and "Just Play Piano" is `बस पियानो बजाएँ`. Neither takes quotes.
- **The worlds' titles are** पियानो से पहचान, पहली धुनें, लय, नोट पढ़ना, दोनों हाथ, स्केल, कॉर्ड and
  भाव से बजाना. `src/learn/course.ts` takes them when Hindi ships.
- The `kept` list of `src/i18n/typography.ts` holds each kept word a test could misread.

## 7. Note names

- **Notes are letters:** C D E F G A B, uppercase, in Latin letters. Hindi Wikipedia's *सप्तक* writes
  `C D E F G A B C`, and BingeStudy writes `मध्य C`.
- **A letter is never spelled out in Devanagari,** as `सी` or `जी`. `जी` is also the honorific, and the
  key labels show Latin letters.
- **Sargam, `सा रे ग म`, is never used.** It is movable, so it names no fixed key. Hindi Wikipedia keeps it
  for Indian music alone.
- **A sharp or a flat in running text is a word after the letter:** `F शार्प`, `B फ़्लैट`,
  `C शार्प माइनर`. This is how Indian learners read `F♯` aloud. No source wrote it, so see *Open*.
- **A name the screen shows,** such as `F♯4` on a key, keeps the form of `src/theory/note-names.ts`. A
  text that points at that label writes it the same way.
- **The octave number is scientific:** middle C is `C4`. A lesson names a note by its place, as the
  English does: `मध्य C`.
- **"Low C" is `नीचे वाला C`, and "high C" is `ऊपर वाला C`.** `ऊँचा` and `नीचा` would read as loud and soft.
  A note or a key named by its place takes `ऊपर वाला` or `नीचे वाला`. A sound's height is `ऊँची पिच` or
  `नीची पिच`. `ऊँचा` or `नीचा` never qualifies a note, a key or `आवाज़`.
- **A key is its letter and its quality:** `C मेजर`, `A माइनर`. A chord adds `कॉर्ड`: `C कॉर्ड`,
  `A माइनर कॉर्ड`.
- **A spelled-out chord lists its letters with commas:** `C, E और G`.
- **A note letter takes its postposition after a space:** `C पर`, `E से`, `G तक`.
- **A letter that code checks,** such as a quiz answer, stays the catalog's own.

## 8. Numbers

- **`Intl` formats every number for `hi-IN`:** `12,34,567.5`, grouped in lakhs. No separator is set by
  hand.
- **Digits are Western:** `3`, never `३`. CLDR's `hi-IN` writes them, and so do Microsoft's examples
  and Android's strings.
- **A percent sign follows its number without a space:** `80%`, as Microsoft and CLDR write it.
- **Fingers, octaves, bars, beats and lessons keep their digits:** `माप 3`, `उँगली 3`, `पाठ 5`.
- **A small count the English spells out is a Hindi word in prose:** `तीन कुंजियाँ`, `दो हाथ`.
- **An ordinal in prose is a Hindi word:** `पहला माप`, `तीसरी उँगली`. Beside a digit, the number follows
  its noun: `माप 3`.
- **Hindi has two plural forms, `one` and `other`.** `Intl` puts both 0 and 1 in `one`. So the `one`
  form must read well for zero too.
- **A counted noun that keeps its form is preferred,** such as `पाठ`, `दिन`, `नोट` or `स्टार`. Then both
  forms read alike: `0 पाठ`, `1 पाठ`, `5 पाठ`.
- **A form that changes picks by `n === 1`, where 0 can show.** Hindi says `0 गाने`, not `0 गाना`. So
  such a message tests for one itself, rather than calling `plural`.
- **Before a postposition, a counted noun takes its oblique plural:** `40 फ़ाइलों में से 12`.
- **"X of Y" is `Y में से X`** in every counter, such as `10 में से 3`.
- **A time signature is printed as figures:** `3/4`, read `तीन-चार`.

## 9. Marks

Each rule has its pattern in the `hi` entry of `src/i18n/typography.ts`. The rules test reads a text
with each kept word written as `X`.

| Rule | Pattern (`mustNot`) |
|---|---|
| A sentence ends with the danda `।`. An ASCII period stands only inside a number. | `(?<!\d)\.\|\.(?!\d)` |
| The double danda `॥` is never used. | `॥` |
| No space stands before `।`, `?`, `!`, `:`, `;`, `,` or `%`. | `\s[।?!:;,%]` |
| A quote stands in `“ ”`, with `‘ ’` inside. Never straight quotes or `« »`. | `["'«»]` |
| Digits are Western. | `[०-९]` |
| A nukta is the combining sign `़` after its letter, never a precomposed letter. | `[क़-य़]` |
| No nukta sits on `क`, `ख` or `ग`. | `[कखग]़` |
| A nasal vowel at a word's end takes the chandrabindu: `दबाएँ`, `यहाँ`, `हूँ`. | `(?:[एआऊ]\|ा\|ू)ं(?![\p{L}\p{M}])` |
| A range of numbers takes `–`: `माप 1–4`. | `\d-\d` |

- **The danda ends every sentence,** in a button's help, a lesson and a guide. Hindi Wikipedia's
  articles and the learner apps MB and SE use it.
- **Microsoft § 4.1.12 and Android's strings use the full stop instead.** This guide does not follow
  them. A teacher's prose reads native with the danda, and one mark is simpler to keep and to test.
- **`?` and `!` end a question and an exclamation,** with no danda after them.
- **The nukta goes on `ज़` and `फ़` in a loanword:** `फ़ाइल`, `ब्राउज़र`, `ज़ूम`, `फ़्लैट`. Microsoft § 4.1.12
  sets this rule, and Microsoft's terms and Android's strings follow it.
- **A Persian word Hindi prints with `ज़` or `फ़` keeps it:** `ज़ोर`, `ज़रूर`, `इंतज़ार`. A word with a plain
  `ज`, such as `जगह`, never takes one. `गलत` and `खास` stay bare, since `ग` and `ख` take no nukta.
- **`ड़` and `ढ़` are letters of Hindi, not nuktas on a loanword:** `पढ़ना`, `छोड़ें`.
- **The chandrabindu stands where the vowel is nasal,** as Microsoft § 4.1.12 asks: `जाएँ`, `दिखाएँ`,
  `कुंजियाँ`. Over a vowel sign that reaches above the line, `ें`, `ैं`, `ों` and `ीं` keep the dot, as
  Hindi prints them: `में`, `हैं`, `नोटों`.
- **An interface word the learner looks for stands in `‘ ’`:** `‘चलाएँ’ दबाएँ।` Microsoft § 2.2.4 does so.
- **A counted beat or syllable stands in `“ ”`:** `“1, 2” गिनें।`
- **The "and" of a count is `एंड`,** as the English says it: `“1 एंड 2 एंड” गिनें।`
- **An ellipsis is the one character `…`.** A progress message is passive: `फ़ोल्डर खोजा जा रहा है…`
- **An em dash is avoided,** as Microsoft § 4.1.12 asks. A comma, parentheses or a new sentence take
  its place.
- **Emphasis is bold, never italic.** Devanagari fonts have no true italic, and a slanted one reads badly.

## 10. Length

Hindi runs about as wide as English, and often a little wider. A Devanagari line also needs more height,
since matras reach above and below it. `src/ui/tokens.css` sets the Devanagari font stack.

| Long | Short, for a label |
|---|---|
| सस्टेन पेडल | पेडल |
| कंप्यूटर कीबोर्ड | कीबोर्ड |
| लगातार अभ्यास के दिन | लगातार दिन |
| प्लेबैक स्पीड | स्पीड |
| लूप में चलाएँ | लूप |
| सुर पहचानने का अभ्यास | सुर अभ्यास |

- **A label stays a phrase, never a clipped word.** `गाना खोलें` may become `खोलें`.
- **A button drops `करें` only where the noun alone is the everyday label,** as `सेटिंग` and `लूप` are.
- **A conjunct never breaks across a line.** The browser keeps a grapheme whole, so a text needs no
  soft hyphen.

## 11. Calibration

Each row is the chosen translation, and why it beat the next best one.

| Kind | English | Hindi | Why it beat the next best |
|---|---|---|---|
| Button | Continue | जारी रखें | Android's label. `आगे बढ़ें` is *Next*, so it stays free for that. |
| Transport tooltip | Play or pause | चलाएँ या रोकें | `चलाएँ` is the playback verb. `बजाएँ` would mean playing the piano. |
| Tooltip | Loop the bars set in the settings | सेटिंग में चुने गए माप लूप में चलाएँ | `चुने गए` is plain. `निर्धारित` would read like a manual. |
| Setting and help | Wait for your notes / The song stops at each of your notes until you hold every key of it. | आपके नोट का इंतज़ार / गाना आपके हर नोट पर रुकता है, जब तक आप उसकी सारी कुंजियाँ दबाकर न रखें। | The song is the subject, so no verb agrees with the learner. |
| Error | Your browser refused to save. Nothing changed. | ब्राउज़र में सेव नहीं किया जा सका। कुछ नहीं बदला। | Passive and impersonal, as Microsoft asks. `आपके ब्राउज़र ने मना कर दिया` gives the browser a will. |
| Toast | A new version is ready. | नया वर्शन तैयार है। | `वर्शन` is the app word. `संस्करण` reads like a book's edition. |
| Dialog | Reset all progress? / Are you sure? | क्या सारी प्रगति रीसेट करें? / क्या आप पक्का ऐसा करना चाहते हैं? | `क्या` asks plainly. The second uses the honorific plural of § 4. |
| Counter | 3 of 8 lessons | 8 में से 3 पाठ | The order of Hindi counters. `3 / 8 पाठ` reads like a fraction. |
| Streak | 3-day streak | लगातार 3 दिन | Short and everyday. `3 दिन की स्ट्रीक` is a calque. |
| Feedback | Right! | सही! | A teacher's word. `उचित!` reads like an exam sheet. |
| Greeting | Hi, I'm your piano teacher. Shall we play? | नमस्ते! मैं आपका पियानो टीचर हूँ। चलिए, बजाना शुरू करें? | `टीचर` has no gender. `शिक्षक` would make the teacher a man. |
| Badge | Night owl / Finish a lesson at 10 at night or later. | रात का उल्लू / रात 10 बजे या उसके बाद कोई पाठ पूरा करें। | `रात का उल्लू` keeps the joke and names no gender. `निशाचर` reads as a demon. |
| Joke | Quality control is a cat that walks over the keys now and then. | क्वालिटी की जाँच एक बिल्ली करती है, जो कभी-कभी कुंजियों पर चल देती है। | The cat is the subject, so the verbs agree with it. The deadpan stays. |
| Level up | Level up! / Every lesson takes you further. Keep going! | लेवल अप! / हर पाठ आपको एक कदम आगे ले जाता है। ऐसे ही बढ़ते रहिए! | `लेवल अप` is the word of games. `स्तर बढ़ा` reads like a system log. |
| Lesson explanation | The right pedal is the sustain pedal. While it is down, every note keeps sounding after you let go of its key. | दायाँ पेडल सस्टेन पेडल है। जब तक यह दबा रहता है, कुंजी छोड़ने के बाद भी हर नोट गूँजता रहता है। | `कुंजी छोड़ने के बाद` is an infinitive, so the learner has no gender. |
| Lesson instruction | Your turn. Put your right thumb on middle C and play C and E together. | अब आपकी बारी। दाएँ हाथ का अँगूठा मध्य C पर रखें, और C और E एक साथ बजाएँ। | Two polite imperatives, as a teacher says them. |
| Quiz | How many black keys are in the smaller group? / One, Two, Three, Four | छोटे समूह में कितनी काली कुंजियाँ हैं? / एक, दो, तीन, चार | Each answer is a bare number word, as a learner says it aloud. |
| Rhythm | Count "1-2" for each half note. | हर हाफ़ नोट पर “1, 2” गिनें। | `हाफ़ नोट` is what Indian learners say. `अर्ध स्वर` reads like a textbook. |
| Guide, about | Beethoven wrote this tune for the last movement of his Ninth Symphony, first played in Vienna in 1824. | बीथोवेन ने यह धुन अपनी नौवीं सिम्फ़नी के आखिरी मूवमेंट के लिए लिखी थी। यह पहली बार 1824 में वियना में बजाई गई। | The ergative `ने` lets the verb agree with `धुन`. The composer takes Hindi Wikipedia's spelling. |
| Guide, tricky bar | Look before you jump. | छलाँग लगाने से पहले देख लें। | Short and imperative, as the English is. |
| Mode name | Free jam | खुलकर बजाएँ | An invitation, as the course's free play is. `फ़्री जैम` would stay opaque. |

## 12. Sources

- **Microsoft Hindi Style Guide,** `aka.ms/hindi-styleguide`. It settled `आप`, the `-एँ` imperative,
  the gender rules, the passive errors, the nukta, the chandrabindu, `‘ ’` around UI words and the plain
  words. Its full stop is not followed, as § 9 says.
- **Microsoft Terminology Collection,** `HINDI.tbx`. It settled most interface terms beside Android.
- **Android's framework, Settings and SystemUI strings,** `values-hi`. They settled `सेव करें`, `मिटाएँ`,
  `हटाएँ`, `वापस लाएँ`, `हो गया`, `फिर से कोशिश करें` and `गड़बड़ी`, and confirmed Western digits.
- **CLDR,** through `Intl`. It settled the lakh grouping, the Western digits, the percent sign and the
  plural forms `one` and `other`.
- **Hindi Wikipedia's music articles,** each named in the glossary. Their coverage of Western theory is
  thin, and many are machine-translated stubs. They settled the letters, the danda, `धुन`, `लय`,
  `मेट्रोनोम` and the composers' spellings.
- **Music Blocks' Hindi strings,** `sugarlabs/musicblocks`, `locales/hi.json`. They are the second source
  for the loanwords of theory: `ऑक्टेव`, `स्केल`, `कॉर्ड`, `माप` and `बीट`. Some of their entries are wrong,
  so no term rests on them alone.
- **The Hindi strings of *singing-experience* and *Metronome*,** on GitHub. They read fluent, and
  confirmed `ऑक्टेव`, `टेम्पो`, `बीट` and `अभ्यास`.
- **The Piano-LED-Visualizer strings and BingeStudy's music-theory roadmap.** Both read machine-made.
  They count only beside a better source, as for `माप` and `मध्य C`.
- **sangeetgyan.com,** Punjab school music notes in Hindi. It is Hindustani, and confirmed the hands and
  the white and black keys.
- **No Hindi piano method was reached.** wikiHow's Hindi pages and MuseScore's site refuse agents in
  `robots.txt`. NCERT has no Western music book. MuseScore's Hindi translation covers about 2% of its strings.

## Open

- No Hindi piano method was reached. An Indian piano teacher's read would confirm the loanwords of
  notation: the note values, `रेस्ट`, `टाई`, `स्लर`, `टाइम सिग्नेचर` and `की सिग्नेचर`.
- **The key of a song is `स्केल`,** as Indian musicians say it. A teacher may prefer to keep scale and
  key apart, and the world *Scales and keys* would show it first.
- **`F शार्प` and `B फ़्लैट` have no written source.** They are how the sign is read aloud.
- Many terms rest on one source or none, as the glossary marks them. Each is the everyday word, chosen
  over a coinage no learner says.
