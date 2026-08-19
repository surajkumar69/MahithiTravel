import React from 'react';
import { services } from '../data/services';
import { Phone, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export default function Services({ onOpenBooking }) {
  return (
    <section id="services" className="py-24 bg-[#0b0f17] relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold block mb-2">
            Tailored Travel Solutions
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight mb-4">
            Our Taxi <span className="gold-gradient-text">Services</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether you need a quick city ride, an outstation holiday cab, or luxury group coaches, MAHITHI TRAVEL delivers unmatched comfort.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="group bg-slate-900/60 border border-slate-800 rounded-3xl p-8 hover:border-amber-500/40 hover:bg-slate-900/90 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    {service.badge && (
                      <span className="text-[11px] font-extrabold font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-amber-400">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white font-serif mb-2 group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-xs text-amber-400 font-mono tracking-wide block mb-3">
                    {service.subtitle}
                  </span>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 mb-8 pt-4 border-t border-slate-800/80">
                    {service.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                        <Check className="w-3.5 h-3.5 text-amber-400" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onOpenBooking(service.title)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-950 border border-slate-800 text-slate-300 group-hover:border-amber-500/40 group-hover:text-amber-400 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  <span>Book {service.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Quick Call Action Strip */}
        <div className="mt-16 text-center">
          <p className="text-slate-400 text-sm mb-4">
            Need customized travel packages for long itineraries or regular corporate rentals?
          </p>
          <a
            href="tel:9704413674"
            className="inline-flex items-center gap-3 gold-button px-8 py-3.5 rounded-full text-sm font-extrabold tracking-wider uppercase shadow-xl"
          >
            <Phone className="w-4 h-4 fill-slate-950" />
            <span>Call 9704413674 for Best Rates</span>
          </a>
        </div>

      </div>
    </section>
  );
}
