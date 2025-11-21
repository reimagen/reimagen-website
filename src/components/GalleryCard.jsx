export default function GalleryCard({ item }) {
  return (
    <div className="brand-card overflow-hidden">
      {item.format === "Image" ? (
        <img 
          src={item.src} 
          alt={item.alt} 
          className="w-full aspect-[2/3] object-cover" 
        />
      ) : (
        <div className="relative w-full aspect-[2/3] bg-gray-700 flex items-center justify-center">
          <video 
            controls 
            className="w-full h-full object-cover"
            preload="metadata"
            muted
            playsInline
          >
          <source src={item.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
      )}
      <div className="p-4 space-y-1">
        <p className="text-white text-sm">{item.caption}</p>
        <p className="brand-section-subhead text-brand-lavender text-xs">
          Model: <span className="font-medium text-white">{item.model}</span>
        </p>
      </div>
    </div>
  );
}
