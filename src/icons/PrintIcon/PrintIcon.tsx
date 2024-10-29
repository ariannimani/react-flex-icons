import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const PrintIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper testId="print" size={size} color={color} {...rest}>
      <path d="M23.332 61.25C21.7279 61.25 20.3546 60.6788 19.2122 59.5365C18.0699 58.3941 17.4987 57.0208 17.4987 55.4167V49.5833H11.6654C10.0612 49.5833 8.68793 49.0121 7.54557 47.8698C6.40321 46.7274 5.83203 45.3542 5.83203 43.75V32.0833C5.83203 29.6042 6.68273 27.526 8.38411 25.849C10.0855 24.1719 12.1515 23.3333 14.582 23.3333H55.4154C57.8945 23.3333 59.9727 24.1719 61.6497 25.849C63.3268 27.526 64.1654 29.6042 64.1654 32.0833V43.75C64.1654 45.3542 63.5942 46.7274 62.4518 47.8698C61.3095 49.0121 59.9362 49.5833 58.332 49.5833H52.4987V55.4167C52.4987 57.0208 51.9275 58.3941 50.7852 59.5365C49.6428 60.6788 48.2695 61.25 46.6654 61.25H23.332ZM52.4987 20.4167H17.4987V14.5833C17.4987 12.9792 18.0699 11.6059 19.2122 10.4635C20.3546 9.32118 21.7279 8.75 23.332 8.75H46.6654C48.2695 8.75 49.6428 9.32118 50.7852 10.4635C51.9275 11.6059 52.4987 12.9792 52.4987 14.5833V20.4167ZM52.4987 36.4583C53.3251 36.4583 54.0178 36.1788 54.5768 35.6198C55.1358 35.0608 55.4154 34.3681 55.4154 33.5417C55.4154 32.7153 55.1358 32.0226 54.5768 31.4635C54.0178 30.9045 53.3251 30.625 52.4987 30.625C51.6723 30.625 50.9796 30.9045 50.4206 31.4635C49.8615 32.0226 49.582 32.7153 49.582 33.5417C49.582 34.3681 49.8615 35.0608 50.4206 35.6198C50.9796 36.1788 51.6723 36.4583 52.4987 36.4583ZM23.332 55.4167H46.6654V43.75H23.332V55.4167Z" />
    </IconWrapper>
  );
};

export default PrintIcon;