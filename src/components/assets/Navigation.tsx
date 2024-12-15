"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GameIconsAmmonite } from "@/components/icons/Ammonite";

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
    <nav className="flex justify-between pt-2 pb-6 sm:flex-col sm:py-0">
      <Link
        href="/"
        onClick={handleHomeClick}
        className="w-10 h-10 p-0.5 sm:w-16 sm:h-16 sm:p-1 pointer-events-auto"
      >
        <GameIconsAmmonite />
      </Link>
      <ul className="hidden md:flex flex-col gap-2 text-sm font-bold text-right pointer-events-auto">
        <li className="pr-1">
          <Link
            className="py-2 hover:underline underline-offset-2 hover:decoration-4"
            href="/#about"
          >
            About me
          </Link>
        </li>
        <li className="pr-1">
          <Link
            className="py-2 hover:underline underline-offset-2 hover:decoration-4"
            href="/#contact"
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
