import * as motion from "framer-motion/client";

import Link from "next/link";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="flex items-center justify-center sm:grid sm:grid-cols-2 w-full h-full bg-background"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 0.3,
            ease: "easeOut",
          },
        }}
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
