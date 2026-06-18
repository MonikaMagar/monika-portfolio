import React, { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis'; 
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutStory from './components/AboutStory';
import WhatIDo from './components/WhatIDo';
import ExperienceTimeline from './components/ExperienceTimeline';
import SkillsGrid from './components/SkillsGrid';
import SoftwareUsed from './components/SoftwareUsed';
import BrandsWorkedWith from './components/BrandsWorkedWith';
import WhyChooseMe from './components/WhyChooseMe';
import CTA from './components/CTA';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-white min-h-screen w-full relative">
      <CustomCursor />
      <Loader onLoadingComplete={() => setLoadingComplete(true)} />
      
      {loadingComplete && (
        <>
          <Navbar />
          <Hero />
          <AboutStory />
          <WhatIDo />
          <ExperienceTimeline />
          <SkillsGrid />
          <SoftwareUsed />
          <BrandsWorkedWith />
          <WhyChooseMe />
          <CTA />
        </>
      )}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
