import React, { useState, useEffect } from 'react';
import { X, Phone, Calendar, MapPin, Car, CheckCircle2, MessageSquare } from 'lucide-react';
import { vehicles } from '../data/vehicles';

export default function BookingModal({ isOpen, onClose, selectedVehicle, initialService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    drop: '',
    date: new Date().toISOString().split('T')[0],
    vehicleId: selectedVehicle ? selectedVehicle.id : 'innova-crysta',
    tripType: 'Outstation',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedVehicle) {
      setFormData((prev) => ({ ...prev, vehicleId: selectedVehicle.id }));
    }
  }, [selectedVehicle]);

  if (!isOpen) return null;

  const currentVehicleObj = vehicles.find((v) => v.id === formData.vehicleId) || vehicles[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = `Hello MAHITHI TRAVEL! I want to book a ride.%0A%0A*Name:* ${encodeURIComponent(formData.name || 'Customer')}%0A*Phone:* ${encodeURIComponent(formData.phone || 'Provided')}%0A*Vehicle:* ${encodeURIComponent(currentVehicleObj.name)}%0A*Pickup:* ${encodeURIComponent(formData.pickup || 'TBD')}%0A*Drop:* ${encodeURIComponent(formData.drop || 'TBD')}%0A*Date:* ${encodeURIComponent(formData.date)}%0A*Trip Type:* ${encodeURIComponent(formData.tripType)}`;
    window.open(`https://wa.me/919704413674?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-slate-950 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-serif">
                {initialService ? `Book ${initialService}` : 'Book Your Ride'}
              </h3>
              <p className="text-xs text-amber-400 font-mono">MAHITHI TRAVEL • Call 9704413674</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Vehicle Preview Banner */}
        {currentVehicleObj && (
          <div className="p-4 bg-slate-950/60 border-b border-slate-800/80 flex items-center gap-4">
            <img
              src={currentVehicleObj.image}
              alt={currentVehicleObj.name}
              className="w-20 h-14 object-cover rounded-xl border border-slate-800 bg-slate-900"
              onError={(e) => {
                e.target.src = currentVehicleObj.fallbackImage;
              }}
            />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white">{currentVehicleObj.name}</h4>
                <span className="text-[10px] font-bold px-2 py-0.5 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded">
                  {currentVehicleObj.seating}
                </span>
              </div>
              <p className="text-xs text-slate-400 line-clamp-1">{currentVehicleObj.category} • {currentVehicleObj.useCases.join(', ')}</p>
            </div>
          </div>
        )}

        {/* Body Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-6 text-center flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-white">Booking Details Submitted!</h4>
              <p className="text-xs text-slate-300 max-w-md">
                We have registered your booking request. Connect with our dispatcher directly for immediate confirmation.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md pt-4">
                <a
                  href="tel:9704413674"
                  className="w-full gold-button py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 fill-slate-950" />
                  <span>Call 9704413674</span>
                </a>
                
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Vehicle Selection dropdown if changed */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-300">Select Vehicle</label>
                <select
                  value={formData.vehicleId}
                  onChange={(e) => setFormData({ ...formData, vehicleId: e.target.value })}
                  className="bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                >
                  {vehicles.map((v) => (
                    <option key={v.id} value={v.id} className="bg-slate-900">
                      {v.name} ({v.category} - {v.seating})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-300">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-300">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter 10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-300">Pickup Location *</label>
                  <input
                    type="text"
                    required
                    placeholder="Pickup address / city"
                    value={formData.pickup}
                    onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                    className="bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-300">Drop Location *</label>
                  <input
                    type="text"
                    required
                    placeholder="Drop location / destination"
                    value={formData.drop}
                    onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                    className="bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-300">Travel Date *</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-300">Trip Type *</label>
                  <select
                    value={formData.tripType}
                    onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                    className="bg-slate-950 border border-slate-700/80 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Local">Local</option>
                    <option value="Outstation">Outstation</option>
                    <option value="One Way">One Way</option>
                    <option value="Round Trip">Round Trip</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <button
                  type="submit"
                  className="w-full gold-button py-3.5 rounded-xl font-extrabold text-xs uppercase tracking-wider shadow-lg"
                >
                  Submit Booking Request
                </button>

                <div className="flex items-center gap-2 my-1">
                  <div className="h-[1px] bg-slate-800 flex-1" />
                  <span className="text-[10px] text-slate-500 uppercase">OR INSTANT CALL</span>
                  <div className="h-[1px] bg-slate-800 flex-1" />
                </div>

                <a
                  href="tel:9704413674"
                  className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-700"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 9704413674 Directly</span>
                </a>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
