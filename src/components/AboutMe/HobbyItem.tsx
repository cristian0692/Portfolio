import type { HobbyContent } from "@/types";
import { Separator } from "../ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type Props = {
  hobby: HobbyContent;
};

const HobbyItem = ({ hobby }: Props) => {
  return (
    <Tooltip>
      <TooltipTrigger className="md:w-[90px] w-[60px] flex justify-center hover:-translate-y-4 transition duration-200">
        <img
          className="h-[auto] max-h-[64px] w-[auto] md:max-w-[90px] max-w-[60px] object-contain"
          src={`/images/${hobby.imagePath}`}
          alt={hobby.title}
        />
      </TooltipTrigger>
      <TooltipContent className="text-base text-black bg-orange-300 p-3 rounded-lg flex flex-col items-center justify-center mt-4 border-none shadow-none w-[200px]">
        <div className="font-bold">
          {hobby.title.charAt(0).toUpperCase() + hobby.title.slice(1)}
        </div>
        {hobby.duration && (
          <div className="font-roundedMT">
            Started {hobby.duration} {hobby.duration == 1 ? "year " : "years "}
            ago
          </div>
        )}

        {hobby.details && (
          <div className="w-full p-2">
            <Separator className="bg-black" />
            {hobby.details}
          </div>
        )}
      </TooltipContent>
    </Tooltip>
  );
};

export default HobbyItem;
