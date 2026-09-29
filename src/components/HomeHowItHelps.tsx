"use client";

import React from 'react';
import HowItWorksSection, { HOW_IT_WORKS_STEPS } from './HowItWorksSection';

// Schema.org structured data with the exact 5 steps
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How our AI voice assistant works',
  description:
    'Five steps from first consultation to a live, automated voice assistant — answering calls, qualifying leads, and booking appointments for your business.',
  step: HOW_IT_WORKS_STEPS.map((s, idx) => ({
    '@type': 'HowToStep',
    position: idx + 1,
    name: s.title,
    text: s.description,
  })),
};

const HomeHowItHelps: React.FC = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HowItWorksSection />
    </>
  );
};

export default HomeHowItHelps;
