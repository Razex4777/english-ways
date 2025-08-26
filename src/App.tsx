import React from 'react';
import AnimationProvider from './components/AnimationProvider';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SuccessStory from './components/SuccessStory';
import TrustBar from './components/TrustBar';
import TargetAudience from './components/TargetAudience';
import FieldOfferings from './components/FieldOfferings';
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

function App() {
  return (
    <AnimationProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <SuccessStory />
        <TrustBar />
        <TargetAudience />
        <FieldOfferings />
        <SpecialOffer />
        <Process />
        <Courses />
        <Achievements />
        <Testimonials />
        <Features />
        <RemoveObstacles />
        <FAQ />
        <RegistrationSection />
        <FloatingCTA />
        <ExitIntentModal />
        <SideNavigation />
      </div>
    </AnimationProvider>
  );
}

export default App;