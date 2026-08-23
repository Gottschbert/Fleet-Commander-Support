# Fleet Commander – Community-Übersetzungen

Dieser Ordner enthält die öffentlichen Fleet-Commander-Sprachpakete und eine vollständige Vorlage für Übersetzungen aus der Community.

English: [Open the English guide](README.md)

## Enthaltene Dateien

- `manifest.json` — Liste der aktuell in Fleet Commander enthaltenen Sprachen
- `de.json` — deutsches Referenzpaket
- `en.json` — vollständiger englischer Fallback und empfohlene Übersetzungsgrundlage
- `zh-CN.json` — Sprachpaket für vereinfachtes Chinesisch
- `_template.json` — vollständige neutrale Vorlage für eine neue Sprache

## Ein neues Sprachpaket erstellen

1. `_template.json` herunterladen oder `en.json` kopieren.
2. Die Kopie nach dem BCP-47-Sprachcode benennen, zum Beispiel `fr.json`, `es.json` oder `pt-BR.json`.
3. Den Block `meta` anpassen:

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

4. Ausschließlich die Textwerte in `translations` und `roles` übersetzen.
5. Übersetzungsschlüssel weder umbenennen noch löschen oder ergänzen.
6. Platzhalter wie `{player}` exakt unverändert lassen.
7. Die Datei als UTF-8-JSON speichern.
8. Vor dem Einreichen validieren.

## Wichtige Regeln

- Englisch ist der technische Fallback. `en.json` dient als Bedeutungsreferenz.
- Produktnamen wie `Fleet Commander`, `Discord`, `RSI` und `Star Citizen` unverändert lassen, sofern keine etablierte lokale Schreibweise notwendig ist.
- Schiffs-, Spieler-, Organisations- und frei definierte Stationsnamen sind Benutzerdaten und dürfen nicht übersetzt werden.
- `"direction": "rtl"` nur für rechtsläufige Sprachen wie Arabisch oder Hebräisch verwenden.
- Eine Übersetzung muss jeden Schlüssel aus `en.json` enthalten.
- `meta.packVersion` nennt die Fleet-Commander-Version, mit der das Paket geprüft wurde.
- Keine personenbezogenen Daten, Session-Links, Zugangsdaten oder ausführbaren Code einfügen.

## Mit PowerShell prüfen

Diesen Befehl im Ordner `languages` ausführen:

```powershell
Get-Content -Raw .\fr.json | ConvertFrom-Json | Out-Null
```

Die Übersetzungsschlüssel mit Englisch vergleichen:

```powershell
$en = Get-Content -Raw .\en.json | ConvertFrom-Json
$new = Get-Content -Raw .\fr.json | ConvertFrom-Json
$enKeys = @($en.translations.psobject.Properties.Name)
$newKeys = @($new.translations.psobject.Properties.Name)
Compare-Object $enKeys $newKeys
```

Wenn `Compare-Object` nichts ausgibt, stimmen die Schlüssellisten überein.

## Übersetzung einreichen

Empfohlener Ablauf:

1. Dieses Support-Repository forken.
2. Die fertige JSON-Datei in `languages/` hinzufügen.
3. Einen Pull Request mit der Vorlage für Übersetzungsbeiträge öffnen.

Wer Pull Requests noch nicht kennt, kann stattdessen ein Issue vom Typ **Translation contribution** öffnen und die JSON-Datei dort anhängen. Bitte große Sprachdateien nicht vollständig in den Issue-Text kopieren.

Vor der Aufnahme in eine öffentliche Version prüft der Fleet-Commander-Maintainer Formulierungen, Schlüsselgleichheit, JSON-Struktur und Darstellung in der Anwendung. Eine Einreichung garantiert keine sofortige Übernahme.

## Lizenz und Namensnennung

Mit der Einreichung bestätigst du, dass du die Übersetzung selbst erstellt hast oder sie zur Verwendung und Weitergabe mit Fleet Commander beitragen darfst. Den gewünschten Namen oder Handle für eine optionale Namensnennung bitte im Pull Request oder Issue angeben.
