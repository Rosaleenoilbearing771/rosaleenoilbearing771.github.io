import { Link } from "@tanstack/react-router";
import { useSite } from "@/lib/i18n";

export default function SiteFooter() {
  const site = useSite();
  const nav = site.ui.nav;

  return (
    <footer className="hairline border-t">
      <div className="flex flex-col gap-4 px-5 py-5 md:flex-row md:items-center md:justify-between md:px-8">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          © {site.year} {site.name}
        </span>
        <nav
          aria-label={site.ui.footer.elsewhere}
          className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.2em]"
        >
          <Link to="/quixosis" className="text-muted-foreground transition-colors hover:text-foreground">
            {nav.quixosis}
          </Link>
          <Link to="/caife" className="text-muted-foreground transition-colors hover:text-foreground">
            {nav.caife}
          </Link>
          <Link to="/ambien" className="text-muted-foreground transition-colors hover:text-foreground">
            {nav.ambien}
          </Link>
          <Link to="/podcasts" className="text-muted-foreground transition-colors hover:text-foreground">
            {nav.podcasts}
          </Link>
          <Link to="/text" className="text-muted-foreground transition-colors hover:text-foreground">
            {nav.text}
          </Link>
          <Link to="/about" className="text-muted-foreground transition-colors hover:text-foreground">
            {nav.about}
          </Link>
          <Link to="/contact" className="text-muted-foreground transition-colors hover:text-foreground">
            {nav.contact}
          </Link>
        </nav>
      </div>
    </footer>
  );
}