import * as React from "react";
import { SVGProps } from "react";
const SVGComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={21}
    height={20}
    viewBox="0 0 21 20"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.52222 8.65556C6.12222 11.8 8.7 14.3667 11.8444 15.9778L14.2889 13.5333C14.5889 13.2333 15.0333 13.1333 15.4222 13.2667C16.6667 13.6778 18.0111 13.9 19.3889 13.9C20 13.9 20.5 14.4 20.5 15.0111V18.8889C20.5 19.5 20 20 19.3889 20C8.95555 20 0.5 11.5444 0.5 1.11111C0.5 0.5 1 0 1.61111 0H5.5C6.11111 0 6.61111 0.5 6.61111 1.11111C6.61111 2.5 6.83333 3.83333 7.24444 5.07778C7.36667 5.46667 7.27778 5.9 6.96667 6.21111L4.52222 8.65556Z"
      fill="currentColor"
    />
  </svg>
);
export default SVGComponent;

