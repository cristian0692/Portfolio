import { Dot } from "lucide-react";

type Props = {
  features: string[];
};

const KeyFeatures = ({ features }: Props) => {
  return (
    <div id="features" className="flex-5 flex flex-col md:gap-5">
      <h1 className="md:text-4xl text-2xl md:pb-0 pb-5">Key Features:</h1>
      <div>
        {features.map((feature) => (
          <div className="flex md:text-xl text-md">
            <Dot size={30} /> {feature}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
