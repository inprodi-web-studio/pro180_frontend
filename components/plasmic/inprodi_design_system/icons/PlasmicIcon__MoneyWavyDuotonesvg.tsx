// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MoneyWavyDuotonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MoneyWavyDuotonesvgIcon(props: MoneyWavyDuotonesvgIconProps) {
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
          "M16 69.21v120c91.64-44.77 132.36 42.35 224-2.42v-120c-91.64 44.77-132.36-42.35-224 2.42zM128 152a24 24 0 1124-24 24 24 0 01-24 24z"
        }
        opacity={".2"}
      ></path>

      <path
        d={
          "M244.24 60a8 8 0 00-7.75-.4c-42.93 21-73.59 11.16-106 .78-34-10.89-69.25-22.14-117.95 1.64A8 8 0 008 69.24v119.93a8 8 0 0011.51 7.19c42.93-21 73.59-11.16 106.05-.78 19.24 6.15 38.84 12.42 61 12.42 17.09 0 35.73-3.72 56.91-14.06a8 8 0 004.49-7.18V66.83a8 8 0 00-3.72-6.83zM232 181.67c-40.6 18.17-70.25 8.69-101.56-1.32-19.24-6.15-38.84-12.42-61-12.42a122 122 0 00-45.4 9V74.33c40.6-18.17 70.25-8.69 101.56 1.32S189.14 96 232 79.09zM128 96a32 32 0 1032 32 32 32 0 00-32-32zm0 48a16 16 0 1116-16 16 16 0 01-16 16zM56 96v48a8 8 0 01-16 0V96a8 8 0 1116 0zm144 64v-48a8 8 0 1116 0v48a8 8 0 11-16 0z"
        }
      ></path>
    </svg>
  );
}

export default MoneyWavyDuotonesvgIcon;
/* prettier-ignore-end */
