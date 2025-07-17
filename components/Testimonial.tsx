
import React from 'react';
import { motion } from 'framer-motion';

export interface TestimonialProps {
    quote: string;
    author: string;
    role: string;
    authorImage: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, authorImage }) => {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <blockquote className="relative">
            <svg className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 h-12 w-12 text-gray-200" stroke="currentColor" fill="none" viewBox="0 0 144 144">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M41.486 119.507c-27.209-27.209-27.209-71.322 0-98.53s71.322-27.209 98.53 0c.944.944 1.833 1.923 2.666 2.937l-35.354 35.354c-2.484-2.484-5.409-4.242-8.484-5.303-12.093-4.14-25.56 2.834-29.7 14.927s2.834 25.56 14.927 29.7c12.093 4.14 25.56-2.834 29.7-14.927.99-3.483.56-7.05-1.19-10.12l35.353-35.353c-1.014.833-1.993 1.722-2.937 2.666-27.209 27.209-27.209 71.322 0 98.53s71.322 27.209 98.53 0"></path>
            </svg>
            <p className="text-2xl leading-9 font-medium text-brand-dark sm:text-3xl">
              “{quote}”
            </p>
          </blockquote>
          <footer className="mt-8">
            <div className="flex justify-center items-center">
                <div className="flex-shrink-0">
                    <img className="mx-auto h-12 w-12 rounded-full" src={authorImage} alt={author} />
                </div>
                <div className="ml-4 text-left">
                    <div className="text-base font-bold text-brand-dark">{author}</div>
                    <div className="text-base text-brand-gray">{role}</div>
                </div>
            </div>
          </footer>
        </motion.div>
      </div>
    </section>
  );
};