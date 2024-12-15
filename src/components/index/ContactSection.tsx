import * as motion from "framer-motion/client";
import { revealInViewMotion } from "@/utils/animations";

import Link from "next/link";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center py-6 px-2 gap-6 sm:grid sm:grid-cols-2 sm:p-6 w-full h-full bg-background"
    >
      <div className="flex items-center justify-end ">
        <div className="relative w-48 h-48 sm:w-52 sm:h-52 ">
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
        </div>
      </div>
      <motion.div
        variants={revealInViewMotion(0)}
        initial="hidden"
        whileInView="visible"
        className="sm:col-start-2 flex flex-col gap-4 justify-center "
      >
        <div className="w-fit">
          <h2 className="mb-1 font-bold uppercase">Feel free to contact me</h2>
          <div className="w-full h-px bg-[linear-gradient(to_right,_#394759_50%,_transparent_50%)] bg-[length:16px_2px,_100%_2px]" />
        </div>
        <ul className="text-xs text-foreground *:mb-2">
          <li>
            Email:{" "}
            <Link
              href={"/"}
              className="text-sm text-gray-500 underline underline-offset-2"
            >
              anyaa.segeda@gmail.com
            </Link>
          </li>
          <li>
            Telegram:{" "}
            <Link
              href={"/"}
              className="text-sm text-gray-500 underline underline-offset-2"
            >
              @anna_sehedaa
            </Link>
          </li>
          <li>
            Instagram:{" "}
            <ul className="inline-flex flex-col gap-0.5">
              <li>
                <Link
                  href={"/"}
                  className="text-sm text-gray-500 underline underline-offset-2"
                >
                  @seheda_anya
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-sm text-gray-500 underline underline-offset-2"
                >
                  @sehedanna
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </motion.div>
    </section>
  );
};
export default ContactSection;
