import React from 'react';
import { Calendar, Phone, Award, ShieldCheck, ThumbsUp, Users, Car } from 'lucide-react';

export default function AboutSection({ onOpenBooking }) {
  return (
    <section id="about" className="py-24 bg-[#0b0f17] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Premium Image & Stats */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800/80 bg-slate-950/90 shadow-2xl group flex items-center justify-center p-3 sm:p-5">
              <img
                src="/images/vehicles/innova-crysta.jpg"
                alt="MAHITHI TRAVEL Toyota Innova Crysta Fleet"
                className="w-full h-[320px] sm:h-[400px] md:h-[450px] object-contain group-hover:scale-[1.02] transition-transform duration-500 block"
                onError={(e) => {
                  e.target.src = '/images/vehicles/about-bg.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17]/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-slate-900 border border-amber-500/30 rounded-2xl p-5 shadow-2xl backdrop-blur-md max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-extrabold text-lg">100% Reliable</h4>
                  <p className="text-xs text-slate-400">Punctual & Safe Journeys</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="flex flex-col gap-6">
            
            <div>
              <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold block mb-2">
                About MAHITHI TRAVEL
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight leading-tight">
                Travel With <span className="gold-gradient-text">Confidence</span>
              </h2>
            </div>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              MAHITHI TRAVEL provides reliable local and outstation taxi services with a wide range of vehicles for individuals, families, corporate travellers and groups. Whether it is a short city ride or a long-distance journey, our goal is to make every trip comfortable, convenient and hassle-free.
            </p>

            {/* Stats Counter Grid */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-800">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-serif">100%</span>
                <span className="text-xs text-slate-400 mt-1">Verified Fleet</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-serif">24 / 7</span>
                <span className="text-xs text-slate-400 mt-1">Customer Support</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-serif">8+</span>
                <span className="text-xs text-slate-400 mt-1">Vehicle Options</span>
              </div>
            </div>

            {/* Key Bullet Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Sanitized & Clean Cabs</span>
              </div>
              <div className="flex items-center gap-2">
                <ThumbsUp className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Transparent Fare System</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Polite & Uniformed Drivers</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Local & Outstation Fleet</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto gold-button px-8 py-3.5 rounded-full text-xs uppercase font-extrabold tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Book Your Journey</span>
              </button>

              <a
                href="tel:9704413674"
                className="w-full sm:w-auto gold-button-outline px-8 py-3.5 rounded-full text-xs font-bold tracking-wide flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call 9704413674</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
