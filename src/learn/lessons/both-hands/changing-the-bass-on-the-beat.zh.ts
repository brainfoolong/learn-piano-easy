/** *Changing the bass on the beat* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { ChangingTheBassOnTheBeatTexts } from "./changing-the-bass-on-the-beat.en";

export const changingTheBassOnTheBeatZh: Translation<ChangingTheBassOnTheBeatTexts> = {
  title: "跟着节拍换低音",
  steps: {
    "bass-changes": {
      text: "听左手。它把一个五度按住一整个小节，然后换到新的五度。右手一直没有停。",
    },
    "beat-one": {
      text: "低音在第一拍换，也就是新小节开头的那一拍。它和右手在这一拍的音同时落下。",
    },
    "when-it-changes": {
      text: "左手在哪一拍换到新的五度？",
      answers: ["在新小节的第一拍", "在第四拍，稍微提前一点", "只要右手休止就换"],
    },
    "count-the-bars": {
      text: "每一拍都敲一下，敲两个小节，同时跟着数：“1、2、3、4”。感受每个小节都从“1”开始。",
    },
    "land-on-one": {
      text: "把旧的五度一直按到第四拍。然后松开，正好在“1”上落到新的五度。",
    },
    "c-to-g": {
      text: "只用左手。先弹从中央 C 下面的 C 起的五度，再往下移到更低的 G 起的五度，然后回到 C。",
    },
    "change-under-tune": {
      text: "现在双手一起。五度先在 C 上，然后在它下面的 G 上，再回到 C。每个小节开头，新的五度和一个旋律音同时弹。",
    },
    "four-basses": {
      text: "听四个小节，每个小节都有自己的五度：C、F、G，再回到 C。每次换低音都落在“1”上。",
    },
    "four-bars": {
      text: "轮到你了。弹这四个小节，五度先在 C 上，然后在它下面的 F 和 G 上，最后回到 C。换五度时，和每个小节的第一个音一起弹。",
    },
    recap: {
      text: "做得好！现在你的左手会在拍点上换低音了。",
      points: [
        "低音在新小节的第一拍换。",
        "新的五度和右手的音同时落下。",
        "把旧的五度按到小节结束，然后再移动。",
      ],
    },
  },
};
