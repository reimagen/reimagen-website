export default function About() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid gap-10 md:grid-cols-[1.1fr,1.4fr] items-start">
          {/* Left: video */}
          <div className="relative w-full overflow-hidden rounded-xl border border-white/10">
            <video
              src="/videos/dorothy-skipping.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: text content */}
          <div className="space-y-10">
            <header className="space-y-4">
              <p className="brand-section-kicker text-brand-lavender text-lg">
                About reImagen
              </p>
              <h1 className="text-4xl md:text-5xl font-bold">
                Let's reimagine everything, together.
              </h1>
            </header>

            <div className="space-y-4">
              <h2 className="brand-section-kicker text-brand-lavender text-md">Who we are</h2>
              <p className="text-gray-300 max-w-2xl">
                We're full-stack developers turned AI builders focused on creating experiences
                that feel intuitive and personal. We live in the space between the technical and the magical,
                creating hyper-personalized experiences, new forms of communication, and interfaces that feel alive. 
                Chat powered the first big wave of consumer AI, and we're betting voice is next.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="space-y-3">
                <h2 className="brand-section-kicker text-brand-lavender text-md">What we do</h2>
                <p className="text-gray-300">
                  We build LLM-powered apps, generate AI media, and automate workflows, 
                  all grounded with context engineering. We rethink what's possible with product design, 
                  interaction patterns, and frontier AI capabilities.
                </p>
              </div>

              <div className="space-y-3">
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
    </section>
  );
}
