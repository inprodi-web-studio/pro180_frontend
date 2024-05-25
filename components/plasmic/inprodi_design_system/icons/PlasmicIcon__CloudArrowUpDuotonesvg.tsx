// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CloudArrowUpDuotonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CloudArrowUpDuotonesvgIcon(
  props: CloudArrowUpDuotonesvgIconProps
) {
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
          "M240 128a80 80 0 01-80 80H72A56 56 0 1185.92 97.74v.1A80 80 0 01240 128z"
        }
        opacity={".2"}
      ></path>

      <path
        d={
          "M178.34 165.66L160 147.31V208a8 8 0 01-16 0v-60.69l-18.34 18.35a8 8 0 01-11.32-11.32l32-32a8 8 0 0111.32 0l32 32a8 8 0 01-11.32 11.32zM160 40a88.08 88.08 0 00-78.71 48.68A64 64 0 1072 216h40a8 8 0 000-16H72a48 48 0 010-96c1.1 0 2.2 0 3.29.12A88 88 0 0072 128a8 8 0 0016 0 72 72 0 11100.8 66 8 8 0 003.2 15.34 7.9 7.9 0 003.2-.68A88 88 0 00160 40z"
        }
      ></path>
    </svg>
  );
}

export default CloudArrowUpDuotonesvgIcon;
/* prettier-ignore-end */
