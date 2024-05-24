// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GraphDuotonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GraphDuotonesvgIcon(props: GraphDuotonesvgIconProps) {
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
        d={"M152 128a24 24 0 11-24-24 24 24 0 0124 24z"}
        opacity={".2"}
      ></path>

      <path
        d={
          "M200 152a31.84 31.84 0 00-19.53 6.68l-23.11-18A31.65 31.65 0 00160 128c0-.74 0-1.48-.08-2.21l13.23-4.41A32 32 0 10168 104c0 .74 0 1.48.08 2.21l-13.23 4.41A32 32 0 00128 96a32.59 32.59 0 00-5.27.44L115.89 81A32 32 0 1096 88a32.59 32.59 0 005.27-.44l6.84 15.4a31.92 31.92 0 00-8.57 39.64l-25.71 22.84a32.06 32.06 0 1010.63 12l25.71-22.84a31.91 31.91 0 0037.36-1.24l23.11 18A31.65 31.65 0 00168 184a32 32 0 1032-32zm0-64a16 16 0 11-16 16 16 16 0 0116-16zM80 56a16 16 0 1116 16 16 16 0 01-16-16zM56 208a16 16 0 1116-16 16 16 0 01-16 16zm56-80a16 16 0 1116 16 16 16 0 01-16-16zm88 72a16 16 0 1116-16 16 16 0 01-16 16z"
        }
      ></path>
    </svg>
  );
}

export default GraphDuotonesvgIcon;
/* prettier-ignore-end */
