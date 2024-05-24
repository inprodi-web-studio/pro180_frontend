// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PaletteDuotonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PaletteDuotonesvgIcon(props: PaletteDuotonesvgIconProps) {
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
          "M224 127.17a96.48 96.48 0 01-2.39 22.18 24 24 0 01-23.4 18.65H152a24 24 0 00-24 24 24 24 0 01-32 22.61c-37.27-13.17-64-44.8-64-86.61a96 96 0 0195-96c52.84-.53 96.55 42.35 97 95.17z"
        }
        opacity={".2"}
      ></path>

      <path
        d={
          "M200.77 53.89A103.27 103.27 0 00128 24h-1.07A104 104 0 0024 128c0 43 26.58 79.06 69.36 94.17A32 32 0 00136 192a16 16 0 0116-16h46.21a31.81 31.81 0 0031.2-24.88 104.43 104.43 0 002.59-24 103.28 103.28 0 00-31.23-73.23zm13 93.71a15.89 15.89 0 01-15.56 12.4H152a32 32 0 00-32 32 16 16 0 01-21.31 15.07C62.49 194.3 40 164 40 128a88 88 0 0187.09-88h.9a88.35 88.35 0 0188 87.25 88.86 88.86 0 01-2.18 20.35zM140 76a12 12 0 11-12-12 12 12 0 0112 12zm-44 24a12 12 0 11-12-12 12 12 0 0112 12zm0 56a12 12 0 11-12-12 12 12 0 0112 12zm88-56a12 12 0 11-12-12 12 12 0 0112 12z"
        }
      ></path>
    </svg>
  );
}

export default PaletteDuotonesvgIcon;
/* prettier-ignore-end */
