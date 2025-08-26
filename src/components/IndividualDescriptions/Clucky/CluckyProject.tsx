import { CLUCKY } from "@/config/clucky-config";
import LinkSection from "./LinkSection";
import KeyFeatures from "./KeyFeatures";
import SkillsUsed from "./SkillsUsed";
import WhatILearned from "./WhatILearned";
import PagesExplanation from "./PagesExplanation";
import { useImageStore } from "@/lib/imageStore";

const CluckyProject = () => {
  const setImages = useImageStore((state) => state.setImages);
  return (
    <div className="md:px-20 px-5 flex flex-col gap-15">
      <div className="w-full flex lg:flex-row flex-col gap-10 justify-center">
        <div className="flex-6 relative">
          <div
            onClick={() => {
              setImages(CLUCKY.imageURLs, 0);
            }}
            className="absolute left-0 top-0 w-full h-full hover:bg-black/30 hover:text-white text-transparent flex items-center justify-center text-2xl"
          >
            Click
          </div>
          <img
            className="h-full object-cover"
            src={`/images/${CLUCKY.imageURLs[0]}`}
          />
        </div>
        <div className="flex-4 flex flex-col gap-10 justify-end">
          <h1 className="md:text-6xl text-4xl w-full text-center p-5 border-5 border-custom-orange bg-custom-beige rounded-xl">
            {CLUCKY.title}
          </h1>
          <p className="md:text-lg text-md">
            A simulation of a food ordering app build with MERN stack. It also
            utilizes Stripe for simulating the payment process (you can use a
            stripe filler card to test) and Auth0 for secure Authentication. The
            login info is safely stored on their db. The information about the
            restaurants and orders is stored in the Mongodb database.
          </p>
        </div>
      </div>
      <div className=" flex-1 flex justify-between lg:flex-row flex-col gap-10">
        <KeyFeatures features={CLUCKY.keyFeatures} />
        <div className="flex flex-col flex-3 gap-5">
          <LinkSection links={CLUCKY.links} />
          <SkillsUsed APIs={CLUCKY.APIsUsed} skills={CLUCKY.skillsUsed} />
        </div>
      </div>
      <WhatILearned />
      <PagesExplanation pages={CLUCKY.pageDescriptions} />
    </div>
  );
};

export default CluckyProject;
