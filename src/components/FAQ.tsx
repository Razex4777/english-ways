import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'هل أحتاج خبرة سابقة؟',
      answer: 'لا. نبدأ من مستواك الحالي بعد جلسة تقييم مجانية، ونوجهك لمسار ملائم (D/C/B/A، أو أعمال)، مع خطة تركز على المحادثة والتطبيق العملي.'
    },
    {
      question: 'ما مدة الدورة وعدد اللقاءات؟',
      answer: 'المسار الأساسي يمتد 5 شهور، بواقع لقاءين أسبوعيًا، مدة كل لقاء ساعة واحدة. هناك جلسات إثرائية اختيارية وفق المستوى. (إنجليزي الأعمال برنامج مكثف 3 شهور بلقائين أسبوعيًا).'
    },
    {
      question: 'كيف تُحدد المواعيد؟',
      answer: 'المواعيد مرنة. بما يتناسب مع طالب في الجلسات الفردية أما الجلسات الجماعية كل 5 طالب ضمن مجموعة يتابعون مع معلمة على جروب واتساب خاص لتحديد الميعاد الأنسب للجميع أسبوعيًا.'
    },
    {
      question: 'هل توجد شهادة؟',
      answer: 'نعم، شهادة صادرة عن الأكاديمية بعد اجتياز متطلبات التقييم النهائي.'
    },
    {
      question: 'كم التكلفة؟',
      answer: 'يتم تحديد السعر بعد جلسة تحديد المستوى؛ لأن التكلفة تعتمد على مستواك الحالي، المسار المختار، ونوع التدريب (فردي/مجموعة/أعمال).'
    },
    {
      question: 'ما طبيعة المحتوى داخل الحصص؟',
      answer: 'محادثات موجهة، تمارين نطق، مفردات وظيفية، لعب أدوار لمواقف العمل والسفر، مهام كتابة قصيرة، وتغذية راجعة فورية على الأداء.'
    },
    {
      question: 'كيف أتابع تقدمي؟',
      answer: 'ستحصل على تقرير أسبوعي مختصر مع نقاط القوة والتحسين، وتمارين منزلية قصيرة مدعومة بمواد رقمية.'
    }
  ];

  return (
    <section id="faq" className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="container-max relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl lg:text-6xl font-bold text-charcoal mb-4 text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            الأسئلة الشائعة (FAQ){' '}
            <span className="text-red-500">؟</span>
          </motion.h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-400 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <button
                  className="w-full text-right flex items-center justify-between p-6 hover:bg-green-500 transition-colors duration-300"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <h3 className="text-lg lg:text-xl font-bold text-charcoal flex-1 text-right pr-4">
                    {faq.question}
                  </h3>

                  <div className="flex-shrink-0">
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 flex items-center justify-center"
                    >
                      <ChevronDown className="w-6 h-6 text-charcoal" />
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
                      <div className="px-6 pb-6 bg-white">
                        <p className="text-gray-700 leading-relaxed text-base lg:text-lg text-right">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
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