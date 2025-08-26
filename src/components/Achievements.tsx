import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, BookOpen, Award, TrendingUp, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: Users,
      number: '1,200+',
      label: 'متعلم أنهوا البرامج بنجاح',
      description: 'خريجين فخورين يتواصلون بثقة',
      gradient: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: TrendingUp,
      number: '95%',
      label: 'نسبة إتمام في المسارات الأساسية',
      description: 'معدل إنجاز ممتاز في جميع المسارات التعليمية',
      gradient: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: Award,
      number: '100%',
      label: 'شهادة من الأكاديمية بعد اجتياز التقييم النهائي',
      description: 'شهادة معتمدة لكل متعلم ناجح',
      gradient: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50'
    }
  ];

  const stats = [
    {
      icon: Star,
      value: '4.9',
      label: 'تقييم المتعلمين',
      suffix: '/5'
    },
    {
      icon: BookOpen,
      value: '15+',
      label: 'سنوات خبرة',
      suffix: ''
    },
    {
      icon: Trophy,
      value: '50+',
      label: 'جلسات تدريبية',
      suffix: ''
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-indigo-400/8 to-purple-500/8 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-pink-400/8 to-indigo-500/8 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >


          <h2 className="text-4xl lg:text-6xl font-bold text-charcoal mb-6 text-right">
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              إنجازاتنا
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-right leading-relaxed">
            إنجازات ملموسة ونتائج مضمونة - ثق بنا لنوصلك إلى النجاح
          </p>
        </motion.div>

        {/* Main Achievements */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
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
                <div className="text-center">
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-br ${achievement.gradient} rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500 mx-auto mb-6`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <achievement.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  <motion.div
                    className="text-5xl lg:text-6xl font-black mb-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                  >
                    <span className={`bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                      {achievement.number}
                    </span>
                  </motion.div>

                  <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-primary transition-colors duration-300">
                    {achievement.label}
                  </h3>

                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {achievement.description}
                  </p>
                </div>

                {/* Progress bar */}
                <motion.div
                  className={`mt-6 h-2 bg-gradient-to-r ${achievement.gradient} rounded-full`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                  viewport={{ once: true }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-charcoal mb-2">
                {stat.value}
                <span className="text-xl text-gray-500">{stat.suffix}</span>
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
