<!-- looper:begin doc-style v2 -->
# Writing docs here

The docs are written for an agent that reads one file and starts working. Every sentence follows
[prose.md](prose.md).

- **State a fact once.** How a part works lives in its module's head comment, or in
  [design.md](../design.md) until one exists. A rule that binds every agent lives in `AGENTS.md`. A shape
  lives in [conventions.md](conventions.md). A trap lives in [playbook.md](playbook.md). Link to the home
  from everywhere else, because a summary in a second place goes stale without a sound.
- **Docs describe the present only.** No dates, no "previously", no "now" and no changelog notes. When
  something changes, edit the doc that owns it so its body is true again. `git log` is the history.
- **A draft doc puts what it does not know yet under `## Open`,** never a guess.
- **Never quote a measured number outside the record that owns it.** State the shape of the cost
  instead: "the worker reads each event once".
- **A generated file carries a marker that says so, and is never edited by hand.** Edit its source.
- **A decision is a record under `docs/decisions/`,** in the shape
  [docs/decisions/README.md](../decisions/README.md) gives.
- **Front-load.** Put the point first and the reasoning below it. Assume the reader stops after the
  first screen.
- **Name a goal by its slug, never by its number.**
