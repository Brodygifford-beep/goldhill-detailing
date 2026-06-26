import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-zinc-800 antialiased">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-6 md:px-12 border-b border-zinc-900 sticky top-0 bg-black/80 backdrop-blur-md z-50">
        <div className="text-lg font-black tracking-widest uppercase">
          GOLDHILL <span className="font-light text-zinc-400">DETAILING</span>
        </div>
        <div className="hidden sm:flex space-x-8 text-xs font-semibold uppercase tracking-wider text-zinc-400">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-24 md:py-40 flex flex-col items-center text-center max-w-4xl mx-auto">
        <span className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-4">
          Middle Tennessee & Beyond
        </span>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-8">
          AUTOMOTIVE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600">
            PERFECTION
          </span>
        </h1>
        <p className="max-w-xl text-zinc-400 text-base md:text-lg font-light leading-relaxed mb-12">
          Uncompromising mobile detailing, paint correction, and surface protection. Hand-delivered directly to your driveway.
        </p>
        <a 
          href="#contact" 
          className="bg-white text-black px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Request an Appointment
        </a>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-24 border-t border-zinc-950 bg-zinc-950/50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-4 border-b border-zinc-900">
            <h2 className="text-2xl font-black tracking-tight uppercase">Curated Tier Packages</h2>
            <p className="text-zinc-500 text-sm mt-2 md:mt-0">Tailored maintenance for premium vehicles.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Standard Package */}
            <div className="p-8 border border-zinc-900 bg-black flex flex-col justify-between group hover:border-zinc-700 transition-colors">
              <div>
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-lg font-bold uppercase tracking-tight">The Standard Reset</h3>
                </div>
                <p className="text-zinc-500 text-sm mb-8">A meticulous interior and exterior rejuvenation for well-maintained vehicles.</p>
                <ul className="space-y-4 text-zinc-400 text-xs uppercase tracking-wide">
                  <li className="flex items-center"><span className="text-zinc-600 mr-3">✓</span> Multi-stage safe hand wash</li>
                  <li className="flex items-center"><span className="text-zinc-600 mr-3">✓</span> Deep wheel barrel & tire decontamination</li>
                  <li className="flex items-center"><span className="text-zinc-600 mr-3">✓</span> Full interior vacuum & blow out</li>
                  <li className="flex items-center"><span className="text-zinc-600 mr-3">✓</span> Streak-free glass in & out</li>
                </ul>
              </div>
            </div>
            
            {/* Premium Package */}
            <div className="p-8 border border-zinc-800 bg-zinc-900/40 flex flex-col justify-between group hover:border-zinc-600 transition-colors">
              <div>
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-lg font-bold uppercase tracking-tight text-white">The Premium Elite</h3>
                </div>
                <p className="text-zinc-400 text-sm mb-8">Complete deep-cleaning transformation combined with entry-level surface protection.</p>
                <ul className="space-y-4 text-zinc-300 text-xs uppercase tracking-wide">
                  <li className="flex items-center"><span className="text-white mr-3">✓</span> Everything included in Standard</li>
                  <li className="flex items-center"><span className="text-white mr-3">✓</span> Iron removal & clay bar paint treatment</li>
                  <li className="flex items-center"><span className="text-white mr-3">✓</span> High-gloss ceramic sealant application</li>
                  <li className="flex items-center"><span className="text-white mr-3">✓</span> Hot water extraction for carpets & mats</li>
                  <li className="flex items-center"><span className="text-white mr-3">✓</span> Leather cleaning & conditioning hide treatment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking/Contact Section */}
      <section id="contact" className="px-6 py-24 max-w-xl mx-auto text-center border-t border-zinc-900">
        <h2 className="text-3xl font-black tracking-tight uppercase mb-4">Secure a Slot</h2>
        <p className="text-zinc-400 text-sm mb-8">
          Appointments fill up quickly. Drop us a line with your location, vehicle type, and preferred package to book.
        </p>
        <div className="p-6 bg-zinc-950 border border-zinc-900 space-y-4">
          <p className="text-sm text-zinc-400">Direct Booking Channel:</p>
          <a 
            href="mailto:contact@goldhilldetailing.com" 
            className="block text-xl font-mono font-bold tracking-tight text-white hover:text-zinc-300 transition-colors"
          >
            contact@goldhilldetailing.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-zinc-900 text-center text-zinc-600 text-xs uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Goldhill Detailing. All Rights Reserved.
      </footer>
    </main>
  );
}