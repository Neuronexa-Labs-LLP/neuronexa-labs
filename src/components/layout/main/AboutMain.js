import About11 from "@/components/sections/abouts/About11";
import TechnologyPlatforms from "@/components/sections/technology-platforms/TechnologyPlatforms";
import FeatureCourses from "@/components/sections/industry-technologies/IndustryTechnologies";
import HeroPrimary from "@/components/sections/hero-banners/HeroPrimary";
import Overview from "@/components/sections/overviews/Overview";
import Testimonials from "@/components/sections/testimonials/Testimonials";

const AboutMain = () => {
  return (
    <>
      <HeroPrimary title="About Page" path={"About Page"} />
      <About11 />
      <Overview />
      <FeatureCourses
        title={
          <>
            Choose The Best Package <br />
            For your Learning
          </>
        }
        course="2"
        subTitle="Popular Courses"
      />
      <Testimonials />
      <TechnologyPlatforms />
    </>
  );
};

export default AboutMain;
