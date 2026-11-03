// A few sparse oil-bar marks painted across the whole hub grid, so they run
// over the hairlines and spill from one tile into the next.
import { rng, splotchPath } from "@/components/hub/splotchPath";

const YELLOW = "#f4d71e";
const MAGENTA = "#ff2f92";
const TURQUOISE = "#4ad9d9";

// A single dragging mark: tapered at both ends, wobbling edges, uneven width.
function bar({ x1, y1, x2, y2, w, seed }) {
  const rand = rng(seed);
  const steps = 8;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len;
  const ny = dx / len;
  const left = [];
  const right = [];

  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    // Sleek tips: the mark thins to a point at both ends and holds its bulk
    // in the middle, with the wobble fading out toward the tips.
    const taper = Math.pow(Math.sin(Math.PI * t), 0.45);
    const half = (w / 2) * taper * (0.9 + rand() * 0.2);
    const wobble = (rand() - 0.5) * w * 0.4 * taper;
    const cx = x1 + dx * t + nx * wobble;
    const cy = y1 + dy * t + ny * wobble;
    left.push(`${(cx + nx * half).toFixed(1)} ${(cy + ny * half).toFixed(1)}`);
    right.push(`${(cx - nx * half).toFixed(1)} ${(cy - ny * half).toFixed(1)}`);
  }

  return `M${left.join(" L")} L${right.reverse().join(" L")} Z`;
}

const MARKS = [
  { x1: 396, y1: 52, x2: 772, y2: 88, w: 19, color: YELLOW, seed: 3, opacity: 0.85 },
  { x1: 812, y1: 128, x2: 1128, y2: 96, w: 13, color: MAGENTA, seed: 11, opacity: 0.8 },
  { x1: 236, y1: 214, x2: 470, y2: 246, w: 15, color: TURQUOISE, seed: 27, opacity: 0.7 },
  { x1: 596, y1: 300, x2: 940, y2: 268, w: 21, color: MAGENTA, seed: 41, opacity: 0.8 },
  { x1: 1024, y1: 336, x2: 1168, y2: 300, w: 12, color: YELLOW, seed: 58, opacity: 0.8 },
  { x1: 118, y1: 372, x2: 322, y2: 348, w: 14, color: YELLOW, seed: 73, opacity: 0.75 },
  { x1: 690, y1: 24, x2: 846, y2: 40, w: 9, color: TURQUOISE, seed: 88, opacity: 0.6 },
];

const SPLOTCHES = [
  { cx: 786, cy: 92, r: 13, color: YELLOW, seed: 137, opacity: 0.85 },
  { cx: 806, cy: 134, r: 10, color: MAGENTA, seed: 211, opacity: 0.6 },
  { cx: 468, cy: 252, r: 8, color: TURQUOISE, seed: 263, opacity: 0.55 },
  { cx: 950, cy: 264, r: 7, color: MAGENTA, seed: 307, opacity: 0.5 },
];

export default function PaintStrokes({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 400"
      preserveAspectRatio="none"
      className={className}
    >
      {MARKS.map((mark) => (
        <g key={mark.seed}>
          <path d={bar(mark)} fill={mark.color} opacity={mark.opacity} />
          <path
            d={bar({ ...mark, y1: mark.y1 + 3, y2: mark.y2 + 3, w: mark.w * 0.42, seed: mark.seed + 7 })}
            fill={mark.color}
            opacity={mark.opacity * 0.4}
          />
        </g>
      ))}
      {SPLOTCHES.map((mark) => (
        <path
          key={mark.seed}
          d={splotchPath(mark)}
          fill={mark.color}
          opacity={mark.opacity}
        />
      ))}
    </svg>
  );
}