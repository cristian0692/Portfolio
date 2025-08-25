import { useImageStore } from "@/lib/imageStore";
import { ArrowLeft } from "lucide-react";

type Props = {
  size: number;
};
const LeftArrowButton = ({ size }: Props) => {
  const moveLeft = useImageStore((state) => state.moveLeft);

  return (
    <div
      onClick={moveLeft}
      className="border-3 rounded-full p-3 hover:bg-neutral-700"
    >
      <ArrowLeft size={size} color="white" />
    </div>
  );
};

export default LeftArrowButton;
