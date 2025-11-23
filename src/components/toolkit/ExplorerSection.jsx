import CategoryGrid from './CategoryGrid';

const explorerUseCases = [
  {
    category: 'Chat',
    items: [
      {
        name: 'ChatGPT',
        description: 'Generalist teammate for brainstorms, planning, and drafting copy. Most useful for casual, conversational tone.',
        link: 'https://chat.openai.com/'
      },
      {
        name: 'Gemini',
        description: 'Google\'s generalist version of ChatGPT. Most generous free tier.',
        link: 'https://gemini.google.com/'
      },
      {
        name: 'Claude',
        description: 'Pro-level guidance for strategy docs and nuance-heavy writing. Need a report? Use Claude.',
        link: 'https://claude.ai/'
      }
    ]
  },
  {
    category: 'Marketing',
    items: [
      {
        name: 'Pomelli (Google Labs)',
        description: 'Stunningly simple. Drop in your URL and it will create your brand DNA. Spin up social media-ready assets in seconds.',
        link: 'https://labs.google.com/pomelli/about/'
      },
      {
        name: 'Jingle Maker (ElevenLabs)',
        description: 'Hilarious and free. Drop in your URL and get a stylized commercial jingle. Share your results so we can laugh together.',
        link: 'https://www.jinglemaker.ai/'
      }
    ]
  },
  {
    category: 'Learning',
    items: [
      {
        name: 'NotebookLM',
        description: 'Drop in up to 50 sources (websites, docs, PDFs, videos) and get instant briefs, presentations, infographics, even a podcast overview. Chat with your content to learn.',
        link: 'https://notebooklm.google.com/'
      },
      {
        name: 'Perplexity',
        description: 'Deep researcher that cites its sources. Ask for market scans, competitor comparisons, or customer research outlines.',
        link: 'https://www.perplexity.ai/'
      },
      {
        name: 'Gemini Live',
        description: 'Need tech support? Instead of digging through help manuals, share your screen and ask Gemini for help.',
        link: 'https://aistudio.google.com/live'
      }
    ]
  }
];

export default function ExplorerSection({ sectionKicker, explorerTips }) {
  return (
    <section id="explorer" className="space-y-6 scroll-mt-24">
      <div className="space-y-3 text-center md:text-left">
        <p className={`${sectionKicker} text-brand-lavender`}>Non-technical explorers</p>
        <h2 className="text-2xl font-semibold">Zero-code starter pack for curious operators new to AI</h2>
        <p className="text-gray-300">
          Think in use cases and immediate wins. AI helps take time-heavy executions off your plate.
        </p>
      </div>

      <div className="space-y-4">
        <CategoryGrid
          columns={explorerUseCases.map((bucket) => ({
            kicker: bucket.category,
            items: bucket.items,
          }))}
          accent="text-brand-lavender"
          linkColor="text-brand-lavender"
          defaultCta="Visit →"
        />
      </div>

      <div className="brand-card space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-lavender">Three tips for chatting</p>
        <ul className="space-y-3 text-left text-sm text-gray-300">
          {explorerTips.map((tip) => (
            <li key={tip.title}>
              <p className="font-semibold text-white">{tip.title}</p>
              <p>{tip.detail}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="brand-card space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-lavender">Basic Q&amp;A</p>
        <div className="space-y-3 text-left text-sm text-gray-300">
          <div>
            <p className="font-semibold text-white">Should I start with ChatGPT or Gemini?</p>
            <p>Either works. Gemini ties into your Google login with generous limits, while ChatGPT requires its own account. Pick what's easiest for you.</p>
          </div>
          <div>
            <p className="font-semibold text-white">Do I need to pay for these tools?</p>
            <p>Not immediately. Start on the free tier, and switch between tools to spread the load. Upgrade when you have a favorite.</p>
          </div>
          <div>
            <p className="font-semibold text-white">What is hallucination?</p>
            <p>When AI confidently gives the wrong answer. Always sanity-check for critical tasks and course-correct the conversation if you spot an error.</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <a
          href="/contact"
          className="brand-cta bg-brand-lavender hover:bg-brand-lavender-dark text-black inline-flex items-center gap-1"
        >
          Get in Touch →
        </a>
      </div>
    </section>
  );
}
