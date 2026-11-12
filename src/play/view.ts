/**
 * The view: how much of the song the lanes show ahead of the piano, and how far the view moves sideways.
 *
 * The zoom is a span of song time. By seconds, it is `noteToHeightConst`. By measures, it is the time of
 * `measuresShownOnScreen` measures from the start of the current measure, so the bars keep their length
 * while the tempo holds. The scene turns the span into a note speed every frame.
 *
 * Decisions, and what each costs:
 * - The zoom lives in the settings, so it survives a reload. A zoom step writes a setting.
 * - Fit to song shows the whole song ahead of the piano, in the unit the zoom uses now.
 * - Zoom by seconds steps by a factor, so it feels the same at 2 seconds and at 200. Zoom by measures
 *   steps by one measure.
 * - The sideways shift is the scene's own state, kept out of the settings. It is a look, not a choice.
 */
import type { Song } from "../midi/song";
import type { TempoMap } from "../midi/tempo-map";
import type { SettingsStore } from "../settings/store";

/** The settings the zoom reads. A `SettingsStore` gives them. */
export interface ZoomSettings {
  zoomByMeasures: boolean;
  noteToHeightConst: number;
  measuresShownOnScreen: number;
}

/** How much a zoom step by seconds multiplies or divides the span. */
export const ZOOM_FACTOR = 1.25;
/** How far one step moves the view sideways, in world units. Two white keys are about this wide. */
export const SHIFT_STEP = 2;

/** The zoom settings from `settings`. */
export function zoomSettings(settings: SettingsStore): ZoomSettings {
  return {
    zoomByMeasures: settings.get("zoomByMeasures"),
    noteToHeightConst: settings.get("noteToHeightConst"),
    measuresShownOnScreen: settings.get("measuresShownOnScreen"),
  };
}

/** The song time the lanes show ahead of the piano at `songTime`, in seconds. It is always above 0. */
export function secondsShown(zoom: ZoomSettings, tempoMap: TempoMap, songTime: number): number {
  if (!zoom.zoomByMeasures) return zoom.noteToHeightConst;
  const time = Math.max(0, songTime);
  const { measure } = tempoMap.positionAt(time);
  const start = tempoMap.secondsOfPosition(measure, 0);
  const end = tempoMap.secondsOfPosition(measure + zoom.measuresShownOnScreen, 0);
  return Math.max(0.5, end - start);
}

/** The number of measures `song` spans, counting a measure cut short at the end as one. */
export function measureCount(song: Song): number {
  const { measure, beat } = song.tempoMap.positionAtTick(song.endTick);
  return beat > 1e-9 ? measure + 1 : Math.max(1, measure);
}

/** Zooms in by one step, so the lanes show less of the song. */
export function zoomIn(settings: SettingsStore): void {
  if (settings.get("zoomByMeasures")) settings.set("measuresShownOnScreen", settings.get("measuresShownOnScreen") - 1);
  else settings.set("noteToHeightConst", settings.get("noteToHeightConst") / ZOOM_FACTOR);
}

/** Zooms out by one step, so the lanes show more of the song. */
export function zoomOut(settings: SettingsStore): void {
  if (settings.get("zoomByMeasures")) settings.set("measuresShownOnScreen", settings.get("measuresShownOnScreen") + 1);
  else settings.set("noteToHeightConst", settings.get("noteToHeightConst") * ZOOM_FACTOR);
}

/** Zooms so the lanes show the whole of `song` ahead of the piano. */
export function fitToSong(settings: SettingsStore, song: Song): void {
  if (settings.get("zoomByMeasures")) settings.set("measuresShownOnScreen", measureCount(song));
  else settings.set("noteToHeightConst", Math.ceil(song.duration * 2) / 2);
}
