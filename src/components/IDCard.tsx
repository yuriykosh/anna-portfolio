const IDCard = () => {
  return (
    <div className="w-96 p-6 rounded-2xl bg-foreground text-background">
      <div className="flex items-start gap-6 md:gap-10">
        <div className="w-16 h-16 flex-shrink-0 rounded-full bg-white md:w-20 md:h-20" />
        <div className="flex flex-col gap-2 pt-1.5 text-xs text-[#6C6C6C]">
          <div className="flex flex-col gap-0.5">
            <p className="text-sm text-background">Anna Seheda</p>
            <ul className="flex gap-2">
              <li>Info</li>
              <li>Info</li>
            </ul>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            dictum non elit vitae laoreet.
          </p>
        </div>
      </div>
    </div>
  );
};
export default IDCard;
