import BandcampPlayerSlot from "@/components/text/BandcampPlayerSlot";

// Keeps the article's original inline Bandcamp embed while delegating the iframe
// to the app-level provider, so only one Bandcamp iframe exists and it survives
// TanStack Router navigation.
export default function BandcampEmbed({ albumId, title }) {
  if (!albumId) return null;

  return (
    <div className="hairline my-8 border-t pt-6">
      <BandcampPlayerSlot albumId={albumId} title={title} height={472} />
    </div>
  );
}
