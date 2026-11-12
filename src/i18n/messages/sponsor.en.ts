/** The sponsor page at `sponsor/`, in English. Its title and the top bar's label are the page's own, under `pages`. */
export const sponsorPage = {
  /** The hero: why the site asks, and the one main action. */
  lead: "Learn Piano Easy is free, and it stays free. If it brought some music into your day, you can help it grow.",
  action: "Sponsor on GitHub",
  note: "Any amount helps, once or every month.",
  /** The short list of what every learner gets anyway, under the hero. */
  promises: ["No ads", "No account", "Works offline", "Open source, MIT License"],
  /** The drawing beside the hero, for a screen reader. */
  picture: "A big heart with two music notes floating around it",
  /** Who builds the site. */
  who: {
    heading: "Who makes it",
    text: [
      "One person builds Learn Piano Easy in their spare time, between work, life and practising scales.",
      "Quality control is a cat that walks over the keys now and then.",
    ],
  },
  /** What a sponsorship pays for. */
  spend: {
    heading: "Where your sponsoring goes",
    items: [
      { title: "Time", text: "Evenings for new lessons, new songs and fewer bugs." },
      { title: "The domain", text: "So the site keeps its address, and you keep finding it." },
      { title: "Coffee", text: "It turns into code at a steady tempo of about 120 beats per minute." },
    ],
  },
  /** The ways to help without money. */
  help: {
    heading: "Other ways to help",
    lead: "Money is one way to help. These count as much:",
    star: { text: "Star the project on GitHub, so other learners find it.", action: "Star on GitHub" },
    bug: { text: "Report a bug when something sounds wrong.", action: "Report a bug" },
    friend: "Tell a friend who always wanted to learn the piano.",
  },
  thanks: "Thank you for playing. You are the reason this exists.",
};
