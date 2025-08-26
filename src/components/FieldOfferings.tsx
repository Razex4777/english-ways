import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Volume2, Briefcase, Users, Plane, BookOpen } from 'lucide-react';
import { scrollToRegistration } from '../utils/scrollUtils';

const FieldOfferings = () => {
  const offerings = [
    {
      icon: MessageCircle,
      title: 'محادثة يومية',
      description: 'مواقف واقعية للعمل والسفر والدراسة',
      details: 'محادثات طبيعية، عبارات عملية، مواقف الحياة اليومية',
      gradient: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Volume2,
      title: 'تحسين النطق',
      description: 'مخارج سليمة وتمرينات للتغلب على لهجة L1',
      details: 'تمارين صوتية، مخارج الحروف، تقليد الأصوات الطبيعية',
      gradient: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      icon: Briefcase,
      title: 'إنجليزي الأعمال',
      description: 'عروض، اجتماعات، تفاوض، مراسلات مهنية',
      details: 'عروض تقديمية، اجتماعات عمل، كتابة البريد الإلكتروني المهني',
      gradient: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: Users,
      title: 'التحضير للمقابلات',
      description: 'أسئلة شائعة + تمثيل أدوار + تغذية راجعة فورية',
      details: 'أسئلة المقابلات، تمارين الدور، تقييم الأداء، نصائح عملية',
      gradient: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50'
    },
    {
      icon: Plane,
      title: 'السفر والاختبارات الدولية',
      description: 'أساسيات التعامل والتواصل، واستراتيجيات فهم سمع/قراءة',
      details: 'مفردات السفر، محادثات المطار، فهم الإرشادات، اختبارات دولية',
      gradient: 'from-indigo-500 to-purple-600',
      bgColor: 'from-indigo-50 to-purple-50'
    }
  ];

  return (
    <section id="offerings" className="section-padding bg-gradient-to-br from-white via-gray-50 to-blue-50/30">
      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6 text-right">
            <span className="text-gray-800">دوراتنا تناسبك</span>{' '}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              أياً كان هدفك
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-right leading-relaxed">
            برامج متخصصة مصممة لتلبية احتياجاتك المهنية والأكاديمية والشخصية
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${offering.bgColor} opacity-0 group-hover:opacity-70 transition-opacity duration-500`}
                  initial={false}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${offering.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <offering.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  <div className="text-right">
                    <h3 className="text-2xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors duration-300">
                      {offering.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                      {offering.description}
                    </p>
                    <div className="bg-gray-50 rounded-xl p-4 mb-4">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {offering.details}
                      </p>
                    </div>
                  </div>

                  {/* Progress indicator */}
                  <motion.div
                    className={`mt-4 h-1 bg-gradient-to-r ${offering.gradient} rounded-full origin-right`}
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


      </div>
    </section>
  );
};

export default FieldOfferings;
