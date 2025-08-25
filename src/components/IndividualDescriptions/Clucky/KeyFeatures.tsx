import { Dot } from "lucide-react";

type Props = {
  features: string[];
};

const KeyFeatures = ({ features }: Props) => {
  return (
    <div id="features" className="flex-5 flex flex-col gap-5">
      <h1 className="text-4xl">Key Features:</h1>
      <div>
        {features.map((feature) => (
          <div className="flex text-xl">
            <Dot size={30} /> {feature}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
