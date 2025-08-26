import ProjectsCarousel from "./ProjectsCarousel";

const MyWorks = () => {
  return (
    <div className="flex flex-col items-center gap-20 bg-orange-100 rounded-3xl p-10 py-15 mb-10 overflow-hidden">
      <h1 className="text-4xl z-3">My Works</h1>
      <ProjectsCarousel />
    </div>
  );
};

export default MyWorks;
