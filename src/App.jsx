import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LanguageProvider } from './LanguageContext.jsx';
import { IntroLoader } from './components/IntroLoader.jsx';
import { Navbar } from './components/Navbar.jsx';
import { HeroSection } from './components/HeroSection.jsx';
import { AboutMissionVisionSection } from './components/AboutMissionVisionSection.jsx';
import { ServicesSection } from './components/ServicesSection.jsx';
import { TestimonialsAndStats } from './components/TestimonialsAndStats.jsx';
import { FinalCtaSection } from './components/FinalCtaSection.jsx';
import { ClinicInfoSection } from './components/ClinicInfoSection.jsx';
import { Footer } from './components/Footer.jsx';
import { AppointmentModal } from './components/AppointmentModal.jsx';

export function AppContent() {
  const [activeSection, setActiveSection] = useState('hero');
  const [bookingOpen, setBookingOpen] = useState(false);
  const [introDone, setIntroDone] = useState(false);

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenBooking = (doctor = null, service = null) => {
    setSelectedDoctor(doctor);
    setSelectedService(service);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f0f9ff] text-[#0f172a] font-sans selection:bg-[#0284c7] selection:text-white">
      <IntroLoader onComplete={() => setIntroDone(true)} />

      {/* Cinematic Reveal Container after IntroLoader completes */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={introDone ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Navbar
          onOpenBooking={() => handleOpenBooking()}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        <main>
          <HeroSection
            introDone={introDone}
            onOpenBooking={(service) => handleOpenBooking(null, service)}
          />

          <AboutMissionVisionSection 
            onOpenBooking={() => handleOpenBooking()}
          />

          <ServicesSection
            onOpenBooking={(service) => handleOpenBooking(null, service)}
          />

          <TestimonialsAndStats />

          <FinalCtaSection
            onOpenBooking={() => handleOpenBooking()}
          />

          <ClinicInfoSection />
        </main>

        <Footer
          onOpenBooking={() => handleOpenBooking()}
        />
      </motion.div>

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedDoctor={selectedDoctor}
        preselectedService={selectedService}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

