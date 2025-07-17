
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { HowItWorks } from './components/HowItWorks';
import { FeatureSection } from './components/FeatureSection';
import { Testimonial } from './components/Testimonial';
import { Integrations } from './components/Integrations';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FEATURE_SECTIONS, TESTIMONIAL_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="bg-white text-brand-dark overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        {FEATURE_SECTIONS.map((section, index) => (
          <FeatureSection
            key={index}
            title={section.title}
            description={section.description}
            image={section.image}
            imagePosition={section.imagePosition}
          />
        ))}
        <Testimonial
          quote={TESTIMONIAL_DATA.quote}
          author={TESTIMONIAL_DATA.author}
          role={TESTIMONIAL_DATA.role}
          authorImage={TESTIMONIAL_DATA.authorImage}
        />
        <Integrations />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;