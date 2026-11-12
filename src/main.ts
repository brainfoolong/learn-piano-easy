/** The app's entry point: loads the settings and the scene's themes, starts the site, and in development, live reload. */
import "./ui/styles";
import { SettingsStore } from "./settings/store";
import { applyThemes } from "./settings/themes";
import { startSite } from "./site/site";

const root = document.getElementById("app");
if (!root) throw new Error("The page has no #app element.");

const settings = new SettingsStore();
applyThemes(settings);
startSite(root, settings);

if (__DEV__) {
  new EventSource("./__reload").addEventListener("message", () => location.reload());
}
