import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useSite } from "@/lib/i18n";
import { releases, catalogue, mixtapes } from "@/content/quixosis";
import PageShell from "@/components/PageShell";
import { useReleasePlayer } from "@/components/quixosis/ReleasePlayerProvider";
import MixtapeTile from "@/components/quixosis/MixtapeTile";
import { Image } from "@/components/ui/image";

export const Route = createFileRoute("/quixosis/")({
  head: () => ({
    meta: [
      { title: "Quixosis — Releases" },
      {
        name: "description",
        content: "Recent Quixosis releases. Playable from Bandcamp, through the site.",
      },
    ],
  }),
  component: QuixosisPage,
});

function QuixosisPage() {
  const site = useSite();
  const project = site.music.find((item) => item.id === "quixosis");
  const { showRelease } = useReleasePlayer();
  const [playingUrl, setPlayingUrl] = useState(null);
  const [openSet, setOpenSet] = useState(null);

  return (
    <PageShell section={site.ui.sections.quixosis}>
      <div className="hairline flex flex-col gap-3 border-b px-5 py-6 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <h1 className="font-heading text-[clamp(1.9rem,5vw,3rem)] font-light leading-[0.95] tracking-[-0.03em]">
            {project.name}
          </h1>
          <p className="meta mt-3">{project.blurb}</p>
        </div>
        <a
          href={catalogue}
          target="_blank"
          rel="noreferrer"
          className="meta transition-colors hover:text-foreground"
        >
          {site.ui.releases.catalogue}
        </a>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4">
        {releases.map((release) => (
          <button
            key={release.slug}
            type="button"
            data-release-trigger
            onClick={() => showRelease(release)}
            className="group hairline flex flex-col gap-4 border-b border-r p-4 text-left transition-colors duration-300 hover:bg-foreground hover:text-background"
          >
            <div className="relative aspect-square w-full">
              <Image
                src={release.cover}
                alt={release.title}
                fittingType="fill"
                className="absolute inset-0 h-full w-full"
              />
              <Image
                src={release.lineArt}
                alt=""
                aria-hidden="true"
                fittingType="fill"
                className="absolute inset-0 h-full w-full transition-opacity duration-500 group-hover:opacity-0"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="font-heading text-base font-light leading-tight tracking-[-0.02em]">
                  {release.title}
                </h2>
                <span className="meta shrink-0 transition-colors duration-300 group-hover:text-background/60">
                  {release.year}
                </span>
              </div>
              <p className="meta transition-colors duration-300 group-hover:text-background/60">
                {release.credit}
              </p>
            </div>
          </button>
        ))}
      </div>

      {mixtapes.length > 0 && (
        <>
          <div className="hairline border-b px-5 py-6 md:px-8">
            <h2 className="meta">Mixtapes</h2>
          </div>
          <div className="grid grid-cols-1 items-start md:grid-cols-2">
            {mixtapes.map((mixtape) => (
              <div key={mixtape.url} className="relative flex flex-col">
                <MixtapeTile
                  mixtape={mixtape}
                  playingUrl={playingUrl}
                  onPlay={setPlayingUrl}
                  expandable={!!mixtape.tracks?.length}
                  expanded={openSet === mixtape.url}
                  onToggle={() => setOpenSet(openSet === mixtape.url ? null : mixtape.url)}
                />
                {openSet === mixtape.url &&
                  mixtape.tracks?.map((track) => (
                    <MixtapeTile
                      key={track.url}
                      mixtape={track}
                      playingUrl={playingUrl}
                      onPlay={setPlayingUrl}
                      nested
                    />
                  ))}
              </div>
            ))}
          </div>
        </>
      )}
    </PageShell>
  );
}