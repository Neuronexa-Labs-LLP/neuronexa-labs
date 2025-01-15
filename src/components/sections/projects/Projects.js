  import Image from "next/image";
  import aboutImage from "@/assets/images/about/about_ai.jpg";
  import TiltWrapper from "@/components/shared/wrappers/TiltWrapper";
  import SectionName from "@/components/shared/section-names/SectionName";
  import HeadingPrimary from "@/components/shared/headings/HeadingPrimary";
  import Project from "@/components/sections/projects/Project"; // Import Program component

  import aiImage1 from "@/assets/images/program/ai_1.jpg";
  import aiImage2 from "@/assets/images/program/ai_2.jpg";
  import aiImage3 from "@/assets/images/program/ai_3.jpg";
  import aiImage4 from "@/assets/images/program/ai_4.jpg";

  const Projects = () => {
    // Program data to display
    const programs = [
      {
        projectNumber: 1,
        category: "IT",
        title: "TECHNOLOGY",
        link: "abc.com",
        image: aiImage1,
        description:"Leveraging Our Extensive Industry Expertise, We Deliver Tailor-made Web Solutions That Not Only Meet but Exceed the Unique Digital Demands Across Sectors, Driving Significant Growth, Enhancing User Experience, and Ensuring Scalable and Sustainable Success."
      },
      {
        projectNumber: 2,
        category: "IT",
        title: "Classifying Best Intelligence Photos",
        link: "abc.com",
        image: aiImage2,
        description:"Leveraging Our Extensive Industry Expertise, We Deliver Tailor-made Web Solutions That Not Only Meet but Exceed the Unique Digital Demands Across Sectors, Driving Significant Growth, Enhancing User Experience, and Ensuring Scalable and Sustainable Success."
      },
      {
        projectNumber: 3,
        category: "IT",
        title: "Industry Labor Machine",
        link: "abc.com",
        image: aiImage3,
        description:"Leveraging Our Extensive Industry Expertise, We Deliver Tailor-made Web Solutions That Not Only Meet but Exceed the Unique Digital Demands Across Sectors, Driving Significant Growth, Enhancing User Experience, and Ensuring Scalable and Sustainable Success."
      },
      {
        projectNumber: 4,
        category: "IT",
        title: "Education Super AI Studies",
        link: "abc.com",
        image: aiImage4,
        description:"Leveraging Our Extensive Industry Expertise, We Deliver Tailor-made Web Solutions That Not Only Meet but Exceed the Unique Digital Demands Across Sectors, Driving Significant Growth, Enhancing User Experience, and Ensuring Scalable and Sustainable Success."
      },
    ];

    return (
      <section id="OurProjects">
        <div className="container py-50px md:py-70px lg:py-20 2xl:py-100px">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-30px">
            {/* Left side with Heading and Description (30%) */}
            <div data-aos="fade-up" className="lg:col-span-3">
              <HeadingPrimary>
                Get a Glimpse of the Amazing Projects We Have Worked on
              </HeadingPrimary>
            </div>

            {/* Right side with Programs Grid (70%) */}
            <div data-aos="fade-up" className="lg:col-span-7">
              <div className="flex space-x-4 overflow-x-auto">
                {/* Cards */}
                {programs.map((program, idx) => (
                  <div key={idx} className="w-[25vw] p-4 flex-none dark:text-contentColor-dark">
                    <Project program={program} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Projects;  