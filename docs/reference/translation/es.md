# Spanish: the style guide and glossary

Every writer and reviewer of a Spanish text reads this file whole first. The method is
[translation.md](../../agent/translation.md), and this file adds only what is Spanish. The machine's half
of these rules is the `es` entry of `src/i18n/typography.ts`.

## 1. Variant and readers

- **The variety is neutral Latin American Spanish,** as `es-419` names it. Most Spanish speakers live in
  the Americas, and a reader in Spain reads it without effort.
- **The readers are beginners of every age,** children and adults, who learn piano alone in a browser.
- **A word used only in Spain, or only in one American country, is avoided.** The table below lists the
  usual traps, after Microsoft's Mexican guide, § 5.4.

| Avoid | Write | Why |
|---|---|---|
| ordenador | computadora | Spain only |
| móvil | teléfono, dispositivo | Spain only; *celular* is American only |
| ratón | mouse | Spain only |
| coger | tomar, agarrar | offensive in much of Latin America |
| vídeo | video | the accent is Spanish usage |
| fichero | archivo | Spain only |
| Ajustes | Configuración | Spain's Android says *Ajustes* |
| Hecho | Listo | Spain's Android says *Hecho* |
| Saltar (a step) | Omitir | Spain's Android says *Saltar* |
| por defecto | predeterminado | a calque of *by default* |
| fallo (an error) | error | Microsoft's error-message rule |
| vosotros, vos | ustedes, tú | see *Address* |

## 2. Address

- **The learner is *tú*.** The plural is *ustedes*, never *vosotros*, and *vos* is never used.
- **An instruction in running text is an imperative in *tú*:** *Toca*, *Pon*, *Elige*, *Escucha*.
- **A button, a menu item or a tab is an infinitive or a noun:** *Continuar*, *Abrir canción*,
  *Configuración*. It names what the learner tells the app to do, as Microsoft's § 5.1.13 says.
- **A setting's name is a noun or an infinitive,** and its help text is a plain sentence about what it does.
- **"Please" is dropped,** and so is *favor de*. The warmth sits in the wording.
- **A question to the learner uses *quieres*,** never *deseas*: *¿Quieres salir de esta lección?*
- **The past is simple:** *Terminaste*, never *Has terminado*. This is Latin American usage.
- **An error is impersonal:** *No se pudo guardar.* It names what failed, never the learner's mistake.

## 3. Voice

Warm, plain and short, as a good teacher speaks. Prefer the short everyday word: *pedir* over
*solicitar*, *dar* over *proporcionar*, *pero* over *sin embargo*, *usar* over *utilizar*.

| English | Spanish | Why it reads warm and plain |
|---|---|---|
| Hi, I'm your piano teacher. Shall we play? | ¡Hola! Soy tu profe de piano. ¿Tocamos? | *Profe* is warm in every American country and has no gender. *¿Tocamos?* invites, as the English does. |
| Not quite. Try again. | Casi. Prueba otra vez. | *Casi* is how a teacher softens a miss. *Prueba otra vez* is Microsoft's own form. |
| Every lesson takes you further. Keep going! | Cada lección te lleva más lejos. ¡Sigue así! | *¡Sigue así!* is the everyday cheer. *¡Continúa!* would sound like a machine. |

## 4. Gender

- **No adjective or participle agrees with the learner.** Rewrite the sentence around a verb or a noun.
- *Te damos la bienvenida*, not *Bienvenido*.
- *Todo listo*, not *Estás listo*.
- *¿Seguro que quieres hacerlo?*, not *¿Estás seguro?*
- *Lo lograste*, not *Eres un experto*.
- *Termina una lección de noche*, not *Si eres nocturno*.
- **The teacher has no gender either.** The ape is *tu profe*, never *tu maestro* or *tu maestra*.
- **Where no rewrite works, use a noun of fixed gender,** such as *la persona*. Never write *o/a*, *@*,
  *x* or *-e*.
- **A word that agrees with a thing is fine:** *La nueva versión está lista* agrees with *versión*.

## 5. Terms

One term per idea, in every file. Sources: WP is Spanish Wikipedia, by article title. TC is
teoria.com/es, a Puerto Rican teaching site. PP is a piano shop's teaching blog in Argentina, a weaker
witness. MS is Microsoft's Spanish (Neutral) guide or its terminology collection. AN is Android's
Latin American strings (`values-es-rUS`). AP is Apple's Mexican support pages (`support.apple.com/es-mx`).
GO is Google's Latin American help pages (`hl=es-419`).

### The piano glossary

| English | Spanish | Sources |
|---|---|---|
| key (of the piano) | la tecla | WP *Piano*; TC |
| white key, black key | tecla blanca, tecla negra | WP *Piano*; TC |
| keyboard (the piano's, or a MIDI one) | el teclado | WP *Piano*; TC |
| note | la nota | WP *Nota (sonido)*; TC |
| middle C | el do central | WP *Do (nota)*; PP |
| octave | la octava | WP *Octava*; TC |
| half step, whole step | semitono, tono | WP *Semitono*; TC |
| sharp, flat, natural | sostenido, bemol, becuadro | WP *Alteración (música)*; TC |
| staff | el pentagrama | WP *Pentagrama*; TC |
| grand staff | los dos pentagramas; *el sistema* once explained | WP *Pentagrama*; PP |
| treble clef, bass clef | clave de sol, clave de fa | WP *Clave (notación musical)*; TC |
| ledger line | línea adicional | WP *Línea adicional*; TC |
| landmark (a note read at a glance) | nota guía | the course's own term, defined where it first appears |
| bar | el compás, los compases | WP *Compás (música)*; TC |
| bar line | línea divisoria | WP *Barra de compás*; TC |
| time signature | indicación de compás | WP *Compás (música)*; TC |
| beat (one count of a bar) | el tiempo: *un compás de tres tiempos* | TC; WP *Pulso (música)* |
| the beat (the steady pulse) | el pulso | WP *Pulso (música)*; TC |
| three-four time | compás de tres por cuatro (3/4) | WP *Compás (música)*; TC |
| count-in | conteo previo | the course's own term, defined where it first appears |
| rhythm, tempo | el ritmo, el tempo | WP *Ritmo*, *Tempo*; PP |
| metronome | el metrónomo | WP *Metrónomo*; PP |
| whole, half, quarter note | redonda, blanca, negra | WP *Figura musical*; TC |
| eighth, sixteenth note | corchea, semicorchea | WP *Figura musical*; TC |
| dotted | con puntillo | WP *Puntillo*; TC |
| rest; quarter rest | el silencio; silencio de negra | WP *Silencio (música)*; TC |
| tie | ligadura de prolongación | WP *Ligadura (música)*; TC |
| slur | ligadura de expresión | WP *Ligadura (música)*; PP |
| scale | la escala | WP *Escala musical*; TC |
| major, minor | mayor, menor | WP *Tonalidad (música)*; TC |
| key (of a song) | la tonalidad | WP *Tonalidad (música)*; TC |
| key signature | la armadura | WP *Armadura (música)*; TC |
| chord | el acorde | WP *Acorde*; TC |
| triad | la tríada | WP *Tríada (música)*; TC |
| root | la fundamental | WP *Fundamental (música)*; TC |
| inversion; root position | inversión; estado fundamental | TC; WP *Inversión (música)* |
| broken chord | acorde arpegiado | WP *Arpegio*; PP |
| arpeggio | el arpegio | WP *Arpegio*; PP |
| Alberti bass, waltz bass | bajo de Alberti, bajo de vals | the course's own terms |
| third, fifth, sixth | tercera, quinta, sexta | WP *Intervalo (música)*; TC |
| step, skip (between keys) | paso, salto | the course's own terms, defined where they first appear |
| tune, melody | la melodía | WP *Melodía*; TC |
| phrase | la frase | WP *Fraseo*; TC |
| loud, soft | fuerte, suave | WP *Dinámica (música)*; PP |
| dynamics | los matices | WP *Dinámica (música)*; PP |
| legato, staccato | legato, staccato | WP *Legato*, *Staccato*; PP |
| crescendo, diminuendo | crescendo, diminuendo | WP *Crescendo*; PP |
| fermata | el calderón | WP *Calderón (música)*, one source (see *Open*) |
| sustain pedal | pedal de resonancia; *el pedal derecho* in a lesson | WP *Pedal (piano)*; PP |
| soft pedal | pedal izquierdo | WP *Pedal (piano)*; PP |
| press a pedal, hold it down | pisar el pedal, mantenerlo pisado | the plain verb of a foot |
| fingering | la digitación | WP *Digitación*; PP |
| finger numbers | 1 pulgar, 2 índice, 3 medio, 4 anular, 5 meñique | PP; the course's own lesson |
| thumb, little finger | el pulgar, el meñique | PP; WP *Dedo pulgar*, *Meñique de la mano* |
| right hand, left hand | mano derecha, mano izquierda | WP *Pentagrama*; PP |
| hand position; C position | posición de la mano; posición de do | PP; the course's own term |
| thumb under, finger over | paso del pulgar, cruce de dedos | PP; the course's own terms |
| sight-reading | lectura a primera vista | WP *Lectura a primera vista*; PP |
| play (the piano, a key, a note) | tocar | WP *Pentagrama*; PP |
| practise | practicar | PP; MS *práctica* |
| song; piece | la canción; la pieza | WP *Figura musical*; TC |
| sheet music | la partitura | WP *Partitura*; AP (GarageBand, *Editor de partituras*) |
| pitch | la altura | WP *Altura (música)*; TC |
| transpose | transponer; la transposición | WP *Transposición (música)*; AP (GarageBand). WP allows *transportar* too, but a player's *transporte* is its play controls. |
| fourth | cuarta | WP *Intervalo (música)*; TC |
| open fifth | quinta abierta | the course's own term, since its lessons say it "sounds open". Theory books say *quinta vacía*. |
| major third, minor third | tercera mayor, tercera menor | WP *Intervalo (música)*; TC |
| scale degree | el grado: *el 5.º grado* | WP *Grado (música)*; TC |
| bass note | la nota del bajo | the course's own term |
| low C, high C | el do grave, el do agudo | the course's own landmarks, as § 7 says |
| hairpin (crescendo, diminuendo) | el regulador | WP *Dinámica (música)*, one source |
| stem, note head | la plica, la cabeza de la nota | WP *Figura musical* |
| mark (p, f, rit.) | la indicación | the course's own term |
| waltz | el vals | WP *Vals* |
| piano bench | el banco | everyday word; *banqueta* is a sidewalk in Mexico |
| fingertips | las yemas de los dedos | everyday word |
| call and answer (phrases) | pregunta y respuesta | PP |

### The interface glossary

| English | Spanish | Sources |
|---|---|---|
| Settings | Configuración | MS; AN |
| Songs (the library's panel); library | Canciones; la biblioteca | MS |
| Open, Close, Cancel | Abrir, Cerrar, Cancelar | MS; AN |
| Back, Next, Continue | Atrás, Siguiente, Continuar | MS; AN |
| Done | Listo | MS; AN |
| Skip | Omitir | MS; AN |
| Reset | Restablecer | MS; AN |
| Save, Delete | Guardar, Eliminar | MS; AN |
| Restore | Restaurar | AP; WP *Copia de seguridad* |
| Search | Buscar | MS; AN |
| Play, Pause, Stop (playback) | Reproducir, Pausar, Detener | MS; AN |
| Loop (button); a loop | Repetir; la repetición en bucle | MS |
| Speed | Velocidad | GO (YouTube, *velocidad de reproducción*), one source |
| Volume, Mute | Volumen, Silenciar | MS; AN |
| Fullscreen | Pantalla completa | MS; AN |
| Theme; Light, Dark, Like the system | Tema; Claro, Oscuro, Como el sistema | MS |
| Language | Idioma | MS |
| computer keyboard; computer key | teclado de la computadora; tecla | MS *computadora*; AN |
| touch screen | pantalla táctil | WP *Pantalla táctil*; AP; MS |
| device; connect | dispositivo; conectar | MS; AN |
| browser | el navegador | GO (Chrome); WP *Navegador web* |
| offline | sin conexión | MS |
| Install, Update | Instalar, Actualizar | MS; AN for *Actualizar* |
| app | la aplicación | MS, which asks for the full word |
| Help, Tip | Ayuda, Consejo | MS |
| Try again | Prueba otra vez | MS |
| tap or click a control | selecciona | MS § 4.3, a verb for every input |
| press a computer key | presiona | MS; AN |
| lesson, step, world | lección, paso, mundo | MS *lección*; the course's own terms |
| boss (a world's last lesson) | jefe final; a boss's title is *Jefe final: <song>* | the term of games in Spanish |
| the worlds' titles | Conoce el piano, Primeras melodías, Ritmo, Leer partituras, Las dos manos, Escalas y tonalidades, Acordes, Expresión | the course's own titles; `src/learn/course.ts` takes them when Spanish ships |
| skip test | prueba de salto | the course's own term |
| level; Level up! | nivel; ¡Subiste de nivel! | MS *nivel* |
| badge | la insignia | MS |
| streak | la racha | the everyday word, unsourced |
| daily goal | meta diaria | common usage, unsourced (see *Open*) |
| score; points | la puntuación; puntos | MS |
| stars | estrellas | everyday word |
| take (one recorded play) | el intento | everyday word; *toma* is a studio term |
| Favourites | Favoritas, agreeing with *canciones* | MS *favoritos* |
| track | la pista | AP (GarageBand, *controles de pista*), one source |
| progress | el progreso | MS |
| backup | la copia de seguridad | GO (Photos); WP *Copia de seguridad*. AP writes *respaldo*, which is Mexico's more than the region's. |
| guide (a song's) | la guía | common usage, unsourced (see *Open*) |
| a setting; options | una opción; las opciones | *Ajustes* is Spain's Android, as § 1 says |
| the player (of songs) | el reproductor | the playback word, as *Reproducir* is |
| Beginner, Easy, Medium, Hard, Advanced, Expert | Principiante, Fácil, Intermedio, Difícil, Avanzado, Experto | the usual ladder of levels |
| free play; pitch practice | Tocar libremente; Práctica de oído | the course's own terms |
| hotkeys | atajos de teclado | MS |
| velocity (of a key) | la intensidad | *velocidad* is taken by Speed |
| lane; timeline | el carril; la línea de tiempo | the player's own terms |
| hit, miss, mistake | acierto, perdida, error | *fallo* is avoided, as § 1 says |
| add; remove | agregar; quitar | AN |
| open source | de código abierto | WP *Código abierto* |
| attack, decay, sustain, release | ataque, caída, sostenimiento, liberación | synthesizer usage; *sostenido* is taken by the sharp |

### Which "play" is which

- **A key, a note, a song on the piano:** *tocar*. *Toca do y mi a la vez.*
- **Starting playback of a song:** *reproducir*. The transport's *Play* is *Reproducir*.
- **A game or a mode:** *jugar*, and *Modo juego* for *Game mode*.
- **A lesson's "Play again" that replays a demo:** *Escuchar otra vez*, since the learner listens.
- **"Your turn":** *Ahora tú*. Never *Te toca* before *toca*, which reads as a pun.

## 6. Kept words

- **Learn Piano Easy**, **MIDI**, **Web MIDI**, **MusicXML** and **XP** stay as they are.
- **Units and formats:** BPM, FPS, PDF, Hz, kHz, dB, ms, KB and MB.
- **Product names:** GitHub, Matomo, Chrome, Edge, Firefox and Safari.
- **Italian music words:** *legato*, *staccato*, *crescendo*, *diminuendo*, *forte*, *piano* and *tempo*,
  as Spanish teaching keeps them.
- **The song titles and the composers' names.** A title is data shared by every locale, and the library
  searches it.
- **The sections "Learn Piano" and "Just Play Piano" are translated,** since they describe what a learner
  does. "Learn Piano" is *Aprende piano*.
- **"Just Play Piano" is *Piano libre*.** It keeps the sense of playing with no lesson. A noun reads well
  inside a sentence, as in *Ábrelo en Piano libre*, where *Toca libremente* would not. It takes no quotes.
- The `kept` list of `src/i18n/typography.ts` holds each kept word a test could misread.

## 7. Note names

- **Notes are solfège, fixed do:** *do, re, mi, fa, sol, la, si*. WP *Nota (sonido)* and TC agree.
- **In running text a note name is lowercase,** as FundéuRAE (consulta 2374), WP and TC write: *el do
  central*, *toca sol*. It takes a capital where any word would, at the start of a sentence or a label.
- **A key is lowercase too:** *do mayor*, *la menor*, *si bemol mayor*.
- **An accidental is the sign, attached:** *fa♯*, *si♭*. A song guide writes it as a word: *fa sostenido*.
- **A name the code builds,** such as `Mi4` or `Fa menor`, keeps the capital of `src/theory/note-names.ts`.
  It stands as a label, like the name on a key.
- **The octave number is scientific:** the do central is `Do4`, as WP *Do (nota)* gives it. A lesson names
  a note by its place, such as *el do central*, as the English does.
- **A letter that code checks,** such as a quiz answer, stays the catalog's own.
- **The note *la* never stands where it reads as the article.** Write *el la* or *la nota la*: *presiona
  el la*, *del sol al la*. Its chord or key is *el acorde de la menor*, since *la menor* alone can read
  as "the smaller one".
- **A plural of notes keeps the name and counts it:** *los dos do*, *tres sol cortos*, or *cuatro teclas
  do* where *dos do* would read as a number.
- **"Low C" is *el do grave*,** the C below middle C, as the bass clef's landmark. Where the English
  spells out "the C below middle C", the Spanish does too: *el do debajo del do central*. So does a note
  placed from it: *el sol debajo del do que queda bajo el do central*.
- **A group or an order uses the neutral form:** *de tres en tres*, *una por una*. *De a tres* and *de a
  una* are the River Plate's.

## 8. Numbers

- **`Intl` formats every number for `es-419`:** `1,234.5`, with a point for decimals. Some countries,
  such as Argentina, write a comma there, but one site has one format.
- **A percent sign follows its number without a space:** `80%`, as CLDR writes `es-419`.
- **Fingers, octaves, bars and beats keep Western digits.**
- **A small count in prose is written as a word,** such as *tres teclas*, when the English writes it so.
- **An ordinal is `1.º`, `2.º`, or `1.ª` for a feminine noun:** *el 1.er compás* reads stiff, so write *el
  primer compás* in prose.
- **Plurals have the forms `one`, `many` and `other`.** `many` serves round millions: *1 millón de
  canciones*. Write each form whole.

## 9. Marks

Each rule has its pattern in the `es` entry of `src/i18n/typography.ts`. The rules test reads a text
with each kept word written as `X`.

| Rule | Pattern (`mustNot`) |
|---|---|
| A question opens with ¿ and closes with ?, one pair per question. | `^[^¿]*\?`, `\?[^¿]*\?`, `¿[^?]*¿`, `¿[^?]*$` |
| An exclamation opens with ¡ and closes with !, one pair per exclamation. | the same four, with ¡ and ! |
| An opening mark is never followed by a space, and a closing mark never follows one. | `[¿¡«]\s`, `\s[?!»]` |
| A quote stands in « », never in straight or curly double quotes. | `["“”]` |
| No space stands before a colon, a semicolon or a percent sign. | `\s[:;%]` |
| An ellipsis is the one character …. | `\.\.\.` |

- **Quotes are « »,** the form the RAE puts first. Microsoft's documents use “ ”, but the RAE's norm
  decides, and the angled form also stands apart from the code's straight quotes.
- **A question may sit inside a sentence:** *Si no suena, ¿está conectado el teclado?*
- **A label is sentence case:** only its first word and its proper names take a capital.
- **Days, months, languages and nationalities are lowercase:** *lunes*, *enero*, *español*.
- **A capital keeps its accent:** *Él*, *Ámbito*.
- **A range has an en dash and no spaces:** *compases 1–4*.
- **A list item that is a sentence ends with a period.** A fragment has none.

## 10. Length

Spanish runs about a quarter longer than English. A button or a label keeps about the English length.
Prose may grow.

| Long | Short, for a label |
|---|---|
| pedal de resonancia | pedal |
| indicación de compás | compás |
| lectura a primera vista | lectura |
| mano derecha, mano izquierda | M. D., M. I., as Spanish scores print them |
| teclado de la computadora | teclado |
| copia de seguridad | copia |
| repetición en bucle | bucle |

- **A button that does not fit loses words, never meaning:** *Abrir canción* becomes *Abrir*.
- **An abbreviation ends with a period and never in a vowel.** Avoid it in prose.

## 11. Calibration

Each row is the chosen translation, and why it beat the next best one.

| Kind | English | Spanish | Why it beat the next best |
|---|---|---|---|
| Button | Continue | Continuar | The infinitive of a label beats *Continúa*, which reads as an order. |
| Transport tooltip | Play or pause | Reproducir o pausar | *Reproducir* is the playback verb. *Tocar o pausar* would mean playing the piano. |
| Tooltip | Loop the bars set in the settings | Repetir en bucle los compases elegidos en la configuración | *Elegidos* is plainer than *establecidos*. |
| Setting and help | Wait for your notes / The song stops at each of your notes until you hold every key of it. | Esperar tus notas / La canción se detiene en cada una de tus notas hasta que mantengas presionadas todas sus teclas. | *Presionadas* fits a key in every country. *Pulsadas* reads as Spain's. |
| Error | Your browser refused to save. Nothing changed. | El navegador no permitió guardar. No cambió nada. | Impersonal and short. *Tu navegador se negó* gives the browser a will. |
| Toast | A new version is ready. | La nueva versión está lista. | *Lista* agrees with *versión*, so no gender reaches the learner. |
| Dialog | Reset all progress? / Are you sure? | ¿Restablecer todo el progreso? / ¿Seguro que quieres hacerlo? | *¿Estás seguro?* would give the learner a gender. |
| Counter | 3 of 8 lessons | 3 de 8 lecciones | The plain order. *Lecciones: 3/8* reads like a form. |
| Streak | 3-day streak | Racha de 3 días | *Racha* is the everyday word. *Serie* sounds like television. |
| Feedback | Right! | ¡Correcto! | *¡Bien!* is kept for a near miss, so the two do not blur. |
| Greeting | Hi, I'm your piano teacher. Shall we play? | ¡Hola! Soy tu profe de piano. ¿Tocamos? | *Profe* has no gender. *¿Jugamos?* would make the piano a game. |
| Badge | Night owl / Finish a lesson at 10 at night or later. | Búho nocturno / Termina una lección a las 10 de la noche o más tarde. | The badge is the owl, so no gender reaches the learner. *Noctámbulo* would. |
| Joke | Quality control is a cat that walks over the keys now and then. | El control de calidad está a cargo de un gato que de vez en cuando camina sobre las teclas. | *Está a cargo de* keeps the deadpan. A word-for-word *es un gato* sounds odd. |
| Level up | Level up! / Every lesson takes you further. Keep going! | ¡Subiste de nivel! / Cada lección te lleva más lejos. ¡Sigue así! | The simple past is Latin American. *¡Has subido!* is Spain's. |
| Lesson explanation | The right pedal is the sustain pedal. While it is down, every note keeps sounding after you let go of its key. | El pedal derecho es el pedal de resonancia. Mientras lo pisas, cada nota sigue sonando aunque sueltes su tecla. | *Pisar* is the foot's verb. *Mientras está abajo* is a calque. |
| Lesson instruction | Your turn. Put your right thumb on middle C and play C and E together. | Ahora tú. Pon el pulgar derecho en el do central y toca do y mi a la vez. | *Ahora tú* avoids the clash of *Te toca* and *toca*. |
| Quiz | How many black keys are in the smaller group? / One, Two, Three, Four | ¿Cuántas teclas negras hay en el grupo más pequeño? / Una, Dos, Tres, Cuatro | Each answer agrees with *teclas*. *Uno* would be wrong. |
| Rhythm | Count "1-2" for each half note. | Cuenta «1-2» en cada blanca. | *Blanca* is what every Spanish method teaches. *Media nota* is a calque. |
| Guide, about | Beethoven wrote this tune for the last movement of his Ninth Symphony, first played in Vienna in 1824. | Beethoven escribió esta melodía para el último movimiento de su Novena Sinfonía, estrenada en Viena en 1824. | *Estrenada* is the word for a first performance. |
| Guide, tricky bar | Look before you jump. | Mira antes de saltar. | Short and imperative, as the English is. |
| Mode name | Free jam | Improvisación libre | *Jam* is jargon few learners know. Transcreated, it keeps the freedom. |

## 12. Sources

- **Microsoft Spanish (Neutral) Style Guide**, `aka.ms/spanish-neutral-styleguide`. It settled the
  address, error messages, sentence case, the opening marks and the plain verbs.
- **Microsoft Spanish (Mexico) Style Guide**, `aka.ms/spanish-mexico-styleguide`, § 5.4. It settled the
  words Latin America does not use.
- **Microsoft Terminology Collection**, `SPANISH.tbx`. It settled interface terms, but tags every term
  for every region, so it never settles a regional word.
- **Android's framework strings**, `values-es-rUS` against `values-es`. They settled *Configuración*,
  *Listo*, *Omitir* and the infinitive labels.
- **CLDR**, through `Intl`. It settled the separators, the percent sign and the plural forms.
- **Spanish Wikipedia's music articles,** each named in the glossary. They settled every music term.
- **teoria.com/es.** It settled the music terms beside Wikipedia, and lowercase note names.
- **FundéuRAE, consulta 2374, *notas musicales*.** It settled lowercase note names and keys.
- **pianospuch.com.ar,** a piano shop's blog. It is the weaker second source for the pedals, fingers and
  hand position.
- **The RAE's dictionary was not read,** since its site refuses this project's agents. The quotes follow
  the RAE's norm as Microsoft's guide reports it.

## Open

- A Spanish-language piano method for children was not reached. A native teacher's read would confirm
  *nota guía*, *conteo previo*, *paso* and *salto*.
- No Spanish piano source for finger numbers or the hand position was reached. WP *Dedo medio* confirms
  *medio* for the third finger, and gives *corazón* as an alternative.
- *Calderón*, *Velocidad* and *pista* have one source each. *Meta diaria*, *racha* and a song's *guía* have
  none, since the fetch reached no page that uses them. Each is the everyday word, and the site uses it.
- Spanish titles exist for many songs, such as *Para Elisa* and *Noche de paz*. Whether the library shows
  them is a feature, not a translation.
