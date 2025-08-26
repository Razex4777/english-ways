import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Briefcase, TrendingUp } from 'lucide-react';
import { scrollToRegistration } from '../utils/scrollUtils';

const TargetAudience = () => {
  const audiences = [
    {
      title: 'طلاب المدارس',
      description: 'حسّن درجاتك واستعد لاختبارات بجروت وأم بثقة وفهم أوضح للنصوص والأسئلة.',
      icon: GraduationCap,
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      ctaText: 'ابدأ تقوية أساسك'
    },
    {
      title: 'طلاب الجامعات',
      description: 'سيطر على المحاضرات، قدّم العروض، واكتب مشاريعك الأكاديمية بوضوح.',
      icon: Users,
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      ctaText: 'طوّر مهاراتك الأكاديمية'
    },
    {
      title: 'الموظفون والعاملون عن بُعد',
      description: 'طوّر مهارات التواصل المهني، واثق في الاجتماعات والمراسلات الدولية، وافتح لنفسك فرصاً وظيفية جديدة.',
      icon: Briefcase,
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      ctaText: 'ارتقِ بإنجليزيتك المهنية'
    },
    {
      title: 'الأعمال (رواد ومحترفون)',
      description: 'دورات مُصممة لتطوير لغة الأعمال، ومهارات التفاوض، والعروض التقديمية، وإدارة الاجتماعات بالإنجليزية.',
      icon: TrendingUp,
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      ctaText: 'انطلق نحو فرص أكبر'
    }
  ];

  return (
    <section id="target-audience" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
              <div className="absolute inset-0 opacity-40">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-primary">لا تترك الإنجليزية عائقاً</span> بعد اليوم
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto text-center leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            إنجليزية لكل مرحلة - دورات متخصصة تناسب احتياجاتك وأهدافك
          </motion.p>
        </motion.div>

        {/* Audience Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${audience.bgColor} opacity-0 group-hover:opacity-70 transition-opacity duration-500`}
                  initial={false}
                />

                {/* Content */}
                <div className="relative z-10 text-right" dir="rtl">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${audience.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <audience.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors duration-300">
                    {audience.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {audience.description}
                  </p>

                  {/* CTA Button */}
                  <motion.button
                    onClick={scrollToRegistration}
                    className={`bg-gradient-to-r ${audience.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 w-full text-center`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {audience.ctaText}
                  </motion.button>

                  {/* Progress indicator */}
                  <motion.div
                    className={`mt-4 h-1 bg-gradient-to-r ${audience.gradient} rounded-full origin-right`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;
