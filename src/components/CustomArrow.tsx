import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { useCarousel } from "./ui/carousel";

export type Direction = "up" | "left" | "right" | "down";
type Props = {
    direction: Direction;
    isScrollPrev?: boolean;
}

const CustomArrow = ({ direction, isScrollPrev=false }: Props) => {
    const { scrollPrev, scrollNext } = useCarousel(); // ✅ Called inside CarouselContext

    const renderArrow = () => {
        switch (direction) {
            case "up":
                return <ArrowUp color="orange" size={45} />;
            case "down":
                return <ArrowDown color="orange" size={45} />;
            case "left":
                return <ArrowLeft color="orange" size={45} />;
            case "right":
                return <ArrowRight color="orange" size={45} />;
            default:
                return null;
        }
    }

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