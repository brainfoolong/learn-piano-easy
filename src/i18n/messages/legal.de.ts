/** The German legal notice and privacy policy. `legal.en.ts` is the home of their shape and their facts. */
import type { LegalTexts } from "./legal.en";

const EMAIL = "E-Mail: learn-piano-easy (at) proton (dot) me";

export const legalDe: LegalTexts = {
  imprint: {
    lead: ["Diese Seite enthält die Angaben, die das österreichische Recht für diese Website verlangt."],
    sections: [
      {
        heading: "Medieninhaber und Herausgeber",
        blocks: [
          { lines: ["Roland Eigelsreiter", "Feldgasse 5", "3142 Perschling", "Österreich"] },
          "Die Website betreibt ein Einzelunternehmen. Die Adresse oben ist der Standort der Gewerbeberechtigung.",
        ],
      },
      { heading: "Kontakt", blocks: [EMAIL] },
      {
        heading: "Angaben zum Unternehmen",
        blocks: [
          {
            list: [
              "Unternehmensgegenstand: Dienstleistungen in der automatischen Datenverarbeitung und Informationstechnik",
              "Gewerbeberechtigung: freies Gewerbe, GISA-Zahl 30647695",
              "Gewerbebehörde: Bezirkshauptmannschaft St. Pölten",
              "Kammerzugehörigkeit: Wirtschaftskammer Niederösterreich",
              ["Berufsrecht: Gewerbeordnung, abrufbar unter ", { text: "www.ris.bka.gv.at", href: "https://www.ris.bka.gv.at/" }],
            ],
          },
        ],
      },
      {
        heading: "Blattlinie",
        blocks: [
          "Diese Website ist Learn Piano Easy, eine kostenlose App zum Klavierlernen. Sie lehrt mit einem geführten Kurs und spielt Lieder mit einem 3D-Klavier.",
        ],
      },
      {
        heading: "Urheberrecht",
        blocks: [
          "Der Code, die Texte und die Grafiken dieser Website stehen unter der MIT-Lizenz, wenn eine Seite nichts anderes sagt.",
          ["Lieder, Klänge und Schriften behalten ihre eigenen Lizenzen. Die Seite ", { text: "Über die App und Lizenzen", route: "about" }, " nennt jede davon."],
          "Produkt- und Markennamen anderer Unternehmen gehören ihren Inhabern.",
        ],
      },
      {
        heading: "Haftung für Links",
        blocks: [
          "Wir prüfen die Inhalte dieser Website sorgfältig. Für die Inhalte anderer Websites, auf die diese Website verlinkt, sind wir nicht verantwortlich. Dafür sind deren Betreiber verantwortlich.",
        ],
      },
    ],
    updated: "Zuletzt geändert: November 2026",
  },
  privacy: {
    lead: [],
    sections: [
      {
        heading: "Verantwortlicher",
        blocks: [["Roland Eigelsreiter, der Inhaber dieser Website. Das ", { text: "Impressum", route: "imprint" }, " enthält die vollständige Adresse."], EMAIL],
      },
      {
        heading: "Was diese Website mit deinen Daten macht",
        blocks: [
          "Learn Piano Easy läuft in deinem Browser. Es setzt keine Cookies und hat keine Benutzerkonten. Es lädt nichts von fremden Servern.",
          "Deine Einstellungen, dein Fortschritt, deine Lieder und was du spielst, bleiben auf deinem Gerät. Die Website speichert sie im Speicher deines Browsers (Local Storage und IndexedDB). Sie werden nie an uns gesendet.",
          "Eine MIDI-Datei, die du öffnest, wird auf deinem Gerät gelesen und nie hochgeladen. Dein MIDI-Keyboard spricht nur mit dieser Seite in deinem Browser.",
          "Auf der Seite „Deine Daten“ kannst du all das in einer Datei sichern oder in einem Ordner deiner Wahl aufbewahren. Beides bleibt auf deinem Gerät, und wir sehen es nie. Synchronisiert ein Cloud-Dienst diesen Ordner, gilt dessen Datenschutzerklärung.",
          "Damit sie offline funktioniert, speichert die Website ihre eigenen Dateien im Cache deines Browsers.",
          "Wir zählen Besuche mit Matomo, auf einem Server, den wir selbst betreiben. Der Abschnitt Besucherstatistik unten erklärt, was wir zählen und wie du es abschaltest.",
        ],
      },
      {
        heading: "Besucherstatistik",
        blocks: [
          [
            "Wir möchten wissen, welche Seiten genutzt werden, damit wir den Kurs und die App verbessern können. Dafür nutzen wir ",
            { text: "Matomo", href: "https://matomo.org/" },
            ", ein quelloffenes Analyseprogramm. Matomo läuft auf unserem eigenen Server unter stats.learn-piano-easy.app.",
          ],
          "Diesen Server mieten wir von der Contabo GmbH, Welfenstraße 22, 81541 München, Deutschland. Der Server steht in der Europäischen Union. Contabo speichert die Daten für uns und verarbeitet sie nur nach unserer Weisung.",
          "Mit Contabo besteht ein Auftragsverarbeitungsvertrag (Art. 28 DSGVO). Keine Daten gehen an das Unternehmen Matomo oder an andere Dritte.",
          "Was wir zählen. Wenn du eine Seite öffnest, sendet dein Browser uns eine Anfrage mit:",
          {
            list: [
              "der Adresse der Seite, ohne alles nach einem ? oder einem #,",
              "dem Titel der Seite,",
              "der Website, von der du kommst, nur ihrer Adresse (zum Beispiel https://www.google.com), und nur für die erste Seite, die du öffnest.",
            ],
          },
          "Der Server erhält außerdem, was jeder Webserver erhält: deine IP-Adresse, deinen Browser und dein Betriebssystem (den User-Agent), deine bevorzugte Sprache und die Uhrzeit.",
          "Matomo entfernt die letzten zwei Teile deiner IP-Adresse (zum Beispiel wird 192.0.2.17 zu 192.0.0.0), bevor es etwas speichert. Aus der gekürzten Adresse bestimmt Matomo dein Land. Deine volle IP-Adresse wird nie gespeichert.",
          "Was wir nicht tun. Wir setzen keine Cookies und speichern für die Statistik nichts in deinem Browser. Was du spielst, deine Lieder und dein Fortschritt sind nie Teil der Statistik.",
          "Wir erstellen kein Profil von dir. Wir verknüpfen diese Daten nicht mit anderen Daten.",
          "Matomo fasst die Anfragen eines Besuchs mit einem Wert zusammen, der aus der gekürzten IP-Adresse und den Browserdaten berechnet wird. Dieser Wert ändert sich täglich, also erkennen wir dich am nächsten Tag nicht wieder.",
          "Wir sehen nicht, wer du bist, und versuchen auch nicht, es herauszufinden.",
          "Wie lange wir sie aufbewahren. Matomo löscht die Daten einzelner Besuche nach 90 Tagen. Danach bleiben nur Summen, zum Beispiel „diese Seite hatte im Mai 300 Aufrufe“. Summen enthalten keine Daten über dich.",
          "Rechtsgrundlage. Unser berechtigtes Interesse, diese Website zu verbessern (Art. 6 Abs. 1 lit. f DSGVO).",
          "So schaltest du es ab. Du kannst jederzeit mit dem Schalter unten widersprechen. Schaltest du ihn ab, speichert dein Browser learn-piano-easy.statsOptOut im Local Storage und sendet keine Anfragen mehr an den Statistikserver.",
          "Sendet dein Browser ein „Do Not Track“- oder „Global Privacy Control“-Signal, zählt diese Website deine Besuche nie.",
          { optOut: true },
        ],
      },
      {
        heading: "Hosting und Serverprotokolle",
        blocks: [
          "Diese Website wird auf GitHub Pages gehostet. Anbieter ist GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA.",
          "Wenn du eine Seite öffnest, protokolliert GitHub deine IP-Adresse und speichert sie, um seinen Dienst sicher zu halten. GitHub macht das bei jedem Besucher. Wir sehen diese Protokolle nicht.",
          "Rechtsgrundlage ist unser berechtigtes Interesse, diese Website sicher auszuliefern (Art. 6 Abs. 1 lit. f DSGVO).",
          [
            "GitHub entscheidet, wie lange es diese Daten aufbewahrt. GitHub überträgt Daten in die USA auf Grundlage des EU-US Data Privacy Framework und der EU-Standardvertragsklauseln. Das ",
            { text: "GitHub Privacy Statement", href: "https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" },
            " erklärt, was GitHub erhebt und wie lange es die Daten aufbewahrt.",
          ],
        ],
      },
      {
        heading: "Links zu anderen Websites",
        blocks: [
          "Manche Seiten dieser Website verlinken auf andere Websites. Klickst du auf einen solchen Link, gilt die Datenschutzerklärung dieser Website. Diese Website bettet keine fremden Inhalte ein und sendet vor deinem Klick keine Daten an andere.",
        ],
      },
      {
        heading: "Deine Rechte",
        blocks: [
          "Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20) und Widerspruch (Art. 21). Schreib dazu an die E-Mail-Adresse oben.",
          [
            "Wenn du meinst, dass die Verarbeitung deiner Daten gegen das Datenschutzrecht verstößt, kannst du dich bei der Datenschutzbehörde beschweren: ",
            { text: "Österreichische Datenschutzbehörde", href: "https://www.dsb.gv.at/" },
            ", Barichgasse 40–42, 1030 Wien.",
          ],
        ],
      },
    ],
    updated: "Zuletzt geändert: November 2026",
  },
  optOut: {
    label: "Meine Besuche auf dieser Website zählen",
    on: "Diese Website zählt deine Besuche.",
    off: "Diese Website zählt deine Besuche nicht. Deine Wahl ist nur in diesem Browser gespeichert.",
    refused: "Dein Browser bittet Websites, dich nicht zu verfolgen. Diese Website zählt deine Besuche nicht.",
  },
};
