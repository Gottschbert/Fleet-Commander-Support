# Fleet Commander Community Translations

This directory contains the public Fleet Commander language packs and a complete template for community translations.

Deutsch: [Zur deutschen Anleitung](README.de.md)

## Included files

- `manifest.json` — list of languages currently included in Fleet Commander
- `de.json` — German reference package
- `en.json` — complete English fallback and recommended translation source
- `zh-CN.json` — Simplified Chinese package
- `_template.json` — complete neutral template for a new language

## Create a new language pack

1. Download `_template.json` or copy `en.json`.
2. Rename the copy to its BCP 47 language code, for example `fr.json`, `es.json` or `pt-BR.json`.
3. Update the `meta` block:

```json
"meta": {
  "code": "fr",
  "nativeName": "Français",
  "englishName": "French",
  "locale": "fr-FR",
  "direction": "ltr",
  "packVersion": "0.10.51-beta"
}
```

4. Translate only the text values in `translations` and `roles`.
5. Do not rename, remove or add translation keys.
6. Keep placeholders such as `{player}` exactly unchanged.
7. Save the file as UTF-8 JSON.
8. Validate it before submitting it.

## Important rules

- English is the technical fallback. Use `en.json` as the meaning reference.
- Keep product names such as `Fleet Commander`, `Discord`, `RSI` and `Star Citizen` unchanged unless an established local spelling is necessary.
- Ship names, player names, organization names and custom station names are user data and must not be translated.
- Use `"direction": "rtl"` only for right-to-left languages such as Arabic or Hebrew.
- A translation must contain every key from `en.json`.
- Set `meta.packVersion` to the Fleet Commander version the pack was validated against.
- Do not include personal data, session links, credentials or executable code.

## Validate with PowerShell

Run this command inside the `languages` directory:

```powershell
Get-Content -Raw .\fr.json | ConvertFrom-Json | Out-Null
```

Compare the translation keys with English:

```powershell
$en = Get-Content -Raw .\en.json | ConvertFrom-Json
$new = Get-Content -Raw .\fr.json | ConvertFrom-Json
$enKeys = @($en.translations.psobject.Properties.Name)
$newKeys = @($new.translations.psobject.Properties.Name)
Compare-Object $enKeys $newKeys
```

No output from `Compare-Object` means the key sets match.

## Submit your translation

Preferred workflow:

1. Fork this Support repository.
2. Add the completed JSON file to `languages/`.
3. Open a pull request using the translation contribution template.

If you are unfamiliar with pull requests, open a **Translation contribution** issue and attach the JSON file there. Do not paste a large language file into the issue text.

The Fleet Commander maintainer will validate wording, key parity, JSON structure and application rendering before including a community translation in a public release. Submission does not guarantee immediate inclusion.

## License and attribution

By submitting a translation, you confirm that you created it yourself or have permission to contribute it for use and redistribution with Fleet Commander. Add the name or handle you want credited in the pull request or issue; attribution is optional.
