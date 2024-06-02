import TechIcons from "./TechIcons";
import { motion } from "framer-motion";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2
        whileInView={{opacity:1, y:0}} 
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <div>
            {/* all icons */}
            <TechIcons />
        </div>
    </div>
  )
}

export default Technologies