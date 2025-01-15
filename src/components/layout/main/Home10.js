import About from "@/components/sections/abouts/About6";
import UserFeedback from "@/components/sections/user-feedback/UserFeedback";
import TechnologyPlatforms from "@/components/sections/technology-platforms/TechnologyPlatforms";
import IndustryTechnologies from "@/components/sections/industry-technologies/IndustryTechnologies";
import Hero from "@/components/sections/hero-banners/Hero";
import OurServices from "@/components/sections/our-services/OurServices";
import PricingPlans from "@/components/sections/pricing-plans/PricingPlans";
import Projects from "@/components/sections/projects/Projects";

import ClientSuccessStories from "@/components/sections/client-success-stories/ClientSuccessStories";
import SupportMaintenance from "@/components/sections/support-and-maintenance/SupportAndMaintenance";
import React from "react";

const Home10 = () => {
  return (
    <>
      <Hero />
      <About />  
      <OurServices />   {/* Popular Subjects*/}
      <TechnologyPlatforms/>    {/* Brands */}
      <Projects />  {/* Programs2 */} 
      <IndustryTechnologies/>    {/* FeatureCourses */}
      {/* <PricingPlans /> */}
      <SupportMaintenance />   {/* Testimonials2 */}
      <ClientSuccessStories />    {/* ImageGallery */}
      <UserFeedback />    {/* Blogs2 */}
    </>
  );
};

export default Home10;
