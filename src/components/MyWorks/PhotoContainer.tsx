import { AspectRatio } from "../ui/aspect-ratio";

type Props = {
  imageUrls: string[];
};
const PhotoContainer = ({ imageUrls }: Props) => {
  const getImage = (imageName: string, ratioX: number, ratioY: number) => {
    return (
      <AspectRatio
        className="bg-gray-100 flex rounded-lg"
        ratio={ratioX / ratioY}
      >
        <img
          className="w-full h-auto object-contain rounded-lg bg-orange-200"
          src={`/images/${imageName}`}
          alt="card image"
        />
      </AspectRatio>
    );
  };
  return (
    <div className="md:w-[50%] w-full h-auto p-10 md:pr-0 pr-10 flex flex-col gap-5 justify-center">
      <div className="w-full hover:z-5  hover:scale-120 transition duration-200">
        {getImage(imageUrls[0], 16, 8)}
      </div>
      <div className="w-full flex flex-row gap-5">
        <div className="w-[50%] hover:z-5 hover:scale-120 transition duration-200">
          {getImage(imageUrls[1], 4, 4)}
        </div>
        <div className="w-[50%] hover:z-5 hover:scale-120 transition duration-200">
          {getImage(imageUrls[2], 4, 4)}
        </div>
      </div>
    </div>
  );
};

export default PhotoContainer;
