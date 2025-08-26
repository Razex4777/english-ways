import React from 'react';
import { motion } from 'framer-motion';
import { Star, Target, Zap, Users } from 'lucide-react';
import { scrollToRegistration } from '../utils/scrollUtils';

// Custom SVG Icons
const ConfidenceIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const PronunciationIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 9V15C3 15.5523 3.44772 16 4 16H7L10.5 19.5C11.0523 20.0523 12 19.6478 12 18.8284V5.17157C12 4.35218 11.0523 3.94769 10.5 4.5L7 8H4C3.44772 8 3 8.44772 3 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.5 8.5C15.5 8.5 17 9.5 17 12C17 14.5 15.5 15.5 15.5 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.5 6.5C19.5 6.5 21.5 8.5 21.5 12C21.5 15.5 19.5 17.5 19.5 17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ConversationIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 12H16M8 8H12M21 12C21 16.9706 16.9706 21 12 21C9.61305 21 7.32387 20.0518 5.63604 18.364C3.94821 16.6761 3 14.3869 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 21C12 21 15 18 15 12C15 6 12 3 12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FlexibilityIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProgressIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const CertifiedIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2C13.1046 2 14 2.89543 14 4V5H18C19.1046 5 20 5.89543 20 7V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V7C4 5.89543 4.89543 5 6 5H10V4C10 2.89543 10.8954 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ConversationFocusIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 10H12M8 14H16M21 12C21 16.9706 16.9706 21 12 21C10.5 21 9.08 20.67 7.78 20.08L3 21L4.08 16.22C3.33 14.92 3 13.5 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="19" cy="5" r="3" fill="currentColor"/>
  </svg>
);

const PersonalSupportIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 21V23M8 21V23M16 21V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Features = () => {
  const benefits = [
    {
      icon: ConfidenceIcon,
      title: 'ثقة في التواصل',
      description: 'تتواصل بثقة في العمل والسفر والمواقف الاجتماعية.',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50'
    },
    {
      icon: PronunciationIcon,
      title: 'نطق واضح',
      description: 'نطق واضح وتمرينات تُسقط رهبة التحّدث.',
      gradient: 'from-primary to-primary/80',
      bgGradient: 'from-purple-50 to-pink-50'
    },
    {
      icon: ConversationIcon,
      title: 'محادثات حقيقية',
      description: 'محادثات حقيقية بدل التلقين والحفظ.',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50'
    },
    {
      icon: FlexibilityIcon,
      title: 'مواعيد مرنة',
      description: 'مواعيد مرنة تناسب جدولك.',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50'
    },
    {
      icon: ProgressIcon,
      title: 'متابعة شخصية',
      description: 'متابعة تقّدم أسبوعية وخطة تطوير شخصية.',
      gradient: 'from-primary to-primary/80',
      bgGradient: 'from-indigo-50 to-purple-50'
    }
  ];

  const advantages = [
    {
      icon: CertifiedIcon,
      title: 'مدربون معتمدون',
      description: 'مدربون معتمدون بخبرة تعليم حقيقية.',
      highlight: 'خبرة عملية'
    },
    {
      icon: ConversationFocusIcon,
      title: '%80 وقت للمحادثة',
      description: '80% من وقت الحصة للمحادثة والتطبيق.',
      highlight: 'تطبيق عملي'
    },
    {
      icon: Users,
      title: 'مجموعات صغيرة',
      description: 'مجموعات صغيرة أو حصص فردية.',
      highlight: 'تعليم مخصص'
    },
    {
      icon: PersonalSupportIcon,
      title: 'دعم شخصي',
      description: 'دعم شخصي داخل الدورة وبعدها.',
      highlight: 'رعاية مستمرة'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-tr from-green-400/5 to-blue-500/5 rounded-full blur-2xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container-max relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">


          <motion.h2
            className="text-5xl lg:text-6xl font-bold mb-8 text-right leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            ماذا ستكسب{' '}
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              معنا؟
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-slate-600 max-w-4xl mx-auto text-right leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            تدريب عملي مباشر على المحادثة وفهم السمع - بعيد عن الحفظ الممل والقواعد المرهقة.
          </motion.p>


        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-slate-900">الفوائد المباشرة</h3>
              </div>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${benefit.bgGradient} rounded-2xl opacity-0 group-hover:opacity-30 transition-all duration-500 blur-xl`} />
                    <div className="relative bg-white rounded-2xl p-6 shadow-md group-hover:shadow-xl transition-all duration-500 border border-slate-100 group-hover:border-slate-200">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <benefit.icon className="w-7 h-7 text-white" />
                      </div>
                        <div className="flex-1 text-right">
                          <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors duration-300">
                        {benefit.title}
                      </h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

            {/* Advantages Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-slate-900">لماذا نحن الأفضل؟</h3>
              </div>

              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-white rounded-2xl p-6 shadow-md group-hover:shadow-xl transition-all duration-500 border border-slate-100 group-hover:border-primary/20">
                      <div className="flex items-center gap-4">
                        <div className="flex-1 text-right">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full">
                              {advantage.highlight}
                            </span>
                      </div>
                          <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                        {advantage.title}
                      </h4>
                          <p className="text-slate-600 text-sm leading-relaxed">
                        {advantage.description}
                      </p>
                        </div>
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                          <advantage.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;