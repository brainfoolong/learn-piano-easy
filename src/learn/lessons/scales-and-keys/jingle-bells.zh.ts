/** The boss of *Scales and keys* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { JingleBellsTexts } from "./jingle-bells.en";

export const jingleBellsZh: Translation<JingleBellsTexts> = {
  title: "终极挑战：双手弹《铃儿响叮当》",
  steps: {
    intro: {
      text: "《铃儿响叮当》是 C 大调，所以它的调号是空的。旋律沿着 C 大调音阶的音一级一级地上上下下。每小节里，左手按住一个低音或一个五度。",
    },
    song: {
      text: "用双手以原速弹《铃儿响叮当》。右手保持在 C 手位，每个低音都按满一整个小节。",
    },
  },
};
