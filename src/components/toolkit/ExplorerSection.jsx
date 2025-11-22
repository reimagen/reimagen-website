export default function ExplorerSection({ cardBase, sectionKicker, smallCtaBase, explorerStarter, explorerTips }) {
  return (
    <section id="explorer" className="space-y-6 scroll-mt-24">
      <div className="space-y-3 text-center md:text-left">
        <p className={`${sectionKicker} text-brand-lavender`}>Non-technical explorers</p>
        <h2 className="text-2xl font-semibold">Starter pack for curious operators new to AI</h2>
        <p className="text-gray-300">
          Think in use cases and immediate wins. These tools help you ship strategies, recaps, and campaigns.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {explorerStarter.map((tool) => (
          <div key={tool.name} className={cardBase}>
            <h3 className="text-xl font-semibold">{tool.name}</h3>
            <p className="text-sm text-gray-300 flex-grow mb-3">{tool.description}</p>
            <a
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${smallCtaBase} bg-brand-lavender hover:bg-brand-lavender-dark text-black`}
            >
              {tool.cta} →
            </a>
          </div>
        ))}
      </div>

      <div className="brand-card space-y-4">
        <h3 className="text-lg font-semibold text-brand-lavender">Three Tips Before You Start Chatting</h3>
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
        <h3 className="text-lg font-semibold text-brand-lavender">Basic Q&A</h3>
        <div className="space-y-3 text-left text-sm text-gray-300">
          <div>
            <p className="font-semibold text-white">Should I start with ChatGPT or Gemini?</p>
            <p>Either works. Gemini ties into your Google login with generous limits, while ChatGPT requires its own account. Pick what's easiest for you.</p>
          </div>
          <div>
            <p className="font-semibold text-white">Do I need to pay for these tools?</p>
            <p>Not as a beginner. Start free, get comfortable, and you&apos;ll know when you hit limits or when premium features matter.</p>
          </div>
          <div>
            <p className="font-semibold text-white">What is hallucination?</p>
            <p>When an AI confidently gives the wrong answer. Always sanity-check for critical tasks and course-correct the conversation if you spot an error.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
