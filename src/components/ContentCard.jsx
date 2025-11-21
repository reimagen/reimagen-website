// src/components/ContentCard.jsx

export default function ContentCard({ video }) {
  const isYouTube =
    video.type === "video" &&
    (video.url?.includes("youtube.com") || video.url?.includes("youtu.be"));

  const fallbackImage = "https://via.placeholder.com/320x180?text=No+Preview";

  return (
    <div className="p-4 border border-slate-700 rounded shadow-sm bg-slate-800 text-white w-full max-w-xs">
      {/* MEDIA DISPLAY */}
      {isYouTube ? (
        <div className="aspect-video mb-2">
          <iframe
            src={video.url}
            title={video.title}
            className="w-full h-full rounded"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      ) : video.image ? (
        <img
          src={video.image}
          alt={video.title}
          className="w-full h-48 object-cover rounded mb-2"
        />
      ) : (
        <img
          src={fallbackImage}
          alt="No preview available"
          className="w-full h-48 object-cover rounded mb-2 opacity-40"
        />
      )}

      {/* TEXT & DETAILS */}
      <h3 className="font-bold text-lg mb-1">{video.title}</h3>

      {video.description && (
        <p className="text-sm text-gray-400 mb-2">{video.description}</p>
      )}

      {video.url && !isYouTube && (
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-rose-400 underline text-sm"
        >
          View
        </a>
      )}
    </div>
  );
}
