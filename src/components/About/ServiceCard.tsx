import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { type ServiceLink } from "../../constants/index";

// Props for ServiceCard
interface ServiceCardProps {
  serviceLink: ServiceLink;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ serviceLink, index }) => {
  const { title, icon } = serviceLink; // destructure inside the function body

  return (
    <Tilt className="xs:w-[250px] w-full flex-1">
      <motion.div
        variants={fadeIn("right","spring", index * 0.5 ,0.75 )}
        className="w-full rounded-[20px] borderAnimation shadow-card"
      >
        <div
          className="black-gradient rounded-[18px] py-5 px-12 min-h-[280px] 
                     flex justify-evenly items-center flex-col 
                     hover:scale-105 transition-transform duration-300"
        >
          <img
            src={icon}
            alt={`${title}-icon`}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ServiceCard;
