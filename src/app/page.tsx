import * as motion from "framer-motion/client";
import { revealMotion } from "@/utils/animations";

import AboutSection from "@/components/index/AboutSection";
import ContactSection from "@/components/index/ContactSection";
import ShowReel from "@/components/assets/ShowReel";
import Footer from "@/components/assets/Footer";
import Preloader from "@/components/assets/Preloader";

export default function Home() {
  return (
    <>
      <Preloader />
      <motion.main className="w-full h-full" variants={revealMotion(1.5)}>
        <ul className="flex flex-col w-full min-h-[100svh] h-[100svh] max-h-[100svh] snap-y snap-mandatory overflow-y-auto">
          <li className="min-h-[100svh] pt-[11rem] sm:pt-52 snap-start snap-always">
            <ShowReel />
          </li>

          <li className="min-h-[calc(100svh-11rem)] sm:min-h-[calc(100vh-208px)] snap-start scroll-mt-[11rem] sm:scroll-mt-[208px] snap-always">
            <AboutSection />
          </li>

          <li className="relative min-h-[calc(100svh-11rem)] sm:min-h-[calc(100vh-208px)] snap-start scroll-mt-[11rem] sm:scroll-mt-[208px] snap-always overflow-hidden">
            <ContactSection />
            <Footer />
          </li>
        </ul>
      </motion.main>
    </>
  );
}
