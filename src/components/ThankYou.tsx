import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Gift, Star, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center p-4">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Success Icon */}
        <motion.div
          className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
        >
          <CheckCircle className="w-12 h-12 text-green-600" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-4xl lg:text-6xl font-black mb-6 text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span className="text-green-600">تم التسجيل بنجاح!</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          شكراً لك على تسجيلك في دورات English Ways!
        </motion.p>

        {/* Success Message */}
        <motion.div
          className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl border border-green-200 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gift className="w-6 h-6 text-purple-600" />
            <h3 className="text-xl font-bold text-gray-900">ماذا يحدث الآن؟</h3>
          </div>

          <div className="space-y-4 text-right">
            <div className="flex items-center gap-3 justify-end">
              <span className="text-gray-700 leading-relaxed">
                سيتواصل معك فريقنا خلال 24 ساعة لتحديد موعد الجلسة المجانية
              </span>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold text-sm">1</span>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-end">
              <span className="text-gray-700 leading-relaxed">
                ستحصل على تقييم مجاني لمستواك الحالي
              </span>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold text-sm">2</span>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-end">
              <span className="text-gray-700 leading-relaxed">
                خطة تعلم مخصصة تناسب أهدافك واحتياجاتك
              </span>
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 font-bold text-sm">3</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Rating Section */}
        <motion.div
          className="bg-white rounded-xl p-4 lg:p-6 shadow-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
            <span className="text-lg font-semibold text-gray-700 mr-2">4.9/5</span>
          </div>
          <p className="text-gray-600">أكثر من 10,000 طالب راضي عن خدماتنا</p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5" />
            العودة للرئيسية
          </Link>

          <a
            href="https://wa.me/972529435949"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            تواصل عبر واتساب
          </a>
        </motion.div>

        {/* Footer Message */}
        <motion.p
          className="text-sm text-gray-500 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          English Ways - تعلّم الإنجليزية بالطريقة الصحيحة
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ThankYou;



