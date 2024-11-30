import IDCard from "./IDCard";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="h-64 pt-2 pb-6 px-0 sm:flex sm:justify-between sm:py-4 sm:pr-2 sm:pl-6">
      <IDCard />
      <Navigation />
    </header>
  );
};
export default Header;
