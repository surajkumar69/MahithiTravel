import React from 'react';
import { Phone, Calendar, ShieldCheck } from 'lucide-react';

export default function CallToAction({ onOpenBooking }) {
  return (
    <section className="relative py-24 overflow-hidden">
      
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/vehicles/hero-bg.jpg"
          alt="MAHITHI TRAVEL Chauffeur SUV Drive"
          className="w-full h-full object-cover object-center scale-105 opacity-30"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1920&auto=format&fit=crop';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080c14] via-[#080c14]/90 to-[#080c14]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-widest mb-6">
          <ShieldCheck className="w-4 h-4" />
          <span>24/7 Booking Support</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white font-serif tracking-tight leading-tight mb-6">
          Ready to Start <span className="gold-gradient-text">Your Journey?</span>
        </h2>

        {/* Subheading */}
        <p className="text-slate-300 text-lg sm:text-xl max-w-2xl font-light mb-10">
          Book a comfortable and reliable ride with MAHITHI TRAVEL. Enjoy punctual pickups, clean vehicles, and expert drivers.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="tel:9704413674"
            className="w-full sm:w-auto gold-button px-9 py-4 rounded-full text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-3 shadow-2xl"
          >
            <Phone className="w-5 h-5 fill-slate-950" />
            <span>Call Now — 9704413674</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="w-full sm:w-auto gold-button-outline px-9 py-4 rounded-full text-sm font-bold tracking-wide flex items-center justify-center gap-3"
          >
            <Calendar className="w-5 h-5 text-amber-400" />
            <span>Book Your Ride</span>
          </button>
        </div>

      </div>
    </section>
  );
}
