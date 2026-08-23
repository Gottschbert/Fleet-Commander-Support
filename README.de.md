# Fleet Commander Support

Offizielles öffentliches Support-, Bugreport- und Feature-Request-Repository für **Fleet Commander**.

🌐 Sprache: [English](README.md) | **Deutsch**

> Website: **https://www.fleet-commander.net/**  
> Aktuelle öffentliche Version: **0.10.42-beta**  
> Changelog: https://gottschbert.github.io/Fleet-Commander-Support/changelog/  
> Quellcode: **Privat / Closed Source**

## Wofür dieses Repository gedacht ist

Dieses Repository ist die öffentliche Anlaufstelle für die Kommunikation rund um Fleet Commander.

Du kannst es verwenden, um:

- Fehler zu melden
- neue Funktionen vorzuschlagen
- Usability-Probleme zu melden
- bekannte Probleme nachzusehen
- öffentliche Release Notes zu lesen
- grundlegende Support-Informationen zu finden

## Wofür dieses Repository NICHT gedacht ist

Der Fleet-Commander-Quellcode wird in einem separaten privaten Repository entwickelt.

Dieses öffentliche Repository enthält daher **nicht**:

- Anwendungs-Quellcode
- PHP-Backend-Code
- Server-Konfiguration
- Administrationscode der Schiffsdatenbank
- private Deployment-Dateien
- Zugangsdaten oder Secrets

## Fehler melden

Öffne **Issues → New issue → Bug report**.

Bitte gib dabei möglichst Folgendes an:

- Fleet-Commander-Version
- Browser und Browserversion
- Betriebssystem / Gerät
- Desktop, Tablet oder Mobilgerät
- Schritte zur Reproduktion
- erwartetes Ergebnis
- tatsächliches Ergebnis
- Screenshot, falls hilfreich

Bitte niemals Passwörter, private Session-Links oder andere sensible Informationen veröffentlichen.

## Feature vorschlagen

Öffne **Issues → New issue → Feature request**.

Bitte beschreibe zuerst das operative Problem und anschließend deinen Lösungsvorschlag.

## Aktuelle Kernfunktionen

Fleet Commander umfasst derzeit unter anderem:

- Squadron- und Schiffsmanagement
- Spieler- / Crew-Register
- rollenbasierte Crew-Einteilung
- zentrale Schiffsdatenbank mit Stationskapazitäten
- taktische Fleet-Overview-Baumansicht
- Mission-Readiness-Kennzahlen
- Pilot Coverage und Open Stations
- erweiterbares JSON-Sprachpaket-System mit enthaltenem DE / EN
- AES-256-GCM-verschlüsselte Session-Freigabe
- kurze sichere Session-Links
- kompakter Discord-Flottenbriefing-Export mit Treeview-Hierarchie und lokalisierten Zeitstempeln
- responsive Oberfläche für Desktop, Tablet und Mobilgeräte

## Projektstatus

Fleet Commander befindet sich derzeit in der **Beta-Phase** und wird aktiv weiterentwickelt.

Siehe auch:

- [Öffentlicher Changelog](https://gottschbert.github.io/Fleet-Commander-Support/changelog/)
- [Bekannte Probleme](KNOWN_ISSUES.md)
- [Support-Leitfaden](SUPPORT.md)

## Datenschutz & Datenspeicherung

Fleet Commander ist so aufgebaut, dass die serverseitige Verarbeitung von Flotten- und Crew-Daten möglichst gering gehalten wird.

### Lokale Speicherung als Standard

Flottenplanungsdaten, die in Fleet Commander eingegeben werden — zum Beispiel Spieler- / Crew-Namen, Squadrons, Schiffszuweisungen, Rollen, Operationsstatus und Positionen — werden lokal im Browser des jeweiligen Benutzers über den Browser-Speicher abgelegt.

Bei normaler Nutzung wird dieser Flottenzustand **nicht automatisch in eine zentrale Fleet-Commander-Benutzerdatenbank hochgeladen oder dort dauerhaft gespeichert**.

Die lokal gespeicherten Daten bleiben unter Kontrolle des Benutzers und können über die Reset-Funktionen von Fleet Commander oder durch Löschen der Website-Daten im Browser entfernt werden.

### Verschlüsselte Session-Freigabe

Serverseitige Speicherung wird nur dann verwendet, wenn ein Benutzer ausdrücklich eine **Save & Share**-Session erstellt.

Dabei gilt:

- der Flottenzustand wird bereits im Browser mit **AES-256-GCM** verschlüsselt, bevor er übertragen wird
- auf dem Fleet-Commander-Server wird nur der verschlüsselte Session-Payload temporär gespeichert
- der Entschlüsselungsschlüssel verbleibt im URL-Fragment (`#key=...`) und ist nicht Bestandteil der Session-Daten, die vom Sharing-Endpunkt gespeichert werden
- freigegebene Sessions laufen nach der konfigurierten Aufbewahrungsdauer automatisch ab
- jeder, der den vollständigen privaten Share-Link erhält, kann unter Umständen den freigegebenen Flottenzustand entschlüsseln; Share-Links müssen daher vertraulich behandelt werden

Fleet Commander benötigt keine echten Namen. Wo sinnvoll, sollten Star-Citizen-Handles / Nicknames verwendet und unnötige personenbezogene Angaben vermieden werden.

### Datenminimierung

Fleet Commander ist für die operative Flottenplanung gedacht und benötigt keine:

- Postanschriften
- Telefonnummern
- Zahlungsinformationen
- amtlichen Identifikationsmerkmale
- Passwörter
- besonderen Kategorien personenbezogener Daten

Es sollten nur Informationen eingegeben werden, die für die Organisation der jeweiligen Flottenoperation tatsächlich erforderlich sind.

### Support und Bugreports

Öffentliche GitHub-Issues sind für andere Benutzer sichtbar. Bitte dort nicht veröffentlichen:

- Passwörter
- Admin-Zugangsdaten
- private Fleet-Session-Links
- API-Schlüssel
- personenbezogene Informationen, die für die Reproduktion eines Problems nicht erforderlich sind

Wenn einem Report ein Screenshot beigefügt wird, sollte dieser vor der Veröffentlichung auf persönliche oder vertrauliche Informationen geprüft werden.

### Wichtiger Datenschutzhinweis

Lokale Browser-Speicherung reduziert die unnötige zentrale Sammlung von Flottendaten, macht die gesamte Website für sich genommen jedoch **nicht automatisch DSGVO-konform**. Website-Hosting, technische Server-Logs, externe Ressourcen und der optionale verschlüsselte Sharing-Dienst können weitere technische Verarbeitungsvorgänge beinhalten, die durch die jeweils geltenden Datenschutzinformationen der Website abgedeckt werden müssen.

## Haftungsausschluss

Fleet Commander ist ein unabhängiges Community-Projekt und steht in keiner Verbindung zu Cloud Imperium Games oder Roberts Space Industries. Es wird von diesen Unternehmen weder unterstützt noch gesponsert oder offiziell empfohlen.

Star Citizen und damit verbundene Marken gehören den jeweiligen Rechteinhabern.
