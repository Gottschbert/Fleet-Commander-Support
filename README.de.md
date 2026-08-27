# Fleet Commander Support

Offizielles Ã¶ffentliches Support-, Bugreport- und Feature-Request-Repository fÃ¼r **Fleet Commander**.

ðŸŒ Sprache: [English](README.md) | **Deutsch**

> Website: **https://www.fleet-commander.net/**  
> $10.10.57-beta**
> Changelog: https://gottschbert.github.io/Fleet-Commander-Support/changelog/  
> Quellcode: **Privat / Closed Source**

## WofÃ¼r dieses Repository gedacht ist

Dieses Repository ist die Ã¶ffentliche Anlaufstelle fÃ¼r die Kommunikation rund um Fleet Commander.

Du kannst es verwenden, um:

- Fehler zu melden
- neue Funktionen vorzuschlagen
- Usability-Probleme zu melden
- bekannte Probleme nachzusehen
- Ã¶ffentliche Release Notes zu lesen
- grundlegende Support-Informationen zu finden
- Community-Sprachpakete zu erstellen und beizutragen

## WofÃ¼r dieses Repository NICHT gedacht ist

Der Fleet-Commander-Quellcode wird in einem separaten privaten Repository entwickelt.

Dieses Ã¶ffentliche Repository enthÃ¤lt daher **nicht**:

- Anwendungs-Quellcode
- PHP-Backend-Code
- Server-Konfiguration
- Administrationscode der Schiffsdatenbank
- private Deployment-Dateien
- Zugangsdaten oder Secrets

## Fehler melden

Ã–ffne **Issues â†’ New issue â†’ Bug report**.

Bitte gib dabei mÃ¶glichst Folgendes an:

- Fleet-Commander-Version
- Browser und Browserversion
- Betriebssystem / GerÃ¤t
- Desktop, Tablet oder MobilgerÃ¤t
- Schritte zur Reproduktion
- erwartetes Ergebnis
- tatsÃ¤chliches Ergebnis
- Screenshot, falls hilfreich

Bitte niemals PasswÃ¶rter, private Session-Links oder andere sensible Informationen verÃ¶ffentlichen.

## Feature vorschlagen

Ã–ffne **Issues â†’ New issue â†’ Feature request**.

Bitte beschreibe zuerst das operative Problem und anschlieÃŸend deinen LÃ¶sungsvorschlag.

## Aktuelle Kernfunktionen

Fleet Commander umfasst derzeit unter anderem:

- Squadron- und Schiffsmanagement
- Spieler- / Crew-Register
- rollenbasierte Crew-Einteilung
- zentrale Schiffsdatenbank mit StationskapazitÃ¤ten
- taktische Fleet-Overview-Baumansicht
- Mission-Readiness-Kennzahlen
- Pilot Coverage und Open Stations
- erweiterbares JSON-Sprachpaket-System mit enthaltenem DE / EN / vereinfachtem Chinesisch
- AES-256-GCM-verschlÃ¼sselte Session-Freigabe
- kurze sichere Session-Links
- kompakter Discord-Flottenbriefing-Export mit Treeview-Hierarchie und lokalisierten Zeitstempeln
- responsive OberflÃ¤che fÃ¼r Desktop, Tablet und MobilgerÃ¤te

## Projektstatus

Fleet Commander befindet sich derzeit in der **Beta-Phase** und wird aktiv weiterentwickelt.

Siehe auch:

- [Ã–ffentlicher Changelog](https://gottschbert.github.io/Fleet-Commander-Support/changelog/)
- [Bekannte Probleme](KNOWN_ISSUES.md)
- [Support-Leitfaden](SUPPORT.md)
- [Community-Ãœbersetzungen](languages/README.de.md)

## Datenschutz & Datenspeicherung

Fleet Commander ist so aufgebaut, dass die serverseitige Verarbeitung von Flotten- und Crew-Daten mÃ¶glichst gering gehalten wird.

### Lokale Speicherung als Standard

Flottenplanungsdaten, die in Fleet Commander eingegeben werden â€” zum Beispiel Spieler- / Crew-Namen, Squadrons, Schiffszuweisungen, Rollen, Operationsstatus und Positionen â€” werden lokal im Browser des jeweiligen Benutzers Ã¼ber den Browser-Speicher abgelegt.

Bei normaler Nutzung wird dieser Flottenzustand **nicht automatisch in eine zentrale Fleet-Commander-Benutzerdatenbank hochgeladen oder dort dauerhaft gespeichert**.

Die lokal gespeicherten Daten bleiben unter Kontrolle des Benutzers und kÃ¶nnen Ã¼ber die Reset-Funktionen von Fleet Commander oder durch LÃ¶schen der Website-Daten im Browser entfernt werden.

### VerschlÃ¼sselte Session-Freigabe

Serverseitige Speicherung wird nur dann verwendet, wenn ein Benutzer ausdrÃ¼cklich eine **Save & Share**-Session erstellt.

Dabei gilt:

- der Flottenzustand wird bereits im Browser mit **AES-256-GCM** verschlÃ¼sselt, bevor er Ã¼bertragen wird
- auf dem Fleet-Commander-Server wird nur der verschlÃ¼sselte Session-Payload temporÃ¤r gespeichert
- der EntschlÃ¼sselungsschlÃ¼ssel verbleibt im URL-Fragment (`#key=...`) und ist nicht Bestandteil der Session-Daten, die vom Sharing-Endpunkt gespeichert werden
- freigegebene Sessions laufen nach der konfigurierten Aufbewahrungsdauer automatisch ab
- jeder, der den vollstÃ¤ndigen privaten Share-Link erhÃ¤lt, kann unter UmstÃ¤nden den freigegebenen Flottenzustand entschlÃ¼sseln; Share-Links mÃ¼ssen daher vertraulich behandelt werden

Fleet Commander benÃ¶tigt keine echten Namen. Wo sinnvoll, sollten Star-Citizen-Handles / Nicknames verwendet und unnÃ¶tige personenbezogene Angaben vermieden werden.

### Datenminimierung

Fleet Commander ist fÃ¼r die operative Flottenplanung gedacht und benÃ¶tigt keine:

- Postanschriften
- Telefonnummern
- Zahlungsinformationen
- amtlichen Identifikationsmerkmale
- PasswÃ¶rter
- besonderen Kategorien personenbezogener Daten

Es sollten nur Informationen eingegeben werden, die fÃ¼r die Organisation der jeweiligen Flottenoperation tatsÃ¤chlich erforderlich sind.

### Support und Bugreports

Ã–ffentliche GitHub-Issues sind fÃ¼r andere Benutzer sichtbar. Bitte dort nicht verÃ¶ffentlichen:

- PasswÃ¶rter
- Admin-Zugangsdaten
- private Fleet-Session-Links
- API-SchlÃ¼ssel
- personenbezogene Informationen, die fÃ¼r die Reproduktion eines Problems nicht erforderlich sind

Wenn einem Report ein Screenshot beigefÃ¼gt wird, sollte dieser vor der VerÃ¶ffentlichung auf persÃ¶nliche oder vertrauliche Informationen geprÃ¼ft werden.

### Wichtiger Datenschutzhinweis

Lokale Browser-Speicherung reduziert die unnÃ¶tige zentrale Sammlung von Flottendaten, macht die gesamte Website fÃ¼r sich genommen jedoch **nicht automatisch DSGVO-konform**. Website-Hosting, technische Server-Logs, externe Ressourcen und der optionale verschlÃ¼sselte Sharing-Dienst kÃ¶nnen weitere technische VerarbeitungsvorgÃ¤nge beinhalten, die durch die jeweils geltenden Datenschutzinformationen der Website abgedeckt werden mÃ¼ssen.

## Haftungsausschluss

Fleet Commander ist ein unabhÃ¤ngiges Community-Projekt und steht in keiner Verbindung zu Cloud Imperium Games oder Roberts Space Industries. Es wird von diesen Unternehmen weder unterstÃ¼tzt noch gesponsert oder offiziell empfohlen.

Star Citizen und damit verbundene Marken gehÃ¶ren den jeweiligen Rechteinhabern.
