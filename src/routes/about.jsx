import { createFileRoute, Link } from "@tanstack/react-router";
import { content } from "@/content/site";
import { useSite } from "@/lib/i18n";
import PageShell from "@/components/PageShell";
import { Image } from "@/components/ui/image";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
    { title: "Info — Daniel Lofredo Rota" },
    { name: "description", content: content.en.bio[0] }]

  }),
  component: AboutPage
});

function AboutPage() {
  const site = useSite();

  return (
    <PageShell section={site.ui.sections.about}>
      <div className="grid md:grid-cols-2">
        <div className="hairline border-b md:border-b-0 md:border-r">
          <Image
            src={site.pressPhoto}
            alt={site.ui.about.photoAlt}
            fittingType="fill"
            className="h-[58vh] w-full object-cover grayscale md:sticky md:top-14 md:h-[calc(100dvh-3.5rem)]" />
          
        </div>

        <div className="px-5 py-10 md:px-10 md:py-14">
          <h1 className="font-heading text-[clamp(1.9rem,4.4vw,2.9rem)] font-light leading-[0.98] tracking-[-0.03em]">
            {site.name}
          </h1>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{site.place}</p>

          <div className="mt-8 max-w-xl space-y-5">
            {site.bio.map((paragraph, i) =>
            <p key={i} className="font-mono leading-[1.9] tracking-[0.2em] text-foreground/90 text-[11px] text-justify">
                {paragraph}
              </p>
            )}
          </div>

          <Link
            to="/cv"
            className="hairline mt-10 inline-flex h-12 items-center border px-6 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-foreground hover:text-background">
            
            CV —
          </Link>
        </div>
      </div>
    </PageShell>);

}