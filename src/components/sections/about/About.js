import Image from "next/image";
import Image1 from "@/assets/images/brand/About.png";
import aboutImage from "@/assets/images/about/about_ai.jpg";
import TiltWrapper from "@/components/shared/wrappers/TiltWrapper";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";

// Importing icons (assumed to be FontAwesome or similar)
import { FaChartLine, FaCogs, FaPlug, FaUser } from 'react-icons/fa'; 

const About = () => {
  return (
    <section id="About">
      <div className="container py-50px md:py-70px lg:py-20 2xl:py-100px">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-30px">
          {/* Left section */}
          <div data-aos="fade-up" className="2xl:mr-65px">
            <HeadingPrimary>
              Turn Your Website Into a Sales Powerhouse
            </HeadingPrimary>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-10 pl-3 border-l-[3px] border-secondaryColor">
              Leveraging Our Extensive Industry Expertise, We Deliver Tailor-made Web Solutions That Not Only Meet but Exceed the Unique Digital Demands Across Sectors, Driving Significant Growth, Enhancing User Experience, and Ensuring Scalable and Sustainable Success.
            </p>
            
            {/* 4 boxes with icons and text */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <FaChartLine className="text-secondaryColor text-3xl" />
                <span className="text-lg font-medium dark:text-contentColor-dark">Drive Business Growth</span>
              </div>
              <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <FaCogs className="text-secondaryColor text-3xl" />
                <span className="text-lg font-medium dark:text-contentColor-dark">Customization with Scalability</span>
              </div>
              <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <FaPlug className="text-secondaryColor text-3xl" />
                <span className="text-lg font-medium dark:text-contentColor-dark">Integrating Advanced Features</span>
              </div>
              <div className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <FaUser className="text-secondaryColor text-3xl" />
                <span className="text-lg font-medium dark:text-contentColor-dark">Enhanced User Experience</span>
              </div>
            </div>

          </div>

          {/* Right section (Image) */}
          <div data-aos="fade-up">
            <TiltWrapper>
              <div className="tilt">
                <Image
                  className="w-full rounded-lg2"
                  src={Image1}
                  alt="About Us"
                  placeholder="blur"
                />
              </div>
            </TiltWrapper>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
