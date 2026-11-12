/**
 * Registers the service worker, offers a reload when an update has installed, and then keeps the groups
 * the learner chose saved offline, as `cache-manager.ts` says.
 *
 * The page reloads only after the learner accepts the offer. The first worker of a first visit takes
 * control of the open page without a reload.
 *
 * A development build registers no worker and removes any left from a preview, so live reload always
 * shows the newest code. The worker's URL and scope are relative to the page's `<base>`, the site's root.
 */
import { t } from "../i18n/live";
import type { SettingsStore } from "../settings/store";
import { keepGroupsOffline } from "./cache-manager";

/** What the worker's messages are shown through: the site's toasts. */
export interface Notifier {
  toast(message: string, action?: { label: string; run: () => void }): void;
}

export function registerServiceWorker(shell: Notifier, settings: SettingsStore): void {
  if (!("serviceWorker" in navigator)) return;
  if (__DEV__) {
    void navigator.serviceWorker.getRegistrations().then((all) => all.forEach((r) => void r.unregister()));
    return;
  }

  // Only an update the learner accepted reloads the page. The first worker also takes control, through
  // `clients.claim`, and a reload then would throw away whatever the learner has started.
  let accepted = false;
  let reloading = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (!accepted || reloading) return;
    reloading = true;
    location.reload();
  });

  const offer = (worker: ServiceWorker) =>
    shell.toast(t().player.shell.update.ready, {
      label: t().player.shell.update.reload,
      run: () => {
        accepted = true;
        worker.postMessage("skip-waiting");
      },
    });

  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register("./sw.js", { scope: "./" });
      void keepGroupsOffline(settings, (message) => shell.toast(message));
      if (registration.waiting && navigator.serviceWorker.controller) offer(registration.waiting);
      registration.addEventListener("updatefound", () => {
        const worker = registration.installing;
        worker?.addEventListener("statechange", () => {
          if (worker.state === "installed" && navigator.serviceWorker.controller) offer(worker);
        });
      });
    } catch (error) {
      console.error("The service worker failed to register, so the app will not work offline.", error);
    }
  });
}
