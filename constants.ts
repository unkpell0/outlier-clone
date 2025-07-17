import { FeatureProps } from './components/FeatureSection';
import { TestimonialProps } from './components/Testimonial';

export const NAV_LINKS = [
  { name: 'Product', href: '#' },
  { name: 'Solutions', href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'Pricing', href: '#' },
];

export const FEATURE_SECTIONS: Omit<FeatureProps, 'key'>[] = [
  {
    title: 'Automated analysis uncovers hidden insights',
    description:
      'Outlier connects to your cloud data sources to discover hidden patterns and trends using automated business analysis, delivering insights directly to you every day.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    imagePosition: 'right',
  },
  {
    title: 'Root cause analysis without the manual effort',
    description:
      'Go beyond dashboards to understand what is happening in your business and why it is happening. Outlier provides you with concise, easy-to-understand stories about your business to help you take action.',
    image: 'https://images.unsplash.com/photo-1560415347-94a0d8a5b5ce?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    imagePosition: 'left',
  },
  {
    title: 'Story-based insights delivered to your team',
    description:
      "Receive a daily feed of 5-10 automated insights that have the biggest impact on your business. Outlier's stories are delivered to you in Slack or email in a simple, easy-to-read format.",
    image: 'https://images.unsplash.com/photo-1611926653458-092a42e7d3d3?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3',
    imagePosition: 'right',
  },
];

export const TESTIMONIAL_DATA: Omit<TestimonialProps, 'key'> = {
  quote: "Outlier helps us identify customer experience issues we wouldn't have found otherwise. It's an early warning system for our business.",
  author: 'Michael Williams',
  role: 'VP of Product, Digital Turbine',
  authorImage: 'https://randomuser.me/api/portraits/men/32.jpg'
};

export const TRUSTED_LOGOS = [
    { name: 'Zendesk', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Zendesk_logo.svg' },
    { name: 'Fender', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Fender_logo.svg' },
    { name: 'Coinbase', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Coinbase_logo_2018.svg' },
    { name: 'Boll & Branch', logo: 'https://images.ctfassets.net/4s9stsv5dsci/39Yx42vr2s26aIe6a8W2uS/1e83921104e766b1e626e38a2e55262e/boll-and-branch-logo.svg' },
    { name: 'GoPro', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/GoPro_logo.svg/1280px-GoPro_logo.svg.png'}
];

export const INTEGRATION_LOGOS = [
  'Adobe', 'Google Analytics', 'Salesforce', 'Stripe', 'Snowflake', 'Shopify',
  'Mixpanel', 'Facebook Ads', 'Google Ads', 'HubSpot', 'Zendesk', 'MySQL'
];

export const FOOTER_LINKS = {
    Product: ['Automated Analysis', 'Root Cause Analysis', 'Story-based Insights', 'Integrations', 'Pricing'],
    Solutions: ['For Marketing Teams', 'For Product Teams', 'For Data Teams', 'For Agencies'],
    Resources: ['Blog', 'Customer Stories', 'Glossary', 'Help Center'],
    Company: ['About Us', 'Careers', 'Contact Us'],
};