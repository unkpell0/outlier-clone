
import React from 'react';
import { motion } from 'framer-motion';

export const CtaSection: React.FC = () => {
  return (
    <div className="bg-white">
      <motion.div 
        className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
          <span className="block">See Outlier in Action</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-brand-gray">
          Discover the hidden opportunities in your data. Get started with Outlier today.
        </p>
        <a
          href="#"
          className="mt-8 w-full inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-blue hover:bg-brand-blue-dark sm:w-auto md:py-4 md:text-lg md:px-10 transition-transform transform hover:scale-105"
        >
          Book a demo
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </motion.div>
    </div>
  );
};