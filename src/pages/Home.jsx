import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <section className="relative">
      {/* Hero */}
      <div className="relative w-full min-h-[calc(100vh+5rem)]">
        <video
          src="/videos/cosmic-surfer-kling2.5.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="block w-full h-full min-h-[calc(100vh+5rem)] object-cover brightness-50"
        />

        {/* Overlay */}
        <div className="absolute inset-0">
          <div className="flex min-h-screen items-center justify-center px-4">
            <div className="bg-black/60 p-8 rounded-2xl text-center max-w-3xl w-full space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Let Wonder Lead the Way</h1>
              <p className="brand-hero-chip text-brand-lavender">
                Building delightful AI experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
