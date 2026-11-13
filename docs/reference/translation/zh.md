# Chinese: the style guide and glossary

Every writer and reviewer of a Chinese text reads this file whole first. The method is
[translation.md](../../agent/translation.md), and this file adds only what is Chinese. The machine's half
of these rules is the `zh` entry of `src/i18n/typography.ts`.

## 1. Variant and readers

- **The variety is Simplified Chinese as mainland China writes it.** Pages carry `lang` `zh-Hans`, and
  `Intl` formats for `zh-Hans-CN`. The locale table's row says so, and this guide confirms it.
- **The readers are beginners of every age,** children and adults, who learn piano alone in a browser.
- **Readers of Traditional Chinese reach this locale too,** until a `zh-Hant` one exists. So a word used
  only in one region is avoided, and the mainland form wins where two exist.

| Avoid | Write | Why |
|---|---|---|
| 您 | 你 | see *Address* |
| 电脑 when Taiwan's 電腦 differs | 电脑 | the mainland form; Taiwan's 視窗-era words never appear |
| 软体, 程式, 档案 | 软件, 程序, 文件 | Taiwan's words |
| 影片 (a film) | 电影 | 影片 is a video in Taiwan's usage |
| 滑鼠 | 鼠标 | Taiwan's word |
| 符杆 | 符干 | 符桿 is Taiwan's form |
| 符点 | 附点 | 符点 is an older mainland form |
| 华尔兹 | 圆舞曲 | the music books' word; 华尔兹 is the dance |
| 船歌 (a shanty) | 水手号子 | 船歌 is a barcarolle |
| 第一房子 | 第一结尾 | classroom slang |

## 2. Address

- **The learner is `你`, never `您`.** Microsoft's guide § 4.1.12 and Apple's Chinese help both use `你`.
  Google's help writes `您`, but it addresses customers, not learners.
- **No `他` or `她` stands for the learner.** Repeat `你`, or drop the pronoun, as Chinese allows.
- **An instruction is a bare verb phrase:** `把右手拇指放在中央 C 上`, `弹 C 和 E`, `听一听`.
- **`请` is dropped,** as the teacher's warmth sits in the wording. A softener like `吧` or `一下` does
  that job: `再听一遍吧`, `试一下`.
- **A button, a menu item or a tab is a short verb phrase or a noun:** `继续`, `打开歌曲`, `设置`.
- **A setting's name is a noun phrase,** and its help text is a plain sentence about what it does.
- **A question to the learner ends in `吗` or offers a choice:** `要退出这一课吗？`
- **A finished act takes `了`:** `你完成了这一课！`
- **An error is impersonal and starts with `无法`,** as Microsoft's guide § 5.5.2 does: `无法保存。` It names
  what failed, never the learner's mistake.
- **One verb serves a tap and a click: `点击`.** Google's Chinese help and Microsoft's terms use it for
  both. Picking an item from several is `选择`. A computer key is pressed: `按`.

## 3. Voice

Warm, plain and short, as a good teacher speaks. Prefer the everyday word: `用` over `使用`, `如果` over
`倘若`, `只是` over `仅是`, `可以` over `能够`. Microsoft's § 2.1.2 lists the same.

| English | Chinese | Why it reads warm and plain |
|---|---|---|
| Hi, I'm your piano teacher. Shall we play? | 你好！我是你的钢琴老师。我们一起弹琴吧？ | `一起……吧` invites, as the English does. `老师` has no gender. |
| Not quite. Try again. | 差一点。再试一次。 | `差一点` is how a teacher softens a miss. `再试一次` is Microsoft's own form. |
| Every lesson takes you further. Keep going! | 每一课都让你更进一步。继续加油！ | `加油` is the everyday cheer. `请继续` would sound like a machine. |

## 4. Gender

- **Chinese verbs and adjectives never agree with a person,** so most texts carry no gender.
- **No pronoun names the learner's gender:** never `他`, `她` or `他/她`. Repeat `你`, or leave it out.
- **No word for a person carries an age or a gender:** never `小朋友`, `帅哥`, `美女` or `宝贝`. A
  learner may be any age.
- **The teacher has no gender either.** The ape is `你的钢琴老师`, and a guide says `老师`.
- **A composer named in a guide keeps the pronoun their sources use,** since a guide states facts.

## 5. Terms

One term per idea, in every file. Sources: WP is Chinese Wikipedia, by article title. CC is 孙荣绮's
basic-theory course 《音乐课堂》 on ccnt.com.cn, a mainland teaching text. MSZ is MuseScore's mainland
translation. RL is Roland China's FP-30 manual. OH is the theory course 乐理101 on ohmusictheory.com. MS
is Microsoft's Chinese (Simplified) guide or its terminology collection. AN is Android's `values-zh-rCN`
strings. AP is Apple's `support.apple.com/zh-cn` pages. GO is Google's help pages with `hl=zh-Hans`.

### The piano glossary

| English | Chinese | Sources |
|---|---|---|
| key (of the piano) | 琴键 | WP *全音*; RL |
| white key, black key | 白键, 黑键 | WP *音级*; CC 10 |
| keyboard (the piano's, or a MIDI one) | 键盘 | WP *键盘 (音乐)*; RL |
| note (a sound) | 音 | WP *音符*; CC 1 |
| note (a written sign) | 音符 | WP *音符*; CC 10 |
| middle C | 中央 C | WP *C (音名)*; CC 11 |
| octave | 八度 | WP *八度*; MSZ |
| half step, whole step | 半音, 全音 | WP *半音*, *全音*; OH |
| sharp, flat (the signs) | 升号, 降号 | WP *升號*, *降號*; CC 19 |
| accidental | 变音记号 | WP *變音記號*; CC 19 |
| staff | 谱表; 五线谱 for the notation as a whole | WP *五線譜*; MSZ |
| grand staff | 大谱表 | WP *C (音名)*; MSZ |
| treble clef, bass clef | 高音谱号, 低音谱号 | WP *譜號*; CC 06 |
| ledger line | 加线: `上加一线`, `下加一线` | WP *加線*; MSZ |
| landmark (a note read at a glance) | 标志音 | the course's own term, defined where it first appears |
| bar | 小节 | WP *小节*; CC 23 |
| bar line | 小节线 | WP *小节*; MSZ |
| time signature | 拍号 | WP *拍號*; CC 7 |
| beat (one count of a bar) | 拍: `每小节三拍` | WP *节拍*; CC 24 |
| the beat (the steady pulse) | 节拍 | WP *节拍*; CC 24 |
| three-four time | 3/4 拍, read 四三拍 | WP *青年友谊圆舞曲*; CC 24 |
| count-in | 预备拍 | RL; MSZ |
| rhythm | 节奏 | WP *节奏*; CC 31 |
| tempo | 速度 | WP *速度 (音樂)*; CC 31 |
| metronome | 节拍器 | WP *節拍器*; RL |
| whole, half, quarter note | 全音符, 二分音符, 四分音符 | WP *全音符* and its siblings; CC 12 |
| eighth, sixteenth note | 八分音符, 十六分音符 | WP *八分音符*; CC 12 |
| dotted | 附点: `附点二分音符` | WP *附點音符*; MSZ |
| rest; quarter rest | 休止符; 四分休止符 | WP *休止符*; MSZ |
| tie | 延音线 | WP *延音线*; CC 30 |
| slur | 圆滑线 | WP *圓滑線*; MSZ |
| repeat sign | 反复记号 | WP *反复记号*; MSZ |
| first, second ending | 第一结尾, 第二结尾 | WP *反复记号*; MSZ |
| first, second time through | 第一遍, 第二遍 | everyday word |
| pickup, upbeat | 弱起: `弱起小节` | WP *小节*; CC 23 |
| syncopation | 切分音 | WP *切分音*; CC 30 |
| scale | 音阶 | WP *音阶*; MSZ |
| major, minor (a key) | 大调, 小调 | WP *大調*, *小調*; CC 42 |
| key (of a song) | 调 | WP *调号*; CC 42 |
| key signature | 调号 | WP *调号*; CC 10 |
| scale degree | 级: `第五级` | CC 46; OH |
| chord | 和弦 | WP *三和弦*; CC 39 |
| triad; major, minor triad | 三和弦; 大三和弦, 小三和弦 | WP *三和弦*; CC 39 |
| root | 根音 | WP *三和弦*; CC 39 |
| inversion; root position | 转位; 原位 | WP *转位*; CC 38 |
| G seventh (chord) | G7 和弦 | WP *属七和弦*; OH |
| broken chord | 分解和弦 | WP *分解和弦*; OH |
| arpeggio | 琶音 | WP *琶音*; MSZ |
| Alberti bass, waltz bass | 阿尔贝蒂低音, 圆舞曲低音 | WP *阿尔贝蒂低音*, one source; the course's own term |
| bass note | 低音 | WP *三和弦*; CC 39 |
| third, fourth, fifth, sixth | 三度, 四度, 五度, 六度 | WP *音程*; CC 34 |
| major third, minor third | 大三度, 小三度 | WP *大三度*, *小三度*; CC 39 |
| open fifth | 空五度 | WP *申克分析*, one source |
| step, skip (between keys) | 级进, 跳进 | WP *旋律进行*, one source |
| tune, melody | 旋律 | WP *旋律*; OH |
| phrase | 乐句 | WP *乐句*; OH |
| call and answer (phrases) | 一问一答 | everyday word, unsourced |
| pattern (of notes) | 音型 | WP *阿尔贝蒂低音*, one source |
| verse, chorus | 主歌, 副歌 | WP *副歌*, one source |
| coda | 尾声 | WP *尾声 (音乐)*, one source |
| dynamics | 力度 | WP *强弱法*; CC 56 |
| loud, soft | 强, 弱 | WP *强弱法*; CC 56 |
| legato | 连奏 | WP *音乐术语列表*; MSZ |
| staccato | 跳音 | WP *斷奏*, which names it as the teaching word, one source |
| crescendo, diminuendo | 渐强, 渐弱 | WP *强弱法*; CC 56 |
| hairpin | 渐强记号, 渐弱记号 | WP *强弱法*; MSZ |
| mark (p, f, rit.) | 记号 | WP *强弱法*; CC 56 |
| fermata | 延长记号 | WP *延长记号*; MSZ writes 延音记号, which clashes with 延音线 |
| slow down, back in time | 渐慢, 回原速 | WP *速度 (音樂)*; CC 31 |
| turn (ornament) | 回音 | CC 53; MSZ |
| double notes | 双音 | WP *钟 (李斯特)*, one source |
| stride (the bass style) | 跨步低音 | WP *泰迪·韦瑟福德*, one source |
| a run (fast notes) | 快速经过句 | the guides' own term |
| sustain pedal | 延音踏板; `右踏板` in a lesson | WP *延音踏板*; RL |
| soft pedal | 弱音踏板; `左踏板` in a lesson | WP *钢琴*; RL |
| press a pedal, lift it | 踩下踏板, 松开踏板 | the plain verbs of a foot |
| fingering | 指法 | WP *练习曲作品10第2号*; CC 57 |
| finger numbers | 1 拇指, 2 食指, 3 中指, 4 无名指, 5 小指 | WP usage, one source; the course's own lesson |
| right hand, left hand | 右手, 左手 | WP *钢琴*; CC 57 |
| hand position; C position | 手位; C 手位 | the course's own term, unsourced |
| hand shape | 手型 | the course's own term, unsourced |
| thumb under, finger over | 穿指, 跨指 | the course's own terms, unsourced |
| lift (a finger, a key) | 抬起 | everyday word |
| land (on a key, a beat) | 落在 | everyday word |
| jump, climb, slide | 跳到, 往上走, 滑到 | everyday words; `上行`, `下行` where a guide speaks of a line |
| stretch, spread (the hand) | 张开 | everyday word |
| roll (a chord) | 琶音式地弹 | the guides' own term |
| rock (between two keys) | 来回弹 | everyday word |
| wrist | 手腕 | everyday word |
| let ring | 让声音延续 | everyday word |
| fingertips | 指尖 | everyday word |
| by feel | 凭手感 | everyday word |
| sight-reading | 视奏 | WP *视奏*; OH |
| ear training | 练耳 | WP *黄飞立*; OH |
| play (the piano, a key, a note) | 弹 | WP *钢琴*; OH |
| practise | 练习 | WP *钢琴*; OH |
| song; piece | 歌曲, 曲子; 乐曲 | WP *反复记号*; RL |
| sheet music | 乐谱 | WP *樂譜*; CC 2 |
| pitch | 音高 | WP *音高*; MSZ |
| transpose | 移调 | WP *移调*; RL |
| stem, note head | 符干, 符头 | WP *符头*; CC 12 |
| piano bench | 琴凳 | WP *拉杜·鲁普*, one source |
| at full speed; at three-quarter speed | 原速; 四分之三速度 | the guides' own terms |
| waltz | 圆舞曲 | WP *圓舞曲*, one source |
| carol; sea shanty; jig | 圣诞颂歌; 水手号子; 吉格舞曲 | WP *聖誕頌歌*, *吉格*, one source each; 水手号子 unsourced |
| suite, symphony, sonata, concerto | 组曲, 交响曲, 奏鸣曲, 协奏曲 | WP, by each word's article |
| movement, overture, variation | 乐章, 序曲, 变奏 | WP, by each word's article |
| march, hymn, lullaby, nocturne | 进行曲, 赞美诗, 摇篮曲, 夜曲 | WP, by each word's article |
| aria, tone poem, hornpipe, galop | 咏叹调, 交响诗, 角笛舞曲, 加洛普舞曲 | WP, by each word's article |
| attack, decay, sustain, release | 起音, 衰减, 延音, 释音 | WP *频谱*, one source |

### The interface glossary

| English | Chinese | Sources |
|---|---|---|
| Settings | 设置 | MS; AN |
| Songs (the library's panel); library | 歌曲; 曲库 | MS *歌曲*; the app's own term |
| Open, Close, Cancel | 打开, 关闭, 取消 | MS; AN |
| Back, Next, Continue | 返回, 下一步, 继续 | MS; AN |
| OK, Done | 确定, 完成 | MS; AN |
| Skip | 跳过 | MS; AN |
| Reset | 重置 | MS; AN |
| Save, Delete | 保存, 删除 | MS; AN |
| Restore (a backup) | 恢复 | GO; MS gives 还原 for a system restore |
| Search | 搜索 | MS; AN |
| Play, Pause, Stop (playback) | 播放, 暂停, 停止 | MS; AN |
| Loop (button); a loop | 循环; 循环播放 | MS |
| Speed | 速度; 播放速度 in help text | MS; GO (YouTube) |
| Volume, Mute | 音量, 静音 | MS; AN |
| Fullscreen | 全屏 | MS; GO (YouTube) |
| Theme; Light, Dark, Like the system | 主题; 浅色, 深色, 跟随系统 | MS; AP. 跟随系统 is the everyday phone label, unsourced. |
| Language | 语言 | MS |
| computer keyboard; computer key | 电脑键盘; 按键 | MS; AN. A piano's key is 琴键, so the two never blur. |
| touch screen | 触摸屏 | MS § 2.2.3; WP *触摸屏* |
| device; connect, disconnect | 设备; 连接, 断开连接 | MS; AN |
| folder | 文件夹 | MS; AN |
| browser | 浏览器 | MS; GO |
| offline | 离线 | MS; GO. MS also gives 脱机, which reads dated. |
| Install, Update | 安装, 更新 | MS; AN |
| app | 应用 | MS § 2.1.3; AN |
| Help, Tip | 帮助, 提示 | MS |
| Try again | 再试一次 | MS; AN gives 重试 for a button |
| tap or click a control | 点击 | MS terms; GO |
| press a computer key | 按 | MS; AN |
| lesson, step, world | 课, 步, 世界: `第 3 课` | MS *课*; the course's own terms |
| quiz; demo | 小测验; 示范 | everyday words |
| boss (a world's last lesson) | 终极挑战; a boss's title is `终极挑战：<song>` | the course's own term, as `Boss` would stay Latin |
| skip test | 跳级测试 | the course's own term |
| level; Level up! | 等级; 升级了！ | MS *级别*; the word of games |
| XP | XP, a kept word | the word of games |
| badge, achievement | 徽章, 成就 | MS |
| streak | 连续练习天数; `连续 3 天` | everyday word, unsourced |
| daily goal | 每日目标 | everyday word, unsourced |
| score; points | 得分; 分 | MS *分数* |
| stars | 星 | everyday word |
| take (one recorded play) | 一遍 | everyday word |
| Favourites | 收藏 | MS |
| track (of a MIDI file) | 音轨 | MSZ; MS gives 曲目 for an album's track |
| progress | 进度 | MS |
| backup | 备份 | MS; GO |
| guide (a song's) | 练习指南 | the app's own term, unsourced |
| a setting; options | 设置项; 选项 | MS |
| the player (of songs) | 播放器 | MS |
| Beginner, Easy, Medium, Hard, Advanced, Expert | 入门, 简单, 中等, 困难, 进阶, 专家 | the usual ladder of levels |
| Easy, Normal, Hard (a song) | 简单, 普通, 困难 | the usual ladder of levels |
| common, rare, epic, legendary (a version) | 普通, 稀有, 史诗, 传说 | the word of games |
| Perfect, Great, Good | 完美, 很棒, 不错 | the word of rhythm games |
| Wrong note, Too short, Too long, Late | 错音, 太短, 太长, 慢了 | everyday words |
| free play; pitch practice | 自由弹奏; 听音练习 | the course's own terms |
| hotkeys | 快捷键 | MS; AN *键盘快捷键* |
| velocity (of a key) | 力度 | MSZ; the same idea as dynamics |
| lane; timeline | 轨道; 时间轴 | the player's own terms |
| hit, miss, mistake | 弹对, 漏弹, 弹错 | the verbs of 弹 |
| colour; glow; particles | 颜色; 光晕; 粒子 | MS |
| equaliser; reverb | 均衡器; 混响 | MS; MSZ |
| camera; zoom; side view | 视角; 缩放; 侧视图 | MS *缩放*; the player's own terms |
| lyrics; bar numbers | 歌词; 小节号 | MSZ |
| difficulty; length (of a song) | 难度; 时长 | everyday words |
| add; remove | 添加; 移除 | MS; AN |
| open source | 开源 | WP *开源*; MS gives 开放源代码, which reads formal |

### Which "play" is which

- **A key, a note, a song on the piano:** `弹`. `同时弹 C 和 E。`
- **Starting playback of a song:** `播放`. The transport's *Play* is `播放`.
- **A game or a mode:** `游戏`, and `游戏模式` for *Game mode*.
- **A lesson's "Play again" that replays a demo:** `再听一遍`, since the learner listens.
- **"Your turn":** `轮到你了`.

## 6. Kept words

- **Learn Piano Easy**, **MIDI**, **Web MIDI**, **MusicXML** and **XP** stay as they are.
- **Units and formats:** BPM, FPS, PDF, USB, Hz, kHz, dB, ms, KB, MB, px and 3D.
- **Technical names:** JavaScript, MIT, Cookie, a computer key such as Esc, Q or Z, and the pedal mark
  Ped. A Roman numeral of a chord, such as V7, stays too.
- **Product and site names:** GitHub, Matomo, Wikipedia, Wikimedia Commons, Mutopia, Chrome, Edge,
  Firefox and Safari.
- **The printed marks of a score:** `p`, `mp`, `mf`, `f`, `pp`, `ff`, `rit.`, `cresc.`, `dim.` and
  `a tempo`. A lesson names each one's meaning once: `f（强）`.
- **Catalog numbers:** `BWV 1068`, `K. 525`.
- **The note letters and chord symbols,** as § 7 says.
- **The song titles of the library stay as they are.** A title is data shared by every locale, and the
  library searches it.
- **In prose, a work takes its usual Chinese name in `《》`,** as Chinese Wikipedia gives it:
  `《欢乐颂》`, `《致爱丽丝》`, `《闪灵》`. GB/T 15834 § 4.15.3.2 sets `《》` for songs, films and books.
- **A work with no settled Chinese name keeps its English title in `《》`.** The writer adds that title to
  the `kept` list.
- **A composer takes the Chinese name Chinese Wikipedia gives:** `贝多芬`, `莫扎特`, `巴赫`. A native
  teacher never writes *Beethoven* in a Chinese sentence.
- **The sections "Learn Piano" and "Just Play Piano" are translated,** since they describe what a
  learner does. "Learn Piano" is `学钢琴`, and "Just Play Piano" is `随心弹琴`. Neither takes quotes.
- **The worlds' titles are** 认识钢琴, 初识旋律, 节奏, 识谱, 双手合奏, 音阶与调, 和弦 and 音乐表现.
  `src/learn/course.ts` takes them when Chinese ships.
- The `kept` list of `src/i18n/typography.ts` holds each kept word a test could misread.

## 7. Note names

- **Notes are letters:** C D E F G A B, uppercase. Mainland beginners learn the letters as 音名, with
  the 唱名 beside them, as CC teaches.
- **The syllables `do re mi fa sol la si` appear only where the English means singing,** in Latin
  letters, as Chinese books print them.
- **A space stands between a letter and a Han character:** `中央 C`, `弹 E`. This follows § 9. Chinese
  Wikipedia writes `中央C`, but one rule for every Latin letter is simpler to keep and to test.
- **Every key takes an uppercase letter:** `C 大调`, `A 小调`, `A 小三和弦`. WP *小調* writes it so. CC
  and OH write a minor key's letter lowercase, but one form is simpler, and it matches the key labels.
- **A sharp or a flat in running text is a word before the letter:** `升 F`, `降 B`, `升 C 小调`. WP
  *升號* says a sharp note is read so.
- **A name the screen shows,** such as `F♯4` on a key, keeps the form of `src/theory/note-names.ts`. A
  text that points at that label writes it the same way.
- **The octave number is scientific:** middle C is `C4`. A lesson names a note by its place, as the
  English does: `中央 C`.
- **"Low C" is `低音 C`, and "high C" is `高音 C`,** each defined where it first appears.
- **A chord is named by its root:** `C 和弦`, `G7 和弦`. A spelled-out chord lists its letters with
  `、`: `C、E、G`.
- **A letter that code checks,** such as a quiz answer, stays the catalog's own.

## 8. Numbers

- **`Intl` formats every number for `zh-Hans-CN`:** `1,234.5`. No separator is set by hand.
- **A percent sign follows its number without a space:** `80%`, as CLDR writes it.
- **Fingers, octaves, bars, beats and lessons keep Western digits:** `第 3 小节`, `3 指`.
- **A small count the English spells out is written in Chinese numerals in prose:** `三个琴键`.
  Before a measure word, two is `两`: `两只手`, `两拍`.
- **A count takes its measure word:** `3 首歌`, `5 课`, `8 个琴键`, `4 拍`, `2 个小节`.
- **An ordinal is `第` and the number:** `第 1 课` beside a digit, `第一小节` in prose.
- **Chinese has no plural forms.** `Intl` names only `other`, so a counted message has one form.
- **A time signature is printed as figures and read in Chinese:** `3/4 拍`, which a lesson may explain
  as `四三拍` once.

## 9. Marks

Each rule has its pattern in the `zh` entry of `src/i18n/typography.ts`. The rules test reads a text
with each kept word written as `X`.

| Rule | Pattern (`mustNot`) |
|---|---|
| A comma, question, exclamation or semicolon is full width: `，？！；`. A comma may sit inside a number. | `(?<!\d),\|,(?!\d)\|[?!;]` |
| A colon is full width: `：`. | `:` |
| A sentence ends with `。`. An ASCII period stands only inside a number. | `(?<!\d)\.\|\.(?!\d)` |
| A quote stands in `“ ”`, with `‘ ’` inside. Never straight quotes, `「」` or `«»`. | `["'「」『』«»]` |
| Parentheses are full width: `（）`. | `[()]` |
| An ellipsis is two characters: `……`. | `\.\.\.\|(?<!…)…(?!…)` |
| A dash is two characters: `——`. | `(?<!—)—(?!—)` |
| A range of numbers takes `～`: `第 1～4 小节`. | `\d[-–]\d` |
| No space stands beside a full-width mark. | `\s[，。？！：；、“”‘’（）《》～…]\|[，。？！：；、“”‘’（）《》～]\s` |
| A space stands between a Han character and a Latin letter or a digit. | `\p{Unified_Ideograph}[A-Za-z0-9]\|[A-Za-z0-9]\p{Unified_Ideograph}` |
| No space stands between two Han characters. | `\p{Unified_Ideograph}\s+\p{Unified_Ideograph}` |

- **The marks are full width,** as GB/T 15834 § 4 sets them. Microsoft's software strings allow
  half-width `: ? ! ()`, but its documents, Apple's help and the standard all use full width.
- **The space follows Microsoft's examples, Apple's and Google's help, and the Chinese copywriting
  guidelines.** GB/T 15834 is silent on it, and its own examples set the space.
- **No space stands before `%` or `°`.**
- **A list of words takes `、`.** No `、` stands before `等`, nor between titles in `《》` or terms in quotes.
- **An interface word the learner looks for stands in `“ ”`:** `点击“播放”`. MS § 4.1.7 and Apple do so.
- **A counted beat or syllable stands in `“ ”`:** `数“1、2”`.
- **Emphasis is bold, never italic,** as `src/ui/base.css` sets, since Chinese fonts have no italic.

## 10. Length

Chinese runs about half the width of English, so a label rarely clips. The risk is a line that breaks
in a bad place. `src/ui/base.css` sets `line-break: strict` for `zh`, which keeps a mark off a line's start.

| Long | Short, for a label |
|---|---|
| 延音踏板 | 踏板 |
| 电脑键盘 | 键盘 |
| 连续练习天数 | 连续天数 |
| 播放速度 | 速度 |
| 循环播放 | 循环 |

- **A label stays a phrase, never a clipped word.** `打开歌曲` may become `打开`.
- **A long Latin title may break inside itself,** but never between `《` and its first character.

## 11. Calibration

Each row is the chosen translation, and why it beat the next best one.

| Kind | English | Chinese | Why it beat the next best |
|---|---|---|---|
| Button | Continue | 继续 | Microsoft's and Android's label. `继续下去` is too long for a button. |
| Transport tooltip | Play or pause | 播放或暂停 | `播放` is the playback verb. `弹奏或暂停` would mean playing the piano. |
| Tooltip | Loop the bars set in the settings | 循环播放设置中选定的小节 | `选定` is plainer than `所设定的`. |
| Setting and help | Wait for your notes / The song stops at each of your notes until you hold every key of it. | 等你弹 / 歌曲会停在你要弹的每个音上，直到你按住它的所有琴键。 | `等你弹` is short and warm. `等待你的音符` reads translated. |
| Error | Your browser refused to save. Nothing changed. | 浏览器无法保存。没有任何更改。 | Impersonal and short, with Microsoft's `无法`. `你的浏览器拒绝了` gives the browser a will. |
| Toast | A new version is ready. | 新版本已就绪。 | `已就绪` is the system's word. `准备好了` is fine in speech, but stiff on a toast. |
| Dialog | Reset all progress? / Are you sure? | 要重置全部进度吗？ / 确定要这样做吗？ | `吗` asks plainly. `您确定吗` breaks the address. |
| Counter | 3 of 8 lessons | 第 3 课，共 8 课 | The order of Chinese counters. `8 课中的 3 课` is a calque. |
| Streak | 3-day streak | 连续 3 天 | Short and everyday. `3 天连胜` is a sports word. |
| Feedback | Right! | 对了！ | A teacher's word. `正确！` reads like a test machine. |
| Greeting | Hi, I'm your piano teacher. Shall we play? | 你好！我是你的钢琴老师。我们一起弹琴吧？ | `弹琴` names the piano. `玩` would make it a game. |
| Badge | Night owl / Finish a lesson at 10 at night or later. | 夜猫子 / 在晚上 10 点或更晚完成一课。 | `夜猫子` is the everyday word for a night person, with no gender. |
| Joke | Quality control is a cat that walks over the keys now and then. | 质量检查由一只猫负责，它时不时从琴键上走过。 | `由……负责` keeps the deadpan. `质量控制是一只猫` sounds odd. |
| Level up | Level up! / Every lesson takes you further. Keep going! | 升级了！ / 每一课都让你更进一步。继续加油！ | `了` marks the change. `等级提升` reads like a system log. |
| Lesson explanation | The right pedal is the sustain pedal. While it is down, every note keeps sounding after you let go of its key. | 右踏板是延音踏板。踩住它时，你松开琴键后，每个音都会继续响。 | `踩住` is the foot's verb. `当它在下面时` is a calque. |
| Lesson instruction | Your turn. Put your right thumb on middle C and play C and E together. | 轮到你了。把右手拇指放在中央 C 上，同时弹 C 和 E。 | `把` puts the object first, as a teacher says it. |
| Quiz | How many black keys are in the smaller group? / One, Two, Three, Four | 小的那组有几个黑键？ / 一个, 两个, 三个, 四个 | Each answer takes `个`. `二个` is wrong before a measure word. |
| Rhythm | Count "1-2" for each half note. | 每个二分音符数“1、2”。 | `二分音符` is what every Chinese method teaches. `半音符` is a calque. |
| Guide, about | Beethoven wrote this tune for the last movement of his Ninth Symphony, first played in Vienna in 1824. | 这段旋律出自贝多芬《第九交响曲》的最后一个乐章，1824 年在维也纳首演。 | `首演` is the word for a first performance, and the composer takes his Chinese name. |
| Guide, tricky bar | Look before you jump. | 跳之前先看好。 | Short and imperative, as the English is. |
| Mode name | Free jam | 自由即兴 | `即兴` keeps the freedom. `Jam` would stay Latin, and few learners know it. |

## 12. Sources

- **Microsoft Chinese (Simplified) Style Guide,** `aka.ms/chinese-simplified-styleguide`. It settled `你`,
  `无法` in errors, the plain verbs, `应用`, and UI terms in `“ ”`.
- **Microsoft Terminology Collection,** `CHINESE (SIMPLIFIED).tbx`. It settled most interface terms.
- **Android's framework and Settings strings,** `values-zh-rCN`. They confirmed 设置, 完成, 跳过, 下一步
  and 重试.
- **Apple's and Google's Chinese help pages.** Apple confirmed `你`, 浅色 and 深色. Both set a space
  around Latin words. Google writes `您`, which this guide does not follow.
- **GB/T 15834-2011, 标点符号用法,** read in a full transcription linked from WP *连接号*. It settled the
  full-width marks, `“ ”` and `‘ ’`, `《》`, `……`, `——` and `～`.
- **The Chinese copywriting guidelines** by sparanoid on GitHub. They settled the space between Han and
  Latin letters or digits, and no space beside a full-width mark.
- **CLDR,** through `Intl`. It settled the separators, the percent sign and the one plural form.
- **Chinese Wikipedia's music articles,** each named in the glossary. They settled most music terms,
  `升 F` and `降 B`.
- **孙荣绮's 《音乐课堂》 on ccnt.com.cn,** read through the Web Archive. It settled the beginner's terms
  beside Wikipedia.
- **MuseScore's mainland translation, Roland China's FP-30 manual and 乐理101.** They are the second
  source for the notation, the pedals and the theory terms.
- **Baidu Baike was not read,** since its `robots.txt` refuses every agent. No Chinese piano method's text
  was reached online.

## Open

- No Chinese piano method was reached. A mainland teacher's read would confirm `手位`, `手型`, `穿指`,
  `跨指`, `标志音` and `一问一答`.
- Eleven music terms have one source each, as the glossary marks them. Each is the word Chinese
  Wikipedia uses, and the site uses it.
- `水手号子`, `练习指南`, `连续练习天数`, `每日目标` and `跟随系统` have no source. Each is the everyday
  word.
- How a Chinese teacher counts "and" in a rhythm, such as `1 哒 2 哒`, was not settled. A lesson writer
  counts in digits, and asks the session where the English needs "and".
