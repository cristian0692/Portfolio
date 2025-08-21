import CustomArrow from "./CustomArrow";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import ProjectCard from "./ProjectCard";
import { MY_WORKS } from "@/config/my-works-config";
import ArrowsFooter from "./ArrowsFooter";

const ProjectsCoursel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true, // This is the key line to make it loop
      }}
      className="w-full flex items-center"
    >
      <div className="hidden lg:flex justify-center p-10">
        <CustomArrow direction="left" isScrollPrev size={25} />
      </div>
      <div className="mx-auto flex md:flex-col flex-row justify-between lg:w-[75%] w-full">
        <CarouselContent className="-mt-1">
          {MY_WORKS.map((cardContent, index) => (
            <CarouselItem key={index}>
              <div className="md:px-1 px-4">
                <ProjectCard content={cardContent} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center mx-auto">
          <ArrowsFooter />
        </div>
      </div>

      <div className="hidden lg:flex justify-center p-10">
        <CustomArrow direction="right" size={25} />
      </div>
    </Carousel>
  );
};

export default ProjectsCoursel;
