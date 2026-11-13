# Portuguese: the style guide and glossary

Every writer and reviewer of a Portuguese text reads this file whole first. The method is
[translation.md](../../agent/translation.md), and this file adds only what is Portuguese. The machine's half
of these rules is the `pt` entry of `src/i18n/typography.ts`.

## 1. Variant and readers

- **The variety is Brazilian Portuguese,** as `pt-BR` names it. It is spelled by the 1990 spelling
  agreement: *ideia*, *voo*, *leem*, *linguiça*.
- **Most readers live in Brazil.** Readers in Portugal, Angola and Mozambique reach this locale too.
- **The readers are beginners of every age,** children and adults, who learn piano alone in a browser.
- **A word only Brazil's street uses is avoided,** and so is a word only Portugal uses. The table below
  lists the usual traps.

| Avoid | Write | Why |
|---|---|---|
| ecrã | tela | Portugal only |
| ficheiro | arquivo | Portugal only; MS writes *Arquivo não encontrado* |
| utilizador | usuário, or *você* | Portugal only |
| telemóvel | celular | Portugal only |
| rato | mouse | Portugal only |
| definições | Configurações | Portugal's Android; AOSP `values-pt-rBR` writes *Configurações* |
| eliminar, guardar | excluir, salvar | Portugal's Android |
| partilhar | compartilhar | Portugal only |
| aplicação | o app | Portugal only |
| equipa, registo | equipe, registro | Portugal's spelling |
| tu, vós | você, vocês | see *Address* |
| idéia, vôo, lêem, agüentar | ideia, voo, leem, aguentar | spelled before the 1990 agreement |
| legal, valeu, beleza | ótimo, agradecemos, tudo certo | Brazilian slang, which Portugal reads as odd |

## 2. Address

- **The learner is *você*.** The plural is *vocês*, and *tu* and *vós* are never used. MS § 4.1.11 asks for
  *você* and never *o usuário*.
- **A pronoun the verb already shows is dropped:** *Quer continuar?*, not *Você quer continuar?* MS
  § 4.1.11 shows this.
- **The possessive is *seu* and *sua*:** *sua mão direita*. *Teu* and *tua* belong to *tu*.
- **The object pronoun is *você* or a rewrite,** never *te*, which belongs to *tu*. *Vamos ajudar você*
  reads in Brazil and in Portugal, where *te ajudamos* mixes two forms.
- **An instruction in running text is an imperative of *você*:** *Toque*, *Coloque*, *Escolha*, *Ouça*.
  MS § 2.2.1 and § 5.6.2 write *Tente novamente*.
- **A button, a menu item or a tab is an infinitive or a noun:** *Continuar*, *Abrir música*,
  *Configurações*. AOSP labels its buttons so, and it names what the learner tells the app to do.
- **A setting's name is a noun or an infinitive,** and its help text is a plain sentence about what it does.
- **"Please" is dropped.** MS's own messages never write *por favor*, and the warmth sits in the wording.
- **A question to the learner uses *quer*,** never *deseja*: *Quer sair desta lição?*
- **The past is simple:** *Você terminou*, never *Você tem terminado*. The present stands for a state:
  *O som está desativado.*
- **No gerund stands for a future:** *Vamos tocar*, never *Estaremos tocando*. MS § 4.1.15 forbids it.
- **An error is impersonal:** *Não foi possível salvar.* It names what failed, never the learner's mistake.
  MS § 5.6.2 gives *Não é possível* and *Não foi possível* with an infinitive.

## 3. Voice

Warm, plain and short, as a good teacher speaks. MS § 2.1 asks for everyday conversation, not a manual.
Prefer the short everyday word: *poder* over *ser capaz de*, *ver* over *visualizar*, *mudar* over
*alterar*, *usar* over *utilizar*, *mas* over *contudo*.

| English | Portuguese | Why it reads warm and plain |
|---|---|---|
| Hi, I'm your piano teacher. Shall we play? | Olá! Sou seu professor de piano. Vamos tocar? | *Vamos tocar?* invites, as the English does. *Olá* reads warm in Brazil and in Portugal, where *Oi* is Brazil's alone. |
| Not quite. Try again. | Quase. Tente de novo. | *Quase* is how a teacher softens a miss. *Tente de novo* is shorter and warmer than *Tente novamente*. |
| Every lesson takes you further. Keep going! | Cada lição leva você mais longe. Continue assim! | *Continue assim!* is the everyday cheer. *Prossiga!* would sound like a machine. |

## 4. Gender

- **No adjective or participle agrees with the learner.** Rewrite the sentence around a verb or a noun.
- *Boas-vindas!*, not *Bem-vindo!* MS § 3.1 lists the rewrite by a noun.
- *Tudo pronto*, not *Você está pronto*.
- *Quer mesmo fazer isso?* or *Tem certeza?*, since *certeza* is a noun. Never *Está seguro?*
- *Você conseguiu!*, not *Você é um craque*.
- *Termine uma lição à noite*, not *Se você é notívago*.
- **The app never thanks with *Obrigado*,** whose ending follows the speaker. *Agradecemos* or a plain
  sentence takes its place.
- **The teacher is male,** as the German *Klavierlehrer* is. He is *seu professor de piano*, an ape. His
  gender is the character's, so it never reaches the learner.
- **Where no rewrite works, use a noun of fixed gender,** such as *a pessoa* or *quem toca*. Never write
  *o(a)*, *@*, *x* or *-e*.
- **A word that agrees with a thing is fine:** *A nova versão está pronta* agrees with *versão*.

## 5. Terms

One term per idea, in every file. Sources: WP is Portuguese Wikipedia, by article title. AM is
avancandonamusica.com.br, a Brazilian teaching blog. DI is dicio.com.br. MS is Microsoft's Brazilian
Portuguese style guide. AN is Android's Brazilian strings (`values-pt-rBR`). A row marked *unsourced* rests
on common usage alone, and *Open* lists it.

### The piano glossary

| English | Portuguese | Sources |
|---|---|---|
| key (of the piano) | a tecla | WP *Piano*; WP *Semitom* |
| white key, black key | tecla branca, tecla preta | WP *Semitom*, one source |
| keyboard (the piano's) | o teclado | WP *Piano*; WP *Dó* |
| keyboard (a MIDI one) | o teclado MIDI | the kept word after the noun |
| note (a sound, or a written sign) | a nota | WP *Nota musical*; WP *Oitava* |
| middle C | o Dó central | WP *Dó*; WP *Pauta (música)* |
| octave | a oitava | WP *Oitava*; WP *Piano* |
| half step, whole step | semitom, tom | WP *Semitom*; AM. *Meio-tom* is not used. |
| sharp, flat, natural (the signs) | sustenido, bemol, bequadro | WP *Armadura (música)*; AM *Mi bemol* |
| accidental | o acidente | Brazilian theory books, unsourced |
| staff | a pauta | WP *Pauta (música)*; AM. *Pentagrama* is not used. |
| grand staff | a pauta dupla | WP *Pauta (música)*, one source |
| treble clef, bass clef | clave de Sol, clave de Fá | WP *Clave de sol*, *Clave de fá* |
| ledger line | linha suplementar | WP *Pauta (música)*; WP *Clave de fá* |
| line, space (of the staff) | linha, espaço | AM, *5 linhas e 4 espaços* |
| landmark (a note read at a glance) | nota de referência | the course's own term, defined where it first appears |
| bar | o compasso | WP *Compasso (música)*; AM |
| bar line | a barra de compasso | WP *Barra de compasso*; AM |
| time signature | a fórmula de compasso | WP *Compasso (música)*; AM |
| beat (one count of a bar) | o tempo: *um compasso de três tempos* | WP *Compasso (música)*; AM |
| hold for two beats | segure por dois tempos | follows *tempo* |
| the beat (the steady pulse) | a pulsação | WP *Compasso (música)*; AM. *O pulso* is kept for the wrist. |
| three-four time | compasso 3/4, *compasso ternário* once explained | WP *Compasso (música)*; WP *Valsa* |
| count-in | a contagem inicial | the course's own term, defined where it first appears |
| rhythm | o ritmo | WP *Ritmo*; WP *Compasso (música)* |
| tempo; speed | o andamento; a velocidade | WP *Andamento*; AM. *Tempo* is kept for the beat. |
| metronome | o metrônomo | WP *Metrônomo*; AM |
| whole, half, quarter note | semibreve, mínima, semínima | WP *Semibreve*; WP *Pausa* |
| eighth, sixteenth note | colcheia, semicolcheia | WP *Semibreve*; WP *Compasso (música)* |
| thirty-second, sixty-fourth note | fusa, semifusa | WP *Semibreve*, one source |
| dotted | pontuada: *mínima pontuada* | WP *Ponto (música)*, one source |
| rest; quarter rest | a pausa; pausa de semínima | WP *Pausa*; WP *Semibreve* |
| tie | ligadura de prolongamento | WP *Ligadura (música)*, one source |
| slur | ligadura de expressão | WP *Ligadura (música)*; WP *Legato* |
| repeat sign | o sinal de repetição | WP *Barra de compasso*; WP *Ritornelo* writes *ritornelo*, which a beginner does not know |
| first, second ending | casa 1, casa 2 | Brazilian theory books, unsourced |
| first, second time through | na primeira vez, na segunda vez | everyday words |
| pickup | a anacruse | Brazilian theory books, unsourced |
| syncopation | a síncope | Brazilian theory books, unsourced |
| scale | a escala | WP *Escala maior*; WP *Escala menor* |
| major, minor | maior, menor | WP *Escala maior*; AM |
| key (of a song) | a tonalidade | WP *Tonalidade*; WP *Armadura (música)*. *Tom* is kept for the whole step. |
| key signature | a armadura de clave | WP *Armadura (música)*, one source |
| scale degree | o grau: *o 5.º grau* | WP *Grau (música)*; AM |
| chord | o acorde | WP *Acorde*; AM |
| triad; major, minor triad | a tríade; tríade maior, tríade menor | WP *Tríade*; AM |
| root | a fundamental | WP *Acorde*; AM |
| inversion; root position | a inversão; a posição fundamental | WP *Inversão (música)*; AM |
| G seventh (chord) | o acorde de Sol com sétima | WP *Acorde de sétima*; the spoken form, unsourced |
| broken chord | o acorde quebrado | WP *Baixo Alberti*, one source |
| arpeggio | o arpejo | WP *Arpejo*; AM |
| Alberti bass, waltz bass, stride bass | baixo Alberti, baixo de valsa, baixo stride | WP *Baixo Alberti*; the others are the guides' own terms |
| bass note | a nota do baixo | the course's own term |
| interval | o intervalo | AM; WP *Escala maior* |
| third, fourth, fifth, sixth, seventh | terça, quarta, quinta, sexta, sétima | WP *Escala maior*; AM. Portugal's *terceira* is not used. |
| major third, minor third | terça maior, terça menor | WP *Escala maior*; AM |
| open fifth | quinta aberta | the course's own term, since its lessons say it "sounds open" |
| step, skip, leap (between keys) | grau vizinho, pulo, salto; *um grau acima* once a lesson has named the step | the course's own terms, defined where they first appear |
| tune, melody | a melodia | WP *Melodia*; WP *Pauta (música)* |
| phrase | a frase | WP *Frase (música)*, one source |
| call and answer (phrases) | pergunta e resposta | everyday words |
| pattern (of notes) | o padrão | everyday word |
| verse, chorus | a estrofe, o refrão | WP *Estrofe*; WP *Refrão* |
| coda | a coda | the Italian word, as theory books keep it |
| dynamics | a dinâmica | WP *Dinâmica musical*, one source |
| loud, soft | forte, suave | WP *Dinâmica musical* for *forte*; *suave* is the everyday word |
| legato, staccato | legato, staccato | WP *Legato*, *Staccato* |
| crescendo, diminuendo | crescendo, diminuendo | WP *Dinâmica musical* |
| hairpin | o sinal de crescendo, o sinal de diminuendo | no source names it; WP *Dinâmica musical* shows only the signs |
| mark (p, f, rit.) | a indicação | the course's own term |
| fermata | a fermata | WP *Fermata*, one source |
| turn (ornament) | o grupeto | WP *Ornamento (música)*, one source |
| double notes | notas duplas | the guides' own term |
| a run (fast notes) | a passagem rápida | the guides' own term |
| octave bass | o baixo em oitavas | the guides' own term |
| pedal | o pedal | WP *Piano*; WP *Pedal de sustentação* |
| sustain pedal | pedal de sustentação; *o pedal direito* in a lesson | WP *Pedal de sustentação*; WP *Piano* |
| soft pedal | o pedal esquerdo | WP *Piano*, one source |
| press a pedal, lift it | pisar no pedal, soltar o pedal | the plain verbs of a foot |
| fingering | o dedilhado | WP *Dedilhado*; AM. *Digitação* also means typing. |
| finger numbers | 1 polegar, 2 indicador, 3 médio, 4 anelar, 5 mínimo | WP *Dedilhado*; DI *anelar* |
| right hand, left hand, both hands | mão direita, mão esquerda, as duas mãos | WP *Piano*; AM |
| hand position; C position | posição da mão; posição de Dó | the course's own terms |
| thumb under, finger over | passagem do polegar, cruzamento de dedo | the course's own terms, unsourced |
| wrist | o pulso | everyday word |
| fingertips | as pontas dos dedos | everyday word |
| by feel | pelo tato | everyday word |
| sight-reading | leitura à primeira vista | WP *Leitura à primeira vista*, one source |
| play (the piano, a key, a note) | tocar | WP *Piano*; AM |
| practise | praticar | AM; everyday word |
| song; piece | a música; a peça | everyday words. *Canção* is kept for a sung song, such as a carol. |
| sheet music | a partitura | WP *Partitura*; WP *Pauta (música)* |
| pitch; high, low | a altura; agudo, grave | WP *Transposição (música)*; WP *Oitava* |
| transpose | transpor; a transposição | WP *Transposição (música)*, one source |
| stem, note head | a haste, a cabeça da nota | WP *Haste (música)*; WP *Pauta (música)* |
| piano bench | o banco | everyday word |
| at full speed; at three-quarter speed | na velocidade normal; a três quartos da velocidade | the guides' own terms, after *velocidade* |
| waltz | a valsa | WP *Valsa*; WP *Compasso (música)* |
| carol; sea shanty; jig | a canção de Natal; a canção de marinheiro; a giga | WP *Cantigas de Natal*, *Giga (dança)* |
| suite, symphony, sonata, concerto | suíte, sinfonia, sonata, concerto | everyday words of concerts |
| movement, overture, variation | movimento, abertura, variação | everyday words of concerts |
| march, hymn, lullaby, nocturne | marcha, hino, canção de ninar, noturno | everyday words |
| attack, decay, sustain, release | ataque, decaimento, sustentação, liberação | synthesizer usage |
| enharmonic | enarmônico | Brazilian theory books, unsourced |

### The interface glossary

| English | Portuguese | Sources |
|---|---|---|
| Settings | Configurações | MS § 2.2.1; AN |
| Songs (the library's panel); library | Músicas; a biblioteca | MS writes *Biblioteca*, one source |
| Open, Close, Cancel | Abrir, Fechar, Cancelar | AN |
| Back, Next, Previous | Voltar, Próximo, Anterior | AN writes *Voltar* and *Próxima*, which agrees with *etapa*. *Próximo* agrees with *passo*. |
| Continue | Continuar | MS § 2.2.1; AN |
| OK, Done | OK, Concluído | AN |
| Skip | Pular | AN |
| Reset | Redefinir | AN |
| Save | Salvar | MS; AN |
| Delete; Remove | Excluir; Remover | AN |
| Restore (a backup) | Restaurar | AN |
| Search | Pesquisar | MS § 2.1.3; AN |
| Play, Pause, Stop (playback) | Reproduzir, Pausar, Parar | AN |
| Loop (button); a loop | Repetir; a repetição | AN writes *Repetir*, one source |
| Speed | Velocidade | everyday word, unsourced |
| Volume, Mute | Volume, Sem som | AN *Volume da mídia*; *Desativar som* in AN is too long for a toggle |
| Fullscreen | Tela cheia | AN |
| Theme; Light, Dark, Like the system | Tema; Claro, Escuro, Padrão do sistema | AN *Modo escuro*, *Padrão do sistema* |
| Language | Idioma | AN |
| computer keyboard; computer key | teclado do computador; tecla | AN *Teclado físico*; MS § 5.6.4 |
| touch screen | tela sensível ao toque | AN writes *tela touch*, which Portugal does not read |
| device; connect, disconnect | dispositivo; conectar, desconectar | AN |
| folder; file | pasta; arquivo | MS § 5.6.2 |
| browser | o navegador | AN |
| offline | sem conexão | plain words, which every reader knows |
| Install, Update | Instalar, Atualizar | AN |
| app | o app | AN. MS writes *aplicativo*, which is longer and Brazil's alone. |
| Help, Tip | Ajuda, Dica | AN |
| Try again (a button); in prose | Tentar de novo; *Tente de novo.* | MS § 5.6.2 and AN write *novamente*; *de novo* is the warmer everyday form |
| tap, click or press a control | selecione | MS writes *toque ou clique*, but *toque* is the piano's verb |
| press a computer key | pressione | MS § 5.6.4 |
| choose (one of several) | escolha | MS § 2.1.3 |
| find, look for | encontrar, procurar | MS § 2.1.3 |
| a page of the site; a printed page | a página | everyday word |
| lesson, step, world | lição, passo, mundo | the course's own terms |
| quiz; demo | o quiz; a demonstração | the words of learning apps |
| boss (a world's last lesson) | o desafio final; a title is *Desafio final: <song>* | *chefão* is Brazilian slang |
| skip test | teste de avanço | the course's own term |
| level; Level up! | nível; Você subiu de nível! | AN *nível* |
| XP | XP | kept |
| badge, achievement | a medalha | the word of games, unsourced |
| streak | a sequência: *sequência de 3 dias* | everyday word, unsourced |
| daily goal | a meta diária | everyday word, unsourced |
| score; points | a pontuação; pontos | everyday words, unsourced |
| stars | estrelas | everyday word |
| take (one recorded play) | a tentativa | everyday word |
| Favourites | Favoritas, agreeing with *músicas* | everyday word |
| track (of a MIDI file) | a faixa | everyday word of audio apps, unsourced |
| progress | o progresso | everyday word |
| backup | o backup | AN *Backup e restauração* |
| guide (a song's) | o guia | everyday word |
| a setting; options | uma opção; as opções | AN |
| the player (of songs) | o player | Brazil's apps; *reprodutor* reads like a manual, unsourced |
| Beginner, Easy, Medium, Hard, Advanced, Expert | Iniciante, Fácil, Intermediário, Difícil, Avançado, Especialista | the usual ladder of levels |
| Easy, Normal, Hard (a song) | Fácil, Normal, Difícil | the same ladder |
| common, rare, epic, legendary (a version) | comum, rara, épica, lendária, agreeing with *versão* | the words of games |
| Perfect, Great, Good | Perfeito, Ótimo, Bom | the words of rhythm games |
| Wrong note, Too short, Too long, Late | Nota errada, Curta demais, Longa demais, Atrasada, agreeing with *nota* | plain words |
| free play; pitch practice | Tocar livremente; Treino de ouvido | the course's own terms |
| hotkeys | atalhos do teclado | AN |
| velocity (of a key) | a intensidade | *velocidade* is taken by Speed |
| lane; timeline | a pista; a linha do tempo | the player's own terms |
| hit, miss, mistake | acerto, nota perdida, erro | plain words |
| add; remove | adicionar; remover | AN |
| open source | de código aberto | everyday words, unsourced |
| download | baixar | MS § 2.1.4 |
| error (a title); a failure in a message | Erro; *Não foi possível…* | MS § 5.6.2 |
| loading | Carregando… | AN |
| Expert (the bar's key for the expert tools); expert tools | Avançado; ferramentas avançadas | *Especialista* is too long for the key, and stays the level |
| view (of the scene) | a exibição | *vista* reads as Portugal's or as scenery, unsourced |
| Clear (a field, a key binding) | Limpar | AN |
| how loud (a sound's level) | o volume | *altura* is pitch, see the piano glossary |
| Play modes | Modos de tocar | the site's own term |
| sound set; background track | o conjunto de sons; a faixa de fundo | plain words, unsourced |
| hit line; hit window | a linha de acerto; a janela de acerto | the player's own terms |
| loop trainer; a pass of a loop | a repetição progressiva; a volta | the player's own terms |
| reverb; equaliser; detune | a reverberação; o equalizador; o ajuste fino | the words of audio apps |
| particles; markers; labels | partículas; marcadores; rótulos | plain words |
| tag (search); round (a game) | a etiqueta; a rodada | plain words |
| Preview (a song) | Ouvir; Parar de ouvir | plain words, shorter than *pré-visualizar* |

### Which "play" is which

- **A key, a note, a song on the piano:** *tocar*. *Toque Dó e Mi juntos.*
- **Starting playback of a song:** *reproduzir*. The transport's *Play* is *Reproduzir*.
- **A game or a mode:** *jogar*, and *Modo jogo* for *Game mode*.
- **A lesson's "Play again" that replays a demo:** *Ouvir de novo*, since the learner listens.
- **"Your turn":** *Sua vez.*
- **A control is never *tocado*.** *Selecione Reproduzir*, never *Toque em Reproduzir*, which reads as
  playing the piano.

### A guide's recurring steps

The song guides repeat these steps word for word. Each English step has one Portuguese text in every
guide. A step that only differs in its bars or its section follows the nearest row's shape.

| English | Portuguese |
|---|---|
| Play the whole song with both hands at three-quarter speed. | Toque a música inteira com as duas mãos, a três quartos da velocidade. |
| Play the whole song with both hands at full speed. | Toque a música inteira com as duas mãos, na velocidade normal. |
| Play the whole song with both hands, a little slower than written. | Toque a música inteira com as duas mãos, um pouco mais devagar que o escrito. |
| Now play it at full speed. | Agora toque na velocidade normal. |
| Now play it at full speed, with the pedal. | Agora toque na velocidade normal, com o pedal. |
| Join the hands on the first eight bars, slowly. | Junte as mãos nos 8 primeiros compassos, devagar. |
| Put both hands together on the whole song, slowly. | Junte as mãos na música inteira, devagar. |
| Join the hands on bars 9 to 16, slowly. | Junte as mãos nos compassos 9 a 16, devagar. |
| Play the right hand alone on the first eight bars, and let the song wait for each note. | Toque só a mão direita nos 8 primeiros compassos, e deixe a música esperar cada nota. |
| Play the right hand alone, slowly, and let the song wait for each note. | Toque só a mão direita, devagar, e deixe a música esperar cada nota. |
| Play the left hand alone, and press the notes of each chord together. | Toque só a mão esquerda, e pressione juntas as notas de cada acorde. |
| Keep the Alberti bass soft, so the tune sings above it. | Toque o baixo Alberti suave, para a melodia cantar por cima. |
| Change the pedal on each new bass note, twice in every bar. | Troque o pedal a cada nova nota do baixo, duas vezes por compasso. |

## 6. Kept words

- **Learn Piano Easy**, **MIDI**, **Web MIDI**, **MusicXML** and **XP** stay as they are.
- **A kept word stands after the noun it qualifies:** *teclado MIDI*, *arquivo PDF*.
- **Units and formats:** BPM, FPS, PDF, USB, Hz, kHz, dB, ms, KB and MB.
- **Product and site names:** GitHub, Matomo, Wikipedia, Wikimedia Commons, Mutopia, Chrome, Edge,
  Firefox and Safari.
- **A computer key keeps its name:** Esc, Shift, Enter, Q or Z. MS § 5.6.4 writes *Barra de espaços* for
  the space bar.
- **Italian music words:** *legato*, *staccato*, *crescendo*, *diminuendo*, *forte*, *piano*, *coda* and
  *fermata*, as Brazilian teaching keeps them.
- **The printed marks of a score:** `p`, `mp`, `mf`, `f`, `pp`, `ff`, `rit.`, `rall.`, `cresc.`, `dim.`,
  `a tempo` and `Ped.`
- **Catalog numbers:** `BWV 1068`, `K. 525`.
- **The song titles and the composers' names.** A title is data shared by every locale, and the library
  searches it.
- **A film keeps the title the English guide writes,** such as *The Shining*. Its release title differs
  between Brazil and Portugal. A book, an opera or a symphony takes its usual Portuguese name, such as
  *Um Conto de Natal* or *sua Nona Sinfonia*. A kept title with a mark, such as *Moulin Rouge!*, goes in
  the `kept` list.
- **A city takes its Portuguese name,** such as *Viena* or *Londres*. A small town keeps its own, such as
  Hexham or Olomouc.
- **The sections "Learn Piano" and "Just Play Piano" are translated,** since they describe what a learner
  does. "Learn Piano" is *Aprenda piano*.
- **"Just Play Piano" is *Piano livre*.** A noun reads well inside a sentence, as in *Abra em Piano
  livre*. It takes no quotes.
- **The worlds' titles are** Conheça o piano, Primeiras melodias, Ritmo, Leitura de partitura, As duas
  mãos, Escalas e tonalidades, Acordes and Expressão. `src/learn/course.ts` takes them when Portuguese ships.
- The `kept` list of `src/i18n/typography.ts` holds each kept word a test could misread, and each label
  that is the same in both languages, such as *Normal* and *Volume*.

## 7. Note names

- **Notes are solfège, fixed do:** *Dó, Ré, Mi, Fá, Sol, Lá, Si*. WP *Oitava* and AM list them so, and
  `src/theory/note-names.ts` writes the same syllables.
- **A note name always takes its capital,** in a label and in running text: *o Dó central*, *toque Sol*.
  WP writes lowercase in running text and AM mixes both. The capital wins, because *lá*, *si*, *sol* and
  *mi* are also everyday words: there, oneself, sun and me.
- **A key or a chord takes the capital too:** *Dó maior*, *Lá menor*, *Si bemol maior*, *o acorde de Sol*.
- **A clef follows its note:** *clave de Sol*, *clave de Fá*.
- **An accidental is the sign, attached, in a label:** *Fá♯*, *Si♭*. Running text writes it as a word:
  *Fá sustenido*, *Si bemol*. Where the English writes the sign in running text, after a lesson has taught
  it, the Portuguese keeps the sign too: *Encontre o Fá♯.*
- **An Italian mark that reads as a Portuguese phrase takes *a indicação* before it:** *a indicação a
  tempo*, so *a tempo* never reads as "in time".
- **A name the code builds,** such as `Mi4` or `Fá menor`, keeps the form of `src/theory/note-names.ts`.
- **The octave number is scientific:** the Dó central is `Dó4`, as the screen shows it. WP *Dó* calls it
  *Dó3*, after an older Brazilian count. A lesson names a note by its place, such as *o Dó central*, as
  the English does.
- **A letter that code checks,** such as a quiz answer, stays the catalog's own. The range fields of the
  settings read letters alone, so their examples stay *C2* and *C7*.
- **One note after a verb or a preposition takes its article when the sentence needs it:** *toque o Mi*,
  *até o Fá sustenido*, *desça para o Sol*. A range and a list stay bare: *de Dó a Sol*, *as notas Dó, Mi
  e Sol*.
- **A plural of notes keeps the name and counts it:** *os dois Dós*, *três Sóis curtos*. Where a plural
  reads oddly, write *as duas teclas Dó*.
- **"Low C" is *o Dó grave*, and "high C" is *o Dó agudo*.** These words name pitch alone. Loudness takes
  *forte* and *suave*, so the two never blur.

## 8. Numbers

- **`Intl` formats every number for `pt-BR`:** `1.234,5`, with a comma for decimals. Portugal writes the
  same separators, so one format reads everywhere.
- **A percent sign follows its number without a space:** `80%`, as CLDR writes `pt-BR`.
- **Fingers, octaves, bars, beats and lessons keep Western digits:** *compasso 3*, *dedo 3*, *lição 5*.
- **A count from one to ten in prose is a word,** such as *três teclas*, when the English writes it so. MS
  § 4.1.9 asks this, and a label or a counter keeps the digit.
- **An ordinal is `1.º`, `2.º`, or `1.ª` for a feminine noun.** Prose writes the word: *o primeiro
  compasso*, *a terceira lição*.
- **"Twice as fast" is *duas vezes mais rápido*.** *O dobro da velocidade* reads plainer in a label.
- **"X of Y" is *X de Y*:** *3 de 8 lições*.
- **Plurals have the forms `one`, `many` and `other`.** `one` holds 0 and 1, so *0 música* follows it.
  Write *nenhuma música* where a text can show zero. `many` serves round millions: *1 milhão de músicas*.
  Write each form whole.

## 9. Marks

Each rule has its pattern in the `pt` entry of `src/i18n/typography.ts`. The rules test reads a text
with each kept word written as `X`.

| Rule | Pattern (`mustNot`) |
|---|---|
| A quote stands in “ ”, never in straight quotes or « ». | `["«»„]` |
| No ¿ or ¡ opens a question or an exclamation. | `[¿¡]` |
| No space stands before a period, a comma, a colon, a semicolon, ?, ! or %. | `\s[.,:;?!%]` |
| An ellipsis is the one character …. | `\.\.\.` |
| The 1990 agreement drops the trema. | `[gq]ü`, ignoring case |
| The 1990 agreement drops the accent of *idéia*, *vôo*, *lêem* and *pára*. | a list of the old spellings |
| The learner is *você*, never *tu* or *vós*. | *tu*, *teu*, *tua*, *ti*, *contigo*, *vós*, *vosso*, as whole words |
| A welcome is *Boas-vindas*, never a gendered *Bem-vindo*. | `bem-vind[oa]s?`, ignoring case |
| A word is Brazil's, never Portugal's. | *ecrã*, *ficheiro*, *utilizador*, *telemóvel*, *registo*, *equipa* |
| A range between digits takes – with no spaces. | a dash with a space on either side |

- **Quotes are “ ”, with ‘ ’ inside.** Brazilian print and the press use them. MS § 4.1.12 follows the
  source, whose straight quotes would clash with the code's.
- **A name the learner looks for is in quotes only when it could read as part of the sentence:**
  *Selecione “Reproduzir”*. A section's name such as *Piano livre* takes none.
- **A counted beat stands in quotes:** *Conte “1-2” em cada mínima.*
- **A label is sentence case:** only its first word and its proper names take a capital. MS § 4.1.5 asks
  it of error messages, and AN writes every label so.
- **Days, months, languages and nationalities are lowercase:** *segunda-feira*, *janeiro*, *português*.
- **No comma stands before *e*, *ou* or *nem* in a list,** as MS § 4.1.12 asks.
- **A range has an en dash and no spaces:** *compassos 1–4*. Prose may write *compassos 1 a 4*.
- **A list item that is a sentence ends with a period.** A fragment has none, as MS § 4.1.12 asks.
- **The em dash is avoided.** A comma, parentheses or a new sentence takes its place.

## 10. Length

Portuguese runs about a quarter to a third longer than English. A button or a label keeps about the
English length. Prose may grow.

| Long | Short, for a label |
|---|---|
| pedal de sustentação | pedal |
| fórmula de compasso | compasso |
| armadura de clave | armadura |
| leitura à primeira vista | leitura |
| mão direita, mão esquerda | M.D., M.E., as Brazilian scores print them |
| teclado do computador | teclado |
| tela sensível ao toque | tela |
| Padrão do sistema | Sistema |

- **A button that does not fit loses words, never meaning:** *Abrir música* becomes *Abrir*.
- **An abbreviation ends with a period.** Avoid it in prose.

## 11. Calibration

Each row is the chosen translation, and why it beat the next best one.

| Kind | English | Portuguese | Why it beat the next best |
|---|---|---|---|
| Button | Continue | Continuar | The infinitive of a label beats *Continue*, which reads as an order and looks like the English. |
| Transport tooltip | Play or pause | Reproduzir ou pausar | *Reproduzir* is the playback verb. *Tocar ou pausar* would mean playing the piano. |
| Tooltip | Loop the bars set in the settings | Repetir os compassos escolhidos nas configurações | *Escolhidos* is plainer than *definidos*. |
| Setting and help | Wait for your notes / The song stops at each of your notes until you hold every key of it. | Esperar suas notas / A música para em cada uma das suas notas até você manter todas as teclas pressionadas. | *Pressionadas* agrees with *teclas*, so no gender reaches the learner. |
| Error | Your browser refused to save. Nothing changed. | Não foi possível salvar no navegador. Nada mudou. | Impersonal and short, as MS § 5.6.2 asks. *Seu navegador se recusou* gives the browser a will. |
| Toast | A new version is ready. | A nova versão está pronta. | *Pronta* agrees with *versão*, so no gender reaches the learner. |
| Dialog | Reset all progress? / Are you sure? | Redefinir todo o progresso? / Quer mesmo fazer isso? | *Tem certeza?* would also work, but *Está seguro?* would give the learner a gender. |
| Counter | 3 of 8 lessons | 3 de 8 lições | The plain order. *Lições: 3/8* reads like a form. |
| Streak | 3-day streak | Sequência de 3 dias | *Sequência* reads in Brazil and in Portugal. A game's branded word would not. |
| Feedback | Right! | Certo! | *Muito bem!* would blur with the recap's praise. A near miss is *Quase*. |
| Lesson recap | Well done. You can count bars of four now. | Muito bem. Agora você já conta compassos de quatro tempos. | Every recap of the course opens so. *Parabéns!* is warmer than the English, and *Bom trabalho* reads as a boss's praise. |
| Greeting | Hi, I'm your piano teacher. Shall we play? | Olá! Sou seu professor de piano. Vamos tocar? | *Vamos jogar?* would make the piano a game. |
| Badge | Night owl / Finish a lesson at 10 at night or later. | Coruja da noite / Termine uma lição às 10 da noite ou mais tarde. | The badge is the owl, so no gender reaches the learner. *Notívago* would. |
| Joke | Quality control is a cat that walks over the keys now and then. | O controle de qualidade fica por conta de um gato que, de vez em quando, passeia pelas teclas. | *Fica por conta de* keeps the deadpan. A word-for-word *é um gato* sounds odd. |
| Level up | Level up! / Every lesson takes you further. Keep going! | Você subiu de nível! / Cada lição leva você mais longe. Continue assim! | *Subiu* is the plain past, and *você* keeps the object form Portugal reads too. |
| Lesson explanation | The right pedal is the sustain pedal. While it is down, every note keeps sounding after you let go of its key. | O pedal direito é o pedal de sustentação. Enquanto você pisa nele, cada nota continua soando mesmo depois de soltar a tecla. | *Pisar* is the foot's verb. *Enquanto está abaixado* is a calque. |
| Lesson instruction | Your turn. Put your right thumb on middle C and play C and E together. | Sua vez. Coloque o polegar direito no Dó central e toque Dó e Mi juntos. | *Sua vez* is short and warm. *É a sua vez de tocar* repeats *tocar*. |
| Quiz | How many black keys are in the smaller group? / One, Two, Three, Four | Quantas teclas pretas há no grupo menor? / Uma, Duas, Três, Quatro | Each answer agrees with *teclas*. *Um* would be wrong. |
| Rhythm | Count "1-2" for each half note. | Conte “1-2” em cada mínima. | *Mínima* is what every Brazilian method teaches. *Meia nota* is a calque. |
| Guide, about | Beethoven wrote this tune for the last movement of his Ninth Symphony, first played in Vienna in 1824. | Beethoven escreveu esta melodia para o último movimento da sua Nona Sinfonia, estreada em Viena em 1824. | *Estreada* is the word for a first performance. |
| Guide, tricky bar | Look before you jump. | Olhe antes de saltar. | Short and imperative, as the English is. |
| Mode name | Free jam | Improviso livre | *Jam* is jargon few learners know. Transcreated, it keeps the freedom. |

## 12. Sources

- **Microsoft Brazilian Portuguese Style Guide,** `aka.ms/portuguese-brazil-styleguide`. It settled the
  address by *você*, the plain verbs, the error forms, the gender rewrites, the numbers in prose, the
  ranges and the lists. Its quotes follow the source, which this guide does not, as § 9 says.
- **Android's framework and settings strings,** `values-pt-rBR`. They settled the labels: *Configurações*,
  *Concluído*, *Pular*, *Redefinir*, *Excluir*, *Reproduzir*, *Tela cheia*, *Padrão do sistema* and *app*.
- **CLDR,** through `Intl`. It settled the separators, the percent sign and the plural forms.
- **Portuguese Wikipedia's music articles,** each named in the glossary. They settled every music term.
  Its articles mix Brazilian and European usage, so a term it alone gives is checked against AM.
- **avancandonamusica.com.br,** a Brazilian teaching blog. It is the second source for the staff, the bar,
  the time signature, the intervals, the inversions and the fingering.
- **dicio.com.br.** It settled *anelar* for the fourth finger. WP writes *anular*, which also means to
  cancel.
- **No Brazilian piano method was read.** Bohumil Med's theory book is cited inside WP, but its PDF did
  not open.
- **Apple's and Google's Brazilian help pages, and Microsoft's terminology search, were not read.**

## Open

- No Brazilian piano method was reached. A Brazilian piano teacher's read would confirm *nota de
  referência*, *contagem inicial*, *grau vizinho*, *pulo*, *passagem do polegar* and the first endings.
- *Acidente*, *anacruse*, *síncope*, *enarmônico*, *casa 1* and *casa 2* are the terms of Brazilian theory
  books, but no source was read for them.
- *Medalha*, *sequência*, *meta diária*, *pontuação*, *faixa* and *o player* have no source. Each is the
  everyday word, and the site uses it.
- The note values are Brazil's, which Portugal shares. Portugal's *colcheia* and *semínima* agree.
- Portuguese titles exist for many songs, such as *Para Elisa* and *Noite Feliz*. Whether the library shows
  them is a feature, not a translation.
