import Image from "next/image";
import aboutImage from "@/assets/images/about/about_ai.jpg";
import TiltWrapper from "@/components/shared/wrappers/TiltWrapper";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";

const About6 = () => {
  return (
    <section>
      <div className="container py-50px md:py-70px lg:py-20 2xl:py-100px">
      <HeadingPrimary text="center">Client Success Stories</HeadingPrimary>
      <br></br>
      <br></br>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2px"> {/* Even smaller gap */}
          {/* About left (Image) for first feedback */}
          <div
            data-aos="fade-up"
            className="flex flex-col justify-center items-center"
          >
            <TiltWrapper>
              <div className="tilt mb-5">
                <Image
                  className="w-[150px] h-[150px] object-contain rounded-lg2"
                  src={aboutImage}
                  alt="About image"
                  placeholder="blur"
                />
              </div>
            </TiltWrapper>

            {/* Company Name (Bold) for first feedback */}
            <div className="text-lg font-semibold">Neuronexa Labs</div>

            {/* Reviewer Position (Lighter) for first feedback */}
            <div className="text-sm text-gray-500 mt-2">CEO & Founder</div>
          </div>

          {/* About right (Text) for first feedback */}
          <div data-aos="fade-up" className="ml-2px"> {/* Reduced margin to 2px */}
            <HeadingPrimary>
              Awesome Experience!
            </HeadingPrimary>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-10 pl-3 border-l-[3px] border-secondaryColor">
              The level of patience, and knowledge displayed was simply phenomenal throughout the entire process. The product was everything that I imagined it would be.
            </p>
          </div>
        </div>

        {/* Add second feedback below the first one */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2px mt-10"> {/* Even smaller gap */}
          {/* About left (Image) for second feedback */}
          <div
            data-aos="fade-up"
            className="flex flex-col justify-center items-center"
          >
            <TiltWrapper>
              <div className="tilt mb-5">
                <Image
                  className="w-[150px] h-[150px] object-contain rounded-lg2"
                  src={aboutImage}
                  alt="About image"
                  placeholder="blur"
                />
              </div>
            </TiltWrapper>

            {/* Company Name (Bold) for second feedback */}
            <div className="text-lg font-semibold">Hello</div>

            {/* Reviewer Position (Lighter) for second feedback */}
            <div className="text-sm text-gray-500 mt-2">Sales Person</div>
          </div>

          {/* About right (Text) for second feedback */}
          <div data-aos="fade-up" className="ml-2px"> {/* Reduced margin to 2px */}
            <HeadingPrimary>
              Amazing Service!
            </HeadingPrimary>
            <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark mb-10 pl-3 border-l-[3px] border-secondaryColor">
              The team at Hello really helped us build a fantastic solution. The attention to detail and expertise were outstanding. I highly recommend their services!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About6;
