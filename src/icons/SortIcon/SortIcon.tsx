import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const SortIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper testId="sort" size={size} color={color} {...rest}>
      <path d="M11.6667 52.5C10.8403 52.5 10.1476 52.2205 9.58854 51.6615C9.02951 51.1024 8.75 50.4097 8.75 49.5833C8.75 48.7569 9.02951 48.0642 9.58854 47.5052C10.1476 46.9462 10.8403 46.6667 11.6667 46.6667H23.3333C24.1597 46.6667 24.8524 46.9462 25.4115 47.5052C25.9705 48.0642 26.25 48.7569 26.25 49.5833C26.25 50.4097 25.9705 51.1024 25.4115 51.6615C24.8524 52.2205 24.1597 52.5 23.3333 52.5H11.6667ZM11.6667 37.9167C10.8403 37.9167 10.1476 37.6372 9.58854 37.0781C9.02951 36.5191 8.75 35.8264 8.75 35C8.75 34.1736 9.02951 33.4809 9.58854 32.9219C10.1476 32.3628 10.8403 32.0833 11.6667 32.0833H40.8333C41.6597 32.0833 42.3524 32.3628 42.9115 32.9219C43.4705 33.4809 43.75 34.1736 43.75 35C43.75 35.8264 43.4705 36.5191 42.9115 37.0781C42.3524 37.6372 41.6597 37.9167 40.8333 37.9167H11.6667ZM11.6667 23.3333C10.8403 23.3333 10.1476 23.0538 9.58854 22.4948C9.02951 21.9358 8.75 21.2431 8.75 20.4167C8.75 19.5903 9.02951 18.8976 9.58854 18.3385C10.1476 17.7795 10.8403 17.5 11.6667 17.5H58.3333C59.1597 17.5 59.8524 17.7795 60.4115 18.3385C60.9705 18.8976 61.25 19.5903 61.25 20.4167C61.25 21.2431 60.9705 21.9358 60.4115 22.4948C59.8524 23.0538 59.1597 23.3333 58.3333 23.3333H11.6667Z" />
    </IconWrapper>
  );
};

export default SortIcon;
