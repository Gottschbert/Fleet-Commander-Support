# Fleet Commander Support

Official public support, bug-report and feature-request repository for **Fleet Commander**.

> Website: **https://www.fleet-commander.net/**  
> Current public version: **0.10.59-beta**
> Changelog: https://gottschbert.github.io/Fleet-Commander-Support/changelog/  
> Source code: **Private / Closed Source**

## What this repository is for

This repository is the public communication hub for Fleet Commander users.

You can use it to:

- report bugs
- request features
- report usability problems
- check known issues
- read public release notes
- find basic support information
- create and contribute community language packs

## What this repository is NOT

The Fleet Commander source code is developed in a separate private repository.

This public repository therefore does **not** contain:

- application source code
- PHP backend code
- server configuration
- ship database administration code
- private deployment files
- credentials or secrets

## Report a bug

Open **Issues â†’ New issue â†’ Bug report**.

Please include:

- Fleet Commander version
- browser and browser version
- operating system / device
- desktop, tablet or mobile
- steps to reproduce
- expected result
- actual result
- screenshot if useful

Never include passwords, private session links or sensitive information.

## Request a feature

Open **Issues â†’ New issue â†’ Feature request**.

Please describe the operational problem first, then your proposed solution.

## Current core capabilities

Fleet Commander currently includes:

- Squadron and ship management
- Player / crew registry
- Role-aware Crew Deployment
- Central ship database with station capacities
- Fleet Overview tactical tree
- Mission Readiness metrics
- Pilot coverage and Open Stations
- Extensible JSON language-pack system with DE / EN / Simplified Chinese included
- AES-256-GCM encrypted session sharing
- Short secure session links
- Compact Discord fleet brief export with Treeview hierarchy and localized timestamps
- Responsive desktop, tablet and mobile interface

## Project status

Fleet Commander is currently in **beta** and is actively maintained.

See:

- [Known Issues](KNOWN_ISSUES.md)
- [Support Guide](SUPPORT.md)
- [Community Translations](languages/README.md)

## Privacy & Data Protection

Fleet Commander is designed to minimize the server-side processing of fleet and crew data.

### Local storage by default

Fleet planning data entered into Fleet Commander â€” such as player / crew names, squadrons, ship assignments, roles, operation status and locations â€” is stored locally in the user's browser using browser storage.

Under normal use, this fleet state is **not automatically uploaded to or persistently stored in a central Fleet Commander user database**.

Users remain in control of the locally stored fleet state and can remove it by using Fleet Commander's reset functions or by clearing the browser's site data.

### Encrypted session sharing

Server-side storage is used only when a user explicitly creates a **Save & Share** session.

For this feature:

- the fleet state is encrypted in the browser using **AES-256-GCM** before it is transmitted
- only the encrypted session payload is stored temporarily on the Fleet Commander server
- the decryption key remains in the URL fragment (`#key=...`) and is not included in the session data stored by the sharing endpoint
- shared sessions expire automatically after the configured retention period
- anyone who receives the complete private share link may be able to decrypt the shared fleet state, so share links must be treated as confidential

Fleet Commander does not require real names. Users should use Star Citizen handles / nicknames where practical and avoid entering unnecessary personal information.

### Data minimization

Fleet Commander is intended for operational fleet planning and does not require:

- postal addresses
- telephone numbers
- payment information
- government identifiers
- passwords
- special-category personal data

Only information necessary for organizing the fleet operation should be entered.

### Support and bug reports

Public GitHub issues are visible to other users. Do not post:

- passwords
- admin credentials
- private fleet-session links
- API keys
- personal information that is not required to reproduce a problem

If a screenshot is attached to a report, check it for personal or confidential information before publishing it.

### Important privacy note

Local browser storage reduces unnecessary central collection of fleet data, but it does **not** by itself make the complete website automatically GDPR-compliant. Website hosting, technical server logs, external resources and the optional encrypted sharing service may involve additional technical processing that must be covered by the website's applicable privacy information.

## Disclaimer

Fleet Commander is an independent community project and is not affiliated with, endorsed by, or sponsored by Cloud Imperium Games or Roberts Space Industries.

Star Citizen and related marks belong to their respective owners.
