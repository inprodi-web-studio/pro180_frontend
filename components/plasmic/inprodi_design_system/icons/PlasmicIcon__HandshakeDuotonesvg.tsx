// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HandshakeDuotonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HandshakeDuotonesvgIcon(props: HandshakeDuotonesvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 256 256"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M200 152l-40 40-64-16-56-40 32.68-65.37L128 56l55.32 14.63.28 1.37H144l-45.66 44.29a8 8 0 001.38 12.42C117.23 139.9 141 139.13 160 120z"
        }
        opacity={".2"}
      ></path>

      <path
        d={
          "M254.3 107.91l-25.52-51.06a16 16 0 00-21.47-7.15l-24.87 12.43-52.39-13.86a8.14 8.14 0 00-4.1 0L73.56 62.13 48.69 49.7a16 16 0 00-21.47 7.15L1.7 107.9a16 16 0 007.15 21.47l27 13.51 55.49 39.63a8.06 8.06 0 002.71 1.25l64 16a8 8 0 007.6-2.1l55.07-55.08 26.42-13.21a16 16 0 007.15-21.46zm-54.89 33.37L165 113.72a8 8 0 00-10.68.61C136.51 132.27 116.66 130 104 122l43.24-42h31.81l27.21 54.41zM41.53 64L62 74.22l-25.57 51.05L16 115.06zm116 119.13l-58.11-14.52-49.2-35.14 28-56L128 64.28l9.8 2.59-45 43.68-.08.09a16 16 0 002.72 24.81c20.56 13.13 45.37 11 64.91-5L188 152.66zm62-57.87l-25.52-51L214.47 64 240 115.06zm-87.75 92.67a8 8 0 01-7.75 6.06 8.13 8.13 0 01-1.95-.24l-41.67-10.42a7.89 7.89 0 01-2.71-1.25l-26.35-18.82a8 8 0 019.3-13l25.11 17.94L126 208.24a8 8 0 015.82 9.7z"
        }
      ></path>
    </svg>
  );
}

export default HandshakeDuotonesvgIcon;
/* prettier-ignore-end */
