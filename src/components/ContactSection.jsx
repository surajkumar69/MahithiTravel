import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Car, Clock } from 'lucide-react';
import { vehicles } from '../data/vehicles';

export default function ContactSection({ onSubmitRequest }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    date: new Date().toISOString().split('T')[0],
    vehicle: 'Toyota Innova Crysta',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (onSubmitRequest) {
      onSubmitRequest(formData);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#080c14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold block mb-2">
            Reach Out To Us
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight mb-4">
            Get In <span className="gold-gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Share your travel details below or give us a direct phone call for instant quotes and reservations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Business Info Card (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="glass-panel-gold rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black">
                  <Car className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold text-white font-serif tracking-wider uppercase">
                    MAHITHI TRAVEL
                  </h3>
                  <p className="text-xs text-amber-400 font-mono">Premium Cab & Taxi Services</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-8 border-b border-amber-500/20 pb-6">
                Providing reliable local city rides, outstation trips, airport pickups, and group tours with clean, air-conditioned vehicles.
              </p>

              {/* Info Items */}
              <div className="space-y-6">
                
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase">Direct Phone Call</span>
                    <a href="tel:9704413674" className="block text-lg font-bold text-white hover:text-amber-400 transition-colors">
                      9704413674
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase">Email Address</span>
                    <a href="mailto:Mahithitravelsmahithi@gmail.com" className="block text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors break-all">
                      Mahithitravelsmahithi@gmail.com
                    </a>
                  </div>
                </div>

                {/* Services */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase">Primary Services</span>
                    <p className="text-sm font-semibold text-slate-200">
                      Local Taxi Services & Outstation Taxi Services
                    </p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase">Operational Hours</span>
                    <p className="text-sm font-semibold text-slate-200">
                      24 Hours / 7 Days a Week
                    </p>
                  </div>
                </div>

              </div>

              {/* Direct Call Button */}
              <div className="mt-8 pt-6 border-t border-amber-500/20">
                <a
                  href="tel:9704413674"
                  className="w-full gold-button py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                >
                  <Phone className="w-4 h-4 fill-slate-950" />
                  <span>Call 9704413674 Now</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 Columns) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative">
              
              <h3 className="text-2xl font-bold text-white font-serif mb-2">
                Send Booking Request
              </h3>
              <p className="text-xs text-slate-400 mb-8">
                Fill in your trip details and our team will get back to you immediately.
              </p>

              {submitted ? (
                <div className="bg-slate-950 border border-emerald-500/40 rounded-2xl p-8 text-center flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Booking Request Received!</h4>
                  <p className="text-sm text-slate-300 max-w-md">
                    Thank you for choosing MAHITHI TRAVEL. We have recorded your request for <strong>{formData.vehicle}</strong> on <strong>{formData.date}</strong>.
                  </p>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 w-full max-w-md text-left text-xs text-slate-400 space-y-1">
                    <p>Pickup: <strong className="text-white">{formData.pickup}</strong></p>
                    <p>Drop: <strong className="text-white">{formData.drop}</strong></p>
                    <p>Phone: <strong className="text-white">{formData.phone}</strong></p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
                    <a
                      href="tel:9704413674"
                      className="w-full gold-button py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4 fill-slate-950" />
                      <span>Confirm via Phone (9704413674)</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full py-3 rounded-xl bg-slate-800 text-slate-300 font-semibold text-xs"
                    >
                      New Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Enter full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-slate-300">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="Enter 10-digit mobile"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Pickup Location */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-slate-300">Pickup Location *</label>
                      <input
                        type="text"
                        required
                        placeholder="City / Area / Airport"
                        value={formData.pickup}
                        onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                        className="bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    {/* Drop Location */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-slate-300">Drop Location *</label>
                      <input
                        type="text"
                        required
                        placeholder="Destination city / hotel"
                        value={formData.drop}
                        onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                        className="bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Travel Date */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-slate-300">Travel Date *</label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    {/* Vehicle Required */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-slate-300">Vehicle Required *</label>
                      <select
                        value={formData.vehicle}
                        onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                        className="bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-500"
                      >
                        {vehicles.map((v) => (
                          <option key={v.id} value={v.name} className="bg-slate-900">
                            {v.name} ({v.category})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-300">Additional Message / Special Request</label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Flight arrival time, luggage details, or outstation package preference..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full gold-button py-4 rounded-xl font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl"
                  >
                    <Send className="w-4 h-4 fill-slate-950" />
                    <span>Send Booking Request</span>
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
