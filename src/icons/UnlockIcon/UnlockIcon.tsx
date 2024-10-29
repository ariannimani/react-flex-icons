import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const UnlockIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper testId="unlock" size={size} color={color} {...rest}>
      <path d="M17.5013 64.167C15.8971 64.167 14.5239 63.5958 13.3815 62.4534C12.2391 61.3111 11.668 59.9378 11.668 58.3337V29.167C11.668 27.5628 12.2391 26.1896 13.3815 25.0472C14.5239 23.9048 15.8971 23.3337 17.5013 23.3337H43.7513V17.5003C43.7513 15.0698 42.9006 13.0038 41.1992 11.3024C39.4978 9.60102 37.4319 8.75033 35.0013 8.75033C32.9596 8.75033 31.1732 9.37012 29.6419 10.6097C28.1107 11.8493 27.0777 13.3927 26.543 15.2399C26.3485 15.9205 25.9475 16.4673 25.3398 16.8805C24.7322 17.2937 24.0638 17.5003 23.3346 17.5003C22.5082 17.5003 21.8155 17.233 21.2565 16.6982C20.6975 16.1635 20.4909 15.5316 20.6367 14.8024C21.1714 11.4969 22.7878 8.68956 25.4857 6.38053C28.1836 4.07151 31.3555 2.91699 35.0013 2.91699C39.036 2.91699 42.4753 4.33887 45.319 7.18262C48.1628 10.0264 49.5846 13.4656 49.5846 17.5003V23.3337H52.5013C54.1055 23.3337 55.4787 23.9048 56.6211 25.0472C57.7635 26.1896 58.3346 27.5628 58.3346 29.167V58.3337C58.3346 59.9378 57.7635 61.3111 56.6211 62.4534C55.4787 63.5958 54.1055 64.167 52.5013 64.167H17.5013ZM35.0013 49.5837C36.6055 49.5837 37.9787 49.0125 39.1211 47.8701C40.2635 46.7278 40.8346 45.3545 40.8346 43.7503C40.8346 42.1462 40.2635 40.7729 39.1211 39.6305C37.9787 38.4882 36.6055 37.917 35.0013 37.917C33.3971 37.917 32.0239 38.4882 30.8815 39.6305C29.7392 40.7729 29.168 42.1462 29.168 43.7503C29.168 45.3545 29.7392 46.7278 30.8815 47.8701C32.0239 49.0125 33.3971 49.5837 35.0013 49.5837Z" />
    </IconWrapper>
  );
};

export default UnlockIcon;
