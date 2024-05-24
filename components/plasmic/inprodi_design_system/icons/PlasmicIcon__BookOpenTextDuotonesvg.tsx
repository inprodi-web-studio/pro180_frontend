// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BookOpenTextDuotonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BookOpenTextDuotonesvgIcon(
  props: BookOpenTextDuotonesvgIconProps
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
        d={"M232 56v144h-72a32 32 0 00-32 32V88a32 32 0 0132-32z"}
        opacity={".2"}
      ></path>

      <path
        d={
          "M232 48h-72a40 40 0 00-32 16 40 40 0 00-32-16H24a8 8 0 00-8 8v144a8 8 0 008 8h72a24 24 0 0124 24 8 8 0 0016 0 24 24 0 0124-24h72a8 8 0 008-8V56a8 8 0 00-8-8zM96 192H32V64h64a24 24 0 0124 24v112a39.81 39.81 0 00-24-8zm128 0h-64a39.81 39.81 0 00-24 8V88a24 24 0 0124-24h64zM160 88h40a8 8 0 010 16h-40a8 8 0 010-16zm48 40a8 8 0 01-8 8h-40a8 8 0 010-16h40a8 8 0 018 8zm0 32a8 8 0 01-8 8h-40a8 8 0 010-16h40a8 8 0 018 8z"
        }
      ></path>
    </svg>
  );
}

export default BookOpenTextDuotonesvgIcon;
/* prettier-ignore-end */
