import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, MessageSquare, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Award,
      text: "مدربون معتمدون بخبرة تعليم حقيقية.",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      icon: MessageSquare,
      text: "80% من وقت الحصة للمحادثة والتطبيق.",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      icon: Users,
      text: "مجموعات صغيرة أو حصص فردية.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: CheckCircle,
      text: "دعم شخصي داخل الدورة وبعدها.",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="features" className="section-padding bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-primary/8 to-blue-500/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-emerald-400/8 to-teal-500/8 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
        />
      </div>

      <div className="container-max relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl lg:text-7xl font-black mb-8 text-center leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-charcoal">لماذا نحن؟</span>{' '}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-600 bg-clip-text text-transparent">
              (English way)
            </span>
          </motion.h2>


        </motion.div>

        {/* Enhanced Features Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
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
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Animated gradient background */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient.replace('from-', 'from-').replace('to-', 'to-')}/5 opacity-0 group-hover:opacity-70 transition-opacity duration-500`}
                    initial={false}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 flex items-center gap-6 text-right" dir="rtl">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 flex-shrink-0`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    <motion.p
                      className="text-xl font-semibold text-charcoal group-hover:text-gray-800 transition-colors duration-300 leading-relaxed flex-1"
                      whileHover={{ x: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {feature.text}
                    </motion.p>
                  </div>

                  {/* Progress indicator */}
                  <motion.div
                    className={`mt-6 h-1 bg-gradient-to-r ${feature.gradient} rounded-full origin-right`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;