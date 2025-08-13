import { AspectRatio } from "./ui/aspect-ratio";

const HeroPhoto = () => {
  return (
    <div className="md:max-w-[500px] max-w-[300px] md:w-[40%] w-[70%] mx-auto md:mr-auto h-full flex items-center justify-center">
      <AspectRatio ratio={12 / 9} className="-rotate-4">
        <div className="h-full border-gray-900 border-10">
          <div className="w-full h-full bg-gray-900 border-white border-20"></div>
        </div>
      </AspectRatio>
    </div>
  );
};

export default HeroPhoto;
