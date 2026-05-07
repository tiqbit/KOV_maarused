# KOV Avalike Ürituste Määrused - Projektijuhised

## Rakenduse eesmärk
Eesti kohalike omavalitsuste avalike ürituste määruste andmebaas ja protsesside visualiseerimine.

## Tehnilised reeglid
1. **Keel:** UI ja andmed on eesti keeles.
2. **UI:** React + Tailwind + shadcn/ui.
3. **Routing:** HashRouter asukohtadele `/` ja `/process/:id`.
4. **Diagrammid:** Mermaid.js. Skeemid on suurendatavad (zoom) ja muudetavad (localStorage'is).
5. **Andmed:** `src/data.ts` on peamine andmeallikas (KOVRegulation liides).

## Protsessi kirjelduse struktuur
- `role`: Osapool (korraldaja, ametnik, vallavalitsus jne).
- `action`: Konkreetne tegevus või otsustuskoht.
- `mermaid`: graph TD formaat (täpsemalt Flowchart TD).

## Salvestamine
Skeemi muudatused Detailvaates salvestatakse `localStorage`-isse võtmega `mermaid_override_${id}`.
