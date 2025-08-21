import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <>
      <div className="md:hidden">
        <MobileNav />
      </div>
      <div className="hidden md:block">
        <MainNav />
      </div>
    </>
  );
};

export default Header;
