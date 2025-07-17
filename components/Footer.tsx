
import React from 'react';
import { FOOTER_LINKS } from '../constants';

const SocialIcon: React.FC<{ name: string; href: string; children: React.ReactNode }> = ({ name, href, children }) => (
    <a href={href} className="text-gray-400 hover:text-white transition-colors duration-200">
        <span className="sr-only">{name}</span>
        {children}
    </a>
);


export const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-dark" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <div className="pb-8 xl:grid xl:grid-cols-4 xl:gap-8">
                    <div className="space-y-8 xl:col-span-1">
                        <div className="flex items-center">
                            <svg height="28" viewBox="0 0 134 39" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                <defs><linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" style={{stopColor: 'white'}} /><stop offset="100%" style={{stopColor: '#E0E7FF'}} /></linearGradient></defs>
                                <path d="M22.8636 38.25C17.0455 38.25 11.75 36.125 7.04545 31.875C2.34091 27.625 0 22.3333 0 16.0833V0.75H10.9545V16.75C10.9545 20.1667 12.0455 22.9167 14.2273 25C16.4091 27.0833 19.25 28.125 22.7273 28.125C26.2045 28.125 29.0455 27.0833 31.2273 25C33.4091 22.9167 34.5 20.1667 34.5 16.75V0.75H45.4545V16.0833C45.4545 22.3333 43.1136 27.625 38.4091 31.875C33.7045 36.125 28.4091 38.25 22.8636 38.25Z" fill="url(#footerLogoGradient)"/>
                                <path d="M66.4442 37.5H55.4999V0.75H66.4442V37.5Z" fill="url(#footerLogoGradient)"/>
                                <path d="M83.4215 37.5H72.4772V0.75H83.4215V37.5Z" fill="url(#footerLogoGradient)"/>
                                <path d="M90.3988 37.5V0.75H101.535L118.876 22.5417V0.75H128.921V37.5H117.785L100.444 15.7083V37.5H90.3988Z" fill="url(#footerLogoGradient)"/>
                            </svg>
                             <span className="ml-3 text-2xl font-bold tracking-tighter text-white">outlier</span>
                        </div>
                        <p className="text-gray-400 text-base">The future of business intelligence has arrived.</p>
                        <div className="flex space-x-6">
                            <SocialIcon name="Twitter" href="#">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </SocialIcon>
                            <SocialIcon name="LinkedIn" href="#">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                            </SocialIcon>
                        </div>
                    </div>
                    <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-3 md:grid-cols-4">
                        {(Object.keys(FOOTER_LINKS) as Array<keyof typeof FOOTER_LINKS>).map((category) => (
                             <div key={category}>
                                <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">{category}</h3>
                                <ul role="list" className="mt-4 space-y-4">
                                    {FOOTER_LINKS[category].map(item => <li key={item}><a href="#" className="text-base text-gray-400 hover:text-white">{item}</a></li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
                    <p className="text-base text-gray-400">&copy; 2024 Outlier AI, Inc. All rights reserved.</p>
                     <div className="flex space-x-6 md:order-2 mt-4 md:mt-0">
                        <a href="#" className="text-base text-gray-400 hover:text-white">Privacy</a>
                        <a href="#" className="text-base text-gray-400 hover:text-white">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}