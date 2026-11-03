import { splotchPath, rng } from "@/components/hub/splotchPath";

// Tiny magenta, yellow and turquoise splotches scattered over the whole page.
const COLORS = ["#ff2f92", "#f4d71e", "#4ad9d9"];

const BLOBS = Array.from({ length: 18 }, (_, i) => {
  const rand = rng(i * 37 + 91);
  return {
    id: i,
    left: 2 + rand() * 94,
    top: 2 + rand() * 94,
    size: 5 + rand() * 9,
    opacity: 0.32 + rand() * 0.3,
    color: COLORS[i % COLORS.length],
    seed: i * 53 + 13,
  };
});

export default function SplatField({ className }) {
  return (
    <div aria-hidden="true" className={className}>
      {BLOBS.map((blob) => (
        <svg
          key={blob.id}
          viewBox="0 0 40 40"
          width={blob.size}
          height={blob.size}
          className="absolute"
          style={{ left: `${blob.left}%`, top: `${blob.top}%`, opacity: blob.opacity }}
        >
          <path d={splotchPath({ cx: 20, cy: 20, r: 17, seed: blob.seed })} fill={blob.color} />
        </svg>
      ))}
    </div>
  );
}