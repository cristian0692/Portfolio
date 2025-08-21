const AboutMe = () => {
  return (
    <div
      id="aboutMe"
      className="w-full h-[600px] bg-orange-200 flex flex-col items-center justify-center gap-10 p-20"
    >
      <h2 className="text-4xl">About Me</h2>
      <div className="flex">
        <div className="md:w-[40%] w-[100%] bg-orange-300 p-10 rounded-xl shadow-2xl">
          Over the past 5 years, I've discovered a deep passion for programming
          and completed a professional IT course to hone my skills. I enjoy
          working on websites and thrive on solving complex problems through
          code. I strive to be friendly, helpful, and hardworking in everything
          I do, and I hope to continue growing as a programmer for years to
          come.
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
