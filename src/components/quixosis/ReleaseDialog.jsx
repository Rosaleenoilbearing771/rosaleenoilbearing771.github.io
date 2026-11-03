import { useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useSite } from "@/lib/i18n";

export default function ReleaseDialog({ release, open, onOpenChange }) {
  const site = useSite();
  const ui = site.ui.releases;
  const contentRef = useRef(null);

  useEffect(() => {
    if (open) contentRef.current?.focus();
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
          if (!open || event.detail.originalEvent.target.closest?.("[data-release-trigger]")) {
            event.preventDefault();
          }
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
          <div className="flex h-[360px] items-center justify-center px-6">
            <a
              href={release.bandcamp}
              target="_blank"
              rel="noopener noreferrer"
              className="hairline inline-flex items-center gap-3 border px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
            >
              {ui.open}
            </a>
          </div>
        )}

        <div className="hairline flex items-center justify-between gap-4 border-t px-4 py-3">
          <span className="meta">{release?.credit}</span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
