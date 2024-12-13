# vue_fish

This template should help get you started developing with Vue 3 in Vite.


## Beskrivning
Det här projektet är en enkel Vue.js-applikation skapad som en del av kursen *Fullstack-utveckling med ramverk*. Applikationen är byggd med Vue.js och innehåller funktionalitet för att demonstrera Vue-router, props, emits, reaktiv data och tvåvägsbindning.

Projektet fokuserar på att lära och använda grunderna i Vue.js för att skapa en single-page application (SPA) med responsiv design.

---

## Funktioner

- **Startsida**:
  - Huvudmeny med navigering.
  - En banner och kort introduktion till mitt fritidsintresse.

- **Fiskar-sidan**:
  - Hämta fiskdata från en extern webbtjänst (API) från förra momentet.
  - Visar fiskar i en lista.
  - Funktion att lägga till nya fiskar med ett formulär.
  - Ta bort fiskar från listan.
  - Visa detaljer om en vald fisk i en separat vy (props och emits).

- **Info-sida**:
  - Om att arbeta med Vue.js.
  - Vad som gått bra och vad som varit utmanande.

---

## Tekniker som används
- Vue.js (version 3)
- Vite, en snabb byggmiljö och utvecklingsserver som används för att skapa Vue-projekt.
- Vue Router för navigering mellan sidor.
- Fetch API för att hämta och manipulera data från ett API.
- Scoped CSS för komponent-specifik styling.
- Props och Emits för kommunikation mellan komponenter.
- Reaktiv data och tvåvägsbindning (v-model).

---

## Installation och körning
### Förutsättningar
- Node.js installerat på din dator.
- npm som paketmanager.

### Steg för att köra projektet lokalt
1. Klona repot till din dator:
  
   git clone https://github.com/[ditt-användarnamn]/[repository-namn].git

2. Gå in i projektmappen
    cd vue_fish

3. Installera alla beroenden
    npm install

4. Starta servern
    npm run dev

5. Öppna localhost:5173