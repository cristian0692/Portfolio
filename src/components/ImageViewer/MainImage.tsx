import { useImageStore } from "@/lib/imageStore";
import LeftArrowButton from "./LeftArrowButton";
import RightArrowButton from "./RightArrowButton";

const MainImage = () => {
  const index = useImageStore((state) => state.index);
  const imageURLs = useImageStore((state) => state.imageURLs);

  return (
    <div className="w-fit flex flex-col items-center gap-10">
      <img
        src={`/images/${imageURLs[index]}`}
        alt="Focused Dialog Image"
        className="md:max-w-[70vw] max-w-[95vw] max-h-[70vh] object-contain z-10 shrink-0"
      />
      <div className="flex gap-10 items-center text-white text-2xl">
        <div className="md:hidden block">
          <LeftArrowButton size={20} />
        </div>
        <div>
          {index + 1} / {imageURLs.length}
        </div>
        <div className="md:hidden block">
          <RightArrowButton size={20} />
        </div>
      </div>
    </div>
  );
};

export default MainImage;
