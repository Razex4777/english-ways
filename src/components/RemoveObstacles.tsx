import React from 'react';
import { motion } from 'framer-motion';
import { scrollToRegistration } from '../utils/scrollUtils';

const RemoveObstacles = () => {

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


          <h2 className="text-4xl lg:text-6xl font-bold text-charcoal mb-6 text-center">
            <span className="text-gray-800">حتى لو جربت قبل</span>{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">
              وفشلت
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
            تدريب تطبيقي منذ أول دقيقة، تحديات ممتعة، وتشجيع مستمر حتى ترى تقدمك بنفسك — جلسة تقييم، خطة شخصية، وتنفيذ منظم.
          </p>
        </motion.div>



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
