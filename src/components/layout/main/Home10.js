import About6 from "@/components/sections/abouts/About6";
import UserFeedback from "@/components/sections/blogs/Blogs2";
import TechnologyPlatformsWeUse from "@/components/sections/brands/Brands";
import IndustryTechnologies from "@/components/sections/featured-courses/FeatureCourses";
import Hero10 from "@/components/sections/hero-banners/Hero10";
import OurServices from "@/components/sections/popular-subjects/PopularSubjects";
import PricingPlans from "@/components/sections/pricing-plans/PricingPlans";
import OurProjects from "@/components/sections/programs/Programs2";

import ClientSuccessStories from "@/components/sections/sub-section/ImageGallery";
import SupportMaintenance from "@/components/sections/testimonials/Testimonials2";
import React from "react";

const Home10 = () => {
  return (
    <>
      <Hero10 />
      <About6 />  
      <OurServices />   {/* Popular Subjects*/}
      <TechnologyPlatformsWeUse/>    {/* Brands */}
      <OurProjects />  {/* Programs2 */} 
      <IndustryTechnologies/>    {/* FeatureCourses */}
      {/* <PricingPlans /> */}
      <SupportMaintenance />   {/* Testimonials2 */}
      <ClientSuccessStories />    {/* ImageGallery */}
      <UserFeedback />    {/* Blogs2 */}
    </>
  );
};

export default Home10;
