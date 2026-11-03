import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useSite } from "@/lib/i18n";

const popupEmbed = (albumId) =>
  `https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=0f0f0f/linkcol=9a9a9a/tracklist=false/artwork=large/transparent=true/`;

export default function ReleaseDialog({ release, open, onOpenChange }) {
  const site = useSite();
  const ui = site.ui.releases;
  const contentRef = useRef(null);
  const [playerLoaded, setPlayerLoaded] = useState(false);

  useEffect(() => {
    if (open) contentRef.current?.focus();
    else setPlayerLoaded(false);
  }, [open]);

  return (
    <Dialog modal={false} open={open} onOpenChange={onOpenChange}>
      <DialogContent
        ref={contentRef}
        tabIndex={-1}
        keepMounted
        hidden={!open}
        className="max-w-lg gap-0 rounded-none border p-0"
        onInteractOutside={(event) => {
          if (!open || event.detail.originalEvent.target.closest?.("[data-release-trigger]")) event.preventDefault();
        }}
      >
        <div className="hairline flex items-baseline justify-between gap-4 border-b py-3 pl-4 pr-12">
          <DialogTitle className="font-heading text-base font-light leading-tight tracking-[-0.02em]">
            {release?.title}
          </DialogTitle>
          <span className="meta shrink-0">{release?.year}</span>
        </div>
        <DialogDescription className="sr-only">{release?.credit}</DialogDescription>

        {release && open && (
          playerLoaded ? (
            <iframe
              key={release.slug}
              title={release.title}
              src={popupEmbed(release.albumId)}
              loading="lazy"
              className="h-[360px] w-full border-0"
              allow="autoplay; encrypted-media"
            />
          ) : (
            <div className="flex h-[360px] items-center justify-center px-6">
              <button
                type="button"
                onClick={() => setPlayerLoaded(true)}
                className="hairline border px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
              >
                {site.lang === "es" ? "Cargar reproductor de Bandcamp" : "Load Bandcamp player"}
              </button>
            </div>
          )
        )}

        <div className="hairline flex items-center justify-between gap-4 border-t px-4 py-3">
          <span className="meta">{release?.credit}</span>
          <a
            href={release?.bandcamp}
            target="_blank"
            rel="noreferrer"
            className="meta shrink-0 transition-colors hover:text-foreground"
          >
            {ui.open}
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
