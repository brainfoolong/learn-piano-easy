/** *Playing with feeling* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { PlayingWithFeelingTexts } from "./playing-with-feeling.en";

export const playingWithFeelingZh: Translation<PlayingWithFeelingTexts> = {
  title: "带着感情弹",
  steps: {
    "all-the-marks": {
      text: "现在你认识了本世界的记号，比如 p 和 f、渐强和渐弱记号、圆滑线、跳音圆点和 rit.。它们合在一起，告诉你一首乐曲该是什么感觉。",
    },
    "read-the-marks": {
      text: "一段旋律以 p 开始。一条圆滑线连着它的前四个音，最后一个小节上方写着 rit.。你怎么弹它？",
      answers: ["又强又短，越来越快", "又强又圆滑，保持速度", "又弱又短，保持速度", "又弱又圆滑，结尾放慢"],
    },
    "flat-demo": {
      text: "听一段短旋律，每个音都一样响、一样长。它没有弹错，却什么也没说出来。",
    },
    "shaped-demo": {
      text: "现在还是同样的音。听一听，这一次感觉有什么不同。",
    },
    "what-changed": {
      text: "音是一样的。是什么让第二遍听起来有了生气？",
      answers: ["它用了别的音", "它从头到尾都更快", "它先渐强、再渐弱，结尾还放慢了", "它少弹了最后一个音"],
    },
    "bright-demo": {
      text: "听一段 C 大调的旋律，弹得强，还有点短促。",
    },
    "sad-demo": {
      text: "现在听它的 A 小调版本，弹得弱、慢而圆滑。",
    },
    "major-and-minor": {
      text: "调会影响乐曲的情绪。C 大调常常听起来明亮、快乐，A 小调常常听起来忧伤。你要选一种适合它的触键和速度。",
    },
    "which-sounds-sad": {
      text: "你想让一段旋律听起来忧伤、温柔。哪种最合适？",
      answers: ["C 大调，又强又短", "A 小调，又弱又圆滑", "C 大调，快速的跳音", "A 小调，又强又尖锐"],
    },
    "play-bright": {
      text: "弹这段明亮的旋律：中央 C、E、G、再往上的 C，然后弹回来。弹得有力一些，稍微短促一点。",
    },
    "play-sad": {
      text: "弹这段忧伤的旋律：中央 C 下面的 A、C、E、上面的 A，然后弹回来。轻轻地弹，把音连起来。",
    },
    "elise-demo": {
      text: "终极挑战《致爱丽丝》就是这样开头的。它是 A 小调，在左手的分解和弦上轻轻地弹出来。",
    },
    "play-softly": {
      text: "用右手轻轻地弹它开头的几个音：E、升 D、E、升 D、E、B、D、C、A。从中央 C 上面的第二个 E 开始，每个琴键都轻轻地按。",
    },
    "hear-loud-and-soft": {
      text: "听《致爱丽丝》开头的几个音弹两遍。第一遍强，第二遍弱。",
    },
    "which-fits-elise": {
      text: "《致爱丽丝》标着 p。哪一遍适合它？",
      answers: ["第二遍，弱的那遍", "第一遍，强的那遍", "两遍都行，因为它们一样", "两遍都不适合"],
    },
    "elise-left-demo": {
      text: "听终极挑战的左手，用 5、2、1 指。它把 A 小三和弦分解成 A、E、A，再把 E 大三和弦分解成 E、B、升 G。E 大三和弦的手型比一个八度还宽，所以弹的时候让手往上移。",
    },
    "elise-left-hand": {
      text: "轮到你了。从中央 C 下面的第二个 A 开始弹 A、E、A，再从中央 C 下面的第二个 E 开始弹 E、B、升 G。最后再弹一次 A、E、A。",
    },
    "elise-octave-demo": {
      text: "在第 9 小节，终极挑战的右手要张开一个八度。拇指弹中央 C 上面的 E，5 指弹高一个八度的 E。然后旋律像开头那样继续。",
    },
    "elise-octave": {
      text: "轮到你了。把手张开到一个八度：拇指放在中央 C 上面的 E 上，5 指放在再往上的那个 E 上。轻轻地弹这个乐句。",
    },
    "how-to-play-the-boss": {
      text: "《致爱丽丝》是 A 小调，以 p 开始。你会怎么弹它？",
      answers: ["又强又明亮", "又快又短", "轻柔地弹，像一首安静的歌", "每个音都一样重、一样硬"],
    },
    recap: {
      text: "真棒！你已经学完了第一年的最后一课，《致爱丽丝》在等着你。",
      points: [
        "乐曲的记号告诉你弹多响、多圆滑、多快。",
        "同样的音，有渐强、渐弱和放慢，就有了生气。",
        "大调常常听起来明亮，小调常常听起来忧伤。",
        "你要选一种适合乐曲感情的触键。",
      ],
    },
  },
};
