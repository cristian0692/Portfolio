import { useImageStore } from "@/lib/imageStore";
import { AspectRatio } from "../ui/aspect-ratio";

type Props = {
  imageUrls: string[];
};
const PhotoContainer = ({ imageUrls }: Props) => {
  const setImages = useImageStore((state) => state.setImages);
  const getImage = (
    imageName: string,
    index: number,
    ratioX: number,
    ratioY: number
  ) => {
    return (
      <AspectRatio
        className="bg-gray-100 flex rounded-lg"
        ratio={ratioX / ratioY}
        onClick={() => setImages(imageUrls, index)}
      >
        <img
          className="hover:scale-120 transition duration-200 w-full h-auto object-contain rounded-lg bg-orange-200"
          src={`/images/${imageName}`}
        />
      </AspectRatio>
    );
  };
  return (
    <div className="md:w-[50%] w-full h-auto p-10 md:pr-0 pr-10 flex flex-col gap-5 justify-center">
      <div className="w-full hover:z-5">{getImage(imageUrls[0], 0, 16, 8)}</div>
      <div className="w-full flex flex-row gap-5">
        <div className="w-[50%] hover:z-5 ">
          {getImage(imageUrls[1], 1, 4, 4)}
        </div>
        <div className="w-[50%] hover:z-5">
          {getImage(imageUrls[2], 2, 4, 4)}
        </div>
      </div>
    </div>
  );
};

export default PhotoContainer;
