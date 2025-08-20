import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import SectionWrapper from "../../hoc/SectionWrapper";
import { textVariant, fadeIn } from "../../utils/motion";
import { projectLink } from "../../constants";
import ProjectCard from "./ProjectCard";

const Project: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-white`}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("right", "spring", 0.1, 1)}
          className="mt-3 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my ability to
          solve complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projectLink.map((project, index) => (
            <ProjectCard
            key={index}
            project={project}
            index={index}
            />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Project, "projects");
