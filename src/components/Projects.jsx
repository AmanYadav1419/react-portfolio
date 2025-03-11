import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-2xl sm:text-3xl md:text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => {
          return (
            <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              >
                <img
                  src={project.image}
                  width={150}
                  height={150}
                  alt={project.title}
                  className="mb-6 rounded"
                />
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl sm:w-1/2 md:w-2/3 lg:w-3/4 flex-wrap"
              >
                <h6 className="mb-2 font-semibold text-lg sm:text-xl md:text-2xl">{project.title}</h6>
                <p className="mb-4 text-neutral-400 text-sm sm:text-base md:text-lg">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.technologies.map((tech, index) => {
                    return (
                      <span
                        className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-xs sm:text-sm md:text-base font-medium text-cyan-900"
                        key={index}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </motion.div>

              <motion.div
                className="mt-3 mb-3 w-full"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
              >
                {project.LiveDemo && (
                  <a
                    href={project.LiveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-xs sm:text-sm md:text-base font-medium text-cyan-900"
                  >
                    Live Demo
                  </a>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
