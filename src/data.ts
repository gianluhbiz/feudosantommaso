export const img = (name: string) => `/img/${name}`

export type Photo = { src: string; alt: string; w: number; h: number }

const p = (name: string, alt: string, w = 1620, h = 1080): Photo => ({ src: img(name), alt, w, h })

export const contact = {
  phone: '+39 392 699 6684',
  phoneHref: 'tel:+393926996684',
  address: 'C/da San Tommaso, 94100 Enna',
  maps: 'https://maps.app.goo.gl/E45Pk2YkEvN8fZqq7',
  instagram: 'https://www.instagram.com/feudosantommaso/',
  facebook: 'https://www.facebook.com/FeudoSanTommaso/',
  vat: '01109410868',
}

const wa = (text: string) => `https://wa.me/393926996684?text=${encodeURIComponent(text)}`

export const whatsapp = {
  table: wa('Ciao! Vorrei prenotare un tavolo al Feudo San Tommaso.\nGiorno:\nOra:\nPersone:'),
  event: wa('Ciao! Vorrei informazioni per un evento al Feudo San Tommaso.\nTipo di evento:\nData:\nNumero di ospiti:'),
  room: wa('Ciao! Vorrei sapere se avete una camera libera.\nDate:\nPersone:'),
}

export const ratings = {
  google: { label: 'Eccellente', count: 559 },
  tripadvisor: { label: 'Eccellente', count: 29 },
}

export const photos = {
  // daylight food
  ravioli: p('feudo-san-tommaso-12.jpg', 'Ravioli con pomodoro, melanzane e olio verde su tovaglia di pizzo', 720, 1080),
  pastaWine: p('feudo-san-tommaso-13.jpg', 'Piatto di pasta e bottiglia di vino rosso su un tavolo in giardino', 720, 1080),
  plateGlass: p('feudo-san-tommaso-14.jpg', 'Antipasto impiattato con calice di vino rosso', 720, 1080),
  risotto: p('feudo-san-tommaso-15.jpg', 'Risotto allo zafferano con lamelle di tartufo nero', 720, 1080),
  crisp: p('feudo-san-tommaso-16.jpg', 'Piatto con cialda croccante di formaggio', 720, 1080),
  pastaRed: p('feudo-san-tommaso-17.jpg', 'Primo piatto servito con vino rosso sul tavolo in pietra', 720, 1080),
  buffet: p('feudo-san-tommaso-18.jpg', 'Tavolo del buffet apparecchiato contro il muro in pietra'),
  pastries: p('feudo-san-tommaso-19.jpg', 'Vassoi di pasticcini e frutta per il dessert'),

  // dining rooms
  redTable: p('Feudo-San-Tommaso-104.jpg', 'Tavola rotonda con sottopiatti rossi e calici'),
  redGlass: p('Feudo-San-Tommaso-110.jpg', 'Dettaglio di tovagliolo e calice rosso'),
  centerpiece: p('Feudo-San-Tommaso-111.jpg', 'Centrotavola con calici rossi'),
  tableDetail: p('Feudo-San-Tommaso-138.jpg', 'Coperti apparecchiati con piatti rossi e bicchieri'),
  archHall: p('Feudo-San-Tommaso-119.jpg', 'Sala con volta ad arco e tavoli apparecchiati'),
  stoneRoom: p('Feudo-San-Tommaso-125.jpg', 'Sala con pareti in pietra e tavolo imperiale'),
  longHall: p('Feudo-San-Tommaso-129.jpg', 'Sala ricevimenti con travi in legno e tavoli lunghi'),
  hallWide: p('Feudo-San-Tommaso-128.jpg', 'Sala ricevimenti apparecchiata vista dall’ingresso'),
  stoneHall: p('Feudo-San-Tommaso-135.jpg', 'Sala in pietra con tavoli e sedie bianche'),
  archDoor: p('Feudo-San-Tommaso-145.jpg', 'Arco in pietra che si apre sulla sala'),
  archRed: p('Feudo-San-Tommaso-86.jpg', 'Sala a volta con tavoli rossi e luci'),
  ceiling: p('Feudo-San-Tommaso-100.jpg', 'Lampadario di rose bianche e luci sul soffitto'),

  // green wedding set-up
  vault: p('feudo-san-tommaso-1.jpg', 'Sala a volta bianca allestita per un matrimonio'),
  greenRow: p('feudo-san-tommaso-4.jpg', 'Tavoli imperiali con runner verde e fiori'),
  greenLong: p('feudo-san-tommaso-5.jpg', 'Tavolata con runner verde salvia e sedie bianche'),
  greenFlowers: p('feudo-san-tommaso-6.jpg', 'Centrotavola floreale su tavolo imperiale'),
  sweets: p('feudo-san-tommaso-7.jpg', 'Confettata con barattoli di vetro e dolci'),
  greenVault: p('feudo-san-tommaso-8.jpg', 'Sala con volte in pietra allestita in verde'),
  favours: p('feudo-san-tommaso-11.jpg', 'Bomboniere e dettagli dell’allestimento'),
  bridalCorner: p('feudo-san-tommaso-10.jpg', 'Angolo allestito con fiori secchi e cornici'),
  placeSetting: p('feudo-san-tommaso-3.jpg', 'Coperto con tovagliolo verde e calici'),

  // dusk
  terrace: p('feudo-san-tommaso-22.jpg', 'Ospiti sulla terrazza in pietra al tramonto, con le colline di Enna sullo sfondo'),
  houseDusk: p('Feudo-San-Tommaso-74.jpg', 'Casale in pietra illuminato all’imbrunire'),
  cottage: p('Feudo-San-Tommaso-76.jpg', 'Edificio in pietra con luci a parete'),
  facade: p('feudo-san-tommaso-20.jpg', 'Facciata del feudo con tavolo e fiori rossi'),
  guestsHall: p('feudo-san-tommaso-21.jpg', 'Ospiti nella sala a volta durante una festa'),

  // night
  party: p('feudo-san-tommaso-2-1.jpg', 'Cortile in pietra sotto file di lucine durante una festa'),
  courtyard: p('Feudo-San-Tommaso-44.jpg', 'Cortile con tavoli sotto le luci di sera'),
  courtyard2: p('Feudo-San-Tommaso-45.jpg', 'Tavoli in cortile illuminati da lucine'),
  olives: p('Feudo-San-Tommaso-77.jpg', 'Ulivi avvolti di luci nel giardino di notte', 1920, 1080),
  cart: p('Feudo-San-Tommaso-80.jpg', 'Vecchio carretto in legno sotto un ulivo illuminato'),
  lightsHouse: p('Feudo-San-Tommaso-84.jpg', 'Casale con luci sospese sopra l’ingresso'),
  arch: p('Feudo-San-Tommaso-49.jpg', 'Arco in pietra che incornicia il giardino di notte'),
  star: p('Feudo-San-Tommaso-82.jpg', 'Rosone luminoso rosso e bianco su muro in pietra'),
  lawn: p('Feudo-San-Tommaso-46.jpg', 'Prato rotondo illuminato tra gli alberi'),
  gate: p('Feudo-San-Tommaso-55.jpg', 'Ingresso del feudo con i lampioni accesi'),
  willows: p('Feudo-San-Tommaso-58.jpg', 'Salici e cipressi illuminati lungo il viale'),
  driveway: p('Feudo-San-Tommaso-59.jpg', 'Viale d’ingresso tra i salici di notte'),
  path: p('Feudo-San-Tommaso-65.jpg', 'Vialetto lastricato illuminato verso le case'),
  cypress: p('Feudo-San-Tommaso-66.jpg', 'Prato e cipressi illuminati di notte'),
  door: p('Feudo-San-Tommaso-67.jpg', 'Porta in pietra con insegna luminosa'),
  garden: p('Feudo-San-Tommaso-69.jpg', 'Giardino con lampioni e alberi di notte'),

  staff: p('Chi-Siamo.jpg', 'Santi, Sofia e lo staff del Feudo San Tommaso davanti al portone della cappella', 1080, 1620),
  map: p('mappa.png', 'Mappa del percorso per raggiungere Feudo San Tommaso', 842, 595),
}

export type Review = { name: string; occasion: string; source: 'Google' | 'Tripadvisor'; text: string }

export const reviews: Review[] = [
  {
    name: 'Giuseppe P.',
    occasion: 'Matrimonio',
    source: 'Tripadvisor',
    text: 'Pensano a tutto e curano i minimi particolari. Volevamo ringraziare Sofia e Santi e tutto lo staff per la favola che ci hanno donato.',
  },
  {
    name: 'Ugo P.',
    occasion: 'Pranzo',
    source: 'Tripadvisor',
    text: 'Antipasto del feudo di ottima fattura, composto da una decina di portate, gran parte delle quali preparate sul momento. Da non perdere il ragù all’ennese.',
  },
  {
    name: 'Geppy L.',
    occasion: 'Festa di laurea',
    source: 'Tripadvisor',
    text: 'Dal cibo eccellente al servizio impeccabile, attento e cordiale. Un ringraziamento speciale alla signora Sofia, sempre disponibile.',
  },
  {
    name: 'Antonio R.',
    occasion: 'Pranzo di Capodanno',
    source: 'Google',
    text: 'Sono vegano e per la prima volta mi sono sentito trattato con la stessa attenzione riservata a tutti gli altri. E il dolce c’era, goloso e buonissimo.',
  },
  {
    name: 'Deborah R.',
    occasion: 'Pranzo e cena',
    source: 'Tripadvisor',
    text: 'Andiamo spesso sia a pranzo che a cena. Santi e Sofia hanno sempre attenzione per i loro clienti e il personale è cortesissimo.',
  },
  {
    name: 'Chiara S.',
    occasion: 'Battesimo',
    source: 'Google',
    text: 'Scelto per il battesimo di nostro figlio a dicembre. Cibo squisito, personale preparato e disponibile, location immersa nel verde.',
  },
]

export type MenuItem = { name: string; note?: string; price: string }
export type MenuSection = { id: string; title: string; photo: Photo; items: MenuItem[] }

export const kitchen: MenuSection[] = [
  {
    id: 'antipasti',
    title: 'Antipasti',
    photo: photos.plateGlass,
    items: [
      { name: 'Antipasto del feudo', note: 'Selezione di prodotti tipici a cura dello chef', price: '15' },
      { name: 'Tagliere di salumi e formaggi', note: 'Per 2 persone, con confetture di nostra produzione', price: '20' },
    ],
  },
  {
    id: 'primi',
    title: 'Primi',
    photo: photos.ravioli,
    items: [
      { name: 'Ravioli di burrata al ragù bianco', price: '15' },
      { name: 'Pasta fresca con zucca e salsiccia', note: 'Sgranato di salsiccia e scaglie di caciocavallo affumicato', price: '12' },
      { name: 'Pasta fresca al pistacchio e guanciale', price: '12' },
      { name: 'Pasta fresca ai sapori siciliani', note: 'Pomodoro, melanzane, olive nere, pomodori secchi, pinoli e mollica tostata', price: '12' },
      { name: 'Pasta fresca al ragù della nonna', price: '12' },
    ],
  },
  {
    id: 'secondi',
    title: 'Secondi',
    photo: photos.crisp,
    items: [
      { name: 'Stinco di maiale con patate al forno', price: '15' },
      { name: 'Porchetta con patate', price: '12' },
      { name: 'Agnello al forno con patate', price: '15' },
    ],
  },
  {
    id: 'brace',
    title: 'Brace',
    photo: photos.pastaRed,
    items: [
      { name: 'Grigliata mista', price: '18' },
      { name: 'Filetto di vitello', price: '18' },
      { name: 'Fiorentina di vitello alla brace', price: '6 / etto' },
      { name: 'Tagliata di vitello', note: 'Con rucola, scaglie e glassa di aceto balsamico', price: '16' },
    ],
  },
  {
    id: 'contorni',
    title: 'Contorni',
    photo: photos.buffet,
    items: [
      { name: 'Insalata mista', price: '4' },
      { name: 'Patate al forno', price: '3' },
      { name: 'Patate fritte', price: '3' },
      { name: 'Verdure grigliate', price: '5' },
    ],
  },
  {
    id: 'dessert',
    title: 'Dessert della casa',
    photo: photos.pastries,
    items: [
      { name: 'Cannolo scomposto', note: 'Con ricotta nostrana', price: '5' },
      { name: 'Cheesecake', note: 'Ai frutti rossi o alla Nutella', price: '5' },
      { name: 'Tartufo nero o bianco', price: '5' },
      { name: 'Sorbetto al limone', price: '4' },
      { name: 'Cupola al cioccolato', note: 'Con cuore di Nutella', price: '5' },
      { name: 'Tiramisù', price: '5' },
      { name: 'Red Velvet', price: '5' },
    ],
  },
  {
    id: 'bevande',
    title: 'Bevande',
    photo: photos.pastaWine,
    items: [
      { name: 'Vino della casa', price: '8' },
      { name: 'Acqua', note: '1 l', price: '2' },
      { name: 'Acqua', note: '½ l', price: '1' },
      { name: 'Birra', note: '330 ml · 660 ml', price: '3 · 4' },
      { name: 'Coca Cola', note: '330 ml · 900 ml', price: '2 · 3' },
      { name: 'Fanta', note: '330 ml', price: '2' },
      { name: 'Gazzosa', note: '200 ml', price: '1' },
    ],
  },
]

export const wines: MenuSection[] = [
  {
    id: 'rossi',
    title: 'Rossi e rosati',
    photo: photos.pastaWine,
    items: [
      { name: 'Mameme Cerasuolo di Vittoria DOC', note: 'Paolo Calì', price: '30' },
      { name: 'Frappato Vittoria DOC', note: 'Paolo Calì', price: '30' },
      { name: 'OSA Frappato Rosato', note: 'Paolo Calì', price: '28' },
      { name: 'Rosso Etna DOC', note: 'Cottanera', price: '38' },
      { name: 'Etna Rosso', note: 'Murgo', price: '30' },
      { name: 'Pinot Nero', note: 'Murgo', price: '30' },
      { name: 'Oltre Pò Pavese', note: 'Oltrenero · Pinot Nero Brut Rosé Metodo Classico DOCG', price: '30' },
      { name: 'Fora Parìa', note: 'Rosato di Nero d’Avola', price: '25' },
      { name: 'Petricóre Syrah DOC', price: '25' },
      { name: 'IO Nero d’Avola DOC', price: '25' },
      { name: 'Amira', note: 'Principe di Butera · Nero d’Avola', price: '22' },
      { name: 'Butirah Syrah', note: 'Principe di Butera', price: '22' },
      { name: 'Cabernet Sauvignon', note: 'Principe di Butera', price: '20' },
      { name: 'Syrah', price: '22' },
      { name: 'Regnante', note: 'Cantine Rallo · Perricone', price: '20' },
      { name: 'La Clarissa', note: 'Cantine Rallo · Syrah', price: '20' },
      { name: 'Il Manto', note: 'Cantine Rallo · Nero d’Avola', price: '20' },
      { name: 'Passivento Rosso', note: 'Barone Montalto', price: '20' },
      { name: 'Due Mondi Syrah', note: 'Barone Montalto', price: '18' },
      { name: 'Due Mondi Cabernet', note: 'Barone Montalto · Cabernet Sauvignon e Nero d’Avola', price: '18' },
    ],
  },
  {
    id: 'bianchi',
    title: 'Bianchi e bollicine',
    photo: photos.plateGlass,
    items: [
      { name: 'Bianco Etna DOC', price: '30' },
      { name: 'Ciuri Etna Bianco', price: '30' },
      { name: 'La Cuba', price: '30' },
      { name: 'Oi Vino Frizzante', price: '25' },
      { name: 'Cusora Chardonnay', price: '22' },
      { name: 'Charme Frizzante', price: '22' },
      { name: 'Viognier', price: '20' },
      { name: 'Pinot Bianco', note: 'Friuli DOC Aquileia', price: '20' },
      { name: 'Traminer Aromatico', note: 'Friuli DOC Aquileia', price: '20' },
      { name: 'Grillo DOC Sauvignon Blanc', note: 'Friuli DOC', price: '20' },
      { name: 'Zahr', price: '20' },
      { name: 'Passivento Bianco', price: '20' },
      { name: 'Cucunci Frizzante', price: '20' },
      { name: 'Mamertino Bianco', price: '20' },
      { name: 'Carizza', note: 'Etna', price: '20' },
      { name: 'Catarratto', price: '20' },
      { name: 'Grillo Al Qasar', price: '20' },
      { name: 'Grillo Bianco Maggiore', price: '20' },
      { name: 'Altavilla Grillo', price: '20' },
      { name: 'Makisè', price: '20' },
      { name: 'Kikè', price: '20' },
      { name: 'Due Mondi', note: 'Grillo e Sauvignon Blanc', price: '18' },
      { name: 'Zibibbo Secco Carta d’Oro', price: '15' },
    ],
  },
  {
    id: 'italia',
    title: 'Vini d’Italia',
    photo: photos.pastaRed,
    items: [
      { name: 'Amarone', price: '40' },
      { name: 'Barolo', note: 'Poggio Le Coste', price: '40' },
      { name: 'Barbaresco', note: 'Poggio Le Coste', price: '38' },
      { name: 'Barbera d’Asti Superiore', note: 'Poggio Le Coste', price: '30' },
      { name: 'Petravia', note: 'Masseria Altemura · Aglianico e Primitivo', price: '30' },
      { name: 'Sassabruna', note: 'Rocca di Montemassi · Maremma Toscana DOC', price: '26' },
      { name: 'Barbera d’Asti', price: '25' },
      { name: 'Sasseo', note: 'Masseria Altemura · Primitivo di Manduria', price: '22' },
      { name: 'Chianti Classico', note: 'Castello di Albola', price: '22' },
      { name: 'Negroamaro', price: '20' },
      { name: 'Le Focaie', note: 'Rocca di Montemassi · Maremma Toscana DOC', price: '20' },
    ],
  },
]
