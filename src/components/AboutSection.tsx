// import * as motion from "framer-motion/client";
// import { revealInViewMotion } from "@/utils/animations";

import Folder from "./Folder";

const AboutSection = () => {
  return (
    <section id="about" className="grid grid-cols-2 w-full h-full gap-6 p-6">
      <div className="flex flex-col gap-8">
        <h2 className="sr-only">About me</h2>
        <p className="text-2xl font-mono font-bold">
          I&#39;m a passionate Motion and 3D Designer with a knack for creating
          visually stunning and impactful designs. With a deep love for
          storytelling and innovation, I specialize in crafting dynamic motion
          graphics, immersive 3D visuals, and designs that captivate audiences.
        </p>
        <p className="text-2xl font-mono font-bold">
          Over the years, I&#39;ve honed my skills in blending creativity with
          technical precision to bring ideas to life. Whether it&#39;s through
          motion design, animation, or 3D modeling, my goal is to deliver
          visuals that not only look great but also resonate with purpose and
          meaning.
        </p>
        <div className="w-full h-full bg-amber-100 border border-foreground"></div>
      </div>

      <div className="flex flex-col justify-between">
        <ul className="grid grid-cols-2 gap-4 px-6">
          <li className="flex items-center justify-center">
            <Folder />
          </li>
          <li className="flex items-center justify-center">
            <Folder />
          </li>
          <li className="flex items-center justify-center">
            <Folder />
          </li>
        </ul>
        <div className="flex flex-col gap-6">
          <p className="text-xl font-mono font-bold">
            When I&#39;m not designing, you&#39;ll find me exploring the latest
            industry trends, experimenting with new tools, or drawing
            inspiration from the world around me to fuel my creativity.
          </p>
          <p className="text-xl font-mono font-bold">
            Let&#39;s create something extraordinary together!
          </p>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
