import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const PasswordResetIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper testId="password-reset" size={size} color={color} {...rest}>
      <path d="M64.1654 34.9997C64.1654 39.0344 63.3997 42.8261 61.8685 46.3747C60.3372 49.9233 58.2591 53.0101 55.6341 55.6351C53.0091 58.2601 49.9223 60.3382 46.3737 61.8695C42.8251 63.4007 39.0334 64.1663 34.9987 64.1663C31.2556 64.1663 27.707 63.4979 24.3529 62.1611C20.9987 60.8243 18.0334 58.9771 15.457 56.6195C12.8806 54.2618 10.7539 51.4788 9.07682 48.2705C7.39974 45.0622 6.36675 41.6108 5.97786 37.9163C5.88064 37.0413 6.11155 36.3608 6.67057 35.8747C7.2296 35.3886 7.8737 35.1212 8.60286 35.0726C9.33203 35.024 10.0369 35.2184 10.7174 35.6559C11.398 36.0934 11.7869 36.8469 11.8841 37.9163C12.6133 43.7983 15.1775 48.6837 19.5768 52.5726C23.9761 56.4615 29.1168 58.4059 34.9987 58.4059C41.5126 58.4059 47.0299 56.1455 51.5508 51.6247C56.0716 47.1038 58.332 41.5865 58.332 35.0726C58.332 28.5587 56.0716 23.0413 51.5508 18.5205C47.0299 13.9997 41.5126 11.7393 34.9987 11.7393C30.6723 11.7393 26.747 12.7965 23.2227 14.9111C19.6983 17.0257 16.9154 19.833 14.8737 23.333H20.4154C21.2418 23.333 21.9345 23.6125 22.4935 24.1715C23.0525 24.7306 23.332 25.4233 23.332 26.2497C23.332 27.0761 23.0525 27.7688 22.4935 28.3278C21.9345 28.8868 21.2418 29.1663 20.4154 29.1663H8.7487C7.92231 29.1663 7.2296 28.8868 6.67057 28.3278C6.11155 27.7688 5.83203 27.0761 5.83203 26.2497V14.583C5.83203 13.7566 6.11155 13.0639 6.67057 12.5049C7.2296 11.9459 7.92231 11.6663 8.7487 11.6663C9.57509 11.6663 10.2678 11.9459 10.8268 12.5049C11.3859 13.0639 11.6654 13.7566 11.6654 14.583V17.4997C14.339 13.9511 17.6931 11.1195 21.7279 9.00488C25.7626 6.8903 30.1862 5.83301 34.9987 5.83301C39.0334 5.83301 42.8251 6.59863 46.3737 8.12988C49.9223 9.66113 53.0091 11.7393 55.6341 14.3643C58.2591 16.9893 60.3372 20.0761 61.8685 23.6247C63.3997 27.1733 64.1654 30.965 64.1654 34.9997ZM29.1654 46.6663C28.339 46.6663 27.6463 46.3868 27.0872 45.8278C26.5282 45.2688 26.2487 44.5761 26.2487 43.7497V34.9997C26.2487 34.1733 26.5282 33.4806 27.0872 32.9215C27.6463 32.3625 28.339 32.083 29.1654 32.083V29.1663C29.1654 27.5622 29.7365 26.1889 30.8789 25.0465C32.0213 23.9042 33.3945 23.333 34.9987 23.333C36.6029 23.333 37.9761 23.9042 39.1185 25.0465C40.2608 26.1889 40.832 27.5622 40.832 29.1663V32.083C41.6584 32.083 42.3511 32.3625 42.9102 32.9215C43.4692 33.4806 43.7487 34.1733 43.7487 34.9997V43.7497C43.7487 44.5761 43.4692 45.2688 42.9102 45.8278C42.3511 46.3868 41.6584 46.6663 40.832 46.6663H29.1654ZM32.082 32.083H37.9154V29.1663C37.9154 28.34 37.6358 27.6472 37.0768 27.0882C36.5178 26.5292 35.8251 26.2497 34.9987 26.2497C34.1723 26.2497 33.4796 26.5292 32.9206 27.0882C32.3615 27.6472 32.082 28.34 32.082 29.1663V32.083Z" />
    </IconWrapper>
  );
};

export default PasswordResetIcon;
