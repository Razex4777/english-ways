import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Gift, Star, ArrowLeft, X, CreditCard, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou: React.FC = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  // Block body scroll when modal is open
  useEffect(() => {
    if (showPaymentModal) {
      const originalOverflow = document.body.style.overflow;
      const originalPosition = document.body.style.position;
      
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.position = originalPosition;
        document.body.style.width = '';
      };
    }
  }, [showPaymentModal]);

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
          شكراً لك على تسجيلك في دورات English Way!
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
            <div className="flex items-center gap-3 justify-start">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600 font-bold text-sm">1</span>
              </div>
              <span className="text-gray-700 leading-relaxed">
                سيتواصل معك فريقنا خلال 24 ساعة لتحديد موعد الجلسة
              </span>
            </div>

            <div className="flex items-center gap-3 justify-start">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-green-600 font-bold text-sm">2</span>
              </div>
              <span className="text-gray-700 leading-relaxed">
                ستحصل على تقييم مجاني لمستواك الحالي
              </span>
            </div>

            <div className="flex items-center gap-3 justify-start">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-purple-600 font-bold text-sm">3</span>
              </div>
              <span className="text-gray-700 leading-relaxed">
                خطة تعلم مخصصة تناسب أهدافك واحتياجاتك
              </span>
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
          <p className="text-gray-600">أكثر من 1,200 طالب راضي عن خدماتنا</p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <button
            onClick={() => setShowPaymentModal(true)}
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 hover:from-rose-600 hover:via-pink-600 hover:to-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <CreditCard className="w-5 h-5" />
            ادفع الآن واحصل على خصم 30% مباشرة
          </button>

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
          English Way - تعلّم الإنجليزية بالطريقة الصحيحة
        </motion.p>
      </motion.div>

      {/* Payment Modal */}
      <AnimatePresence>
        {showPaymentModal && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPaymentModal(false)}
          >
            <motion.div
              className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 max-w-[95vw] sm:max-w-lg md:max-w-2xl lg:max-w-4xl w-full max-h-[95vh] overflow-y-auto relative z-[10000] shadow-2xl mx-auto"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowPaymentModal(false)}
                className="absolute top-2 right-2 sm:top-4 sm:left-4 sm:right-auto w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
              </button>

              {/* Modal Content */}
              <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">اختر طريقة الدفع المناسبة لك</h2>
                <p className="text-xs sm:text-sm md:text-base text-gray-600">حدد الطريقة التي تفضلها لإتمام عملية الدفع</p>
              </div>

              {/* Payment Options */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {/* Online Payment Option */}
                <motion.div
                  className="group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", duration: 0.2 }}
                >
                  <button
                    onClick={() => {
                      window.open('https://pay.lahza.io/8cSWi-F63z', '_blank');
                      setShowPaymentModal(false);
                    }}
                    className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 text-white p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[100px] sm:min-h-[120px] md:min-h-[140px] touch-manipulation"
                  >
                    <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center">
                        <CreditCard className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                      </div>
                      <div className="text-center">
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1">دفع إلكتروني</h3>
                        <p className="text-white/90 text-sm sm:text-base md:text-lg">فيزا / ماستركارد</p>
                        <p className="text-white/80 text-xs sm:text-sm md:text-base mt-1">دفع سريع وآمن عبر الإنترنت</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </motion.div>

                {/* Bank Transfer Option */}
                <motion.div
                  className="group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", duration: 0.2 }}
                >
                  <div className="bg-gray-50 border-2 border-gray-200 p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full min-h-[100px] sm:min-h-[120px] md:min-h-[140px]">
                    <div className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center">
                        <Building2 className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600" />
                      </div>
                      <div className="text-center">
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-1">حوالة بنكية</h3>
                      </div>
                    </div>
                    
                    {/* Price Section with discount */}
                    <div className="bg-rose-50 border border-rose-200 rounded-lg p-2 sm:p-3 md:p-4 mb-2 sm:mb-3 md:mb-4 text-right">
                      <div className="text-rose-700 font-semibold mb-1 sm:mb-2 text-xs sm:text-sm md:text-base">💰 سعر الدورة:</div>
                      <div className="space-y-1 text-xs sm:text-sm">
                        <div className="text-rose-800">
                          <span className="font-semibold">السعر الأصلي:</span> 
                          <span className="line-through text-rose-500/80 decoration-rose-400/60 decoration-2">3300 شيقل</span>
                        </div>
                        <div className="text-rose-900 text-xs sm:text-sm md:text-base lg:text-lg font-bold">
                          <span>السعر بعد الخصم:</span> 
                          <span>2390 شيقل فقط</span>
                        </div>
                      </div>
                    </div>

                    {/* Bank Details */}
                    <div className="bg-white rounded-lg p-2 sm:p-3 md:p-4 mb-2 sm:mb-3 md:mb-4 text-right border">
                      <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                        <div><span className="font-semibold">رقم الحساب:</span> 256968</div>
                        <div><span className="font-semibold">رقم الفرع:</span> 632</div>
                        <div><span className="font-semibold">اسم المستفيد:</span> English Way</div>
                        <div><span className="font-semibold">البنك:</span> هبوعليم</div>
                      </div>
                    </div>

                    {/* WhatsApp Contact */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 sm:p-3 text-right">
                      <p className="text-xs leading-relaxed text-blue-800">
                        <span className="font-semibold">🔹 مهم:</span> بعد عمل الحوالة، أرسل صورة التحويل على رقم الواتساب:
                        <a
                          href="https://wa.me/972529435949"
                          className="font-semibold text-blue-600 hover:text-blue-800 transition-colors mx-1 block sm:inline mt-1 sm:mt-0"
                          onClick={(e) => e.stopPropagation()}
                        >
                          +972-52-943-5949
                        </a>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThankYou;
