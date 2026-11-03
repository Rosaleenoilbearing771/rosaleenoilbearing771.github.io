import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { content } from "@/content/site";
import { useSite } from "@/lib/i18n";
import PillarTile from "@/components/hub/PillarTile";
import PaintStrokes from "@/components/hub/PaintStrokes";
import PastelX from "@/components/hub/PastelX";
import SplatField from "@/components/hub/SplatField";
import SiteFooter from "@/components/SiteFooter";
import LangToggle from "@/components/LangToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: content.en.name },
      { name: "description", content: "Music, podcasts and text. Quito, Ecuador." },
    ],
  }),
  component: Hub,
});

function Hub() {
  const site = useSite();
  const ui = site.ui;

  return (
    <div className="relative flex min-h-dvh flex-col">
      <SplatField className="pointer-events-none absolute inset-0 z-10" />
      <header className="hairline flex h-14 items-center justify-between gap-4 border-b px-5 md:px-8">
        <h1 className="font-mono text-[11px] uppercase tracking-[0.24em]">{site.name}</h1>
        <div className="flex items-center gap-5">
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            {site.place}
          </span>
          <LangToggle />
        </div>
      </header>

      <motion.main
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } } }}
        className="relative grid flex-1 grid-cols-1 md:grid-cols-12 md:grid-rows-2"
      >
        <PillarTile
          className="md:col-span-5"
          index="01"
          label={ui.nav.quixosis}
          meta={site.music[0].note}
          to="/quixosis"
          art={<PastelX className="h-24 w-24 md:h-32 md:w-32" />}
        />
        <PillarTile
          className="md:col-span-4"
          index="02"
          label={ui.nav.caife}
          meta={site.caife.note}
          to="/caife"
        />
        <PillarTile
          className="md:col-span-3"
          index="03"
          label={ui.nav.ambien}
          meta={site.music[1].note}
          to="/ambien"
        />
        <PillarTile
          className="md:col-span-3"
          index="04"
          label={ui.nav.podcasts}
          meta={site.podcasts.map((p) => p.name).join(" · ")}
          to="/podcasts"
        />
        <PillarTile
          className="md:col-span-3"
          index="05"
          label={ui.nav.text}
          meta={ui.hub.textMeta}
          to="/text"
        />
        <PillarTile
          className="md:col-span-3"
          index="06"
          label={ui.nav.about}
          meta={ui.hub.aboutMeta}
          to="/about"
        />
        <PillarTile
          className="md:col-span-3"
          index="07"
          label={ui.nav.contact}
          meta={ui.hub.contactMeta}
          to="/contact"
        />
        <PaintStrokes className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full md:block" />
      </motion.main>

      <SiteFooter />
    </div>
  );
}