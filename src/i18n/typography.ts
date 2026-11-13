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
      "See, the conqu'ring hero comes", "A Midsummer Night's Dream", "Toccata and Fugue in D minor",
      "The Twelve Days of Christmas", "Last Night of the Proms", "Der Zauberlehrling", "Judas Maccabaeus",
      "George Frideric Handel", "Franz Xaver Gruber", "Friedrich Schiller", "Leopold Stokowski", "Johann Strauss II",
      "Rimsky-Korsakov", "The Tree of Life", "The Lone Ranger", "Bolshoi Ballet", "Princess Royal", "Max Fleischer",
      "Adolphe Adam", "Mickey Mouse", "Joseph Mohr", "John Stainer", "Scott Joplin", "Silent Night", "O Holy Night",
      "Yankee Doodle", "William Tell", "Paul Dukas", "Henry Wood", "Black Swan", "Swan Lake", "The Sting", "New Paris", "New London",
      "Má vlast", "Die Hard",
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
      "2001: A Space Odyssey", "The Carnival of the Animals", "Days of Heaven", "The Lady of the Lake", "Fantasia 2000",
      "Night on Bald Mountain", "Luther’s Cradle Hymn", "Orpheus in the Underworld", "Galop infernal", "The King's Speech",
      "Ordinary People", "Moulin Rouge", "Folies Bergère", "Joseph Franz von Lobkowitz", "Razumovsky", "Johann Pachelbel",
      "The Pianist", "Władysław Szpilman", "Clair de lune", "Suite bergamasque", "Paul Verlaine", "Ocean’s Eleven",
      "Branle de l’Official", "The Shining", "Michael Praetorius", "Johannes Brahms", "John F. Kennedy",
      "Charles Dickens", "A Christmas Carol", "The Royal Tenenbaums", "Claude Debussy", "Erik Satie", "Georges Bizet",
      "Henrik Ibsen", "Peer Gynt", "The Social Network", "Barry Lyndon", "Charles Wesley", "Hungarian Dances",
      "The Great Dictator", "Charlie Chaplin", "Arthur Sullivan", "Death in Venice", "Morning Mood", "Luchino Visconti",
      "Thomas Edison", "Erich Kästner", "Richard Strauss", "Friedrich Nietzsche", "Stanley Kubrick", "Terrence Malick",
      "Walter Scott", "Walt Disney", "Martin Luther", "Saint-Saëns", "Ave Maria", "Dies irae", "Joseph Haydn",
      "Fantasia", "Aquarium", "Se7en", "Air", "Opus", "Op.", "No.", "Schubert", "Ellen", "Hexham", "Newcastle", "Boléro",
      "Allegretto", "Ravel", "Offenbach", "Syracuse", "Debussy", "Bellagio", "Berlioz", "Amadeus", "Salieri", "Speyer",
      "Scrooge", "Wenceslas", "Satie", "Gymnopédie", "Bizet", "Carmen", "Grieg", "Ibsen", "Peer", "Christiania",
      "Handel", "Sarabande", "Louis", "Brahms", "csárdás", "Messiah", "Olomouc", "Requiem", "Adagietto", "Andante",
      "Moonlight", "Mahler", "Lone Ranger", "Tchaikovsky", "Mussorgsky", "Shakespeare", "Smetana", "Rossini", "Goethe",
      "Vltava", "Victoria", "Tiverton", "Erlangen", "Cornwall", "Leipzig", "Weimar", "Giselle", "Sadko", "Joshua",
      "Popeye", "Oberndorf", "Gruber", "Mohr", "Joplin", "Dukas", "Wade", "Redner", "Jaws", "Quint", "Bald Mountain",
];

/**
 * The kept words of a locale whose script is not Latin and whose guide keeps every song title in Latin
 * letters. Each title with a mark of its own stands first, so a mark rule never reads it.
 */
const KEPT_IN_OWN_SCRIPT: readonly string[] = [
  "Hark! The Herald Angels Sing", "Moulin Rouge!", "Ah! vous dirai-je, maman", ...SONG_NAMES,
  "Old MacDonald Had a Farm", "Old MacDonald",
  "In the Hall of the Mountain King", "Carol of the Bells", "Ode to Joy", "Jingle Bells", "Mary Had a Little Lamb",
  "Für Elise", "Twinkle, Twinkle, Little Star", "Twinkle Twinkle Little Star", "Canon in D",
  "Mary", "Elise", "Carol", "Noel", "o",
  "Learn Piano Easy", "Wikimedia Commons", "Wikipedia", "Mutopia", "Web MIDI", "MIDI", "MusicXML", "GitHub", "Matomo",
  "Chrome", "Edge", "Firefox", "Safari", "JavaScript", "MIT", "XP", "BPM", "bpm", "FPS", "PDF", "USB", "kHz", "Hz",
  "dB", "ms", "KB", "MB", "px", "3D", "Esc", "BWV", "K.", "HWV",
  "mezzo-piano", "mezzo-forte", "ritardando", "rallentando", "piano", "forte", "rit.", "rall.", "decresc.", "cresc.",
  "dim.", "a tempo", "Ped.", "mp", "mf", "pp", "ff", "p", "f",
  "Q", "W", "Z", "M", "I", "R", "V",
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
    kept: [...KEPT_IN_OWN_SCRIPT, "Do", "Re", "Mi"],
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
  ar: {
    kept: [...KEPT_IN_OWN_SCRIPT, "legato", "staccato"],
    marks: [
      { says: "A comma is ،, and a Latin comma stands only inside a number", mustNot: /(?<!\d),|,(?!\d)/ },
      { says: "A semicolon is ؛", mustNot: /;/ },
      { says: "A question ends with ؟", mustNot: /\?/ },
      { says: "No space stands before ،, ؛, ؟, !, :, a period or %", mustNot: /\s[،؛؟!:.%]/ },
      { says: "A space follows ، and ؛ before the next word", mustNot: /[،؛](?=\p{L})/u },
      { says: "A quote stands in « », never in straight or curly double quotes", mustNot: /["“”„]/ },
      { says: "Digits are Western", mustNot: /[٠-٩۰-۹]/ },
      { says: "No tatweel stretches a word", mustNot: /ـ/ },
      { says: "The tanween of the accusative sits on the letter before the alef", mustNot: /اً/ },
      { says: "An ellipsis is the one character …", mustNot: /\.\.\./ },
      { says: "A range between digits takes words, never a dash", mustNot: /\d\s?[-–—]\s?\d/ },
    ],
  },
  pt: {
    kept: [
      "Learn Piano Easy", "Hark! The Herald Angels Sing", "Moulin Rouge!", "Ah! vous dirai-je, maman", "Web MIDI", "MIDI", "MusicXML",
      "GitHub", "Matomo", "Chrome", "Edge", "Firefox", "Safari", "XP", "BPM", "FPS", "PDF", "USB", "kHz", "Hz", "dB", "ms", "KB", "MB",
      "combo", "Combo", "tempo", "Tempo", "legato", "staccato", "crescendo", "diminuendo", "forte", "piano", "Piano",
      "coda", "fermata", "Normal", "Volume", "Backup", "backup", "app", "player", "quiz", "Quiz", "OK",
      "App", "Cursor", "Envelope", "Layout", "Menu", "Site", "Zoom", "Ctrl", "Alt", "Shift", "Meta", "Original", "Ragtime",
    ],
    marks: [
      { says: "A quote stands in “ ”, never in straight quotes or « »", mustNot: /["«»„]/ },
      { says: "No ¿ or ¡ opens a question or an exclamation", mustNot: /[¿¡]/ },
      { says: "No space stands before a period, a comma, a colon, a semicolon, ?, ! or %", mustNot: /\s[.,:;?!%]/ },
      { says: "An ellipsis is the one character …", mustNot: /\.\.\./ },
      { says: "The 1990 agreement drops the trema", mustNot: /[gq]ü/iu },
      {
        says: "The 1990 agreement drops the accent of idéia, vôo, lêem and pára",
        mustNot: /(?<!\p{L})(?:idéias?|assembléias?|jóias?|heróic[oa]s?|estréia|vôos?|enjôos?|lêem|vêem|crêem|dêem|pára|pêlos?|pólos?)(?!\p{L})/iu,
      },
      { says: "The learner is você, never tu or vós", mustNot: /(?<!\p{L})(?:tu|teus?|tuas?|ti|contigo|vós|vossos?|vossas?)(?!\p{L})/iu },
      { says: "A welcome is Boas-vindas, never a gendered Bem-vindo", mustNot: /bem-vind[oa]s?/iu },
      {
        says: "A word is Brazil's, never Portugal's: tela, arquivo, usuário, celular, registro, equipe",
        mustNot: /(?<!\p{L})(?:ecrãs?|ficheiros?|utilizador(?:es)?|telemóve(?:l|is)|registos?|equipas?)(?!\p{L})/iu,
      },
      { says: "A range between digits takes – with no spaces", mustNot: /\d\s+[–—-]\s*\d|\d\s*[–—-]\s+\d|\d—\d/ },
    ],
  },
  id: {
    kept: [
      "Learn Piano Easy", "Hark! The Herald Angels Sing", "Moulin Rouge!", "Ah! vous dirai-je, maman", "Web MIDI", "MIDI", "MusicXML",
      "GitHub", "Matomo", "Chrome", "Edge", "Firefox", "Safari", "XP", "BPM", "FPS", "PDF", "USB", "kHz", "Hz", "dB", "ms", "KB", "MB",
      "legato", "staccato", "crescendo", "diminuendo", "forte", "piano", "Piano", "tempo", "Tempo", "coda", "fermata",
      "Normal", "Volume", "volume", "OK", "Ctrl", "Alt", "Shift", "Meta", "Esc", "Enter", "Zoom", "Ragtime", "quiz", "Kuis",
    ],
    marks: [
      { says: "A quote stands in “ ”, never in straight quotes or « »", mustNot: /["«»„]/ },
      { says: "No space stands before a period, a comma, a colon, a semicolon, ?, ! or %", mustNot: /\s[.,:;?!%]/ },
      { says: "An ellipsis is the one character …", mustNot: /\.\.\./ },
      { says: "The learner is kamu, never Anda, engkau or slang", mustNot: /(?<!\p{L})(?:anda|engkau|gue|gua|gw|lo|lu|elo|elu)(?!\p{L})/iu },
      { says: "No word asks please: no silakan, mohon or tolong", mustNot: /(?<!\p{L})(?:silakan|silahkan|mohon|tolong)(?!\p{L})/iu },
      {
        says: "The text is standard Indonesian, with no bahasa gaul",
        mustNot: /(?<!\p{L})(?:nggak|ngga|gak|enggak|banget|aja|udah|udh|kayak|gimana|bikin|dong|deh|sih|kok|nih|tuh|yuk|kalo)(?!\p{L})/iu,
      },
      {
        says: "A word takes its standard EYD spelling: praktik, silakan, mengubah, risiko, izin, zaman, teknik",
        mustNot: /(?<!\p{L})(?:prakte[kg]\p{L}*|silahkan|merubah|resiko|ijin|jaman|nasehat|aktifitas|kwalitas|sistim|tehnik|obyek|standart|karir|kreatifitas)(?!\p{L})/iu,
      },
      {
        says: "The preposition di or ke stands apart from the place it names",
        mustNot: /(?<!\p{L})(?:dimana|disini|disana|disitu|kemana|kesini|kesana|diatas|dibawah|didalam|diluar|diantara|disamping|didepan|dibelakang|keatas|kebawah|kedalam)(?!\p{L})/iu,
      },
      { says: "The particle pun stands apart after a question word", mustNot: /(?<!\p{L})(?:apa|siapa|mana|kapan)pun(?!\p{L})/iu },
      {
        says: "A noun is never doubled where a count already shows the plural",
        mustNot: /(?<!\p{L})(?:\d+|dua|tiga|empat|lima|enam|tujuh|delapan|sembilan|sepuluh|beberapa|banyak|semua|para|setiap|tiap)\s+(\p{L}+)-\1(?!\p{L})/iu,
      },
      { says: "A range between digits takes – with no spaces", mustNot: /\d\s+[–—-]\s*\d|\d\s*[–—-]\s+\d|\d—\d/ },
    ],
  },
  bn: { kept: [], marks: [] },
  ru: { kept: [], marks: [] },
  fr: { kept: [], marks: [] },
  ur: { kept: [], marks: [] },
  ja: { kept: [], marks: [] },
};
