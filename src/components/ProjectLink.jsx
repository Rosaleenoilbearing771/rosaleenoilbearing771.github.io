import { cn } from "@/lib/utils";

export default function ProjectLink({ item, index, variant = "row" }) {
  const isPanel = variant === "panel";
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "group hairline flex min-h-[34vh] flex-col justify-between gap-10 border-b p-6 transition-colors duration-300 hover:bg-foreground hover:text-background md:p-10",
        isPanel ? "md:min-h-[62vh] md:border-r" : "md:min-h-[26vh]"
      )}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors duration-300 group-hover:text-background/60">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h2 className="font-heading text-[clamp(1.9rem,6vw,3.6rem)] font-light leading-[0.92] tracking-[-0.03em]">
          {item.name}
        </h2>
        <p className="mt-3 max-w-md font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground transition-colors duration-300 group-hover:text-background/60">
          {item.note}
        </p>
      </div>
      <span className="self-end font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-background">
        {item.where} ↗
      </span>
    </a>
  );
}