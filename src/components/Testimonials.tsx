import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'ندى',
      role: 'ممرضة',
      company: '26 سنة',
      image: '/nada.jpg',
      metric: '100%',
      metricLabel: 'ثقة في العروض',
      quote: 'بعد شهرين، قّدمت بريزنتيشن كامل باإنجليزي قّدام مديري، وانبهر فيّي.',
      improvement: '+300% ثقة في التقديم'
    },
    {
      name: 'سامر',
      role: 'مهندس',
      company: '34 سنة',
      image: '/samer.jpg',
      metric: '+400%',
      metricLabel: 'نجاح المفاوضات',
      quote: 'رحلتي لتركيا كانت غير... ألول مرة قدرت أتعامل بثقة!',
      improvement: 'رحلة ناجحة بلا توتر'
    },
    {
      name: 'أحمد',
      role: 'مدير مبيعات',
      company: '32 سنة',
      image: '/ahmed.jpg',
      metric: '150%',
      metricLabel: 'زيادة في الصفقات',
      quote: 'صرت أقدّم عروض لعملاء أجانب وأسكر صفقات عن جد.',
      improvement: 'صفقات دولية ناجحة'
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >


          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal mb-6 text-center">
            قصص النجاح <span className="text-primary">الحقيقية</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center">
            طلابنا ما بس تعلموا — غيّروا حياتهم!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="card p-8 bg-accent/30 hover:bg-accent/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Metric Display */}
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-primary mb-2">
                  {testimonial.metric}
                </div>
                <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                  {testimonial.metricLabel}
                </div>
              </div>

              {/* Quote */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Profile */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-charcoal">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role} {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Improvement Badge */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4" />
                  <span>{testimonial.improvement}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;