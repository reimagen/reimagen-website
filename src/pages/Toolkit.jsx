// src/pages/Toolkit.jsx
import { useEffect, useState } from 'react';
import ExplorerSection from '../components/toolkit/ExplorerSection';
import VibeSection from '../components/toolkit/VibeSection';
import BuilderSection from '../components/toolkit/BuilderSection';
import {
  builderCategories,
  builderRunnersUp,
  explorerTips,
  vibeQuestions,
  vibeStack,
  vibeTips,
} from '../data/toolkitData';
import dreamscapePoster from '../assets/dreamscape.jpeg';

export default function Toolkit() {
  const sectionKicker = 'brand-section-kicker';
  const ctaBase = 'brand-cta';

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative -mt-24 pt-24 pb-24 overflow-hidden">
      <video
        src="/videos/floating-dream.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster={dreamscapePoster}
        className="fixed inset-0 w-full h-full object-cover brightness-90"
      />
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
      <div className="relative z-10 px-4 py-16 md:px-10 lg:px-16 space-y-12">
        <header className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-3xl mb-4 tracking-[0.15em] uppercase text-center">Toolkit</p>
          <p className="brand-section-subhead text-brand-lavender text-center">
            We try every AI product so you don't have to. These are our top picks.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#explorer" className={`${ctaBase} bg-brand-lavender hover:bg-brand-lavender-dark text-black`}>
              I&apos;m new to AI
            </a>
            <a href="#vibe" className={`${ctaBase} bg-brand-pink hover:bg-brand-pink-dark text-black`}>
              I want to vibe code
            </a>
            <a href="#builder" className={`${ctaBase} bg-brand-peach hover:bg-brand-peach-dark text-black`}>
              I build with code
            </a>
          </div>
        </header>


        <ExplorerSection
          sectionKicker={sectionKicker}
          explorerTips={explorerTips}
        />

        <VibeSection
          sectionKicker={sectionKicker}
          vibeStack={vibeStack}
          vibeTips={vibeTips}
          vibeQuestions={vibeQuestions}
        />

        <BuilderSection
          sectionKicker={sectionKicker}
          ctaBase={ctaBase}
          builderCategories={builderCategories}
          builderRunnersUp={builderRunnersUp}
        />
      </div>
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-48 right-8 z-[999] rounded-full bg-brand-lavender px-4 py-2 text-sm text-black shadow-xl transition hover:bg-brand-lavender-dark"
          aria-label="Back to top"
        >
          Back to top ↑
        </button>
      )}
    </section>
  );
}
