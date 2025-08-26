import React from 'react';
import { motion } from 'framer-motion';

// Custom SVG Icons
const BookingIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="16" r="2" fill="currentColor"/>
  </svg>
);

const AssessmentIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
    <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
    <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"/>
    <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"/>
    <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="15" r="1" fill="currentColor"/>
  </svg>
);

const LearningIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 21 12 17.77 5.82 21 7 13.87 2 9l6.91-.74L12 2z" stroke="currentColor" strokeWidth="2"/>
    <circle cx="9" cy="9" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="15" cy="15" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M8 14l8-8" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const CertificateIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6h16v10H4z" stroke="currentColor" strokeWidth="2" rx="2"/>
    <path d="M8 21l2-2 2 2 2-2" stroke="currentColor" strokeWidth="2"/>
    <line x1="8" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="2"/>
    <line x1="10" y1="13" x2="14" y2="13" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="8" r="1" fill="currentColor"/>
  </svg>
);



const Process = () => {
  const steps = [
    {
      icon: BookingIcon,
      title: 'احجز موعدك المجاني اليوم',
      description: 'جلسة مجانية لتحديد المستوى وبناء خطة شخصية للوصول إلى التواصل بثقة.',
      step: '01',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'from-emerald-50 to-teal-50',
      accentColor: 'emerald-500'
    },
    {
      icon: AssessmentIcon,
      title: 'اختبار مستوى أونلاين',
      description: 'تقييم شامل لمستواك الحالي مع تحديد نقاط القوة والتحسين.',
      step: '02',
      color: 'from-primary to-primary/80',
      bgColor: 'from-primary/5 to-primary/10',
      accentColor: 'primary'
    },
    {
      icon: LearningIcon,
      title: 'خطة شخصية للوصول إلى التواصل بثقة',
      description: 'خطة مخصصة تماماً لمستواك وأهدافك لضمان تطورك المستمر.',
      step: '03',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50',
      accentColor: 'blue-500'
    },
    {
      icon: CertificateIcon,
      title: 'دروس منتظمة + متابعة تقدم خطوة بخطوة',
      description: 'محادثات حقيقية وتمارين نطق مع تقرير أسبوعي مفصل لتقدمك.',
      step: '04',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'from-amber-50 to-orange-50',
      accentColor: 'amber-500'
    }
  ];

  return (
    <section id="process" className="section-padding bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-emerald-400/8 to-teal-500/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/6 to-indigo-500/6 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>
      
      <div className="container-max relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          
          <motion.h2
            className="text-5xl lg:text-7xl font-black mb-8 text-center leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-600 bg-clip-text text-transparent relative">
              خطوات التعلّم
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto text-center leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            رحلة تعلم مصممة خصيصاً لك - من التقييم المجاني إلى الإتقان الكامل
          </motion.p>
        </motion.div>

        {/* Enhanced Steps Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Step Card */}
                <motion.div
                  className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated gradient background */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} opacity-0 group-hover:opacity-70 transition-opacity duration-500`}
                    initial={false}
                  />
                  
                  {/* Floating decorative elements */}
                  <div className="absolute top-6 right-6 w-24 h-24 bg-gradient-to-br from-white/20 to-white/5 rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-white/15 to-white/5 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-8">
                      <motion.div 
                        className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <step.icon className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      <motion.div 
                        className={`text-7xl font-black text-${step.accentColor}/10 group-hover:text-${step.accentColor}/20 transition-colors duration-500 leading-none`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                        viewport={{ once: true }}
                      >
                        {step.step}
                      </motion.div>
                    </div>
                    
                    <motion.h3 
                      className="text-2xl lg:text-3xl font-bold text-charcoal mb-4 text-right leading-tight group-hover:text-gray-800 transition-colors duration-300"
                      whileHover={{ x: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {step.title}
                    </motion.h3>
                    
                    <p className="text-gray-600 text-lg leading-relaxed text-center group-hover:text-gray-700 transition-colors duration-300">
                      {step.description}
                    </p>

                    {/* Progress indicator */}
                    <motion.div
                      className={`mt-6 h-1 bg-gradient-to-r ${step.color} rounded-full origin-right`}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.8 }}
                      viewport={{ once: true }}
                    />
                  </div>

                  {/* Connection line for desktop */}
                  {index < steps.length - 1 && index % 2 === 0 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
                  )}
                </motion.div>


              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;