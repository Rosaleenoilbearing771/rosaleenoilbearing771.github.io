import { useSite } from "@/lib/i18n";

// Open Bandcamp's own player in a separate tab instead of embedding it here.
// This keeps a slow or unresponsive Bandcamp iframe from freezing the site.
const playerUrl = (albumId) =>
  `https://bandcamp.com/EmbeddedPlayer/album=${encodeURIComponent(albumId)}/size=large/bgcol=0f0f0f/linkcol=9a9a9a/tracklist=true/artwork=large/transparent=true/`;

export default function BandcampEmbed({ albumId, title }) {
  const site = useSite();

  if (!albumId) return null;

  return (
    <div className="hairline my-8 border-t pt-6">
      <a
        href={playerUrl(albumId)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${site.lang === "es" ? "Abrir reproductor de Bandcamp" : "Open Bandcamp player"}: ${title || "Bandcamp"}`}
        className="hairline inline-flex items-center gap-3 border px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
      >
        {site.lang === "es" ? "Abrir reproductor en Bandcamp ↗" : "Open player on Bandcamp ↗"}
      </a>
    </div>
  );
}
