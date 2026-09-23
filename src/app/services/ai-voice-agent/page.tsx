import AIVoiceHero from '../../../components/AIVoiceHero';
import BusinessOutcomesSection from '../../../components/BusinessOutcomesSection';
import FeaturesSection from '../../../components/FeaturesSection';
import IndustrySolutionsSection from '../../../components/IndustrySolutionsSection';
import OnboardingStepsSection from '../../../components/OnboardingStepsSection';
import ContactSection from '../../../components/ContactSection';
import FAQSection from '../../../components/FAQSection';

export const metadata = {
  title: 'AI Voice Assistants | Neuronexa Labs',
  description: 'Deploy human-sounding AI voice assistants with subsecond latency, natural speech generation, and zero-loss CRM synchronization.',
  alternates: {
    canonical: 'https://neuronexalabs.com/services/ai-voice-agent/',
  },
};

export default function AIVoiceAgent() {
  return (
    <main>
      {/* 1 Hero Section */}
      <AIVoiceHero />
      
      {/* 2 How it will help you */}
      <BusinessOutcomesSection />
      
      {/* 3 What is our solution */}
      <FeaturesSection />
      
      {/* 4 How this will fit you */}
      <IndustrySolutionsSection />
      <OnboardingStepsSection />
      
      {/* 5 Contact us */}
      <ContactSection />
      
      {/* 6 FAQs (5 core questions) */}
      <FAQSection />
    </main>
  );
}
