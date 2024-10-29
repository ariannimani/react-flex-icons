import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const SunnyIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper testId="sunny" size={size} color={color} {...rest}>
      <path d="M35.0003 16.5229C24.8115 16.5229 16.543 24.7915 16.543 34.9802C16.543 45.169 24.8115 53.4375 35.0003 53.4375C45.189 53.4375 53.4576 45.169 53.4576 34.9802C53.4576 24.7915 45.189 16.5229 35.0003 16.5229Z" />
      <path d="M65.625 35L55.2011 26.6335L56.6511 13.3489L43.3665 14.7989L35 4.375L26.6335 14.7989L13.3489 13.3489L14.7989 26.6335L4.375 35L14.7989 43.3665L13.3489 56.6511L26.6335 55.2011L35 65.625L43.3665 55.2011L56.6511 56.6511L55.2011 43.3665L65.625 35ZM50.0676 50.0872C48.0102 52.1445 45.7178 53.7708 43.2686 55.0248C40.643 55.8673 37.8803 56.3376 34.9804 56.3376C32.0805 56.3376 29.3178 55.8673 26.6923 55.0248C24.243 53.7708 21.9506 52.1249 19.8932 50.0872C17.8555 48.0298 16.2096 45.7374 14.9556 43.3077C14.1131 40.6822 13.6428 37.9195 13.6428 35.0196C13.6428 32.1197 14.1131 29.357 14.9556 26.7315C16.2096 24.2822 17.8555 21.9898 19.8932 19.9324C21.9506 17.8751 24.243 16.2488 26.6923 14.9948C29.3178 14.1523 32.0805 13.682 34.9804 13.682C37.8803 13.682 40.643 14.1523 43.2686 14.9948C45.7178 16.2488 48.0102 17.8947 50.0676 19.9324C52.1053 21.9702 53.7512 24.2822 55.0052 26.7118C55.8477 29.3374 56.318 32.1001 56.318 35C56.318 37.8999 55.8477 40.6822 55.0052 43.2882C53.7512 45.7374 52.1053 48.0299 50.0676 50.0676V50.0872Z" />
    </IconWrapper>
  );
};

export default SunnyIcon;