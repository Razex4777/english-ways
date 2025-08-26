import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock, Shield, Headphones, Sparkles, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getVisitorInfo } from '../utils/visitorInfo';

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
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

    console.log('🔄 [RegistrationSection] Starting WhatsApp message send...');
    console.log('📱 Phone number:', phoneNumber);
    console.log('🔑 API Key:', apiKey);
    console.log('📝 Message length:', message.length);
    console.log('🌐 Final URL:', url);

    try {
      console.log('⏳ [RegistrationSection] Attempting CallMeBot API call...');
      
      // Try with no-cors mode as fallback
      const response = await fetch(url, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Accept': 'application/json',
        }
      });

      console.log('✅ [RegistrationSection] CallMeBot API call completed (no-cors mode)');
      console.log('📊 Response status (no-cors mode - limited info):', response.type);

      // Since no-cors doesn't allow us to read the response,
      // we'll assume success if no error is thrown
      console.log('✅ [RegistrationSection] Assuming success - no error thrown');
      return true;

    } catch (error) {
      console.error('❌ [RegistrationSection] WhatsApp API Error:', error);
      console.error('❌ [RegistrationSection] Error details:', {
        name: error instanceof Error ? error.name : 'Unknown',
        message: error instanceof Error ? error.message : error,
        stack: error instanceof Error ? error.stack : undefined
      });
      
      // Fallback: Open WhatsApp directly
      try {
        console.log('🔄 [RegistrationSection] Falling back to direct WhatsApp...');
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        console.log('🌐 [RegistrationSection] WhatsApp URL:', whatsappUrl);
        window.open(whatsappUrl, '_blank');
        console.log('✅ [RegistrationSection] WhatsApp fallback executed');
        return true;
      } catch (fallbackError) {
        console.error('❌ [RegistrationSection] Fallback WhatsApp error:', fallbackError);
        throw error;
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    console.log('🚀 [RegistrationSection] Form submission started');
    console.log('📋 [RegistrationSection] Form data:', formData);

    try {
      // Get comprehensive visitor information
      console.log('⏳ [RegistrationSection] Getting visitor info...');
      const visitorInfo = await getVisitorInfo();
      console.log('✅ [RegistrationSection] Visitor info received:', visitorInfo);

      const message = `طلب جديد:
👤 الاسم: ${formData.name}
📞 رقم الواتساب: ${formData.phone}
✉ البريد: ${formData.email}
🎯 المستوى: البالغين
-------------------------
🌍 العنوان حسب IP: ${visitorInfo.location.city}, ${visitorInfo.location.region}, ${visitorInfo.location.country} - ${visitorInfo.location.timezone}
🗺 رابط الخريطة: ${visitorInfo.mapUrl}
💻 الجهاز: ${visitorInfo.device.deviceType}
🖥 المتصفح: ${visitorInfo.device.browser} ${visitorInfo.device.browserVersion}
🖧 الايبي: ${visitorInfo.ip}

🔔 تسجيل جديد من نموذج التسجيل
⏰ الوقت: ${new Date().toLocaleString('ar-IL')}
📱 رقم الهاتف المقدم: ${formData.phone}

يرجى التواصل مع العميل لتحديد موعد الجلسة المجانية.`;

      console.log('📝 [RegistrationSection] Final message prepared:');
      console.log(message);
      console.log('📏 [RegistrationSection] Message length:', message.length);

      console.log('⏳ [RegistrationSection] Sending WhatsApp message...');
      await sendWhatsAppMessage(message);
      console.log('✅ [RegistrationSection] WhatsApp message sent successfully');

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '' });
      console.log('✅ [RegistrationSection] Form reset and status updated');

      // Redirect to thank you page after successful submission
      setTimeout(() => {
        console.log('🔄 [RegistrationSection] Redirecting to thank you page...');
        navigate('/thank-you');
      }, 2000); // 2 second delay to show success message

    } catch (error) {
      console.error('❌ [RegistrationSection] Form submission error:', error);
      console.error('❌ [RegistrationSection] Error details:', {
        name: error instanceof Error ? error.name : 'Unknown',
        message: error instanceof Error ? error.message : error,
        stack: error instanceof Error ? error.stack : undefined
      });
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsLoading(false);
      console.log('🏁 [RegistrationSection] Form submission completed');
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
        <div className="flex justify-center">
          {/* Registration Form - Centered */}
          <motion.div
            className="w-full max-w-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-xl">
              <motion.h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 text-center leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="text-slate-900">الفرصة بين يديك</span>{' '}
                <span className="text-primary">— لا تؤجل حلمك في إتقان الإنجليزية.</span>
              </motion.h3>
              <motion.p
                className="text-base sm:text-lg text-gray-600 mb-6 text-center leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                سجل الآن وابدأ رحلة نجاحك معنا.
              </motion.p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-slate-700 text-sm mb-1 sm:mb-2 text-right">الاسم الكامل</label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white border border-gray-300 rounded-xl text-slate-900 placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent text-right transition-all duration-300 text-sm sm:text-base min-h-[44px] touch-manipulation"
                    placeholder="أدخل اسمك الكامل"
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-700 text-sm mb-1 sm:mb-2 text-right">البريد الإلكتروني</label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white border border-gray-300 rounded-xl text-slate-900 placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent text-right transition-all duration-300 text-sm sm:text-base min-h-[44px] touch-manipulation"
                    placeholder="بريدك@example.com"
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-700 text-sm mb-1 sm:mb-2 text-right">رقم الهاتف</label>
                  <motion.input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-white border border-gray-300 rounded-xl text-slate-900 placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent text-right transition-all duration-300 text-sm sm:text-base min-h-[44px] touch-manipulation"
                    placeholder="05xxxxxxxx"
                    whileFocus={{ scale: 1.02 }}
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 sm:py-4 px-4 sm:px-6 lg:px-8 rounded-xl font-bold text-sm sm:text-base lg:text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-2 min-h-[44px] touch-manipulation ${
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
                    className="text-center p-3 sm:p-4 bg-green-50 border border-green-200 rounded-xl"
                  >
                    <p className="text-green-800 font-medium text-sm sm:text-base leading-relaxed">
                      ✅ تم الإرسال بنجاح! سيتواصل معك فريقنا من قسم التسجيل قريباََ
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-3 sm:p-4 bg-red-50 border border-red-200 rounded-xl"
                  >
                    <p className="text-red-800 font-medium text-sm sm:text-base leading-relaxed">
                      ❌ حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة على الواتساب.
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default RegistrationSection;
