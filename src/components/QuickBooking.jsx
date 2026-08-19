import React, { useState } from 'react';
import { MapPin, Calendar, Car, Compass, Send, PhoneCall } from 'lucide-react';
import { vehicles } from '../data/vehicles';

export default function QuickBooking({ onRequestRide }) {
  const [formData, setFormData] = useState({
    pickup: '',
    drop: '',
    date: new Date().toISOString().split('T')[0],
    vehicle: 'innova-crysta',
    tripType: 'Outstation'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onRequestRide(formData);
  };

  return (
    <section id="quick-booking" className="relative z-20 -mt-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="glass-panel-gold rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        
        {/* Subtle Decorative accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-amber-500/20 pb-4">
          <div>
            <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">Fast & Easy Cab Rental</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif">Plan Your Journey</h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Drivers Available 24/7 • Call: 9704413674</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          
          {/* Pickup Location */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Pickup Location</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Hyderabad / City Center"
              value={formData.pickup}
              onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
              className="bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Drop Location */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Drop Location</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Vijayawada / Airport"
              value={formData.drop}
              onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
              className="bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Travel Date */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-amber-400" />
              <span>Travel Date</span>
            </label>
            <input
              type="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Vehicle Type */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-amber-400" />
              <span>Vehicle Type</span>
            </label>
            <select
              value={formData.vehicle}
              onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
              className="bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
            >
              {vehicles.map((v) => (
                <option key={v.id} value={v.id} className="bg-slate-900 text-white">
                  {v.name} ({v.seating})
                </option>
              ))}
            </select>
          </div>

          {/* Trip Type */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>Trip Type</span>
            </label>
            <select
              value={formData.tripType}
              onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
              className="bg-slate-900/90 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
            >
              <option value="Local">Local</option>
              <option value="Outstation">Outstation</option>
              <option value="One Way">One Way</option>
              <option value="Round Trip">Round Trip</option>
            </select>
          </div>

          {/* Submit Button spanning full width on mobile or submit row */}
          <div className="sm:col-span-2 lg:col-span-5 pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/60 mt-2">
            <div className="flex items-center gap-2 text-slate-400 text-xs">
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Need instant booking? Call directly: <strong className="text-white">9704413674</strong></span>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto gold-button px-8 py-3.5 rounded-xl font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
            >
              <Send className="w-4 h-4 text-slate-950 fill-slate-950" />
              <span>Request a Ride</span>
            </button>
          </div>

        </form>

      </div>
    </section>
  );
}
