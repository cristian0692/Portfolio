import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";

import MobileLink from "./MobileLink";

const MobileNav = () => {
  return (
    <div className="flex w-full flex-row p-10 justify-end">
      <Sheet>
        <SheetTrigger>
          <Menu size={30} strokeWidth={3} color="#000000" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <div className="mt-20 flex flex-col items-center justify-center gap-3">
              <MobileLink text="About me" />
              <MobileLink text="My Works" />
              <MobileLink text="Skills" />
              <MobileLink text="Contact" />
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
