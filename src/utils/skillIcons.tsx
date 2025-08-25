import type { JSX } from "react";
import {
  SiAuth0,
  SiExpress,
  SiMongodb,
  SiReact,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaNodeJs, FaQuestion } from "react-icons/fa";
import SkillIcon from "./SkillIcon";
const size = 35;
const skillIconMap: Record<string, JSX.Element> = {
  React: <SiReact size={size} className="text-sky-500" />,
  TypeScript: <SiTypescript size={size} className="text-blue-400" />,
  MongoDB: <SiMongodb size={size} className="text-green-500" />,
  Tailwind: <SiTailwindcss className="text-blue-300" />,
  NodeJS: <FaNodeJs size={size} />,
  Auth0: <SiAuth0 size={size} />,
  Stripe: <SiStripe size={size} />,
  Express: <SiExpress size={size} />,
};

export const getSkillIcon = (skill: string): JSX.Element => {
  const icon = skillIconMap[skill];
  return icon ? (
    <SkillIcon icon={icon} name={skill} />
  ) : (
    <SkillIcon icon={<FaQuestion size={40} />} name="notFound" />
  );
};
