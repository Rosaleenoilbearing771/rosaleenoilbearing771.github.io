import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useSite } from "@/lib/i18n";
import { releases } from "@/content/quixosis";
import { formatPostDate } from "@/lib/dates";
import PageShell from "@/components/PageShell";
import BandcampPlayerSlot from "@/components/text/BandcampPlayerSlot";
import { Image } from "@/components/ui/image";

export const Route = createFileRoute("/quixosis/$slug")({
  loader: ({ params }) => {
    const release = releases.find((item) => item.slug === params.slug);
    if (!release) throw notFound();
    return release;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Release"} — Quixosis` },
      { name: "description", content: `${loaderData?.title}: ${loaderData?.credit}.` },
    ],
  }),
  component: ReleasePage,
});

function ReleasePage() {
  const release = Route.useLoaderData();
  const site = useSite();

  return (
    <PageShell section={site.ui.sections.quixosis}>
      <Link to="/quixosis" className="meta ml-5 mt-6 inline-block transition-colors hover:text-foreground md:ml-8">
        {site.ui.releases.back}
      </Link>

      <div className="grid gap-8 px-5 py-6 md:grid-cols-[minmax(0,360px)_1fr] md:gap-12 md:px-8 md:py-10">
        <Image
          src={release.cover}
          alt={release.title}
          fittingType="fill"
          className="hairline aspect-square w-full max-w-[360px] border"
        />

        <div className="flex flex-col justify-between gap-8">
          <div>
            <p className="meta">{formatPostDate(release.date, site.lang)}</p>
            <h1 className="mt-4 font-heading text-[clamp(1.9rem,5vw,3.2rem)] font-light leading-[0.95] tracking-[-0.03em]">
              {release.title}
            </h1>
            <p className="meta mt-4">{release.credit}</p>
            <p className="mt-8 max-w-sm font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
              {site.ui.releases.hint}
            </p>
            <BandcampPlayerSlot
              albumId={release.albumId}
              title={release.title}
              height={400}
              tracklist={false}
              linkColor="ffffff"
              transparent={false}
              className="mt-4 max-w-md"
            />
          </div>

          <a
            href={release.bandcamp}
            target="_blank"
            rel="noopener noreferrer"
            className="hairline inline-flex w-fit items-center gap-3 border px-4 py-3 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background"
          >
            {site.ui.releases.open}
          </a>
        </div>
      </div>
    </PageShell>
  );
}
