import { useState } from 'react';
import GalleryCard from "../components/GalleryCard";
import sandgrada from '../assets/sandgrada.png';
import genZ from '../assets/genz-coco.png';

// Models used / planned for the gallery
const MODELS = ["Sora", "Veo"];
const FILTER_OPTIONS = ["All", ...MODELS, "Others"];
const modelStyles = {
  Sora: 'bg-brand-lavender text-black hover:bg-brand-lavender-dark',
  Veo: 'bg-brand-pink text-black hover:bg-brand-pink-dark',
  Others: 'bg-brand-peach text-black hover:bg-brand-peach-dark'
};

const galleryItems = [
  {
    format: "Video",
    src: "/videos/floating-dream.mp4",
    alt: "Floating by Futuristic Structures in Space",
    caption: "Into the Metaverse",
    model: "Sora",
  },
  {
    format: "Image",
    src: genZ, 
    alt: "A GenZ Girl Holding Cell Phone in Rococo Style",
    caption: "Rococo Goes 2025",
    model: "Sora",
  },
  {
    format: "Video",
    src: "/videos/cloud-dog.mp4",
    alt: "Cloud Morphs Into a Dog",
    caption: "Watching the Clouds Go By",
    model: "Sora",
  },
  {
    format: "Video",
    src: "/videos/robo-selfie-video.mp4", 
    alt: "An All-Star Robot Selfie of Movie Characters",
    caption: "That Oscars Selfie, Robo Version",
    model: "Seedance 1.0",
  },
  {
    format: "Video",
    src: "/videos/candy-basil.mp4",
    alt: "A Candy Version of St. Basil's Cathedral in Moscow",
    caption: "St. Basil's in Candyland",
    model: "Sora",
  },
  {
    format: "Video",
    src: "/videos/aurora-drone.mp4",
    alt: "Drone Flying Through Auroras",
    caption: "Night Flight Through the Auroras",
    model: "Sora",
  },
  {
    format: "Image",
    src: sandgrada, 
    alt: "The Sagrada Familia as a Sandcastle",
    caption: "Sa(nd)grada Familia",
    model: "Sora",
  },
  {
    format: "Video",
    src: "/videos/starry-night.mp4",
    alt: "Realistic Version of Starry Night Painting",
    caption: "Starry Night in Motion",
    model: "Sora",
  },
  {
    format: "Video",
    src: "/videos/pinky-brain.mp4",
    alt: "Pinky and the Brain style characters in an AI-generated scene",
    caption: "Same Thing We Do Every Night",
    model: "MiniMax Hailuo 02",
  },
  {
    format: "Video",
    src: "/videos/yin-yang-cats.mp4",
    alt: "A Black and a White curled up in the shape of a yin-yang sign",
    caption: "Black Cat Energy",
    model: "Sora 2",
  },
];


export default function Gallery() {
  const [selectedModel, setSelectedModel] = useState("All");
  const matchesModel = (modelName, filter) =>
    modelName?.toLowerCase().startsWith(filter.toLowerCase());

  const filteredItems =
    selectedModel === "All"
      ? galleryItems
      : selectedModel === "Others"
        ? galleryItems.filter((item) => !MODELS.some((base) => matchesModel(item.model, base)))
        : galleryItems.filter((item) => matchesModel(item.model, selectedModel));

  return (
    <section className="relative -mt-24 pt-24 pb-24">
      <div className="px-4 py-16 md:px-10 lg:px-16">
        <header className="mb-8 text-center flex flex-col items-center space-y-2">
          <h2 className="text-3xl mb-1 tracking-[0.15em] uppercase text-center">Gallery</h2>
          <p className="brand-section-subhead text-brand-lavender text-center">A curated selection of GenAI media</p>
        </header>

      {/* Model Filters */}
      <div className="mb-6 flex flex-wrap gap-2">
        <div className="flex flex-wrap gap-3">
          {FILTER_OPTIONS.map((model) => (
            <button
              key={model}
              onClick={() => setSelectedModel(model)}
              className={`brand-pill ${
                selectedModel === model
                  ? model === 'All'
                    ? 'bg-gray-200 text-black'
                    : modelStyles[model] || 'bg-white/20 text-white'
                  : 'brand-pill-inactive'
              }`}
            >
              {model}
            </button>
          ))}
        </div>
      </div>


      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <GalleryCard key={item.src} item={item} />
        ))}
      </div>
      </div>
    </section>
  );
}
