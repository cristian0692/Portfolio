import CustomArrow from "./CustomArrow";

const ArrowsFooter = () => {
  return (
    <div className="flex gap-10">
      <div className="lg:hidden md:flex hidden justify-center p-10">
        <CustomArrow size={25} direction="left" isScrollPrev />
      </div>
      <div className="lg:hidden md:flex hidden justify-center p-10">
        <CustomArrow size={25} direction="right" />
      </div>
    </div>
  );
};

export default ArrowsFooter;
