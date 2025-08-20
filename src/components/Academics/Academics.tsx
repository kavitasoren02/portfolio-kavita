import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component"; // named import
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from '../../styles';
import { academicsLink } from "../../constants";
import SectionWrapper from "../../hoc/SectionWrapper";
import { textVariant } from "../../utils/motion";
import AcademicsCard from "./AcademicsCard";

const Academics: React.FC = () => {
  return (
    <>
      {/* heading */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center text-white`}>
          Academic Journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education
        </h2>
      </motion.div>

      {/* timeline */}
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {academicsLink.map((academics) => (
            <AcademicsCard key={academics.title} academics={academics} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Academics, 'academics');
