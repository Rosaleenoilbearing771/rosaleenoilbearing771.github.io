import { Link } from "@tanstack/react-router";
import { Image } from "@/components/ui/image";
import { formatPostDate } from "@/lib/dates";
import { useSite } from "@/lib/i18n";

const rowClass =
  "group flex items-start gap-5 px-5 py-6 transition-colors duration-300 hover:bg-foreground hover:text-background md:gap-8 md:px-8 md:py-8";

export default function PostRow({ post, index }) {
  const site = useSite();

  const body = (
    <>
      <span className="mt-1 font-mono text-[10px] tracking-[0.22em] text-muted-foreground transition-colors group-hover:text-background/60">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="min-w-0 flex-1">
        <h2 className="font-heading text-[clamp(1.4rem,3.6vw,2.1rem)] font-light leading-[1.02] tracking-[-0.02em]">
          {post.title}
        </h2>
        {post.dek ? (
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-background/60">
            {post.dek}
          </p>
        ) : null}
        {post.published_date || post.audio_url ? (
          <span className="mt-3 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-background/60">
            {post.published_date ? formatPostDate(post.published_date, site.lang) : ""}
            {post.audio_url ? `${post.published_date ? " · " : ""}audio` : ""}
          </span>
        ) : null}
      </div>
      {post.cover_image ? (
        <Image
          src={post.cover_image}
          alt=""
          fittingType="fill"
          className="mt-1 hidden h-16 w-24 shrink-0 object-cover grayscale md:block"
        />
      ) : null}
    </>
  );

  // Entries that live elsewhere (external_url) open in a new tab; the rest are journal pages.
  return (
    <li className="hairline border-b">
      {post.external_url ? (
        <a href={post.external_url} target="_blank" rel="noreferrer" className={rowClass}>
          {body}
        </a>
      ) : (
        <Link to="/text/$slug" params={{ slug: post.slug }} className={rowClass}>
          {body}
        </Link>
      )}
    </li>
  );
}