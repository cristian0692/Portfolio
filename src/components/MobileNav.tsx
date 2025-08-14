import { Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";

import MobileLink from "./MobileLink";
import { Button } from "./ui/button";
import { useState } from "react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const closeSheet = () => {
    setOpen(false);
  };
  return (
    <div className="flex w-full flex-row p-10 justify-end">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Menu size={30} strokeWidth={3} color="#000000" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>

            <div className="mt-20 flex flex-col items-center justify-center gap-3">
              <MobileLink text="About me" sectionId="aboutMe" onClick={closeSheet} />
              <MobileLink text="My Works" sectionId="myWorks" onClick={closeSheet} />
              <MobileLink text="Skills" onClick={closeSheet} />
              <MobileLink text="Contact" onClick={closeSheet} />

            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
