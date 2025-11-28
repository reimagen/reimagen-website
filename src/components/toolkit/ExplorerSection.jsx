import { Link } from 'react-router-dom';
import CategoryGrid from './CategoryGrid';
import MobileCardCarousel from './MobileCardCarousel';

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
        description: 'Pro-level performance for strategy docs and nuance-heavy writing. Need a report? Use Claude.',
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
        description: 'Chat with your content. Drop in up to 50 sources (websites, docs, PDFs, videos) and get instant briefs, presentations, infographics, even a podcast overview.',
        link: 'https://notebooklm.google.com/'
      },
      {
        name: 'Perplexity',
        description: 'Deep researcher that verifies and cites its sources. Ask for market scans, competitor comparisons, or ideal customer profiles.',
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

const explorerQa = [
  {
    title: 'Should I start with ChatGPT or Gemini?',
    detail:
      "Either works. Gemini ties into your existing Google account with generous limits, and ChatGPT requires its own account. Pick what's easiest for you.",
  },
  {
    title: 'Do I need to pay for any of these tools?',
    detail:
      "Not immediately. Start on the free tier, and switch among different providers' tools to spread the daily usage load. Upgrade when you have a favorite.",
  },
  {
    title: 'What is hallucination?',
    detail:
      'When AI confidently gives you the wrong answer. Always sanity-check for critical tasks, you can even run the response by another model. If you spot an error, course-correct the conversation.',
  },
];

export default function ExplorerSection({ sectionKicker, explorerTips }) {
  return (
    <section id="explorer" className="space-y-6 scroll-mt-24 rounded-3xl px-6 py-10 md:px-10">
      <div className="space-y-3 text-center md:text-left">
        <p className={`${sectionKicker} text-brand-lavender`}>Non-technical explorers</p>
        <h2 className="text-2xl font-semibold">A zero-code starter pack for curious operators who are new to AI</h2>
        <p className="text-gray-300">
          Think in use cases and immediate wins. Use AI to help take time-heavy executions off your plate.
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
        <ul className="hidden space-y-3 text-left text-sm text-gray-300 md:block">
          {explorerTips.map((tip) => (
            <li key={tip.title}>
              <p className="font-semibold text-white">{tip.title}</p>
              <p>{tip.detail}</p>
            </li>
          ))}
        </ul>
        <MobileCardCarousel
          items={explorerTips}
          dotColorClass="bg-brand-lavender"
          ariaLabelPrefix="Show tip"
        />
      </div>

      <div className="brand-card space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-lavender">Basic Q&amp;A</p>
        <div className="hidden space-y-3 text-left text-sm text-gray-300 md:block">
          {explorerQa.map((qa) => (
            <div key={qa.title}>
              <p className="font-semibold text-white">{qa.title}</p>
              <p>{qa.detail}</p>
            </div>
          ))}
        </div>
        <MobileCardCarousel
          items={explorerQa}
          dotColorClass="bg-brand-lavender"
          ariaLabelPrefix="Show answer"
        />
      </div>

      <div className="text-center">
        <Link
          to="/contact"
          className="brand-cta bg-brand-lavender hover:bg-brand-lavender-dark text-black inline-flex items-center gap-1"
        >
        Book a Consult →
        </Link>
      </div>
    </section>
  );
}
