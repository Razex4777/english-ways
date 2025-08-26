import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Section {
  id: string;
  name: string;
}

const SideNavigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [showText, setShowText] = useState<string>('');
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const sections: Section[] = [
    { id: 'hero', name: 'الرئيسية' },
    { id: 'success-story', name: 'قصص النجاح' },
    { id: 'trust', name: 'الثقة' },
    { id: 'courses', name: 'الدورات' },
    { id: 'offerings', name: 'المجالات المقدمة' },
    { id: 'target-audience', name: 'الجمهور المستهدف' },
    { id: 'benefits', name: 'الفوائد المباشرة' },
    { id: 'special', name: 'خصم محدود' },
    { id: 'process', name: 'الخطوات' },
    { id: 'achievements', name: 'الإنجازات' },
    { id: 'testimonials', name: 'الشهادات' },
    { id: 'features', name: 'المميزات' },
    { id: 'obstacles', name: 'إزالة العوائق' },
    { id: 'registration', name: 'التسجيل' },
    { id: 'faq', name: 'الأسئلة الشائعة' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);

          // Show section name temporarily with index
          const sectionIndex = sections.findIndex(s => s.id === sectionId);
          const section = sections.find(s => s.id === sectionId);
          if (section && sectionIndex !== -1) {
            setShowText(section.name);
            setActiveIndex(sectionIndex);
            setTimeout(() => {
              setShowText('');
              setActiveIndex(-1);
            }, 2000);
          }

          // Show navigation after first scroll
          setIsVisible(true);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all sections
    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observerRef.current?.observe(element);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Hide navigation on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.8, delay: 1, type: "spring", bounce: 0.3 }}
                     className="fixed right-8 top-1/4 transform -translate-y-1/4 z-40"
        >
          {/* Navigation dots */}
          <div className="flex flex-col gap-3 relative">
            {sections.map((section, index) => (
              <div key={section.id} className="relative">
                {/* Individual tooltip for each dot */}
                <AnimatePresence>
                  {showText && activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, x: 20, scale: 0.8 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: 20, scale: 0.8 }}
                      transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
                      className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-white/95 backdrop-blur-md text-slate-900 px-4 py-2 rounded-xl shadow-xl border border-white/40 text-sm font-semibold whitespace-nowrap z-50"
                    >
                      {showText}
                      {/* Arrow pointing to the dot */}
                      <div className="absolute left-[-4px] top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white/95 border-l border-b border-white/40 rotate-45"></div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  onClick={() => scrollToSection(section.id)}
                  className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSection === section.id
                      ? 'bg-primary scale-125'
                      : 'bg-white/60 hover:bg-white/80 hover:scale-110'
                  } shadow-lg`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {/* Active dot glow effect */}
                  {activeSection === section.id && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-primary"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 0.3, 0.7]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}

                  {/* Click ripple effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-white"
                    initial={{ scale: 0, opacity: 0.8 }}
                    whileTap={{
                      scale: 2,
                      opacity: 0,
                      transition: { duration: 0.4 }
                    }}
                  />
                </motion.button>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideNavigation;
