import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export const tileVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function PillarTile({ index, label, meta, to, className, art }) {
  return (
    <motion.div variants={tileVariants} className={cn("hairline border-b border-r", className)}>
      <Link
        to={to}
        className="group relative flex h-full min-h-[136px] flex-col justify-between gap-8 overflow-hidden p-5 transition-colors duration-300 hover:bg-foreground hover:text-background md:min-h-[180px] md:p-7"
      >
        {art ? (
          <div className="pointer-events-none absolute right-6 top-6 z-10 text-current">{art}</div>
        ) : null}
        <div className="relative z-20 flex items-start justify-between">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors duration-300 group-hover:text-background/60">
            {index}
          </span>
          <span
            aria-hidden
            className="font-mono text-xs text-muted-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:text-background"
          >
            ↗
          </span>
        </div>
        <div className="relative z-20">
          <h2 className="font-heading text-[clamp(1.9rem,5.2vw,3.4rem)] font-light leading-[0.92] tracking-[-0.03em]">
            {label}
          </h2>
          <p className="mt-3 font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted-foreground transition-colors duration-300 group-hover:text-background/60">
            {meta}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}