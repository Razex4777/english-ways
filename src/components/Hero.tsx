import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, TrendingUp } from 'lucide-react';
import { scrollToRegistration } from '../utils/scrollUtils';

const Hero = () => {
  const proofBubbles = [
    { icon: CheckCircle, text: 'جلسة مجانية لتحديد المستوى', delay: 0.2 },
    { icon: Star, text: 'تقييم 4.9 من 5 نجوم', delay: 0.4 },
    { icon: TrendingUp, text: 'تقدم أسرع بـ 3 مرات', delay: 0.6 },
  ];

  return (
    <section id="hero" className="pt-24 pb-12 section-padding relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full morphing-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full morphing-blob" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full morphing-blob" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-start">
          {/* Left Column - The Authority (Image) */}
          <motion.div
            className="relative lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-aos="fade-right"
          >
            <div className="relative">
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl backdrop-blur-sm"></div>
              
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional English Tutor"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover transition-transform duration-700"
              />
              
              {/* Floating Proof Bubbles */}
              {proofBubbles.map((bubble, index) => (
                <motion.div
                  key={index}
                  className="absolute glass-card px-4 py-3 shadow-xl flex items-center space-x-2 hover:scale-110 transition-transform duration-300"
                  style={{
                    top: `${20 + index * 25}%`,
                    right: index % 2 === 0 ? '-10%' : 'auto',
                    left: index % 2 === 1 ? '-10%' : 'auto',
                    animationDelay: `${index * 0.5}s`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: bubble.delay }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <bubble.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-white whitespace-nowrap">
                    {bubble.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - The Pitch (Content) */}
          <motion.div
            className="space-y-8 relative z-10 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            data-aos="fade-left"
          >
            <div className="space-y-6">

              <motion.h1
                className="text-5xl lg:text-6xl font-bold leading-tight text-reveal text-right"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
              >
                تعلّم الإنجليزية بثقة...{' '}
                <span className="gradient-text">وودّع الارتباك في المقابلات والمكالمات والاجتماعات</span>
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 leading-relaxed text-right"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                تدريب عملي مباشر على المحادثة وفهم السماع - بعيد عن الحفظ الممل والقواعد المرهقة - لتتواصل بثقة في مواقف العمل والدراسة والسفر.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 sm:gap-4 justify-center sm:justify-end"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button
                onClick={scrollToRegistration}
                className="btn-primary text-lg pulse-glow order-1 sm:order-2 text-center"
              >
                ابدأ رحلة نجاحك الآن
              </button>
              <a 
                href="#testimonials"
                className="px-8 py-4 text-primary font-medium hover:bg-primary/5 transition-all duration-300 rounded-full border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5 order-2 sm:order-1 text-center"
              >
                شاهد قصص النجاح
              </a>
            </motion.div>


          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default Hero;