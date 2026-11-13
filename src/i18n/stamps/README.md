# Stamps: the English each translation was made from

Each `<locale>.json` here maps a text's id to its stamp. The stamp is the first 12 hex digits of the
SHA-256 of the English the translation was made from.

- **`bun run i18n stamp <locale> <unit>` writes a unit's stamps** once its translation is reviewed. It
  stamps each text the locale holds, keeps every other unit's stamps, and drops an id no unit holds.
- **`bun run i18n status <locale>` calls a text stale** when its English no longer has its stamp. The
  next pass of the locale reviews it.
- **A stamp file is written by the tool alone,** never by hand.
- **English and German have none.** English is the source, and German follows every change.

`tools/i18n.ts` holds the ids, the hash and the units. The method is
[docs/agent/translation.md](../../../docs/agent/translation.md).
