import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-[#D4AF37] selection:text-white antialiased">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-6 md:px-12 border-b border-zinc-200 sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="text-lg font-black tracking-widest uppercase text-black">
          GOLDHILL <span className="font-medium text-[#D4AF37]">DETAILING</span>
        </div>
        <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-wider text-zinc-500">
          <a href="#services" className="hover:text-[#D4AF37] transition-colors">What We Offer</a>
          <a href="#about" className="hover:text-[#D4AF37] transition-colors">Our Standard</a>
          <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
        </div>
        <a href="#contact" className="hidden md:block bg-black text-white px-5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-black transition-colors">
          Get a Quote
        </a>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-24 md:py-32 flex flex-col items-center text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-6 text-black">
          Automotive Protection <br />
          <span className="text-[#D4AF37]">Specialists</span>
        </h1>
        <p className="max-w-2xl text-zinc-600 text-base md:text-lg font-light leading-relaxed mb-10">
          Pro-grade detailing, paint correction, and ceramic coatings. 
          We deliver uncompromising showroom-quality results directly to your driveway across Middle Tennessee.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="bg-black text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-colors shadow-lg">
            Get a Free Estimate
          </a>
          <a href="#services" className="border-2 border-black text-black bg-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
            Explore Services
          </a>
        </div>
      </section>

      {/* "What We Offer" - Service Grid */}
      <section id="services" className="px-6 py-24 border-t border-zinc-200 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black tracking-tight uppercase mb-4 text-black">What We Offer</h2>
            <p className="text-zinc-600">Select a package to elevate and protect your vehicle.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Full Detailing */}
            <div className="p-8 border border-zinc-200 bg-white group hover:border-[#D4AF37] transition-all flex flex-col justify-between min-h-[300px] shadow-sm hover:shadow-md">
              <div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3 text-black">Full Detailing Packages</h3>
                <div className="w-12 h-1 bg-[#D4AF37] mb-4"></div>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  Comprehensive interior and exterior reset. From safe hand-washing to deep interior extraction, we bring your vehicle back to its baseline perfection.
                </p>
              </div>
              <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-black group-hover:text-[#D4AF37] flex items-center transition-colors">
                Request Quote <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* Ceramic Coating */}
            <div className="p-8 border border-zinc-200 bg-white group hover:border-[#D4AF37] transition-all flex flex-col justify-between min-h-[300px] shadow-sm hover:shadow-md">
              <div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3 text-black">Ceramic Coating</h3>
                <div className="w-12 h-1 bg-[#D4AF37] mb-4"></div>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  Long-term, high-gloss hydrophobic protection. Shield your clear coat from UV rays, road debris, and harsh environmental contaminants.
                </p>
              </div>
              <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-black group-hover:text-[#D4AF37] flex items-center transition-colors">
                Request Quote <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* Paint Correction */}
            <div className="p-8 border border-zinc-200 bg-white group hover:border-[#D4AF37] transition-all flex flex-col justify-between min-h-[300px] shadow-sm hover:shadow-md">
              <div>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3 text-black">Paint Correction</h3>
                <div className="w-12 h-1 bg-[#D4AF37] mb-4"></div>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  Machine polishing and compounding to permanently remove swirl marks, light scratches, and oxidation, restoring a mirror-like finish.
                </p>
              </div>
              <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-black group-hover:text-[#D4AF37] flex items-center transition-colors">
                Request Quote <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Authority / About Section */}
      <section id="about" className="px-6 py-24 border-t border-zinc-200 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-black tracking-tight uppercase mb-6 text-black">Making Your Vehicle Excellent in All Aspects</h2>
            <p className="text-zinc-600 text-sm leading-relaxed mb-4">
              Driving in Tennessee means dealing with intense sun, unpredictable weather, and harsh road contaminants. A showroom shine does not just happen on its own—it requires effort, high-grade chemicals, and precision.
            </p>
            <p className="text-zinc-600 text-sm leading-relaxed">
              To many detailers, you are just a number. At Goldhill, we bring the premium detailing studio directly to your location, treating every vehicle as if it were our own. No vehicle deserves to be left in the dust.
            </p>
          </div>
          <div className="md:w-1/2 w-full aspect-square bg-zinc-100 border border-zinc-200 flex items-center justify-center relative overflow-hidden">
             {/* Black and Gold Accent Box around Image Placeholder */}
             <div className="absolute inset-4 border-2 border-[#D4AF37] flex items-center justify-center bg-white z-10">
                <span className="text-black text-xs font-bold uppercase tracking-widest">Image Placeholder</span>
             </div>
             <div className="absolute inset-0 bg-black/5"></div>
          </div>
        </div>
      </section>

      {/* Booking/Contact Section - Uses Black to anchor the page */}
      <section id="contact" className="px-6 py-24 bg-black text-white border-t-4 border-[#D4AF37] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black tracking-tight uppercase mb-4 text-[#D4AF37]">Schedule Your Detail</h2>
          <p className="text-zinc-400 text-sm mb-10">
            Ready for peak aesthetic appeal? Contact us for a free consultation on what your vehicle needs.
          </p>
          <div className="inline-block p-8 border border-zinc-800 bg-zinc-950 w-full max-w-md relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#D4AF37]"></div>
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Direct Booking Line</p>
            <a 
              href="mailto:contact@goldhilldetailing.com" 
              className="block text-xl font-bold tracking-tight text-white hover:text-[#D4AF37] transition-colors mb-6"
            >
              contact@goldhilldetailing.com
            </a>
            <p className="text-xs text-[#D4AF37] uppercase tracking-widest">Mobile Service — By Appointment Only</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-black border-t border-zinc-900 text-center flex flex-col items-center gap-4">
        <div className="text-lg font-black tracking-widest uppercase text-white">
          GOLDHILL <span className="font-medium text-[#D4AF37]">DETAILING</span>
        </div>
        <p className="text-zinc-600 text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Goldhill Detailing. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}