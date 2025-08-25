import { Linkedin, Mail } from "lucide-react";
import SocialButton from "./SocialButton";

const Footer = () => {
  return (
    <div
      id="contact"
      className="bg-orange-300 p-10 flex flex-col items-center justify-center w-full gap-5"
    >
      <h1 className="text-3xl">Contact</h1>
      <div className="flex gap-5 w-[200px] justify-between">
        <SocialButton link="https://www.linkedin.com/in/christian-bolohan/">
          <Linkedin size={30} color="white" />
        </SocialButton>
        <SocialButton link="mailto:cristian.bolohan20@gmail.com">
          <Mail size={30} color="white" />
        </SocialButton>
      </div>
      <div>© 2025 Cristian Bolohan. All rights reserved.</div>
      <div className="text-sm text-black/59">
        Special thanks to my partner for making the photo and supporting me
        through the development
      </div>
    </div>
  );
};

export default Footer;
