import { useImageStore } from "@/lib/imageStore";

type Props = {
  imageUrls: string[];
};
const PhotoContainer = ({ imageUrls }: Props) => {
  const setImages = useImageStore((state) => state.setImages);
  const getImage = (imageName: string, index: number) => {
    return (
      <div
        className="bg-gray-100 flex rounded-xl"
        onClick={() => setImages(imageUrls, index)}
      >
        <img
          className="hover:scale-105 transition duration-200 h-full object-cover rounded-xl bg-orange-200"
          src={`/images/${imageName}`}
        />
      </div>
    );
  };
  return (
    <div className="xl:w-[50%] w-full h-full flex p-5 flex-col gap-5 justify-center">
      <div className="h-full hover:z-5">{getImage(imageUrls[0], 0)}</div>
      <div className="w-full flex-row xl:flex hidden items-center gap-5">
        <div className="md:w-[50%] hover:z-5">{getImage(imageUrls[1], 1)}</div>
        <div className="md:w-[50%] hover:z-5">{getImage(imageUrls[2], 2)}</div>
      </div>
    </div>
  );
};

export default PhotoContainer;
