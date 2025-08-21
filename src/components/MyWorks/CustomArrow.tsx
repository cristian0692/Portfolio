import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { useCarousel } from "../ui/carousel";
import type { Direction } from "@/types";

type Props = {
  size: number;
  direction: Direction;
  isScrollPrev?: boolean;
};

const CustomArrow = ({ direction, isScrollPrev = false, size }: Props) => {
  const { scrollPrev, scrollNext } = useCarousel();

  const renderArrow = () => {
    switch (direction) {
      case "up":
        return <ArrowUp color="orange" size={size} />;
      case "down":
        return <ArrowDown color="orange" size={size} />;
      case "left":
        return <ArrowLeft color="orange" size={size} />;
      case "right":
        return <ArrowRight color="orange" size={size} />;
      default:
        return null;
    }
  };

  const action = isScrollPrev ? scrollPrev : scrollNext;
  return (
    <div
      className="bg-white rounded-full size-fit p-4 cursor-pointer"
      onClick={() => action()}
    >
      {renderArrow()}
    </div>
  );
};

export default CustomArrow;
