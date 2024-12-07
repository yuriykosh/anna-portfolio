import IDCard from "./IDCard";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header
      className="fixed flex flex-col-reverse top-0 left-0 h-fit sm:h-52 w-full p-2 pb-6 sm:py-4 sm:pr-2 sm:pl-6 sm:flex-row sm:justify-between 
                backdrop-blur sm:bg-white/20 z-50 pointer-events-none
                "
    >
      <IDCard />
      <Navigation />
    </header>
  );
};
export default Header;
