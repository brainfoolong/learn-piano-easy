/** The boss of *First melodies* in Chinese. */
import type { Translation } from "../../../i18n/translation";
import type { MaryTexts } from "./mary-had-a-little-lamb.en";

export const maryZh: Translation<MaryTexts> = {
  title: "终极挑战：《玛丽有只小羊羔》",
  steps: {
    intro: {
      text: "这个世界以一首完整的歌曲结束。你在播放器里弹它，它会等你弹出每一个音。",
    },
    song: {
      text: "用右手弹完《玛丽有只小羊羔》的全部八个小节。",
    },
  },
};
