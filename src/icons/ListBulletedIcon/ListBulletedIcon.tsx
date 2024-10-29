import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const ListBulletedIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper testId="list-bulleted" size={size} color={color} {...rest}>
      <path d="M29.1667 55.417C28.3403 55.417 27.6476 55.1375 27.0885 54.5785C26.5295 54.0194 26.25 53.3267 26.25 52.5003C26.25 51.6739 26.5295 50.9812 27.0885 50.4222C27.6476 49.8632 28.3403 49.5837 29.1667 49.5837H58.3333C59.1597 49.5837 59.8524 49.8632 60.4115 50.4222C60.9705 50.9812 61.25 51.6739 61.25 52.5003C61.25 53.3267 60.9705 54.0194 60.4115 54.5785C59.8524 55.1375 59.1597 55.417 58.3333 55.417H29.1667ZM29.1667 37.917C28.3403 37.917 27.6476 37.6375 27.0885 37.0785C26.5295 36.5194 26.25 35.8267 26.25 35.0003C26.25 34.1739 26.5295 33.4812 27.0885 32.9222C27.6476 32.3632 28.3403 32.0837 29.1667 32.0837H58.3333C59.1597 32.0837 59.8524 32.3632 60.4115 32.9222C60.9705 33.4812 61.25 34.1739 61.25 35.0003C61.25 35.8267 60.9705 36.5194 60.4115 37.0785C59.8524 37.6375 59.1597 37.917 58.3333 37.917H29.1667ZM29.1667 20.417C28.3403 20.417 27.6476 20.1375 27.0885 19.5785C26.5295 19.0194 26.25 18.3267 26.25 17.5003C26.25 16.6739 26.5295 15.9812 27.0885 15.4222C27.6476 14.8632 28.3403 14.5837 29.1667 14.5837H58.3333C59.1597 14.5837 59.8524 14.8632 60.4115 15.4222C60.9705 15.9812 61.25 16.6739 61.25 17.5003C61.25 18.3267 60.9705 19.0194 60.4115 19.5785C59.8524 20.1375 59.1597 20.417 58.3333 20.417H29.1667ZM14.5833 58.3337C12.9792 58.3337 11.6059 57.7625 10.4635 56.6201C9.32118 55.4778 8.75 54.1045 8.75 52.5003C8.75 50.8962 9.32118 49.5229 10.4635 48.3805C11.6059 47.2382 12.9792 46.667 14.5833 46.667C16.1875 46.667 17.5608 47.2382 18.7031 48.3805C19.8455 49.5229 20.4167 50.8962 20.4167 52.5003C20.4167 54.1045 19.8455 55.4778 18.7031 56.6201C17.5608 57.7625 16.1875 58.3337 14.5833 58.3337ZM14.5833 40.8337C12.9792 40.8337 11.6059 40.2625 10.4635 39.1201C9.32118 37.9778 8.75 36.6045 8.75 35.0003C8.75 33.3962 9.32118 32.0229 10.4635 30.8805C11.6059 29.7382 12.9792 29.167 14.5833 29.167C16.1875 29.167 17.5608 29.7382 18.7031 30.8805C19.8455 32.0229 20.4167 33.3962 20.4167 35.0003C20.4167 36.6045 19.8455 37.9778 18.7031 39.1201C17.5608 40.2625 16.1875 40.8337 14.5833 40.8337ZM14.5833 23.3337C12.9792 23.3337 11.6059 22.7625 10.4635 21.6201C9.32118 20.4778 8.75 19.1045 8.75 17.5003C8.75 15.8962 9.32118 14.5229 10.4635 13.3805C11.6059 12.2382 12.9792 11.667 14.5833 11.667C16.1875 11.667 17.5608 12.2382 18.7031 13.3805C19.8455 14.5229 20.4167 15.8962 20.4167 17.5003C20.4167 19.1045 19.8455 20.4778 18.7031 21.6201C17.5608 22.7625 16.1875 23.3337 14.5833 23.3337Z" />
    </IconWrapper>
  );
};

export default ListBulletedIcon;
