import BackgroundSprite from "./BackgroundSprite";
import HeroPhoto from "./HeroPhoto";
import HeroText from "./HeroText";
const Hero = () => {
  return (
    <div className="relative w-full h-[600px] flex justify-center items-center p-0 m-0">
      <div className="container flex md:flex-row flex-col md:gap-0 gap-10">
          <HeroText />
          <HeroPhoto />
      </div>
        <BackgroundSprite />
    </div>
  );
};

export default Hero;
