export default function VideoEmbed({ url }: { url: string | null }) {
  if (!url) return null;

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-border" style={{ paddingBottom: "56.25%" }}>
      <iframe
        src={url}
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Product demo video"
      />
    </div>
  );
}
