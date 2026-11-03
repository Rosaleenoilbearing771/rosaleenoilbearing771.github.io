import { useState } from "react";

const rowClass =
  "flex w-full items-center justify-between py-4 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground";

export default function ContactLinks({ links }) {
  const [open, setOpen] = useState(null);

  return (
    <ul className="hairline mt-10 border-t">
      {links.map((link) =>
        link.children ? (
          <li key={link.label} className="hairline border-b">
            <button
              type="button"
              aria-expanded={open === link.label}
              onClick={() => setOpen((prev) => (prev === link.label ? null : link.label))}
              className={rowClass}
            >
              {link.label}
              <span aria-hidden>{open === link.label ? "−" : "+"}</span>
            </button>
            {open === link.label ? (
              <ul className="hairline mb-3 border-l pl-4">
                {link.children.map((child) => (
                  <li key={child.label}>
                    <a
                      href={child.href}
                      target={child.href.startsWith("mailto:") ? undefined : "_blank"}
                      rel="noreferrer"
                      className="flex items-center justify-between py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/70 transition-colors hover:text-foreground"
                    >
                      {child.label}
                      <span aria-hidden>↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ) : (
          <li key={link.label} className="hairline border-b">
            <a href={link.href} target="_blank" rel="noreferrer" className={rowClass}>
              {link.label}
              <span aria-hidden>↗</span>
            </a>
          </li>
        )
      )}
    </ul>
  );
}