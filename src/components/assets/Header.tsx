import * as motion from "framer-motion/client";

import IDCard from "./IDCard";
import Navigation from "./Navigation";
import { easings } from "@/utils/animations";

const Header = () => {
  return (
    <motion.header
      className="fixed top-0 left-0 flex flex-row-reverse justify-between sm:flex-row w-full h-44 sm:h-52 p-2 pb-6 sm:py-4 sm:pr-2 sm:pl-6
                backdrop-blur sm:bg-white/20 z-50 pointer-events-none
                "
      initial={{ y: "-100%" }}
      animate={{
        y: 0,
        transition: {
          duration: 0.3,
          delay: 1.1,
          ease: easings.easeInOutQuint,
        },
      }}
    >
      <IDCard />
      <Navigation />
    </motion.header>
  );
};
export default Header;
