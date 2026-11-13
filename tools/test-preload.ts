/**
 * Runs before every unit test file: loads each shipped locale's catalog, as a page awaits its own before
 * its first render. A test then reads any locale's texts through `messagesOf`, as the site's code does.
 */
import { loadEveryLocale } from "../src/i18n/all-catalogs";

await loadEveryLocale();
