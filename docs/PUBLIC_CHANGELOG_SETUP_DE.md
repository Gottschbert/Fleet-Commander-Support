# Fleet Commander – Public Changelog / GitHub Pages

Dieses Paket ist für das öffentliche Repository `Fleet-Commander-Support` gedacht.

## Zielstruktur

```text
Fleet-Commander-Support/
├─ .nojekyll
├─ changelog/
│  ├─ index.html
│  ├─ style.css
│  ├─ changelog.js
│  └─ changelog.json
└─ ...
```

## GitHub Pages aktivieren

1. Repository auf GitHub öffnen.
2. **Settings → Pages**.
3. Unter **Build and deployment**: **Deploy from a branch**.
4. Branch `main`.
5. Ordner `/(root)`.
6. **Save**.

Danach veröffentlicht GitHub Pages den Inhalt bei Pushes auf die konfigurierte Quelle automatisch.

## Künftiger Ablauf

Für einen neuen Release-Eintrag musst du nur `changelog/changelog.json` ändern, committen und pushen.

Die HTML-, CSS- und JS-Dateien brauchen nur Änderungen, wenn sich das Layout oder Verhalten der öffentlichen Changelog-Seite ändern soll.

## Origins

Der älteste Eintrag lautet **Origins – Von der Python-Windows-Anwendung zur Webplattform** und dokumentiert die belegte Entwicklungslinie vom ersten Datenbestand am 20.07.2023 über den Python-/Tkinter- und Windows-EXE-Prototyp bis zum erhaltenen Webstand vom 08.08.2026.

## Wichtig

Dieses Paket ist ausschließlich für `Fleet-Commander-Support` / GitHub Pages. Es verändert weder deine produktive Website noch die zentrale `ships.json`.
