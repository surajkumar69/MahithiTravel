import React from 'react';
import { Car, PhoneCall, Smile, ChevronRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Choose Your Vehicle',
      description: 'Select the vehicle according to your travel requirements from our Innova Crysta, Ertiga, Dzire, Urbania or Bus fleet.',
      icon: Car
    },
    {
      step: '02',
      title: 'Contact Us',
      description: 'Call 9704413674 and share your journey details, pickup location, travel date, and destination with our team.',
      icon: PhoneCall
    },
    {
      step: '03',
      title: 'Enjoy Your Journey',
      description: 'Relax and travel comfortably with MAHITHI TRAVEL. Our professional driver handles every road detail.',
      icon: Smile
    }
  ];

  return (
    <section className="py-24 bg-[#0b0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold block mb-2">
            Hassle-Free Process
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight mb-4">
            How It <span className="gold-gradient-text">Works</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Booking a cab with MAHITHI TRAVEL takes less than 2 minutes. Simple, direct, and completely transparent.
          </p>
        </div>

        {/* 3-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-amber-500/40 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  {/* Step Number Ribbon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-4xl font-extrabold font-serif gold-gradient-text">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white font-serif mb-3 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs font-mono text-amber-400">
                  <span>STEP {item.step}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
