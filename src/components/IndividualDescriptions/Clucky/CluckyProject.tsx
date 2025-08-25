import { CLUCKY } from "@/config/clucky-config";
import LinkSection from "./LinkSection";
import KeyFeatures from "./KeyFeatures";
import SkillsUsed from "./SkillsUsed";

const CluckyProject = () => {
  return (
    <div className="px-20 flex flex-col gap-5">
      <div className="w-full flex gap-10 justify-center">
        <div className="flex-6">
          <img src={`/images/${CLUCKY.imageURLs[0]}`} alt="" />
        </div>
        <div className="flex-4 flex flex-col gap-10 justify-end">
          <h1 className="text-6xl w-full text-center">{CLUCKY.title}</h1>
          <p className="text-lg">
            A simulation of a food ordering app build with MERN stack. It also
            utilizes Stripe for simulating the payment process (you can use a
            stripe filler card to test) and Auth0 for secure Authentication. The
            login info is safely stored on their db. The information about the
            restaurants and orders is stored in the Mongodb database.
          </p>
        </div>
      </div>
      <div className=" flex-1 flex justify-between">
        <KeyFeatures features={CLUCKY.keyFeatures} />
        <div className="flex flex-col flex-3 gap-5">
          <LinkSection links={CLUCKY.links} />
          <SkillsUsed APIs={CLUCKY.APIsUsed} skills={CLUCKY.skillsUsed} />
        </div>
      </div>
    </div>
  );
};

export default CluckyProject;
