import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const SessionExpiryIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper testId="session-expiry" size={size} color={color} {...rest}>
      <path d="M61.2487 52.4987C60.4223 52.4987 59.7296 52.2192 59.1706 51.6602C58.6115 51.1011 58.332 50.4084 58.332 49.582V32.082C58.332 31.2556 58.6115 30.5629 59.1706 30.0039C59.7296 29.4449 60.4223 29.1654 61.2487 29.1654C62.0751 29.1654 62.7678 29.4449 63.3268 30.0039C63.8858 30.5629 64.1654 31.2556 64.1654 32.082V49.582C64.1654 50.4084 63.8858 51.1011 63.3268 51.6602C62.7678 52.2192 62.0751 52.4987 61.2487 52.4987ZM61.2487 64.1654C60.4223 64.1654 59.7296 63.8858 59.1706 63.3268C58.6115 62.7678 58.332 62.0751 58.332 61.2487C58.332 60.4223 58.6115 59.7296 59.1706 59.1706C59.7296 58.6115 60.4223 58.332 61.2487 58.332C62.0751 58.332 62.7678 58.6115 63.3268 59.1706C63.8858 59.7296 64.1654 60.4223 64.1654 61.2487C64.1654 62.0751 63.8858 62.7678 63.3268 63.3268C62.7678 63.8858 62.0751 64.1654 61.2487 64.1654ZM34.9987 64.1654C30.964 64.1654 27.1723 63.3997 23.6237 61.8685C20.0751 60.3372 16.9883 58.2591 14.3633 55.6341C11.7383 53.0091 9.66016 49.9223 8.12891 46.3737C6.59766 42.8251 5.83203 39.0334 5.83203 34.9987C5.83203 30.964 6.59766 27.1723 8.12891 23.6237C9.66016 20.0751 11.7383 16.9883 14.3633 14.3633C16.9883 11.7383 20.0751 9.66016 23.6237 8.12891C27.1723 6.59766 30.964 5.83203 34.9987 5.83203C38.6445 5.83203 42.2296 6.51259 45.7539 7.8737C49.2782 9.23481 52.3529 11.2279 54.9779 13.8529C55.5612 14.4362 55.8529 15.1168 55.8529 15.8945C55.8529 16.6723 55.5612 17.3529 54.9779 17.9362L39.957 32.957C39.0334 33.8806 37.9761 34.0872 36.7852 33.5768C35.5942 33.0664 34.9987 32.1549 34.9987 30.8424V11.6654C28.4848 11.6654 22.9674 13.9258 18.4466 18.4466C13.9258 22.9674 11.6654 28.4848 11.6654 34.9987C11.6654 41.5126 13.9258 47.0299 18.4466 51.5508C22.9674 56.0716 28.4848 58.332 34.9987 58.332C37.6237 58.332 40.1515 57.8824 42.582 56.9831C45.0126 56.0838 47.2487 54.8563 49.2904 53.3008C49.9709 52.7661 50.7001 52.5716 51.4779 52.7174C52.2556 52.8633 52.8876 53.2765 53.3737 53.957C53.8598 54.6376 54.0421 55.3789 53.9206 56.181C53.799 56.9831 53.398 57.6272 52.7174 58.1133C50.0924 60.0577 47.2852 61.5525 44.2956 62.5977C41.306 63.6428 38.207 64.1654 34.9987 64.1654Z" />
    </IconWrapper>
  );
};

export default SessionExpiryIcon;