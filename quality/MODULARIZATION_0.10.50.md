# Fleet Commander 0.10.50-beta — Modularization Phase 1

This maintenance release reorganizes internal frontend code without changing the user workflow or stored fleet format.

## What changed

- language fallback/role metadata, state validation, encrypted session helpers and the operating guide now live in separate internal modules
- `app.js` was reduced from 5,283 to roughly 4,000 lines
- automated quality gates now check every module and its LIVE synchronization

## Compatibility

Existing local fleet data and shared-session formats remain compatible. No migration or user action is required.

## Community language packs

The public DE, EN, ZH-CN references and `_template.json` are validated against `0.10.50-beta`. The language-pack schema itself did not change.
