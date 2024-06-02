// this is for All  Tech Skills Icons

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { animate, motion } from "framer-motion";

// function to implement animation
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const TechIcons = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1.3 }}
      className="flex flex-wrap items-center justify-center gap-4"
    >
      <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800"
      >
        {/* react icon */}
        <RiReactjsLine className="text-7xl text-cyan-400" />
      </motion.div>

      <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800"
      >
        {/* Next icon */}
        <TbBrandNextjs className="text-7xl text-neutral-300" />
      </motion.div>

      <motion.div
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800"
      >
        {/* Mongodb icon */}
        <SiMongodb className="text-7xl text-green-400" />
      </motion.div>

      <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800"
      >
        {/* Redis icon */}
        <DiRedis className="text-7xl text-red-500" />
      </motion.div>

      <motion.div
        variants={iconVariants(4.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800"
      >
        {/* NodeJs icon */}
        <FaNodeJs className="text-7xl text-green-500" />
      </motion.div>

      <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800"
      >
        {/* Postgresql icon */}
        <BiLogoPostgresql className="text-7xl text-cyan-500" />
      </motion.div>
    </motion.div>
  );
};

export default TechIcons;
