import { Dot } from "lucide-react";

type Props = {
  skillsUsed: string[];
};
//always displays the skills in a row
const SkillsUsedAlone = ({ skillsUsed }: Props) => {
  return (
    <div className="flex md:flex-row flex-col items-center gap-1 bg-orange-100 rounded-lg justify-center p-3 pr-5">
      <div className="md:pr-5 flex md:text-md text-xl w-auto flex justify-center">
        Skills <span className="md:inline hidden">:</span>
      </div>
      <div className="flex flex-row gap-3">
        {skillsUsed.map((skill, index) => {
          if (index == 3) {
            return "...";
          }
          if (index > 3) return;

          return (
            <span className="flex flex-row">
              <span className="text-custom-orange">{skill}</span>{" "}
              {index != 2 && index != skillsUsed.length - 1 && (
                <Dot className="md:w-auto w-full" />
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsUsedAlone;
