import { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import ProofPoints from './components/proof/ProofPoints';
import LearningMethod from './components/method/LearningMethod';
import FeatureGrid from './components/featureGrid/FeatureGrid';
import ProgramExplorer from './components/courses/ProgramExplorer';
import StudentJourney from './components/journey/StudentJourney';
import Comparison from './components/whyUs/Comparison';
import FacultySection from './components/faculty/FacultySection';
import ExamStudio from './components/practice/ExamStudio';
import BatchesSection from './components/batches/BatchesSection';
import ScholarshipSection from './components/scholarship/ScholarshipSection';
import ExpectationsSection from './components/expectations/ExpectationsSection';
import EventsSection from './components/events/EventsSection';
import FaqSection from './components/faq/FaqSection';
import FinalCTA from './components/cta/FinalCTA';
import Footer from './components/footer/Footer';

import { ConsultationModal, QuickSearchModal } from './components/modals/GlobalModals';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [consultKey, setConsultKey] = useState(0);
  const [searchKey, setSearchKey] = useState(0);

  const openConsultation = () => {
    setConsultKey((k) => k + 1);
    setIsConsultationOpen(true);
  };
  const openSearch = () => {
    setSearchKey((k) => k + 1);
    setIsSearchOpen(true);
  };

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] flex flex-col font-sans selection:bg-[rgba(24,169,153,0.25)]">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <Navbar onOpenConsultation={openConsultation} onOpenSearch={openSearch} />

      <main id="main" className="flex-1">
        <Hero />
        <ProofPoints />
        <LearningMethod />
        <FeatureGrid />
        <ProgramExplorer />
        <StudentJourney />
        <Comparison />
        <FacultySection />
        <ExamStudio />
        <ScholarshipSection />
        <BatchesSection onEnquire={openConsultation} />
        <ExpectationsSection />
        <EventsSection onNotify={openConsultation} />
        <FaqSection />
        <FinalCTA onOpenConsultation={openConsultation} />
      </main>

      <Footer />

      <ConsultationModal key={consultKey} isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
      <QuickSearchModal key={searchKey} isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
}