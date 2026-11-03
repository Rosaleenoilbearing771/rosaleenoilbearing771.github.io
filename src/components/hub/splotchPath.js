// A small irregular blob path — the shape of an oil bar pressed down on the page.
export function rng(seed) {
  let value = seed * 9301 + 49297;
  return () => {
    value = (value * 9301 + 49297) % 233280;
    return value / 233280;
  };
}

export function splotchPath({ cx, cy, r, seed }) {
  const rand = rng(seed);
  const points = 14;
  const coords = [];

  for (let i = 0; i < points; i += 1) {
    const angle = (i / points) * Math.PI * 2;
    const radius = r * (0.72 + rand() * 0.52);
    const wobble = 1 + (rand() - 0.5) * 0.12;
    coords.push(
      `${(cx + Math.cos(angle) * radius * wobble).toFixed(1)} ${(cy + Math.sin(angle) * radius * wobble * 0.82).toFixed(1)}`
    );
  }

  return `M${coords.join(" L")} Z`;
}