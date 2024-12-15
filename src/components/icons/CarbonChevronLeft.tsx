import { SVGProps } from "react";

export function CarbonChevronLeft(props: SVGProps<SVGSVGElement>) {
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
        d="M10 16L20 6l1.4 1.4l-8.6 8.6l8.6 8.6L20 26z"
      ></path>
    </svg>
  );
}
