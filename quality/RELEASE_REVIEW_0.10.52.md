# Fleet Commander 0.10.52-beta — Release Review Process

Fleet Commander now uses a binding release and code-review decision after its automated quality gates.

Every internal review ends in one of three states:

- **PASSED** — automated checks and manual review are complete without warnings
- **BLOCKED** — a failed check, missing manual confirmation or unaccepted warning prevents release
- **CONSCIOUSLY ACCEPTED RISK** — a warning was explicitly accepted by a named reviewer with a written reason

Failed checks cannot be overridden. This process change does not affect fleet data, shared sessions or the language-pack schema.
