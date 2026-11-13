/** The player's settings from the notes to the offline files, in Arabic. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { playerSettingsLook as en } from "./player-settings-look.en";

export const playerSettingsLook: Translation<typeof en> = {
  // Notes
  showHitKeys: {
    label: "إضاءة النغمات المسموعة",
    help: "تتوهج النغمة بلونها ما دام صوتها مسموعًا.",
  },
  noteWidth: {
    label: "عرض النغمة (% من المفتاح)",
    help: "عرض كل نغمة متساقطة، قياسًا إلى مفتاحها.",
  },
  roundedNotes: {
    label: "نغمات مستديرة الزوايا",
    help: "زوايا مستديرة للنغمات المتساقطة.",
  },
  noteBorderRadius: {
    label: "استدارة الزوايا (%)",
    help: "مقدار استدارة زوايا النغمة.",
  },
  minNoteHeight: {
    label: "أقصر طول للنغمة",
    help: "بعرض المفاتيح، لتظهر النغمة القصيرة جدًا أيضًا.",
  },
  strokeNotes: {
    label: "توهج الحواف",
    help: "إطار من الضوء بلون كل نغمة.",
  },
  strokeNotesWidth: {
    label: "قوة توهج الحواف",
    help: "مقدار سطوع إطار الضوء حول كل نغمة.",
  },
  noteEndedShrink: {
    label: "انكماش النغمات المعزوفة في مفاتيحها",
    help: "تغوص النغمة في مفتاحها ما دامت مسموعة. عند تعطيله، تتجاوز المفاتيح وتواصل طريقها.",
  },
  playedNoteFalloffSpeed: {
    label: "مدى امتداد النغمات المعزوفة بعد المفاتيح",
    help: "بعرض المفاتيح، حين لا تنكمش النغمات المعزوفة.",
  },
  showSustainedNotes: {
    label: "إظهار مدة إبقاء الدواسة للنغمة",
    help: "ذيل رفيع يمتد من كل نغمة تبقيها الدواسة.",
  },
  sustainedNotesOpacity: {
    label: "سطوع ذيل الدواسة (%)",
    help: "مدى وضوح ذيول الدواسة خلف النغمات.",
  },

  // Lanes
  bgCol1: {
    label: "لون الأعمدة",
    help: "لون الأعمدة فوق المفاتيح البيضاء.",
  },
  bgCol5: {
    label: "لون أعمدة المفاتيح السوداء",
    help: "لون الأعمدة فوق المفاتيح السوداء.",
  },
  bgCol3: {
    label: "لون فاصل الأوكتاف",
    help: "لون الخط بين كل سي ودو التي تليها.",
  },
  drawMeasureLines: {
    label: "فواصل الموازير",
    help: "خط عبر الأعمدة في بداية كل مازورة.",
  },
  measureLineThickness: {
    label: "سماكة فاصل المازورة",
    help: "سماكة الخط عند كل مازورة.",
  },
  measureLineColor: {
    label: "لون فاصل المازورة",
    help: "لون الخط عند كل مازورة.",
  },
  enableDrawBeatLines: {
    label: "خطوط النبضات",
    help: "خط أبهت عبر الأعمدة عند كل نبضة.",
  },
  beatLineThickness: {
    label: "سماكة خط النبضة",
    help: "سماكة الخط عند كل نبضة.",
  },
  beatLineColor: {
    label: "لون خط النبضة",
    help: "لون الخط عند كل نبضة.",
  },
  enableDrawMeasureNumbers: {
    label: "أرقام الموازير",
    help: "رقم كل مازورة، بجانب خطها.",
  },
  measureNumbersColor: {
    label: "لون أرقام الموازير",
    help: "لون أرقام الموازير.",
  },
  highlightInputLanes: {
    label: "إضاءة أعمدة المفاتيح المضغوطة",
    help: "يضيء العمود فوق المفتاح ما دام مضغوطًا.",
  },
  inputLaneOpacity: {
    label: "قوة إضاءة العمود",
    help: "مقدار سطوع العمود ما دام مفتاحه مضغوطًا.",
  },
  showMarkersSong: {
    label: "العلامات",
    help: "خط مع نصه حيث تسمي الأغنية جزءًا منها، مثل مقطع.",
  },
  showSustainPeriods: {
    label: "فترات الدواسة",
    help: "شريط عبر الأعمدة ما دامت الأغنية تضغط دواسة الحفاظ.",
  },
  showSustainOnOffs: {
    label: "ضغط الدواسة ورفعها",
    help: "خط عليه «⁨Ped.⁩» حيث تُضغط الدواسة، و«✱» حيث تُرفع.",
  },
  showSustainChannels: {
    label: "قنوات الدواسة",
    help: "اسم قناة ⁨MIDI⁩ لكل فترة دواسة.",
  },

  // Particles
  showParticles: {
    label: "الجزيئات",
    help: "تأثيرات تتصاعد من كل مفتاح يصدر صوتًا. تثقل على بطاقة الرسوميات، لذا تكون معطّلة في البداية.",
  },
  particlesFlames: {
    label: "اللهب",
    help: "يشتعل كل مفتاح مع نغمته بلون النغمة. هذا أثقل التأثيرات على بطاقة الرسوميات.",
  },
  particlesSparks: {
    label: "الشرر",
    help: "شرر صغير لامع يتطاير من كل مفتاح.",
  },
  particlesEmbers: {
    label: "الجمر",
    help: "جمر متوهج يرتفع ببطء من كل مفتاح.",
  },
  particlesStars: {
    label: "النجوم",
    help: "نجوم ونقاط صغيرة دوارة ترتفع من كل مفتاح ثم تسقط.",
  },
  particlesCustom: {
    label: "جزيئاتك الخاصة",
    help: "جزيئات مصنوعة من الإعدادات أدناه.",
  },
  particlesTexture: {
    label: "الشكل",
    help: "الصورة التي تظهرها كل جزيئة من جزيئاتك.",
    options: { circle: "توهج", spark: "شرارة", smoke: "دخان", star: "نجمة", ring: "حلقة" },
  },
  particlesBlending: {
    label: "المزج",
    help: "«إضافة ضوء» تزيد سطوع ما خلفها، كما تفعل النار. «تغطية» تخفيه، كما يفعل الدخان.",
    options: { additive: "إضافة ضوء", normal: "تغطية" },
  },
  particleOverrideColor: {
    label: "لون خاص",
    help: "عند تعطيله، تأخذ كل جزيئة لون مفتاحها.",
  },
  particleColor: {
    label: "اللون",
    help: "لون جزيئاتك، حين يكون لها لون خاص.",
  },
  particlesOpacity: {
    label: "العتامة",
    help: "مدى عتامة كل جزيئة. القيم الأدنى تجعل ما خلفها أوضح.",
  },
  particleSize: {
    label: "الحجم",
    help: "بعرض المفاتيح.",
  },
  particleAmount: {
    label: "الكمية",
    help: "عدد الجزيئات لكل مفتاح في كل إطار، بمعدل 60 إطارًا في الثانية.",
  },
  particleLife: {
    label: "العمر (ث)",
    help: "المدة التي تبقى فيها كل جزيئة قبل أن تختفي.",
  },
  particleSpeed: {
    label: "سرعة الحركة",
    help: "تسريع كل حركات الجزيئات أو إبطاؤها.",
  },
  particleFadeOut: {
    label: "التلاشي",
    help: "الجزء من عمر الجزيئة الذي تتلاشى خلاله، في نهايته.",
  },
  particlesShrink: {
    label: "الانكماش",
    help: "الجزء الذي تفقده الجزيئة من حجمها. تحت 0 تكبر.",
  },
  particleSpeedX: {
    label: "السرعة الجانبية",
    help: "أعلى سرعة جانبية، بعرض المفاتيح في الثانية.",
  },
  particleSpeedY: {
    label: "سرعة الارتفاع",
    help: "أعلى سرعة ارتفاع، بعرض المفاتيح في الثانية.",
  },
  particlesFriction: {
    label: "المقاومة",
    help: "سرعة تباطؤ الجزيئات أثناء طيرانها.",
  },
  particleRising: {
    label: "الجاذبية",
    help: "فوق 0 تعود الجزيئات إلى الأسفل، وتحت 0 ترتفع أسرع.",
  },
  particlesRotation: {
    label: "الزاوية (°)",
    help: "مقدار ميل كل جزيئة عند بدايتها.",
  },
  particlesRotationRandom: {
    label: "زاوية عشوائية (°)",
    help: "تبدأ كل جزيئة مائلة بمقدار عشوائي يصل إلى هذه الزاوية.",
  },
  particlesRotationSpeed: {
    label: "الدوران (° في الثانية)",
    help: "سرعة دوران كل جزيئة أثناء طيرانها.",
  },
  particleNoiseResX: {
    label: "تفاصيل الانجراف الجانبي",
    help: "القيم الأعلى تجعل الانجراف الجانبي لجزيئات المفاتيح المتجاورة أكثر اختلافًا.",
  },
  particleNoiseStrengthX: {
    label: "الانجراف الجانبي",
    help: "مدى انجراف الجزيئات عشوائيًا إلى الجانبين.",
  },
  particleNoiseResY: {
    label: "تفاصيل انجراف الارتفاع",
    help: "القيم الأعلى تجعل انجراف الارتفاع للمفاتيح المتجاورة أكثر اختلافًا.",
  },
  particleNoiseStrengthY: {
    label: "انجراف الارتفاع",
    help: "مدى انجراف الجزيئات عشوائيًا إلى الأعلى والأسفل أثناء ارتفاعها.",
  },
  particleNoiseStrengthSize: {
    label: "تذبذب الحجم",
    help: "مقدار ما تكبر كل جزيئة وتصغر عشوائيًا.",
  },
  turbulenceXAmplitude: {
    label: "التمايل الجانبي",
    help: "مدى تأرجح الجزيئات من جانب إلى جانب.",
  },
  turbulenceXFrequency: {
    label: "معدل التمايل الجانبي",
    help: "عدد التمايلات في الثانية.",
  },
  turbulenceYAmplitude: {
    label: "تمايل الارتفاع",
    help: "مدى تأرجح الجزيئات إلى الأعلى والأسفل أثناء ارتفاعها.",
  },
  turbulenceYFrequency: {
    label: "معدل تمايل الارتفاع",
    help: "عدد التمايلات في الثانية.",
  },
  particleYOffset: {
    label: "ارتفاع البداية",
    help: "بعرض المفاتيح فوق المفتاح.",
  },
  particleDistributionX: {
    label: "البداية على عرض المفتاح",
    help: "موضع بداية كل جزيئة على عرض مفتاحها.",
    options: { across: "في أي مكان على عرضه", centre: "في وسطه" },
  },
  particleDistributionXSpread: {
    label: "انتشار البداية (%)",
    help: "الجزء من عرض المفتاح الذي تبدأ منه الجزيئات.",
  },
  particleDistributionY: {
    label: "البداية على طول المفتاح",
    help: "موضع بداية كل جزيئة على طول مفتاحها.",
    options: { hitLine: "عند خط الإصابة", key: "في أي مكان على سطحه" },
  },
  particleDistributionZ: {
    label: "الطبقة",
    help: "هل تخفي المفاتيح الجزيئات، أم تغطي الجزيئات البيانو.",
    options: { behind: "خلف المفاتيح", front: "أمام البيانو" },
  },

  // Labels
  pitchNotationSystem: {
    label: "أسماء النغمات",
    help: "طريقة كتابة الأسماء على النغمات والمفاتيح. دو هي دائمًا ⁨C⁩.",
    options: { auto: "كما تكتبها لغتي", letters: "الحروف: ⁨C D E⁩", solfege: "صولفيج: دو ري مي" },
  },
  noteLabel: {
    label: "تسميات النغمات",
    help: "التسميات على كل نغمة: يمكنك اختيار أي منها، أو لا شيء. لتحديد إصبع نغمة، اضغط عليها ثم اضغط رقمًا من 1 إلى 5.",
    options: { name: "اسم النغمة", keyBinding: "زر لوحة المفاتيح", fingering: "الإصبع" },
  },
  noteLabelColor: {
    label: "لون نص النغمة",
    help: "لون النص على كل نغمة.",
  },
  showKeyNamesOnPianoWhite: {
    label: "الأسماء على المفاتيح البيضاء",
    help: "يعرض كل مفتاح أبيض اسم نغمته.",
  },
  showKeyNamesOnPianoBlack: {
    label: "الأسماء على المفاتيح السوداء",
    help: "يعرض كل مفتاح أسود اسم نغمته.",
  },
  showPianoKeyNameFlats: {
    label: "تسمية المفاتيح السوداء بالبيمول",
    help: "⁨ري♭⁩ بدلًا من ⁨دو♯⁩، على المفاتيح فقط. أما النغمات فتتبع سلم الأغنية.",
  },
  octaveLabel: {
    label: "الأوكتاف في أسماء المفاتيح",
    help: "إضافة رقم الأوكتاف إلى الأسماء على المفاتيح، مثل ⁨دو4⁩.",
    options: { none: "بلا", all: "على كل مفتاح", onlyC: "على دو فقط" },
  },
  showKeyBindingsOnPiano: {
    label: "أزرار لوحة المفاتيح على البيانو",
    help: "يعرض كل مفتاح زر لوحة المفاتيح الذي يعزفه.",
  },
  showChords: {
    label: "أسماء التآلفات",
    help: "اسم كل تآلف تكونه النغمات، بما فيها ما تبقيه الدواسة.",
  },
  chordLabelStyle: {
    label: "شكل اسم التآلف",
    help: "طريقة رسم اسم كل تآلف.",
    options: { bar: "شريط فوق مفاتيح التآلف", ribbon: "شريط عريض عبر الأعمدة" },
  },
  chordLabelPlacement: {
    label: "موضع اسم التآلف",
    help: "أعلى التآلف هو طرفه البعيد عن البيانو.",
    options: {
      above: "فوق التآلف",
      top: "في أعلى التآلف",
      middle: "في وسطه",
      bottom: "في أسفل التآلف",
      below: "تحت التآلف",
    },
  },
  showChordRomanNumerals: {
    label: "الأرقام الرومانية",
    help: "درجة كل تآلف في سلم الأغنية، مثل ⁨V7⁩.",
  },
  chordBlocks: {
    label: "مربعات النغمات",
    help: "مربع فوق كل نغمة من تآلف مسمى يبين دور النغمة فيه.",
    options: { none: "بلا", tone: "نغمة التآلف", degree: "درجة السلم" },
  },
  chordToneNotation: {
    label: "كتابة مربعات النغمات",
    help: "رموز قصيرة أو كلمات كاملة في مربعات النغمات.",
    options: { simple: "مختصرة: ⁨R ♭3 5⁩", full: "كاملة: الأصل ♭الثالثة الخامسة" },
  },
  chordMarkRoot: {
    label: "تمييز الأصل",
    help: "يحمل أصل كل تآلف مربعًا ذهبيًا.",
  },

  // Lyrics
  lyricsEnabled: {
    label: "الكلمات",
    help: "عرض كلمات الأغنية، إن وُجدت، سطرًا بعد سطر.",
  },
  lyricsBackground: {
    label: "لون الخلفية",
    help: "لون الشريط خلف الكلمات.",
  },
  lyricsFontColor: {
    label: "لون النص",
    help: "لون الكلمات التي لم تأت بعد.",
  },
  lyricsFontColorPlayed: {
    label: "لون النص المغنى",
    help: "لون الكلمات التي غُنيت.",
  },
  lyricsFontColorActive: {
    label: "لون المقطع اللفظي المغنى الآن",
    help: "يبرز المقطع اللفظي الحالي بهذا اللون.",
  },
  lyricsFontSize: {
    label: "حجم النص (⁨px⁩)",
    help: "حجم كتابة الكلمات.",
  },
  lyricsY: {
    label: "الارتفاع (% من الأعلى)",
    help: "موضع منتصف سطر الكلمات في المشهد. 0 هو الحافة العليا.",
  },
  lyricsCursorEnabled: {
    label: "المؤشر",
    help: "نقطة فوق المقطع اللفظي المغنى الآن.",
  },
  lyricsBouncingCursor: {
    label: "مؤشر قافز",
    help: "تقفز النقطة من كل مقطع لفظي إلى الذي يليه.",
  },

  // Coding
  enableColorCodingNote: {
    label: "تلوين النغمات حسب اسمها",
    help: "لكل نغمة من النغمات الاثنتي عشرة لونها الخاص.",
  },
  enableColorCodingNotePiano: {
    label: "تلوين المفاتيح حسب اسم نغمتها",
    help: "يضيء كل مفتاح بلون نغمته ما دام صوتها مسموعًا.",
  },
  colorCodeNote0: { label: "دو", help: "لون كل دو." },
  colorCodeNote1: { label: "دو♯ أو ري♭", help: "لون كل دو دييز أو ري بيمول." },
  colorCodeNote2: { label: "ري", help: "لون كل ري." },
  colorCodeNote3: { label: "ري♯ أو مي♭", help: "لون كل ري دييز أو مي بيمول." },
  colorCodeNote4: { label: "مي", help: "لون كل مي." },
  colorCodeNote5: { label: "فا", help: "لون كل فا." },
  colorCodeNote6: { label: "فا♯ أو صول♭", help: "لون كل فا دييز أو صول بيمول." },
  colorCodeNote7: { label: "صول", help: "لون كل صول." },
  colorCodeNote8: { label: "صول♯ أو لا♭", help: "لون كل صول دييز أو لا بيمول." },
  colorCodeNote9: { label: "لا", help: "لون كل لا." },
  colorCodeNote10: { label: "لا♯ أو سي♭", help: "لون كل لا دييز أو سي بيمول." },
  colorCodeNote11: { label: "سي", help: "لون كل سي." },
  enableColorCodingFinger: {
    label: "تلوين النغمات حسب الإصبع",
    help: "النغمة التي لا تعزفها أي يد تحتفظ بلونها الآخر.",
  },
  enableColorCodingFingerPiano: {
    label: "تلوين المفاتيح حسب الإصبع",
    help: "يضيء كل مفتاح بلون الإصبع الذي يعزفه.",
  },
  colorCodeFinger1Right: { label: "اليد اليمنى، الإصبع 1", help: "لون النغمات التي يعزفها إبهام اليد اليمنى." },
  colorCodeFinger2Right: { label: "اليد اليمنى، الإصبع 2", help: "لون النغمات التي تعزفها سبابة اليد اليمنى." },
  colorCodeFinger3Right: { label: "اليد اليمنى، الإصبع 3", help: "لون النغمات التي تعزفها وسطى اليد اليمنى." },
  colorCodeFinger4Right: { label: "اليد اليمنى، الإصبع 4", help: "لون النغمات التي يعزفها بنصر اليد اليمنى." },
  colorCodeFinger5Right: { label: "اليد اليمنى، الإصبع 5", help: "لون النغمات التي يعزفها خنصر اليد اليمنى." },
  colorCodeFingerDefaultRight: {
    label: "اليد اليمنى، بلا إصبع",
    help: "لون نغمات اليد اليمنى التي لم يُحدد لها إصبع.",
  },
  colorCodeFinger1Left: { label: "اليد اليسرى، الإصبع 1", help: "لون النغمات التي يعزفها إبهام اليد اليسرى." },
  colorCodeFinger2Left: { label: "اليد اليسرى، الإصبع 2", help: "لون النغمات التي تعزفها سبابة اليد اليسرى." },
  colorCodeFinger3Left: { label: "اليد اليسرى، الإصبع 3", help: "لون النغمات التي تعزفها وسطى اليد اليسرى." },
  colorCodeFinger4Left: { label: "اليد اليسرى، الإصبع 4", help: "لون النغمات التي يعزفها بنصر اليد اليسرى." },
  colorCodeFinger5Left: { label: "اليد اليسرى، الإصبع 5", help: "لون النغمات التي يعزفها خنصر اليد اليسرى." },
  colorCodeFingerDefaultLeft: {
    label: "اليد اليسرى، بلا إصبع",
    help: "لون نغمات اليد اليسرى التي لم يُحدد لها إصبع.",
  },

  // Sheet
  enableSheet: {
    label: "عرض النوتة الموسيقية",
    help: "الأغنية بالنوتة الموسيقية، فوق المشهد.",
  },
  enableFullSheet: {
    label: "النوتة الموسيقية وحدها",
    help: "تملأ النوتة الشاشة بدلًا من المشهد.",
  },
  sheetMeasureScroll: {
    label: "تمرير النوتة مع الأغنية",
    help: "عند تعطيله، تُصف الموازير في أسطر، ويبقى السطر الحالي ظاهرًا.",
  },
  sheetMeasureNumbers: {
    label: "أرقام الموازير",
    help: "مواضع ظهور رقم كل مازورة في النوتة.",
    options: { off: "بلا", lineStart: "في بداية كل سطر", every: "على كل مازورة" },
  },
  enableGrandStaff: {
    label: "ربط المدرجين بقوس معقوف",
    help: "قوس المدرج المزدوج، في بداية كل سطر.",
  },
  sheetAutoClef: {
    label: "اختيار مفتاح كل مدرج حسب النغمات",
    help: "عند تعطيله، يكون المدرج الأول بمفتاح صول والباقي بمفتاح فا.",
  },
  overrideTimeSignature: {
    label: "الميزان",
    help: "الميزان الذي تُكتب به النوتة. يمكنك اختيار ميزان آخر إن كان ميزان الأغنية خاطئًا.",
    options: {
      auto: "من الأغنية",
      "2/4": "2/4",
      "3/4": "3/4",
      "4/4": "4/4",
      "5/4": "5/4",
      "2/2": "2/2",
      "6/8": "6/8",
      "9/8": "9/8",
      "12/8": "12/8",
    },
  },
  sheetMinNoteDenom: {
    label: "أقصر قيمة زمنية",
    help: "أقصر نغمة تكتبها النوتة. ويمكن كتابة ثلاثياتها أيضًا.",
    options: {
      "4": "سوداء",
      "8": "ذات السن",
      "16": "ذات السنين",
      "32": "ذات الأسنان الثلاثة",
      "64": "ذات الأسنان الأربعة",
    },
  },
  hideRestsBelow: {
    label: "إخفاء السكتات الأقصر من",
    help: "حذف السكتات القصيرة، لتسهل قراءة النوتة.",
    options: {
      none: "عدم الإخفاء",
      "4": "سكتة سوداء",
      "8": "سكتة ذات السن",
      "16": "سكتة ذات السنين",
      "32": "سكتة ذات الأسنان الثلاثة",
    },
  },
  renderSheetCursor: {
    label: "المؤشر",
    help: "خط يحدد الموضع في الأغنية.",
  },
  sheetColorActiveNotes: {
    label: "تلوين النغمات المسموعة",
    help: "يتغير لون النغمات في النوتة ما دام صوتها مسموعًا.",
  },
  sheetColorByTrack: {
    label: "النغمات المسموعة بلون مسارها",
    help: "عند تعطيله، تأخذ اللون أدناه.",
  },
  sheetActiveNotesColor: {
    label: "لون النغمة المسموعة",
    help: "لون النغمة في النوتة ما دام صوتها مسموعًا.",
  },
  sheetHighlightActiveNotes: {
    label: "توهج خلف النغمات المسموعة",
    help: "ضوء خافت خلف كل نغمة في النوتة ما دام صوتها مسموعًا.",
  },
  sheetActiveHighlightColor: {
    label: "لون التوهج",
    help: "لون الضوء خلف النغمات المسموعة.",
  },
  sheetActiveGrowEffect: {
    label: "تكبير النغمات المسموعة",
    help: "تكبر النغمة في النوتة ما دام صوتها مسموعًا.",
  },
  sheetRenderInputNotes: {
    label: "رسم النغمات المعزوفة",
    help: "يظهر كل مفتاح مضغوط على شكل نغمة عند المؤشر.",
  },
  sheetShowHoverInfo: {
    label: "أسماء النغمات تحت مؤشر الفأرة",
    help: "عند الإشارة إلى نغمة أو تآلف في النوتة، تظهر أسماء نغماته.",
  },
  sheetBgColor: {
    label: "لون الورق",
    help: "اللون خلف النوتة الموسيقية. على الورق الداكن يصبح الحبر فاتحًا.",
  },

  // PDF
  pdfExportButtonGroup: {
    label: "حفظ النغمات بصيغة ⁨PDF⁩",
    help: "فتح نافذة تحفظ النغمات المتساقطة للأغنية المفتوحة في صفحات بالطول المحدد.",
  },
  exportPdfBackground: {
    label: "استخدام ألوان الخلفية",
    help: "تأخذ الصفحات ألوان الأعمدة والمفاتيح. عند تعطيله، تُطبع على ورق أبيض.",
  },

  // Offline
  offlineCache: {
    label: "إدارة الملفات دون اتصال",
    help: "عرض حجم التطبيق والأغاني وأصوات البيانو، مع حفظ كل منها أو إزالته.",
  },
  autoCacheSongs: {
    label: "إبقاء الأغاني محفوظة",
    help: "حفظ كل الأغاني المضمنة الآن، ومرة أخرى بعد كل تحديث.",
  },
  autoCacheSounds: {
    label: "إبقاء أصوات البيانو محفوظة",
    help: "حفظ كل مجموعات الأصوات الآن، ومرة أخرى بعد كل تحديث.",
  },
};
