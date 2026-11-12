/** PDF export in a real browser: the dialog counts the pages and saves the demo song's notes. */
import { readFile } from "node:fs/promises";
import { expect, test } from "@playwright/test";

test("the_pdf_dialog_saves_the_open_song", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("./play/");
  await page.getByRole("button", { name: "Settings" }).click();
  await page.getByRole("button", { name: "Save the notes as a PDF" }).click();

  const dialog = page.getByRole("dialog", { name: "Save as PDF" });
  const field = dialog.getByRole("spinbutton", { name: "Seconds per page" });
  await field.fill("30");
  await field.press("Enter");
  await expect(dialog.getByRole("status")).toContainText("each 30 seconds of the song");
  const pages = Number(/^(\d+) page/.exec((await dialog.getByRole("status").textContent()) ?? "")?.[1]);
  await dialog.getByRole("switch", { name: "Use background colours" }).click();

  const download = page.waitForEvent("download");
  await dialog.getByRole("button", { name: "Save PDF" }).click();
  const file = await download;
  expect(file.suggestedFilename()).toBe("Demo song.pdf");
  const text = (await readFile(await file.path())).toString("latin1");
  expect(text.startsWith("%PDF-1.4")).toBe(true);
  expect(text).toContain(`/Count ${pages}`);
  expect(errors).toEqual([]);
});
