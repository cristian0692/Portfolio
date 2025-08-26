const AgeBox = () => {
  return (
    <div className="md:h-[200px] h-[130px] my-[25px] md:ml-5 md:p-4 flex flex-col items-center justify-center gap-4 bg-custom-beige rounded-2xl shadow-[inset_0_0px_18px_rgba(0,0,0,0.25)]">
      <div className="flex gap-5">
        <h1 className="text-3xl">Age</h1>
        <h2 className="text-2xl">20</h2>
      </div>
      <div className="flex gap-5 text-center md:w-full w-[90%]">
        Born In: Moldova, (Chisinau)
      </div>
    </div>
  );
};

export default AgeBox;
