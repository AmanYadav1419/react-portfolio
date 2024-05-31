// this is for All  Tech Skills Icons

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const TechIcons = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <div className="rounded-2xl border-4 border-neutral-800">
        {/* react icon */}
        <RiReactjsLine className="text-7xl text-cyan-400" />
      </div>

      <div className="rounded-2xl border-4 border-neutral-800">
        {/* Next icon */}
        <TbBrandNextjs className="text-7xl text-neutral-300" />
      </div>

      <div className="rounded-2xl border-4 border-neutral-800">
        {/* Mongodb icon */}
        <SiMongodb className="text-7xl text-green-400" />
      </div>

      <div className="rounded-2xl border-4 border-neutral-800">
        {/* Redis icon */}
        <DiRedis className="text-7xl text-red-500" />
      </div>

      <div className="rounded-2xl border-4 border-neutral-800">
        {/* NodeJs icon */}
        <FaNodeJs className="text-7xl text-green-500" />
      </div>

      <div className="rounded-2xl border-4 border-neutral-800">
        {/* Postgresql icon */}
        <BiLogoPostgresql className="text-7xl text-cyan-500" />
      </div>
      
    </div>
  );
};

export default TechIcons;
