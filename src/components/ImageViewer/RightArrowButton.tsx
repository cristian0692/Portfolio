import { useImageStore } from "@/lib/imageStore";
import { ArrowRight } from "lucide-react";
type Props = {
  size: number;
};
const RightArrowButton = ({ size }: Props) => {
  const moveRight = useImageStore((state) => state.moveRight);

  return (
    <div
      onClick={moveRight}
      className="border-3 rounded-full p-3 hover:bg-neutral-700"
    >
      <ArrowRight size={size} color="white" />
    </div>
  );
};

export default RightArrowButton;
