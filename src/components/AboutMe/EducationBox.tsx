import { MY_EDUCATION } from "@/config/about-me-config";
import EducationLine from "./EducationLine";

const EducationBox = () => {
  return (
    <div className="flex flex-1 flex-col items-center gap-4">
      <h1 className="text-3xl">Education</h1>
      <ul className="w-full">
        {MY_EDUCATION.map((education, index) => (
          <EducationLine key={index} education={education} />
        ))}
      </ul>
    </div>
  );
};

export default EducationBox;
