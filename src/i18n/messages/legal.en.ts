/**
 * The English legal notice and privacy policy, and the types every locale's legal texts satisfy.
 *
 * The facts follow the operator's other site, novis-lang.org. The legal notice holds what Austrian law
 * asks of a website, with each item's German name in brackets. The privacy policy says what leaves
 * the visitor's device: the visitor statistics of `src/site/stats.ts` and the host's logs.
 *
 * These texts sit outside the catalog of `en.ts`, so only the two legal pages load them.
 */
import type { StaticRouteId } from "../../site/routes";

/** A run of text in a paragraph: plain text, a link to another site, or a link to a page of this one. */
export type Inline = string | { text: string; href: string } | { text: string; route: StaticRouteId };

/**
 * A block of a legal page: a paragraph of plain text or of runs, a list, an address of lines, or the
 * switch of the visitor statistics.
 */
export type Block = string | Inline[] | { list: (string | Inline[])[] } | { lines: string[] } | { optOut: true };

/** A section of a legal page, under its heading. */
export interface LegalSection {
  heading: string;
  blocks: Block[];
}

/** One legal page: its lead, its sections, and the line of when it was last changed. */
export interface LegalPage {
  lead: Block[];
  sections: LegalSection[];
  updated: string;
}

/** Every legal text of one locale. */
export interface LegalTexts {
  imprint: LegalPage;
  privacy: LegalPage;
  /** The switch of the visitor statistics, on the privacy page. */
  optOut: { label: string; on: string; off: string; refused: string };
}

const EMAIL = "E-mail: learn-piano-easy (at) proton (dot) me";

export const legalEn: LegalTexts = {
  imprint: {
    lead: ["This page has the information that Austrian law requires for this website. The German name of each item is in brackets."],
    sections: [
      {
        heading: "Owner and publisher (Medieninhaber und Herausgeber)",
        blocks: [
          { lines: ["Roland Eigelsreiter", "Feldgasse 5", "3142 Perschling", "Austria"] },
          "The website is run by a sole proprietorship (Einzelunternehmen). The address above is the location of its trade licence (Standort der Gewerbeberechtigung).",
        ],
      },
      { heading: "Contact", blocks: [EMAIL] },
      {
        heading: "Business details",
        blocks: [
          {
            list: [
              "Business (Unternehmensgegenstand): services in automatic data processing and information technology (Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik)",
              "Trade licence (Gewerbeberechtigung): free trade (freies Gewerbe), GISA number 30647695",
              "Trade authority (Gewerbebehörde): Bezirkshauptmannschaft St. Pölten",
              "Chamber membership (Kammerzugehörigkeit): Wirtschaftskammer Niederösterreich",
              [
                "Applicable law (Berufsrecht): the Austrian Trade Regulation Act (Gewerbeordnung), at ",
                { text: "www.ris.bka.gv.at", href: "https://www.ris.bka.gv.at/" },
              ],
            ],
          },
        ],
      },
      {
        heading: "Purpose of this website (Blattlinie)",
        blocks: [
          "This website is Learn Piano Easy, a free app to learn the piano. It teaches with a guided course, and it plays songs along with a 3D piano.",
        ],
      },
      {
        heading: "Copyright (Urheberrecht)",
        blocks: [
          "The code, the texts and the graphics of this website are under the MIT License, unless a page says something else.",
          ["Songs, sounds and fonts keep their own licenses. The page ", { text: "About and licenses", route: "about" }, " lists each of them."],
          "Product names and brand names of other companies belong to their owners.",
        ],
      },
      {
        heading: "Links to other websites (Haftung für Links)",
        blocks: [
          "We check the content of this website carefully. We are not responsible for the content of other websites that this website links to. The operators of those websites are responsible for their content.",
        ],
      },
    ],
    updated: "Last updated: November 2026",
  },
  privacy: {
    lead: [],
    sections: [
      {
        heading: "Controller (Verantwortlicher)",
        blocks: [["Roland Eigelsreiter, the owner of this website. The ", { text: "legal notice", route: "imprint" }, " has the full address."], EMAIL],
      },
      {
        heading: "What this website does with your data",
        blocks: [
          "Learn Piano Easy runs in your browser. It sets no cookies, and it has no user accounts. It loads nothing from other servers.",
          "Your settings, your progress, your songs and what you play stay on your device. The website keeps them in your browser's storage (local storage and IndexedDB). They are never sent to us.",
          "A MIDI file you open is read on your device and never uploaded. Your MIDI keyboard talks only to this page in your browser.",
          "On the Data page, you can save all of this into a file, or keep it in a folder you pick. Both stay on your device, and we never see them. If a cloud service syncs that folder, its own privacy policy applies.",
          "To work offline, the website stores its own files in your browser's cache.",
          "We count visits with Matomo, on a server that we run ourselves. The section Visitor statistics below explains what we count, and how you can turn it off.",
        ],
      },
      {
        heading: "Visitor statistics",
        blocks: [
          [
            "We want to know which pages people use, so we can improve the course and the app. For this, we use ",
            { text: "Matomo", href: "https://matomo.org/" },
            ", an open-source analytics program. Matomo runs on our own server at stats.learn-piano-easy.app.",
          ],
          "We rent this server from Contabo GmbH, Welfenstraße 22, 81541 München, Germany. The server is in the European Union. Contabo stores the data for us and processes it only on our instructions.",
          "We have a data processing agreement with Contabo (Art. 28 GDPR). No data goes to Matomo the company or to any other third party.",
          "What we count. When you open a page, your browser sends us one request with:",
          {
            list: [
              "the address of the page, without anything after a ? or a #,",
              "the title of the page,",
              "the website you came from, only its address (for example https://www.google.com), and only for the first page you open.",
            ],
          },
          "The server also receives what every web server receives: your IP address, your browser and operating system (the user agent), your preferred language and the time.",
          "Matomo removes the last two parts of your IP address (for example 192.0.2.17 becomes 192.0.0.0) before it stores anything. From the shortened address, Matomo finds your country. Your full IP address is never stored.",
          "What we do not do. We set no cookies, and we store nothing in your browser for the statistics. What you play, your songs and your progress are never part of the statistics.",
          "We do not create a profile of you. We do not combine this data with other data.",
          "Matomo groups the requests of one visit with a value calculated from the shortened IP address and the browser data. This value changes every day, so we cannot recognize you on the next day. We cannot see who you are, and we do not try to find out.",
          "How long we keep it. Matomo deletes the data of single visits after 90 days. After that, we keep only totals, for example “this page had 300 views in May”. Totals do not contain any data about you.",
          "Legal basis. Our legitimate interest in improving this website (Art. 6(1)(f) GDPR).",
          "How to turn it off. You can object at any time with the switch below. If you turn it off, your browser stores learn-piano-easy.statsOptOut in its local storage, and sends no more requests to the statistics server.",
          "If your browser sends a “Do Not Track” or “Global Privacy Control” signal, this website never counts your visits.",
          { optOut: true },
        ],
      },
      {
        heading: "Hosting and server logs",
        blocks: [
          "This website is hosted on GitHub Pages. The provider is GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, United States.",
          "When you open a page, GitHub logs your IP address and stores it to keep its service secure. GitHub does this for every visitor. We cannot see these logs. The legal basis is our legitimate interest in delivering this website securely (Art. 6(1)(f) GDPR).",
          [
            "GitHub decides how long it keeps this data. GitHub transfers data to the United States under the EU-U.S. Data Privacy Framework and the EU standard contractual clauses. The ",
            { text: "GitHub Privacy Statement", href: "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" },
            " explains what GitHub collects and how long it keeps it.",
          ],
        ],
      },
      {
        heading: "Links to other websites",
        blocks: [
          "Some pages of this website link to other websites. When you click such a link, the privacy policy of that website applies. This website embeds no content from other services, and sends them no data before you click.",
        ],
      },
      {
        heading: "Your rights",
        blocks: [
          "You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20) and to object (Art. 21). To use these rights, write to the e-mail address above.",
          [
            "If you think that the processing of your data breaks data protection law, you can complain to the Austrian Data Protection Authority: ",
            { text: "Österreichische Datenschutzbehörde", href: "https://www.dsb.gv.at/" },
            ", Barichgasse 40–42, 1030 Wien.",
          ],
        ],
      },
    ],
    updated: "Last updated: November 2026",
  },
  optOut: {
    label: "Count my visits on this website",
    on: "This website counts your visits.",
    off: "This website does not count your visits. Your choice is stored in this browser only.",
    refused: "Your browser asks websites not to track you. This website does not count your visits.",
  },
};
