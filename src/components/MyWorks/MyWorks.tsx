import ProjectsCoursel from "./ProjectsCarousel";

const MyWorks = () => {
    return (
        <div id="myWorks" className="flex flex-col w-full items-center gap-20">
            <h1 className="text-4xl">My Works</h1>
            <ProjectsCoursel />
        </div>
    );
};

export default MyWorks;
