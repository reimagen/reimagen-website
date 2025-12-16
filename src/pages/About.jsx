import { useEffect, useRef, useState } from "react";
import dorothyPosterFrame from "../assets/dorothy-poster-frame.jpeg";
import galaxyPoster from "../assets/galaxy.jpg";

const REVEAL_OPTIONS = { threshold: 0.4, rootMargin: '0px 0px -25% 0px' };

export default function About() {
  const headerRef = useRef(null);
  const whoWeAreRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const howWeWorkRef = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : false
  );
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isWhoVisible, setIsWhoVisible] = useState(false);
  const [isWhatVisible, setIsWhatVisible] = useState(false);
  const [isHowVisible, setIsHowVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleChange = (event) => setIsDesktop(event.matches);
    setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (isVideoReady) return undefined;
    const timeout = setTimeout(() => setIsVideoReady(true), 2000);
    return () => clearTimeout(timeout);
  }, [isVideoReady]);

  useEffect(() => {
    const target = headerRef.current;
    if (!target) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHeaderVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const target = whoWeAreRef.current;
    if (!target) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsWhoVisible(true);
            observer.disconnect();
          }
        });
      },
      REVEAL_OPTIONS
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const target = whatWeDoRef.current;
    if (isDesktop) {
      setIsWhatVisible(true);
      return undefined;
    }
    if (!target) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsWhatVisible(true);
            observer.disconnect();
          }
        });
      },
      REVEAL_OPTIONS
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const target = howWeWorkRef.current;
    if (isDesktop) {
      setIsHowVisible(true);
      return undefined;
    }
    if (!target) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsHowVisible(true);
            observer.disconnect();
          }
        });
      },
      REVEAL_OPTIONS
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isDesktop || !isWhoVisible) return;
    setIsWhatVisible(true);
    setIsHowVisible(true);
  }, [isDesktop, isWhoVisible]);

  return (
    <section className="relative overflow-hidden">
      {/* Desktop background */}
      <video
        src="/videos/space-drift-kling2.5.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster={galaxyPoster}
        className="hidden md:block fixed inset-0 w-full h-full object-cover brightness-[0.62]"
      />
      <div className="hidden md:block fixed inset-0 bg-black/75" aria-hidden="true" />

      {/* Mobile background */}
      <video
        src="/videos/dorothy-skipping.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setIsVideoReady(true)}
        poster={dorothyPosterFrame}
        className="md:hidden fixed inset-0 w-full h-full object-cover brightness-90"
      />
      <div className="md:hidden fixed inset-0 bg-black/75" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-8 pb-16 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr,1.4fr] items-start">
          {/* Left: video */}
          <div className="relative w-full overflow-hidden rounded-xl border border-white/10 hidden md:block">
            <video
              src="/videos/dorothy-skipping.mp4"
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setIsVideoReady(true)}
              poster={dorothyPosterFrame}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: text content */}
          <div className="space-y-10">
            <header
              ref={headerRef}
              className={`space-y-4 slide-in-left ${
                isVideoReady && isHeaderVisible ? "is-visible" : ""
              }`}
            >
              <p className="brand-section-kicker text-brand-lavender text-lg">
                About reImagen
              </p>
              <h1 className="text-4xl md:text-5xl font-bold">
                Let's reimagine everything, together.
              </h1>
            </header>

            <div
              ref={whoWeAreRef}
              className={`space-y-4 slide-in-right ${
                isVideoReady && isWhoVisible ? "is-visible" : ""
              }`}
            >
              <h2 className="brand-section-kicker text-brand-lavender text-md">Who we are</h2>
              <p className="text-gray-300 max-w-2xl">
                We're AI builders and creators focused on making experiences that feel intuitive and personal. 
                We live in the space between the technical and the magical, rethinking what's possible with hyper-personalization, 
                new forms of communication, and interfaces that feel alive. Chat powered the first wave of
                consumer AI mass adoption, and we're betting voice is next.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div
                ref={whatWeDoRef}
                className={`space-y-3 slide-in-left ${
                  isVideoReady && isWhatVisible ? "is-visible" : ""
                }`}
              >
                <h2 className="brand-section-kicker text-brand-lavender text-md">What we do</h2>
                <p className="text-gray-300">
                  We're experts at generating AI content, automating workflows, and building LLM-powered tools, 
                  all grounded with context engineering. We reimagine what's possible with the each wave of 
                  frontier AI capabilities.
                </p>
              </div>

              <div
                ref={howWeWorkRef}
                className={`space-y-3 slide-in-right ${
                  isVideoReady && isHowVisible ? "is-visible" : ""
                }`}
              >
                <h2 className="brand-section-kicker text-brand-lavender text-md">How we work</h2>
                <p className="text-gray-300">
                  AI helps us operate at 10X-100X by taking time-drains, human error, and deterministic 
                  workflows off our plate. "Pass-the-butter" tasks get shipped off, but human judgment remains critical. 
                  It’s what guides strategy, quality, and intent. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
