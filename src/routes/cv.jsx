import { createFileRoute } from "@tanstack/react-router";
import { useSite } from "@/lib/i18n";
import PageShell from "@/components/PageShell";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Daniel Lofredo Rota" },
      { name: "description", content: "Selected work." },
    ],
  }),
  component: CvPage,
});

function CvPage() {
  const site = useSite();

  return (
    <PageShell section={site.ui.sections.cv}>
      <div className="px-5 py-10 md:px-10 md:py-14">
        <h1 className="font-heading text-[clamp(1.9rem,5vw,3rem)] font-light leading-none tracking-[-0.03em]">
          {site.ui.cv.title}
        </h1>
        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {site.name} — {site.place}
        </p>

        <ul className="hairline mt-10 border-t">
          {site.cv.map((entry) => (
            <li
              key={entry.title}
              className="hairline grid gap-2 border-b py-5 md:grid-cols-[5rem_1fr_13rem] md:items-baseline md:gap-6"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">{entry.year}</span>
              <div>
                <a
                  href={entry.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.9375rem] leading-snug underline-offset-4 hover:underline"
                >
                  {entry.title}
                </a>
                {entry.description ? (
                  <p className="mt-1 font-mono text-[10px] tracking-[0.16em] text-muted-foreground">
                    {entry.description}
                  </p>
                ) : null}
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground md:text-right">
                {entry.role}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {site.ui.cv.note}
        </p>
      </div>
    </PageShell>
  );
}