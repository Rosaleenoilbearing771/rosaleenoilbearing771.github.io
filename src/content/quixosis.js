const catalogue = "https://quixosis.bandcamp.com";

const embed = (id) =>
  `https://bandcamp.com/EmbeddedPlayer/album=${id}/size=large/bgcol=0f0f0f/linkcol=ffffff/tracklist=false/artwork=large/`;

const cover = (id) => `https://f4.bcbits.com/img/${id}_10.jpg`;

// Hand-drawn yellow linework versions of each cover, shown until hovered.
const lineArt = {
  "musica-para-terminales-terrestres":
    "https://media.base44.com/images/public/6ae8f38980d32828158de547/97614a5d2_generated_image.png",
  "acid-juanito-reloaded":
    "https://media.base44.com/images/public/6ae8f38980d32828158de547/7945674e4_generated_image.png",
  "zen-cero":
    "https://media.base44.com/images/public/6ae8f38980d32828158de547/1b0c94a85_generated_image.png",
  "chanclas-de-mercurio":
    "https://media.base44.com/images/public/6ae8f38980d32828158de547/0a075bba9_generated_image.png",
  burundanger:
    "https://media.base44.com/images/public/6ae8f38980d32828158de547/d71371735_generated_image.png",
  "rocafuerte-remixes":
    "https://media.base44.com/images/public/6ae8f38980d32828158de547/fdabe8373_generated_image.png",
  rocafuerte:
    "https://media.base44.com/images/public/6ae8f38980d32828158de547/c165b66fa_generated_image.png",
  "especies-afines":
    "https://media.base44.com/images/public/6ae8f38980d32828158de547/be54f6838_generated_image.png",
};

// Newest first. Album ids are Bandcamp's, used for the embedded player.
const releases = [
  {
    slug: "musica-para-terminales-terrestres",
    title: "Música Para Terminales Terrestres",
    credit: "Brayan Hino & Quixosis",
    date: "2026-01-30",
    albumId: "1416071580",
    artId: "a3833516272",
  },
  {
    slug: "acid-juanito-reloaded",
    title: "Acid Juanito Reloaded",
    credit: "Quixosis",
    date: "2025-12-03",
    albumId: "763364814",
    artId: "a4094166193",
  },
  {
    slug: "zen-cero",
    title: "Zen & Cero",
    credit: "Quixosis",
    date: "2023-11-17",
    albumId: "2272605718",
    artId: "a4056477968",
  },
  {
    slug: "chanclas-de-mercurio",
    title: "Chanclas de Mercurio",
    credit: "Quixosis",
    date: "2023-09-01",
    albumId: "4286734400",
    artId: "a3963919367",
  },
  {
    slug: "burundanger",
    title: "Burundanger",
    credit: "Quixosis",
    date: "2022-09-30",
    albumId: "1403324284",
    artId: "a0768083075",
  },
  {
    slug: "rocafuerte-remixes",
    title: "Rocafuerte Remixes",
    credit: "Quixosis",
    date: "2021-10-01",
    albumId: "2925032827",
    artId: "a2252904338",
  },
  {
    slug: "rocafuerte",
    title: "Rocafuerte",
    credit: "Quixosis",
    date: "2021-01-15",
    albumId: "3100906567",
    artId: "a3884476651",
  },
  {
    slug: "especies-afines",
    title: "Especies Afines",
    credit: "Quixosis",
    date: "2020-09-17",
    albumId: "1168914476",
    artId: "a3912858948",
  },
].map((release) => ({
  ...release,
  year: release.date.slice(0, 4),
  cover: cover(release.artId),
  lineArt: lineArt[release.slug],
  bandcamp: `${catalogue}/album/${release.slug}`,
  embed: embed(release.albumId),
}));

// SoundCloud mixes and mixtapes, newest first.
const mixtapes = [
  {
    title: "Rebaxada Sanxuanera Vol. 1",
    credit: "el inshazameable quixote de la cumbia",
    year: "2023",
    url: "https://api.soundcloud.com/tracks/soundcloud:tracks:1457059171?secret_token=s-EWQ1VCr0qIb",
  },
  {
    title: "SYSTEM Mix 081: Quixosis",
    credit: "Boiler Room",
    year: "2022",
    url: "https://soundcloud.com/platform/system-mix-081-quixosis",
  },
  {
    title: "Ambient Sets",
    credit: "Quixosis",
    url: "https://soundcloud.com/quixosis/sets/ambient-sets",
    tracks: [
      {
        title: "Insurgentes Podcast 2 | Quixosis",
        credit: "TraTraTrax",
        url: "https://soundcloud.com/tratratrax/insurgentes-podcast-2-quixosis",
      },
      {
        title: "+ambien :: podcast #0003 :: [Quixosis - A fuego lento]",
        credit: "también",
        url: "https://soundcloud.com/tambi3n/tambien-podcast-0003-quixosis-momentaneo",
      },
      {
        title: "+ambién :: podcast #0001 :: [mitimae - ascenso espiral]",
        credit: "también",
        url: "https://soundcloud.com/tambi3n/tambien-podcast-001-set",
      },
      {
        title: "Nômade by Quixosis",
        credit: "NÔMADE SOUND",
        url: "https://soundcloud.com/nomadesound/nomade-family-quixosis",
      },
      {
        title: "+ambien podcast #0009 [quixosis - musica para dormitorios]",
        credit: "también",
        url: "https://soundcloud.com/tambi3n/tambien-podcast-x-full",
      },
    ],
  },
  {
    title: "Vinyl / Archives",
    credit: "Quixosis",
    url: "https://soundcloud.com/quixosis/sets/archival-work",
    tracks: [
      {
        title: "Hilos Vol.II : Quixosis",
        credit: "Quixosis",
        url: "https://soundcloud.com/shikashikacollective/hilos-volume-ii-quixosis",
      },
      {
        title: "Memoria Análoga Episode 5: Música Popular del Ecuador",
        credit: "Discos CAIFE // Memoria Análoga",
        url: "https://soundcloud.com/memoria-analoga/memoria-analoga-episode-5-musica-nacional-ecuador-f",
      },
      {
        title: "Quixosis - Mixtape",
        credit: "RXMXZCLX",
        url: "https://soundcloud.com/remezcla-nyc/quixosis-mixtape",
      },
      {
        title: "Música Popular Ecuatoriana Volumen 2",
        credit: "Discos CAIFE // Memoria Análoga",
        url: "https://soundcloud.com/memoria-analoga/musica-popular-ecuatoriana-volumen-2",
      },
      {
        title: "Codex Naturae Guest Mix 022: Quixosis",
        credit: "Codex Naturae",
        url: "https://soundcloud.com/codexnaturae/codex-naturae-guest-mix-022-quixosis",
      },
    ],
  },
];

export { releases, catalogue, mixtapes };