import { Button } from "./ui/button";

type Props = {
  text: string;
  sectionId?: string;
  onClick: () => void;
};

const MobileLink = ({ text, sectionId, onClick }: Props) => {
  const moveToSection = () => {
    onClick();

    setTimeout(() => {
      const sectionElement = document.getElementById(sectionId || "");
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };
  return (
    <Button onClick={moveToSection} className="text-2xl hover:bg-orange-300 font-rounded" variant="ghost">
      {text}
    </Button>
  );
};

export default MobileLink;