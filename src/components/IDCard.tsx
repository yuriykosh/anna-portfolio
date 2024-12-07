import Image from "next/image";

const IDCard = () => {
  const tags = ["Motion", "3D", "Visual Storyteller"];

  return (
    <div className="relative w-96 px-6 py-8 rounded-2xl bg-gray-100 text-background overflow-hidden">
      <Image
        src="/pictures/id-bg.jpg"
        alt=""
        fill
        className="object-cover z-0 -translate-y-[calc(100%-16px)]"
      />
      <div className="flex items-start gap-6 md:gap-10 z-10 ">
        <div className="relative w-16 h-16 flex-shrink-0 rounded-full ring ring-background bg-white overflow-hidden md:w-20 md:h-20">
          <Image
            src="/pictures/profile-pic.jpg"
            alt="Anna's Picture"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-2 pt-1.5 text-xs text-gray-500 z-10 pointer-events-auto">
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-medium text-background">Anna Seheda</p>
            <ul className="flex gap-2 italic">
              {tags.map((tag, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 after:w-1 after:h-1 after:bg-gray-400 after:rounded-full after:border-[0.5px] after:border-gray-300 last:after:hidden"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <p>
            Bringing ideas to life through dynamic motion graphics and immersive
            3D designs.
          </p>
        </div>
      </div>
    </div>
  );
};
export default IDCard;
