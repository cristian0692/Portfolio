import { AspectRatio } from "./ui/aspect-ratio";
import photo from "../assets/photo-2.jpg";

const HeroPhoto = () => {
  return (
    <div className="md:max-w-[400px] max-w-[250px] md:w-[40%] w-[70%] mx-auto md:mr-auto md:ml-0 h-full flex items-center justify-center">
      <AspectRatio ratio={10 / 15} className="-rotate-4">
        <div className="h-full border-gray-900 border-10">
          <div className="overflow-hidden w-full h-full bg-gray-900 border-white border-20 flex justify-center items-center">
            <img className="h-[110%] object-cover" src={photo} alt="portfolio photo" />
          </div>
        </div>
      </AspectRatio>
    </div>
  );
};

export default HeroPhoto;
