// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PlugsDuotonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PlugsDuotonesvgIcon(props: PlugsDuotonesvgIconProps) {
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
          "M76 124l56 56-29 29a24 24 0 01-33.94 0L47 186.91A24 24 0 0147 153zm133-54.91L186.91 47A24 24 0 00153 47l-29 29 56 56 29-29a24 24 0 000-33.91z"
        }
        opacity={".2"}
      ></path>

      <path
        d={
          "M149.66 138.34a8 8 0 00-11.32 0L120 156.69 99.31 136l18.35-18.34a8 8 0 00-11.32-11.32L88 124.69l-18.34-18.35a8 8 0 00-11.32 11.32l6.35 6.34-23.32 23.31a32 32 0 000 45.26l5.38 5.37-28.41 28.4a8 8 0 0011.32 11.32l28.4-28.41 5.37 5.38a32 32 0 0045.26 0L132 191.31l6.34 6.35a8 8 0 0011.32-11.32L131.31 168l18.35-18.34a8 8 0 000-11.32zm-52.29 65a16 16 0 01-22.62 0l-22.06-22.09a16 16 0 010-22.62L76 135.31 120.69 180zm140.29-185a8 8 0 00-11.32 0l-28.4 28.41-5.37-5.38a32.05 32.05 0 00-45.26 0L124 64.69l-6.34-6.35a8 8 0 00-11.32 11.32l80 80a8 8 0 0011.32-11.32l-6.35-6.34 23.32-23.31a32 32 0 000-45.26l-5.38-5.37 28.41-28.4a8 8 0 000-11.32zm-34.35 79L180 120.69 135.31 76l23.32-23.31a16 16 0 0122.62 0l22.06 22a16 16 0 010 22.68z"
        }
      ></path>
    </svg>
  );
}

export default PlugsDuotonesvgIcon;
/* prettier-ignore-end */
