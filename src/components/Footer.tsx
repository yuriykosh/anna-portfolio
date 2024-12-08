import Link from "next/link";

const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0 flex justify-between w-full h-fit px-6 py-2 z-50 text-xs">
      <p className="opacity-35">&copy;2024 Anna Seheda</p>
      <p>
        <span className="opacity-35">Developed by </span>
        <Link
          href="https://yuriykoshyk.com"
          className="underline underline-offset-1 opacity-35 hover:opacity-100"
        >
          Yuriy Koshyk
        </Link>
      </p>
    </div>
  );
};
export default Footer;
