import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const EmailIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper testId="email" size={size} color={color} {...rest}>
      <path d="M11.6673 58.3337C10.0632 58.3337 8.68989 57.7625 7.54753 56.6201C6.40516 55.4778 5.83398 54.1045 5.83398 52.5003V17.5003C5.83398 15.8962 6.40516 14.5229 7.54753 13.3805C8.68989 12.2382 10.0632 11.667 11.6673 11.667H58.334C59.9381 11.667 61.3114 12.2382 62.4538 13.3805C63.5961 14.5229 64.1673 15.8962 64.1673 17.5003V52.5003C64.1673 54.1045 63.5961 55.4778 62.4538 56.6201C61.3114 57.7625 59.9381 58.3337 58.334 58.3337H11.6673ZM35.0007 37.4066C35.2437 37.4066 35.4989 37.3701 35.7663 37.2972C36.0336 37.2243 36.2888 37.1149 36.5319 36.9691L57.1673 24.0628C57.5562 23.8198 57.8479 23.516 58.0423 23.1514C58.2368 22.7868 58.334 22.3857 58.334 21.9482C58.334 20.976 57.9208 20.2469 57.0944 19.7607C56.268 19.2746 55.4173 19.2989 54.5423 19.8337L35.0007 32.0837L15.459 19.8337C14.584 19.2989 13.7333 19.2868 12.9069 19.7972C12.0805 20.3076 11.6673 21.0246 11.6673 21.9482C11.6673 22.4344 11.7645 22.8597 11.959 23.2243C12.1534 23.5889 12.4451 23.8684 12.834 24.0628L33.4694 36.9691C33.7125 37.1149 33.9677 37.2243 34.235 37.2972C34.5024 37.3701 34.7576 37.4066 35.0007 37.4066Z" />
    </IconWrapper>
  );
};

export default EmailIcon;
