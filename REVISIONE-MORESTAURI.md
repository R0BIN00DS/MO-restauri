# Piano di revisione — M.O Restauri

Modifiche derivate da una verifica del sito applicando i criteri di CHECKLIST-QUALITA-SITI.md.
Eseguire **una fase alla volta**, in ordine. Al termine di ogni fase: fermarsi, elencare i file modificati, attendere conferma prima di procedere.

## Regole generali

- Non rifattorizzare la struttura, non rinominare file, non riorganizzare cartelle.
- Colori e spaziature passano dalle CSS custom properties già presenti; se non esistono, crearle in `:root`.
- Ogni modifica testuale va applicata **sia in IT sia in EN**.
- Nessuna dipendenza esterna nuova, salvo l'eventuale servizio di invio form (vedi Fase 3).
- Verificare il risultato nel browser prima di proporre i valori, non procedere per tentativi.
- Verifiche di riferimento: **1440x900** e **390x844**.

---

## FASE 1 — Bug di rendering (priorità massima)

### 1.1 Testo sdoppiato nel titolo "Perché scegliere M.O Restauri"

Il titolo mostra un effetto di doppia immagine, come due livelli di testo leggermente sfalsati. Probabile ombra, pseudo-elemento o outline duplicato mal posizionato.

- Individuare la causa (text-shadow, ::before/::after duplicato, o doppio elemento nel markup) e rimuoverla.
- Verificare che lo stesso pattern non sia riprodotto altrove nel sito (altri titoli con lo stesso trattamento).

### 1.2 Navbar che copre i titoli delle sezioni allo scroll

Cliccando le ancore del menu, il titolo della sezione di destinazione finisce parzialmente nascosto sotto la navbar fissa (visibile su "Come lavoriamo", "Servizi", "Contatti").

- Aggiungere `scroll-margin-top` a tutte le sezioni con id-ancora, pari all'altezza reale della navbar.
- Verificare `scroll-behavior: smooth` su `html`.
- Controllare ogni voce di menu, non solo le prime.

---

## FASE 2 — Contrasto testo su immagine

Nella sezione "Progettazione & Architettura", il testo bianco sulla porzione chiara della foto (pareti azzurre, cielo) è poco leggibile.

- Applicare un overlay scuro uniforme dietro il blocco di testo, o un gradiente che si concentri sulla zona dove cade il testo.
- Contrasto WCAG AA (≥ 4.5:1) verificato sul punto più chiaro dello sfondo.
- Controllare le altre sezioni con testo su foto (hero, "Sopralluogo gratuito") con lo stesso criterio.

---

## FASE 3 — Ristrutturazione del flusso contatti

### 3.1 Form della hero

Resta con gli stessi campi (nome e cognome, telefono, email, servizio richiesto, messaggio). Cambia solo il comportamento al submit, allineandolo al punto 3.3: invece del solo `mailto:` attuale, alla pressione di "Invia richiesta" presentare la stessa scelta tra due canali — **WhatsApp** e **Email** — usata nella nuova pagina Contatti.

### 3.2 Rimuovere il form duplicato dalla home

Il secondo form, oggi presente in fondo alla home nella sezione Contatti (stessi campi del form hero: nome, telefono, email, servizio, messaggio), va **rimosso da lì**.

### 3.3 Nuova pagina Contatti dedicata

Creare `contatti.html`. Contiene:

- Le informazioni di contatto già presenti in footer (sede, telefono, WhatsApp, email, mappa)
- **Lo stesso form** rimosso dalla home (identici campi: nome e cognome, telefono, email, servizio richiesto, messaggio), spostato qui

Comportamento al submit — sostituire il singolo `mailto:` con una **scelta tra due canali**:

- Alla pressione di "Invia richiesta" (o pulsante equivalente), presentare due opzioni:
  1. **Invia su WhatsApp** — apre `wa.me` con i valori compilati nel form inseriti in un messaggio precompilato, sullo stesso pattern già in uso su NastyGroup.
  2. **Invia via email** — apre `mailto:` verso l'indirizzo aziendale con i valori del form nell'oggetto/corpo del messaggio, come funziona oggi.
- Implementazione: due pulsanti visibili insieme sotto il form (non un submit unico che decide da solo), così l'utente sceglie il canale che preferisce dopo aver compilato una volta sola i campi.

### 3.4 Aggiornare i link

- Tutte le CTA del sito che oggi puntano al form in fondo alla home (bottone "Richiedi info" in navbar, CTA nelle sezioni Come lavoriamo / Servizi / Perché scegliere M.O Restauri, link "Contatti" in footer) devono puntare a `contatti.html`.
- Il form della hero adotta lo stesso meccanismo di scelta WhatsApp/Email descritto al punto 3.3, ma resta fisicamente nella hero: non va spostato né rimosso.
- Verificare ogni punto del sito che oggi punta a `#contatti` nella home e reindirizzarlo alla nuova pagina.

### 3.4 Email aziendale

- Se disponibile un indirizzo sul dominio proprio (es. `info@mo-restauri.it`), sostituirlo a `restaurisrl@hotmail.com` in tutte le occorrenze (footer, sezione contatti, meta, mailto). Se non disponibile, lasciare l'attuale e segnalarlo come azione futura.

---

## FASE 4 — Layout del form: campo Telefono tagliato

Nel form della hero, il campo "Telefono" esce dal bordo destro della card: probabilmente è affiancato a "Nome e cognome" in una griglia a due colonne che non si adatta bene a questa larghezza.

- Verificare la larghezza della card del form rispetto ai due campi affiancati a questa risoluzione.
- Se il problema è strutturale a questa larghezza, mettere Nome e cognome e Telefono ciascuno su una riga propria, a piena larghezza della card (come già sono Email, Servizio richiesto e Messaggio).
- Verificare che lo stesso problema non si presenti nel form duplicato in fondo alla home (rimosso al punto 3.2) né, una volta creato, nel form della pagina Contatti.
- Controllare anche a 1440x900, 1280x800 e su mobile 390x844.

---

## FASE 5 — Trattini lunghi e refusi

- Rimuovere gli em dash da: `<title>`, indirizzo in footer e sezione contatti (`Via di Novoli 7 — Firenze`), copyright.
- Correggere il refuso "Richiedi un sopralluogogratuito e senza impegno" (manca lo spazio) nella card CTA di "Perché scegliere M.O Restauri".
- Verificare l'intero sito, IT ed EN, per altre occorrenze non ancora individuate.

---

## FASE 6 — Contenuti duplicati e ridondanti

- La frase "Un partner serio e affidabile: standard sempre alti..." compare due volte in punti diversi della pagina, quasi identica. Riformulare una delle due occorrenze o rimuoverne una.
- "Ristrutturazioni chiavi in mano" e "Manutenzioni e ristrutturazioni" tra i servizi si sovrappongono concettualmente. Valutare se distinguerle meglio nel testo o accorparle.

---

## FASE 7 — Open Graph e SEO tecnica

- `og:image` e `og:url` usano percorsi relativi (`images/hero.jpg`, `/`). Sostituire con URL assoluti (`https://mo-restauri.vercel.app/images/hero.jpg`, `https://mo-restauri.vercel.app/`), così le anteprime funzionano quando il link viene condiviso su WhatsApp o social.
- Aggiungere dati strutturati **LocalBusiness** (schema.org) con nome, indirizzo, telefono, orari e area servita, per la ricerca locale.

---

## FASE 8 — Immagini

- Le immagini stock Unsplash (villa moderna, skyline di Firenze, lastra di marmo) sono caricate in hotlink dal dominio Unsplash. Scaricarle, convertirle in WebP, e servirle dal sito con `loading="lazy"` oltre la prima schermata.
- Valutare la sostituzione delle immagini più genericamente stock con foto reali dei cantieri, dove disponibili: per un'impresa edile sono l'argomento di vendita più forte.
- Verificare il peso del video nella hero (`videos/hero.mp4`): se supera pochi MB, considerare una versione compressa o un poster statico con caricamento del video solo dopo l'interazione.

---

## FASE 9 (opzionale) — Recensioni

Le tre recensioni (Marco B., Giulia F., Alessandro T.) non hanno foto né iniziali. Se si vuole seguire lo stesso trattamento di Lungarno Estate: avatar con iniziali su fondo colore brand.

---

## Checklist finale

- [ ] Testo sdoppiato nel titolo risolto
- [ ] Nessun titolo di sezione nascosto dalla navbar allo scroll
- [ ] Contrasto testo su foto verificato in tutte le sezioni
- [ ] Form duplicato rimosso dalla home
- [ ] Pagina Contatti dedicata creata, form spostato lì con scelta WhatsApp/email al submit
- [ ] Form hero: stessi campi, submit ora offre scelta WhatsApp/Email
- [ ] Tutti i link "Contatti" aggiornati salvo il form hero
- [ ] Campo Telefono non più tagliato, verificato su tutte le risoluzioni
- [ ] Nessun trattino lungo residuo
- [ ] Refuso "sopralluogogratuito" corretto
- [ ] Nessuna frase duplicata
- [ ] Open Graph con URL assoluti, anteprima verificata condividendo il link
- [ ] Dati strutturati LocalBusiness presenti
- [ ] Immagini Unsplash scaricate e servite localmente in WebP
- [ ] Test su 1440x900 e 390x844, IT ed EN
