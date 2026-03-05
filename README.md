# Pizzeria La Cometa - Refactor Sito Web Ufficiale

Repository ufficiale de **La Cometa**, una web application moderna e reattiva costruita per una pizzeria artigianale. Il sito permette agli utenti di consultare il menù dinamico, filtrare le pizze per categoria e visualizzare una galleria fotografica dei prodotti. 

Sito di partenza: http://www.pizzerialacometa.it/pagina_uno.shtml

## Funzionalità

- **Menù Dinamico:** Consultazione completa del listino con dati caricati da file JSON.
- **Sistema di Filtraggio:** Filtra istantaneamente le pizze (Tradizionali, Speciali, Blasco, ecc.) tramite categorie interattive.
- **Galleria Fotografica:** Visualizzazione dei prodotti con effetti hover moderni e overlay informativi.
- **Design Responsive:** Ottimizzato per smartphone, tablet e desktop.
- **Navigazione Fluida:** Utilizzo di React Router e Smooth Scroll per un'esperienza utente senza interruzioni.

## Tech Stack

Il progetto è stato sviluppato utilizzando le seguenti tecnologie:

- **[React.js](https://reactjs.org/):** Core framework per la gestione dei componenti e dello stato.
- **[Tailwind CSS](https://tailwindcss.com/):** Per un design moderno, pulito e altamente personalizzabile.
- **[React Router](https://reactrouter.com/):** Gestione della navigazione tra Home e Menu.
- **[React Icons](https://react-icons.github.io/react-icons/):** Per l'integrazione di icone social (Instagram, Facebook, TripAdvisor).
- **Vite:** Build tool ultra-veloce per lo sviluppo frontend.

## Installazione e Utilizzo

Per avviare il progetto in locale, segui questi passaggi:

1. **Clona il repository:**

   ```bash
   git clone https://github.com/onlymiki/LaCometa.git
   ```

2. **Entra nella cartella del progetto:**

   ```bash
   cd LaCometa

   ```

3. **Installa le dipendenze:**
   ```bash
   npm install
   # oppure yarn install
   ```
4. **Avvia il server di sviluppo:**

   ```bash
   npm run dev
   # oppure yarn dev
   ```

5. **Build per la produzione:**
   ```bash
   npm run build
   # oppure yarn build
   ```
   I file compilati verranno generati nella cartella `dist`.

## Struttura del progetto

- `src/`: codice sorgente React
  - `components/`: componenti riutilizzabili (Navbar, Card, Gallery, ecc.)
  - `pages/`: pagine principali (Home, Menu, AboutMe, Contacts)
  - `data/`: file JSON con l'elenco di pizze e bibite
  - `img/`: immagini utilizzate nell'interfaccia

## Utilizzo dell'AI

Durante lo sviluppo del progetto sono stati utilizzati strumenti di Intelligenza Artificiale integrati in Visual Studio Code come supporto al processo di sviluppo.

In particolare l'AI è stata utilizzata per:

1. Suggerimenti di codice
2. Supporto nel debugging
3. Esplorare possibili soluzioni alternative
4. Migliorare la leggibilità del codice

L'AI è stata utilizzata come strumento di supporto, mentre tutte le decisioni finali riguardanti struttura, implementazione e design sono state prese dall'autore (cioè me stessa).
