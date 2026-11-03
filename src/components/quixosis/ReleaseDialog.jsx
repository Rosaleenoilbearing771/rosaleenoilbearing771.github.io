import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useSite } from "@/lib/i18n";
import BandcampPlayerSlot from "@/components/text/BandcampPlayerSlot";

export default function ReleaseDialog({ release, open, onOpenChange }) {
  const site = useSite();
  const ui = site.ui.releases;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg gap-0 rounded-none border p-0">
        <div className="hairline flex items-baseline justify-between gap-4 border-b py-3 pl-4 pr-12">
          <DialogTitle className="font-heading text-base font-light leading-tight tracking-[-0.02em]">
            {release?.title}
          </DialogTitle>
          <span className="meta shrink-0">{release?.year}</span>
        </div>

        <DialogDescription className="sr-only">
          {release?.credit}
        </DialogDescription>

        {release ? (
          <div className="px-4 py-3">
            <BandcampPlayerSlot
              albumId={release.albumId}
              title={release.title}
              height={360}
              tracklist={false}
              linkColor="9a9a9a"
              transparent
              autoAttach={false}
            />
          </div>
        ) : null}

        <div className="hairline flex items-center justify-between gap-4 border-t px-4 py-3">
          <span className="meta">{release?.credit}</span>
          <a
            href={release?.bandcamp}
            target="_blank"
            rel="noopener noreferrer"
            className="meta shrink-0 transition-colors hover:text-foreground"
          >
            {ui.open}
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
