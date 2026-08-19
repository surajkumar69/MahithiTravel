import React from 'react';
import { whyChooseUs } from '../data/whyChooseUs';
import { Sparkles, PhoneCall } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#080c14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The MAHITHI TRAVEL Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight mb-4">
            Why Choose <span className="gold-gradient-text">MAHITHI TRAVEL?</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We prioritize your safety, comfort, and schedule above everything else. Experience premium travel standards at honest rates.
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800/80 rounded-2xl p-6 hover:border-amber-500/30 hover:bg-slate-900/90 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-serif mb-2 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 text-[10px] text-slate-500 font-mono flex items-center gap-1">
                  <span>0{index + 1}</span>
                  <span className="w-4 h-[1px] bg-slate-700 inline-block" />
                  <span>MAHITHI TRUST</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Call Highlight */}
        <div className="mt-14 max-w-3xl mx-auto text-center p-6 rounded-2xl bg-slate-900/80 border border-amber-500/20 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">Book With Confidence</span>
            <h4 className="text-white font-bold text-lg">Instant Phone Reservations Available</h4>
          </div>
          <a
            href="tel:9704413674"
            className="gold-button px-6 py-3 rounded-full text-xs font-extrabold uppercase tracking-wider flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4 fill-slate-950" />
            <span>Call 9704413674</span>
          </a>
        </div>

      </div>
    </section>
  );
}
