import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Briefcase, TrendingUp } from 'lucide-react';
import { scrollToRegistration } from '../utils/scrollUtils';

const TargetAudience = () => {
  const audiences = [
    {
      icon: GraduationCap,
      title: 'طلاب المدارس',
      description: 'حسّن درجاتك واستعد لاختبارات بجروت وأم بثقة وفهم أوضح للنصوص والأسئلة.',
      cta: 'ابدأ تقوية أساسك',
      gradient: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: BookOpen,
      title: 'طلاب الجامعات',
      description: 'سيطر على المحاضرات، قدّم العروض، واكتب مشاريعك الأكاديمية بوضوح.',
      cta: 'طوّر مهاراتك الأكاديمية',
      gradient: 'from-primary to-primary/80',
      bgColor: 'from-primary/5 to-primary/10'
    },
    {
      icon: Briefcase,
      title: 'الموظفون والعاملون عن بُعد',
      description: 'طوّر مهارات التواصل المهني، واثق في الاجتماعات والمراسلات الدولية، وافتح لنفسك فرصاً وظيفية جديدة.',
      cta: 'ارتقِ بإنجليزيتك المهنية',
      gradient: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: TrendingUp,
      title: 'الأعمال (رواد ومحترفون)',
      description: 'دورات مُصممة لتطوير لغة الأعمال، ومهارات التفاوض، والعروض التقديمية، وإدارة الاجتماعات بالإنجليزية.',
      cta: 'انطلق نحو فرص أكبر',
      gradient: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50'
    }
  ];

  return (
    <section id="audience" className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6 text-right">
            <span className="text-gray-800">لا تترك الإنجليزية عائقاً</span>{' '}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              بعد اليوم
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-right leading-relaxed">
            إنجليزية لكل مرحلة - دورات متخصصة تناسب احتياجاتك وأهدافك
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-br ${audience.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <audience.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 text-right">
                  <h3 className="text-2xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors duration-300">
                    {audience.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                    {audience.description}
                  </p>
                  <motion.button
                    onClick={scrollToRegistration}
                    className={`bg-gradient-to-r ${audience.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {audience.cta}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
