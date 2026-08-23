# Fleet Commander 0.10.49-beta — Quality Gates

The private application repository now contains a one-command PowerShell quality check:

```powershell
.\scripts\quality-gates.ps1
```

It validates JavaScript and JSON syntax, language-pack parity, version alignment, GitHub/LIVE synchronization, required security controls, tracked runtime files, external runtime CDN references and release archives.

Results are classified as:

- `PASS` — the check succeeded;
- `WARN` — no immediate failure, but an explicit release task remains;
- `FAIL` — stop the release and correct the reported problem.

The current local run completed with no failures. Native PHP lint remains a deployment-host check because PHP CLI is not installed in the local audit environment. The size of `app.js` is intentionally reported as a warning because modularization is the next engineering phase.

Public language references now include `meta.packVersion: "0.10.49-beta"` so contributors can identify the application version against which a translation was validated.

