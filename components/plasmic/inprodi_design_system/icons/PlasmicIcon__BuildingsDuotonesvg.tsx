// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BuildingsDuotonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BuildingsDuotonesvgIcon(props: BuildingsDuotonesvgIconProps) {
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
        d={"M136 32v184H40V85.35a8 8 0 013.56-6.66l80-53.33A8 8 0 01136 32z"}
        opacity={".2"}
      ></path>

      <path
        d={
          "M240 208h-16V96a16 16 0 00-16-16h-64V32a16 16 0 00-24.88-13.32L39.12 72A16 16 0 0032 85.34V208H16a8 8 0 000 16h224a8 8 0 000-16zM208 96v112h-64V96zM48 85.34L128 32v176H48zM112 112v16a8 8 0 01-16 0v-16a8 8 0 1116 0zm-32 0v16a8 8 0 01-16 0v-16a8 8 0 1116 0zm0 56v16a8 8 0 01-16 0v-16a8 8 0 0116 0zm32 0v16a8 8 0 01-16 0v-16a8 8 0 0116 0z"
        }
      ></path>
    </svg>
  );
}

export default BuildingsDuotonesvgIcon;
/* prettier-ignore-end */
