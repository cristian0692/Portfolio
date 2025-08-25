import { MY_HOBBIES } from "@/config/about-me-config";
import HobbyItem from "./HobbyItem";

const HobbiesBox = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl">Hobbies</h1>
      <div className="md:w-[100%] grid md:grid-cols-4 grid-cols-2 gap-3 md:h-[64px] items-center">
        {MY_HOBBIES.map((hobby, index) => (
          <HobbyItem key={index} hobby={hobby} />
        ))}
      </div>
    </div>
  );
};

export default HobbiesBox;
