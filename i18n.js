/* ============================================================
   M.O Restauri — Dizionario testi statici IT/EN
   Stesso motore i18n usato in lungarno-estate-demo/properties-data.js,
   adattato a questo sito (chiave localStorage diversa, in più il
   supporto per data-i18n-aria-label e data-i18n-title).
   ============================================================ */
const I18N = {
  it: {
    'nav.process': 'Come lavoriamo',
    'nav.services': 'Servizi edili',
    'nav.contact': 'Contatti',
    'nav.cta': 'Richiedi info',
    'nav.cta_mobile': 'Richiesta sopralluogo',
    'nav.call': 'Chiamaci',
    'nav.whatsapp_aria': 'Scrivici su WhatsApp',
    'nav.burger_aria': 'Apri menu',

    'hero.eyebrow': 'Impresa edile · Firenze e provincia',
    'hero.title.part1': 'Dalla progettazione alla consegna, il tuo ',
    'hero.title.em': 'partner ideale',
    'hero.title.part2': ' per costruire e ristrutturare',
    'hero.lead': "Realizzazione, ristrutturazione e manutenzione di edifici civili e industriali. Seguiamo ogni progetto dal primo sopralluogo alla consegna finale, garantendo qualità, sicurezza e rispetto dei tempi.",
    'hero.cta.services': 'Scopri i servizi',

    'form.title': 'Richiedi un sopralluogo gratuito',
    'form.subtitle': 'Ti rispondiamo entro 48 ore con la prima disponibilità.',
    'form.name': 'Nome e cognome',
    'form.name.placeholder': 'Mario Rossi',
    'form.phone': 'Telefono',
    'form.phone.placeholder': '+39 3xx xxx xxxx',
    'form.email': 'Email',
    'form.email.placeholder': 'tuamail@esempio.it',
    'form.service': 'Servizio richiesto',
    'form.service.opt1': 'Ristrutturazione chiavi in mano',
    'form.service.opt2': 'Nuova costruzione',
    'form.service.opt3': 'Manutenzione',
    'form.service.opt4': 'Impianti',
    'form.service.opt5': 'Finiture / Pavimenti / Cartongesso',
    'form.service.opt6': 'Altro',
    'form.message': 'Messaggio',
    'form.message.placeholder': 'Raccontaci il tuo progetto...',
    'form.submit': 'Invia richiesta',
    'form.note.pre': 'Ti risponderemo entro 48 ore. I tuoi dati sono trattati secondo la nostra',
    'form.note.link': 'Privacy Policy',
    'form.success': "Si aprirà il tuo programma di posta: invia il messaggio per completare la richiesta.",

    'process.title': 'Come lavoriamo',
    'process.subtitle': "Un percorso chiaro in quattro fasi, con un solo interlocutore dall'inizio alla fine.",
    'process.1.title': 'Sopralluogo gratuito',
    'process.1.desc': "Analizziamo lo stato dell'immobile e le tue esigenze, senza impegno e senza costi.",
    'process.1.spec1': 'Fissato entro 48 ore',
    'process.1.spec2': 'Nessun costo o obbligo',
    'process.1.spec3': 'Report fotografico incluso',
    'process.2.title': 'Progetto e preventivo',
    'process.2.desc': 'Definiamo lavorazioni, materiali, tempi e costi in un preventivo dettagliato e trasparente.',
    'process.2.spec1': 'Preventivo voce per voce',
    'process.2.spec2': 'Tempistiche chiare',
    'process.2.spec3': 'Materiali e finiture proposti',
    'process.3.title': 'Cantiere',
    'process.3.desc': 'Squadra qualificata, aggiornamenti costanti e rispetto della sicurezza in ogni fase.',
    'process.3.spec1': 'Squadra qualificata e assicurata',
    'process.3.spec2': 'Aggiornamenti settimanali',
    'process.3.spec3': 'Sicurezza a norma',
    'process.4.title': 'Consegna chiavi in mano',
    'process.4.desc': 'Verifica finale e consegna nei tempi concordati: la tua casa, pronta da vivere.',
    'process.4.spec1': 'Verifica finale con te',
    'process.4.spec2': 'Pulizia post-cantiere inclusa',
    'process.4.spec3': 'Garanzia sui lavori',

    'services.title': 'Servizi edili a Firenze: costruzioni e ristrutturazioni',
    'services.subtitle': 'Dalla nuova costruzione alla rifinitura più piccola, gestiamo ogni fase del cantiere con un unico interlocutore.',
    'services.1.title': 'Ristrutturazioni chiavi in mano',
    'services.1.desc': "Gestiamo l'intero progetto, dalla demolizione alla consegna finale, senza pensieri per te.",
    'services.2.title': 'Nuove costruzioni',
    'services.2.desc': 'Edifici civili e industriali realizzati dalle fondamenta alla consegna chiavi in mano.',
    'services.3.title': 'Manutenzioni e ristrutturazioni',
    'services.3.desc': 'Interventi mirati per mantenere e rinnovare edifici esistenti nel tempo.',
    'services.4.title': 'Installazione impianti',
    'services.4.desc': 'Impianti elettrici, idraulici e di climatizzazione a norma e certificati.',
    'services.5.title': 'Finiture edili',
    'services.5.desc': 'Rifiniture curate nei minimi dettagli per un risultato impeccabile.',
    'services.6.title': 'Imbiancatura',
    'services.6.desc': 'Tinteggiature interne ed esterne con prodotti di qualità e finiture durature.',
    'services.7.title': 'Cartongesso',
    'services.7.desc': 'Controsoffitti, pareti divisorie e soluzioni su misura in cartongesso.',
    'services.8.title': 'Pavimenti e Parquet',
    'services.8.desc': 'Posa di pavimenti e parquet di pregio, per interni residenziali e commerciali.',

    'roomtour.title': 'Tour degli interni',
    'roomtour.subtitle': 'Ogni ambiente della casa, raccontato con la stessa cura nei dettagli.',
    'roomtour.aria': 'Tour degli interni',
    'roomtour.room1': 'Soggiorno',
    'roomtour.room2': 'Cucina',
    'roomtour.room3': 'Camera da letto',
    'roomtour.room4': 'Bagno',

    'split.eyebrow': 'Servizio su misura',
    'split.heading': 'Sopralluogo gratuito. Ci occupiamo di tutto il processo per te',
    'split.body': "Dal primo incontro alla consegna delle chiavi: il nostro team ti guida su cosa serve, quali lavorazioni prevedere e in che ordine intervenire, per un cantiere senza sorprese.",
    'split.caption': 'Finiture e interni curati nel dettaglio',
    'split.check1': 'Preventivo chiaro e rapido',
    'split.check2': 'Materiali di alta qualità',
    'split.check3': 'Rispetto dei tempi',
    'split.check4': 'Squadra qualificata',

    'fullbleed.eyebrow': 'Progettazione & architettura',
    'fullbleed.title': 'Attenzione ai dettagli architettonici, dal progetto alla rifinitura',
    'fullbleed.body': "Ti accompagniamo in ogni fase: progettazione, costruzione, posa di pavimenti, serramenti, impianti e rifiniture, con tecniche all'avanguardia e materiali durevoli nel tempo.",

    'band.eyebrow': 'Cosa facciamo',
    'band.tag1': 'Costruzioni',
    'band.tag2': 'Ristrutturazioni',
    'band.tag3': 'Manutenzioni',
    'band.tag4': 'Impianti',
    'band.tag5': 'Finiture',
    'band.tag6': 'Pavimenti & Parquet',
    'band.tag7': 'Cartongesso',
    'band.tag8': 'Imbiancature',
    'band.quote': "Un partner serio e affidabile: standard sempre alti, tecniche all'avanguardia e materiali di prima qualità per risultati eccellenti e duraturi.",

    'stats.title': 'Perché scegliere M.O Restauri',
    'stats.subtitle': 'Quattro buoni motivi per affidarti a noi, dal primo sopralluogo alla consegna.',
    'stats.1.title': 'Esperienza e competenza',
    'stats.1.desc': 'Squadra qualificata',
    'stats.2.title': 'Firenze e provincia',
    'stats.2.desc': 'Privati e aziende',
    'stats.3.title': 'Progettazione → consegna',
    'stats.3.desc': 'Un solo interlocutore',
    'stats.4.title': 'Materiali di alta qualità',
    'stats.4.desc': "Tecniche all'avanguardia",
    'stats.cta.label': 'Richiedi un sopralluogo',
    'stats.cta.sub': 'gratuito e senza impegno',

    'reviews.1.text': '"Ristrutturazione completa dell\'appartamento gestita in ogni fase senza sorprese. Tempi rispettati e finiture di qualità."',
    'reviews.2.text': '"Squadra seria e disponibile dal primo sopralluogo. Preventivo chiaro e nessun costo nascosto lungo il cantiere."',
    'reviews.3.text': '"Ottimo rapporto qualità-prezzo, materiali validi e comunicazione costante durante tutti i lavori."',

    'contact.eyebrow': 'Contatti',
    'contact.title': 'Vuoi trasformare la tua casa?',
    'contact.lead': 'Contattaci per un sopralluogo gratuito e un preventivo su misura per il tuo progetto a Firenze e provincia.',
    'contact.note': 'Un partner serio e affidabile: standard sempre alti e tecniche all\'avanguardia, dal primo sopralluogo alla consegna delle chiavi.',
    'contact.label.address': 'Sede',
    'contact.label.phone': 'Telefono',
    'contact.label.whatsapp': 'WhatsApp',
    'contact.label.email': 'Email',
    'contact.map.title': 'Sede M.O Restauri su Google Maps',

    'footer.about': 'Impresa edile a Firenze specializzata in costruzioni, ristrutturazioni e manutenzioni per privati e aziende.',
    'footer.services.heading': 'Servizi',
    'footer.services.1': 'Ristrutturazioni',
    'footer.services.2': 'Nuove costruzioni',
    'footer.services.3': 'Impianti',
    'footer.services.4': 'Pavimenti & Parquet',
    'footer.company.heading': 'Azienda',
    'footer.contact.heading': 'Contatti',
    'footer.rights': 'Tutti i diritti riservati.',

    '404.title': 'Pagina non trovata',
    '404.body': "La pagina che cerchi non esiste o è stata spostata.",
    '404.cta': 'Torna alla home',
  },
  en: {
    'nav.process': 'How we work',
    'nav.services': 'Building services',
    'nav.contact': 'Contact',
    'nav.cta': 'Get in touch',
    'nav.cta_mobile': 'Request a site visit',
    'nav.call': 'Call us',
    'nav.whatsapp_aria': 'Message us on WhatsApp',
    'nav.burger_aria': 'Open menu',

    'hero.eyebrow': 'Building contractor · Florence and surrounding area',
    'hero.title.part1': 'From design to handover, your ',
    'hero.title.em': 'ideal partner',
    'hero.title.part2': ' for building and renovating',
    'hero.lead': "New builds, renovations and maintenance for residential and commercial properties. We follow every project from the first site visit to final handover, ensuring quality, safety and on-time delivery.",
    'hero.cta.services': 'Discover our services',

    'form.title': 'Request a free site visit',
    'form.subtitle': "We'll get back to you within 48 hours with our first availability.",
    'form.name': 'Full name',
    'form.name.placeholder': 'John Smith',
    'form.phone': 'Phone',
    'form.phone.placeholder': '+39 3xx xxx xxxx',
    'form.email': 'Email',
    'form.email.placeholder': 'youremail@example.com',
    'form.service': 'Service needed',
    'form.service.opt1': 'Turnkey renovation',
    'form.service.opt2': 'New construction',
    'form.service.opt3': 'Maintenance',
    'form.service.opt4': 'Systems & installations',
    'form.service.opt5': 'Finishes / Flooring / Drywall',
    'form.service.opt6': 'Other',
    'form.message': 'Message',
    'form.message.placeholder': 'Tell us about your project...',
    'form.submit': 'Send request',
    'form.note.pre': "We'll reply within 48 hours. Your data is handled according to our",
    'form.note.link': 'Privacy Policy',
    'form.success': "Your email app will open: send the message to complete your request.",

    'process.title': 'How we work',
    'process.subtitle': 'A clear four-step process, with a single point of contact from start to finish.',
    'process.1.title': 'Free site visit',
    'process.1.desc': 'We assess the property and your needs, with no obligation and no cost.',
    'process.1.spec1': 'Scheduled within 48 hours',
    'process.1.spec2': 'No cost or obligation',
    'process.1.spec3': 'Photo report included',
    'process.2.title': 'Design and quote',
    'process.2.desc': 'We define the work, materials, timeline and costs in a detailed, transparent quote.',
    'process.2.spec1': 'Itemized quote',
    'process.2.spec2': 'Clear timelines',
    'process.2.spec3': 'Materials and finishes proposed',
    'process.3.title': 'On site',
    'process.3.desc': 'A qualified crew, regular updates and full safety compliance at every stage.',
    'process.3.spec1': 'Qualified, insured crew',
    'process.3.spec2': 'Weekly updates',
    'process.3.spec3': 'Compliant site safety',
    'process.4.title': 'Turnkey handover',
    'process.4.desc': 'Final inspection and handover on the agreed schedule: your home, ready to live in.',
    'process.4.spec1': 'Final walkthrough with you',
    'process.4.spec2': 'Post-work cleaning included',
    'process.4.spec3': 'Warranty on all work',

    'services.title': 'Building services in Florence: construction and renovation',
    'services.subtitle': 'From new construction to the smallest finishing touch, we manage every stage of the site with a single point of contact.',
    'services.1.title': 'Turnkey renovations',
    'services.1.desc': 'We manage the entire project, from demolition to final handover, with nothing for you to worry about.',
    'services.2.title': 'New construction',
    'services.2.desc': 'Residential and commercial buildings, built from the foundations to turnkey handover.',
    'services.3.title': 'Maintenance and renovation',
    'services.3.desc': 'Targeted work to maintain and refresh existing buildings over time.',
    'services.4.title': 'Systems installation',
    'services.4.desc': 'Certified, code-compliant electrical, plumbing and HVAC systems.',
    'services.5.title': 'Building finishes',
    'services.5.desc': 'Finishes curated down to the smallest detail, for a flawless result.',
    'services.6.title': 'Painting',
    'services.6.desc': 'Interior and exterior painting with quality products and long-lasting finishes.',
    'services.7.title': 'Drywall',
    'services.7.desc': 'Suspended ceilings, partition walls and bespoke drywall solutions.',
    'services.8.title': 'Flooring and Parquet',
    'services.8.desc': 'Installation of fine flooring and parquet, for residential and commercial interiors.',

    'roomtour.title': 'Interior tour',
    'roomtour.subtitle': 'Every room in the house, told with the same care for detail.',
    'roomtour.aria': 'Interior tour',
    'roomtour.room1': 'Living room',
    'roomtour.room2': 'Kitchen',
    'roomtour.room3': 'Bedroom',
    'roomtour.room4': 'Bathroom',

    'split.eyebrow': 'Tailored service',
    'split.heading': 'A free site visit. We take care of the whole process for you',
    'split.body': "From the first meeting to handing over the keys: our team guides you on what's needed, which work to plan and in what order, for a site with no surprises.",
    'split.caption': 'Finishes and interiors curated down to the detail',
    'split.check1': 'Clear, fast quotes',
    'split.check2': 'High-quality materials',
    'split.check3': 'On-time delivery',
    'split.check4': 'Qualified crew',

    'fullbleed.eyebrow': 'Design & architecture',
    'fullbleed.title': 'Attention to architectural detail, from design to finishing',
    'fullbleed.body': "We support you at every stage: design, construction, flooring, windows and doors, systems and finishes, with cutting-edge techniques and materials built to last.",

    'band.eyebrow': 'What we do',
    'band.tag1': 'Construction',
    'band.tag2': 'Renovations',
    'band.tag3': 'Maintenance',
    'band.tag4': 'Systems',
    'band.tag5': 'Finishes',
    'band.tag6': 'Flooring & Parquet',
    'band.tag7': 'Drywall',
    'band.tag8': 'Painting',
    'band.quote': "A serious, reliable partner: consistently high standards, cutting-edge techniques and top-quality materials for excellent, lasting results.",

    'stats.title': 'Why choose M.O Restauri',
    'stats.subtitle': 'Four good reasons to trust us, from the first site visit to handover.',
    'stats.1.title': 'Experience and expertise',
    'stats.1.desc': 'Qualified crew',
    'stats.2.title': 'Florence and surrounding area',
    'stats.2.desc': 'Private clients and businesses',
    'stats.3.title': 'Design → handover',
    'stats.3.desc': 'A single point of contact',
    'stats.4.title': 'High-quality materials',
    'stats.4.desc': 'Cutting-edge techniques',
    'stats.cta.label': 'Request a site visit',
    'stats.cta.sub': 'free, no obligation',

    'reviews.1.text': '"The full apartment renovation was managed at every stage with no surprises. On-time delivery and quality finishes."',
    'reviews.2.text': '"A reliable, responsive crew from the first site visit. Clear quote and no hidden costs during the works."',
    'reviews.3.text': '"Excellent value for money, solid materials and steady communication throughout the works."',

    'contact.eyebrow': 'Contact',
    'contact.title': 'Want to transform your home?',
    'contact.lead': 'Get in touch for a free site visit and a tailored quote for your project in Florence and the surrounding area.',
    'contact.note': 'A serious, reliable partner: consistently high standards and cutting-edge techniques, from the first site visit to handing over the keys.',
    'contact.label.address': 'Office',
    'contact.label.phone': 'Phone',
    'contact.label.whatsapp': 'WhatsApp',
    'contact.label.email': 'Email',
    'contact.map.title': "M.O Restauri's office on Google Maps",

    'footer.about': 'Building contractor in Florence specializing in construction, renovation and maintenance for private clients and businesses.',
    'footer.services.heading': 'Services',
    'footer.services.1': 'Renovations',
    'footer.services.2': 'New construction',
    'footer.services.3': 'Systems & installations',
    'footer.services.4': 'Flooring & Parquet',
    'footer.company.heading': 'Company',
    'footer.contact.heading': 'Contact',
    'footer.rights': 'All rights reserved.',

    '404.title': 'Page not found',
    '404.body': "The page you're looking for doesn't exist or has been moved.",
    '404.cta': 'Back to homepage',
  },
};

/* ============================================================
   Motore i18n condiviso: applica I18N[lang] a [data-i18n] /
   [data-i18n-placeholder] / [data-i18n-aria-label] / [data-i18n-title],
   salva la preferenza, aggiorna gli switch di lingua nell'header.
   ============================================================ */
function getLang() {
  return localStorage.getItem('mo-restauri-lang') || 'it';
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('mo-restauri-lang', lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (I18N[lang][key] !== undefined) el.textContent = I18N[lang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (I18N[lang][key] !== undefined) el.setAttribute('placeholder', I18N[lang][key]);
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria-label');
    if (I18N[lang][key] !== undefined) el.setAttribute('aria-label', I18N[lang][key]);
  });
  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    if (I18N[lang][key] !== undefined) el.setAttribute('title', I18N[lang][key]);
  });
  document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
    btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
  });

  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
}

function initI18N() {
  applyLanguage(getLang());
  document.querySelectorAll('.lang-switch [data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
  });
}
