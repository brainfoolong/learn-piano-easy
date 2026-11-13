/** *Open fifths* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { OpenFifthsTexts } from "./open-fifths.en";

export const openFifthsZh: Translation<OpenFifthsTexts> = {
  title: "空五度",
  steps: {
    "fifth-sound": {
      text: "听你的左手同时弹两个琴键。这个声音叫作空五度。它听起来空旷、有力又平静。",
    },
    "little-finger-and-thumb": {
      text: "把左手放在 C 手位。用小指按 C，用拇指按 G，两个一起按。这就是五度。",
    },
    "count-the-fifth": {
      text: "数一数从 C 到 G 的白键，C 和 G 都要算上。一共几个琴键？",
      answers: ["五个", "三个", "八个"],
    },
    "first-fifth": {
      text: "轮到你了。把 C 和 G 这个五度弹三次。每次都同时按下两个琴键。",
    },
    "move-the-fifth": {
      text: "五度是一个可以移动的手型。小指和拇指之间保持同样的距离，把整只手滑过去。",
    },
    "fifth-from-g": {
      text: "你的左手小指放在 G 上。要弹五度，拇指该弹哪个琴键？",
    },
    "three-fifths": {
      text: "用左手弹从中央 C 下面的 C 到 G 的五度。然后从那个 C 下面的 G 起弹五度，再从更下面的 F 起弹五度，最后回到 C。每次都保持同样的手型。",
    },
    "fifth-under-tune": {
      text: "现在右手在五度上面弹一段旋律。左手和第一个音一起按下五度，然后按住。",
    },
    "fifth-and-tune": {
      text: "轮到你了。左手弹 C 和 G 的五度，同时右手弹 E，然后右手弹 D 和 C。再把五度和 E 一起弹一次，然后再弹两个 E。",
    },
    recap: {
      text: "做得好！现在你的左手会弹五度了。",
      points: [
        "五度跨五个白键，两端都算上，它的两个琴键要同时弹。",
        "左手小指弹低的琴键，拇指弹高的琴键。",
        "这个手型可以移动：C 和 G、G 和 D、F 和 C。",
        "旋律下面的五度听起来空旷而有力。",
      ],
    },
  },
};
