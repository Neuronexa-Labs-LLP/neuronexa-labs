import dynamic from 'next/dynamic';
import Image from "next/image";
import aboutImage from "@/assets/images/about/about_ai.jpg";
// import TiltWrapper from "@/components/shared/wrappers/TiltWrapper";
import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

const client_stories = [
  {
    image: aboutImage,
    name: "Basith Adka",
    position: "Marketing Head at AMEC UAE",
    heading: "Awesome Experience!",
    description:
      "The level of patience, and knowledge displayed was simply phenomenal throughout the entire process. The product was everything that I imagined it would be."
  },
  {
    image: aboutImage,
    name: "Akshay P",
    position: "Marketing Director st Snugg A Bear",
    heading: "I Am Overjoyed With The Outcomes",
    description:
      "I am overjoyed with the outcomes WDS delivered with its excellent eCommerce development services. Working with their developers was a breeze, and they brought my vision to life precisely as had envisioned Their expertise and excellent customer service truly stood out"
  },
];

const About6 = () => {
  return (
    <section id='ClientSuccessStories'>
      <div className="container py-50px md:py-70px lg:py-20 2xl:py-100px">
        <HeadingPrimary text="center">Client Success Stories</HeadingPrimary>
        <br />
        <br />
        <div className="h-[400px] w-3/4 m-auto">
          {client_stories.map((item, index) => {
            return (
              <div key={index} className="flex items-start justify-between p-5">
                {/* Left Side - Image, Name, Position */}
                <div className="w-1/2 flex flex-col items-center justify-center space-y-3"> {/* Center align vertically */}
                  <div className="mb-5">
                    <Image
                      src={item.image}
                      alt={`Feedback Image ${index + 1}`}
                      width={150}
                      height={150}
                      className="object-contain rounded-lg2"
                    />
                  </div>
                  <div className='text-center'>
                    <div className="text-lg font-semibold">{item.name}</div>
                    <div className="text-sm text-gray-500 mt-2">{item.position}</div>
                  </div>
                </div>

                {/* Right Side - Heading, Description */}
                <div className="w-1/2 pl-5 flex flex-col justify-start">
                  <div>
                    <HeadingPrimary className="mb-2">{item.heading}</HeadingPrimary>
                    <p className="text-sm md:text-base leading-7 text-contentColor dark:text-contentColor-dark pl-3 border-l-[3px] border-secondaryColor">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </section>
  );
};

export default About6;
