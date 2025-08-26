import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimationProvider from './components/AnimationProvider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SuccessStory from './components/SuccessStory';
import TrustBar from './components/TrustBar';
import FieldOfferings from './components/FieldOfferings';
import TargetAudience from './components/TargetAudience';
import Benefits from './components/Benefits';
import SpecialOffer from './components/SpecialOffer';
import Process from './components/Process';
import Courses from './components/Courses';
import Achievements from './components/Achievements';
import Testimonials from './components/Testimonials';
import Features from './components/Features';
import RemoveObstacles from './components/RemoveObstacles';
import FAQ from './components/FAQ';
import RegistrationSection from './components/RegistrationSection';
import FloatingCTA from './components/FloatingCTA';
import ExitIntentModal from './components/ExitIntentModal';
import SideNavigation from './components/SideNavigation';
import ThankYou from './components/ThankYou';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <SuccessStory />
      <TrustBar />
      <Courses />
      <FieldOfferings />
      <TargetAudience />
      <Benefits />
      <Features />
      <Testimonials />
      <SpecialOffer />
      <RemoveObstacles />
      <Process />
      <Achievements />
      <RegistrationSection />
      <FAQ />
      <FloatingCTA />
      <ExitIntentModal />
      <SideNavigation />
    </>
  );
}

// Main App component with routing
function App() {
  return (
    <Router>
      <AnimationProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </div>
      </AnimationProvider>
    </Router>
  );
}

export default App;