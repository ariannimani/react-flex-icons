import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const LeadsIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper testId="leads" size={size} color={color} {...rest}>
      <path d="M26.2496 43.7501H17.2079C16.0413 43.7501 15.1784 43.2275 14.6194 42.1824C14.0603 41.1372 14.1211 40.1285 14.8017 39.1563L36.6038 7.80215C37.0899 7.1216 37.7218 6.64764 38.4996 6.38028C39.2774 6.11292 40.0794 6.12507 40.9058 6.41674C41.7322 6.7084 42.3399 7.21882 42.7288 7.94799C43.1176 8.67715 43.2635 9.45493 43.1663 10.2813L40.8329 29.1667H52.135C53.3989 29.1667 54.286 29.7258 54.7965 30.8438C55.3069 31.9619 55.1489 33.007 54.3225 33.9792L30.3329 62.7084C29.7982 63.3403 29.1419 63.7535 28.3642 63.948C27.5864 64.1424 26.8329 64.0695 26.1038 63.7292C25.3746 63.389 24.8034 62.8664 24.3902 62.1615C23.977 61.4567 23.819 60.691 23.9163 59.8647L26.2496 43.7501Z" />
    </IconWrapper>
  );
};

export default LeadsIcon;