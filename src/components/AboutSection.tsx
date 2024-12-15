// import * as motion from "framer-motion/client";
// import { revealInViewMotion } from "@/utils/animations";

import { portfolioList } from "@/utils/data";
import Folder from "./Folder";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col sm:grid sm:grid-cols-2 w-full h-full gap-4 sm:gap-6 px-2 py-6 sm:p-6"
    >
      <div className="flex flex-col max-sm:[@media(min-height:675px)]:grow gap-4 md:gap-6 xl:gap-8 sm:pt-4 text-xs sm:text-base xl:text-xl 2xl:text-2xl font-mono font-black sm:font-bold">
        <h2 className="sr-only">About me</h2>
        <p>
          I&#39;m a passionate Motion and 3D Designer with a knack for creating
          visually stunning and impactful designs. With a deep love for
          storytelling and innovation, I specialize in crafting dynamic motion
          graphics, immersive 3D visuals, and designs that captivate audiences.
        </p>
        <p>
          Over the years, I&#39;ve honed my skills in blending creativity with
          technical precision to bring ideas to life. Whether it&#39;s through
          motion design, animation, or 3D modeling, my goal is to deliver
          visuals that not only look great but also resonate with purpose and
          meaning.
        </p>
        <div className="[@media(max-height:675px)]:hidden w-full h-full bg-amber-100 border border-foreground"></div>
      </div>

      <div className="flex flex-col h-fit gap-6 justify-between sm:h-full md:-translate-y-6 lg:-translate-y-6">
        <ul className="flex gap-4 px-2 sm:px-6 sm:flex-col md:gap-0 md:mx-auto lg:mx-0 lg:gap-4 max-lg:justify-around lg:grid lg:grid-cols-2 lg:max-xl:[@media(min-height:1080px)]:grid-cols-1">
          {portfolioList.map((item, i) => (
            <li
              key={i}
              className=" sm:w-fit sm:h-fit flex sm:items-center sm:justify-center lg:max-xl:[@media(min-height:1080px)]:mx-auto overflow-visible"
            >
              <Folder tags={item.tags} name={item.category} url={item.page} />
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-6 text-xs sm:text-sm lg:max-xl:[@media(min-height:880px)]:text-base xl:text-lg 2xl:text-xl font-mono font-bold">
          <p className="[@media(max-height:675px)]:hidden">
            When I&#39;m not designing, you&#39;ll find me exploring the latest
            industry trends, experimenting with new tools, or drawing
            inspiration from the world around me to fuel my creativity.
          </p>
          <p>Let&#39;s create something extraordinary together!</p>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
