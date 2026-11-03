import { createFileRoute } from "@tanstack/react-router";
import { useSite } from "@/lib/i18n";
import PageShell from "@/components/PageShell";
import ProjectLink from "@/components/ProjectLink";

export const Route = createFileRoute("/podcasts")({
  head: () => ({
    meta: [
      { title: "Podcasts — Daniel Lofredo Rota" },
      { name: "description", content: "Sonido Perdido, Canal Confidente, Estado Fósil." },
    ],
  }),
  component: PodcastsPage,
});

function PodcastsPage() {
  const site = useSite();

  return (
    <PageShell section={site.ui.sections.podcasts}>
      <div>
        {site.podcasts.map((item, i) => (
          <ProjectLink key={item.name} item={item} index={i} />
        ))}
      </div>
    </PageShell>
  );
}