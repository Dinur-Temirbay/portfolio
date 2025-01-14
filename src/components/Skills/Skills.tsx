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
        <div className="flex justify-center mt-8">
          <FaHtml5
            size={30}
            className="mx-3 text-red-500 hover:scale-105 transition ease-in-out"
          />
          <FaCss3Alt
            size={30}
            className="mx-3 text-red-500 hover:scale-105 transition ease-in-out"
          />
          <FaGitAlt
            size={30}
            className="mx-3 text-red-500 hover:scale-105 transition ease-in-out"
          />
          <RiJavascriptFill
            size={30}
            className="mx-3 text-red-500 hover:scale-105 transition ease-in-out"
          />
          <BiLogoTypescript
            size={30}
            className="mx-3 text-red-500 hover:scale-105 transition ease-in-out"
          />
          <BiLogoTailwindCss
            size={30}
            className="mx-3 text-red-500 hover:scale-105 transition ease-in-out"
          />
          <FaReact
            size={30}
            className="mx-3 text-red-500 hover:scale-105 transition ease-in-out"
          />
          <FaSass
            size={30}
            className="mx-3 text-red-500 hover:scale-105 transition ease-in-out"
          />
          <FaBootstrap
            size={30}
            className="mx-3 text-red-500 hover:scale-105 transition ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}
