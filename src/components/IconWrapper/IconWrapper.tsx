import { forwardRef } from "react";
import { IconProps } from "../../types";
import styles from "./IconWrapper.module.css";
import { colorMap, sizeMap } from "../../constants";

const IconWrapper = forwardRef<SVGSVGElement, IconProps>(
  (
    {
      testId = "",
      children,
      size = "medium",
      color = "black",
      opacity = 1,
      viewBox = "0 0 70 70",
      className = "",
      style = {},
      width,
      height,
      ...rest
    },
    ref
  ) => {
    const iconSize = sizeMap[size];

    const computedStyle = {
      opacity,
      fill: colorMap[color] || colorMap.black,
      ...style,
    };

    return (
      <svg
        ref={ref}
        role="img"
        data-testid={`${testId}-icon`}
        width={width ?? iconSize}
        height={height ?? iconSize}
        className={`${styles.icon} ${styles[size] || ""} ${className}`}
        style={computedStyle}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        {...rest}
      >
        {children}
      </svg>
    );
  }
);

IconWrapper.displayName = "IconWrapper";

export default IconWrapper;
