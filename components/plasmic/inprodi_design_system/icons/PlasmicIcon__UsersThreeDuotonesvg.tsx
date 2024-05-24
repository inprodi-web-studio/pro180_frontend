// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type UsersThreeDuotonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function UsersThreeDuotonesvgIcon(props: UsersThreeDuotonesvgIconProps) {
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
          "M168 144a40 40 0 11-40-40 40 40 0 0140 40zM64 56a32 32 0 1032 32 32 32 0 00-32-32zm128 0a32 32 0 1032 32 32 32 0 00-32-32z"
        }
        opacity={".2"}
      ></path>

      <path
        d={
          "M244.8 150.4a8 8 0 01-11.2-1.6A51.6 51.6 0 00192 128a8 8 0 010-16 24 24 0 10-23.24-30 8 8 0 11-15.5-4A40 40 0 11219 117.51a67.94 67.94 0 0127.43 21.68 8 8 0 01-1.63 11.21zM190.92 212a8 8 0 11-13.85 8 57 57 0 00-98.15 0 8 8 0 11-13.84-8 72.06 72.06 0 0133.74-29.92 48 48 0 1158.36 0A72.06 72.06 0 01190.92 212zM128 176a32 32 0 10-32-32 32 32 0 0032 32zm-56-56a8 8 0 00-8-8 24 24 0 1123.24-30 8 8 0 1015.5-4A40 40 0 1037 117.51a67.94 67.94 0 00-27.4 21.68 8 8 0 1012.8 9.61A51.6 51.6 0 0164 128a8 8 0 008-8z"
        }
      ></path>
    </svg>
  );
}

export default UsersThreeDuotonesvgIcon;
/* prettier-ignore-end */
