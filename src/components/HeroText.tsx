const HeroText = () => {
  return (
    <div className="flex md:w-[45%] items-center justify-center md:ml-auto md:mr-0 mx-auto gap-2">
      <div className="flex flex-col">
        <h1 className="lg:text-5xl md:text-4xl text-3xl">
          Hello, I am <span className="text-orange-500">Cristian</span>
        </h1>
        <h3 className="text-lg md:text-2xl sm:ml-5 ml-9">Software Engineer</h3>
      </div>
    </div>
  );
};

export default HeroText;
