// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhoneOutgoingDuotonesvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhoneOutgoingDuotonesvgIcon(
  props: PhoneOutgoingDuotonesvgIconProps
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
          "M215.94 182.08A48.33 48.33 0 01168 224 136 136 0 0132 88a48.33 48.33 0 0141.92-47.94 8 8 0 018.3 4.8l21.13 47.2a8 8 0 01-.66 7.53L81.32 125a7.93 7.93 0 00-.54 7.81c8.27 16.93 25.77 34.22 42.75 42.41a7.92 7.92 0 007.83-.59l25-21.3a8 8 0 017.59-.69l47.16 21.13a8 8 0 014.83 8.31z"
        }
        opacity={".2"}
      ></path>

      <path
        d={
          "M146.34 109.66a8 8 0 010-11.32L180.69 64H160a8 8 0 010-16h40a8 8 0 018 8v40a8 8 0 01-16 0V75.31l-34.34 34.35a8 8 0 01-11.32 0zm77.54 73.42A56.26 56.26 0 01168 232C88.6 232 24 167.4 24 88a56.26 56.26 0 0148.92-55.88 16 16 0 0116.62 9.51l21.12 47.16v.12a16 16 0 01-1.27 15.09c-.18.27-.37.52-.57.77L88 129.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8.12 8.12 0 01.75-.56 15.93 15.93 0 0115.17-1.4l.13.06 47.11 21.11a16 16 0 019.55 16.62zm-15.88-2h-.11l-47-21.06-24.35 20.72a8.44 8.44 0 01-.74.56 16 16 0 01-15.75 1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16 16 0 011-15.7 6.13 6.13 0 01.57-.77L96 95.15l-21-47a.61.61 0 010-.12A40.2 40.2 0 0040 88a128.14 128.14 0 00128 128 40.21 40.21 0 0040-34.93z"
        }
      ></path>
    </svg>
  );
}

export default PhoneOutgoingDuotonesvgIcon;
/* prettier-ignore-end */
