import BackgroundSprite from "./BackgroundSprite";
import HeroPhoto from "./HeroPhoto";
import HeroText from "./HeroText";
import ShapeSprites from "./ShapeSprites";
const Hero = () => {
  return (
    <div className="relative w-full h-[600px] flex justify-center items-center p-0 m-0">
      <div className="relative container flex md:flex-row flex-col gap-10">
        <HeroText />
        <HeroPhoto />
        <ShapeSprites />
      </div>
        <BackgroundSprite />
    </div>
  );
};

export default Hero;
