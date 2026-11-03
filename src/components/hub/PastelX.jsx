import { useId } from "react";

// A purple X brushed in oil pastel: rough displaced edges, a speckled grain
// layer masked to the strokes, and a couple of dry-brush veins.
const PURPLE = "#8b6cf0";
const PURPLE_DEEP = "#5f45c4";

const ARMS = ["M20 24 L100 100", "M98 22 L22 98"];

export default function PastelX({ className }) {
  const uid = useId().replace(/[:]/g, "");
  const rough = `rough-${uid}`;
  const grain = `grain-${uid}`;
  const mask = `mask-${uid}`;

  return (
    <svg aria-hidden="true" viewBox="0 0 120 120" fill="none" className={className}>
      <defs>
        <filter id={rough} x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence type="fractalNoise" baseFrequency="0.62" numOctaves="3" seed="11" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="7" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id={grain} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" seed="5" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <mask id={mask} maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="120">
          <g stroke="#ffffff" strokeWidth="16" strokeLinecap="round" fill="none">
            {ARMS.map((d) => (
              <path key={d} d={d} />
            ))}
          </g>
        </mask>
      </defs>

      <g filter={`url(#${rough})`}>
        <g stroke={PURPLE} strokeWidth="14" strokeLinecap="round" fill="none" opacity="0.92">
          {ARMS.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <g stroke={PURPLE_DEEP} strokeWidth="3.2" strokeLinecap="round" fill="none" opacity="0.55">
          <path d="M24 27.5 L97 96" />
          <path d="M95 26 L26 94" />
        </g>
      </g>

      <g mask={`url(#${mask})`} opacity="0.34">
        <rect x="0" y="0" width="120" height="120" filter={`url(#${grain})`} />
      </g>
      <g mask={`url(#${mask})`} opacity="0.5">
        <g stroke="#ffffff" strokeWidth="1.1" strokeLinecap="round" fill="none">
          <path d="M26 32 L94 98" />
          <path d="M93 30 L28 94" />
        </g>
      </g>
    </svg>
  );
}