import HeaderLink from "./HeaderLink";

const MainNav = () => {
  return (
    <div className="flex justify-center">
      <div className="container flex flex-1 justify-start m-10 max-h-24">
        <div className="ml-[10%] flex w-[40%] justify-between items-center h-24">
          <HeaderLink text="About me" sectionId="aboutMe" />
          <HeaderLink text="My Works" sectionId="myWorks"/>
          <HeaderLink text="Skills"/>
          <HeaderLink text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default MainNav;
