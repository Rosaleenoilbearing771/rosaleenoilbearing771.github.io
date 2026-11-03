import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em]"
    >
      {[
        { code: "en", label: "EN" },
        { code: "es", label: "ES" },
      ].map((item, i) => (
        <span key={item.code} className="flex items-center gap-1.5">
          {i > 0 ? <span aria-hidden className="text-muted-foreground/40">/</span> : null}
          <button
            type="button"
            onClick={() => setLang(item.code)}
            aria-pressed={lang === item.code}
            className={cn(
              "py-1 transition-colors",
              lang === item.code
                ? "text-foreground underline decoration-from-font underline-offset-4"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {item.label}
          </button>
        </span>
      ))}
    </div>
  );
}