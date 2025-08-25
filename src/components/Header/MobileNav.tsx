import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";

import MobileLink from "./MobileLink";
import { useState } from "react";
type Props = {
  buttons: string[];
  formatizeText: (text: string) => string;
};
const MobileNav = ({ buttons, formatizeText }: Props) => {
  const [open, setOpen] = useState(false);

  const closeSheet = () => {
    setOpen(false);
  };

  const isMainPage = () => {
    return !buttons.some((text) => text === "home");
  };
  return (
    <div
      className={`flex w-full flex-row justify-end ${
        isMainPage() ? "p-10" : "p-5"
      }`}
    >
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <Menu size={30} strokeWidth={3} color="#000000" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <div className="mt-20 flex flex-col items-center justify-center gap-3">
              {buttons.map((section) => (
                <MobileLink
                  text={formatizeText(section)}
                  sectionId={section}
                  onClick={closeSheet}
                />
              ))}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
