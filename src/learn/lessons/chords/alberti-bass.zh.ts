/** *The Alberti bass* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { AlbertiBassTexts } from "./alberti-bass.en";

export const albertiBassZh: Translation<AlbertiBassTexts> = {
  title: "阿尔贝蒂低音",
  steps: {
    "alberti-demo": {
      text: "单独听左手。它把每个和弦分解成快速、流动的音型。莫扎特常常用它。",
    },
    "what-alberti-is": {
      text: "这种分解和弦叫阿尔贝蒂低音。它用八分音符，按低、高、中、高的顺序弹和弦的音。",
    },
    "pattern-order": {
      text: "阿尔贝蒂低音按什么顺序弹和弦的音？",
      answers: ["低、中、高、中", "高、中、低、中", "低、高、中、高"],
    },
    "five-one-three-one": {
      text: "左手用 5、1、3、1 指来弹。5 指弹最低的音，拇指弹最高的音，3 指弹中间的音。",
    },
    "c-alberti": {
      text: "轮到你了，先在 C 上弹。把 5 指放在中央 C 下面的 C 上。均匀地把 C、G、E、G 弹两遍。",
    },
    "g7-shape": {
      text: "G 和弦用 G7：在 G 大三和弦上面加一个 F。去掉其中的 G，弹 B、D、F。它们离 C、E、G 很近，所以手几乎不用动。",
    },
    "g7-alberti": {
      text: "把 5 指往下移到 B。用 5、1、3、1 指把 B、F、D、F 弹两遍。",
    },
    "f-second-inversion": {
      text: "F 和弦用第二转位来弹：C、F、A。5 指留在 C 上。音型是 C、A、F、A。",
    },
    "thumb-on-f": {
      text: "在 F 和弦的阿尔贝蒂低音里，拇指弹哪个琴键？",
    },
    "f-alberti": {
      text: "5 指留在 C 上。用 5、1、3、1 指把 C、A、F、A 弹两遍。",
    },
    "change-chords": {
      text: "在 C、F、G7、C 上各弹一遍这个音型。换和弦时，八分音符要保持均匀。",
    },
    "alberti-tune-demo": {
      text: "这是一段配阿尔贝蒂低音的短旋律。右手弹二分音符，左手一直流动地弹下去。",
    },
    "alberti-tune": {
      text: "把右手拇指放在中央 C 上。每个旋律音都和它下面的低音一起弹。",
    },
    "d-major-demo": {
      text: "终极挑战《D 大调卡农》是 D 大调。它的调号有两个升号，在 F 和 C 上，所以每个 F 都弹升 F，每个 C 都弹升 C。听一听 D 大调音阶。",
    },
    "two-sharps": {
      text: "调号上有两个升号，在 F 和 C 上。弹 F 和 C 时，你要弹哪些琴键？",
      answers: ["升 F 和升 C，都是黑键", "F 和 C，都是白键", "只弹升 F，C 仍是白键"],
    },
    "d-major-scale": {
      text: "轮到你了。把右手拇指放在中央 C 上面的 D 上，用 C 大调的指法把音阶往上弹，再往下弹。",
    },
    "canon-bass-demo": {
      text: "听终极挑战的左手：5 指弹一个低音，拇指弹一个高一些的音。然后手跳到下一对音，比如从 A 往下跳到低一个八度的 A。最后落在 D 大三和弦上。",
    },
    "canon-bass": {
      text: "轮到你了。把 5 指放在中央 C 下面的 D 上，弹每一对音，再把手移到下一对。最低的音是中央 C 往下第二个 D。",
    },
    "left-d-major": {
      text: "终极挑战的左手最后落在 D 大三和弦上。把 5 指放在中央 C 下面的 D 上，先一个一个地弹 D、升 F、A，再一起弹。",
    },
    "black-key-thirds-demo": {
      text: "快结束时，终极挑战的右手用三度弹旋律。这四个三度里有三个带黑键：升 F 或升 C。",
    },
    "black-key-thirds": {
      text: "轮到你了。把 3 指放在中央 C 往上第二个 D 上，5 指放在它上面的升 F 上。每个三度的两个琴键同时按下，一路往下走。",
    },
    recap: {
      text: "做得好。现在你能弹阿尔贝蒂低音了。",
      points: [
        "阿尔贝蒂低音按低、高、中、高的顺序分解和弦。",
        "它用八分音符，指法是 5、1、3、1。",
        "G7 和第二转位的 F 和弦让手留在 C 附近。",
        "D 大调的调号有两个升号：升 F 和升 C。",
      ],
    },
  },
};
