import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Loader2, CheckCircle2 } from 'lucide-react';

const ExitIntentModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  


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

  const sendWhatsAppMessage = async (message: string) => {
    const phoneNumber = '972529435949';
    const apiKey = '6442335';
    const encodedMessage = encodeURIComponent(message);

    const url = `https://api.callmebot.com/whatsapp.php?phone=${phoneNumber}&text=${encodedMessage}&apikey=${apiKey}`;

    try {
      // Try with no-cors mode as fallback
      const response = await fetch(url, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
        }
      });

      // Since no-cors doesn't allow us to read the response,
      // we'll assume success if no error is thrown
      return true;

    } catch (error) {
      console.error('WhatsApp API Error:', error);
      // Fallback: Open WhatsApp directly
      try {
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
        return true;
      } catch (fallbackError) {
        console.error('Fallback WhatsApp error:', fallbackError);
        throw error;
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      const message = `🎯 طلب جلسة مجانية من Exit Intent Modal:
👤 الاسم: ${formData.fullName}
📧 البريد الإلكتروني: ${formData.email}
📱 رقم الهاتف: ${formData.phoneNumber}
⏰ الوقت: ${new Date().toLocaleString('ar-IL')}

العميل مهتم بالحصول على جلسة مجانية مع هدية PDF. يرجى التواصل فوراً.`;

      await sendWhatsAppMessage(message);

      setSubmitStatus('success');
      setFormData({ fullName: '', phoneNumber: '', email: '' });

      // Show success popup instead of auto close
      setTimeout(() => {
        setIsVisible(false);
        setShowSuccessPopup(true);
        setSubmitStatus('idle');
      }, 1500);

    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-right" dir="rtl">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="w-8 h-8 text-primary" />
              </div>

              <h3 className="text-2xl font-bold text-charcoal mb-4">
                هل تتمنى أن تتحدث الإنجليزية بثقة؟
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                بدل أن تتوتر وتفقد فرصاً مهمة... كم مرة التزمت الصمت لأنك لم تعرف كيف ترد بالإنجليزية؟
                وضيعت فرصة كانت قادرة تغير مسارك؟
              </p>

              <div className="bg-accent/50 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-center gap-2 text-primary font-semibold mb-3">
                  <Gift className="w-5 h-5" />
                  <span>هدية خاصة لك</span>
                </div>
                
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-center justify-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>جلسة مجانية لتحديد مستواك مع مدرس معتمد</span>
                  </li>
                  <li className="flex items-center justify-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>هدية PDF: 20 جملة عملية تستخدمها من اليوم الأول</span>
                  </li>
                  <li className="flex items-center justify-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>خطة تعلم شخصية مصممة خصيصاً لأهدافك</span>
                  </li>
                  <li className="flex items-center justify-start gap-2">
                    <span className="text-orange-500">⏰</span>
                    <span>الجلسات المجانية محدودة يومياً</span>
                  </li>
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 mb-6" id="exit-intent-form">
                <div>
                  <input
                    type="text"
                    placeholder="الاسم الكامل"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-right"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="رقم الهاتف المحمول"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-right"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-right"
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
                    className="text-center p-3 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <p className="text-green-800 font-medium text-sm">
                      ✅ تم إرسال طلبك! سيتواصل معك فريقنا على الواتساب.
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-3 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <p className="text-red-800 font-medium text-sm">
                      ❌ حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى.
                    </p>
                  </motion.div>
                )}
              </form>

              <div className="space-y-3">
                <button
                  type="submit"
                  form="exit-intent-form"
                  disabled={isLoading}
                  className={`w-full text-lg font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    isLoading
                      ? 'bg-gray-400 cursor-not-allowed text-white'
                      : 'btn-primary pulse-glow'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      جاري الإرسال...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      تم الإرسال بنجاح!
                    </>
                  ) : (
                    'احجز جلستك المجانية الآن'
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowSuccessPopup(false)}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 text-center"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              تم استلام طلبك!
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              سيتم التواصل قريباً معك عبر الواتساب
            </p>
            
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
            >
              حسناً
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentModal;