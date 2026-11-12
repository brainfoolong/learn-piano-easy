/** The app's entry point: loads the settings and the scene's themes, starts the site and the floating tip, and in development, live reload. */
import "./ui/styles";
import { SettingsStore } from "./settings/store";
import { applyThemes } from "./settings/themes";
import { startSite } from "./site/site";
import { installTips } from "./ui/components/tooltip";

const root = document.getElementById("app");
if (!root) throw new Error("The page has no #app element.");

const settings = new SettingsStore();
applyThemes(settings);
startSite(root, settings);
installTips();

if (__DEV__) {
  new EventSource("./__reload").addEventListener("message", () => location.reload());
}
