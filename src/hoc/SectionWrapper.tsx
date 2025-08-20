import { type ComponentType } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// HOC type: Takes a component and wraps it with motion.section
const SectionWrapper = <P extends object>(
  Component: ComponentType<P>,
  idName: string
) => {
  const HOC = (props: P) => {
    return (
      <motion.section
        variants={staggerContainer(0.1, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        <Component {...props} />
      </motion.section>
    );
  };
  return HOC;
};

export default SectionWrapper;
