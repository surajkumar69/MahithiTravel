import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickBooking from './components/QuickBooking';
import Fleet from './components/Fleet';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import AboutSection from './components/AboutSection';
import LocalOutstation from './components/LocalOutstation';
import HowItWorks from './components/HowItWorks';
import CallToAction from './components/CallToAction';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [initialService, setInitialService] = useState(null);

  const handleOpenBooking = (serviceName = null) => {
    setSelectedVehicle(null);
    setInitialService(serviceName);
    setModalOpen(true);
  };

  const handleSelectVehicle = (vehicleObj) => {
    setSelectedVehicle(vehicleObj);
    setInitialService(null);
    setModalOpen(true);
  };

  const handleQuickBookingRequest = (formData) => {
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Sticky Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Quick Booking Form overlapping */}
        <QuickBooking onRequestRide={handleQuickBookingRequest} />

        {/* Vehicles / Fleet Section */}
        <Fleet onSelectVehicle={handleSelectVehicle} />

        {/* Services Section */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* About Section */}
        <AboutSection onOpenBooking={handleOpenBooking} />

        {/* Local & Outstation Split Section */}
        <LocalOutstation onOpenBooking={handleOpenBooking} />

        {/* How It Works (01, 02, 03) */}
        <HowItWorks />

        {/* Full-width CTA Banner */}
        <CallToAction onOpenBooking={handleOpenBooking} />

        {/* Contact Form & Info */}
        <ContactSection onSubmitRequest={handleQuickBookingRequest} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions />

      {/* Interactive Booking Request Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedVehicle={selectedVehicle}
        initialService={initialService}
      />
    </div>
  );
}
