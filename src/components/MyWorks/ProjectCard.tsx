import type { CardContent as customCardContent } from "@/types";
import PhotoContainer from "./PhotoContainer";
import { Button } from "../ui/button";
import MadeWith from "./ProjectCard/MadeWith";
import SkillsUsed from "./ProjectCard/SkillsUsed";
import { useNavigate } from "react-router-dom";

type Props = {
  content: customCardContent;
};

const ProjectCard = ({ content }: Props) => {
  const navigate = useNavigate(); // this gives you the function
  const handleClick = (link: string) => {
    navigate(link);
  };
  return (
    <div className="lg:h-auto  w-full bg-orange-200 border-none flex md:flex-row flex-col gap-0 rounded-4xl">
      <PhotoContainer imageUrls={content.imagesUrl} />
      <div className="flex flex-1 flex-col p-10 h-auto items-start justify-between gap-7">
        <div className="flex flex-col items-start gap-4">
          <div className="text-5xl">{content.title}</div>
          <div>{content.description}</div>

          {content.liveServer && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="pt-10 underline text-custom-orange"
              href={content.liveServer}
            >
              Click Here to see the Live Server!
            </a>
          )}

          {content.additionalInfo && <div>{content.additionalInfo}</div>}
        </div>
        <div className="flex flex-col gap-10 w-full">
          <div className="flex md:flex-col w-full justify-center md:items-start items-center gap-4">
            <SkillsUsed skillsUsed={content.skillsUsed} />
            <MadeWith createdBy={content.createdBy} />
          </div>
          {content.customPageLink && (
            <Button
              onClick={() => handleClick(String(content.customPageLink))}
              className="p-7 text-lg"
            >
              Find Out More
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
