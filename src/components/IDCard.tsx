import Image from "next/image";

const IDCard = () => {
  // const tags = ["Motion", "3D", "Visual Storyteller"];

  return (
    <div className="relative w-[236px] sm:w-72 h-full px-4 sm:px-6 py-8 rounded-lg bg-amber-50/85 text-foreground shadow-lg shadow-neutral-800/5 z-0">
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

      {/* <div className="flex items-start gap-4 sm:gap-6 md:gap-10 z-10 ">


        <div className="flex flex-col gap-2 sm:pt-1.5 text-xs text-gray-500 z-10">
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-medium text-foreground pointer-events-auto">
              Anna Seheda
            </p>
            <ul className="flex gap-2 italic">
              {tags.map((tag, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 after:w-1 after:h-1 after:bg-gray-400 after:rounded-full after:border-[0.5px] after:border-gray-300 last:after:hidden pointer-events-auto"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <p className="pointer-events-auto">
            Bringing ideas to life through dynamic motion graphics and immersive
            3D designs.
          </p>
        </div>
      </div> */}
    </div>
  );
};
export default IDCard;
