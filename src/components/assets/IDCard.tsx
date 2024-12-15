import { easings } from "@/utils/animations";
import * as motion from "framer-motion/client";
import Image from "next/image";

const IDCard = () => {
  return (
    <motion.div
      className="relative w-[236px] sm:w-72 h-full px-4 sm:px-6 py-8 rounded-lg bg-amber-50/85 text-foreground shadow-lg shadow-neutral-800/5 z-0"
      initial={{ rotate: -1 }}
      animate={{
        rotate: 3,
        transition: {
          duration: 0.2,
          delay: 1.3,
          ease: easings.easeInOutQuint,
        },
      }}
    >
      <Image
        src="/pictures/pin-back.png"
        alt="ID Card pin background part"
        width={128}
        height={70}
        priority
        sizes="128px"
        className="absolute -left-8 -bottom-10 rotate-[65deg] -z-10 blur-[2px] scale-[.85] sm:scale-100"
        style={{ width: "auto", height: "auto" }}
      />

      <Image
        src="/pictures/card.png"
        alt="Anna's Card"
        fill
        priority
        sizes="(max-width: 640px) 236px, 288px"
        className="object-contain rounded-lg z-0"
      />

      <Image
        src="/pictures/pin-front.png"
        alt="ID Card pin"
        width={128}
        height={70}
        priority
        sizes="128px"
        className="absolute -left-8 -bottom-10 rotate-[65deg] drop-shadow-xl z-50 scale-[.85] sm:scale-100"
        style={{ width: "auto", height: "auto" }}
      />
    </motion.div>
  );
};
export default IDCard;
