import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Users, Star, TrendingUp } from 'lucide-react';
import { scrollToRegistration } from '../utils/scrollUtils';

const Courses: React.FC = () => {
  const courses = [
    {
      id: 1,
      level: 'المستوى A - مبتدئ',
      duration: '5 أشهر',
      sessions: 'لقاءان أسبوعياً',
      rating: 4.9,
      popular: false,
      skills: ['محادثات قصيرة', 'مهام يومية بسيطة', 'تقديم معلومات شخصية'],
      focus: 'النطق، الاستماع، القراءة الأساسية',
      description: 'مهارات المحادثة الأساسية، مفردات الحياة اليومية، التواصل البسيط',
      price: 'تحديد السعر بعد التقييم',
      improvement: '+40% ثقة في التواصل'
    },
    {
      id: 2,
      level: 'المستوى B - متوسط مبتدئ',
      duration: '5 أشهر',
      sessions: 'لقاءان أسبوعياً',
      rating: 4.9,
      popular: true,
      skills: ['كتابة نصوص قصيرة', 'سرد قصص ومشاركة حوارات', 'التواصل اليومي المتقدم'],
      focus: 'توسيع مفردات الحياة اليومية',
      description: 'السفر، الطعام، المواقف الشائعة، الكتابة الأساسية، فهم أفضل للنصوص',
      price: 'تحديد السعر بعد التقييم',
      improvement: '+60% فهم وتواصل'
    },
    {
      id: 3,
      level: 'المستوى C - متوسط',
      duration: '5 أشهر',
      sessions: 'لقاءان أسبوعياً',
      rating: 5.0,
      popular: false,
      skills: ['فهم الأخبار والأفلام', 'مناقشة المقالات', 'كتابة تقارير شخصية'],
      focus: 'تراكيب لغوية أعمق ومفردات موضوعية موسعة',
      description: 'قراءة وكتابة متطورة، فهم المحتوى المعقد، مناقشات مستوى متوسط',
      price: 'تحديد السعر بعد التقييم',
      improvement: '+75% قدرة التحليل'
    },
    {
      id: 4,
      level: 'المستوى D - متقدم',
      duration: '5 أشهر',
      sessions: 'لقاءان أسبوعياً',
      rating: 5.0,
      popular: false,
      skills: ['أسالیب كتابة متقدمة', 'تلخیص وتحلیل', 'عرض الرأي بفصاحة'],
      focus: 'مهارات قراءة وكتابة رفيعة المستوى',
      description: 'كتابة وتحليل متقدمة، عرض الأفكار بوضوح، إعداد عروض تقديمية',
      price: 'تحديد السعر بعد التقييم',
      improvement: '+85% مهارات القيادة'
    },
    {
      id: 5,
      level: 'إنجليزي الأعمال',
      duration: '3 أشهر',
      sessions: 'لقاءان أسبوعياً',
      rating: 5.0,
      popular: false,
      skills: ['مقابلات عمل', 'إدارة اجتماعات', 'كتابة عقود ومقترحات', 'عروض تقديمية'],
      focus: 'محاكاة مواقف واقعية في بيئة الأعمال',
      description: 'دورات مصممة لتطوير لغة الأعمال، ومهارات التفاوض، والعروض التقديمية',
      price: 'تحديد السعر بعد التقييم',
      improvement: '+90% فعالية مهنية'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50/50" id="courses">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-12 border border-white/50 shadow-lg backdrop-blur-sm">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 text-right leading-tight">
                <span className="text-gray-800">مهما كان مستواك، لدينا مسار واضح</span>{' '}
                <span className="gradient-text">للوصول إلى الثقة في التواصل</span>
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed text-right font-medium">
                اختر مسارك لإتقان الإنجليزية. كل دورة مصممة بعناية مع نتائج قابلة للقياس
                وتطبيقات واقعية في الحياة المهنية والشخصية.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Courses Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 stagger-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className={`stagger-card relative bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-2xl transition-all duration-500 group ${
                course.popular ? 'ring-2 ring-indigo-500 ring-opacity-50' : ''
              }`}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Popular Badge */}
              {course.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Course Header */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{course.level}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-700">{course.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                {/* Improvement Metric */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 font-semibold">{course.improvement}</span>
                  </div>
                </div>
              </div>

              {/* Course Details */}
              <div className="space-y-4 mb-6 text-right">
                <div className="flex items-center justify-end gap-3">
                  <span className="text-gray-700">المدة: {course.duration}</span>
                  <Clock className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="flex items-center justify-end gap-3">
                  <span className="text-gray-700">{course.sessions}</span>
                  <Users className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-2">التركيز: {course.focus}</p>
                </div>
              </div>

              {/* Skills List */}
              <div className="mb-6 text-right">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">المهارات الرئيسية:</h4>
                <ul className="space-y-2">
                  {course.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center gap-3 justify-end">
                      <span className="text-sm text-gray-700">{skill}</span>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price and CTA */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold text-gray-900">{course.price}</span>

                  </div>
                </div>
                <motion.button
                  onClick={scrollToRegistration}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 group-hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  اختر المستوى وابدأ
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default Courses;