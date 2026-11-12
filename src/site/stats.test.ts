import { expect, test } from "../testing";
import { browserRefuses, STATS, visitForm } from "./stats";

test("a_visit_counts_only_on_the_hosted_site", () => {
  const visit = { title: "Learn Piano Easy", referrer: "" };
  expect(visitForm({ ...visit, href: "http://localhost:5173/play/" })).toBeUndefined();
  expect(visitForm({ ...visit, href: "https://example.github.io/learn-piano-easy/" })).toBeUndefined();
  expect(visitForm({ ...visit, href: "https://www.learn-piano-easy.app/" })).toBeUndefined();
  expect(visitForm({ ...visit, href: `https://${STATS.host}/` })).toBeDefined();
});

test("a_visit_sends_the_address_without_its_query_and_fragment", () => {
  const form = visitForm({ href: "https://learn-piano-easy.app/de/play/?song=x#top", title: "Spielen", referrer: "" })!;
  expect(Object.fromEntries(form)).toEqual({
    idsite: "9",
    rec: "1",
    apiv: "1",
    send_image: "0",
    url: "https://learn-piano-easy.app/de/play/",
    action_name: "Spielen",
  });
});

test("a_visit_names_only_another_sites_origin_as_its_referrer", () => {
  const at = (referrer: string) => visitForm({ href: "https://learn-piano-easy.app/", title: "", referrer })!.get("urlref");
  expect(at("https://www.google.com/search?q=piano")).toBe("https://www.google.com");
  expect(at("https://learn-piano-easy.app/learn/")).toBeNull();
  expect(at("not a url")).toBeNull();
  expect(at("")).toBeNull();
});

test("do_not_track_and_global_privacy_control_each_refuse", () => {
  expect(browserRefuses({ doNotTrack: "1" })).toBe(true);
  expect(browserRefuses({ globalPrivacyControl: true })).toBe(true);
  expect(browserRefuses({ doNotTrack: "0", globalPrivacyControl: false })).toBe(false);
  expect(browserRefuses({})).toBe(false);
});
