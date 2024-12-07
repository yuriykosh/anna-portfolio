"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GameIconsAmmonite } from "./icons/Ammonite";

const Navigation = () => {
  const pathname = usePathname(); // Get the current pathname

  const handleHomeClick = (e: { preventDefault: () => void }) => {
    if (pathname === "/") {
      e.preventDefault(); // Prevent default navigation
      // Clear the hash fragment in the URL
      if (window.location.hash) {
        history.replaceState(null, "", "/");
      }
      window.location.reload(); // Reload the page
    }
  };

  return (
    <nav className="flex justify-between py-8 sm:flex-col sm:py-0 pointer-events-auto">
      <Link
        href="/"
        onClick={handleHomeClick}
        className="w-10 h-10 p-0.5 sm:w-16 sm:h-16 sm:p-1"
      >
        <GameIconsAmmonite />
      </Link>
      <ul className="flex flex-col gap-4 text-sm text-right">
        <li className="pr-1">
          <Link href="/#about">About me</Link>
        </li>
        <li className="pr-1">
          <Link href="/#contact">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
