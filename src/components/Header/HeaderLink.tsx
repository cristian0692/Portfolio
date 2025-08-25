import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

type Props = {
  text: string;
  sectionId?: string;
};

const HeaderLink = ({ text, sectionId }: Props) => {
  const navigate = useNavigate();
  const moveToSection = () => {
    if (sectionId == "home") {
      navigate("/");
    }
    const sectionElement = document.getElementById(sectionId || "");

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Button
      onClick={moveToSection}
      className="text-2xl hover:bg-orange-300 hover:-translate-y-2 transition duration-200"
      variant="ghost"
    >
      {text}
    </Button>
  );
};

export default HeaderLink;
