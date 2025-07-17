
import React from 'react';
import { INTEGRATION_LOGOS } from '../constants';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

export const Integrations: React.FC = () => {
  return (
    <div className="bg-gray-50 py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-extrabold text-brand-dark tracking-tight sm:text-4xl">
            Connect to dozens of cloud platforms
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-brand-gray">
            Outlier integrates with the tools you already use to bring automated insights right where you work.
          </p>
        </motion.div>
        <motion.div 
            className="mt-16 flow-root"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {INTEGRATION_LOGOS.map((logo) => (
              <motion.div 
                key={logo} 
                variants={itemVariants}
                className="flex justify-center items-center p-6 bg-white rounded-lg shadow-md"
              >
                 <img
                  className="h-10 w-auto object-contain"
                  src={`https://via.placeholder.com/150x60/f3f4f6/6b7280?text=${logo.replace(' ', '+')}`}
                  alt={logo}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
         <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7, delay: 0.5 }}
         >
            <a href="#" className="text-base font-semibold text-brand-blue hover:text-brand-blue-dark">
                See all integrations <span aria-hidden="true">&rarr;</span>
            </a>
         </motion.div>
      </div>
    </div>
  );
};
