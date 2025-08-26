import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { scrollToRegistration } from '../utils/scrollUtils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'الرئيسية', href: '#hero' },
    { name: 'المميزات', href: '#features' },
    { name: 'الخطوات', href: '#process' },
    { name: 'الدورات', href: '#courses' },
    { name: 'الإنجازات', href: '#achievements' },
    { name: 'قصص النجاح', href: '#testimonials' },
    { name: 'الأسئلة الشائعة', href: '#faq' },
  ];

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
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <img
              src="/assets/logos/English_way.jpg"
              alt="English Ways"
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="mr-10 flex items-baseline gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-charcoal hover:text-primary transition-colors duration-200 font-medium px-3 py-2 rounded-lg hover:bg-primary/5"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <button onClick={scrollToRegistration} className="btn-primary">
              احجز جلسة مجانية
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-charcoal hover:text-primary transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-charcoal hover:text-primary transition-colors duration-200 font-medium rounded-lg hover:bg-primary/5 text-right"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-4 py-3 mt-4">
                <button onClick={scrollToRegistration} className="btn-primary w-full">
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