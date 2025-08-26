import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Volume2, Users, Clock, TrendingUp } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      title: 'تتواصل بثقة في العمل والسفر والمواقف الاجتماعية',
      description: 'ستكتسب الثقة اللازمة للتواصل في جميع جوانب حياتك المهنية والشخصية',
      icon: MessageCircle,
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      title: 'نطق واضح وتمرينات عملية تُسقط رهبة التحدّث',
      description: 'تدريبات مكثفة على النطق الصحيح لتتخلص من الخوف والتردد في التحدث',
      icon: Volume2,
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      title: 'محادثات حقيقية بدل التلقين والحفظ',
      description: 'تعلم تفاعلي وعملي يركز على الممارسة الحقيقية للغة في مواقف واقعية',
      icon: Users,
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      title: 'مواعيد مرنة تناسب جدولك',
      description: 'جدولة مرنة تتكيف مع التزاماتك الشخصية والمهنية',
      icon: Clock,
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50'
    },
    {
      title: 'متابعة تقدّم أسبوعية وخطة تطوير شخصية',
      description: 'تقارير دورية مفصلة لمتابعة تطورك مع خطة مخصصة لاحتياجاتك',
      icon: TrendingUp,
      gradient: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50'
    }
  ];

  return (
    <section id="benefits" className="py-16 lg:py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23667eea' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
            <span className="text-primary">ماذا ستكسب معنا؟</span>
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto text-center leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            ستحصل على الفوائد من دوراتنا
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-6 lg:p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated gradient background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.bgColor} opacity-0 group-hover:opacity-70 transition-opacity duration-500`}
                  initial={false}
                />

                {/* Content */}
                <div className="relative z-10 text-right" dir="rtl">
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <benefit.icon className="w-7 h-7 text-white" />
                    </motion.div>
                  </div>

                  <h3 className="text-lg lg:text-xl font-bold text-charcoal mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 text-sm lg:text-base">
                    {benefit.description}
                  </p>

                  {/* Progress indicator */}
                  <motion.div
                    className={`mt-6 h-1 bg-gradient-to-r ${benefit.gradient} rounded-full origin-right`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
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

export default Benefits;
