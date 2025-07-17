
import React from 'react';
import { motion, Variants } from 'framer-motion';

const steps = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: '1. Connect your data',
    description: 'Securely connect to dozens of data sources like Adobe Analytics, Snowflake, and more in just a few clicks.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: '2. Receive daily insights',
    description: 'Our AI analyzes millions of data points to surface the unexpected changes that have the biggest impact on your business.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    title: '3. Take faster action',
    description: 'Get a feed of 5-10 automated insights each morning, delivered to you in Slack or email, in simple, easy-to-read stories.',
  },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

export const HowItWorks: React.FC = () => {
  return (
    <div className="py-20 bg-white sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7 }}
        >
          <h2 className="text-base text-brand-blue font-semibold tracking-wide uppercase">How it works</h2>
          <p className="mt-2 text-3xl font-extrabold text-brand-dark tracking-tight sm:text-4xl">
            Get insights delivered to you in 3 simple steps
          </p>
        </motion.div>

        <motion.div 
            className="mt-20"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {steps.map((step) => (
              <motion.div key={step.title} variants={itemVariants} className="text-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-xl bg-indigo-100 mx-auto">
                  {step.icon}
                </div>
                <h3 className="mt-6 text-xl font-bold text-brand-dark">{step.title}</h3>
                <p className="mt-2 text-base text-brand-gray">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
