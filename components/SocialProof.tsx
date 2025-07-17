
import React from 'react';
import { motion } from 'framer-motion';
import { TRUSTED_LOGOS } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};


export const SocialProof: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5 }}
        >
            <h3 className="text-center text-sm font-semibold text-brand-gray uppercase tracking-wider">
              TRUSTED BY THE WORLD'S MOST INNOVATIVE COMPANIES
            </h3>
        </motion.div>
        <motion.div 
            className="mt-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
        >
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-6 sm:gap-x-10 lg:gap-x-16">
            {TRUSTED_LOGOS.map((company) => (
              <motion.div key={company.name} variants={itemVariants} className="flex justify-center items-center h-16 w-40 p-2 bg-white rounded-lg shadow-sm">
                <img
                  className="max-h-8 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  src={company.logo}
                  alt={company.name}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};