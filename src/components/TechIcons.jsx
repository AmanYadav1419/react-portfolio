import { motion } from "framer-motion";

// Frontend
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
} from "react-icons/si";

// Backend
import { FaNodeJs, FaPython } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

// Database
import { SiMongodb, SiPostgresql } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaDatabase } from "react-icons/fa"; // For DynamoDB, Drizzle ORM

// Blockchain
import { SiSolidity, SiIpfs } from "react-icons/si";
import { FaEthereum } from "react-icons/fa"; // For Ethers.js, Hardhat

// Cloud & Others
import { SiAmazonaws } from "react-icons/si";
import { FaEnvelope, FaCogs } from "react-icons/fa"; // For EmailJs, Power Apps, Power Pages
import { FaChartBar } from "react-icons/fa"; // For Matplotlib, SciPy
import { FaTools } from "react-icons/fa"; // For GSAP, Framer-motion, OpenCV

// Video Editing
import { SiAdobeaftereffects, SiAdobepremierepro } from "react-icons/si";

// Animation for icons
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeatType: "reverse",
      repeat: Infinity,
    },
  },
});

// Helper for rendering icon grid
const IconGrid = ({ icons }) => (
  <div className="flex flex-wrap gap-4 justify-center mb-8">
    {icons.map(({ Icon, label, color, duration }, idx) => (
      <motion.div
        key={label}
        variants={iconVariants(duration || 2.5)}
        initial="initial"
        animate="animate"
        className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-3 min-w-[80px]"
      >
        <Icon className={`text-5xl sm:text-6xl ${color}`} />
        <span className="mt-2 text-xs sm:text-sm text-neutral-300 text-center">
          {label}
        </span>
      </motion.div>
    ))}
  </div>
);

const frontendIcons = [
  {
    Icon: RiReactjsLine,
    label: "ReactJS",
    color: "text-cyan-400",
    duration: 2.5,
  },
  {
    Icon: TbBrandNextjs,
    label: "NextJS",
    color: "text-neutral-300",
    duration: 2.7,
  },
  {
    Icon: SiTailwindcss,
    label: "TailwindCSS",
    color: "text-cyan-500",
    duration: 2.9,
  },
  {
    Icon: SiJavascript,
    label: "JavaScript",
    color: "text-yellow-400",
    duration: 2.2,
  },
  { Icon: SiHtml5, label: "HTML5", color: "text-orange-500", duration: 2.4 },
  { Icon: SiCss3, label: "CSS3", color: "text-blue-400", duration: 2.6 },
  // {
  //   Icon: SiBootstrap,
  //   label: "Bootstrap",
  //   color: "text-purple-400",
  //   duration: 2.8,
  // },
  // { Icon: FaTools, label: "GSAP", color: "text-green-400", duration: 2.3 },
  {
    Icon: FaTools,
    label: "Framer Motion",
    color: "text-pink-400",
    duration: 2.5,
  },
];

const backendIcons = [
  { Icon: FaNodeJs, label: "NodeJS", color: "text-green-500", duration: 2.5 },
  {
    Icon: SiExpress,
    label: "ExpressJS",
    color: "text-gray-400",
    duration: 2.7,
  },
  { Icon: FaPython, label: "Python", color: "text-yellow-300", duration: 2.9 },
  // { Icon: FaTools, label: "OpenCV", color: "text-blue-300", duration: 2.5 },
  // {
  //   Icon: FaCogs,
  //   label: "Power Apps",
  //   color: "text-indigo-400",
  //   duration: 2.7,
  // },
  // {
  //   Icon: FaCogs,
  //   label: "Power Pages",
  //   color: "text-indigo-300",
  //   duration: 2.9,
  // },
];

const databaseIcons = [
  { Icon: SiMongodb, label: "MongoDB", color: "text-green-400", duration: 2.5 },
  // { Icon: DiRedis, label: "Redis", color: "text-red-500", duration: 2.7 },
  {
    Icon: SiPostgresql,
    label: "PostgreSQL",
    color: "text-cyan-500",
    duration: 2.3,
  },
  // {
  //   Icon: FaDatabase,
  //   label: "DynamoDB",
  //   color: "text-blue-400",
  //   duration: 2.9,
  // },
  {
    Icon: FaDatabase,
    label: "Drizzle ORM",
    color: "text-blue-400",
    duration: 2.7,
  },
];

const blockchainIcons = [
  {
    Icon: SiSolidity,
    label: "Solidity",
    color: "text-gray-300",
    duration: 2.5,
  },
  // {
  //   Icon: SiMetamask,
  //   label: "Metamask",
  //   color: "text-orange-400",
  //   duration: 2.7,
  // },
  { Icon: SiIpfs, label: "IPFS", color: "text-blue-400", duration: 2.9 },
  {
    Icon: FaEthereum,
    label: "Ethers.js",
    color: "text-purple-400",
    duration: 2.5,
  },
  {
    Icon: FaEthereum,
    label: "Hardhat",
    color: "text-yellow-400",
    duration: 2.3,
  },
];

// const cloudIcons = [
//   { Icon: SiAmazonaws, label: "AWS", color: "text-yellow-400", duration: 2.5 },
//   // {
//   //   Icon: SiSharepoint,
//   //   label: "SharePoint",
//   //   color: "text-blue-400",
//   //   duration: 2.7,
//   // },
//   { Icon: FaEnvelope, label: "EmailJs", color: "text-red-400", duration: 2.7 },
//   {
//     Icon: FaChartBar,
//     label: "Matplotlib",
//     color: "text-pink-400",
//     duration: 2.5,
//   },
//   { Icon: FaChartBar, label: "SciPy", color: "text-yellow-400", duration: 2.5 },
// ];

// const videoIcons = [
//   {
//     Icon: SiAdobeaftereffects,
//     label: "After Effects",
//     color: "text-purple-400",
//     duration: 2.5,
//   },
//   {
//     Icon: SiAdobepremierepro,
//     label: "Premiere Pro",
//     color: "text-blue-400",
//     duration: 2.7,
//   },
// ];

const TechIcons = () => (
  <div className="w-full max-w-5xl mx-auto py-10">
    {/* <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center text-cyan-400">
      Tech Stack & Tools
    </h3> */}
    <section>
      <h4 className="text-lg sm:text-xl font-semibold mb-2 text-neutral-200">
        Frontend
      </h4>
      <IconGrid icons={frontendIcons} />
    </section>
    <section>
      <h4 className="text-lg sm:text-xl font-semibold mb-2 text-neutral-200">
        Backend
      </h4>
      <IconGrid icons={backendIcons} />
    </section>
    <section>
      <h4 className="text-lg sm:text-xl font-semibold mb-2 text-neutral-200">
        Database
      </h4>
      <IconGrid icons={databaseIcons} />
    </section>
    <section>
      <h4 className="text-lg sm:text-xl font-semibold mb-2 text-neutral-200">
        Blockchain
      </h4>
      <IconGrid icons={blockchainIcons} />
    </section>

    {/* <section>
      <h4 className="text-lg sm:text-xl font-semibold mb-2 text-neutral-200">
        Cloud & Others
      </h4>
      <IconGrid icons={cloudIcons} />
    </section> */}

    {/* <section>
      <h4 className="text-lg sm:text-xl font-semibold mb-2 text-neutral-200">
        Video Editing
      </h4>
      <IconGrid icons={videoIcons} />
    </section> */}
  </div>
);

export default TechIcons;
