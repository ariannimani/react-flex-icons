import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const WarningIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper testId="warning" size={size} color={color} {...rest}>
      <path d="M7.94747 61.25C7.41274 61.25 6.92663 61.1163 6.48913 60.849C6.05163 60.5816 5.71135 60.2292 5.4683 59.7917C5.22524 59.3542 5.09156 58.8802 5.06726 58.3698C5.04295 57.8594 5.17663 57.3611 5.4683 56.875L32.4475 10.2083C32.7391 9.72222 33.1159 9.35764 33.5777 9.11458C34.0395 8.87153 34.5134 8.75 34.9995 8.75C35.4857 8.75 35.9596 8.87153 36.4214 9.11458C36.8832 9.35764 37.26 9.72222 37.5516 10.2083L64.5308 56.875C64.8225 57.3611 64.9561 57.8594 64.9318 58.3698C64.9075 58.8802 64.7739 59.3542 64.5308 59.7917C64.2877 60.2292 63.9475 60.5816 63.51 60.849C63.0725 61.1163 62.5864 61.25 62.0516 61.25H7.94747ZM34.9995 52.5C35.8259 52.5 36.5186 52.2205 37.0777 51.6615C37.6367 51.1024 37.9162 50.4097 37.9162 49.5833C37.9162 48.7569 37.6367 48.0642 37.0777 47.5052C36.5186 46.9462 35.8259 46.6667 34.9995 46.6667C34.1732 46.6667 33.4804 46.9462 32.9214 47.5052C32.3624 48.0642 32.0829 48.7569 32.0829 49.5833C32.0829 50.4097 32.3624 51.1024 32.9214 51.6615C33.4804 52.2205 34.1732 52.5 34.9995 52.5ZM34.9995 43.75C35.8259 43.75 36.5186 43.4705 37.0777 42.9115C37.6367 42.3524 37.9162 41.6597 37.9162 40.8333V32.0833C37.9162 31.2569 37.6367 30.5642 37.0777 30.0052C36.5186 29.4462 35.8259 29.1667 34.9995 29.1667C34.1732 29.1667 33.4804 29.4462 32.9214 30.0052C32.3624 30.5642 32.0829 31.2569 32.0829 32.0833V40.8333C32.0829 41.6597 32.3624 42.3524 32.9214 42.9115C33.4804 43.4705 34.1732 43.75 34.9995 43.75Z" />
    </IconWrapper>
  );
};

export default WarningIcon;
