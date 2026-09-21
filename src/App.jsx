import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Orb3DSection from './components/hero/Orb3DSection';
import BrandStory from './components/brand/BrandStory';
import CourseExplorer from './components/courses/CourseExplorer';
import CinematicJourney from './components/journey/CinematicJourney';
import WhyNexora from './components/whyUs/WhyNexora';
import FacultyShowcase from './components/faculty/FacultyShowcase';
import ResultsDashboard from './components/results/ResultsDashboard';
import TestSeriesMock from './components/testSeries/TestSeriesMock';
import UpcomingBatches from './components/batches/UpcomingBatches';
import CampusGallery from './components/gallery/CampusGallery';
import Testimonials from './components/testimonials/Testimonials';
import ScholarshipSection from './components/scholarship/ScholarshipSection';
import EventsMasterclasses from './components/events/EventsMasterclasses';
import FaqSection from './components/faq/FaqSection';
import FinalCTA from './components/cta/FinalCTA';
import Footer from './components/footer/Footer';

import { 
  ConsultationModal, 
  CourseDetailModal, 
  QuickSearchModal 
} from './components/modals/GlobalModals';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleOpenConsultation = () => setIsConsultationOpen(true);
  const handleOpenSearch = () => setIsSearchOpen(true);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-300">
      
      {/* 1. Header / Navbar */}
      <Navbar 
        onOpenConsultation={handleOpenConsultation}
        onOpenSearch={handleOpenSearch}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        
        {/* 2. Hero Section */}
        <Hero 
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 3. Interactive 3D Sphere / Orb (LEARN, PRACTICE, IMPROVE, ACHIEVE) */}
        <Orb3DSection />

        {/* 4. Brand Philosophy & Methodology */}
        <BrandStory />

        {/* 5. Course Explorer */}
        <CourseExplorer 
          onSelectCourse={(course) => setSelectedCourse(course)}
        />

        {/* 6. Cinematic Academy Scroll Journey */}
        <CinematicJourney />

        {/* 7. Why Nexora Matrix */}
        <WhyNexora />

        {/* 8. Faculty Showcase */}
        <FacultyShowcase 
          onOpenConsultation={handleOpenConsultation}
        />

        {/* 9. Results & AIR Rank Predictor */}
        <ResultsDashboard />

        {/* 10. Test Series & AI Portal Mock */}
        <TestSeriesMock />

        {/* 11. Upcoming Super-30 Batches */}
        <UpcomingBatches 
          onReserveSeat={() => handleOpenConsultation()}
        />

        {/* 12. Campus Experience Gallery */}
        <CampusGallery />

        {/* 13. Testimonials */}
        <Testimonials 
          onPlayVideo={() => handleOpenConsultation()}
        />

        {/* 14. Scholarship Section (NSAT) */}
        <ScholarshipSection />

        {/* 15. Live Webinars & Masterclasses */}
        <EventsMasterclasses 
          onRegisterEvent={() => handleOpenConsultation()}
        />

        {/* 16. Searchable Accordion FAQ */}
        <FaqSection />

        {/* 17. Final High-Impact CTA */}
        <FinalCTA 
          onOpenConsultation={handleOpenConsultation}
        />

      </main>

      {/* 18. Footer */}
      <Footer />

      {/* Global Modals */}
      <ConsultationModal 
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <CourseDetailModal 
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnroll={() => {
          setSelectedCourse(null);
          setIsConsultationOpen(true);
        }}
      />

      <QuickSearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectCourse={(c) => setSelectedCourse(c)}
      />

    </div>
  );
}
