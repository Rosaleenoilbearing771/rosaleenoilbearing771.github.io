import { Link } from "@tanstack/react-router";
import { useSite } from "@/lib/i18n";
import SiteFooter from "@/components/SiteFooter";
import LangToggle from "@/components/LangToggle";

export default function PageShell({ section, children }) {
  const site = useSite();

  return (
    <div className="flex min-h-dvh flex-col">
      <header className="hairline sticky top-0 z-40 flex h-14 items-center justify-between border-b bg-background/85 px-5 backdrop-blur md:px-8">
        <Link
          to="/"
          className="font-mono text-[11px] uppercase tracking-[0.24em] text-foreground/90 transition-colors hover:text-foreground"
        >
          {site.name}
        </Link>
        <div className="flex items-center gap-5">
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            {section}
          </span>
          <LangToggle />
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}