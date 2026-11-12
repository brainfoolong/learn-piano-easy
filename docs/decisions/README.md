<!-- looper:begin decisions v1 -->
# Decision records

A decision record is the frozen reason for a choice this project made. The docs that state the rule
link to it.

- **A record is `docs/decisions/NNNN.md`,** numbered from `0001` with no gaps. The filename holds no date
  and no name.
- **Cite one as `decision NNNN`.**
- **Its title states what is now true:** `# NNNN: <the decision, as a statement>`.
- **It is frozen.** A later change gets a new record, and the docs that state the rule are edited.

## The shape

```
# NNNN: <what is now true>

## Decision

What was decided, as bullets that each state one rule.

## Why

What the decision buys, and what forced it.

## Consequences

What changes because of it. This section is optional.

## Rejected

Each alternative, and why it lost. This section is optional.
```

`looper lint` fails on a record whose sections are missing, renamed or out of this order.
