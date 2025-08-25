import AgeBox from "./AgeBox";
import EducationBox from "./EducationBox";
import HobbiesBox from "./HobbiesBox";

const AboutMe = () => {
  return (
    <div
      id="aboutMe"
      className="w-full bg-orange-200 flex flex-col items-center gap-10 pb-10 md: pt-0 pt-30"
    >
      <h2 className="text-4xl">About Me</h2>
      <div className="flex justify-center items-center gap-10 lg:flex-row flex-col p-10">
        <div className="lg:w-[45%] w-[100%] bg-custom-beige border-5 border-custom-orange p-10 rounded-xl text-lg flex flex-col gap-3">
          <div>
            <span className="text-2xl">O</span>ver the past 5 years, I've
            discovered a deep passion for programming and{" "}
            <span className="text-custom-orange">completed</span> a professional{" "}
            <span className="text-custom-orange">
              Software Engineering course
            </span>{" "}
            to hone my skills.
          </div>
          <div>
            I enjoy working on websites and thrive on solving complex problems
            through code. I strive to be friendly, helpful and
            <span className="text-custom-orange"> hardworking</span> in
            everything I do, and I hope to continue growing as a programmer for
            years to come.
          </div>
        </div>
        <div className=" grid gap-10 items-center">
          <div className="md:h-[150px] flex justify-start gap-10 flex-row flex-col">
            <HobbiesBox />
            <AgeBox />
          </div>

          <EducationBox />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
