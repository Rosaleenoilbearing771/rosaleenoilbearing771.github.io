import { createFileRoute } from "@tanstack/react-router";
import { useSite } from "@/lib/i18n";
import PageShell from "@/components/PageShell";
import ContactLinks from "@/components/contact/ContactLinks";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Daniel Lofredo Rota" },
      { name: "description", content: "Messages and enquiries." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const site = useSite();
  const copy = site.ui.contact;

  return (
    <PageShell section={site.ui.sections.contact}>
      <div className="px-5 py-10 md:px-10 md:py-14">
        <h1 className="font-heading text-[clamp(1.9rem,4.4vw,2.9rem)] font-light leading-none tracking-[-0.03em]">
          {copy.title}
        </h1>
        <p className="mt-5 max-w-sm text-[1.0625rem] leading-[1.7] text-foreground/80">{copy.intro}</p>

        <div className="max-w-md">
          <ContactLinks links={site.links} />
        </div>
      </div>
    </PageShell>
  );
}