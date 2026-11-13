/** The data page in Chinese. A text it leaves out shows in English. */
import type { Translation } from "../translation";
import type { dataPage as en } from "./data.en";

export const dataPage: Translation<typeof en> = {
  lead: "你的设置、课程进度、歌曲和得分都保存在这个浏览器里。把它们存成一个文件，既能妥善保管，也能搬到另一台设备上。",
  save: {
    heading: "保存备份",
    text: "一个文件就能装下全部内容。把它放在安全的地方，比如云盘文件夹。",
    action: "保存备份",
    never: "这个浏览器还没有保存过备份。",
    today: "上次备份是今天保存的。",
    on: (date: string) => `上次备份是在 ${date} 保存的。`,
    done: "备份文件已保存。",
  },
  restore: {
    heading: "恢复备份",
    text: "打开一个 Learn Piano Easy 的备份文件。旧版本的设置文件或进度备份也可以。",
    action: "恢复备份",
  },
  folder: {
    heading: "与文件夹保持同步",
    text: "选择一个文件夹，比如云盘会同步的文件夹。之后每次更改都会自动写入，最近七天每天还各留一份带日期的副本。",
    connect: "连接文件夹",
    starting: "正在查找你的文件夹……",
    synced: (name: string) => `你的数据保存在文件夹“${name}”里。`,
    waiting: "每次更改都会在片刻后写入。",
    written: (time: string) => `文件夹上次写入于 ${time}。`,
    reconnect: (name: string) => `浏览器在写入文件夹“${name}”之前会再次询问。`,
    reconnectAction: "重新连接文件夹",
    asking: (name: string) => `文件夹“${name}”里有不是这个浏览器写入的数据。在你选择之前，不会向它写入任何内容。`,
    askingFrom: (date: string) => `那些数据保存于 ${date}。`,
    restoreAction: "从文件夹恢复",
    replaceAction: "用这个浏览器的数据替换",
    replaced: "文件夹里现在是这个浏览器的数据。原来的文件保留在它的备份文件夹里。",
    failed: "浏览器无法写入文件夹。重新连接它，或者重新选择。",
    disconnect: "断开连接",
    gone: "无法读取文件夹里的文件。没有任何更改。",
  },
  ask: {
    title: "要恢复这个备份吗？",
    merge: "你的进度、歌曲和得分会与这里已有的内容合并，所以较新的内容不会丢失。",
    replace: "你的设置和歌曲的设置会采用文件里的值。然后页面会重新加载。",
    confirm: "恢复",
    cancel: "保持不变",
    close: "关闭",
  },
  reading: "正在读取文件……",
  restored: "备份已恢复。",
  notOurs: "这个文件不是 Learn Piano Easy 的备份。没有任何更改。",
  failed: "浏览器无法保存。你的备份文件里仍然保存着全部内容。",
};
