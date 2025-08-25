import { useImageStore } from "@/lib/imageStore";
import { X } from "lucide-react";

const CloseButton = () => {
  const clearImages = useImageStore((state) => state.removeImages);

  return (
    <div className="absolute top-10 right-10 z-20 hover:bg-neutral-500 rounded-xl">
      <X size={80} className="text-neutral-300" onClick={clearImages} />
    </div>
  );
};

export default CloseButton;
