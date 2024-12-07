import * as motion from "framer-motion/client";
import { revealInViewMotion } from "@/utils/animations";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ShowReel from "@/components/ShowReel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full h-full">
      <ul className="flex flex-col w-full h-[100svh] snap-y snap-mandatory overflow-y-auto">
        <motion.li
          variants={revealInViewMotion(0)}
          initial="hidden"
          whileInView="visible"
          className="min-h-[100svh] pt-[246px] sm:pt-52 snap-start snap-always"
        >
          <ShowReel />
        </motion.li>

        <li className="min-h-[calc(100svh-246px)] sm:min-h-[calc(100vh-208px)] snap-start scroll-mt-[246px] sm:scroll-mt-[208px] snap-always">
          <AboutSection />
        </li>

        <li className="relative min-h-[calc(100svh-246px)] sm:min-h-[calc(100vh-208px)] snap-start scroll-mt-[246px] sm:scroll-mt-[208px] snap-always">
          <ContactSection />
          <Footer />
        </li>
      </ul>
    </main>
  );
}
