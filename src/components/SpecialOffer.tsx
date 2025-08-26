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
              className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-bold mb-8 shadow-2xl"
              initial={{ scale: 0, rotate: -15 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <Gift className="w-6 h-6" />
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
              className="text-5xl lg:text-7xl font-black mb-6 text-right leading-tight"
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
              className="text-xl text-gray-600 max-w-3xl mx-auto text-right leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              فرصة محدودة للحصول على خصم 30% على جميع الدورات - سجل الآن قبل انتهاء العرض
            </motion.p>

            {/* Enhanced Countdown Timer */}
            <motion.div
              className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/60 mb-12 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Timer Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-rose-50 to-orange-50 opacity-50"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-4 mb-8">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  >
                    <Clock className="w-10 h-10 text-rose-500" />
                  </motion.div>
                  <span className="text-3xl font-black text-gray-800">ينتهي العرض خلال:</span>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-2xl mx-auto">
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
                      <div className={`bg-gradient-to-br ${item.color} text-white rounded-2xl p-6 mb-3 shadow-xl relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                        <motion.div
                          className="text-4xl lg:text-5xl font-black relative z-10"
                          key={item.value}
                          initial={{ scale: 1.2, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: "spring", duration: 0.4 }}
                        >
                          {item.value.toString().padStart(2, '0')}
                        </motion.div>
                      </div>
                      <div className="text-lg font-bold text-gray-700">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enhanced CTA Button */}
            <motion.div
              className="flex flex-col items-center gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                onClick={() => setShowPaymentModal(true)}
                className="group relative bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 text-white px-16 py-6 rounded-2xl font-black text-2xl shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center gap-3">
                  احصل على الخصم الآن
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </motion.div>
                </div>
              </motion.button>

              <motion.div
                className="flex items-center gap-4 text-sm text-gray-600"
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
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowPaymentModal(false)}
                >
                  <motion.div
                    className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                    initial={{ scale: 0.8, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 20 }}
                    transition={{ type: "spring", duration: 0.3 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => setShowPaymentModal(false)}
                      className="absolute top-6 left-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-600" />
                    </button>

                    {/* Modal Content */}
                    <div className="text-center mb-8">
                      <h2 className="text-3xl font-bold text-gray-800 mb-3">اختر طريقة الدفع المناسبة لك</h2>
                      <p className="text-gray-600">حدد الطريقة التي تفضلها لإتمام عملية الدفع</p>
                    </div>

                    {/* Payment Options */}
                    <div className="grid md:grid-cols-2 gap-6">
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
                          className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 text-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                          <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                              <CreditCard className="w-8 h-8" />
                            </div>
                            <div className="text-center">
                              <h3 className="text-2xl font-bold mb-2">دفع إلكتروني</h3>
                              <p className="text-white/90 text-lg">فيزا / ماستركارد</p>
                              <p className="text-white/80 text-sm mt-2">دفع سريع وآمن عبر الإنترنت</p>
                            </div>
                          </div>
                        </button>
                      </motion.div>

                      {/* Bank Transfer Option */}
                      <motion.div
                        className="group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", duration: 0.2 }}
                      >
                        <div className="bg-gray-50 border-2 border-gray-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                          <div className="flex flex-col items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                              <Building2 className="w-8 h-8 text-blue-600" />
                            </div>
                            <div className="text-center">
                              <h3 className="text-2xl font-bold text-gray-800 mb-2">حوالة بنكية</h3>
                              <p className="text-gray-600">للطلاب الذين لا يملكون فيزا</p>
                            </div>
                          </div>
                          
                          <div className="bg-white rounded-lg p-4 mb-4 text-right border">
                            <div className="space-y-2 text-sm">
                              <div><span className="font-semibold">رقم الحساب:</span> 256968</div>
                              <div><span className="font-semibold">رقم الفرع:</span> 632</div>
                              <div><span className="font-semibold">اسم المستفيد:</span> English Way</div>
                              <div><span className="font-semibold">البنك:</span> هبوعليم</div>
                            </div>
                          </div>

                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-right">
                            <p className="text-xs text-blue-800 leading-relaxed">
                              <span className="font-semibold">مهم:</span> بعد عمل الحوالة، أرسل صورة التحويل على رقم الواتساب 
                              <a 
                                href="https://wa.me/972529435949" 
                                className="font-semibold text-blue-600 hover:text-blue-800 transition-colors mx-1"
                                onClick={(e) => e.stopPropagation()}
                              >
                                +972 52-943-5949
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
