import React from 'react';
import { MapPin, Navigation, Phone, CheckCircle, ArrowRight } from 'lucide-react';

export default function LocalOutstation({ onOpenBooking }) {
  return (
    <section className="py-24 bg-[#080c14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold block mb-2">
            Comprehensive Coverage
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight mb-4">
            Local & <span className="gold-gradient-text">Outstation Services</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Choose between flexible local city hourly rentals or smooth outstation intercity highway journeys.
          </p>
        </div>

        {/* Split Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Card: Local Taxi Services */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                <MapPin className="w-7 h-7" />
              </div>

              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold block mb-2">
                City Travel & Rentals
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif mb-4">
                Local Taxi Services
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Reliable transportation for daily city travel, airport transfers, meetings, shopping and local journeys.
              </p>

              <ul className="space-y-2.5 mb-8">
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-400">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Flexible hourly packages (4 hrs / 8 hrs / 12 hrs)</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-400">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Fast door-step pickup across city locations</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-400">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Stress-free navigation with local expert drivers</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
              <button
                onClick={() => onOpenBooking('Local Taxi Services')}
                className="flex-1 gold-button py-3 rounded-xl text-xs uppercase font-extrabold tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <span>Book Local Taxi</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Card: Outstation Taxi Services */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-slate-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                <Navigation className="w-7 h-7" />
              </div>

              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold block mb-2">
                Highway & Intercity
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-serif mb-4">
                Outstation Taxi Services
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Comfortable vehicles for family trips, vacations, business travel and long-distance journeys.
              </p>

              <ul className="space-y-2.5 mb-8">
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-400">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>One-way & Round trip outstation options</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-400">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Comfortable legroom and spacious boot capacity</span>
                </li>
                <li className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-400">
                  <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Experienced highway drivers for smooth long rides</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
              <button
                onClick={() => onOpenBooking('Outstation Taxi Services')}
                className="flex-1 gold-button py-3 rounded-xl text-xs uppercase font-extrabold tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <span>Book Outstation Taxi</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Central Call CTA Banner */}
        <div className="mt-12 text-center">
          <a
            href="tel:9704413674"
            className="inline-flex items-center gap-3 gold-button-outline px-8 py-4 rounded-full text-sm font-bold tracking-wide shadow-xl"
          >
            <Phone className="w-5 h-5 text-amber-400" />
            <span>Book Now — Call 9704413674</span>
          </a>
        </div>

      </div>
    </section>
  );
}
