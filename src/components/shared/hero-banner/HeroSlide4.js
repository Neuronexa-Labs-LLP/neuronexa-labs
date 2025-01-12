import HeadingXl from "../headings/HeadingXl";
import HreoName from "../section-names/HreoName";
import ButtonPrimary from "../buttons/ButtonPrimary";

const HeroSlide4 = ({ slide }) => {
  const { tag, title } = slide;
  return (
    <div className="container lg:max-w-770px xl:max-w-998px relative overflow-hidden">
      <div data-aos="fade-up" className="text-center">
        <div className="">
          <HreoName>{tag}</HreoName>
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

export default HeroSlide4;
