import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Sparkles } from 'lucide-react';

// Custom WhatsApp Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.531 3.488"/>
  </svg>
);

const FloatingCTA = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
    >
      <AnimatePresence>
        {isExpanded ? (
          <motion.div
            className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 p-8 w-96 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.8, y: 20, rotateX: -15 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: -10,
              rotateX: 15,
              transition: { duration: 0.3, ease: "easeInOut" }
            }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.25 }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-400/10 to-blue-500/10 blur-2xl -z-10"></div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">تواصل بسرعة</h3>
              </div>
              <motion.button
                onClick={() => setIsExpanded(false)}
                className="w-8 h-8 bg-gray-100 hover:bg-red-100 rounded-full flex items-center justify-center transition-all duration-200 group"
                whileHover={{
                  scale: 1.1,
                  rotate: 90,
                  backgroundColor: "rgb(254 202 202)"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-4 h-4 text-gray-600 group-hover:text-red-600 transition-colors duration-200" />
              </motion.button>
            </div>

            <p className="text-gray-600 mb-6 text-right leading-relaxed">
              جاهز لبدء رحلة إتقان الإنجليزية؟ تواصل معنا فوراً
            </p>

            <div className="space-y-4">
              <motion.a
                href="https://wa.me/972529435949"
                className="group relative w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-2xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl overflow-hidden"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
                <WhatsAppIcon className="w-6 h-6 relative z-10" />
                <span className="relative z-10">واتساب فوري</span>
              </motion.a>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>متاح الآن</span>
                </div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <span>استجابة فورية</span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.button
            className="relative bg-gradient-to-br from-primary to-purple-600 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group overflow-hidden"
            onClick={() => setIsExpanded(true)}
            whileHover={{
              scale: 1.1,
              rotate: 5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -5, 0],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            {/* Pulse animation */}
            <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
            
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
            
            {/* Icon */}
            <MessageCircle className="w-7 h-7 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            
            {/* Online indicator */}
            <div className="absolute top-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-sm">
              <div className="w-full h-full bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FloatingCTA;