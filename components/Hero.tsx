
import React from 'react';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const Hero: React.FC = () => {
  return (
    <div className="relative bg-white pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl tracking-tight font-extrabold text-brand-dark sm:text-5xl md:text-6xl"
            >
              <span className="block">The future of business</span>
              <span className="block text-brand-blue">intelligence has arrived.</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-5 max-w-md mx-auto text-lg text-brand-gray sm:text-xl md:mt-8 md:max-w-3xl lg:mx-0"
            >
              Outlier is the only automated business analysis platform that proactively monitors your business data and informs you when unexpected changes occur.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-blue hover:bg-brand-blue-dark md:py-4 md:text-lg md:px-10 transition-transform transform hover:scale-105">
                  Book a demo
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
             <img className="relative mx-auto rounded-lg shadow-2xl" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" alt="Abstract data visualization" />
             <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
             <div className="absolute top-0 -right-4 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" style={{animationDelay: '2s'}}></div>
             <div className="absolute -bottom-8 left-20 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" style={{animationDelay: '4s'}}></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
