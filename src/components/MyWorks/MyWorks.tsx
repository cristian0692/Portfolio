import ProjectsCarousel from "./ProjectsCarousel";

const MyWorks = () => {
  return (
    <div className="flex flex-col items-center gap-20 bg-orange-100 rounded-3xl md:p-10 p-0 py-15 md:mb-10 overflow-hidden">
      <h1 className="text-4xl z-3">My Works</h1>
      <ProjectsCarousel />
    </div>
  );
};

export default MyWorks;
