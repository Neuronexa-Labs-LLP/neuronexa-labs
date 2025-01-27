import About from "@/components/sections/about/About";
import TechnologyPlatforms from "@/components/sections/technology-platforms/TechnologyPlatforms";
import IndustryTechnologies from "@/components/sections/industry-technologies/IndustryTechnologies";
import Hero from "@/components/sections/hero-banners/Hero";
import OurServices from "@/components/sections/our-services/OurServices";
import PricingPlans from "@/components/sections/pricing-plans/PricingPlans";
import Projects from "@/components/sections/projects/Projects";
import ClientSuccessStories from "@/components/sections/client-success-stories/ClientSuccessStories";
import SupportMaintenance from "@/components/sections/support-and-maintenance/SupportAndMaintenance";

import React from "react";
import UserFeedback from "@/components/sections/user-feedback/UserFeedback";

const HomeMain = () => {
  return (
    <>
      <Hero />
      <About />  
      <OurServices />   
      <TechnologyPlatforms/>    
      <Projects /> 
      <IndustryTechnologies/>   
      {/* <PricingPlans /> */}
      <SupportMaintenance />   
      <ClientSuccessStories />   
      <UserFeedback />   
    </>
  );
};

export default HomeMain;
