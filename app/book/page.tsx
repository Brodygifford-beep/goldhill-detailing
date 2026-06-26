"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function BookAppointment() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState('');
  const [size, setSize] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [details, setDetails] = useState({ name: '', phone: '', location: '' });

  // Duration math (Job time + 1 hr before + 1 hr after)
  const getBlockHours = () => {
    if (service === 'exterior') return 1.5 + 2; // 3.5 hrs
    if (service === 'interior') return 2.5 + 2; // 4.5 hrs
    if (service === 'both') return 4.0 + 2; // 6.0 hrs
    return 0;
  };

  const getPrice = () => {
    if (service === 'exterior') return size === 'large' ? '$120' : '$100';
    if (service === 'interior') return size === 'large' ? '$140' : '$120';
    if (service === 'both') return size === 'large' ? '$230' : '$200';
    return '';
  };

  // Generate available times (8 AM to 6 PM) making sure the job doesn't run past 6 PM
  const availableTimes = () => {
    const times = [];
    const block = getBlockHours();
    const maxStartHour = 18 - block; // 6 PM minus block time
    
    for (let i = 8; i <= Math.floor(maxStartHour); i++) {
      const ampm = i >= 12 ? 'PM' : 'AM';
      const displayHour = i > 12 ? i - 12 : i;
      times.push(`${displayHour}:00 ${ampm}`);
      if (i + 0.5 <= maxStartHour) times.push(`${displayHour}:30 ${ampm}`);
    }
    return times;
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = new Date(e.target.value);
    // 0 is Sunday
    if (selectedDate.getUTCDay() === 0) {
      alert("We are closed on Sundays. Please select another day.");
      setDate('');
    } else {
      setDate(e.target.value);
    }
  };

  const submitBooking = async () => {
    setStep(5); // Show loading/success
    await fetch('/api/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ service, size, date, time, ...details }),
    });
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900 selection:bg-[#E5B80B] selection:text-white antialiased flex flex-col">
      <nav className="px-6 py-6 border-b border-zinc-200 flex justify-between items-center">
        <Link href="/" className="text-lg font-black tracking-widest uppercase text-black">
          GOLDHILL <span className="font-medium text-[#E5B80B]">DETAILING</span>
        </Link>
        <div className="text-xs font-bold uppercase text-zinc-400">Step {step} of 4</div>
      </nav>

      <div className="flex-grow flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-3xl font-black uppercase mb-6 text-black">Select Commission</h2>
              <div className="space-y-4">
                {['exterior', 'interior', 'both'].map((type) => (
                  <button 
                    key={type}
                    onClick={() => { setService(type); setStep(2); }}
                    className="w-full text-left p-6 border border-zinc-200 hover:border-[#E5B80B] transition-colors flex justify-between items-center"
                  >
                    <div>
                      <h3 className="font-black uppercase text-lg">{type === 'both' ? 'The Goldhill Signature' : type}</h3>
                      <p className="text-xs text-zinc-500 uppercase mt-1">
                        {type === 'exterior' && '1.5 Hours'}
                        {type === 'interior' && '2.5 Hours'}
                        {type === 'both' && '4.0 Hours'}
                      </p>
                    </div>
                    <span className="text-[#E5B80B] text-xl">→</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <button onClick={() => setStep(1)} className="text-xs font-bold uppercase text-zinc-400 mb-6 hover:text-black">← Back</button>
              <h2 className="text-3xl font-black uppercase mb-6 text-black">Vehicle Size</h2>
              <div className="space-y-4">
                <button onClick={() => { setSize('standard'); setStep(3); }} className="w-full text-left p-6 border border-zinc-200 hover:border-[#E5B80B] transition-colors">
                  <h3 className="font-black uppercase text-lg">Standard</h3>
                  <p className="text-xs text-zinc-500 uppercase mt-1">Coupes, Sedans, Small SUVs</p>
                </button>
                <button onClick={() => { setSize('large'); setStep(3); }} className="w-full text-left p-6 border border-zinc-200 hover:border-[#E5B80B] transition-colors">
                  <h3 className="font-black uppercase text-lg">Large / Heavy Duty</h3>
                  <p className="text-xs text-zinc-500 uppercase mt-1">Trucks, 3-Row SUVs (F-150, Escalade)</p>
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <button onClick={() => setStep(2)} className="text-xs font-bold uppercase text-zinc-400 mb-6 hover:text-black">← Back</button>
              <h2 className="text-3xl font-black uppercase mb-6 text-black">Date & Time</h2>
              
              <input 
                type="date" 
                value={date}
                onChange={handleDateChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full p-4 border border-zinc-200 mb-6 outline-none focus:border-[#E5B80B]"
              />

              {date && (
                <div className="grid grid-cols-2 gap-3 max-h-64 overflow-y-auto pr-2 pb-6">
                  {availableTimes().map((t) => (
                    <button 
                      key={t}
                      onClick={() => { setTime(t); setStep(4); }}
                      className="p-3 border border-zinc-200 text-sm font-bold hover:bg-black hover:text-[#E5B80B] transition-colors"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <button onClick={() => setStep(3)} className="text-xs font-bold uppercase text-zinc-400 mb-6 hover:text-black">← Back</button>
              <h2 className="text-3xl font-black uppercase mb-6 text-black">Final Details</h2>
              
              <div className="bg-zinc-50 p-4 border border-zinc-200 mb-6">
                <p className="text-xs uppercase text-zinc-500 font-bold mb-1">Total Price</p>
                <p className="text-2xl font-black text-[#E5B80B]">{getPrice()}</p>
              </div>

              <div className="space-y-4 mb-8">
                <input type="text" placeholder="Full Name" onChange={(e) => setDetails({...details, name: e.target.value})} className="w-full p-4 border border-zinc-200 outline-none focus:border-[#E5B80B] placeholder:text-zinc-400" />
                <input type="tel" placeholder="Phone Number" onChange={(e) => setDetails({...details, phone: e.target.value})} className="w-full p-4 border border-zinc-200 outline-none focus:border-[#E5B80B] placeholder:text-zinc-400" />
                <input type="text" placeholder="Service Address (Where are we going?)" onChange={(e) => setDetails({...details, location: e.target.value})} className="w-full p-4 border border-zinc-200 outline-none focus:border-[#E5B80B] placeholder:text-zinc-400" />
              </div>

              <button 
                onClick={submitBooking}
                disabled={!details.name || !details.phone || !details.location}
                className="w-full bg-black text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#E5B80B] hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm Appointment
              </button>
            </div>
          )}

          {step === 5 && (
            <div className="text-center animate-in zoom-in duration-500">
              <div className="w-16 h-16 bg-black text-[#E5B80B] rounded-full flex items-center justify-center text-3xl mx-auto mb-6">✓</div>
              <h2 className="text-3xl font-black uppercase mb-4 text-black">Request Sent</h2>
              <p className="text-zinc-600 mb-8">We have received your booking request and will text you shortly to confirm the slot.</p>
              <Link href="/" className="text-xs font-bold uppercase tracking-widest text-black hover:text-[#E5B80B]">
                Return Home
              </Link>
            </div>
          )}

        </div>
      </div>
    </main>
  );
}