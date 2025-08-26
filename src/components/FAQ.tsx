import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, Clock, Calendar, Award, DollarSign, BookOpen, TrendingUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqCategories = [
    { icon: HelpCircle, color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { icon: Clock, color: 'text-green-500', bgColor: 'bg-green-50' },
    { icon: Calendar, color: 'text-purple-500', bgColor: 'bg-purple-50' },
    { icon: Award, color: 'text-yellow-500', bgColor: 'bg-yellow-50' },
    { icon: DollarSign, color: 'text-emerald-500', bgColor: 'bg-emerald-50' },
    { icon: BookOpen, color: 'text-indigo-500', bgColor: 'bg-indigo-50' },
    { icon: TrendingUp, color: 'text-orange-500', bgColor: 'bg-orange-50' },
  ];

  const faqs = [
    {
      question: 'هل أحتاج خبرة سابقة؟',
      answer: 'لا. نبدأ من مستواك الحالي بعد جلسة تقييم مجانية، ونوجهك لمسار ملائم (D/C/B/A، أو أعمال)، مع خطة تركز على المحادثة والتطبيق العملي.',
      category: faqCategories[0]
    },
    {
      question: 'ما مدة الدورة وعدد اللقاءات؟',
      answer: 'المسار الأساسي يمتد 5 أشهر، بواقع لقاءين أسبوعياً، مدة كل لقاء ساعة واحدة. هناك جلسات إثرائية اختيارية وفق المستوى. (إنجليزي الأعمال برنامج مكثف 3 أشهر بلقائين أسبوعياً).',
      category: faqCategories[1]
    },
    {
      question: 'كيف تُحدد المواعيد؟',
      answer: 'المواعيد مرنة. بما يتناسب مع طالب في الجلسات الفردية أما الجلسات الجماعية كل 5 طالب ضمن مجموعة يتابعون مع معلم على جروب واتساب خاص لتحديد الميعاد الأنسب للجميع أسبوعياً.',
      category: faqCategories[2]
    },
    {
      question: 'هل توجد شهادة؟',
      answer: 'نعم، شهادة صادرة عن الأكاديمية بعد اجتياز متطلبات التقييم النهائي.',
      category: faqCategories[3]
    },
    {
      question: 'كم التكلفة؟',
      answer: 'يتم تحديد السعر بعد جلسة تحديد المستوى؛ لأن التكلفة تعتمد على مستواك الحالي، المسار المختار، ونوع التدريب (فردي/مجموعة/أعمال).',
      category: faqCategories[4]
    },
    {
      question: 'ما طبيعة المحتوى داخل الحصص؟',
      answer: 'محادثات موجهة، تمارين نطق، مفردات وظيفية، لعب أدوار لمواقف العمل والسفر، مهام كتابة قصيرة، وتغذية راجعة فورية على الأداء.',
      category: faqCategories[5]
    },
    {
      question: 'كيف أتابع تقدمي؟',
      answer: 'ستحصل على تقرير أسبوعي مختصر مع نقاط القوة والتحسين، وتمارين منزلية قصيرة مدعومة بمواد رقمية.',
      category: faqCategories[6]
    }
  ];

  return (
    <section id="faq" className="relative section-padding bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl translate-x-48 translate-y-48"></div>

      <div className="container-max relative z-10">
        <div className="text-center mb-16">


          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold text-charcoal mb-6"
          >
            كل ما تريد معرفته{' '}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              عن الدورة
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            إجابات واضحة ومفصلة لمساعدتك في اتخاذ قرار مستنير حول رحلة إتقان الإنجليزية
          </motion.p>
        </div>

        {/* FAQ Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {faqs.map((faq, index) => {
            const IconComponent = faq.category.icon;
            return (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 hover:border-primary/20 hover:-translate-y-1">
                  <button
                    className="w-full text-right flex items-center justify-between p-6 group-hover:bg-gradient-to-r group-hover:from-primary/5 group-hover:to-purple-50 rounded-t-2xl transition-all duration-300"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${faq.category.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`w-6 h-6 ${faq.category.color}`} />
                      </div>
                      <h3 className={`text-lg lg:text-xl font-bold transition-colors duration-300 ${
                        openIndex === index ? 'text-primary' : 'text-charcoal group-hover:text-primary'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>

                    <div className="flex-shrink-0 mr-4">
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-8 h-8 bg-gray-100 group-hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors duration-300"
                      >
                        {openIndex === index ? (
                          <Minus className="w-5 h-5 text-primary" />
                        ) : (
                          <Plus className="w-5 h-5 text-gray-500 group-hover:text-primary transition-colors duration-300" />
                        )}
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-4"></div>
                          <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
            <h3 className="text-2xl font-bold text-charcoal mb-4">
              لم تجد إجابة سؤالك؟
            </h3>
            <p className="text-gray-600 mb-6">
              تواصل معنا وسنكون سعداء بمساعدتك
            </p>
            <a
              href="https://wa.me/972529435949"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 inline-block"
            >
              تواصل معنا
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;