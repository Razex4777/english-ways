import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Loader2, CheckCircle2, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getVisitorInfo } from '../utils/visitorInfo';

const ExitIntentModal = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 30,
    seconds: 0
  });


  


  // Body scroll lock when modal is open
  useEffect(() => {
    if (isVisible) {
      const originalOverflow = document.body.style.overflow;
      const originalPosition = document.body.style.position;
      const originalWidth = document.body.style.width;
      const originalTop = document.body.style.top;

      // Lock body scroll
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;

      return () => {
        // Restore body scroll
        document.body.style.overflow = originalOverflow;
        document.body.style.position = originalPosition;
        document.body.style.width = originalWidth;
        document.body.style.top = originalTop;

        // Restore scroll position
        window.scrollTo(0, parseInt(originalTop || '0') * -1);
      };
    }
  }, [isVisible]);

  useEffect(() => {
    // Show modal after 7 seconds as per plan
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    }, 7000);

    // Also show on mouse leave as backup
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        clearTimeout(timer);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timer);
    };
  }, [hasShown]);

  // Timer countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const sendWhatsAppMessage = async (message: string) => {
    const phoneNumber = '972529435949';
    const apiKey = '6442335';
    const encodedMessage = encodeURIComponent(message);

    const url = `https://api.callmebot.com/whatsapp.php?phone=${phoneNumber}&text=${encodedMessage}&apikey=${apiKey}`;

    console.log('🔄 [ExitIntentModal] Starting WhatsApp message send...');
    console.log('📱 Phone number:', phoneNumber);
    console.log('🔑 API Key:', apiKey);
    console.log('📝 Message length:', message.length);
    console.log('🌐 Final URL:', url);

    try {
      console.log('⏳ [ExitIntentModal] Attempting CallMeBot API call...');
      
      // Try with no-cors mode as fallback
      const response = await fetch(url, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
        }
      });

      console.log('✅ [ExitIntentModal] CallMeBot API call completed (no-cors mode)');
      console.log('📊 Response status (no-cors mode - limited info):', response.type);

      // Since no-cors doesn't allow us to read the response,
      // we'll assume success if no error is thrown
      console.log('✅ [ExitIntentModal] Assuming success - no error thrown');
      return true;

    } catch (error) {
      console.error('❌ [ExitIntentModal] WhatsApp API Error:', error);
      console.error('❌ [ExitIntentModal] Error details:', {
        name: error instanceof Error ? error.name : 'Unknown',
        message: error instanceof Error ? error.message : error,
        stack: error instanceof Error ? error.stack : undefined
      });
      
      // Fallback: Open WhatsApp directly
      try {
        console.log('🔄 [ExitIntentModal] Falling back to direct WhatsApp...');
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        console.log('🌐 [ExitIntentModal] WhatsApp URL:', whatsappUrl);
        window.open(whatsappUrl, '_blank');
        console.log('✅ [ExitIntentModal] WhatsApp fallback executed');
        return true;
      } catch (fallbackError) {
        console.error('❌ [ExitIntentModal] Fallback WhatsApp error:', fallbackError);
        throw error;
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    console.log('🚀 [ExitIntentModal] Form submission started');
    console.log('📋 [ExitIntentModal] Form data:', formData);

    try {
      // Get comprehensive visitor information
      console.log('⏳ [ExitIntentModal] Getting visitor information...');
      const visitorInfo = await getVisitorInfo();
      console.log('✅ [ExitIntentModal] Visitor info received:', visitorInfo);

      const message = `طلب جديد:
👤 الاسم: ${formData.fullName}
📞 رقم الواتساب: ${formData.phoneNumber}
✉ البريد: ${formData.email}
🎯 المستوى: البالغين
-------------------------
🌍 العنوان حسب IP: ${visitorInfo.location.city}, ${visitorInfo.location.region}, ${visitorInfo.location.country} - ${visitorInfo.location.timezone}
🗺 رابط الخريطة: ${visitorInfo.mapUrl}
💻 الجهاز: ${visitorInfo.device.deviceType}
🖥 المتصفح: ${visitorInfo.device.browser} ${visitorInfo.device.browserVersion}
🖧 الايبي: ${visitorInfo.ip}

🎯 طلب جلسة مجانية من Exit Intent Modal
⏰ الوقت: ${new Date().toLocaleString('ar-IL')}
📱 رقم الهاتف المقدم: ${formData.phoneNumber}

العميل مهتم بالحصول على جلسة مجانية مع هدية PDF. يرجى التواصل فوراً.`;

      console.log('📝 [ExitIntentModal] Final message prepared:');
      console.log(message);
      console.log('📏 [ExitIntentModal] Message length:', message.length);

      console.log('⏳ [ExitIntentModal] Sending WhatsApp message...');
      await sendWhatsAppMessage(message);
      console.log('✅ [ExitIntentModal] WhatsApp message sent successfully');

      setSubmitStatus('success');
      setFormData({ fullName: '', phoneNumber: '', email: '' });
      console.log('✅ [ExitIntentModal] Form reset and status updated');

      // Redirect to thank you page after successful submission
      setTimeout(() => {
        console.log('🔄 [ExitIntentModal] Redirecting to thank you page...');
        navigate('/thank-you');
      }, 2000); // 2 second delay to show success message

    } catch (error) {
      console.error('❌ [ExitIntentModal] Form submission error:', error);
      console.error('❌ [ExitIntentModal] Error details:', {
        name: error instanceof Error ? error.name : 'Unknown',
        message: error instanceof Error ? error.message : error,
        stack: error instanceof Error ? error.stack : undefined
      });
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsLoading(false);
      console.log('🏁 [ExitIntentModal] Form submission completed');
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-[95vw] sm:max-w-sm md:max-w-md lg:max-w-lg w-full p-3 sm:p-4 md:p-6 lg:p-8 relative mx-auto"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 w-10 h-10 sm:w-8 sm:h-8 md:w-6 md:h-6 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-gray-600 hover:text-gray-800 transition-colors duration-200 z-10 touch-manipulation"
            >
              <X className="w-4 h-4 sm:w-6 sm:h-6" />
            </button>

            <div className="text-right pb-2" dir="rtl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Gift className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary" />
              </div>

              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-gray-700 mb-1 sm:mb-2 md:mb-3 leading-tight">
                هل تتمنّى أن تتحدث الإنجليزية بثقة…
              </h3>



              {/* Urgency Timer */}
              <motion.div
                className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-2 sm:p-3 md:p-4 mb-2 sm:mb-3 md:mb-4 border border-red-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center justify-center gap-2 mb-3">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  >
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                  </motion.div>
                  <span className="text-red-700 font-bold text-xs sm:text-sm md:text-base">العرض ينتهي خلال:</span>
                </div>

                <div className="grid grid-cols-3 gap-1 sm:gap-2 md:gap-3 max-w-xs mx-auto">
                  {[
                    { value: timeLeft.hours, label: 'ساعة', color: 'from-red-500 to-pink-600' },
                    { value: timeLeft.minutes, label: 'دقيقة', color: 'from-orange-500 to-red-500' },
                    { value: timeLeft.seconds, label: 'ثانية', color: 'from-red-500 to-orange-500' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      initial={{ scale: 0, y: 20 }}
                      animate={{ scale: 1, y: 0 }}
                      transition={{ type: "spring", duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className={`bg-gradient-to-br ${item.color} text-white rounded-lg p-1 sm:p-2 md:p-3 shadow-lg relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                        <motion.div
                          className="text-sm sm:text-lg md:text-xl font-black relative z-10"
                          key={item.value}
                          initial={{ scale: 1.2, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: "spring", duration: 0.3 }}
                        >
                          {item.value.toString().padStart(2, '0')}
                        </motion.div>
                      </div>
                      <div className="text-xs text-red-600 font-semibold mt-1">{item.label}</div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="text-center mt-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >

                </motion.div>
              </motion.div>

              <div className="bg-accent/50 rounded-lg p-2 sm:p-3 md:p-4 mb-2 sm:mb-3 md:mb-4">
                <ul className="text-xs sm:text-sm text-gray-700 space-y-1 sm:space-y-2">
                  <li className="flex items-center justify-start gap-1 sm:gap-2">
                    <span className="text-green-600 text-xs sm:text-sm md:text-base">✓</span>
                    <span className="leading-tight text-xs sm:text-sm md:text-base">جلسة مجانية لتحديد مستواك مع مدرس معتمد</span>
                  </li>
                  <li className="flex items-center justify-start gap-1 sm:gap-2">
                    <span className="text-green-600 text-xs sm:text-sm md:text-base">✓</span>
                    <span className="leading-tight text-xs sm:text-sm md:text-base">هدية PDF: 20 جملة عملية تستخدمها من اليوم الأول</span>
                  </li>
                  <li className="flex items-center justify-start gap-1 sm:gap-2">
                    <span className="text-green-600 text-xs sm:text-sm md:text-base">✓</span>
                    <span className="leading-tight text-xs sm:text-sm md:text-base">خطة تعلم شخصية مصممة خصيصاً لأهدافك</span>
                  </li>
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3 md:space-y-4 mb-2 sm:mb-3 md:mb-4" id="exit-intent-form">
                <div>
                  <input
                    type="text"
                    placeholder="الاسم الكامل"
                    className="w-full px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-right min-h-[40px] sm:min-h-[44px] touch-manipulation"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="رقم الهاتف المحمول"
                    className="w-full px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-right min-h-[40px] sm:min-h-[44px] touch-manipulation"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    className="w-full px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-right min-h-[40px] sm:min-h-[44px] touch-manipulation"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-2 sm:p-3 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <p className="text-green-800 font-medium text-xs sm:text-sm leading-relaxed">
                    تم الإرسال بنجاح! سيتواصل معك فريقنا من قسم التسجيل قريباََ
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-2 sm:p-3 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <p className="text-red-800 font-medium text-xs sm:text-sm leading-relaxed">
                      ❌ حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى.
                    </p>
                  </motion.div>
                )}
              </form>

              <div className="space-y-1 sm:space-y-2">
                <button
                  type="submit"
                  form="exit-intent-form"
                  disabled={isLoading}
                  className={`w-full text-xs sm:text-sm md:text-base lg:text-lg font-semibold py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 min-h-[40px] sm:min-h-[44px] touch-manipulation ${
                    isLoading
                      ? 'bg-gray-400 cursor-not-allowed text-white'
                      : 'btn-primary pulse-glow'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                      <span className="text-xs sm:text-sm md:text-base">جاري الإرسال...</span>
                    </>
                  ) : (
                    <span className="text-xs sm:text-sm md:text-base">احجز جلستك المجانية الآن</span>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentModal;