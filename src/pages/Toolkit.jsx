// src/pages/Toolkit.jsx
import { useEffect, useState } from 'react';
import ContentCard from '../components/ContentCard';

export default function Toolkit() {
  const [allVideos, setAllVideos] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/.netlify/functions/fetchNotion')
      .then((res) => res.json())
      .then((items) => {
        console.log("✅ Raw Notion items:", items);
        setAllVideos(items);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Frontend fetch error:", err);
        setLoading(false);
      });
  }, []);

  // ✅ Filtering and search
  const filteredVideos = allVideos.filter((video) => {
    if (!video || !video.title || !video.tag) return false;

    const matchesCategory = filter === "All" || video.tag === filter;
    const matchesSearch = video.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // ✅ Sort by date
  const sortedVideos = [...filteredVideos].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  const categories = ["All", "GPTs", "AI", "React"];
  const categoryStyles = {
    All: 'bg-gray-200 text-black border-gray-200',
    GPTs: 'bg-brand-lavender hover:bg-brand-lavender-dark text-black border-brand-lavender',
    AI: 'bg-brand-peach hover:bg-brand-peach-dark text-black border-brand-peach',
    React: 'bg-brand-pink hover:bg-brand-pink-dark text-black border-brand-pink'
  };

  const explorerStarter = [
    {
      name: 'ChatGPT',
      description: 'Generalist teammate for brainstorms, planning, and drafting copy. Use our starter prompts to get real work done.',
      link: 'https://chat.openai.com/',
      cta: 'Open ChatGPT'
    },
    {
      name: 'Claude',
      description: 'Great for strategy docs and nuance-heavy writing. Feed it PDFs or transcripts to summarize instantly.',
      link: 'https://claude.ai/',
      cta: 'Try Claude'
    },
    {
      name: 'Perplexity',
      description: 'Research co-pilot that cites sources. Ask for market scans, competitor comparisons, or customer research outlines.',
      link: 'https://www.perplexity.ai/',
      cta: 'Search with Perplexity'
    }
  ];

  const explorerRecipes = [
    {
      title: 'Launch Brief Generator',
      outcome: 'Go-to-market plan in minutes',
      description: 'Drop in product context and audience; get positioning, channels, and a kickoff checklist.',
      tools: 'ChatGPT + Perplexity',
      link: 'https://chat.openai.com/'
    },
    {
      title: 'Executive Digest',
      outcome: 'Summaries that sound human',
      description: 'Paste meeting notes or research. Claude rewrites them into exec-ready updates with action items.',
      tools: 'Claude',
      link: 'https://claude.ai/'
    },
    {
      title: 'Campaign Brainstorm',
      outcome: 'Creative concepts + copy set',
      description: 'Perplexity gathers cultural signals, ChatGPT drafts scripts, and Midjourney mood boards visuals.',
      tools: 'Perplexity + ChatGPT + Midjourney',
      link: 'https://www.midjourney.com/'
    }
  ];

  const builderStack = [
    {
      name: 'Cursor',
      description: 'AI-native IDE with repo-aware chat, refactors, and PR drafting. My default for daily shipping.',
      link: 'https://www.cursor.com/'
    },
    {
      name: 'OpenAI o1 & Codex',
      description: 'Reasoning-forward models we use to blueprint agents, tooling, and eval harnesses.',
      link: 'https://platform.openai.com/'
    },
    {
      name: 'GitHub Copilot',
      description: 'Great for instant completions and inline explanations across large teams.',
      link: 'https://github.com/features/copilot'
    }
  ];

  const builderBoosters = [
    {
      title: 'Prototype UI in minutes',
      description: 'Prompt v0 for React scaffolds, refine layout in Figma, then finish in Cursor.',
      tools: 'v0 + Figma + Cursor',
      link: 'https://v0.dev/'
    },
    {
      title: 'Agent orchestration',
      description: 'LangGraph + OpenAI for stateful agents, layered with evals and analytics.',
      tools: 'LangGraph + OpenAI',
      link: 'https://langchain.com/langgraph'
    },
    {
      title: 'Voice + multimodal demos',
      description: 'Build realtime assistants using GPT-4o Realtime API for tactile product demos.',
      tools: 'GPT-4o Realtime',
      link: 'https://platform.openai.com/docs/guides/realtime'
    }
  ];

  const cardBase = 'brand-card';
  const cardBaseCompact = 'brand-card-compact';
  const scrollRow = 'brand-scroll-row';
  const pillInactive = 'brand-pill-inactive';
  const sectionKicker = 'brand-section-kicker';
  const ctaBase = 'brand-cta';
  const smallCtaBase = 'brand-cta-sm';

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <section className="relative -mt-24 pt-24 pb-24">
      <div className="px-4 py-16 md:px-10 lg:px-16 space-y-12">
        <header className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-3xl mb-4 tracking-[0.15em] uppercase text-center">Toolkit</p>
          <p className="brand-section-subhead text-brand-lavender text-center">
            We try every AI product so you don't have to. <br></br>Pick your starting point, and start building.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#explorer" className={`${ctaBase} bg-brand-lavender hover:bg-brand-lavender-dark text-black`}>
              I&apos;m new to AI
            </a>
            <a href="#builder" className={`${ctaBase} bg-brand-pink hover:bg-brand-pink-dark text-black`}>
              I build with code
            </a>
          </div>
        </header>

        <section id="explorer" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className={`${sectionKicker} text-brand-lavender`}>Non-technical explorers</p>
              <h2 className="text-2xl font-semibold">Starter pack for operators who want wins today</h2>
            </div>
            <p className="text-gray-300 max-w-lg">
              Think in use cases, not novelty. These tools help you ship strategies, recaps, and campaigns—not weather small talk.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {explorerStarter.map((tool) => (
              <div key={tool.name} className={cardBase}>
                <h3 className="text-xl font-semibold">{tool.name}</h3>
                <p className="text-sm text-gray-300 flex-grow">{tool.description}</p>
                <a href={tool.link} target="_blank" rel="noopener noreferrer" className={`${smallCtaBase} bg-brand-peach hover:bg-brand-peach-dark text-black`}>
                  {tool.cta} →
                </a>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h3 className="text-lg font-semibold">What you can do this week</h3>
              <span className="text-sm text-gray-400">Copy the recipe, follow the steps, ship value.</span>
            </div>
            <div className={scrollRow}>
              {explorerRecipes.map((recipe) => (
                <div key={recipe.title} className={cardBaseCompact}>
                  <p className="text-xs uppercase tracking-wide text-gray-400">{recipe.outcome}</p>
                  <h4 className="text-lg font-semibold">{recipe.title}</h4>
                  <p className="text-sm text-gray-300 flex-grow">{recipe.description}</p>
                  <p className="text-xs text-gray-400">Tools: {recipe.tools}</p>
                  <a href={recipe.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-brand-peach">
                    View workflow →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="builder" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className={`${sectionKicker} text-brand-pink`}>Technical builders</p>
              <h2 className="text-2xl font-semibold">My current power stack</h2>
            </div>
            <p className="text-gray-300 max-w-lg">
              These are the tools I lean on for AI-native product work—from code generation to realtime demos.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {builderStack.map((tool) => (
              <div key={tool.name} className={cardBase}>
                <h3 className="text-xl font-semibold">{tool.name}</h3>
                <p className="text-sm text-gray-300 flex-grow">{tool.description}</p>
                <a href={tool.link} target="_blank" rel="noopener noreferrer" className={`${smallCtaBase} bg-brand-lavender hover:bg-brand-lavender-dark text-black`}>
                  Dive in →
                </a>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h3 className="text-lg font-semibold">Boosters & workflows</h3>
              <span className="text-sm text-gray-400">Stack these with the power tools for ridiculous speed.</span>
            </div>
            <div className={scrollRow}>
              {builderBoosters.map((item) => (
                <div key={item.title} className={cardBaseCompact}>
                  <p className="text-xs uppercase tracking-wide text-gray-400">{item.tools}</p>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-300 flex-grow">{item.description}</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-brand-pink">
                    Learn more →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="playbooks" className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className={`${sectionKicker} text-brand-peach`}>Playbooks & deep dives</p>
              <h2 className="text-2xl font-semibold">Watch how we work, then remix it</h2>
            </div>
            <p className="text-gray-300 max-w-xl">
              Search or filter by topic to see the latest walkthroughs, experiments, and teardown videos we publish.
            </p>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <input
                type="text"
                placeholder="Search videos..."
                className="px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 min-w-[220px]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2">
              <label htmlFor="sortOrder" className="text-sm text-gray-300">
                Sort by:
              </label>
              <select
                id="sortOrder"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="px-3 py-1 rounded bg-gray-800 text-white border border-gray-600"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
          </div>

      <div className="products-scroll flex gap-3 overflow-x-auto pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`brand-pill whitespace-nowrap ${
                  filter === cat
                    ? categoryStyles[cat] || categoryStyles.All
                    : pillInactive
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedVideos.length > 0 ? (
              sortedVideos.map((video, idx) => {
                console.log('🎬 Rendering video:', video);
                return <ContentCard key={idx} video={video} />;
              })
            ) : (
              <p className="text-gray-400">No videos match your search.</p>
            )}
          </div>
        </section>
      </div>
    </section>
  );
}
