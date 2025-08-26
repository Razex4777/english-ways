import React from 'react';
import { motion } from 'framer-motion';
import {
  SiGoogle,
  SiAmazon,
  SiMeta,
  SiApple,
  SiNetflix,
  SiTesla,
  SiSpotify,
} from 'react-icons/si';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';

const TrustBar = () => {
  const brands: Array<{ 
    Icon?: React.ComponentType<{ size?: number; className?: string; title?: string }>;
    FontAwesome?: any;
    name: string;
    type: 'si' | 'fa';
  }> = [
      { Icon: SiGoogle, name: 'Google', type: 'si' },
      { FontAwesome: faMicrosoft, name: 'Microsoft', type: 'fa' },
      { Icon: SiAmazon, name: 'Amazon', type: 'si' },
      { Icon: SiMeta, name: 'Meta', type: 'si' },
      { Icon: SiApple, name: 'Apple', type: 'si' },
      { Icon: SiNetflix, name: 'Netflix', type: 'si' },
      { Icon: SiTesla, name: 'Tesla', type: 'si' },
      { Icon: SiSpotify, name: 'Spotify', type: 'si' },
    ];

  // Trust statistics
  const stats: Array<{ number: string; label: string }> = [
    { number: '★4.9', label: 'تقييم الطلاب' },
    { number: '95%', label: 'نمو مهني' },
    { number: '+10,000', label: 'قصص النجاح' },
  ];

  return (
    <section id="trust" className="py-8 sm:py-12 border-t border-border bg-white">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
            شركاء نجاح نفخر بهم
          </h3>
          <p className="text-sm sm:text-base text-gray-600 font-medium text-center px-2 sm:px-0">
            انضم إلينا آلاف المتعلمين الذين أصبحوا يتواصلون بثقة في حياتهم المهنية والشخصية.
          </p>
        </motion.div>

        {/* Trust Statistics */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Logos Grid (no animation) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex sm:grid sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 lg:gap-8 items-center justify-items-center overflow-x-auto sm:overflow-x-visible pb-2 sm:pb-0">
            {brands.map(({ Icon, FontAwesome, name, type }) => (
              <div key={name} className="flex justify-center flex-shrink-0 sm:flex-shrink sm:justify-center">
                <div className="text-gray-400 hover:text-charcoal transition-colors duration-300">
                  {type === 'si' && Icon ? (
                    <Icon size={32} className="sm:w-10 sm:h-10" />
                  ) : type === 'fa' && FontAwesome ? (
                    <FontAwesomeIcon icon={FontAwesome} size="lg" className="text-2xl sm:text-3xl" />
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;