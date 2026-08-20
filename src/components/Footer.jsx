import React from 'react';
import { Car, Phone, Mail, ChevronRight, ShieldCheck, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#05080e] border-t border-slate-800 text-slate-400 text-sm">
      
      {/* Top Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: Company Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black">
                <Car className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-xl font-extrabold text-white font-serif uppercase tracking-wider">
                MAHITHI <span className="gold-gradient-text">TRAVEL</span>
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed">
              Reliable Local & Outstation Taxi Services with a modern fleet of Toyota Innova Crysta, Ertiga, Swift Dzire, Etios, Force Urbania, and 22-28 seater luxury buses.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-400 font-mono pt-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Safety • Comfort • Punctuality</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold font-serif text-base mb-4 uppercase tracking-wider border-b border-amber-500/20 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#vehicles" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>Vehicles</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#tours" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>Tours & Packages</span>
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className="text-white font-bold font-serif text-base mb-4 uppercase tracking-wider border-b border-amber-500/20 pb-2 inline-block">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>Local Taxi</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>Outstation Taxi</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>Airport Transfer</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>Family Travel</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>Corporate Travel</span>
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>Group Travel</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex flex-col gap-3">
            <h4 className="text-white font-bold font-serif text-base mb-2 uppercase tracking-wider border-b border-amber-500/20 pb-2 inline-block">
              Contact Us
            </h4>

            <div className="flex flex-col gap-3 text-xs">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-500 font-mono block">Phone Number</span>
                  <a href="tel:9704413674" className="text-white font-bold hover:text-amber-400 transition-colors">
                    9704413674
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-500 font-mono block">Email Address</span>
                  <a href="mailto:Mahithitravelsmahithi@gmail.com" className="text-slate-300 font-semibold hover:text-amber-400 transition-colors break-all">
                    Mahithitravelsmahithi@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-500 font-mono block">Services</span>
                  <span className="text-slate-300 font-medium">Local & Outstation Taxis</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="tel:9704413674"
                className="w-full gold-button py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <Phone className="w-3.5 h-3.5 fill-slate-950" />
                <span>Call 9704413674</span>
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-[#030509] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 MAHITHI TRAVEL. All Rights Reserved.</p>
          <p className="flex items-center gap-2">
            <span>Designed for Premium Local & Outstation Journeys</span>
            <span>•</span>
            <a href="tel:9704413674" className="text-amber-400 hover:underline">9704413674</a>
          </p>
        </div>
      </div>

    </footer>
  );
}
