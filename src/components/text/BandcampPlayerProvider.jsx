import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

const BandcampPlayerContext = createContext(null);

export function useBandcampPlayer() {
  return useContext(BandcampPlayerContext);
}

const embedUrl = (albumId) =>
  `https://bandcamp.com/EmbeddedPlayer/album=${albumId}/size=large/bgcol=0f0f0f/linkcol=9a9a9a/tracklist=true/artwork=large/transparent=true/`;

// Keeps one Bandcamp iframe alive for the whole session so playback survives
// route changes: inline over the page slot while it exists, a slim line on the
// right edge once it does not.
export default function BandcampPlayerProvider({ children }) {
  const [track, setTrack] = useState(null);
  const [docked, setDocked] = useState(true);
  const [box, setBox] = useState(null);
  const slotRef = useRef(null);

  const measure = useCallback(() => {
    const el = slotRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setBox((prev) => {
      const next = {
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        height: rect.height,
      };
      const same =
        prev &&
        prev.top === next.top &&
        prev.left === next.left &&
        prev.width === next.width &&
        prev.height === next.height;
      return same ? prev : next;
    });
  }, []);

  const mount = useCallback(
    (albumId, title, el) => {
      setTrack((current) => (current?.albumId === albumId ? current : { albumId, title }));
      slotRef.current = el;
      setDocked(false);
      measure();
      return () => {
        if (slotRef.current === el) slotRef.current = null;
        setDocked(true);
      };
    },
    [measure]
  );

  const stop = useCallback(() => {
    setTrack(null);
    setBox(null);
  }, []);

  useEffect(() => {
    if (docked) return undefined;
    measure();
    window.addEventListener("resize", measure);
    const parent = slotRef.current?.parentElement;
    const observer = parent ? new ResizeObserver(measure) : null;
    if (parent) observer.observe(parent);
    return () => {
      window.removeEventListener("resize", measure);
      observer?.disconnect();
    };
  }, [docked, measure]);

  return (
    <BandcampPlayerContext.Provider value={{ mount, track, stop }}>
      {children}
      <PlayerLayer track={track} docked={docked} box={box} onStop={stop} />
    </BandcampPlayerContext.Provider>
  );
}

function PlayerLayer({ track, docked, box, onStop }) {
  if (!track) return null;
  const inline = !docked && box;

  return (
    <div
      style={
        inline
          ? {
              position: "absolute",
              top: `${box.top}px`,
              left: `${box.left}px`,
              width: `${box.width}px`,
              height: `${box.height}px`,
            }
          : undefined
      }
      className={
        inline
          ? "z-30"
          : "hairline fixed right-4 top-1/2 z-50 flex max-w-[calc(100vw-2rem)] -translate-y-1/2 items-center gap-3 border bg-background px-3 py-2"
      }
    >
      {inline ? null : (
        <div className="flex items-center gap-3">
          <span className="truncate font-mono text-[10px] uppercase tracking-[0.18em]">
            ▶ {track.title}
          </span>
          <button
            type="button"
            onClick={onStop}
            aria-label="Close player"
            className="shrink-0 font-mono text-[13px] leading-none text-muted-foreground transition-colors hover:text-foreground"
          >
            ×
          </button>
        </div>
      )}
      <iframe
        key={`player-${track.albumId}`}
        title={track.title}
        src={embedUrl(track.albumId)}
        className={inline ? "h-full w-full border-0" : "pointer-events-none absolute h-px w-px opacity-0"}
        allow="autoplay"
        aria-hidden={inline ? undefined : true}
      />
    </div>
  );
}