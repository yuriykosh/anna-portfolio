import { SVGProps } from "react";

export function CarbonProgressBarRound(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="currentColor"
        d="M16 22a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6m0-10a4 4 0 1 0 4 4a4.005 4.005 0 0 0-4-4"
      ></path>
      <path
        fill="currentColor"
        d="M16 26a10.02 10.02 0 0 1-7.453-3.332l1.49-1.334A8 8 0 1 0 16 8V6a10 10 0 0 1 0 20"
      ></path>
      <path
        fill="currentColor"
        d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"
      ></path>
    </svg>
  );
}