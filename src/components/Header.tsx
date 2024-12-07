import IDCard from "./IDCard";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="h-[268px] sm:h-52 w-full p-2 pb-6 fixed sm:top-0 sm:left-0 sm:flex sm:justify-between sm:py-4 sm:pr-2 sm:pl-6 backdrop-blur sm:bg-black/15 z-50 pointer-events-none">
      <IDCard />
      <Navigation />
    </header>
  );
};
export default Header;
