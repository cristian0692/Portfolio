import { getSkillIcon } from "@/utils/skillIcons";

type Props = {
  APIs?: string[];
  skills: string[];
};

const SkillsUsed = ({ APIs, skills }: Props) => {
  return (
    <div className="flex flex-col gap-10">
      <div className="text-xl flex gap-4 items-center">
        <div className="underline">Skills Used:</div>
        {skills.map((skill) => {
          return getSkillIcon(skill);
        })}
      </div>
      {APIs && (
        <div className="text-xl flex gap-4 items-center">
          <div className="underline">APIs Used:</div>
          {APIs.map((api) => getSkillIcon(api))}
        </div>
      )}
    </div>
  );
};

export default SkillsUsed;
