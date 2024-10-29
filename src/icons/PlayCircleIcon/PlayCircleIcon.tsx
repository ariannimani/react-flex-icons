import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const PlayCircleIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper testId="play-circle" size={size} color={color} {...rest}>
      <path d="M31.0627 45.9377L45.2814 36.8231C45.962 36.3856 46.3022 35.7779 46.3022 35.0002C46.3022 34.2224 45.962 33.6147 45.2814 33.1772L31.0627 24.0627C30.3335 23.5766 29.5922 23.5401 28.8387 23.9533C28.0852 24.3665 27.7085 25.0106 27.7085 25.8856V44.1147C27.7085 44.9897 28.0852 45.6338 28.8387 46.047C29.5922 46.4602 30.3335 46.4238 31.0627 45.9377ZM35.0002 64.1668C30.9654 64.1668 27.1738 63.4012 23.6252 61.87C20.0766 60.3387 16.9897 58.2606 14.3647 55.6356C11.7397 53.0106 9.66162 49.9238 8.13037 46.3752C6.59912 42.8265 5.8335 39.0349 5.8335 35.0002C5.8335 30.9654 6.59912 27.1738 8.13037 23.6252C9.66162 20.0766 11.7397 16.9897 14.3647 14.3647C16.9897 11.7397 20.0766 9.66162 23.6252 8.13037C27.1738 6.59912 30.9654 5.8335 35.0002 5.8335C39.0349 5.8335 42.8265 6.59912 46.3752 8.13037C49.9238 9.66162 53.0106 11.7397 55.6356 14.3647C58.2606 16.9897 60.3387 20.0766 61.87 23.6252C63.4012 27.1738 64.1668 30.9654 64.1668 35.0002C64.1668 39.0349 63.4012 42.8265 61.87 46.3752C60.3387 49.9238 58.2606 53.0106 55.6356 55.6356C53.0106 58.2606 49.9238 60.3387 46.3752 61.87C42.8265 63.4012 39.0349 64.1668 35.0002 64.1668ZM35.0002 58.3335C41.514 58.3335 47.0314 56.0731 51.5522 51.5522C56.0731 47.0314 58.3335 41.514 58.3335 35.0002C58.3335 28.4863 56.0731 22.9689 51.5522 18.4481C47.0314 13.9272 41.514 11.6668 35.0002 11.6668C28.4863 11.6668 22.9689 13.9272 18.4481 18.4481C13.9272 22.9689 11.6668 28.4863 11.6668 35.0002C11.6668 41.514 13.9272 47.0314 18.4481 51.5522C22.9689 56.0731 28.4863 58.3335 35.0002 58.3335Z" />
    </IconWrapper>
  );
};

export default PlayCircleIcon;