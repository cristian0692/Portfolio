import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

type Props = {
  text: string;
  sectionId?: string;
  onClick: () => void;
};

const MobileLink = ({ text, sectionId, onClick }: Props) => {
  const navigate = useNavigate();

  const moveToSection = () => {
    if (sectionId == "home") {
      navigate("/");
    }
    onClick();

    setTimeout(() => {
      const sectionElement = document.getElementById(sectionId || "");
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 500);
  };
  return (
    <Button
      onClick={moveToSection}
      className="text-2xl hover:bg-orange-300 font-rounded"
      variant="ghost"
    >
      {text}
    </Button>
  );
};

export default MobileLink;
