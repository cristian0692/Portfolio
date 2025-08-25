import { useImageStore } from "../../lib/imageStore";
import MainImage from "./mainImage";
import CloseButton from "./CloseButton";
import LeftArrowButton from "./LeftArrowButton";
import RightArrowButton from "./RightArrowButton";

const ImageViewer = () => {
  const nrImages = useImageStore((state) => state.imageURLs.length);
  return (
    <div
      className={`fixed w-full h-full inset-0 ${
        nrImages == 0 ? "-z-5" : "z-100"
      }`}
    >
      {nrImages != 0 && (
        <div className="flex gap-5 h-full items-center justify-center bg-black/50 z-2">
          <div className="md:block hidden">
            <LeftArrowButton size={40} />
          </div>
          <MainImage />
          <div className="md:block hidden">
            <RightArrowButton size={40} />
          </div>
          <CloseButton />
        </div>
      )}
    </div>
  );
};

export default ImageViewer;
