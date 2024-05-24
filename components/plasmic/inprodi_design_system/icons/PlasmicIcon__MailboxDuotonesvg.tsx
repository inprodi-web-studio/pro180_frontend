// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type MailboxDuotonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function MailboxDuotonesvgIcon(props: MailboxDuotonesvgIconProps) {
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
          "M232 116v60a8 8 0 01-8 8h-96v-68a52 52 0 00-52-52h104a52 52 0 0152 52z"
        }
        opacity={".2"}
      ></path>

      <path
        d={
          "M104 152a8 8 0 01-8 8H56a8 8 0 010-16h40a8 8 0 018 8zm136-36v60a16 16 0 01-16 16h-88v32a8 8 0 01-16 0v-32H32a16 16 0 01-16-16v-60a60.07 60.07 0 0160-60h76V24a8 8 0 018-8h32a8 8 0 010 16h-24v24h12a60.07 60.07 0 0160 60zm-120 60v-60a44 44 0 00-88 0v60zm104-60a44.05 44.05 0 00-44-44h-12v72a8 8 0 01-16 0V72h-35.25A59.86 59.86 0 01136 116v60h88z"
        }
      ></path>
    </svg>
  );
}

export default MailboxDuotonesvgIcon;
/* prettier-ignore-end */
