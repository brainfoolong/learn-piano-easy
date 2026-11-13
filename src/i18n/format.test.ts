import { expect, test } from "../testing";
import { isolate } from "./format";

test("isolate_wraps_text_in_first_strong_isolates", () => {
  expect(isolate("Für Elise")).toBe("⁨Für Elise⁩");
  expect(isolate("")).toBe("⁨⁩");
  expect(`عزف ${isolate("C#4")} الآن`).toBe("عزف ⁨C#4⁩ الآن");
});
