import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, Building2 } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose }) => {
  
  // Block body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
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
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-[9999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
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
              onClick={onClose}
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
                    onClose();
                  }}
                  className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-orange-500 text-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[120px] sm:min-h-[140px] touch-manipulation"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4">
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

              {/* Bank Transfer Option */}
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

                  {/* Bank Details */}
                  <div className="bg-white rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 text-right border">
                    <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                      <div><span className="font-semibold">رقم الحساب:</span> 256968</div>
                      <div><span className="font-semibold">رقم الفرع:</span> 632</div>
                      <div><span className="font-semibold">اسم المستفيد:</span> English Way</div>
                      <div><span className="font-semibold">البنك:</span> هبوعليم</div>
                    </div>
                  </div>

                  {/* WhatsApp Instructions */}
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
  );
};

export default PaymentModal;