import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const SendMessageIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper testId="send-message" size={size} color={color} {...rest}>
      <path d="M12.8333 56.6553C11.8611 57.0442 10.9375 56.9591 10.0625 56.4001C9.1875 55.8411 8.75 55.0269 8.75 53.9574V40.8324L32.0833 34.9991L8.75 29.1657V16.0407C8.75 14.9713 9.1875 14.1571 10.0625 13.598C10.9375 13.039 11.8611 12.9539 12.8333 13.3428L57.75 32.3012C58.9653 32.8359 59.5729 33.7352 59.5729 34.9991C59.5729 36.263 58.9653 37.1623 57.75 37.697L12.8333 56.6553Z" />
    </IconWrapper>
  );
};

export default SendMessageIcon;
