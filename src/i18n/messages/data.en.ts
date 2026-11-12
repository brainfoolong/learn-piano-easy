/** The Data page at `data/`, in English. */
export const dataPage = {
  lead: "Your settings, your progress in the course, your songs and your scores all stay in this browser. Save them to one file to keep them safe, or to move them to another device.",
  /** The card that saves a backup. */
  save: {
    heading: "Save a backup",
    text: "One file holds all of it. Keep it somewhere safe, such as a cloud folder.",
    action: "Save a backup",
    never: "This browser has not saved a backup yet.",
    today: "The last backup was saved today.",
    on: (date: string) => `The last backup was saved on ${date}.`,
    done: "The backup file is saved.",
  },
  /** The card that restores a backup. */
  restore: {
    heading: "Restore a backup",
    text: "Open a backup file of Learn Piano Easy. A settings file or a progress backup of an older version works too.",
    action: "Restore a backup",
  },
  /** The card that keeps a folder in step with this browser. */
  folder: {
    heading: "Keep a folder in step",
    text: "Pick a folder, such as one your cloud drive syncs. Every change then reaches it on its own, with a dated copy for each of the last seven days.",
    connect: "Connect a folder",
    starting: "Looking for your folder…",
    synced: (name: string) => `Your data is kept in the folder “${name}”.`,
    waiting: "Each change reaches it a moment later.",
    written: (time: string) => `The folder was last written at ${time}.`,
    reconnect: (name: string) => `Your browser asks again before it writes to the folder “${name}”.`,
    reconnectAction: "Reconnect folder",
    asking: (name: string) => `The folder “${name}” holds data that this browser did not write. Nothing is written to it until you choose.`,
    askingFrom: (date: string) => `That data was saved on ${date}.`,
    restoreAction: "Restore from the folder",
    replaceAction: "Replace it with this browser's data",
    replaced: "The folder now holds this browser's data. Its old file is kept in its backups folder.",
    failed: "Your browser refused to write to the folder. Reconnect it, or pick it again.",
    disconnect: "Disconnect",
    gone: "The folder's file could not be read. Nothing changed.",
  },
  /** The question before a restore. */
  ask: {
    title: "Restore this backup?",
    merge: "Your progress, songs and scores join what is already here, so nothing newer is lost.",
    replace: "Your settings and the settings of your songs take the file's values. The page then reloads.",
    confirm: "Restore",
    cancel: "Keep things as they are",
    close: "Close",
  },
  reading: "Reading the file…",
  restored: "The backup is restored.",
  notOurs: "That file is not a backup of Learn Piano Easy. Nothing changed.",
  failed: "Your browser refused to save. Your backup file still holds everything.",
};
