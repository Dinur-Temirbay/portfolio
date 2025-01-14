import {
  FaHtml5,
  FaGitAlt,
  FaCss3Alt,
  FaReact,
  FaSass,
  FaBootstrap,
} from "react-icons/fa6";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript, BiLogoTailwindCss } from "react-icons/bi";

export function Skills() {
  return (
    <div className="flex justify-center w-full bg-red-200" id="skills">
      <div className="py-20 w-4/5">
        <h2 className="text-4xl text-center">Skills</h2>
        <div className="border-2 mt-1 border-red-500 w-[7%] mx-auto rounded-sm "></div>
        <div className="flex justify-center mt-6">
          <FaHtml5 size={30} className="mx-4 text-red-500" />
          <FaCss3Alt size={30} className="mx-4 text-red-500" />
          <FaGitAlt size={30} className="mx-4 text-red-500" />
          <RiJavascriptFill size={30} className="mx-4 text-red-500" />
          <BiLogoTypescript size={30} className="mx-4 text-red-500" />
          <BiLogoTailwindCss size={30} className="mx-4 text-red-500" />
          <FaReact size={30} className="mx-4 text-red-500" />
          <FaSass size={30} className="mx-4 text-red-500" />
          <FaBootstrap size={30} className="mx-4 text-red-500" />
        </div>
      </div>
    </div>
  );
}
