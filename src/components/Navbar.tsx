import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { scrollToRegistration } from '../utils/scrollUtils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (isDropdownOpen && !(event.target as Element).closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const mainNavItems = [
    { name: 'الدورات', sectionId: 'courses' },
    { name: 'المميزات', sectionId: 'features' },
    { name: 'الخطوات', sectionId: 'process' },
  ];

  const dropdownNavItems = [
    { name: 'قصص النجاح', sectionId: 'success-story' },
    { name: 'الثقة', sectionId: 'trust' },
    { name: 'المجالات المقدمة', sectionId: 'offerings' },
    { name: 'الجمهور المستهدف', sectionId: 'target-audience' },
    { name: 'الفوائد المباشرة', sectionId: 'benefits' },
    { name: 'الإنجازات', sectionId: 'achievements' },
    { name: 'إزالة العوائق', sectionId: 'obstacles' },
    { name: 'الأسئلة الشائعة', sectionId: 'faq' },
  ];

  const allNavItems = [...mainNavItems, ...dropdownNavItems];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ direction: 'rtl' }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center">
            <img
              src="/assets/logos/English_way.jpg"
              alt="English Ways"
              className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="mr-8 xl:mr-10 flex items-baseline gap-4 xl:gap-6">
              {mainNavItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-charcoal hover:text-primary transition-colors duration-200 font-medium px-2 xl:px-3 py-2 rounded-lg hover:bg-primary/5 text-sm xl:text-base whitespace-nowrap"
                >
                  {item.name}
                </button>
              ))}

              {/* Dropdown Menu */}
              <div className="relative dropdown-container">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-1 xl:gap-2 text-charcoal hover:text-primary transition-colors duration-200 font-medium px-2 xl:px-3 py-2 rounded-lg hover:bg-primary/5 text-sm xl:text-base whitespace-nowrap"
                >
                  المزيد
                  {isDropdownOpen ? <ChevronUp className="w-3 h-3 xl:w-4 xl:h-4" /> : <ChevronDown className="w-3 h-3 xl:w-4 xl:h-4" />}
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-border py-2 z-50"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {dropdownNavItems.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => {
                            scrollToSection(item.sectionId);
                            setIsDropdownOpen(false);
                          }}
                          className="block w-full text-left px-4 py-3 text-charcoal hover:text-primary hover:bg-primary/5 transition-colors duration-200 text-right text-sm xl:text-base"
                        >
                          {item.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <button onClick={scrollToRegistration} className="btn-primary text-sm xl:text-base px-4 xl:px-6 py-2 xl:py-3 whitespace-nowrap">
              احجز جلسة مجانية
            </button>
          </div>

          {/* Tablet Navigation (md to lg) */}
          <div className="hidden md:block lg:hidden">
            <div className="flex items-center gap-3">
              <div className="flex items-baseline gap-2">
                {mainNavItems.slice(0, 2).map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.sectionId)}
                    className="text-charcoal hover:text-primary transition-colors duration-200 font-medium px-2 py-2 rounded-lg hover:bg-primary/5 text-sm whitespace-nowrap"
                  >
                    {item.name}
                  </button>
                ))}

                {/* Simplified dropdown for tablet */}
                <div className="relative dropdown-container">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-1 text-charcoal hover:text-primary transition-colors duration-200 font-medium px-2 py-2 rounded-lg hover:bg-primary/5 text-sm"
                  >
                    المزيد
                    {isDropdownOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>

                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        className="absolute top-full right-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-border py-2 z-50"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {[...mainNavItems.slice(2), ...dropdownNavItems].map((item) => (
                          <button
                            key={item.name}
                            onClick={() => {
                              scrollToSection(item.sectionId);
                              setIsDropdownOpen(false);
                            }}
                            className="block w-full text-left px-3 py-2 text-charcoal hover:text-primary hover:bg-primary/5 transition-colors duration-200 text-right text-sm"
                          >
                            {item.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <button onClick={scrollToRegistration} className="btn-primary text-sm px-3 py-2 ml-4 whitespace-nowrap">
                احجز جلسة مجانية
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-charcoal hover:text-primary transition-colors duration-200 p-2 rounded-lg hover:bg-primary/5 touch-manipulation"
            >
              {isMobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-border shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto">
              {allNavItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.sectionId);
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 text-charcoal hover:text-primary hover:bg-primary/5 transition-colors duration-200 font-medium rounded-lg text-right min-h-[48px] flex items-center touch-manipulation text-sm sm:text-base"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 py-3 mt-6 border-t border-gray-100">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    scrollToRegistration();
                  }}
                  className="btn-primary w-full min-h-[48px] touch-manipulation text-sm sm:text-base"
                >
                  احجز جلسة مجانية
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;