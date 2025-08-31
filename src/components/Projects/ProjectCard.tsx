import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { github } from "../../assets/index";
import { fadeIn } from "../../utils/motion";
import { type ProjectLink } from "../../constants/index";

interface ProjectCardProps {
  project: ProjectLink;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div 
    className="cursor-pointer"
    onClick={() => window.open(project.demo_link,"_blank")}
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className="bg-[#151030] p-5 rounded-2xl sm:w-[340px] w-full flex flex-col" 
      >
        {/* Project Image */}
        <div className="relative w-full h-[180px]">
          <img
            src={project.image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Description + GitHub Icon */}
        <div className="mt-5 flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-white font-bold text-[24px]">{project.name}</h3>
            <p className="mt-2 text-white text-[14px]">
              {project.description.split(" ").slice(0, 30).join(" ")}
              {project.description.split(" ").length > 30 ? "..." : ""}
            </p>
          </div>

          <div
            onClick={() => window.open(project.source_code_link, "_blank")}
            className="w-10 h-10 ml-4 rounded-full flex justify-center items-center cursor-pointer bg-black hover:bg-gray-800 transition-all duration-300 shadow-lg"
          >
            <img
              src={github}
              alt="source code"
              className="w-6 h-6 object-contain"
            />
          </div>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <p
              key={`${project.name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
