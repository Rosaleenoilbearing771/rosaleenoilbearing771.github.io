const catalogue = "https://tambien.bandcamp.com";

const embed = (id) =>
  `https://bandcamp.com/EmbeddedPlayer/album=${id}/size=large/bgcol=0f0f0f/linkcol=9a9a9a/tracklist=false/artwork=large/transparent=true/`;

const cover = (id) => `https://f4.bcbits.com/img/a${id}_10.jpg`;

const host = "https://tambien.bandcamp.com/album";

// Hand-drawn grey linework versions of each cover, shown until hovered.
const lineArt = {
  jichuska: "https://media.base44.com/images/public/6ae8f38980d32828158de547/ae3fc5ceb_generated_image.png",
  "post-alien": "https://media.base44.com/images/public/6ae8f38980d32828158de547/cb9705be7_generated_image.png",
  "silente-esplendor": "https://media.base44.com/images/public/6ae8f38980d32828158de547/72181dee9_generated_image.png",
  "todo-objeto-es-ruina": "https://media.base44.com/images/public/6ae8f38980d32828158de547/dbf556d9b_generated_image.png",
  solaz: "https://media.base44.com/images/public/6ae8f38980d32828158de547/e552fcf25_generated_image.png",
  "resembrarme-bosque": "https://media.base44.com/images/public/6ae8f38980d32828158de547/caafe4120_generated_image.png",
  destiempo: "https://media.base44.com/images/public/6ae8f38980d32828158de547/aab0ed930_generated_image.png",
  "dormir-un-ano-entero": "https://media.base44.com/images/public/6ae8f38980d32828158de547/07fb2340e_generated_image.png",
  "fantologia-i": "https://media.base44.com/images/public/6ae8f38980d32828158de547/33eae7427_generated_image.png",
  "sueno-andino": "https://media.base44.com/images/public/6ae8f38980d32828158de547/a7a2c1be6_generated_image.png",
  "chimborazo-resbala": "https://media.base44.com/images/public/6ae8f38980d32828158de547/d8d14b82f_generated_image.png",
  "los-dias-sin-nombre": "https://media.base44.com/images/public/6ae8f38980d32828158de547/45710c8c2_generated_image.png",
};

// Newest first, from the label's discography. Album ids are Bandcamp's,
// used for the embedded player; art ids for the cover art.
const releases = [
  {
    slug: "jichuska",
    title: "Jichuska",
    credit: "Mala Fama",
    date: "2026-07-15",
    albumId: "2478245395",
    artId: "105857946",
    bandcamp: `${host}/jichuska`,
  },
  {
    slug: "post-alien",
    title: "Post-Alien",
    credit: "Sofia Clonn",
    date: "2026-06-19",
    albumId: "3687213819",
    artId: "831326864",
    bandcamp: "https://sofiaclonn.bandcamp.com/album/post-alien",
  },
  {
    slug: "silente-esplendor",
    title: "Silente Esplendor",
    credit: "MNTH",
    date: "2026-04-23",
    albumId: "3687559943",
    artId: "4220530401",
    bandcamp: "https://mnth.bandcamp.com/album/silente-esplendor",
  },
  {
    slug: "todo-objeto-es-ruina",
    title: "Todo Objeto es Ruina",
    credit: "Carlos Rizzi",
    date: "2026-04-17",
    albumId: "1045007784",
    artId: "4253647016",
    bandcamp: "https://carlosrizzi.bandcamp.com/album/todo-objeto-es-ruina",
  },
  {
    slug: "solaz",
    title: "Solaz",
    credit: "Delise & Hermanito",
    date: "2026-03-06",
    albumId: "1835671565",
    artId: "2088104001",
    bandcamp: `${host}/solaz`,
  },
  {
    slug: "resembrarme-bosque",
    title: "resembrarme bosque",
    credit: "Verónica Cian",
    date: "2025-10-31",
    albumId: "3518439876",
    artId: "2897423044",
    bandcamp: "https://veronicacian.bandcamp.com/album/resembrarme-bosque",
  },
  {
    slug: "destiempo",
    title: "Destiempo",
    credit: "Matt Emen",
    date: "2025-09-05",
    albumId: "1346603755",
    artId: "3697731014",
    bandcamp: "https://mattemen.bandcamp.com/album/destiempo",
  },
  {
    slug: "dormir-un-ano-entero",
    title: "Dormir un año entero",
    credit: "Las Hermanas",
    date: "2025-08-22",
    albumId: "4204388673",
    artId: "4068271075",
    bandcamp: "https://lashermanas.bandcamp.com/album/dormir-un-a-o-entero",
  },
  {
    slug: "fantologia-i",
    title: "Fantologia I",
    credit: "+ambién",
    date: "2025-06-06",
    albumId: "1701918495",
    artId: "1430233131",
    bandcamp: `${host}/fantologia-i`,
  },
  {
    slug: "sueno-andino",
    title: "Sueño Andino",
    credit: "Fuya Fuya",
    date: "2025-03-21",
    albumId: "3202816665",
    artId: "185068944",
    bandcamp: `${host}/sue-o-andino`,
  },
  {
    slug: "chimborazo-resbala",
    title: "Chimborazo / Resbala",
    credit: "Entrañas & Selvagia",
    date: "2024-11-22",
    albumId: "1870772640",
    artId: "2989784992",
    bandcamp: "https://entranas.bandcamp.com/album/chimborazo-resbala",
  },
  {
    slug: "los-dias-sin-nombre",
    title: "Los Días Sin Nombre",
    credit: "Rosarito ½",
    date: "2024-10-04",
    albumId: "3667038027",
    artId: "239712700",
    bandcamp: "https://rosarito1-2.bandcamp.com/album/los-d-as-sin-nombre",
  },
].map((release) => ({
  ...release,
  year: release.date.slice(0, 4),
  cover: cover(release.artId),
  lineArt: lineArt[release.slug],
  embed: embed(release.albumId),
}));

export { releases, catalogue };