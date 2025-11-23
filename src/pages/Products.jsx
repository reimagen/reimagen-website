import { useState } from 'react';
import { Link } from 'react-router-dom';
import fitnessRecap from '../assets/fitness-recap.png';

export default function Products() {
  const products = {
    applications: [
      {
        title: "FitnessAI",
        description: "Set your goals and log workouts. Let AI analyze your progress and generate workout plans.",
        link: "https://studio--fitnessai-tsi8w.us-central1.hosted.app/signin",
        image: fitnessRecap,
        tools: ["Gemini", "Genkit", "Firebase Studio"],
        stack: ["Next.js (React) frontend", "TypeScript", "Firebase Auth + Firestore"],
      },
      {
        title: "Macros Voice Tracker",
        description: "Hands-free macros logging with live transcription. Speak your meals, get instant nutrition breakdowns.",
        link: "#",
        comingSoon: true,
        tools: ["Google AI Studio", "Google Live Voice API"],
        stack: ["Next.js (React)", "TypeScript", "Firebase Functions"],
      },
    ],
    agents: [
      {
        title: "Agent Org Architecture",
        description: "Coming in Dec: Upload your workflow. Let AI analyze and score automation compatibility. Create your agent org chart, A2A cards, and tool registries.",
        link: "#",
        comingSoon: true, // Add this flag to identify coming soon items
        tools: ["Codex", "Claude", "Cursor", "Google ADK", "Gemini"],
        stack: ["Next.js (React) frontend", "Python services (ADK)", "Firebase Auth + Firestore"],
      },
    ],
    other: [
      {
        title: "reImagen Website",
        description: "This site. Built in a few days with generous help from Codex and Antigravity Agents.",
        link: "https://github.com/reimagen/reimagen-website",
        tools: ["Cursor", "Codex", "Antigravity", "Sora"],
        stack: ["Vite + React", "Tailwind CSS", "Notion API", "Vercel"],
      },
    ],
    gpts: [
      {
        title: "YC Partners Office Hours",
        description: "YC partner board simulation giving direct, high-leverage startup feedback from Garry, Jessica, Michael, Dalton, Paul, Daniel, and Aaron.",
        link: "https://chatgpt.com/g/g-69050a13e2f081919fa4a1465e0cc273-yc-partners-office-hours",
      },
      {
        title: "a16z Partners Office Hours",
        description: "A16Z-style advisor giving direct partner takes and consensus startup feedback from Marc, Ben, Angela, Chris, Katherine, Connie, and Martin.",
        link: "https://chatgpt.com/g/g-6905072329f8819188ce714b9880984d-a16z-partners-office-hours",
      },
      {
        title: "Focus Group Simulator",
        description: "Launching a product or campaign on a budget? Run simulations across key demographics and social platforms.",
        link: "https://chatgpt.com/g/g-681683c622688191b4ef22413c711047-focus-group-simulator",
      },
      {
        title: "FitnessAI Companion GPT",
        description: "Pairs with FitnessAI. Upload InBody Scan pictures and dive into your stats. Learn about techniques, proper form, recovery, and nutrition.",
        link: "https://chatgpt.com/g/g-68b5eaa588208191b9482111e885291e-fitnessai-companion-coach",
      },
      {
        title: "Instant Book Club",
        description: "Chat with the author, pro critics like the NYT Book Review, and diverse voices across generations, ethnicity, and gender. Discuss key takeaways, current-world parallels, plot holes, etc.",
        link: "https://chatgpt.com/g/g-68167d995f648191a78e68b930ee6d0f-book-club",
      },
      {
        title: "Photographer's Travel Planner",
        description: "Discover the best photography spots and timing. Figure out if you really need to be up at 4am to snap that sunrise and the perfect spot to set up.",
        link: "https://chatgpt.com/g/g-67f7f3490ffc8191954b00ee1712581e-travel-planner-for-photography",
      },
    ],
  };

  const allProducts = [
    ...products.applications.map((p) => ({ ...p, category: 'Apps' })),
    ...products.agents.map((p) => ({ ...p, category: 'Agents' })),
    ...products.other.map((p) => ({ ...p, category: 'Other' })),
  ];
  const gptProducts = products.gpts;

  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = ['All', 'Apps', 'Agents', 'Other'];

  const categoryStyles = {
    Apps: {
      pill: 'bg-brand-lavender hover:bg-brand-lavender-dark text-black border-brand-lavender',
      link: 'bg-brand-lavender hover:bg-brand-lavender-dark text-black',
      text: 'text-brand-lavender'
    },
    Agents: {
      pill: 'bg-brand-pink hover:bg-brand-pink-dark text-black border-brand-pink',
      link: 'bg-brand-pink hover:bg-brand-pink-dark text-black',
      text: 'text-brand-pink'
    },
    Other: {
      pill: 'bg-brand-peach hover:bg-brand-peach-dark text-black border-brand-peach',
      link: 'bg-brand-peach hover:bg-brand-peach-dark text-black',
      text: 'text-brand-peach'
    },
    default: {
      pill: 'bg-gray-200 text-black border-gray-200',
      link: 'bg-white/10 hover:bg-white/20 text-white'
    }
  };

  const visibleProducts =
    selectedCategories.length === 0
      ? allProducts
      : allProducts.filter((product) => selectedCategories.includes(product.category));

  return (
    <section className="relative overflow-hidden -mt-24 pt-24 pb-48">
      <video
        src="/videos/monument-valley-aurora.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute left-0 right-0 top-[-10%] h-[120%] w-full object-cover brightness-100"
      />
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

      <div className="relative z-10 flex flex-col gap-8 px-4 py-16 md:px-10 lg:px-16">
      <header className="mb-8 text-center flex flex-col items-center space-y-2">
        <h2 className="text-3xl mb-1 tracking-[0.15em] uppercase text-center">Products</h2>
        <p className="brand-section-subhead text-brand-lavender text-sm">
          A roundup of Apps, Agents, and Custom GPTs.
        </p>
      </header>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              if (category === 'All') {
                setSelectedCategories([]);
                return;
              }
              setSelectedCategories((prev) =>
                prev.includes(category)
                  ? prev.filter((c) => c !== category)
                  : [...prev, category]
              );
            }}
            className={`brand-pill ${
              category === 'All'
                ? selectedCategories.length === 0
                  ? categoryStyles.default.pill
                  : 'bg-gray-800 text-gray-200 border-gray-700 hover:bg-gray-700'
                : selectedCategories.includes(category)
                  ? (categoryStyles[category]?.pill || categoryStyles.default.pill)
                  : 'bg-gray-800 text-gray-200 border-gray-700 hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Horizontal carousel */}
      <div className="overflow-x-auto pb-4 products-scroll scrollbar-lavender">
        <div className="flex gap-4 snap-x snap-mandatory">
          {visibleProducts.map((product, index) => (
            <div
              key={`${product.title}-${index}`}
              className="brand-card min-w-[260px] max-w-xs text-white snap-center flex-shrink-0"
            >
              <div className="p-4 flex flex-col flex-grow">
                <h4 className={`text-lg font-semibold ${categoryStyles[product.category]?.text || 'text-white'}`}>
                  {product.title}
                </h4>
                <p
                  className={`text-xs uppercase tracking-wide mb-2 ${categoryStyles[product.category]?.text || 'text-gray-400'}`}
                >
                  {product.category === 'Apps'
                    ? 'App'
                    : product.category === 'Agents'
                      ? 'Agent'
                      : product.category}
                </p>
                <p className="text-sm text-gray-300 mb-4 flex-grow">
                  {product.description}
                </p>
                {product.tools && (
                  <p className="brand-section-subhead text-brand-lavender text-xs mb-3">
                    AI Tools: <span className="text-white">{product.tools.join(', ')}</span>
                  </p>
                )}
                {product.stack && (
                  <p className="brand-section-subhead text-brand-peach text-xs mb-3">
                    Stack: <span className="text-white">{product.stack.join(', ')}</span>
                  </p>
                )}
                <div className="mt-auto flex flex-col gap-3">
                  {product.category === 'Apps' && product.image && (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-32 rounded-lg object-cover"
                    />
                  )}
                  {product.category === 'Agents' || product.comingSoon ? (
                    <Link
                      to="/contact"
                      className={`brand-cta-sm ${categoryStyles.Agents.link}`}
                    >
                      Get Notified →
                    </Link>
                  ) : (
                    <a
                      href={product.link}
                      className={`brand-cta-sm ${
                        categoryStyles[product.category]?.link || categoryStyles.default.link
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                  {product.title === 'FitnessAI'
                    ? 'Sign Up →'
                    : product.category === 'Other'
                      ? 'GitHub Repo →'
                      : 'Try Product →'}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className="space-y-3">
        <h3 className="text-3xl mb-1 tracking-[0.15em] uppercase text-center">Custom GPTs</h3>
        <p className="brand-section-subhead text-brand-lavender text-sm text-center">
          Our favorite conversation partners, made with ChatGPT.<br />
          [Note: Requires ChatGPT account]
        </p>
        <div className="overflow-x-auto pb-8 pt-2 products-scroll scrollbar-lavender">
          <div className="flex gap-4 snap-x snap-mandatory">
            {gptProducts.map((product, index) => (
              <div
                key={`gpt-${product.title}-${index}`}
                className="brand-card min-w-[260px] max-w-xs text-white snap-center flex-shrink-0"
              >
                <div className="p-4 flex flex-col flex-grow">
                  <h4 className="text-lg font-semibold mb-2 text-brand-lavender">{product.title}</h4>
                  <p className="text-sm text-gray-300 mb-4 flex-grow">
                    {product.description}
                  </p>
                  <a
                    href={product.link}
                    className="brand-cta-sm bg-brand-lavender hover:bg-brand-lavender-dark text-black"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start Chat →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="h-16" aria-hidden="true" />
    </div>
    </section>
  );
}
