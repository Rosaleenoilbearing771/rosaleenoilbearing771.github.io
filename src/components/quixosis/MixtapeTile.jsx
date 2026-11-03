import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { cn } from "@/lib/utils";

const embedUrl = (url) =>
  `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff2f92&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false`;

// One playable row in the black-and-white mixtape grid. The SoundCloud widget
// stays invisible and is only loaded once the row is played; the tile supplies
// the play button.
export default function MixtapeTile({
  mixtape,
  playingUrl,
  onPlay,
  nested = false,
  expandable = false,
  expanded = false,
  onToggle,
}) {
  const [armed, setArmed] = useState(false);
  const frameRef = useRef(null);
  const isPlaying = playingUrl === mixtape.url;

  const send = (method, attempt = 0) => {
    frameRef.current?.contentWindow?.postMessage(JSON.stringify({ method }), "*");
    // The widget ignores commands until it is ready; repeat briefly until it is.
    if (attempt < 8) setTimeout(() => send(method, attempt + 1), 500);
  };

  useEffect(() => {
    if (!armed) return;
    send(isPlaying ? "play" : "pause");
  }, [isPlaying, armed]);

  const toggle = () => {
    if (expandable && !expanded) onToggle();
    if (isPlaying) {
      onPlay(null);
      return;
    }
    setArmed(true);
    onPlay(mixtape.url);
  };

  return (
    <div
      className={cn(
        "group hairline relative flex items-center gap-4 border-b border-r p-4",
        nested && "gap-3 py-3 pl-12"
      )}
    >
      <button
        type="button"
        onClick={toggle}
        aria-label={isPlaying ? `Pause ${mixtape.title}` : `Play ${mixtape.title}`}
        className={cn(
          "hairline flex shrink-0 items-center justify-center border transition-colors duration-300 hover:bg-foreground hover:text-background",
          nested ? "h-10 w-10" : "h-14 w-14"
        )}
      >
        {isPlaying ? (
          <Pause className="h-4 w-4" strokeWidth={1.5} />
        ) : (
          <Play className="h-4 w-4" strokeWidth={1.5} />
        )}
      </button>

      <div className="flex min-w-0 flex-1 flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3
          className={cn(
            "font-heading font-light leading-tight tracking-[-0.02em] transition-colors duration-300 group-hover:text-highlight",
            nested ? "text-xs" : "text-sm"
          )}
        >
          {mixtape.title}
        </h3>
        {mixtape.credit && (
          <p
            className={cn(
              "font-mono transition-colors duration-300 group-hover:text-highlight",
              nested ? "text-xs" : "text-sm"
            )}
          >
            {mixtape.credit}
          </p>
        )}
        {mixtape.year && (
          <p
            className={cn(
              "font-mono text-muted-foreground transition-colors duration-300 group-hover:text-highlight",
              nested ? "text-xs" : "text-sm"
            )}
          >
            {mixtape.year}
          </p>
        )}
        {expandable && (
          <p
            className={cn(
              "font-mono text-muted-foreground transition-colors duration-300 group-hover:text-highlight",
              nested ? "text-xs" : "text-sm"
            )}
          >
            {mixtape.tracks.length} tracks
          </p>
        )}
      </div>

      {expandable && (
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          aria-label={expanded ? "Hide tracks" : "Show tracks"}
          className="hairline meta shrink-0 border px-2 py-1 transition-colors duration-300 hover:bg-foreground hover:text-background"
        >
          {expanded ? "−" : "+"}
        </button>
      )}

      <a
        href={mixtape.url}
        target="_blank"
        rel="noreferrer"
        className="meta shrink-0 transition-colors hover:text-foreground"
        aria-label="SoundCloud"
      >
        ↗
      </a>

      {armed && (
        <iframe
          ref={frameRef}
          title={mixtape.title}
          src={embedUrl(mixtape.url)}
          allow="autoplay; encrypted-media"
          aria-hidden="true"
          tabIndex={-1}
          className="pointer-events-none absolute h-px w-px opacity-0"
        />
      )}
    </div>
  );
}