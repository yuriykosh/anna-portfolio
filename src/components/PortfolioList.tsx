import { cases } from "@/utils/data";
import PortfolioItem from "./PortfolioItem";

const PortfolioList = () => {
  return (
    <ul className="w-full h-full grid grid-cols-1 gap-2 py-4 sm:grid-cols-3 sm:py-0 auto-rows-[200px] sm:auto-rows-fr">
      {cases.map((item, i) => {
        return <PortfolioItem key={i} i={i} {...item} />;
      })}
    </ul>
  );
};
export default PortfolioList;
