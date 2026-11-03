const year = "2026";
const pressPhoto =
  "https://media.base44.com/images/public/6ae8f38980d32828158de547/954f34be6_DANIEL016.JPG";

const links = [
  {
    label: "Quixosis",
    href: "https://quixosis.bandcamp.com/",
    children: [
      { label: "Bandcamp", href: "https://quixosis.bandcamp.com/" },
      { label: "Instagram · @quixosis", href: "https://www.instagram.com/quixosis/" },
      { label: "Email · quixosis@gmail.com", href: "mailto:quixosis@gmail.com" },
    ],
  },
  {
    label: "CAIFE",
    href: "https://caife.bandcamp.com/",
    children: [
      { label: "Bandcamp", href: "https://caife.bandcamp.com/" },
      { label: "Instagram · @discos.caife", href: "https://www.instagram.com/discos.caife/" },
      { label: "Email · caiferecords@gmail.com", href: "mailto:caiferecords@gmail.com" },
    ],
  },
  {
    label: "+ambién",
    href: "https://tambien.bandcamp.com/",
    children: [
      { label: "Bandcamp", href: "https://tambien.bandcamp.com/" },
      { label: "Instagram · @t.ambien", href: "https://www.instagram.com/t.ambien/" },
      { label: "Email · tambien.radio@gmail.com", href: "mailto:tambien.radio@gmail.com" },
    ],
  },
];

export const content = {
  en: {
    lang: "en",
    name: "Daniel Lofredo Rota",
    place: "Quito, Ecuador",
    year,
    pressPhoto,
    music: [
      {
        id: "quixosis",
        name: "Quixosis",
        note: "Solo Project, South American roots + electronica, dub, ambient",
        blurb: "Solo Project. Southamerican roots + electronica, dub, ambient.",
        href: "https://quixosis.bandcamp.com/",
        where: "bandcamp",
      },
      {
        id: "ambien",
        name: "+ambién",
        note: "est. 2017 latin american ambient music label and community.",
        href: "https://tambien.bandcamp.com/",
        where: "bandcamp",
      },
    ],
    caife: {
      name: "CAIFE",
      note: "the lost analog tapes of Discos CAIFE, recovered, restored, reissued.",
      cta: "for the full story:",
      href: "https://caife.bandcamp.com/",
      where: "bandcamp",
      description:
        "Founded by Carlos Rota, Discos Caife was an iconic Ecuadorian record label that specialized in releasing national and regional music at the highest fidelity of its era. For eight years it was a cornerstone of the Ecuadorian music scene, until in 1968 it closed its doors for reasons unknown. Its sound and catalogue were buried under tons of paper, until they were rediscovered 45 years later by a young aspiring DJ.",
    },
    podcasts: [
      {
        name: "CAIFE: The Lost Sound",
        note: "Spotify Original, 2022. Originally Sonido Perdido. The Discos CAIFE tapes.",
        href: "https://open.spotify.com/show/5EFwJ8CBjEhIZc9lSzyZNE?si=fbb86f7be94242f7",
        where: "spotify",
      },
      {
        name: "Canal Confidente",
        note: "Anonymous calls, recorded.",
        href: "https://open.spotify.com/show/31bL8ww35lLAhoW94OndSH",
        where: "spotify",
      },
      {
        name: "Estado Fósil: La huella ecológica del sonido",
        note: "Five decades of oil in Ecuador. 2023.",
        href: "https://www.estadofosil.art/materialidades/la-huella-ecologica-del-sonido",
        where: "site",
      },
    ],
    links,
    bio: [
      "Quixosis is the mental condition of the Quixote and the electronic alias of Ecuadorian artist and producer Daniel Lofredo Rota, who has built an aural universe from analog machinery, magnetic delays and crates and crates of master tapes from a label lost in the 60s. In a process bound to memory and to narratives buried by time, Quixosis transmutes that content into a mesmerizing, dynamic space that invokes critical futurism and pure psychedelia, in wide-open environments punctuated by acid polyrhythms and frenetic percussion.",
      "Quixosis explores the peripheral limits of electronic music, seeking a path of its own in the global underground from a South American perspective detached from the stereotypes; one that engages the historical reality of our present crossroads, both political and musical. Exploring Latin American expression in the first person and with fierce independence, Quixosis focuses on process over product, with an autonomous and sovereign vision that values the South American experience from its roots, its mysticism, its plurality and its chaos, highlighting its beauty though the prism of individual experience.",
      "Quixosis invites deep listening, experimentation and experience beyond commercial structures and the trends of the global north.",
    ],
    cv: [
      {
        year: "2023",
        title: "Estado Fósil — Imaginarios, conflictos y materialidades del extractivismo petrolero en Ecuador",
        role: "Writer, podcast production",
        href: "https://www.estadofosil.art/",
      },
      {
        year: "2019–2025",
        title: "Honest Jon's — CAIFE Records reissue series",
        role: "Researcher, archivist, analog tape transfers, investigative musicologist",
        href: "https://honestjons.com/",
      },
      {
        year: "2022",
        title: "Sonido Perdido: CAIFE",
        role: "Creator and host. Spotify Original",
        href: "https://open.spotify.com/show/2h8WYRfmgxFZJC9hCiN6a5",
      },
      {
        year: "2023–2025",
        title: "Canal Confidente",
        role: "Host, producer",
        href: "https://open.spotify.com/show/31bL8ww35lLAhoW94OndSH",
      },
      {
        year: "est. 2014",
        title: "Quixosis",
        role: "Producer, performer, DJ",
        description: "Live electronic touring solo project",
        href: "https://quixosis.bandcamp.com/",
      },
      {
        year: "est. 2018",
        title: "+ambién",
        role: "Label head, curator, mixing and mastering engineer, A&R",
        href: "https://tambien.bandcamp.com/",
      },
    ],
    ui: {
      nav: {
        quixosis: "Quixosis",
        caife: "CAIFE",
        ambien: "+ambién",
        podcasts: "Podcasts",
        text: "Text",
        about: "Info",
        contact: "Contact",
      },
      sections: {
        quixosis: "Quixosis / 01",
        caife: "CAIFE / 02",
        ambien: "+ambién / 03",
        podcasts: "Podcasts / 04",
        text: "Text / 05",
        about: "Info / 06",
        contact: "Contact / 07",
        cv: "CV / 04",
      },
      hub: {
        entries: { one: "1 entry", many: "{n} entries", none: "Journal" },
        textMeta: "essays, fiction, music",
        aboutMeta: "Photo · CV",
        contactMeta: "Write",
      },
      about: { photoAlt: "Press photo" },
      releases: {
        back: "← Quixosis",
        catalogue: "Full catalogue ↗",
        open: "Open on Bandcamp ↗",
        hint: "Press play. Streams from Bandcamp, right here.",
        bandcamp: "bandcamp ↗",
        close: "Close player",
      },
      contact: {
        title: "Contact",
        intro: "Press, bookings, archive enquiries.",
        form: {
          name: "Name",
          email: "Email",
          message: "Message",
          send: "Send",
          sending: "Sending",
          error: "Failed. Try again.",
          sent: "Received.",
          again: "Write another",
        },
      },
      text: { empty: "No entries yet.", back: "← Index" },
      cv: { title: "Selected work", note: "Full CV on request." },
      footer: { elsewhere: "Elsewhere" },
    },
  },

  es: {
    lang: "es",
    name: "Daniel Lofredo Rota",
    place: "Quito, Ecuador",
    year,
    pressPhoto,
    music: [
      {
        id: "quixosis",
        name: "Quixosis",
        note: "Proyecto solista, raíces sudamericanas + electrónica, dub, ambient",
        blurb: "Proyecto solista. Raíces sudamericanas + electrónica, dub, ambient.",
        href: "https://quixosis.bandcamp.com/",
        where: "bandcamp",
      },
      {
        id: "ambien",
        name: "+ambién",
        note: "est. 2017 sello y comunidad de música ambient latinoamericana.",
        href: "https://tambien.bandcamp.com/",
        where: "bandcamp",
      },
    ],
    caife: {
      name: "CAIFE",
      note: "las cintas analógicas perdidas de Discos CAIFE, recuperadas, restauradas, reeditadas.",
      cta: "para la historia completa:",
      href: "https://caife.bandcamp.com/",
      where: "bandcamp",
      description:
        "Fundado por Carlos Rota, Discos Caife fue un iconico sello discografico ecuatoriano que se especializo en publicar musica nacional y regional en la mayor fidelidad de su epoca. Por ocho años fue un eje fundamental de la escena musical ecuatoriana hasta que en 1968, cerro sus puertas por razones desconocidas. Su sonido y catalogo fueron enterrados bajo toneladas de papel, hasta ser reencontrados 45 años mas tarde por un joven aspirante a DJ.",
    },
    podcasts: [
      {
        name: "Sonido Perdido",
        note: "Original de Spotify, 2022. Las cintas de Discos CAIFE.",
        href: "https://open.spotify.com/show/2h8WYRfmgxFZJC9hCiN6a5",
        where: "spotify",
      },
      {
        name: "Canal Confidente",
        note: "Llamadas anónimas, grabadas.",
        href: "https://open.spotify.com/show/31bL8ww35lLAhoW94OndSH",
        where: "spotify",
      },
      {
        name: "Estado Fósil: La huella ecológica del sonido",
        note: "Cinco décadas de petróleo en Ecuador. 2023.",
        href: "https://www.estadofosil.art/materialidades/la-huella-ecologica-del-sonido",
        where: "site",
      },
    ],
    links,
    bio: [
      "Quixosis es la condición mental del Quixote y es un alias electrónico del artista y productor ecuatoriano, Daniel Lofredo Rota quien ha creado un universo aural a base maquinaria analógica, delays magnéticos y cajas y cajas de cintas matrices de una disquera perdida en los años 60s. En un proceso ligado a la memoria y a las narrativas enterradas por el tiempo, Quixosis transmuta su contenido en un espacio mesmerizante y dinámico que invoca el futurismo crítico, y la psicodelia pura, en ambientes amplios, puntuados por polirritmias ácidas y percusiones frenéticas.",
      "Quixosis explora los límites periféricos de la música electrónica, buscando abrir un camino propio en el underground global desde una perspectiva sudamericana desligada de los estereotipos de la latinidad, que se integra a la realidad histórica de nuestra encrucijada actual, tanto política como musical. Explorando la expresión latinoamericana en primera persona y desde la autogestión, Quixosis enfoca el proceso más que el producto con una visión autónoma, y soberana, que valora la experiencia sudamericana desde sus raíces, su misticismo, su pluralidad y su caos, resaltando su belleza sin olvidarse de su complejidad.",
      "Quixosis invita a la escucha profunda, a la experimentación y la experiencia más allá de las estructuras comerciales y las tendencias del norte global.",
    ],
    cv: [
      {
        year: "2023",
        title: "Estado Fósil — Imaginarios, conflictos y materialidades del extractivismo petrolero en Ecuador",
        role: "Escritura, producción de pódcast",
        href: "https://www.estadofosil.art/",
      },
      {
        year: "2019–2025",
        title: "Honest Jon's — serie de reediciones de CAIFE Records",
        role: "Investigación, archivo, transferencia de cintas analógicas, musicología investigativa",
        href: "https://honestjons.com/",
      },
      {
        year: "2022",
        title: "Sonido Perdido: CAIFE",
        role: "Creador y conductor. Original de Spotify",
        href: "https://open.spotify.com/show/2h8WYRfmgxFZJC9hCiN6a5",
      },
      {
        year: "2023–2025",
        title: "Canal Confidente",
        role: "Conducción, producción",
        href: "https://open.spotify.com/show/31bL8ww35lLAhoW94OndSH",
      },
      {
        year: "est. 2014",
        title: "Quixosis",
        role: "Productor, performer, DJ",
        description: "Proyecto solista de electrónica en vivo, de gira",
        href: "https://quixosis.bandcamp.com/",
      },
      {
        year: "est. 2018",
        title: "+ambién",
        role: "Responsable del sello, curador, ingeniero de mezcla y masterización, A&R",
        href: "https://tambien.bandcamp.com/",
      },
    ],
    ui: {
      nav: {
        quixosis: "Quixosis",
        caife: "CAIFE",
        ambien: "+ambién",
        podcasts: "Pódcast",
        text: "Textos",
        about: "Info",
        contact: "Contacto",
      },
      sections: {
        quixosis: "Quixosis / 01",
        caife: "CAIFE / 02",
        ambien: "+ambién / 03",
        podcasts: "Pódcast / 04",
        text: "Textos / 05",
        about: "Info / 06",
        contact: "Contacto / 07",
        cv: "CV / 04",
      },
      hub: {
        entries: { one: "1 entrada", many: "{n} entradas", none: "Diario" },
        textMeta: "ensayos, ficción, música",
        aboutMeta: "Foto · CV",
        contactMeta: "Escribir",
      },
      about: { photoAlt: "Foto de prensa" },
      releases: {
        back: "← Quixosis",
        catalogue: "Catálogo completo ↗",
        open: "Abrir en Bandcamp ↗",
        hint: "Dale play. Suena desde Bandcamp, aquí mismo.",
        bandcamp: "bandcamp ↗",
        close: "Cerrar reproductor",
      },
      contact: {
        title: "Contacto",
        intro: "Prensa, contrataciones, consultas de archivo.",
        form: {
          name: "Nombre",
          email: "Correo",
          message: "Mensaje",
          send: "Enviar",
          sending: "Enviando",
          error: "No se pudo enviar. Intenta otra vez.",
          sent: "Recibido.",
          again: "Escribir otro",
        },
      },
      text: { empty: "Todavía no hay entradas.", back: "← Índice" },
      cv: { title: "Trabajo seleccionado", note: "CV completo a pedido." },
      footer: { elsewhere: "En otros lados" },
    },
  },
};

export const site = content.en;