import React from 'react';
import { Phone, Calendar, ShieldCheck, ChevronDown, Award, Clock, MapPin } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      
      {/* Background Image with Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/vehicles/hero-bg.jpg"
          alt="MAHITHI TRAVEL Chauffeur SUV Drive"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse duration-10000 opacity-40"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1920&auto=format&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-[#080c14]/85 to-[#080c14]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
      </div>

      {/* Decorative Light Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-amber-500/30 text-amber-400 text-xs sm:text-sm font-semibold tracking-wide shadow-lg mb-6 backdrop-blur-md">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>Local • Outstation • Reliable • Comfortable</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight max-w-5xl leading-[1.15] mb-6 font-serif">
          Your Journey, <span className="gold-gradient-text">Our Responsibility</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-2xl text-slate-300 max-w-3xl font-light leading-relaxed mb-10">
          Reliable Local & Outstation Taxi Services for Comfortable and Hassle-Free Travel
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto gold-button px-8 py-4 rounded-full text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl"
          >
            <Calendar className="w-5 h-5 text-slate-950" />
            <span>Book Your Ride</span>
          </button>

          <a
            href="tel:9704413674"
            className="w-full sm:w-auto gold-button-outline px-8 py-4 rounded-full text-sm font-bold tracking-wide flex items-center justify-center gap-3"
          >
            <Phone className="w-5 h-5 text-amber-400" />
            <span>Call Now — 9704413674</span>
          </a>
        </div>

        {/* Feature Pill Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl w-full pt-6 border-t border-slate-800/80">
          <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800/60 backdrop-blur-sm">
            <Award className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-slate-300">Premium Fleet</span>
          </div>
          <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800/60 backdrop-blur-sm">
            <Clock className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-slate-300">24/7 Availability</span>
          </div>
          <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800/60 backdrop-blur-sm">
            <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-slate-300">Verified Chauffeurs</span>
          </div>
          <div className="flex items-center justify-center gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800/60 backdrop-blur-sm">
            <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium text-slate-300">Pan-India Outstation</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a href="#quick-booking" className="mt-12 text-slate-400 hover:text-amber-400 transition-colors animate-bounce">
          <ChevronDown className="w-6 h-6" />
        </a>

      </div>
    </section>
  );
}
