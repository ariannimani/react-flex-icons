import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const TimeIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper testId="time" size={size} color={color} {...rest}>
      <path d="M37.9154 33.832V23.332C37.9154 22.5056 37.6358 21.8129 37.0768 21.2539C36.5178 20.6949 35.8251 20.4154 34.9987 20.4154C34.1723 20.4154 33.4796 20.6949 32.9206 21.2539C32.3615 21.8129 32.082 22.5056 32.082 23.332V34.9258C32.082 35.3147 32.1549 35.6914 32.3008 36.056C32.4466 36.4206 32.6654 36.7487 32.957 37.0404L42.582 46.6654C43.1168 47.2001 43.7973 47.4674 44.6237 47.4674C45.4501 47.4674 46.1306 47.2001 46.6654 46.6654C47.2001 46.1306 47.4674 45.4501 47.4674 44.6237C47.4674 43.7973 47.2001 43.1168 46.6654 42.582L37.9154 33.832ZM34.9987 64.1654C30.964 64.1654 27.1723 63.3997 23.6237 61.8685C20.0751 60.3372 16.9883 58.2591 14.3633 55.6341C11.7383 53.0091 9.66016 49.9223 8.12891 46.3737C6.59766 42.8251 5.83203 39.0334 5.83203 34.9987C5.83203 30.964 6.59766 27.1723 8.12891 23.6237C9.66016 20.0751 11.7383 16.9883 14.3633 14.3633C16.9883 11.7383 20.0751 9.66016 23.6237 8.12891C27.1723 6.59766 30.964 5.83203 34.9987 5.83203C39.0334 5.83203 42.8251 6.59766 46.3737 8.12891C49.9223 9.66016 53.0091 11.7383 55.6341 14.3633C58.2591 16.9883 60.3372 20.0751 61.8685 23.6237C63.3997 27.1723 64.1654 30.964 64.1654 34.9987C64.1654 39.0334 63.3997 42.8251 61.8685 46.3737C60.3372 49.9223 58.2591 53.0091 55.6341 55.6341C53.0091 58.2591 49.9223 60.3372 46.3737 61.8685C42.8251 63.3997 39.0334 64.1654 34.9987 64.1654Z" />
    </IconWrapper>
  );
};

export default TimeIcon;
