import HeadingXl from "../../shared/headings/HeadingXl";
import HeroName from "../../shared/section-names/HeroName";
import ButtonPrimary from "../../shared/buttons/ButtonPrimary";

const HeroSlide = ({ slide }) => {
  const { tag, title } = slide;
  return (
    <div className="container lg:max-w-770px xl:max-w-998px relative overflow-hidden">
      <div data-aos="fade-up" className="text-center">
        <div className="">
          <HeroName>{tag}</HeroName>
          <HeadingXl color="white">{title}</HeadingXl>
          <p className="text-size-15 md:text-lg text-blackColor-dark font-medium">
          Elevating Your Success in App Development, Web Development,<br />
          E-commerce, and Digital Marketing
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
