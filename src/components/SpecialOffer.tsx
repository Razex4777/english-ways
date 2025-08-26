import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Star, Zap, Gift, ArrowLeft, X, CreditCard, Building2 } from 'lucide-react';


// Custom SVG Icons
const DiscountIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

const FireIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.5 12.5L11 15L15.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
  </svg>
);

const SpecialOffer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 10,
    minutes: 22,
    seconds: 0
  });
  const [showPaymentModal, setShowPaymentModal] = useState(false);


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

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="special" className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 py-20">


      {/* Top Shape Divider - matches FieldOfferings background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20">
          <defs>
            <linearGradient id="topGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#f9fafb" />
              <stop offset="100%" stopColor="#dbeafe" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="url(#topGradient)"></path>
        </svg>
      </div>

      {/* Bottom Shape Divider - matches Process background */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-20">
          <defs>
            <linearGradient id="bottomGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f9fafb" />
              <stop offset="50%" stopColor="#dbeafe" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#e0e7ff" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill="url(#bottomGradient)"></path>
        </svg>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-rose-400/20 to-pink-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1], 
            rotate: [0, 180, 360],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-tr from-orange-400/20 to-rose-500/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2], 
            rotate: [360, 180, 0],
            x: [0, -30, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-400/15 to-orange-400/15 rounded-full blur-2xl"
          animate={{ 
            scale: [1, 1.1, 1], 
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-20 text-rose-400"
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Star className="w-8 h-8 fill-current" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 left-16 text-orange-400"
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Zap className="w-6 h-6 fill-current" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Discount Badge */}
            <motion.div
              className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base lg:text-lg font-bold mb-6 sm:mb-8 shadow-2xl"
              initial={{ scale: 0, rotate: -15 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <Gift className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
              خصم 30% لفترة محدودة
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FireIcon />
              </motion.div>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-black mb-4 sm:mb-6 text-center leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                ينتهي قريباً
              </span>
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto text-center leading-relaxed mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              فرصة محدودة للحصول على خصم 30% على جميع الدورات - سجل الآن قبل انتهاء العرض
            </motion.p>

            {/* Enhanced Countdown Timer */}
            <motion.div
              className="bg-white/95 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/60 mb-8 sm:mb-12 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Timer Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-rose-50 to-orange-50 opacity-50"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  >
                    <Clock className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-rose-500" />
                  </motion.div>
                  <span className="text-lg sm:text-2xl lg:text-3xl font-black text-gray-800">ينتهي العرض خلال:</span>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-2xl mx-auto">
                  {[
                    { value: timeLeft.days, label: 'يوم', color: 'from-rose-500 to-pink-600' },
                    { value: timeLeft.hours, label: 'ساعة', color: 'from-pink-500 to-rose-600' },
                    { value: timeLeft.minutes, label: 'دقيقة', color: 'from-orange-500 to-rose-500' },
                    { value: timeLeft.seconds, label: 'ثانية', color: 'from-rose-500 to-orange-500' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ scale: 0, y: 50 }}
                      whileInView={{ scale: 1, y: 0 }}
                      transition={{ type: "spring", duration: 0.6, delay: index * 0.1 + 0.5 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className={`bg-gradient-to-br ${item.color} text-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 mb-2 sm:mb-3 shadow-xl relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                        <motion.div
                          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black relative z-10"
                          key={item.value}
                          initial={{ scale: 1.2, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: "spring", duration: 0.4 }}
                        >
                          {item.value.toString().padStart(2, '0')}
                        </motion.div>
                      </div>
                      <div className="text-sm sm:text-base lg:text-lg font-bold text-gray-700">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enhanced CTA Button */}
            <motion.div
              className="flex flex-col items-center gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => setShowPaymentModal(true)}
                className="group relative bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 text-white px-6 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 rounded-2xl font-black text-lg sm:text-xl lg:text-2xl shadow-2xl overflow-hidden min-h-[48px] sm:min-h-[56px] touch-manipulation"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center gap-2 sm:gap-3">
                  احصل على الخصم الآن
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </motion.div>
                </div>
              </motion.button>

              <motion.div
                className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                <DiscountIcon />
                <span className="font-semibold">*العرض ساري لفترة محدودة - لا تفوت الفرصة</span>
              </motion.div>
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
                  style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
                >
                  <motion.div
                    className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 max-w-sm sm:max-w-2xl lg:max-w-4xl w-full max-h-[90vh] overflow-y-auto relative z-[10000] shadow-2xl mx-auto"
                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 20 }}
                    transition={{ type: "spring", duration: 0.3 }}
                    onClick={(e) => e.stopPropagation()}
                    style={{ position: 'relative', zIndex: 10000 }}
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setShowPaymentModal(false)}
                      className="absolute top-2 right-2 sm:top-4 sm:left-4 sm:right-auto w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
                    >
                      <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                    </button>

                    {/* Modal Content */}
                    <div className="text-center mb-6 sm:mb-8">
                      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">اختر طريقة الدفع المناسبة لك</h2>
                      <p className="text-sm sm:text-base text-gray-600">حدد الطريقة التي تفضلها لإتمام عملية الدفع</p>
                    </div>

                    {/* Payment Options */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
                          className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 text-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[120px] sm:min-h-[140px] touch-manipulation"
                        >
                          <div className="flex flex-col items-center gap-3 sm:gap-4">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center">
                              <CreditCard className="w-6 h-6 sm:w-8 sm:h-8" />
                            </div>
                            <div className="text-center">
                              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">دفع إلكتروني</h3>
                              <p className="text-white/90 text-sm sm:text-base lg:text-lg">فيزا / ماستركارد</p>
                              <p className="text-white/80 text-xs sm:text-sm mt-1 sm:mt-2">دفع سريع وآمن عبر الإنترنت</p>
                            </div>
                          </div>
                        </button>
                      </motion.div>

                      {/* Bank Transfer Option */
                      }
                      <motion.div
                        className="group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", duration: 0.2 }}
                      >
                        <div className="bg-gray-50 border-2 border-gray-200 p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full min-h-[120px] sm:min-h-[140px]">
                          <div className="flex flex-col items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center">
                              <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                            </div>
                            <div className="text-center">
                              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">حوالة بنكية</h3>
                            </div>
                          </div>
                          
                          {/* Price Section with discount */}
                          <div className="bg-rose-50 border border-rose-200 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 text-right">
                            <div className="text-rose-700 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">💰 سعر الدورة:</div>
                            <div className="space-y-1 text-xs sm:text-sm">
                              <div className="text-rose-800">
                                <span className="font-semibold">السعر الأصلي:</span>{' '}
                                <span className="line-through text-rose-500/80 decoration-rose-400/60 decoration-2">3300 شيقل</span>
                              </div>
                              <div className="text-rose-900 text-sm sm:text-base lg:text-lg font-bold">
                                <span>السعر بعد الخصم:</span>{' '}
                                <span>2390 شيقل فقط</span>
                              </div>
                            </div>
                          </div>

                          {/* Bank details */}
                          <div className="bg-white rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 text-right border">
                            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                              <div><span className="font-semibold">رقم الحساب:</span> 256968</div>
                              <div><span className="font-semibold">رقم الفرع:</span> 632</div>
                              <div><span className="font-semibold">اسم المستفيد:</span> English Way</div>
                              <div><span className="font-semibold">البنك:</span> هبوعليم</div>
                            </div>
                          </div>

                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 sm:p-3 text-right">
                            <p className="text-xs text-blue-800 leading-relaxed">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
