import { useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { useSite } from "@/lib/i18n";

const clock = (seconds) => {
  if (!Number.isFinite(seconds)) return "0:00";
  const total = Math.floor(seconds);
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
};

export default function AudioTransport({ src, title }) {
  const site = useSite();
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  const toggle = () => {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) el.play();
    else el.pause();
  };

  const percent = duration > 0 ? Math.min(100, (current / duration) * 100) : 0;

  return (
    <div className="hairline sticky bottom-0 z-30 border-t bg-background/95 backdrop-blur">
      <div className="flex items-center gap-4 px-5 py-3 md:px-8">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? (site.lang === "es" ? "Pausar" : "Pause") : site.lang === "es" ? "Reproducir" : "Play"}
          className="hairline flex h-11 w-11 shrink-0 items-center justify-center border transition-colors hover:bg-foreground hover:text-background"
        >
          {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-4">
            <span className="truncate font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {title || "Audio"}
            </span>
            <span className="font-mono text-[10px] tabular-nums text-muted-foreground">
              {clock(current)} / {clock(duration)}
            </span>
          </div>
          <div className="mt-2 h-px w-full bg-border/60">
            <div className="h-px bg-foreground" style={{ width: `${percent}%` }} />
          </div>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
      />
    </div>
  );
}