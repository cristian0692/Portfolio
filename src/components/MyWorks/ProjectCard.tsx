import type { CardContent as customCardContent } from "@/types";
import PhotoContainer from "./PhotoContainer";
import { Button } from "../ui/button";

type Props = {
  content: customCardContent;
};

const ProjectCard = ({ content }: Props) => {
  return (
    <div className="lg:h-auto  w-full bg-orange-300 border-none flex md:flex-row flex-col gap-0 rounded-[4%]">
      <PhotoContainer imageUrls={content.imagesUrl} />
      <div className="flex flex-1 flex-col p-10 h-auto items-start justify-between gap-7">
        <div className="flex flex-col items-start gap-4">
          <div className="text-5xl">{content.title}</div>
          <div>{content.description}</div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-1">
            <div>Skills:</div>
            {content.skillsUsed.map((skill) => (
              <span>{skill}</span>
            ))}
          </div>
          <div className="flex w-full justify-between gap-4">
            <div className="flex gap-3">
              {content.createdBy.length != 0 && (
                <div>Made with the help of:</div>
              )}

              {content.createdBy.map((creator) => (
                <div>{creator}</div>
              ))}
            </div>
            <Button>Find Out More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
