import About from "@/components/sections/about/About";
import TechnologyPlatforms from "@/components/sections/technology-platforms/TechnologyPlatforms";
import IndustryTechnologies from "@/components/sections/industry-technologies/IndustryTechnologies";
import Hero from "@/components/sections/hero-banners/Hero";
import OurServices from "@/components/sections/our-services/OurServices";
import PricingPlans from "@/components/sections/pricing-plans/PricingPlans";
import Projects from "@/components/sections/projects/Projects";
import ClientSuccessStories from "@/components/sections/client-success-stories/ClientSuccessStories";
import SupportMaintenance from "@/components/sections/support-and-maintenance/SupportAndMaintenance";

<path
className="group-hover:fill-whiteColor dark:group-hover:fill-whiteColor-dark"
fillRule="evenodd"
clipRule="evenodd"
d="M6.30281 28.9536H8.45394C9.05625 28.9536 9.48648 29.5426 9.48648 30.2495V36.8465C9.48648 37.6711 9.05625 38.2602 8.45394 38.2602H6.30281C5.78654 38.2602 5.27026 37.6711 5.27026 36.8465V30.2495C5.27026 29.5426 5.78654 28.9536 6.30281 28.9536Z"
fill="#5F2DED"
></path>
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
      {/* <ClientSuccessStories />    */}
      <UserFeedback />   
    </>
  );
};

export default HomeMain;
