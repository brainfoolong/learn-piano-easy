/**
 * The rules a machine checks in each locale's translations: its script, its kept words and its marks.
 * `src/i18n/translation-rules.test.ts` reads them.
 *
 * - **A script is named by its Unicode script,** matched by `Script_Extensions`. A mark that several
 *   scripts share, such as the Japanese long vowel `ー`, then counts for each of them.
 * - **A locale's scripts follow its alphabet in the locale table,** so a row names its alphabet once.
 * - **A locale's style guide fills its kept words and its marks.** Its *Kept words* section lists what
 *   stays as it is, such as MIDI, and its *Marks* section gives each rule with the pattern here.
 */
import type { Alphabet, LanguageCode } from "./locale-table";

/** The Unicode scripts each alphabet writes in, by their `Script_Extensions` names. */
export const SCRIPTS: Record<Alphabet, readonly string[]> = {
  latin: ["Latin"],
  han: ["Han"],
  devanagari: ["Devanagari"],
  arabic: ["Arabic"],
  bengali: ["Bengali"],
  cyrillic: ["Cyrillic"],
  japanese: ["Han", "Hiragana", "Katakana"],
};

/** One rule of a locale's marks: when a text matches `when`, it must match `must` and never `mustNot`. */
export interface MarkRule {
  /** The rule as the style guide states it, such as "A question opens with ¿". */
  says: string;
  /** The texts the rule covers. Every text, without it. */
  when?: RegExp;
  must?: RegExp;
  mustNot?: RegExp;
}

/** A locale's rules beyond its script. */
export interface Typography {
  /** The words that stay as they are in any script, such as the site's name. */
  kept: readonly string[];
  marks: readonly MarkRule[];
}

/**
 * The song guides' titles and names in Latin letters, which every non-Latin locale keeps. Each longer
 * form stands before the shorter one it holds.
 */
const SONG_NAMES: readonly string[] = [
      "God Rest Ye Merry, Gentlemen", "Ihr Kinderlein, kommet", "Kling, Glöckchen, klingelingeling", "Kommet, ihr Hirten",
      "Morgen, Kinder, wird's nichts geben", "Morgen, Kinder, wird's was geben", "Branle de l'Official",
      "Seht, wie die Sonne dort sinket", "Tochter Zion, freue dich", "Baa, Baa, Black Sheep", "Minuit, chrétiens",
      "The Franklin Square Song Collection", "Fantasia on British Sea Songs", "Süßer die Glocken nie klingen",
      "John Henry Hopkins Jr.", "Mirth Without Mischief", "The Sailor's Hornpipe", "The College Hornpipe",
      "Three Kings of Orient", "Cantique de Noël", "The First Noel", "Die Weihnachtsglocken", "Root & Cady",
      "Friedrich Wilhelm Kritzinger", "Friedrich Heinrich Ranke", "Johannes Daniel Falk", "John Sullivan Dwight",
      "John Francis Wade", "Eliphalet Oram Lyte", "Frederick Oakeley", "Placide Cappeau", "Bernhard Brähmig",
      "Vladimir Begichev", "Ernst Anschütz", "Phillips Brooks", "Lewis Redner", "Benjamin Hanby", "Frederic Austin",
      "Davies Gilbert", "Giuseppe Cenci", "Samuel Reay", "Jane Taylor", "James Aird", "Roquemaure", "Liederstrauß",
      "O Tannenbaum", "O du fröhliche", "O sanctissima", "Adeste fideles", "Our Song Birds", "La Mantovana",
      "Neon Chase", "Spanish Ladies", "Old Macdougal", "St. Louis", "Ohio", "Hopkins", "Hanby", "Falk", "Noël",
      "Luther's Cradle Hymn", "Lilly's Secret", "Breitkopf & Härtel", "auf der G-Saite", "Händel-Werke-Verzeichnis",
      "James R. Murray", "Mildred J. Hill", "Peter J. Wilhousky", "R. R. Terry", "William H. Cummings",
      "William J. Kirkpatrick", "Abend wird es wieder", "Alle Jahre wieder", "Angels We Have Heard on High", "Antioch",
      "August Wilhelmj", "Away in a Manger", "Black Flag Jig", "Blow the Man Down", "Béla Kéler", "Carl Gottlieb Hering",
      "Carl Riedel", "Charles Wood", "Christian Heinrich Rinck", "Christoph von Schmid", "Cradle Song",
      "Das Blumenkörbchen", "Deck the Halls", "Deck the hall", "Drunken Sailor", "Durand", "Edmund Sears", "Eduard Ebel",
      "Eine kleine Nachtmusik", "Elvira Madigan", "Emily Huntington Miller", "Es ist ein Ros entsprungen",
      "Franz Xaver Süssmayr", "Friedrich Silcher", "George Ratcliffe Woodward", "Giulietta Guicciardi",
      "Gloria in excelsis Deo", "Good Morning to All", "Gustav Beckmann", "Gustave Samazeuilh", "Gymnopédies", "HWV",
      "Haul Away Joe", "Immortal Beloved", "Isaac Watts", "James Chadwick", "James Lord Pierpont", "Jehan Tabourot",
      "Johann Abraham Peter Schulz", "John Mason Neale", "Jolly Old Saint Nicholas", "Karl Enslin",
      "Karl Friedrich Splittegarb", "Konrad Ameln", "Lacrimosa", "Last Horizon", "Leise rieselt der Schnee",
      "Lent et douloureux", "Les Anges dans nos campagnes", "Lift up your heads", "Louis Lambillotte", "Lowell Mason",
      "Ludwig Nohl", "Ludwig Rellstab", "Ludwika", "Mykola Leontovych", "Nesem vám noviny", "Nos Galan",
      "One Horse Open Sleigh", "Orchésographie", "Patty", "Piae Cantiones", "Ray Conniff", "Richard Storrs Willis",
      "Sarah Josepha Hale", "School Chimes", "Sebastián Iradier", "Shchedryk", "Song Stories for the Kindergarten",
      "Soylent Green", "Tempus adest floridum", "The Bad News Bears", "The Christian Register", "The Little Corporal",
      "Therese Malfatti", "Thoinot Arbeau", "Thomas Helmore", "Thomas Oliphant", "We Wish You a Merry Christmas",
      "Wilhelm Gottlieb Becker", "Wilhelm Hey", "William Sandys", "con sordina", "senza sordino", "pianissimo", "ostinato",
      "Ebel", "Gloria", "Nohl", "Oliphant", "Schmid", "Terry", "Wilhelmj", "Wilhousky",
];

/** Each locale's rules. English is the source, and German is checked by eye, so the test skips both. */
export const TYPOGRAPHY: Record<LanguageCode, Typography> = {
  en: { kept: [], marks: [] },
  de: { kept: [], marks: [] },
  es: {
    kept: [
      "Learn Piano Easy", "Hark! The Herald Angels Sing", "Moulin Rouge!", "Ah! vous dirai-je, maman","Web MIDI", "MIDI", "MusicXML", "GitHub", "Matomo", "Chrome", "Edge", "Firefox", "Safari",
      "XP", "BPM", "FPS", "PDF", "kHz", "Hz", "dB", "ms", "KB", "MB", "combo", "Combo", "tempo", "Tempo",
      "legato", "staccato", "crescendo", "diminuendo", "forte", "piano", "Piano", "Error",
    ],
    marks: [
      { says: "A question opens with ¿ and closes with ?, one pair per question", mustNot: /^[^¿]*\?|\?[^¿]*\?|¿[^?]*¿|¿[^?]*$/ },
      { says: "An exclamation opens with ¡ and closes with !, one pair per exclamation", mustNot: /^[^¡]*!|![^¡]*!|¡[^!]*¡|¡[^!]*$/ },
      { says: "An opening mark is never followed by a space, and a closing mark never follows one", mustNot: /[¿¡«]\s|\s[?!»]/ },
      { says: "A quote stands in « », never in straight or curly double quotes", mustNot: /["“”]/ },
      { says: "No space stands before a colon, a semicolon or a percent sign", mustNot: /\s[:;%]/ },
      { says: "An ellipsis is the one character …", mustNot: /\.\.\./ },
    ],
  },
  zh: {
    kept: [
      ...SONG_NAMES,
      "Learn Piano Easy", "Wikimedia Commons", "Wikipedia", "Mutopia", "Web MIDI", "MIDI", "MusicXML", "GitHub", "Matomo",
      "Chrome", "Edge", "Firefox", "Safari", "XP", "BPM", "bpm", "FPS", "PDF", "USB", "kHz", "Hz", "dB", "ms", "KB", "MB",
      "BWV", "K.", "mezzo-piano", "mezzo-forte", "ritardando", "rallentando", "crescendo", "decrescendo", "diminuendo",
      "piano", "forte", "rit.", "rall.", "decresc.", "cresc.", "dim.", "a tempo", "do", "re", "mi", "fa", "sol", "la", "si",
      "mp", "mf", "pp", "ff", "p", "f", "Ped.", "Do", "Re", "Mi", "JavaScript", "MIT", "Cookie", "3D", "px", "Esc",
      "Q", "W", "Z", "M", "I", "R", "V",
      "In the Hall of the Mountain King", "Carol of the Bells", "Ode to Joy", "Jingle Bells", "Mary Had a Little Lamb",
      "Für Elise", "Twinkle Twinkle Little Star", "Canon in D", "Carol", "Noel", "o",
    ],
    marks: [
      { says: "A comma, question, exclamation or semicolon is full width", mustNot: /(?<!\d),|,(?!\d)|[?!;]/ },
      { says: "A colon is full width", mustNot: /:/ },
      { says: "A sentence ends with 。, and an ASCII period stands only inside a number", mustNot: /(?<!\d)\.|\.(?!\d)/ },
      { says: "A quote stands in “ ”, with ‘ ’ inside", mustNot: /["'「」『』«»]/ },
      { says: "Parentheses are full width", mustNot: /[()]/ },
      { says: "An ellipsis is two characters: ……", mustNot: /\.\.\.|(?<!…)…(?!…)/ },
      { says: "A dash is two characters: ——", mustNot: /(?<!—)—(?!—)/ },
      { says: "A range of numbers takes ～", mustNot: /\d[-–]\d/ },
      { says: "No space stands beside a full-width mark", mustNot: /\s[，。？！：；、“”‘’（）《》～…]|[，。？！：；、“”‘’（）《》～]\s/ },
      { says: "A space stands between a Han character and a Latin letter or a digit", mustNot: /\p{Unified_Ideograph}[A-Za-z0-9]|[A-Za-z0-9]\p{Unified_Ideograph}/u },
      { says: "No space stands between two Han characters", mustNot: /\p{Unified_Ideograph}\s+\p{Unified_Ideograph}/u },
    ],
  },
  hi: {
    kept: [
      "Hark! The Herald Angels Sing", "Moulin Rouge!", "Ah! vous dirai-je, maman", ...SONG_NAMES,
      "In the Hall of the Mountain King", "Carol of the Bells", "Ode to Joy", "Jingle Bells", "Mary Had a Little Lamb",
      "Für Elise", "Twinkle Twinkle Little Star", "Canon in D",
      "Learn Piano Easy", "Wikimedia Commons", "Wikipedia", "Mutopia", "Web MIDI", "MIDI", "MusicXML", "GitHub", "Matomo",
      "Chrome", "Edge", "Firefox", "Safari", "JavaScript", "MIT", "XP", "BPM", "bpm", "FPS", "PDF", "USB", "kHz", "Hz",
      "dB", "ms", "KB", "MB", "px", "3D", "Esc", "BWV", "K.", "HWV",
      "mezzo-piano", "mezzo-forte", "ritardando", "rallentando", "piano", "forte", "rit.", "rall.", "decresc.", "cresc.",
      "dim.", "a tempo", "Ped.", "mp", "mf", "pp", "ff", "p", "f",
    ],
    marks: [
      { says: "A sentence ends with the danda ।, and an ASCII period stands only inside a number", mustNot: /(?<!\d)\.|\.(?!\d)/ },
      { says: "The double danda ॥ is never used", mustNot: /॥/ },
      { says: "No space stands before ।, ?, !, :, ;, a comma or %", mustNot: /\s[।?!:;,%]/ },
      { says: "A quote stands in “ ”, with ‘ ’ inside", mustNot: /["'«»]/ },
      { says: "Digits are Western", mustNot: /[०-९]/ },
      { says: "A nukta is the combining sign after its letter, never a precomposed letter", mustNot: /[क़-य़]/ },
      { says: "No nukta sits on क, ख or ग", mustNot: /[कखग]़/ },
      { says: "A nasal vowel at a word's end takes the chandrabindu", mustNot: /(?:[एआऊ]|ा|ू)ं(?![\p{L}\p{M}])/u },
      { says: "A range of numbers takes –", mustNot: /\d-\d/ },
    ],
  },
  ar: { kept: [], marks: [] },
  pt: { kept: [], marks: [] },
  id: { kept: [], marks: [] },
  bn: { kept: [], marks: [] },
  ru: { kept: [], marks: [] },
  fr: { kept: [], marks: [] },
  ur: { kept: [], marks: [] },
  ja: { kept: [], marks: [] },
};
