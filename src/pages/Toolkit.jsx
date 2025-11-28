// src/pages/Toolkit.jsx
import { createPortal } from 'react-dom';
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
  const [buttonOffset, setButtonOffset] = useState(40);
  const [isClient, setIsClient] = useState(false);
  const [personaButtonsAnimated, setPersonaButtonsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        if (footerRect.top < viewportHeight) {
          const overlap = viewportHeight - footerRect.top;
          setButtonOffset(Math.max(40, overlap + 16));
          return;
        }
      }
      setButtonOffset(40);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);
  useEffect(() => {
    setIsClient(true);
    if (typeof window === 'undefined') {
      setPersonaButtonsAnimated(true);
      return;
    }
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion.matches) {
      setPersonaButtonsAnimated(true);
      return;
    }
    const timer = setTimeout(() => setPersonaButtonsAnimated(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getHighlightColor = (sectionId) => {
    switch (sectionId) {
      case 'explorer':
        return '199, 164, 246'; // lavender
      case 'vibe':
        return '255, 115, 192'; // pink
      case 'builder':
        return '255, 191, 148'; // peach
      default:
        return '255, 255, 255';
    }
  };

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const target = document.getElementById(sectionId);
    if (!target) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const offset = 96;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
    const glowColor = getHighlightColor(sectionId);

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });

    if (!prefersReducedMotion && target.animate) {
      setTimeout(() => {
        target.animate(
          [
            { boxShadow: `0 0 0 rgba(${glowColor}, 0)`, transform: 'scale(1)' },
            { boxShadow: `0 0 40px rgba(${glowColor}, 0.6)`, transform: 'scale(1.01)' },
            { boxShadow: `0 0 0 rgba(${glowColor}, 0)`, transform: 'scale(1)' },
          ],
          { duration: 900, easing: 'ease-out' }
        );
      }, 250);
    }
  };

  return (
    <>
    <section className="relative -mt-24 pt-24 pb-24 overflow-visible">
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
            We try every AI product so you don't have to. What best describes you?
          </p>
          <div
            className={`flex flex-wrap justify-center gap-4 transform transition-all duration-700 ease-out ${
              personaButtonsAnimated
                ? 'opacity-100 scale-100 md:translate-x-0'
                : 'opacity-0 scale-95 md:-translate-x-16'
            }`}
          >
            <a
              href="#explorer"
              onClick={(event) => scrollToSection(event, 'explorer')}
              className={`${ctaBase} bg-brand-lavender hover:bg-brand-lavender-dark text-black`}
            >
              I&apos;m new to AI
            </a>
            <a
              href="#vibe"
              onClick={(event) => scrollToSection(event, 'vibe')}
              className={`${ctaBase} bg-brand-pink hover:bg-brand-pink-dark text-black`}
            >
              I want to vibe code
            </a>
            <a
              href="#builder"
              onClick={(event) => scrollToSection(event, 'builder')}
              className={`${ctaBase} bg-brand-peach hover:bg-brand-peach-dark text-black`}
            >
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
    </section>
    {isClient && showBackToTop
      ? createPortal(
          <button
            onClick={scrollToTop}
            className="fixed right-6 md:right-10 z-[999] rounded-full bg-brand-lavender px-4 py-2 text-sm text-black shadow-xl transition hover:bg-brand-lavender-dark"
            aria-label="Back to top"
            style={{ bottom: `${buttonOffset}px` }}
          >
            Back to top ↑
          </button>,
          document.body
        )
      : null}
    </>
  );
}
