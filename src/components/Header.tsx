import IDCard from "./IDCard";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 flex flex-row-reverse justify-between sm:flex-row w-full h-44 sm:h-52 p-2 pb-6 sm:py-4 sm:pr-2 sm:pl-6
                backdrop-blur sm:bg-white/20 z-50 pointer-events-none
                "
    >
      <IDCard />
      <Navigation />
    </header>
  );
};
export default Header;
