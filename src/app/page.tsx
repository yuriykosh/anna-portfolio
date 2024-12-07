import * as motion from "framer-motion/client";
import { revealInViewMotion } from "@/utils/animations";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ShowReel from "@/components/ShowReel";

export default function Home() {
  return (
    <main className="w-full h-full">
      <ul className="flex flex-col w-full h-[100svh] snap-y snap-mandatory overflow-y-auto">
        <motion.li
          variants={revealInViewMotion(0)}
          initial="hidden"
          whileInView="visible"
          className="min-h-[100svh] pt-[236px] sm:pt-[200px] snap-start snap-always"
        >
          <ShowReel />
        </motion.li>

        <li className="min-h-[calc(100svh-236px)] sm:min-h-[calc(100vh-200px)] snap-start scroll-mt-[236px] sm:scroll-mt-[200px] snap-always">
          <AboutSection />
        </li>

        <li className="min-h-[calc(100svh-236px)] sm:min-h-[calc(100vh-200px)] snap-start scroll-mt-[236px] sm:scroll-mt-[200px] snap-always">
          <ContactSection />
        </li>
      </ul>
    </main>
  );
}
