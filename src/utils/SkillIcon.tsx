import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  name: string;
};

const SkillIcon = ({ icon, name }: Props) => {
  return (
    <Tooltip>
      <TooltipTrigger className="hover:scale-120">{icon}</TooltipTrigger>
      <TooltipContent>
        <div className="text-lg">{name}</div>
      </TooltipContent>
    </Tooltip>
  );
};

export default SkillIcon;
