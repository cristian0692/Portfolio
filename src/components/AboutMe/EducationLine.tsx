import type { Education } from "@/types";
import { CircleSmall } from "lucide-react";

type Props = {
  education: Education;
};

export const EducationLine = ({ education }: Props) => {
  const getFormattedDate = (date: Date) => {
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
  };

  return (
    <li className="flex items-center md:gap-5 gap-0 md:flex-row flex-col">
      <div className="flex md:flex-row flex-col items-center text-center">
        <CircleSmall size={20} />
        {education.type} - {education.name}{" "}
      </div>
      <span className="text-gray-500">
        ({getFormattedDate(education.startDate)} -{" "}
        {education.endDate ? getFormattedDate(education.endDate) : "current"})
      </span>
    </li>
  );
};

export default EducationLine;
