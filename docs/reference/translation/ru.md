# Russian: the style guide and glossary

Every writer and reviewer of a Russian text reads this file whole first. The method is
[translation.md](../../agent/translation.md), and this file adds only what is Russian. The machine's half
of these rules is the `ru` entry of `src/i18n/typography.ts`.

## 1. Variant and readers

- **The variety is standard literary Russian.** Pages carry `lang` `ru`, and `Intl` formats for `ru`.
  The locale table's row says so, and this guide confirms it.
- **The readers are beginners of every age,** children and adults, in Russia, Central Asia, the Caucasus
  and Eastern Europe. They learn piano alone in a browser.
- **The register is the everyday one of a good music teacher.** Microsoft's guide asks for modern words
  that sound natural, never a word-for-word copy of the English (§ 2.1.3).
- **A native Russian term beats an English loanword.** Russian music teaching has its own words for every
  idea of the course: `такт`, `доля`, `гамма`, `аппликатура`. A loanword stands only where Russian apps
  use it, such as `MIDI-клавиатура` or `комбо`.
- **Slang and the words of one region are avoided.** The text says neither `прикольно` nor `клёво`.

| Avoid | Write | Why |
|---|---|---|
| пользователь, for the learner | вы | Microsoft § 4.1.9 |
| вы должны | the imperative: `Сыграйте` | Microsoft § 4.1.14 calls `вы должны` too direct |
| нельзя | `не получится`, or a rewrite | Microsoft § 5.4.2 calls it rude |
| такт for a beat | доля | `такт` is the bar |
| мера, бар for a bar | такт | the bar's only Russian name |
| скейл, корд | гамма, аккорд | the method's terms |
| пианино, for the instrument the course teaches | фортепиано | § 5 |
| тап, кликните | нажмите | § 2's one verb |

## 2. Address

- **The learner is `вы`, written lower case.** Microsoft's guide writes `вы`, `вам` and `ваш` lower case
  inside a sentence (§ 4.1.9). Android does the same. A capital `Вы` belongs to letters, not to apps.
- **The guide keeps `вы` over `ты`.** Most readers are adults, and `ты` to an adult stranger reads as
  rude. Every big system's Russian uses `вы`, so the app sounds like the rest of the device.
- **An instruction is the imperative of `вы`:** `Нажмите`, `Сыграйте`, `Послушайте`, `Поставьте`,
  `Выберите`. Microsoft § 4.1.14 asks for it. The forms `нажми` and `сыграй` are never used.
- **A button, a menu item or a tab is an infinitive or a noun:** `Продолжить`, `Открыть песню`,
  `Настройки`, `Готово`. Android and Microsoft label their buttons so.
- **A setting's name is a noun phrase,** and its help text is a plain sentence about what it does.
- **A question to the learner is an infinitive, or `вы` and a verb:** `Выйти из урока?`, `Вы уверены?`
  Android asks `Удалить файл?` so.
- **`Пожалуйста` is never written.** The imperative of `вы` is polite already. Microsoft's own examples
  never use it: `Попробуйте ещё раз.`
- **An error names what failed, never the learner's fault:** `Не удалось сохранить.` Microsoft § 5.4.2
  gives `Не удалось` for "could not" and the passive where the active would blame.
- **One verb serves a button, a piano key and a computer key: `нажмите`.** It holds for a tap, a click and
  a press alike. Picking one item from several is `выберите`.
- **`Ваш` stands only where the owner is not plain,** as Microsoft § 4.1.9 asks: `Поставьте правую руку в
  позицию до.`, not `вашу правую руку`.
- **The teacher may say `мы` for what the two do together:** `Начнём?`, `Послушаем ещё раз.` It invites,
  as a teacher at the piano does.

## 3. Voice

Warm, plain and short, as a good teacher speaks. Prefer the everyday word: `нужно` over `необходимо`,
`сейчас` over `в настоящий момент`, `можно` over `имеется возможность`, `показать` over `отобразить` in
speech-like texts.

| English | Russian | Why it reads warm and plain |
|---|---|---|
| Hi, I'm your piano teacher. Shall we play? | Здравствуйте! Я научу вас играть на фортепиано. Начнём? | `Начнём?` invites, as the English does. The verb `научу` names no gender, where `учитель` would. |
| Not quite. Try again. | Почти получилось. Попробуйте ещё раз. | `Почти получилось` softens the miss. `Попробуйте ещё раз` is Microsoft's own form. |
| Every lesson takes you further. Keep going! | Каждый урок ведёт вас дальше. Так держать! | `Так держать!` is the everyday cheer. `Продолжайте!` would sound like a machine. |

"Well done." is `Отлично.` in every lesson. `Молодец` would name one person, and `молодцы` several.

## 4. Gender

A Russian past verb, a short adjective and many nouns show a gender. With `вы`, each takes the plural,
and the plural shows none. Microsoft § 3.1 asks for text that names no gender.

- **A past verb about the learner is plural:** `вы сыграли`, `вы прошли урок`. Never `сыграл(а)`.
- **A short adjective about the learner is plural:** `вы готовы`, `вы уверены`.
- **A long adjective or a noun about the learner is avoided.** Rewrite around a verb: `Урок пройден!`,
  not `Вы — молодец!`. `Новичок` and `мастер` never describe the learner.
- **The teacher speaks in the present or the future,** never a past verb in the first person singular. `Я
  покажу`, `Я научу` are neutral, while `я показал` would make the teacher a man.
- **A word that agrees with a thing is fine:** `Новая версия готова` agrees with `версия`.
- **Where no rewrite works, the verb takes the plural with `вы`,** which Russian reads as neutral. Never
  write `(а)`, a slash or `@`.
- **A composer named in a guide keeps the gender of its sources,** since a guide states facts:
  `Бетховен написал`, `Фанни Мендельсон написала`.
- **A badge names a thing, an animal or an act, never a person:** `Ночная сова`, not `Полуночник`.

## 5. Terms

One term per idea, in every file. Sources: WP is Russian Wikipedia, by article title. MS is Microsoft's Russian style guide, and TC is Microsoft's
terminology collection. AN is Android's `values-ru` framework strings. A row marked *unsourced* rests on
common usage alone, and *Open* lists the weak rows.

The term list is the English column of the newest guide, [bn.md](bn.md). No English text has changed
since that list was made.

### The piano glossary

| English | Russian | Sources |
|---|---|---|
| piano | фортепиано, indeclinable: `играть на фортепиано` | WP *Фортепиано*, which names `пианино` one kind of it. `Пианино` is the upright alone. |
| key (of the piano) | клавиша: `белая клавиша`, `чёрная клавиша` | WP *Фортепиано* |
| keyboard (the piano's, or a MIDI one) | клавиатура: `MIDI-клавиатура` | WP *Клавиатура*; WP *Фортепиано* |
| note (a sound, or a written sign) | нота; a sound alone is `звук` | WP *Нота (музыка)* |
| a sound; pitch | звук; высота звука | WP *Нота (музыка)*; *unsourced* for `высота звука` |
| high, low (pitch) | высокий, низкий: `высокий звук` | everyday words. A note by its place is `верхний`, `нижний`. |
| middle C | до первой октавы | WP *Октава* names `первая октава`. `Среднее до` is colloquial. |
| octave; the octaves' names | октава; `малая`, `первая`, `вторая октава` | WP *Октава* |
| half step, whole step | полутон, тон | WP *Полутон* |
| sharp, flat, natural (the signs) | диез, бемоль, бекар | WP *Диез*; WP *Бемоль*; WP *Бекар* |
| accidental | знак альтерации; `диез или бемоль` in a first lesson | WP *Ключевые знаки* |
| staff | нотный стан | WP *Нотный стан*, which names `нотоносец` its synonym |
| grand staff | фортепианная система: two staves joined by a brace | *unsourced*, Russian teaching usage |
| treble clef, bass clef | скрипичный ключ, басовый ключ | WP *Ключ (музыка)* |
| ledger line | добавочная линейка | *unsourced*, the method's term |
| line, space (of the staff) | линейка, промежуток: `на линейке`, `между линейками` | *unsourced*, the method's terms |
| landmark (a note read at a glance) | нота-ориентир | the course's own term, defined where it first appears |
| bar | такт: `такт 3`, `такты 1–4`, `четыре такта` | WP *Такт (музыка)* |
| bar line | тактовая черта | WP *Такт (музыка)* |
| time signature | размер | WP *Размер (музыка)* |
| beat (one count of a bar) | доля: `три доли в такте`, `полдоли` | WP *Доля (музыка)* |
| hold for two beats; through the next beat | держите две доли; до конца следующей доли | the course's own terms |
| the beat (the steady pulse) | пульс; `ровный пульс` | *unsourced*. `Доля` stays one count. |
| three-four time | размер три четверти (3/4) | WP *Вальс* writes `3/4` |
| count-in | отсчёт | *unsourced*, everyday word |
| an eighth, as a unit of time | восьмая: `на восьмую раньше` | follows the note values |
| manger (of the Nativity) | ясли | the Synodal Bible's word |
| timpani | литавры | the orchestra's Russian name |
| plucked (a short note, like a string) | `как будто щиплете струну`; a plucked bass is `бас щипком` | an image, as the English is |
| on the beat, on beat one | на долю, `на первую долю` | follows `доля` |
| a count as a unit of time, "six counts" | доля: `шесть долей` | follows `доля` |
| rhythm | ритм | WP *Ритм* |
| tempo; speed | темп; скорость | *unsourced* for `темп`, since WP *Темп* is a list. `Скорость` is the player's setting. |
| a tempo in a lesson's prose, such as "60 a minute" | `60 ударов в минуту` | everyday words; a label keeps BPM |
| metronome | метроном | WP *Метроном* |
| whole, half, quarter note | целая, половинная, четверть | WP *Нота (музыка)* |
| eighth, sixteenth note | восьмая, шестнадцатая | WP *Нота (музыка)* |
| thirty-second, sixty-fourth note | тридцать вторая, шестьдесят четвёртая | WP *Нота (музыка)* |
| dotted | с точкой: `половинная с точкой` | *unsourced* |
| rest; quarter rest | пауза; четвертная пауза | WP *Пауза (музыка)* |
| tie | лига между одинаковыми нотами; `залигованные ноты` | WP *Лига (музыка)* names both ties and slurs `лига` |
| slur | лига | WP *Лига (музыка)* |
| repeat sign | знак повторения | *unsourced*. WP *Реприза* is the sonata's recapitulation. |
| first, second ending | первая вольта, вторая вольта | *unsourced*, the score's term |
| first, second, last time through | первое, второе, последнее проведение | WP *Куплет* writes `проведение мелодии` |
| pickup, upbeat | затакт | *unsourced*, the method's term |
| syncopation | синкопа | *unsourced* |
| scale | гамма | WP *Гамма (музыка)*; WP *Звукоряд*, which names `гаммы и арпеджио` the school phrase |
| major, minor | мажор, минор; `мажорный`, `минорный` | WP *Мажор*; WP *Минор* |
| key (of a song) | тональность: `песня в тональности соль мажор` | WP *Тональность* |
| key signature | ключевые знаки | WP *Ключевые знаки* |
| scale degree | ступень: `пятая ступень` | WP *Ступень (музыка)* |
| chord | аккорд | WP *Аккорд* |
| triad; major, minor triad | трезвучие; мажорное, минорное трезвучие | WP *Трезвучие* |
| root | основной тон | *unsourced* |
| inversion; root position | обращение; основной вид | WP *Обращение (музыка)*. `Основной вид` is *unsourced*. |
| G seventh (chord) | септаккорд от соль; the symbol `G7` where the English shows it | WP *Септаккорд* |
| broken chord | разложенный аккорд | *unsourced*. WP *Арпеджио* describes it. |
| arpeggio | арпеджио | WP *Арпеджио* |
| Alberti bass, waltz bass, stride bass | альбертиевы басы, вальсовый бас, страйд-бас | WP *Альбертиевы басы*; the others are the guides' own terms |
| bass note | басовая нота; `нота в басу` | *unsourced* |
| interval | интервал | *unsourced* |
| third, fourth, fifth, sixth, seventh | терция, кварта, квинта, секста, септима | WP *Квинта*; WP *Секста*; WP *Терция*; WP *Кварта* |
| major third, minor third | большая терция, малая терция | *unsourced*, the theory's names |
| open fifth | пустая квинта | *unsourced*, the theory's name |
| step, skip, leap (between keys) | на соседнюю клавишу, через клавишу, скачок | everyday words; a lesson defines each |
| a step, a skip (as nouns, on keys or on the staff) | шаг, прыжок: `Это шаг или прыжок?` | everyday words, short for children; a lesson defines each |
| tune, melody | мелодия | WP *Мелодия* |
| phrase | фраза | WP *Фраза (музыка)* |
| figure (a short musical idea) | мотив | *unsourced*, the theory's word |
| single notes (not pairs or chords) | одиночные ноты | *unsourced*, everyday Russian |
| run (a fast figure up or down) | пассаж | *unsourced*, the word Russian teachers use for a fast run |
| call and answer (phrases) | вопрос и ответ | everyday words |
| pattern (of notes) | рисунок: `ритмический рисунок` | *unsourced*, the teacher's word |
| verse, chorus | куплет, припев | WP *Куплет*; WP *Рефрен* |
| coda | кода | *unsourced* |
| dynamics | динамика; `динамические оттенки` | WP *Динамика (музыка)* |
| loud, soft | громко, тихо | everyday words |
| legato, staccato | легато, стаккато | WP *Легато*; WP *Стаккато* |
| crescendo, diminuendo | крещендо, диминуэндо | WP *Крещендо*; WP *Диминуэндо* |
| hairpin | вилочка | *unsourced*, the teacher's word |
| mark (p, f, rit.) | обозначение | everyday word |
| fermata | фермата | WP *Фермата* |
| hold (a fermata's note) | задержать: `задержите ноту чуть дольше` | everyday word |
| turn (ornament); ornament | группетто; мелизм | WP *Группетто* |
| mordent | мордент | *unsourced* |
| double notes | двойные ноты | WP *Двойные ноты* names them for strings; *unsourced* for the piano |
| a run (fast notes) | пассаж | *unsourced*, the method's word |
| octave bass | бас октавами | the guides' own term |
| pedal | педаль | WP *Фортепиано*, § *Педали* |
| sustain pedal | правая педаль | WP *Фортепиано*, § *Педали* |
| soft pedal | левая педаль | WP *Фортепиано*, § *Педали* |
| press a pedal, lift it | нажмите педаль, снимите педаль | the method's verbs, *unsourced* |
| fingering | аппликатура | WP *Аппликатура* |
| finger numbers | 1 первый палец, 2 указательный, 3 средний, 4 безымянный, 5 мизинец | WP *Аппликатура* numbers them from the thumb. The thumb is `первый палец`, as Russian methods call it, and the others are everyday words. |
| right hand, left hand, both hands | правая рука, левая рука, обе руки: `двумя руками` | everyday words |
| hand position; C position | позиция руки; позиция до | the course's own terms |
| thumb under, finger over | подкладывание первого пальца, перекладывание пальца | *unsourced*, the method's terms |
| a shape the hand holds; the octave shape | позиция; октавная позиция | the guides' own terms |
| a stretch between two fingers | растяжка | *unsourced*, the teacher's word |
| even notes; play them evenly | ровные ноты; играйте ровно | the teacher's words |
| three times as long | втрое дольше | everyday words |
| a pair (two notes struck together) | пара нот | the guides' own term |
| a rub (a soft dissonance) | мягкий диссонанс | the guides' own term |
| bounce (the wrist, a finger) | пружинить: `пусть запястье пружинит` | everyday word |
| lift (a finger, a key) | поднять, снять | everyday words |
| land (on a key, a beat) | попасть: `попадите на до` | everyday word |
| stretch, spread (the hand) | раскрыть руку | everyday words |
| roll (a chord) | арпеджировать: `сыграйте аккорд арпеджато` | *unsourced* |
| wrist; a loose wrist | запястье; свободное запястье | everyday words |
| let ring | дать прозвучать | everyday words |
| fingertips | кончики пальцев | everyday words |
| by feel | на ощупь | everyday words |
| sight-reading | чтение с листа | WP *Чтение нот с листа* |
| ear training | развитие слуха | *unsourced*, the school subject's words |
| play (the piano, a key, a note) | играть, сыграть | see *Which "play" is which* |
| practise | заниматься; a piece is `разучивать` | everyday words, *unsourced* |
| song; piece | песня; пьеса | everyday words |
| sheet music | ноты | WP *Музыкальная нотация*, *unsourced* as the printed music |
| transpose | транспонировать | WP *Транспонирование*, a list page |
| stem, note head | штиль, головка | WP *Нота (музыка)* |
| piano bench | банкетка | everyday word |
| at full speed; at three-quarter speed | в полном темпе; на скорости 75 % | the guides' own terms. A fraction of a speed would blur with `три четверти`, the metre. |
| waltz | вальс | WP *Вальс* |
| carol; sea shanty; jig | рождественская песня; матросская песня; джига | WP *Джига*. WP *Колядки* is a Slavic rite, and WP *Шанти* is a short list entry. |
| suite, symphony, sonata, concerto | сюита, симфония, соната, концерт | everyday words of music |
| movement, overture, variation | часть, увертюра, вариация | everyday words of music |
| march, hymn, lullaby, nocturne | марш, гимн, колыбельная, ноктюрн | everyday words of music |
| organ (the church's) | орган | everyday word |
| aria, tone poem or symphonic poem, hornpipe, galop | ария, симфоническая поэма, хорнпайп, галоп | everyday words of music |
| conductor, bandleader | дирижёр | everyday word |
| film score | музыка к фильму | everyday words |
| enharmonic | энгармонический | *unsourced* |
| attack, decay, sustain, release | атака, спад, поддержка, затухание | the terms of synthesizers |

### The interface glossary

| English | Russian | Sources |
|---|---|---|
| Settings | Настройки | AN; TC |
| Songs (the library's panel); library | Песни; библиотека | the app's own terms |
| Open, Close, Cancel | Открыть, Закрыть, Отмена | AN; TC |
| Back, Next, Previous | Назад, Далее, Предыдущий | AN; TC; MS's «Далее» |
| Continue | Продолжить | AN |
| OK, Done | ОК, in Cyrillic letters; Готово | AN; TC |
| Skip | Пропустить | AN; TC |
| Reset | Сбросить | AN; TC |
| Save | Сохранить | AN; TC |
| Delete; Remove | Удалить; Убрать | AN; TC for `Удалить`. `Убрать` takes a thing out of a list without destroying it. |
| Restore (a backup) | Восстановить | TC |
| Clear (a field, a key binding) | Очистить | AN |
| Search | Поиск; the act is `Найти` | AN; TC |
| Play, Pause, Stop (playback) | Воспроизвести, Пауза, Стоп | TC; AN *Воспроизвести* |
| Loop (button); a loop | Цикл; повтор фрагмента | TC *цикл* |
| Speed | Скорость | TC *скорость воспроизведения* |
| Volume, Mute | Громкость, Отключить звук | AN; TC |
| Fullscreen | Во весь экран | TC; AN *полноэкранный режим* is the long form |
| Theme; Light, Dark, Like the system | Тема; Светлая, Тёмная, Как в системе | TC; AN *Тёмная*. `Как в системе` is unsourced. |
| Language | Язык | TC |
| computer keyboard; computer key | клавиатура компьютера; клавиша: `клавиша Esc` | TC; MS § 5.4.4. A computer key always carries its name, so it never blurs with a piano key. |
| touch screen | сенсорный экран | TC |
| device; connect, disconnect | устройство; подключить, отключить | AN; TC |
| folder; file | папка; файл | AN; TC |
| browser | браузер | AN; TC |
| offline | без интернета | everyday words. TC's `вне сети` and `автономный` read like a manual. |
| Install, Update | Установить, Обновить | AN; TC |
| app | приложение | AN; TC |
| Help, Tip | Справка, Совет | TC |
| Try again | Попробуйте ещё раз | MS § 2.2.1 |
| tap, click or press a control | нажмите | MS's `нажмите кнопку «Далее»` |
| press a computer key; press a piano key | нажмите клавишу Esc; нажмите клавишу | as above |
| choose (one of several) | выберите | TC |
| find, look for | найдите | everyday word |
| a page of the site; a printed page | страница | everyday word |
| lesson, step, world | урок, шаг, мир | TC *урок*; the course's own terms |
| quiz; demo | вопрос, викторина; пример | everyday words |
| boss (a world's last lesson) | финальное испытание: `Финальное испытание: <песня>` | the course's own term. `Босс` reads as gamer slang to adults. |
| skip test | проверка, чтобы пропустить мир | the course's own term |
| level; Level up! | уровень; Новый уровень! | TC *уровень* |
| XP | XP, a kept word | the word of games |
| badge, achievement | значок | TC |
| streak | серия: `3 дня подряд` | everyday words. WP *Duolingo* writes `ударный режим`, which reads like a factory. |
| daily goal | цель на день | everyday words, unsourced |
| score; points | счёт; очки | the words of games, unsourced. TC's `оценка` is a school mark. |
| stars | звёзды | everyday word |
| take (one recorded play) | попытка | everyday word |
| Favourites | Избранное | TC |
| track (of a MIDI file) | дорожка | TC |
| progress | прогресс | everyday word. TC's `ход выполнения` is a task's progress. |
| backup; back up | резервная копия; сохранить резервную копию | TC |
| guide (a song's) | разбор | the word of music teachers for a piece taken apart, unsourced |
| a setting; options | настройка; параметры | AN; TC |
| the player (of songs) | проигрыватель | TC |
| Beginner, Easy, Medium, Hard, Advanced, Expert | Начальный, Лёгкий, Средний, Сложный, Продвинутый, Экспертный | adjectives agreeing with `уровень`, so none names a person |
| Easy, Normal, Hard (a song) | Лёгкая, Обычная, Сложная | agreeing with `песня` |
| common, rare, epic, legendary (a version) | обычная, редкая, эпическая, легендарная | agreeing with `версия`; the words of games |
| Perfect, Great, Good | Идеально, Отлично, Хорошо | the words of rhythm games |
| Wrong note, Too short, Too long, Late | Не та нота, Слишком коротко, Слишком долго, Поздно | everyday words |
| free play; pitch practice | Свободная игра; Тренировка слуха | the course's own terms |
| hotkeys | сочетания клавиш | TC |
| velocity (of a key) | сила нажатия | the word of digital pianos, unsourced |
| lane; timeline | полоса; шкала времени | the player's own terms |
| hit, miss, mistake | попадание, промах, ошибка | everyday words |
| add; remove | добавить; убрать | TC |
| open source | с открытым исходным кодом | TC *открытый код* |
| download | скачать | TC. `Загрузить` also means upload. |
| error (a title); a failure in a message | Ошибка; `Не удалось …` | AN; MS § 5.4.2 |
| loading | Загрузка… | AN |
| Expert (the bar's key for the expert tools); expert tools | Расширенные; расширенные инструменты | AN's word for advanced settings. `Экспертный` stays the level. |
| view; the scene (the 3D piano and its notes) | вид; 3D-сцена | everyday words |
| Play modes | Режимы игры | the site's own term |
| sound set; background track | набор звуков; аккомпанемент | everyday words |
| hit line; hit window | линия нажатия; окно попадания | the player's own terms |
| loop trainer; a pass of a loop | тренировка фрагмента; проход | the player's own terms |
| reverb; equaliser; detune | реверберация; эквалайзер; расстройка | the terms of audio apps |
| particles; markers; labels | частицы; метки; подписи | everyday words |
| colour; glow; opacity | цвет; свечение; непрозрачность | everyday words |
| size; shape | размер; форма | everyday words |
| tag (search); round (a game) | тег; раунд | everyday words |
| Preview (a song) | Прослушать; Остановить прослушивание | everyday words |
| default | по умолчанию | TC |
| custom | свой | everyday word. `Пользовательский` reads like a manual. |
| input; output (MIDI) | вход; выход | everyday words |
| MIDI channel | MIDI-канал | follows § 6's hyphen |
| combo; multiplier; accuracy | комбо; множитель; точность | the words of rhythm games |
| frame; frames per second | кадр; кадров в секунду | everyday words |
| difficulty; length (of a song) | сложность; длительность | everyday words |
| record; export; filter | записать; экспортировать; фильтр | TC |
| camera; zoom; side view | камера; масштаб; вид сбоку | everyday words |
| lyrics; bar numbers | текст песни; номера тактов | everyday words; follows `такт` |
| guided course | пошаговый курс | the app's own term |
| top bar; control bar | верхняя панель; панель управления | everyday words |
| click (of the metronome) | щелчок | everyday word |
| low, high band (of the equaliser) | низкие, высокие | the words of audio apps |
| leave (a lesson, a page) | выйти | everyday word. `Пропустить` is Skip. |
| skill (a song's technique tag) | приём | the teacher's word for a technique |
| folk tune; counter-melody | народная мелодия; подголосок | `подголосок` is the Russian term |
| in key widths (a unit); per second | в ширинах клавиши; ширин клавиши в секунду | the player's own unit |
| Sponsor (the page) | Поддержать; `Поддержать на GitHub` | `Спонсор` reads as a company's |
| setup (the first visit) | первый запуск | everyday words; `настройка` stays a setting |
| a section named by an infinitive, mid-sentence | `в разделе «Просто играть»` | the quotes keep the name from reading as a verb |
| On, Off, Auto; when off | Вкл., Выкл., Авто; когда выключено | AN |
| site; data; sync | сайт; данные; синхронизация | AN; TC |
| button; dialog; pointer; cursor | кнопка; окно; указатель; курсор | AN; TC |
| Apply; Reload; Undo | Применить; Перезагрузить; Отменить | AN; TC |
| background (a colour, a page's) | фон | everyday word; `аккомпанемент` is the background track |
| free (no cost) | бесплатно | everyday word |
| About; Legal notice; Privacy policy | О проекте; Правовая информация; Политика конфиденциальности | the usual site labels |
| the course's map | карта | the word of games |
| Repeat; Repeat all | Повтор; Повторять всё | TC; kept apart from `Цикл` |
| arrangement; harmony | аранжировка; гармония | the words musicians use |
| Classical, Baroque, Romantic, Impressionist, Contemporary | Классика, Барокко, Романтизм, Импрессионизм, Современная музыка | the names of periods in Russian |
| Ragtime; Christmas | Регтайм; Рождество | WP *Регтайм* |
| effects; flare; sparks; wave line | эффекты; вспышка; искры; волна | everyday words |
| ring (a shape) | кольцо | everyday word |
| a setting's on/off label | a noun phrase: `Подсветка звучащих нот` | § 2's label form |
| falling notes; a strip or band | падающие ноты; полоса | everyday words |
| layout; timing; envelope | расположение; тайминг; огибающая | the words of apps and synthesizers |
| a seconds unit in a label | с, with no period: `2 с` | the Russian unit, as § 6 says |
| a percent unit in a label | % after a no-break space | § 8 |
| More tools (beside the Expert key) | Другие инструменты | `Расширенные` is the Expert key |
| account; No account | регистрация; Без регистрации | the everyday phrase of Russian sites. `Аккаунт` is a loanword. |
| scores (saved results) | результаты | `счета` in the plural reads as bills |
| cookies; domain | куки; домен | everyday words. A Latin `cookie` breaks the script. |
| Legal; Explore (footer headings) | Документы; Разделы | `Правовая информация` is the legal notice page |
| a star (on GitHub) | звезда: `поставить звезду` | GitHub's own wording |
| Your songs (the library's list); Your hands | Ваши песни; Ваши руки | quoted the same in every file |
| Offline files (the dialog) | Работа без интернета | follows `без интернета` |
| Third-party notices; Build (a version) | Сторонние компоненты; Сборка | the usual software labels |
| Dismiss (a toast); Fit (the zoom) | Скрыть; Вписать | the toast is hidden, not closed |
| Challenge; Play along; Note trainer; Chord explorer; Rhythm keeper (modes) | Испытание; Играть вместе; Тренажёр нот; Аккорды изнутри; Точно в ритм | no mode names a person |
| collection (a tag kind); Sort by | подборка; Сортировка | `Сортировать по` would force a case on each option |
| Clean (a release judgement) | Чисто | the word of rhythm games |
| dotted rhythm; hand crossing; held bass notes | пунктирный ритм; перекрещивание рук; выдержанные басовые ноты | the terms of Russian piano teaching, unsourced |
| two-note chords | аккорды из двух нот | plain for a beginner, unlike `двузвучие` |
| tap a beat; On the beat, Off the beat | отстучать; В долю, Мимо доли | follows `доля` |
| Skip the setup | Пропустить вопросы | `настройка` stays a setting |
| daily goal paces Relaxed, Steady, Keen, Bold | Спокойно, Размеренно, Усердно, Смело | adverbs name no gender |
| a badge named for a person, such as Star collector | a thing instead: `Звездопад` | no badge names a person |
| loop (in a setting's label) | фрагмент: `Повтор фрагмента` | `Цикл` stays the button |
| felt; speakers; look-ahead | фетр; динамики; упреждение | the words of technicians and device settings |
| drum kit; wood block | ударная установка; вуд-блок | the instruments' Russian names |
| tuning (audio) | строй | the musician's word |
| px | пикс. | a Cyrillic unit, like the guide's others |
| Reading aids; Colour coding (sections) | Подсказки; Раскраска нот | short enough for 360 pixels |
| falling notes; sheet music (sections) | Падающие ноты; Ноты | the two sections need two names |
| embers; wander; sway; edge glow | угольки; блуждание; качание; светящийся контур | everyday words |
| Blending: Add light, Cover | Наложение: Добавить свет, Перекрыть | the verbs of image editors |

### Which "play" is which

- **A key, a note, a song on the piano:** `играть`, `сыграть`. `Сыграйте до и ми вместе.` The instrument
  takes `на`: `играть на фортепиано`.
- **Starting playback of a song:** `воспроизвести`. The transport's *Play* is `Воспроизвести`.
- **A game or a mode:** `игра`, and `игровой режим` for *Game mode*.
- **A lesson's "Play again" that replays a demo:** `Послушать ещё раз`, since the learner listens.
- **"Your turn":** `Теперь вы.`
- **A control is never `сыграйте`.** `Нажмите «Воспроизвести».`, never `Сыграйте`.

### A guide's recurring steps

The song guides repeat these steps word for word. Each English step has one Russian text in every guide.
A step that only differs in its bars or its section follows the nearest row's shape.

| English | Russian |
|---|---|
| Play the whole song with both hands at three-quarter speed. | Сыграйте всю песню двумя руками на скорости 75 %. |
| Join the hands on the whole song at three-quarter speed. | Сыграйте всю песню двумя руками на скорости 75 %. |
| Play the whole song with both hands at full speed. | Сыграйте всю песню двумя руками в полном темпе. |
| Play the whole song with both hands, a little slower than written. | Сыграйте всю песню двумя руками чуть медленнее, чем написано. |
| Now play it at full speed. | Теперь сыграйте в полном темпе. |
| Now play it at full speed, with the pedal. | Теперь сыграйте в полном темпе, с педалью. |
| Now play it at full speed, and let the last chord ring. | Теперь сыграйте в полном темпе и дайте последнему аккорду прозвучать. |
| Join the hands on the first eight bars, slowly. | Сыграйте первые восемь тактов двумя руками, медленно. |
| Put both hands together on the whole song, slowly. | Сыграйте всю песню двумя руками, медленно. |
| Put both hands together, slowly. | Сыграйте двумя руками, медленно. |
| Join the hands on the first verse, slowly. | Сыграйте первый куплет двумя руками, медленно. |
| Join the hands on the first time through, slowly. | Сыграйте первое проведение двумя руками, медленно. |
| Join the hands on bars 9 to 16, slowly. | Сыграйте такты 9–16 двумя руками, медленно. |
| Play the first four bars with the right hand alone, and let the song wait for each note. | Сыграйте первые четыре такта одной правой рукой. Песня подождёт каждую ноту. |
| Play the right hand alone on the first eight bars, and let the song wait for each note. | Сыграйте первые восемь тактов одной правой рукой. Песня подождёт каждую ноту. |
| Play bars 1 to 4 with the right hand alone, and let the song wait for each note. | Сыграйте такты 1–4 одной правой рукой. Песня подождёт каждую ноту. |
| Play the right hand alone, slowly, and let the song wait for each note. | Сыграйте одной правой рукой, медленно. Песня подождёт каждую ноту. |
| Play the left hand alone, and press the notes of each chord together. | Сыграйте одной левой рукой и нажимайте ноты каждого аккорда вместе. |
| Now the left hand alone. It holds one shape for each bar. | Теперь одна левая рука. В каждом такте она держит одну позицию. |
| Now the left hand alone. It holds one shape for half a bar or a whole bar. | Теперь одна левая рука. Она держит одну позицию полтакта или целый такт. |
| It holds one shape for half a bar at a time. | Она держит одну позицию по полтакта. |
| Now the left hand alone. It keeps one shape and changes it at most once a bar. | Теперь одна левая рука. Она держит одну позицию и меняет её не чаще раза в такт. |
| Play the Alberti bass alone until it rolls by itself: low, high, middle, high. | Сыграйте альбертиевы басы отдельно, пока они не покатятся сами: нижняя, верхняя, средняя, верхняя. |
| Keep the Alberti bass soft, so the tune sings above it. | Играйте альбертиевы басы тихо, чтобы мелодия пела над ними. |
| Play the right hand's thirds and sixths alone, and press both notes of each pair as one. | Сыграйте терции и сексты правой руки отдельно и нажимайте обе ноты каждой пары как одну. |
| The tune is the top note of each pair, so let the upper finger lead. | Мелодия — это верхняя нота каждой пары, так что пусть ведёт верхний палец. |
| Play the right hand's chords alone, and let the top finger sing the tune. | Сыграйте аккорды правой руки отдельно, и пусть верхний палец поёт мелодию. |
| Play the top note of each chord a little louder than the others. | Играйте верхнюю ноту каждого аккорда чуть громче остальных. |
| Play the right hand's octaves alone, with the thumb and finger 5 kept in one shape. | Сыграйте октавы правой руки отдельно, держа 1-й и 5-й пальцы в одной позиции. |
| Play the stride bass alone: jump down for the octave, then back up for the chord. | Сыграйте страйд-бас отдельно: прыжок вниз на октаву, затем обратно вверх на аккорд. |
| Change the pedal on each new bass note, twice in every bar. | Меняйте педаль на каждой новой ноте баса, дважды в каждом такте. |
| Hold the pedal down for each whole bar, and change it right on the bar line. | Держите педаль весь такт и меняйте её точно на тактовой черте. |
| Up high, the octaves should ring like bells. Keep the wrist loose. | Наверху октавы должны звенеть, как колокола. Держите запястье свободным. |

More rules the guides settle:

- **A step that plays one part names the part, then `отдельно`:** `Сыграйте альбертиевы басы отдельно.` A
  hand alone is `одной правой рукой`.
- **"Let the song wait for each note" is its own sentence: `Песня подождёт каждую ноту.`** A clause after
  `и` would make the song a second thing to do.
- **"First time through" is `первое проведение`,** and the second and the last follow it.
- **"Slow down" as an instruction is `Замедлите темп`.** The noun is `замедление`.
- **Loud is `громко`, soft is `тихо`, and slow is `медленно`.** `Тихо` never means slowly in Russian, so it
  is safe.
- **Rhythm syllables are `та`,** such as `«та-а, та-та»`. A counted beat is `раз, два, три, четыре`, and
  "and" is `и`: `«раз-и, два-и»`. Russian teachers count so aloud.
- **A miss is `промах` everywhere,** the game's flash and its count included.
- **The thumb is `первый палец` in every guide,** as the lessons name it. Never `большой палец`.
- **`большой палец` stands only where a lesson teaches the numbers.** *Finger numbers* defines it as
  finger 1, and a quiz answer pairs a number with its name: `1-й палец, большой`.
- **A finger the English numbers takes digits:** `3-й палец`, `2-м пальцем`, `пальцами 5, 4, 3 и 2`.
  `мизинец` stands only where the English says "little finger".

### A lesson's recurring lines

The lessons repeat these lines. Each English line has one Russian text in every world.

| English | Russian |
|---|---|
| Well done. | Отлично. |
| Your turn. | Теперь вы. |
| Your turn, after one bar of count-in. | Теперь вы, после одного такта отсчёта. |
| Watch and listen. | Смотрите и слушайте. |
| Listen and watch. | Слушайте и смотрите. |
| Listen. | Послушайте. |
| Put your right hand in C position. | Поставьте правую руку в позицию до. |
| Put your right thumb on middle C. | Поставьте первый палец правой руки на до первой октавы. |
| Keep your hand where it is. | Оставьте руку на месте. |
| Press Start and listen to four clicks first. | Нажмите «Старт» и сначала послушайте четыре щелчка. |

- **A boss's title is `Финальное испытание: <the song>`,** with `двумя руками` where the English says both hands.
- **A quiz answer starts with a capital, as any label does:** `Ре`, `Фа-диез`, `1-я доля`. A note name
  inside an answer stays lower case.
- **Pachelbel's canon is `«Канон Пахельбеля»`,** the title of its Russian Wikipedia article.

## 6. Kept words

- **Learn Piano Easy**, **MIDI**, **Web MIDI**, **MusicXML** and **XP** stay as they are.
- **A Latin name joins a Russian noun with a hyphen:** `MIDI-клавиатура`, `MIDI-канал`, `3D-сцена`, as
  Russian spelling joins such compounds. A Latin name never takes a Russian case ending: `на GitHub`.
- **Units are written in Cyrillic, as Russian writes them:** `мс`, `с`, `Гц`, `кГц`, `дБ`, `КБ`, `МБ`. A
  unit follows its number after a no-break space and takes no period. BPM, FPS, PDF, USB and 3D stay in
  Latin letters, as Russian music apps keep them. Microsoft § 4.1.2 keeps an acronym with no established
  Russian form.
- **Technical names:** JavaScript, MIT, and a computer key such as Esc, Q or Z. A Roman numeral of a chord,
  such as V7, stays too.
- **Product and site names:** GitHub, Matomo, Wikipedia, Wikimedia Commons, Mutopia, Chrome, Edge,
  Firefox and Safari.
- **The printed marks of a score stay in Latin letters:** `p`, `mp`, `mf`, `f`, `pp`, `ff`, `rit.`,
  `rall.`, `cresc.`, `decresc.`, `dim.`, `a tempo` and `Ped.`
- **The Italian word behind a mark is written in Cyrillic,** as Russian methods write it: `пиано`,
  `форте`, `меццо-пиано`, `ритардандо`, `легато`, `стаккато`, `крещендо`, `диминуэндо`, `а темпо`.
- **A century is a Roman numeral, as Russian writes it:** `в XVI веке`. The `kept` list holds `XIII` to `XX`.
- **Catalog numbers:** `BWV 1068`, `K. 525`, `HWV 437`, and `соч. 52` for an opus.
- **The chord symbols,** as § 7 says.
- **A song title in the library stays in Latin letters,** without quotes. A title is data shared by every
  locale, and the library searches it. A kept title with a mark, such as *Moulin Rouge!*, goes in the
  `kept` list.
- **A guide's prose names a work by its Russian title where Russian Wikipedia has one,** in `« »`:
  `«К Элизе»`, `«Лебединое озеро»`, `«Ода к радости»`, `«Тихая ночь»`. A Russian reader knows these
  names, and a Latin title in mid-sentence reads as foreign. A work with no Russian article keeps the
  English guide's title, without quotes. This changes the standing decision that kept every title, for
  that reason.
- **A person's name is in Cyrillic, from the title of the person's Russian Wikipedia article:** `Бетховен`,
  `Моцарт`, `Бах`, `Шопен`, `Гендель`, `Шуберт`, `Брамс`, `Дебюсси`, `Вивальди`, `Гайдн`, `Чайковский`,
  `Григ`, `Мендельсон`, `Сати`, `Бизе`, `Малер`, `Равель`, `Мусоргский`, `Россини`, `Оффенбах`. Russian
  prose never prints a foreign name in Latin letters. A person with no Russian article stays in Latin
  letters, since a guessed spelling would mislead. This also changes the standing decision.
- **A place takes its Russian name,** from its Russian Wikipedia article: `Вена`, `Лейпциг`, `Лондон`,
  `Нью-Йорк`, `Зальцбург`, `Богемия`. A place with no article stays in Latin letters.
- **A place or saint of the Bible takes the Russian Synodal Bible's name:** `Вифлеем`, `Сион`, `святой
  Иоанн`.
- **The sections "Learn Piano" and "Just Play Piano" are translated,** since they describe what a
  learner does. "Learn Piano" is `Учиться играть`, and "Just Play Piano" is `Просто играть`. Both are
  short infinitives, as a Russian menu writes them, and the instrument is plain from the site.
- **The worlds' titles are** Знакомство с фортепиано, Первые мелодии, Ритм, Чтение нот, Две руки, Гаммы и
  тональности, Аккорды and Выразительность. `src/learn/course.ts` takes them when Russian ships.
- The `kept` list of `src/i18n/typography.ts` holds each kept word a test could misread.

## 7. Note names

- **Notes are solfège, fixed do, in Cyrillic:** `до ре ми фа соль ля си`. WP *Нота (музыка)* and WP *До*
  write them so, and the locale table names `solfege`.
- **A note name is lower case,** at the start of a sentence too only where any word would take a capital.
  It is neuter and never declines: `на до`, `от ми к соль`, `высокое до`.
- **A name the code builds keeps the form of `src/theory/note-names.ts`:** `до4`, `фа♯4`, `си♭`. A text
  that points at that label writes it the same way.
- **A sharp or a flat in prose is a word after a hyphen:** `до-диез`, `си-бемоль`, as WP *Нота (музыка)*
  writes them.
- **A sharp or a flat declines as its noun does,** while the note before it stays: `для ми-диеза`, `на
  до-диезе`, `к си-бемолю`. The lessons write it so. It is masculine, as its noun is: `верхний до-диез`.
- **A key declines its mode the same way:** `в до мажоре`, `от соль мажора к ля мажору`.
- **A key is the note and its mode, with no hyphen:** `до мажор`, `ля минор`, `фа-диез минор`. A chord or a
  triad names its key: `аккорд до мажор`, `трезвучие ля минор`. WP mixes `ля-минор` in, which this guide
  does not follow.
- **A chord symbol stays in Latin letters where the English shows a symbol:** `C`, `Am`, `G7`. Russian
  songbooks print them so. In prose the chord is named by its key, as above.
- **A chord takes its mode only where the song's notes hold that triad.** An open fifth or a seventh
  chord the English calls "the G chord" is named by its root: `аккорд на соль`, `переходит с до на
  соль`. A seventh chord the guide names is `септаккорд от соль`.
- **The octave is named the Russian way in prose:** middle C is `до первой октавы`, the C below is `до
  малой октавы`, and the C above is `до второй октавы`. WP *Октава* names them. The label `до4` stays the
  code's.
- **"Low C" and "high C" are `до малой октавы` and `до второй октавы`** where the English means those
  keys. A note named only by its place takes `верхний` or `нижний`.
- **The note `до` never meets the preposition `до` bare.** Write `от до до соль` only with the octave, as
  `от до первой октавы до соль`, or name the note: `до ноты до`.
- **A spelled-out chord lists its notes with commas and `и`:** `до, ми и соль`.
- **A chord played in a set order joins its notes with hyphens,** from the bottom up: `до-ми-соль`,
  `ми-соль-до`. The order is the point of an inversion or a broken chord, and a teacher writes it so.
- **The letters `C D E F G A H` of the German system are never used in prose.** WP *Нота (музыка)* names
  them, but a beginner reads solfège.
- **A letter that code checks,** such as a quiz answer, stays the catalog's own.

## 8. Numbers

- **`Intl` formats every number for `ru`:** `1 234 567,5`, with a no-break space between groups and a
  decimal comma. No separator is set by hand. Microsoft § 4.1.13 writes `10 000` so.
- **A message formats its count with `formatNumber`,** never a bare `${n}`, so a large count takes its
  spaces.
- **A percent sign follows its number after a no-break space:** `80 %`. CLDR writes it so, and Microsoft
  § 4.1.13 agrees.
- **Fingers, octaves, bars, beats and time signatures keep their digits,** as printed music does: `такт
  3`, `такты 9–16`, `1-й палец`, `до4`, `3/4`.
- **An ordinal in digits takes its ending after a hyphen:** `1-й палец`, `3-м пальцем`, `5-й такт`. In
  prose a small ordinal is a word: `третий палец`, `второй куплет`.
- **A small count the English spells out is a word in prose:** `три клавиши`, `две руки`.
- **Russian has four plural forms: `one`, `few`, `many` and `other`.** `Intl` gives `one` for 1, 21 and
  31, `few` for 2 to 4 and 22 to 24, `many` for 0, 5 to 20 and 25, and `other` for a fraction. Write
  each form whole: `1 урок`, `2 урока`, `5 уроков`, `1,5 урока`.
- **"X of Y" is `X из Y`, and the noun agrees with Y:** `3 из 8 уроков`, `1 из 2 уроков`. Its message
  takes the plural of Y.
- **A year is digits and `году`:** `в 1824 году`. A century is a Roman numeral: `в XIX веке`.

## 9. Marks

Each rule has its pattern in the `ru` entry of `src/i18n/typography.ts`. The rules test reads a text with
each kept word written as `X`.

| Rule | Pattern (`mustNot`) |
|---|---|
| A quote stands in `« »`, with `„ “` inside. Never straight quotes or `”`. | `["”]` |
| An inner quote opens with `„` and closes with `“`. | `^[^„]*“`, `„[^“]*$` |
| No space stands before `.`, `,`, `:`, `;`, `?`, `!`, `…` or a closing mark. | `\s[.,:;?!…»“)]` |
| No space follows an opening mark. | `[«„(]\s` |
| A space follows the end of a sentence. A text built from joined strings drops it most. | `[.!?…»)][А-ЯЁ]` |
| An ellipsis is the one character `…`. | `\.\.\.` |
| A dash between words is `—` with a space on each side. | `\S—`, `—\S`, `\s[-–]\s` |
| A range of numbers takes `–` with no spaces: `1–4`. | `\d\s*-\s*\d`, `\d\s+–`, `–\s+\d` |
| A percent sign follows its number after a no-break space. | `\d ?%`, with an ASCII space |
| No text says `пожалуйста`. | the word, whole |
| The learner is `вы`, never `ты`. | `ты`, `тебя`, `твой` and their forms, whole |
| An instruction is the imperative of `вы`. | `нажми`, `сыграй`, `послушай` and the like, whole |
| `вы` is lower case inside a sentence. | `Вы`, `Вас`, `Ваш…` after a lower-case letter or a comma |
| `ё` is written wherever it is said. | `еще`, `ее`, `вперед`, `идет`, and `черн…`, `легк…`, `темн…` adjectives |

- **Quotes are `« »`,** as Russian typography prints them. Microsoft § 4.1.10 asks for straight quotes in
  software, but its own examples show `«Далее»`. The site is a book to learn from, and its marks follow
  print, as the standing decision says.
- **An interface word the learner looks for stands in `« »`:** `Нажмите «Готово».` Microsoft writes
  `нажмите кнопку «Далее»` so. A label inside a quote takes `„ “`: `«Открыть „Песни“»`.
- **A dash is `—` with spaces,** and stands only where Russian grammar asks for one, as Microsoft § 4.1.10
  says: `Мелодия — это верхняя нота.` A hyphen joins words and never stands for a dash.
- **`ё` is written everywhere.** Russian spelling makes it optional, and Microsoft never writes it. This
  guide writes it, since children read the site and need it, and `все` and `всё` read alike without it.
  Android writes `Тёмная` too.
- **A sentence ends with a period, even in a lesson's short line.** A button, a label and a title take none.
- **`!` is rare.** Microsoft § 5.4.2 drops it from errors. A cheer may keep it: `Новый уровень!`
- **A colon is followed by a lower-case word,** as Microsoft § 4.1.10 says, unless a name follows.
- **A label is sentence case:** only its first word and its proper names take a capital.
- **An abbreviation ends with a period, except a unit:** `Вкл.`, `соч.`, but `мс`, `Гц`.
- **Emphasis is bold, never italic,** as the English writes it.

## 10. Length

Russian runs about a third longer than English, and its words are long. A word such as
`воспроизведение` cannot wrap, so a narrow label clips first. The layout checks at 360 pixels catch it.

| Long | Short, for a label |
|---|---|
| Воспроизвести | the icon alone, with the long word as its name |
| правая педаль | педаль |
| клавиатура компьютера | клавиатура |
| полноэкранный режим | Во весь экран |
| тренировка фрагмента | фрагмент |
| резервная копия | копия |
| Тренировка слуха | Слух |
| Расширенные инструменты | Расширенные |
| сочетания клавиш | клавиши |

- **A label stays a phrase, never a clipped word.** `Открыть песню` may become `Открыть`.
- **A word is never cut with a period to fit,** apart from the abbreviations Russian prints, such as
  `Вкл.` and `Выкл.`. Microsoft § 4.1.1 asks for no other.
- **A long word never breaks,** since the pages set no hyphenation. A label that clips takes a short form
  from the table above.

## 11. Calibration

Each row is the chosen translation, and why it beat the next best one.

| Kind | English | Russian | Why it beat the next best |
|---|---|---|---|
| Button | Continue | Продолжить | Android's label. `Далее` is *Next*, so it stays free for that. |
| Transport tooltip | Play or pause | Воспроизвести или поставить на паузу | `Воспроизвести` is the playback verb. `Играть` would mean playing the piano. |
| Tooltip | Loop the bars set in the settings | Повторять по кругу такты, выбранные в настройках | `По кругу` is plain. `Зациклить` reads like a programmer. |
| Setting and help | Wait for your notes / The song stops at each of your notes until you hold every key of it. | Ждать ваши ноты / Песня останавливается на каждой вашей ноте, пока вы не нажмёте все её клавиши. | The song is the subject, and `пока … не` is how a teacher says "until". |
| Error | Your browser refused to save. Nothing changed. | Не удалось сохранить. Ничего не изменилось. | Microsoft's error form. `Ваш браузер отказался` gives the browser a will. |
| Toast | A new version is ready. | Новая версия готова. | `Готова` agrees with `версия`, so no gender reaches the learner. |
| Dialog | Reset all progress? / Are you sure? | Сбросить весь прогресс? / Вы уверены? | The infinitive asks, as Android's dialogs do. `Уверены` is plural, so it names no gender. |
| Counter | 3 of 8 lessons | 3 из 8 уроков | The noun agrees with 8. `Уроки: 3/8` reads like a form. |
| Streak | 3-day streak | 3 дня подряд | Short and everyday. `Серия из 3 дней` is a calque. |
| Feedback | Right! | Верно! | A teacher's word. `Правильно!` is longer and reads like a test. |
| Greeting | Hi, I'm your piano teacher. Shall we play? | Здравствуйте! Я научу вас играть на фортепиано. Начнём? | The verb names no gender. `Я ваш учитель` would make the teacher a man. |
| Badge | Night owl / Finish a lesson at 10 at night or later. | Ночная сова / Пройдите урок в 22:00 или позже. | The badge is the owl, so no gender reaches the learner. `Полуночник` would. |
| Joke | Quality control is a cat that walks over the keys now and then. | Контролем качества у нас занимается кот, который иногда гуляет по клавишам. | `У нас` keeps the deadpan, and the cat is the subject. |
| Level up | Level up! / Every lesson takes you further. Keep going! | Новый уровень! / Каждый урок ведёт вас дальше. Так держать! | `Новый уровень` is the word of games. `Уровень повышен` reads like a system log. |
| Lesson explanation | The right pedal is the sustain pedal. While it is down, every note keeps sounding after you let go of its key. | Правая педаль продлевает звук. Пока она нажата, каждая нота звучит и после того, как вы отпустили клавишу. | `Продлевает звук` says what it does. `Педаль сустейна` is a synth word no method uses. |
| Lesson instruction | Your turn. Put your right thumb on middle C and play C and E together. | Теперь вы. Поставьте первый палец правой руки на до первой октавы и сыграйте до и ми вместе. | Russian methods name the thumb `первый палец` and middle C `до первой октавы`. |
| Quiz | How many black keys are in the smaller group? / One, Two, Three, Four | Сколько чёрных клавиш в меньшей группе? / Одна, Две, Три, Четыре | Each answer agrees with `клавиша`. `Один` would be wrong. |
| Rhythm | Count "1-2" for each half note. | Считайте «раз-два» на каждую половинную. | Russian teachers count in words, and `половинная` is the method's name. |
| Guide, about | Beethoven wrote this tune for the last movement of his Ninth Symphony, first played in Vienna in 1824. | Бетховен написал эту мелодию для финала Девятой симфонии. Её впервые исполнили в Вене в 1824 году. | `Финал` is the Russian name of a last movement. Two sentences keep each idea apart. |
| Guide, tricky bar | Look before you jump. | Сначала посмотрите, потом прыгайте. | Short and imperative, as the English is. |
| Mode name | Free jam | Свободная импровизация | `Джем` is jargon few learners know. Transcreated, it keeps the freedom. |

## 12. Sources

- **Microsoft Russian Style Guide,** `aka.ms/russian-styleguide`. It settled `вы` in lower case, the
  imperative, the errors in `Не удалось`, the dashes, the ellipsis, the no-break spaces and the gender
  rule. Its straight quotes and its spelling without `ё` are not followed, as § 9 says why.
- **Microsoft Terminology Collection,** `RUSSIAN.tbx`. It settled most interface terms, and named the
  competing forms of *offline*, *download* and *badge*.
- **Android's framework strings,** `values-ru` of `frameworks/base`. They settled the button labels,
  `ОК` in Cyrillic, `Загрузка…` and `Тёмная`.
- **CLDR,** through `Intl`. It settled the no-break space between groups, the decimal comma, `80 %` and
  the four plural forms.
- **Russian Wikipedia's music articles,** each named in the glossary. They settled the note values, the
  octaves' names, the signs, the intervals, the chords, `аппликатура`, the Italian terms in Cyrillic and
  the hyphen of `до-диез`.
- **No Russian piano method was reached.** The fetch found no text of Николаев, Артоболевская, Вахромеев or
  Способин. The rows marked *unsourced* rest on Russian teaching usage alone.
- **No playback-speed string of YouTube and no Duolingo string were reached.** `Скорость`, `серия` and
  `цель на день` rest on Microsoft or on everyday usage.

## Open

- No Russian piano method was reached. A Russian piano teacher's read would confirm `фортепианная
  система`, `добавочная линейка`, `подкладывание`, `перекладывание`, `затакт` and `вилочка`.
- **Russian children's methods may say `ты`.** This guide keeps `вы`, since most readers are adults, as §
  2 says. A teacher's read of the first world would show whether it reads cold to a child.
- **`Разбор` for a song's guide has no source.** It is the word music teachers use, and the first look at
  the player in Russian shows whether it reads well.
- **Titles and names in Cyrillic go beyond the standing decision.** § 6 says why. The library still shows
  each song's Latin title, and Russian titles there would be a feature, not a translation.
