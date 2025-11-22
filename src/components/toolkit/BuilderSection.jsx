export default function BuilderSection({
  cardBase,
  ctaBase,
  sectionKicker,
  builderCategories,
  builderRunnersUp,
}) {
  return (
    <section id="builder" className="space-y-6 scroll-mt-24">
      <div className="space-y-3 text-center md:text-left">
        <p className={`${sectionKicker} text-brand-pink`}>Technical builders</p>
        <h2 className="text-2xl font-semibold">The no-nonsense power stack</h2>
        <p className="text-gray-300">
          Proven winners for AI product work vs. chasing every new release.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {builderCategories.map((category) => (
          <div key={category.kicker} className={`${cardBase} flex flex-col`}>
            <p className="text-[11px] uppercase tracking-[0.2em] text-brand-peach mb-1">{category.kicker}</p>
            {category.title && <h3 className="text-xl font-semibold">{category.title}</h3>}
            {category.description && (
              <p className="text-sm text-gray-300 mb-4">{category.description}</p>
            )}
            <div className={`space-y-3 ${!category.title && !category.description ? 'mt-0' : ''}`}>
              {category.items.map((item, idx) => (
                <div
                  key={item.name}
                  className={`${idx === 0 ? '' : 'pt-3 border-t border-white/10'}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-base font-semibold">{item.name}</p>
                    {item.note && (
                      <span className="text-[10px] uppercase tracking-wide text-gray-400 text-right">
                        {item.note}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-300 mb-2">{item.description}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-brand-peach"
                  >
                    Explore →
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="brand-card space-y-3">
        <p className="text-[11px] uppercase tracking-[0.2em] text-brand-peach">Honest mentions</p>
        <ul className="space-y-2 text-sm text-gray-300">
          {builderRunnersUp.map((tool) => (
            <li key={tool.name}>
              <span className="font-semibold text-white">{tool.name}</span>
              {tool.category && (
                <span className="text-xs uppercase tracking-wide text-gray-400 ml-2">
                  ({tool.category})
                </span>
              )}
              : {tool.note}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center">
        <a
          href="/contact"
          className={`${ctaBase} bg-brand-lavender hover:bg-brand-lavender-dark text-black inline-flex items-center gap-1`}
        >
          Interested in a deeper dive? Get in touch →
        </a>
      </div>
    </section>
  );
}
