import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const DeleteIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper testId="delete" size={size} color={color} {...rest}>
      <g clipPath="url(#clip0_6447_5308)">
        <path d="M17.4987 55.4167C17.4987 58.625 20.1237 61.25 23.332 61.25H46.6654C49.8737 61.25 52.4987 58.625 52.4987 55.4167V26.25C52.4987 23.0417 49.8737 20.4167 46.6654 20.4167H23.332C20.1237 20.4167 17.4987 23.0417 17.4987 26.25V55.4167ZM52.4987 11.6667H45.207L43.1362 9.59583C42.6112 9.07083 41.8529 8.75 41.0945 8.75H28.9029C28.1445 8.75 27.3862 9.07083 26.8612 9.59583L24.7904 11.6667H17.4987C15.8945 11.6667 14.582 12.9792 14.582 14.5833C14.582 16.1875 15.8945 17.5 17.4987 17.5H52.4987C54.1029 17.5 55.4154 16.1875 55.4154 14.5833C55.4154 12.9792 54.1029 11.6667 52.4987 11.6667Z" />
      </g>
      <defs>
        <clipPath id="clip0_6447_5308">
          <rect width="70" height="70" fill="white" />
        </clipPath>
      </defs>
    </IconWrapper>
  );
};

export default DeleteIcon;
