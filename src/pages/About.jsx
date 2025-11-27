import { useEffect, useRef, useState } from "react";
import dorothyPosterFrame from "../assets/dorothy-poster-frame.jpeg";

const REVEAL_OPTIONS = { threshold: 0.4, rootMargin: '0px 0px -25% 0px' };

export default function About() {
  const headerRef = useRef(null);
  const whoWeAreRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const howWeWorkRef = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isWhoVisible, setIsWhoVisible] = useState(false);
  const [isWhatVisible, setIsWhatVisible] = useState(false);
  const [isHowVisible, setIsHowVisible] = useState(false);

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

  return (
    <section className="relative overflow-hidden">
      {/* Desktop background */}
      <video
        src="/videos/space-drift-kling2.5.mp4"
        autoPlay
        loop
        muted
        playsInline
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
                We're full-stack developers turned AI builders focused on creating experiences
                that feel intuitive and personal. We live in the space between the technical and the magical,
                thinking abouts hyper-personalization, new forms of communication, and how to make interfaces that feel alive. 
                Chat assistants powered the first big wave of consumer AI, and we're betting voice is next.
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
                  We build LLM-powered apps, generate AI media, and automate workflows, 
                  all grounded with context engineering. We rethink what's possible with product design, 
                  interaction patterns, and frontier AI capabilities.
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
                  AI helps us operate 10X-100X faster by taking time-drains, human error, 
                  and orchestration-heavy workflows off our plate. Human judgment remains critical, 
                  it’s what guides strategy, quality, and intent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
