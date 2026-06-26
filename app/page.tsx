import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-[#E5B80B] selection:text-white antialiased">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-6 py-6 md:px-12 border-b border-zinc-200 sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="text-lg font-black tracking-widest uppercase text-black">
          GOLDHILL <span className="font-medium text-[#E5B80B]">DETAILING</span>
        </div>
        <div className="hidden md:flex space-x-8 text-xs font-bold uppercase tracking-wider text-zinc-500">
          <a href="#services" className="hover:text-[#E5B80B] transition-colors">Our Packages</a>
          <a href="#about" className="hover:text-[#E5B80B] transition-colors">The Standard</a>
          <a href="#contact" className="hover:text-[#E5B80B] transition-colors">Contact</a>
        </div>
        <a href="/book" className="hidden md:block bg-black text-white px-5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#E5B80B] hover:text-black transition-colors">
          Secure a Slot
        </a>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-24 md:py-32 flex flex-col items-center text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none mb-6 text-black">
          Automotive Protection <br />
          <span className="text-[#E5B80B]">Specialists</span>
        </h1>
        <p className="max-w-2xl text-zinc-600 text-base md:text-lg font-light leading-relaxed mb-10">
          Pro-grade aesthetic restoration and surface protection. 
          We deliver uncompromising showroom-quality results directly to your driveway across Middle Tennessee.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/book" className="bg-black text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#E5B80B] hover:text-black transition-colors shadow-lg">
            Book an Appointment
          </a>
          <a href="#services" className="border-2 border-black text-black bg-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
            View Packages
          </a>
        </div>
      </section>

      {/* "Our Packages" - Service Grid */}
      <section id="services" className="px-6 py-24 border-t border-zinc-200 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black tracking-tight uppercase mb-4 text-black">Curated Tier Packages</h2>
            <p className="text-zinc-600">Tailored maintenance and restoration for premium vehicles.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* Interior Only */}
            <div className="p-8 border border-zinc-200 bg-white group hover:border-[#E5B80B] transition-all flex flex-col justify-between min-h-[350px] shadow-sm hover:shadow-md">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Interior Commission</p>
                <h3 className="text-xl font-black uppercase tracking-tight mb-3 text-black">The Cabin Refinement</h3>
                <div className="w-12 h-1 bg-zinc-200 group-hover:bg-[#E5B80B] transition-colors mb-6"></div>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  A meticulous rejuvenation of your vehicle's inner sanctuary. Includes deep hot water extraction, leather hide conditioning, plastics UV protection, and streak-free interior glass.
                </p>
                <div className="mb-6">
                  <span className="text-2xl font-black text-black">$120</span>
                  <span className="text-xs text-zinc-500 uppercase font-bold ml-2">Standard</span>
                  <br />
                  <span className="text-lg font-bold text-black">$140</span>
                  <span className="text-xs text-zinc-500 uppercase font-bold ml-2">Large (F-150, Escalade)</span>
                </div>
              </div>
              <a href="/book" className="text-xs font-bold uppercase tracking-widest text-black group-hover:text-[#E5B80B] flex items-center transition-colors">
                Book This Package <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* Exterior Only */}
            <div className="p-8 border border-zinc-200 bg-white group hover:border-[#E5B80B] transition-all flex flex-col justify-between min-h-[350px] shadow-sm hover:shadow-md">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">Exterior Commission</p>
                <h3 className="text-xl font-black uppercase tracking-tight mb-3 text-black">The Surface Revival</h3>
                <div className="w-12 h-1 bg-zinc-200 group-hover:bg-[#E5B80B] transition-colors mb-6"></div>
                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  Complete exterior decontamination and gloss enhancement. Features a multi-stage safe wash, iron removal, deep wheel barrel cleaning, and application of a high-gloss ceramic sealant.
                </p>
                <div className="mb-6">
                  <span className="text-2xl font-black text-black">$100</span>
                  <span className="text-xs text-zinc-500 uppercase font-bold ml-2">Standard</span>
                  <br />
                  <span className="text-lg font-bold text-black">$120</span>
                  <span className="text-xs text-zinc-500 uppercase font-bold ml-2">Large (F-150, Escalade)</span>
                </div>
              </div>
              <a href="/book" className="text-xs font-bold uppercase tracking-widest text-black group-hover:text-[#E5B80B] flex items-center transition-colors">
                Book This Package <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* Both (The Goldhill Signature) - Visually Inverted */}
            <div className="p-8 border-2 border-[#E5B80B] bg-black group transition-all flex flex-col justify-between min-h-[350px] shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#E5B80B] text-black text-[9px] font-bold uppercase tracking-widest px-3 py-1">
                Most Popular
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#E5B80B] mb-2">Complete Commission</p>
                <h3 className="text-xl font-black uppercase tracking-tight mb-3 text-white">The Goldhill Signature</h3>
                <div className="w-12 h-1 bg-[#E5B80B] mb-6"></div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  The absolute pinnacle of our mobile studio. Seamlessly combines <span className="text-white font-medium">The Cabin Refinement</span> and <span className="text-white font-medium">The Surface Revival</span> into one masterclass service, completely resetting your vehicle to its baseline perfection.
                </p>
                <div className="mb-6">
                  <span className="text-2xl font-black text-[#E5B80B]">$200</span>
                  <span className="text-xs text-zinc-400 uppercase font-bold ml-2">Standard</span>
                  <br />
                  <span className="text-lg font-bold text-[#E5B80B]">$230</span>
                  <span className="text-xs text-zinc-400 uppercase font-bold ml-2">Large (F-150, Escalade)</span>
                </div>
              </div>
              <a href="/book" className="text-xs font-bold uppercase tracking-widest text-[#E5B80B] hover:text-white flex items-center transition-colors">
                Secure This Package <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
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
              Driving means dealing with intense sun, unpredictable weather, and harsh road contaminants. A showroom shine does not just happen on its own—it requires effort, high-grade chemicals, and precision.
            </p>
            <p className="text-zinc-600 text-sm leading-relaxed">
              To many detailers, you are just a number. At Goldhill, we bring the premium detailing studio directly to your location, treating every vehicle as if it were our own. No vehicle deserves to be left in the dust.
            </p>
          </div>
          <div className="md:w-1/2 w-full aspect-square bg-zinc-100 border border-zinc-200 flex items-center justify-center relative overflow-hidden">
             {/* Black and Gold Accent Box around Image Placeholder */}
             <div className="absolute inset-4 border-2 border-[#E5B80B] flex items-center justify-center bg-white z-10">
                <span className="text-black text-xs font-bold uppercase tracking-widest">Image Placeholder</span>
             </div>
             <div className="absolute inset-0 bg-black/5"></div>
          </div>
        </div>
      </section>

      {/* Booking/Contact Section */}
      <section id="contact" className="px-6 py-24 bg-black text-white border-t-4 border-[#E5B80B] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black tracking-tight uppercase mb-4 text-[#E5B80B]">Schedule Your Detail</h2>
          <p className="text-zinc-400 text-sm mb-10">
            Appointments fill up fast. Drop us a line with your location, vehicle type, and preferred commission to book.
          </p>
          <div className="inline-block p-8 border border-zinc-800 bg-zinc-950 w-full max-w-md relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#E5B80B]"></div>
            <p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Direct Booking Line</p>
            <a 
              href="mailto:contact@goldhilldetailing.com" 
              className="block text-xl font-bold tracking-tight text-white hover:text-[#E5B80B] transition-colors mb-6"
            >
              contact@goldhilldetailing.com
            </a>
            <p className="text-xs text-[#E5B80B] uppercase tracking-widest">Mobile Service — By Appointment Only</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-black border-t border-zinc-900 text-center flex flex-col items-center gap-4">
        <div className="text-lg font-black tracking-widest uppercase text-white">
          GOLDHILL <span className="font-medium text-[#E5B80B]">DETAILING</span>
        </div>
        <p className="text-zinc-600 text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Goldhill Detailing. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}