import * as motion from "framer-motion/client";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center w-full h-full"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.3,
            ease: "easeOut",
          },
        }}
        className=""
      >
        About me
      </motion.h2>
    </section>
  );
};
export default AboutSection;
