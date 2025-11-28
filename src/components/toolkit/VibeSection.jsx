import { Link } from 'react-router-dom';
import CategoryGrid from './CategoryGrid';
import MobileCardCarousel from './MobileCardCarousel';

export default function VibeSection({ sectionKicker, vibeStack, vibeTips, vibeQuestions }) {
  return (
    <section id="vibe" className="space-y-6 scroll-mt-24 rounded-3xl px-6 py-10 md:px-10">
      <div className="space-y-3 text-center md:text-left">
        <p className={`${sectionKicker} text-brand-pink`}>Vibe coders</p>
        <h2 className="text-2xl font-semibold">Tools for expressive builds and playful shipping</h2>
        <p className="text-gray-300">
          When you want to sketch interactives, explore UIs, and get in flow. These tools keep code optional.
        </p>
      </div>

      <CategoryGrid
        columns={vibeStack}
        accent="text-brand-pink"
        linkColor="text-brand-pink"
        defaultCta="Dive in →"
      />

      <div className="brand-card space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-pink">Real talk</p>
        <ul className="hidden space-y-3 text-left text-sm text-gray-300 md:block">
          {vibeTips.map((tip) => (
            <li key={tip.title}>
              <p className="font-semibold text-white">{tip.title}</p>
              <p>{tip.detail}</p>
            </li>
          ))}
        </ul>
        <MobileCardCarousel
          items={vibeTips}
          dotColorClass="bg-brand-pink"
          ariaLabelPrefix="Show tip"
        />
      </div>

      <div className="brand-card space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-pink">Basic safety</p>
        <div className="hidden space-y-3 text-left text-sm text-gray-300 md:block">
          {vibeQuestions.map((qa) => (
            <div key={qa.title}>
              <p className="font-semibold text-white">{qa.title}</p>
              <p>{qa.detail}</p>
            </div>
          ))}
        </div>
        <MobileCardCarousel
          items={vibeQuestions}
          dotColorClass="bg-brand-pink"
          ariaLabelPrefix="Show answer"
        />
      </div>

      <div className="brand-card space-y-2 text-left text-sm text-gray-300">
        <p className="text-sm uppercase tracking-[0.2em] text-brand-pink">Feeling FOMO?</p>
        <p>
        If you're feeling overwhelmed with all these tools, you're not alone. New products and models drop every day, and this vibe-coder starter pack barely scratches the surface.
        There are whole universes for voice, launch ops, motion graphics, and niche workflows that we didn&apos;t cover here.
        If you're considering a tool, chances are we&apos;ve already stress-tested it and can give you the TLDR.
        </p>
      </div>

      <div className="text-center">
        <Link
          to="/contact"
          className="brand-cta bg-brand-pink hover:bg-brand-pink-dark text-black inline-flex items-center gap-1"
        >
          Get a Consult →
        </Link>
      </div>
    </section>
  );
}
