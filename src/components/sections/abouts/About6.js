import Image from "next/image";
import aboutImage from "@/assets/images/about/about_ai.jpg";
import aboutImage15 from "@/assets/images/about/about_15.png";
import TiltWrapper from "@/components/shared/wrappers/TiltWrapper";
import SectionName from "@/components/shared/section-names/SectionName";

import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const About6 = () => {
  return (
    <section id="About">
      <div className="container py-50px md:py-70px lg:py-20 2xl:py-100px">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-30px">
          {/* about left (now moved to the right) */}
          <div data-aos="fade-up" className="2xl:mr-65px">
            <HeadingPrimary>
              Turn Your Website Into a Sales Powerhouse
            </HeadingPrimary>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-10 pl-3 border-l-[3px] border-secondaryColor">
              Leveraging Our Extensive Industry Expertise, We Deliver Tailor-made Web Solutions That Not Only Meet but Exceed the Unique Digital Demands Across Sectors, Driving Significant Growth, Enhancing User Experience, and Ensuring Scalable and Sustainable Success.
            </p>
            {/* <div className="mt-30px">
              <ButtonPrimary path="/about" arrow={true}>
                About More
              </ButtonPrimary>
            </div> */}
          </div>

          {/* about right (now moved to the left) */}
          <div data-aos="fade-up">
            <TiltWrapper>
              <div className="tilt">
                <Image
                  className="w-full rounded-lg2"
                  src={aboutImage}
                  alt=""
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

export default About6;
