import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, CheckCircle } from 'lucide-react';

const SuccessStory = () => {
  return (
    <section id="success-story" className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-max relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >


          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6 text-center">
            من التوتر إلى الطلاقة: <span className="text-primary">قصة ليان</span>
          </h2>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-white/50 relative">
            {/* Quote icon */}
            <div className="absolute -top-6 right-8">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 items-center">
              {/* Story content */}
              <div className="lg:col-span-2 space-y-6 text-right">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 justify-end">
                    <h3 className="text-2xl font-bold text-charcoal">ليان، 27 عاماً</h3>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p className="text-lg">
                      <span className="font-semibold text-red-600">المشكلة:</span> كانت تتوتر في كل مقابلة عبر الفيديو ولا تستطيع التعبير عن نفسها بثقة.
                    </p>
                    
                    <p className="text-lg">
                      <span className="font-semibold text-primary">الحل:</span> بعد أسابيع من التدريب العملي، صارت ترد بهدوء وتدير الحوار بثقة.
                    </p>
                    
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
                      <p className="text-lg font-semibold text-green-700">
                        <img
                          src="/img1.jpg"
                          alt="Success"
                          className="w-5 h-5 inline ml-2 rounded-full object-cover"
                        />
                        النتيجة: أنهت مقابلة عمل دولية وسمعت: "إنجليزيتك رائعة!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Image placeholder */}
              <div className="lg:col-span-1">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center shadow-xl border-4 border-white overflow-hidden">
                    <img
                      src="/img1.jpg"
                      alt="Success Icon"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStory;
