import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

type Props = {
  buttons: string[];
};

const Header = ({ buttons }: Props) => {
  const transformCamelToNormalText = (text: string) => {
    var newString = "";
    for (let i = 0; i < text.length; i++) {
      const char: string = text[i];
      if (i == 0) {
        newString += char.toUpperCase();
        continue;
      }
      if (char == char.toUpperCase()) {
        newString += " ";
        newString += char.toLowerCase();
      } else {
        newString += char;
      }
    }

    return newString;
  };
  return (
    <>
      <div className="md:hidden">
        <MobileNav
          buttons={buttons}
          formatizeText={transformCamelToNormalText}
        />
      </div>
      <div className="hidden md:block">
        <MainNav buttons={buttons} formatizeText={transformCamelToNormalText} />
      </div>
    </>
  );
};

export default Header;
