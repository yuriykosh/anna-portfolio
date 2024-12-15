import * as motion from "framer-motion/client";
import { easings } from "@/utils/animations";

import { contactData } from "@/utils/data";
import Link from "next/link";

interface ContactItem {
  type: string;
  contact: string[];
  link: string[];
}

const ContactList = () => {
  return (
    <motion.ul
      className="flex flex-col gap-1.5"
      initial={{ x: "-1%", opacity: 0 }}
      whileInView={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.3,
          delay: 0.25,
          ease: easings.easeInOutQuint,
        },
      }}
    >
      {contactData.map(({ type, contact, link }: ContactItem) => (
        <li
          key={type}
          className="inline-flex items-baseline gap-1.5 text-xs text-foreground"
        >
          {type}:{" "}
          {contact.length > 1 ? (
            <ul className="inline-flex flex-col gap-1">
              {contact.map((displayName, i) => (
                <li key={i}>
                  <Link
                    href={link[i] || "/"}
                    className="text-sm font-mono font-light text-gray-500 underline underline-offset-[2.5px] transition-all 
                    hover:ml-2 hover:text-foreground hover:decoration-4 focus:ml-2 focus:text-foreground focus:decoration-4"
                  >
                    {displayName}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <Link
              href={link[0] || "/"}
              className="text-sm font-mono font-light text-gray-500 underline underline-offset-[2.5px] transition-all 
              hover:ml-2 hover:text-foreground hover:decoration-4 focus:ml-2 focus:text-foreground focus:decoration-4"
            >
              {contact[0]}
            </Link>
          )}
        </li>
      ))}
    </motion.ul>
  );
};
export default ContactList;
