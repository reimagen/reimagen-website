import { useEffect, useState } from "react";
import useDocumentHead from "../hooks/useDocumentHead";
import useReveal from "../hooks/useReveal";
import infinityLightartPoster from "../assets/infinity-lightart.jpg";
import galaxyPoster from "../assets/galaxy.jpg";

export default function About() {
  useDocumentHead({
    title: "About Reimagen | Tool-agnostic AI Consulting",
    description: "Reimagen helps teams decide where AI belongs, integrate it into real workflows, and upskill operators. AI strategy, content engines, workflow automation, and custom tools.",
    ogImage: "/assets/galaxy.jpg",
  });

  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : false
  );
  const headerReveal = useReveal({ threshold: 0.25 });
  const whoReveal = useReveal({ threshold: 0.4, rootMargin: "0px 0px -25% 0px" });
  const whatReveal = useReveal({ threshold: 0.4, rootMargin: "0px 0px -25% 0px", reduceMotion: isDesktop });
  const howReveal = useReveal({ threshold: 0.4, rootMargin: "0px 0px -25% 0px", reduceMotion: isDesktop });

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

  return (
    <section className="relative overflow-hidden">
      {/* Desktop background */}
      <video
        src="/videos/galaxy.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={galaxyPoster}
        className="hidden md:block fixed inset-0 w-full h-full object-cover brightness-[0.62]"
        aria-hidden="true"
      />
      <div className="hidden md:block fixed inset-0 bg-black/75" aria-hidden="true" />

      {/* Mobile background */}
      <video
        src="/videos/infinity-lightart.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setIsVideoReady(true)}
        poster={infinityLightartPoster}
        className="md:hidden fixed inset-0 w-full h-full object-cover brightness-90"
        aria-hidden="true"
      />
      <div className="md:hidden fixed inset-0 bg-black/75" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-8 pb-16 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr,1.4fr] items-start">
          {/* Left: video */}
          <div className="relative w-full overflow-hidden rounded-xl border border-white/10 hidden md:block">
            <video
              src="/videos/infinity-lightart.mp4"
              autoPlay
              loop
              muted
              playsInline
              onLoadedData={() => setIsVideoReady(true)}
              poster={infinityLightartPoster}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: text content */}
          <div className="space-y-10">
            <header
              ref={headerReveal.ref}
              className={`space-y-4 slide-in-left ${
                isVideoReady && headerReveal.isVisible ? "is-visible" : ""
              }`}
            >
              <h1 className="brand-section-kicker text-brand-lavender text-lg">
                AI Consulting for strategy, tools, workflows, and content.
              </h1>
              <p className="text-4xl md:text-5xl font-bold">
                Let's reimagine everything, together.
              </p>
            </header>

            <div
              ref={whoReveal.ref}
              className={`space-y-4 slide-in-right ${
                isVideoReady && whoReveal.isVisible ? "is-visible" : ""
              }`}
            >
              <h2 className="brand-section-kicker text-brand-lavender text-md">Who we are</h2>
              <p className="text-gray-300 max-w-2xl">
              AI changes fast. We rigorously evaluate models and tools so you don't have to. 
              Our work is grounded in experience across tech startups, advertising, and consumer brands. We
              build practical AI systems for communication, personalization, and operations.  
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div
              ref={whatReveal.ref}
              className={`space-y-3 slide-in-left ${
                  isVideoReady && whatReveal.isVisible ? "is-visible" : ""
                }`}
              >
                <h2 className="brand-section-kicker text-brand-lavender text-md">What we do</h2>
                <p className="text-gray-300">
                  We design and implement the playbook for integrating AI into the systems that run the business. 
                  This includes strategy, content engines, workflow automation, and custom tools. 
                  Tools don't replace taste, and real expertise is proven through execution. 
                </p>
              </div>

              <div
              ref={howReveal.ref}
              className={`space-y-3 slide-in-right ${
                  isVideoReady && howReveal.isVisible ? "is-visible" : ""
                }`}
              >
                <h2 className="brand-section-kicker text-brand-lavender text-md">How we work</h2>
                <p className="text-gray-300">
                  You bring the goals. We put the right systems in place. AI handles the repetitive, error-prone work. 
                  People handle judgment, quality, and intent. We focus on fixing foundations first so operations can scale reliably.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
