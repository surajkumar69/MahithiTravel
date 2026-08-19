import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export default function FloatingActions() {
  const handleWhatsApp = () => {
    const text = 'Hello MAHITHI TRAVEL! I would like to inquire about local/outstation taxi services.';
    window.open(`https://wa.me/919704413674?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      
      {/* WhatsApp Action */}
      <button
        onClick={handleWhatsApp}
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border border-emerald-400/40 group relative"
        aria-label="Chat on WhatsApp 9704413674"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-800 pointer-events-none shadow-xl">
          WhatsApp Inquiry
        </span>
      </button>

      {/* Phone Action */}
      <a
        href="tel:9704413674"
        className="w-14 h-14 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border border-amber-300/50 group relative animate-bounce"
        aria-label="Call Now 9704413674"
      >
        <Phone className="w-7 h-7 fill-slate-950" />
        <span className="absolute right-16 bg-slate-900 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-800 pointer-events-none shadow-xl">
          Call Now: 9704413674
        </span>
      </a>

    </div>
  );
}
