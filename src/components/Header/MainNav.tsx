import HeaderLink from "./HeaderLink";
type Props = {
  buttons: string[];
  formatizeText: (text: string) => string;
};
const MainNav = ({ buttons, formatizeText }: Props) => {
  const isMainPage = () => {
    return !buttons.some((text) => text === "home");
  };
  return (
    <div className="flex justify-center">
      <div
        className={`container flex flex-1 justify-start max-h-24 ${
          isMainPage() ? "m-10" : "m-0"
        }`}
      >
        <div
          className={`flex justify-between items-center h-24 ${
            buttons.length == 3 ? "ml-[20%] w-[30%]" : "ml-[10%] w-[40%]"
          }`}
        >
          {buttons.map((section) => (
            <HeaderLink text={formatizeText(section)} sectionId={section} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainNav;
