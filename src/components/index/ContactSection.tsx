import * as motion from "framer-motion/client";
import { easings } from "@/utils/animations";

// import Link from "next/link";
import ContactList from "./ContactList";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-6 px-2 gap-6 sm:p-6 w-full h-full bg-background"
    >
      <motion.div className="sm:col-start-2 flex flex-col gap-4 justify-center w-fit">
        <div className="w-fit">
          <motion.h2
            className="mb-1 text-xl font-bold uppercase z-0"
            initial={{ y: "100%" }}
            whileInView={{
              y: 0,
              transition: {
                duration: 0.3,
                delay: 0.15,
                ease: easings.easeInOutQuint,
              },
            }}
          >
            Feel free to contact me
          </motion.h2>
          <motion.div
            className="relative w-full aspect-square border border-foreground z-10"
            initial={{ y: "-2rem" }}
            whileInView={{
              y: 0,
              transition: {
                duration: 0.3,
                delay: 0.15,
                ease: easings.easeInOutQuint,
              },
            }}
          >
            <video
              className="absolute object-cover object-center w-full h-full bg-white/10"
              autoPlay
              muted
              playsInline
              loop
            >
              <source src="/videos/spinnin-dog.mp4" type="video/mp4" />
              Anna Seheda showreel.
            </video>
          </motion.div>
        </div>

        <ContactList />
      </motion.div>
    </section>
  );
};
export default ContactSection;
