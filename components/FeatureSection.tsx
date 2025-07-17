
import React from 'react';
import { motion, Variants } from 'framer-motion';

export interface FeatureProps {
  title: string;
  description: string;
  image: string;
  imagePosition: 'left' | 'right';
}

export const FeatureSection: React.FC<FeatureProps> = ({ title, description, image, imagePosition }) => {
  const imageOrderClass = imagePosition === 'left' ? 'lg:order-1' : 'lg:order-2';
  const textOrderClass = imagePosition === 'left' ? 'lg:order-2' : 'lg:order-1';
  
  const textVariants: Variants = {
    hidden: { opacity: 0, x: imagePosition === 'left' ? 100 : -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: imagePosition === 'left' ? -100 : 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className="py-16 sm:py-24 bg-gray-50 overflow-hidden odd:bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className={textOrderClass}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={textVariants}
          >
            <h2 className="text-3xl font-extrabold text-brand-dark tracking-tight sm:text-4xl">{title}</h2>
            <p className="mt-6 text-xl text-brand-gray">{description}</p>
            <div className="mt-8">
              <a href="#" className="text-base font-semibold text-brand-blue hover:text-brand-blue-dark">
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </motion.div>
          <motion.div 
            className={`mt-12 lg:mt-0 ${imageOrderClass}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={imageVariants}
          >
            <img
              className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
              src={image}
              alt="Feature illustration"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
