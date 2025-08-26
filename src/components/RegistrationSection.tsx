import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock, Shield, Headphones, Sparkles, Loader2 } from 'lucide-react';

// Custom SVG Icons
const FreeSessionIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 3L12 6M15 3L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SupportIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21M12 21V23M8 21H16M9 9L12 12L15 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const RegistrationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
      const message = `🔔 تسجيل جديد:
👤 الاسم: ${formData.name}
📧 البريد الإلكتروني: ${formData.email}
📱 رقم الهاتف: ${formData.phone}
⏰ الوقت: ${new Date().toLocaleString('ar-IL')}

يرجى التواصل مع العميل لتحديد موعد الجلسة المجانية.`;

      await sendWhatsAppMessage(message);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '' });

      // Show success popup after brief delay
      setTimeout(() => {
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

  return (
    <section id="registration" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Wave Shape Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ lineHeight: 0 }}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-16 md:h-20 lg:h-24"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#dbeafe"
          ></path>
        </svg>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center mb-16">


          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-8 text-right leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-white">الفرصة بين يديك</span>{' '}
            <span className="text-primary">— لا تؤجل حلمك</span>
          </motion.h2>

          <motion.p
            className="text-xl text-slate-300 max-w-4xl mx-auto text-right leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            في إتقان الإنجليزية. سجل الآن وابدأ رحلة نجاحك معنا.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Registration Form */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-right">سجل الآن مجاناً</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-slate-700 text-sm mb-2 text-right">الاسم الكامل</label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl text-slate-900 placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent text-right transition-all duration-300"
                    placeholder="أدخل اسمك الكامل"
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-700 text-sm mb-2 text-right">البريد الإلكتروني</label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl text-slate-900 placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent text-right transition-all duration-300"
                    placeholder="بريدك@example.com"
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-700 text-sm mb-2 text-right">رقم الهاتف</label>
                  <motion.input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 bg-white border border-gray-300 rounded-xl text-slate-900 placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent text-right transition-all duration-300"
                    placeholder="05xxxxxxxx"
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 px-8 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                    isLoading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-primary text-white hover:shadow-2xl'
                  }`}
                  whileHover={!isLoading ? { scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" } : {}}
                  whileTap={!isLoading ? { scale: 0.95 } : {}}
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
                  ) : submitStatus === 'error' ? (
                    <>
                      <ArrowRight className="w-5 h-5" />
                      خطأ في الإرسال - حاول مرة أخرى
                    </>
                  ) : (
                    <>
                      سجل الآن
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-4 bg-green-50 border border-green-200 rounded-xl"
                  >
                    <p className="text-green-800 font-medium">
                      ✅ تم إرسال طلبك بنجاح! سيتواصل معك فريقنا قريباً على الواتساب.
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-4 bg-red-50 border border-red-200 rounded-xl"
                  >
                    <p className="text-red-800 font-medium">
                      ❌ حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة على الواتساب.
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {/* Feature 1 */}
              <motion.div
                className="flex items-center gap-6 p-6 lg:p-8 bg-gray-50 rounded-2xl border border-gray-200 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, backgroundColor: "rgb(249 250 251)" }}
              >
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <FreeSessionIcon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-slate-900 mb-1">اختبار مستوى</div>
                  <div className="text-gray-600">مجاني</div>
                </div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                className="flex items-center gap-6 p-6 lg:p-8 bg-gray-50 rounded-2xl border border-gray-200 shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, backgroundColor: "rgb(249 250 251)" }}
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center">
                  <SupportIcon className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-slate-900 mb-1">24/7</div>
                  <div className="text-gray-600">دعم تعليمي</div>
                </div>
              </motion.div>


            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">1,200+</div>
              <div className="text-gray-600 text-sm">خريج ناجح</div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">+10</div>
              <div className="text-gray-600 text-sm">سنوات خبرة</div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-md">
              <div className="text-3xl font-bold text-primary mb-2">+10,000</div>
              <div className="text-gray-600 text-sm">قصص النجاح</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Success Popup */}
      <AnimatePresence>
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
    </section>
  );
};

export default RegistrationSection;
