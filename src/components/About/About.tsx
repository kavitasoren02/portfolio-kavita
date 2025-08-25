import React from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { serviceLinks } from "../../constants/index";
import SectionWrapper from "../../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../../utils/motion";
import ServiceCard from "./ServiceCard"; 
import IconsCard from './Icons';

const About: React.FC = () => {
  return (
    <div className="bg-black w-full py-10 px-6">
      {/* Heading */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-white`}>Introduction</p>
        <h2 className= {styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={fadeIn("up", "spring", 0.1, 1)}
        className="mt-4 text-[#aaa6c3] text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js . 
        I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      {/* Icons Card*/}
      <motion.div 
      variants={fadeIn("left","spring", 0.1, 1)}
      className="mt-10 ">
        <IconsCard/>
      </motion.div>
      {/* Service Cards */}
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {serviceLinks.map((service, index) => (
          <ServiceCard key={service.title} serviceLink={service} index={index}/>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
