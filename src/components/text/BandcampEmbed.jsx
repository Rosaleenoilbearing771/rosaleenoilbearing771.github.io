import { useEffect, useRef } from "react";
import { useBandcampPlayer } from "@/components/text/BandcampPlayerProvider";

// Page slot for the persistent player: the iframe itself lives in the provider
// so audio keeps running after navigation.
export default function BandcampEmbed({ albumId, title }) {
  const player = useBandcampPlayer();
  const mount = player?.mount;
  const ref = useRef(null);

  useEffect(() => {
    if (!albumId || !mount) return undefined;
    return mount(albumId, title, ref.current);
  }, [albumId, title, mount]);

  if (!albumId) return null;

  return (
    <div className="hairline my-8 border-t pt-6">
      <div ref={ref} className="h-[472px] w-full" />
    </div>
  );
}