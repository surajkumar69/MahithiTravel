import React, { useState } from 'react';
import { Phone, Calendar, MapPin, Sparkles, ChevronRight, MessageSquare, Compass, CheckCircle2 } from 'lucide-react';
import { tourPackages } from '../data/tours';

export default function ToursSection({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Pilgrimage', 'City Sightseeing', 'Scenic & Beach', 'Outstation'];

  const filteredPackages = activeCategory === 'All'
    ? tourPackages
    : tourPackages.filter((pkg) => pkg.category === activeCategory || (activeCategory === 'Outstation' && pkg.category === 'Outstation'));

  const handleWhatsAppQuery = (pkgTitle) => {
    const text = `Hello MAHITHI TRAVEL! I am interested in the *${pkgTitle}*. Please share details & pricing for cab booking.`;
    window.open(`https://wa.me/919704413674?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="tours" className="py-24 bg-[#080c14] relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>EXCURSIONS & TEMPLE TOURS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-serif tracking-tight">
            Tours & <span className="gold-gradient-text">Packages</span>
          </h2>

          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Discover handpicked pilgrimage, heritage, and holiday tour packages from Hyderabad. Travel in luxury with private AC cabs, prompt pickups, and expert drivers.
          </p>

          {/* Direct Call Banner */}
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-slate-900/90 border border-amber-500/30 shadow-lg">
            <Phone className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="text-xs text-slate-300">Instant Booking / Custom Itinerary:</span>
            <a href="tel:9704413674" className="text-sm font-extrabold text-amber-400 hover:underline tracking-wider">
              9704413674
            </a>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 uppercase tracking-wider ${
                activeCategory === cat
                  ? 'gold-button text-slate-950 shadow-lg scale-105'
                  : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-amber-500/40 hover:text-white'
              }`}
            >
              {cat === 'All' ? 'All Packages (14)' : cat}
            </button>
          ))}
        </div>

        {/* Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="glass-panel-gold rounded-3xl overflow-hidden group hover:border-amber-500/50 transition-all duration-300 flex flex-col h-full hover:-translate-y-1.5 shadow-xl hover:shadow-amber-500/10"
            >
              {/* Image Container with Badges */}
              <div className="relative h-56 overflow-hidden bg-slate-950">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    if (pkg.fallbackImage) {
                      e.currentTarget.src = pkg.fallbackImage;
                    }
                  }}
                />
                
                {/* Bottom Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1420] via-transparent to-transparent opacity-90" />

                {/* Top Badge */}
                <div className="absolute top-4 right-4 bg-amber-500/90 text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md backdrop-blur-sm">
                  {pkg.badge}
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-amber-400 text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg border border-amber-500/20 flex items-center gap-1.5 shadow-md">
                  <Calendar className="w-3 h-3 text-amber-400" />
                  <span>{pkg.duration}</span>
                </div>

                {/* Price Note Tag */}
                <div className="absolute bottom-3 left-4 text-xs font-semibold text-amber-300 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>{pkg.priceNote}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1 justify-between gap-5 bg-gradient-to-b from-[#0e1420] to-[#090d15]">
                
                <div className="space-y-3">
                  {/* Category Pill */}
                  <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400/90 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded">
                    {pkg.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold text-white group-hover:text-amber-400 transition-colors font-serif tracking-tight">
                    {pkg.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {pkg.shortDescription}
                  </p>

                  {/* Key Highlights */}
                  <div className="pt-2 border-t border-slate-800/80">
                    <span className="text-[11px] font-semibold text-slate-400 block mb-2">Key Highlights:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {pkg.highlights.map((spot, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-slate-900/90 text-slate-300 border border-slate-800 px-2.5 py-1 rounded-md flex items-center gap-1"
                        >
                          <CheckCircle2 className="w-3 h-3 text-amber-400 flex-shrink-0" />
                          <span>{spot}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions & Call CTA */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
                  
                  <div className="grid grid-cols-2 gap-2.5">
                    {/* Enquire / Book Button */}
                    <button
                      onClick={() => onOpenBooking(pkg.title)}
                      className="gold-button py-2.5 px-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <span>Enquire / Book</span>
                    </button>

                    {/* Direct Call Button */}
                    <a
                      href="tel:9704413674"
                      className="gold-button-outline py-2.5 px-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call 9704413674</span>
                    </a>
                  </div>

                  {/* WhatsApp Quick Link */}
                  <button
                    onClick={() => handleWhatsAppQuery(pkg.title)}
                    className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-emerald-500/30 text-emerald-400 hover:text-emerald-300 font-semibold text-[11px] flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Quick WhatsApp Enquiry for {pkg.title.split(' ')[0]}</span>
                  </button>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 glass-panel-gold rounded-3xl p-8 text-center relative overflow-hidden border border-amber-500/30">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold text-white font-serif">
              Looking for a Customized Tour Package?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Whether you need a multi-day pilgrimage, family holiday, or outstation trip, we provide tailored itineraries with Innova Crysta, Ertiga, Dzire, or luxury Tempo Travellers.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:9704413674"
                className="gold-button px-8 py-3.5 rounded-full text-xs uppercase tracking-wider font-extrabold flex items-center gap-2 shadow-xl"
              >
                <Phone className="w-4 h-4 fill-slate-950" />
                <span>Call Now: 9704413674</span>
              </a>

              <button
                onClick={() => onOpenBooking('Customized Tour Package')}
                className="gold-button-outline px-8 py-3.5 rounded-full text-xs uppercase tracking-wider font-bold"
              >
                Request Custom Itinerary
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
