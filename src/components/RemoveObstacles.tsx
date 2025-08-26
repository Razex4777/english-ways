import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Target, Zap } from 'lucide-react';
import { scrollToRegistration } from '../utils/scrollUtils';

const RemoveObstacles = () => {
  const obstacles = [
    {
      icon: Shield,
      title: 'حتى لو جربت قبل وفشلت',
      description: 'تدريب تطبيقي منذ أول دقيقة، تحديات ممتعة، وتشجيع مستمر حتى ترى تقدمك بنفسك',
      details: 'لا تقلق من تجارب سابقة فاشلة - لدينا منهج مختلف تماماً يركز على النتائج العملية',
      gradient: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Sparkles,
      title: 'جلسة تقييم + خطة شخصية',
      description: 'نبدأ بتقييم شامل لمستواك الحالي، ثم نضع خطة مخصصة تتناسب مع أهدافك',
      details: 'كل خطوة محسوبة بعناية - من التقييم الدقيق إلى التنفيذ المنظم',
      gradient: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      icon: Target,
      title: 'نتائج مضمونة',
      description: 'نركز على تحقيق أهدافك العملية - سواء كانت مقابلة عمل، أو محادثة يومية، أو ثقة في التواصل',
      details: 'لن نرضى بأقل من رؤية تقدمك وتحقيق أهدافك المحددة',
      gradient: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: Zap,
      title: 'سرعة وفعالية',
      description: 'طريقة تعلم سريعة وفعالة تُسقط رهبة التحدث وتبني الثقة تدريجياً',
      details: 'لا مزيد من الانتظار - ابدأ برؤية النتائج من أول أسبوع',
      gradient: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50'
    }
  ];

  return (
    <section id="obstacles" className="section-padding bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-400/8 to-indigo-500/8 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tr from-purple-400/8 to-blue-500/8 rounded-full blur-3xl"
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
            <span className="text-gray-800">حتى لو جربت قبل</span>{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">
              وفشلت
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-right leading-relaxed">
            عندنا الحل العملي السريع - تدريب تطبيقي منذ أول دقيقة مع نتائج مضمونة
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {obstacles.map((obstacle, index) => (
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
                  className={`absolute inset-0 bg-gradient-to-br ${obstacle.bgColor} opacity-0 group-hover:opacity-70 transition-opacity duration-500`}
                  initial={false}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${obstacle.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <obstacle.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>

                  <div className="text-right">
                    <h3 className="text-2xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors duration-300">
                      {obstacle.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
                      {obstacle.description}
                    </p>
                    <div className="bg-gray-50 rounded-xl p-4 mb-4">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {obstacle.details}
                      </p>
                    </div>
                  </div>

                  {/* Progress indicator */}
                  <motion.div
                    className={`mt-4 h-1 bg-gradient-to-r ${obstacle.gradient} rounded-full origin-right`}
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

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary to-purple-600 rounded-3xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">جاهز للتغيير؟</h3>
            <p className="text-lg mb-6 opacity-90">
              لا تدع العوائق تمنعك - ابدأ رحلتك اليوم مع منهج مثبت النتائج
            </p>
            <motion.button
              onClick={scrollToRegistration}
              className="bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ابدأ الآن مجاناً
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RemoveObstacles;
