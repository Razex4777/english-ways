import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AOS from 'aos';
import Lenis from 'lenis';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

interface AnimationProviderProps {
  children: React.ReactNode;
}

const AnimationProvider: React.FC<AnimationProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });

    // Initialize Lenis for smooth scrolling
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

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP Animations
    const initGSAPAnimations = () => {
      // Only initialize animations for elements that exist
      const parallaxHero = document.querySelector('.parallax-hero');
      if (parallaxHero) {
        gsap.to('.parallax-hero', {
          yPercent: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: '.parallax-hero',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // Floating elements animation
      const floatingElements = document.querySelectorAll('.floating-element');
      if (floatingElements.length > 0) {
        gsap.to('.floating-element', {
          y: -20,
          duration: 2,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: -1,
          stagger: 0.2,
        });
      }

      // Text reveal animation
      const textRevealElements = document.querySelectorAll('.text-reveal');
      if (textRevealElements.length > 0) {
        gsap.fromTo('.text-reveal', 
          { 
            y: 100, 
            opacity: 0 
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.text-reveal',
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Card stagger animation
      const staggerContainer = document.querySelector('.stagger-container');
      if (staggerContainer) {
        gsap.fromTo('.stagger-card',
          {
            y: 60,
            opacity: 0,
            scale: 0.8,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.2)',
            stagger: 0.2,
            scrollTrigger: {
              trigger: '.stagger-container',
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Progress bar animation
      const progressContainer = document.querySelector('.progress-container');
      if (progressContainer) {
        gsap.fromTo('.progress-bar',
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.progress-container',
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Morphing blob animation
      const morphingBlob = document.querySelectorAll('.morphing-blob');
      if (morphingBlob.length > 0) {
        gsap.to('.morphing-blob', {
          rotation: 360,
          duration: 20,
          ease: 'none',
          repeat: -1,
        });
      }
    };

    // Initialize animations after a short delay
    setTimeout(initGSAPAnimations, 100);

    // Cleanup
    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return <>{children}</>;
};

export default AnimationProvider;