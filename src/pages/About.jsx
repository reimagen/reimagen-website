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
              We're full-stack developers turned AI experts. We create with AI the way others dream, 
              creating delightful experiences that amplify what you can imagine and express. 
              We live in the space between the technical and the magical: hyper-personal experiences, 
              new forms of interaction, and interfaces that feel like they’re listening.
              Chat drove the first big wave of mass consumer AI adoption, and we're betting voice is next.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <h2 className="brand-section-kicker text-brand-lavender text-md">What we do</h2>
              <p className="text-gray-300">
                We create AI art, build LLM-powered apps, and automate workflows with AI agents.
                Our work blends product amplification, interaction design, and frontier AI capabilities.
              </p>
            </div>

          <div className="space-y-3">
            <h2 className="brand-section-kicker text-brand-lavender text-md">How we work</h2>
            <p className="text-gray-300">
              Becoming 10-X or 100-X is the way to win. Lean into AI to target time-drains,
              human error, and orchestration-heavy workflows. The human in the loop ensures quality and alignment.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
