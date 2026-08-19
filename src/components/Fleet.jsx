import React, { useState } from 'react';
import { Users, Phone, Calendar, ShieldCheck, Car } from 'lucide-react';
import { vehicles } from '../data/vehicles';

export default function Fleet({ onSelectVehicle }) {
  const [filter, setFilter] = useState('all');
  const [failedImages, setFailedImages] = useState({});

  const handleImageError = (vehicleId) => {
    setFailedImages((prev) => ({ ...prev, [vehicleId]: true }));
  };

  const filteredVehicles = vehicles.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'suv') return item.type === 'suv';
    if (filter === 'sedan') return item.type === 'sedan';
    if (filter === 'group') return item.type === 'group';
    return true;
  });

  return (
    <section id="vehicles" className="py-24 bg-[#080c14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Car className="w-4 h-4 text-amber-400" />
            <span>Commercial Fleet Photography</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight mb-4">
            Our <span className="gold-gradient-text">Premium Fleet</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Choose the right vehicle for every journey. Every card displays high-resolution commercial photography of the <strong>exact vehicle model named</strong>.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
          {[
            { id: 'all', label: 'All Vehicles' },
            { id: 'suv', label: 'SUVs & MUVs' },
            { id: 'sedan', label: 'Sedans' },
            { id: 'group', label: 'Tempo & Buses' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                filter === tab.id
                  ? 'gold-button text-slate-950 shadow-lg scale-105'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {filteredVehicles.map((vehicle) => {
            const hasFailed = failedImages[vehicle.id];

            return (
              <div
                key={vehicle.id}
                className="group bg-slate-900/90 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl hover:border-amber-500/50 hover:shadow-amber-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Premium Automotive Image Container (16:9 aspect ratio, 220-260px height) */}
                  <div className="relative h-56 sm:h-64 md:h-60 w-full overflow-hidden bg-slate-950 flex items-center justify-center border-b border-slate-800/80 rounded-t-3xl">
                    {!hasFailed ? (
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-cover object-center block group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                        onError={() => handleImageError(vehicle.id)}
                      />
                    ) : (
                      <div className="w-full h-full bg-slate-900 p-6 flex flex-col items-center justify-center text-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-400 flex items-center justify-center">
                          <Car className="w-6 h-6" />
                        </div>
                        <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                          Vehicle Image Coming Soon
                        </span>
                        <p className="text-[11px] text-slate-400">
                          {vehicle.name}
                        </p>
                      </div>
                    )}

                    {/* Subtle Vignette for Luxury Aesthetics */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent pointer-events-none" />

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3 bg-slate-950/90 backdrop-blur-md border border-amber-500/40 text-amber-400 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-md">
                      {vehicle.category}
                    </div>

                    {/* Seating Capacity Pill */}
                    <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 px-2.5 py-1 rounded-lg text-[11px] font-black flex items-center gap-1 shadow-md">
                      <Users className="w-3.5 h-3.5 fill-slate-950" />
                      <span>{vehicle.seating}</span>
                    </div>
                  </div>

                  {/* Vehicle Details */}
                  <div className="p-6 flex flex-col gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-white font-serif group-hover:text-amber-400 transition-colors">
                        {vehicle.name}
                      </h3>
                      <p className="text-xs text-amber-400/90 font-mono font-semibold mt-0.5">
                        {vehicle.category} • {vehicle.seating}
                      </p>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {vehicle.description}
                    </p>

                    {/* Best For Tag */}
                    <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
                      <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block mb-1">
                        Best For
                      </span>
                      <p className="text-xs text-slate-300 font-medium">
                        {vehicle.useCases.join(' • ')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 mt-2 flex items-center gap-2">
                  <button
                    onClick={() => onSelectVehicle(vehicle)}
                    className="flex-1 gold-button py-3.5 rounded-xl text-xs uppercase font-extrabold tracking-wider flex items-center justify-center gap-1.5 shadow-lg active:scale-95 transition-transform"
                  >
                    <Calendar className="w-4 h-4 text-slate-950" />
                    <span>Book Now</span>
                  </button>

                  <a
                    href="tel:9704413674"
                    className="p-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 transition-colors flex items-center justify-center"
                    title="Call 9704413674"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Fleet Commitment Banner */}
        <div className="mt-16 p-6 rounded-3xl bg-slate-900/90 border border-amber-500/30 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-serif">MAHITHI TRAVEL Automotive Standard</h4>
              <p className="text-xs text-slate-400 mt-1">
                Commercial quality presentation. The exact vehicle model named is the exact vehicle delivered for your trip.
              </p>
            </div>
          </div>

          <a
            href="tel:9704413674"
            className="gold-button px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 whitespace-nowrap"
          >
            <Phone className="w-4 h-4 fill-slate-950" />
            <span>Call 9704413674</span>
          </a>
        </div>

      </div>
    </section>
  );
}
