
import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import { motion } from 'framer-motion';

const OutlierLogo = () => (
    <div className="flex items-center">
        <svg height="32" viewBox="0 0 134 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#4F46E5'}} />
                    <stop offset="100%" style={{stopColor: '#818CF8'}} />
                </linearGradient>
            </defs>
            <path d="M22.8636 38.25C17.0455 38.25 11.75 36.125 7.04545 31.875C2.34091 27.625 0 22.3333 0 16.0833V0.75H10.9545V16.75C10.9545 20.1667 12.0455 22.9167 14.2273 25C16.4091 27.0833 19.25 28.125 22.7273 28.125C26.2045 28.125 29.0455 27.0833 31.2273 25C33.4091 22.9167 34.5 20.1667 34.5 16.75V0.75H45.4545V16.0833C45.4545 22.3333 43.1136 27.625 38.4091 31.875C33.7045 36.125 28.4091 38.25 22.8636 38.25Z" fill="url(#logoGradient)"/>
            <path d="M66.4442 37.5H55.4999V0.75H66.4442V37.5Z" fill="url(#logoGradient)"/>
            <path d="M83.4215 37.5H72.4772V0.75H83.4215V37.5Z" fill="url(#logoGradient)"/>
            <path d="M90.3988 37.5V0.75H101.535L118.876 22.5417V0.75H128.921V37.5H117.785L100.444 15.7083V37.5H90.3988Z" fill="url(#logoGradient)"/>
        </svg>
        <span className="ml-3 text-2xl font-bold tracking-tighter text-brand-dark">outlier</span>
    </div>
);


export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" aria-label="Home">
                <OutlierLogo />
            </a>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-10">
            {NAV_LINKS.map((link) => (
              <a key={link.name} href={link.href} className="font-semibold text-brand-dark hover:text-brand-blue transition-colors duration-200">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center space-x-5">
            <a href="#" className="font-semibold text-brand-dark hover:text-brand-blue transition-colors duration-200">
              Sign In
            </a>
            <a href="#" className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-base font-semibold rounded-md text-white bg-brand-blue hover:bg-brand-blue-dark transition-colors duration-200 shadow-sm">
              Book a demo
            </a>
          </div>
          <div className="md:hidden flex items-center">
             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-blue">
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {NAV_LINKS.map((link) => (
                    <a key={link.name} href={link.href} className="block px-3 py-2 rounded-md text-base font-semibold text-brand-dark hover:text-brand-blue hover:bg-gray-50">{link.name}</a>
                ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="px-5 space-y-3">
                    <a href="#" className="block w-full text-center px-5 py-2.5 border border-transparent text-base font-medium rounded-md text-white bg-brand-blue hover:bg-brand-blue-dark">Book a demo</a>
                    <a href="#" className="block w-full text-center font-medium text-brand-dark hover:text-brand-blue">Sign In</a>
                </div>
            </div>
        </div>
      )}
    </motion.header>
  );
};