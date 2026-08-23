# Fleet Commander 0.10.48-beta — Release Hardening

This beta addresses the release-blocking findings from the `0.10.47-beta` functional and security baseline review.

Publicly relevant changes:

- manifest-provided languages now persist across reloads;
- imported fleet sessions receive strict recursive validation before local persistence;
- encrypted, legacy and compressed session inputs have explicit size ceilings;
- public RSI synchronization has per-IP/global limits, concurrency control and page/member budgets;
- Tailwind, Font Awesome, Lucide and project fonts are pinned and served locally;
- deployment security headers and fail-closed rate-limit storage were added;
- community translation text no longer enters the affected UI headings through `innerHTML`;
- Discord readiness labels and character counts are part of the public language-pack schema.

Community translators should use the updated reference packs and `_template.json`. All provided packs now contain **133 translation keys** and 14 canonical role labels.

The build remains beta software and requires a release-candidate retest before final release approval.

