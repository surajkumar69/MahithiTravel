import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Car, Shield, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Vehicles', href: '#vehicles' },
    { name: 'Services', href: '#services' },
    { name: 'Tours & Packages', href: '#tours' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-amber-500/20 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#080c14]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Car className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-wider text-white font-serif uppercase">
                MAHITHI <span className="gold-gradient-text">TRAVEL</span>
              </span>
              <span className="text-[10px] tracking-widest text-amber-400/80 font-mono uppercase font-semibold -mt-1">
                Luxury & Outstation Taxi
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:9704413674"
              className="flex items-center gap-2.5 px-4 py-2 rounded-full gold-button-outline text-sm font-semibold tracking-wide"
            >
              <Phone className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>9704413674</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="gold-button px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold shadow-lg"
            >
              Book Ride
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:9704413674"
              className="p-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center"
              aria-label="Call Now 9704413674"
            >
              <Phone className="w-5 h-5" />
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0b0f17]/98 backdrop-blur-xl border-b border-amber-500/20 shadow-2xl p-6 transition-all animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-3 rounded-lg text-slate-200 hover:bg-slate-900 hover:text-amber-400 font-medium border border-transparent hover:border-slate-800 transition-all"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-600" />
              </a>
            ))}

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a
                href="tel:9704413674"
                className="flex items-center justify-center gap-3 w-full py-3 rounded-xl gold-button text-slate-950 font-bold"
              >
                <Phone className="w-5 h-5 fill-slate-950" />
                <span>Call Now: 9704413674</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl gold-button-outline font-semibold text-center"
              >
                Request a Ride
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
