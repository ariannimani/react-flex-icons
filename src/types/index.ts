import { SVGProps } from "react";
import { colorMap, sizeMap } from "../constants";

export type Size = keyof typeof sizeMap;

export type Color = keyof typeof colorMap;

export interface IconProps extends SVGProps<SVGSVGElement> {
  testId?: string;
  size?: Size;
  width?: number | string;
  height?: number | string;
  color?: Color;
  opacity?: number;
  viewBox?: string;
  className?: string;
  style?: React.CSSProperties;
}
