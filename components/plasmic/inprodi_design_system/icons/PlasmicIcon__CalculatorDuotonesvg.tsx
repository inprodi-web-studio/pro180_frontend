// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type CalculatorDuotonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function CalculatorDuotonesvgIcon(props: CalculatorDuotonesvgIconProps) {
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

      <path d={"M176 64v48H80V64z"} opacity={".2"}></path>

      <path
        d={
          "M80 120h96a8 8 0 008-8V64a8 8 0 00-8-8H80a8 8 0 00-8 8v48a8 8 0 008 8zm8-48h80v32H88zm112-48H56a16 16 0 00-16 16v176a16 16 0 0016 16h144a16 16 0 0016-16V40a16 16 0 00-16-16zm0 192H56V40h144zm-100-68a12 12 0 11-12-12 12 12 0 0112 12zm40 0a12 12 0 11-12-12 12 12 0 0112 12zm40 0a12 12 0 11-12-12 12 12 0 0112 12zm-80 40a12 12 0 11-12-12 12 12 0 0112 12zm40 0a12 12 0 11-12-12 12 12 0 0112 12zm40 0a12 12 0 11-12-12 12 12 0 0112 12z"
        }
      ></path>
    </svg>
  );
}

export default CalculatorDuotonesvgIcon;
/* prettier-ignore-end */
