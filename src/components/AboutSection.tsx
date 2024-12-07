import * as motion from "framer-motion/client";
import { revealInViewMotion } from "@/utils/animations";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center w-full h-full"
    >
      <motion.h2
        variants={revealInViewMotion(0)}
        initial="hidden"
        whileInView="visible"
        className=""
      >
        About me
      </motion.h2>
    </section>
  );
};
export default AboutSection;
