import { useEffect, useState } from 'react';
import GalleryCarousel from "../components/GalleryCarousel";
import HeroIntro from '../components/toolkit/HeroIntro';
import galaxyPoster from '../assets/galaxy.jpg';

// Models used / planned for the gallery
const MODELS = ["Sora", "Veo"];
const FILTER_OPTIONS = ["All", ...MODELS, "Others"];
  const modelStyles = {
    Sora: 'bg-brand-lavender text-black hover:bg-brand-lavender-dark',
    Veo: 'bg-brand-pink text-black hover:bg-brand-pink-dark',
    Others: 'bg-brand-peach text-black hover:bg-brand-peach-dark'
  };

const filterButtonBase = 'brand-cta text-xs tracking-[0.2em] uppercase';

const galleryItems = [
  {
    order: 1,
    format: "Video",
    src: "/videos/creation-of-robot.mp4",
    alt: "Creation of Adam but a Robot instead of a man",
    caption: "Creation of Adam",
    model: "Minimax Hailuo 2",
  },
  {
    order: 2,
    format: "Video",
    src: "/videos/floating-dream.mp4",
    alt: "Floating by Futuristic Structures in Space",
    caption: "Into the Metaverse",
    model: "Sora",
  },
  {
    order: 3,
    format: "Video",
    src: "/videos/roco-genz-kling2.5.mp4", 
    alt: "A GenZ Girl Holding Cell Phone in Rococo Style",
    caption: "Rococo Goes 2025",
    model: "Kling 2.5",
  },
  {
    order: 4,
    format: "Video",
    src: "/videos/monument-valley-aurora.mp4",
    alt: "Northern Lights Over Monument Valley",
    caption: "Auroras in Monument Valley",
    model: "Sora",
  },
  {
    order: 5,
    format: "Video",
    src: "/videos/cloud-dog.mp4",
    alt: "Cloud Morphs Into a Dog",
    caption: "Watching the Clouds Go By",
    model: "Sora",
  },
  {
    order: 6,
    format: "Video",
    src: "/videos/robo-selfie-video.mp4", 
    alt: "An All-Star Robot Selfie of Movie Characters",
    caption: "That Oscars Selfie, Robo Version",
    model: "Seedance 1.0",
  },
  {
    order: 7,
    format: "Video",
    src: "/videos/candy-basil.mp4",
    alt: "A Candy Version of St. Basil's Cathedral in Moscow",
    caption: "St. Basil's in Candyland",
    model: "Sora",
  },
  {
    order: 8,
    format: "Video",
    src: "/videos/aurora-drone.mp4",
    alt: "Drone Flying Through Auroras",
    caption: "Night Flight Through the Auroras",
    model: "Sora",
  },
  {
    order: 9,
    format: "Video",
    src: "/videos/starry-night.mp4",
    alt: "Realistic Version of Starry Night Painting",
    caption: "Starry Night in Motion",
    model: "Sora",
  },
  {
    order: 10,
    format: "Video",
    src: "/videos/sandgrada-seedance1.0.mp4", 
    alt: "The Sagrada Familia as a Sandcastle",
    caption: "Sa(nd)grada Familia",
    model: "Seedance 1.0",
  },
  {
    order: 11,
    format: "Video",
    src: "/videos/pinky-brain.mp4",
    alt: "Pinky and the Brain style characters in an AI-generated scene",
    caption: "Same Thing We Do Every Night",
    model: "MiniMax Hailuo 02",
  },
  {
    order: 12,
    format: "Video",
    src: "/videos/yin-yang-cats.mp4",
    alt: "A Black and a White curled up in the shape of a yin-yang sign",
    caption: "Black Cat Energy",
    model: "Sora 2",
  },
];


export default function Gallery() {
  const [isGridVisible, setIsGridVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setIsGridVisible(true), 150);
    return () => clearTimeout(timeout);
  }, []);
  const [selectedModel, setSelectedModel] = useState("All");
  const orderedItems = [...galleryItems].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
  const matchesModel = (modelName, filter) =>
    modelName?.toLowerCase().startsWith(filter.toLowerCase());

  const filteredItems =
    selectedModel === "All"
      ? orderedItems
      : selectedModel === "Others"
        ? orderedItems.filter((item) => !MODELS.some((base) => matchesModel(item.model, base)))
        : orderedItems.filter((item) => matchesModel(item.model, selectedModel));

  return (
    <section className="relative -mt-24 pt-24 pb-24 overflow-hidden">
      <video
        src="/videos/space-drift-kling2.5.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster={galaxyPoster}
        className="fixed inset-0 w-full h-full object-cover brightness-75"
      />
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />

      <div className="relative z-10 px-4 py-16 md:px-10 lg:px-16">
        <HeroIntro
          title="Gallery"
          subhead="Swipe to explore a curated selection of GenAI media"
          titleClass="text-3xl mb-1 tracking-[0.15em] uppercase text-center"
          subheadClass="brand-section-subhead text-brand-lavender text-center"
          wrapperClass="mb-8 text-center flex flex-col items-center space-y-2"
          titleAs="h2"
          subheadAs="p"
        />

      {/* Model Filters */}
      <div className="mb-6 flex flex-wrap gap-2">
        <div className="flex flex-wrap gap-3">
          {FILTER_OPTIONS.map((model) => (
            <button
              key={model}
              onClick={() => setSelectedModel(model)}
            className={`${filterButtonBase} ${
              selectedModel === model
                ? model === 'All'
                  ? 'bg-gray-200 text-black'
                    : modelStyles[model] || 'bg-white/20 text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {model}
            </button>
          ))}
        </div>
      </div>


      <div className={`gallery-stack-animate ${isGridVisible ? 'is-visible' : ''}`}>
        <GalleryCarousel items={filteredItems} />
      </div>
      </div>
    </section>
  );
}
