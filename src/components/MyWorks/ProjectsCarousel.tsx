import CustomArrow from "./CustomArrow";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import ProjectCard from "./ProjectCard/ProjectCard";
import { MY_WORKS } from "@/config/my-works-config";
import ArrowsFooter from "./ArrowsFooter";

const ProjectsCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true, // This is the key line to make it loop
      }}
      className="w-full flex items-center z-3"
    >
      <div className="hidden lg:flex justify-center mx-auto">
        <CustomArrow direction="left" isScrollPrev size={25} />
      </div>
      <div
        id="myWorks"
        className="mx-auto flex md:flex-col flex-row justify-between lg:w-[85%] w-full"
      >
        <CarouselContent className="-mt-1 flex items-center">
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

      <div className="hidden lg:flex justify-center mx-auto">
        <CustomArrow direction="right" size={25} />
      </div>
    </Carousel>
  );
};

export default ProjectsCarousel;
