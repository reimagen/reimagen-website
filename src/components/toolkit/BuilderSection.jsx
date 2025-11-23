import CategoryGrid from './CategoryGrid';

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
        <p className={`${sectionKicker} text-brand-peach`}>Technical builders</p>
        <h2 className="text-2xl font-semibold">The no-nonsense power stack</h2>
        <p className="text-gray-300">
          Proven winners for AI product work vs. chasing every new release.
        </p>
      </div>

      <CategoryGrid
        columns={builderCategories}
        accent="text-brand-peach"
        linkColor="text-brand-peach"
      />

      <div className="brand-card space-y-3">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-peach">Honest mentions</p>
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
          className={`${ctaBase} bg-brand-peach hover:bg-brand-peach-dark text-black inline-flex items-center gap-1`}
        >
          Talk shop with us →
        </a>
      </div>
    </section>
  );
}
