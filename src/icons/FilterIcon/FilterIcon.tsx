import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const FilterIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper testId="filter" size={size} color={color} {...rest}>
      <path d="M32.0802 58.3337C31.2538 58.3337 30.5611 58.0541 30.0021 57.4951C29.4431 56.9361 29.1636 56.2434 29.1636 55.417V37.917L12.2469 16.3337C11.5177 15.3614 11.4084 14.3406 11.9188 13.2712C12.4292 12.2017 13.3163 11.667 14.5802 11.667H55.4136C56.6775 11.667 57.5646 12.2017 58.075 13.2712C58.5854 14.3406 58.4761 15.3614 57.7469 16.3337L40.8302 37.917V55.417C40.8302 56.2434 40.5507 56.9361 39.9917 57.4951C39.4327 58.0541 38.74 58.3337 37.9136 58.3337H32.0802Z" />
    </IconWrapper>
  );
};

export default FilterIcon;
