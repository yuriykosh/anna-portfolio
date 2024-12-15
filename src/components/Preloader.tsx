"use client";

import { useState, useEffect } from "react";
import { easings } from "@/utils/animations";

import { motion } from "framer-motion";
import { GameIconsAmmonite } from "./icons/Ammonite";

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set a delay of 3 seconds (3000 ms)
    const timer = setTimeout(() => {
      setIsVisible(false); // Hide the component after the delay
    }, 3000);

    // Cleanup the timer if the component is unmounted before the delay
    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return isVisible ? (
    <motion.div
      className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-foreground z-50"
      initial={{ x: 0 }}
      animate={{
        x: "-100%",
        transition: {
          duration: 0.3,
          delay: 1,
          ease: easings.easeInOutQuint,
        },
      }}
    >
      <motion.div
        className="text-background w-16 xl:w-40 h-16 xl:h-40"
        initial={{ scale: 1, opacity: 1 }}
        animate={{
          scale: [1, 1.2, 0.6],
          opacity: [1, 1, 1, 0],
          transition: {
            duration: 0.5,
            delay: 0.5,
            ease: easings.easeInOutQuint,
          },
        }}
      >
        <GameIconsAmmonite />
      </motion.div>
    </motion.div>
  ) : null;
};
export default Preloader;
