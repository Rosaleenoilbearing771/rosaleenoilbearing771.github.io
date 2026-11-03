import { useState } from "react";
import { useSite } from "@/lib/i18n";

const embedUrl = (albumId) =>
  `https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=0f0f0f/linkcol=9a9a9a/tracklist=true/artwork=large/transparent=true/`;

export default function BandcampEmbed({ albumId, title }) {
  const site = useSite();
  const [loaded, setLoaded] = useState(false);

  if (!albumId) return null;

  return (
    <div className="hairline my-8 border-t pt-6">
      {loaded ? (
        <iframe
          title={title || "Bandcamp player"}
          src={embedUrl(albumId)}
          loading="lazy"
          className="h-[472px] w-full border-0"
          allow="autoplay; encrypted-media"
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="hairline border px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
        >
          {site.lang === "es" ? "Cargar reproductor de Bandcamp" : "Load Bandcamp player"}
        </button>
      )}
    </div>
  );
}
