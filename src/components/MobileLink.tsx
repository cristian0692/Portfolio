import { Button } from "./ui/button";

type Props = {
    text: string;
};

const MobileLink = ({text}: Props) => {
  return (
    <Button className="text-2xl hover:bg-orange-300 font-rounded" variant="ghost">
      {text}
    </Button>
  );
};

export default MobileLink;