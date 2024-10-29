import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const AnalyticsIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper testId="analytics" size={size} color={color} {...rest}>
      <path d="M11.6667 61.2498C10.8403 61.2498 10.1476 60.9703 9.58854 60.4113C9.02951 59.8523 8.75 59.1596 8.75 58.3332V55.4165C8.75 54.5901 9.02951 53.8974 9.58854 53.3384C10.1476 52.7793 10.8403 52.4998 11.6667 52.4998C12.4931 52.4998 13.1858 52.7793 13.7448 53.3384C14.3038 53.8974 14.5833 54.5901 14.5833 55.4165V58.3332C14.5833 59.1596 14.3038 59.8523 13.7448 60.4113C13.1858 60.9703 12.4931 61.2498 11.6667 61.2498ZM23.3333 61.2498C22.5069 61.2498 21.8142 60.9703 21.2552 60.4113C20.6962 59.8523 20.4167 59.1596 20.4167 58.3332V42.2915C20.4167 41.4651 20.6962 40.7724 21.2552 40.2134C21.8142 39.6543 22.5069 39.3748 23.3333 39.3748C24.1597 39.3748 24.8524 39.6543 25.4115 40.2134C25.9705 40.7724 26.25 41.4651 26.25 42.2915V58.3332C26.25 59.1596 25.9705 59.8523 25.4115 60.4113C24.8524 60.9703 24.1597 61.2498 23.3333 61.2498ZM35 61.2498C34.1736 61.2498 33.4809 60.9703 32.9219 60.4113C32.3628 59.8523 32.0833 59.1596 32.0833 58.3332V48.1248C32.0833 47.2984 32.3628 46.6057 32.9219 46.0467C33.4809 45.4877 34.1736 45.2082 35 45.2082C35.8264 45.2082 36.5191 45.4877 37.0781 46.0467C37.6372 46.6057 37.9167 47.2984 37.9167 48.1248V58.3332C37.9167 59.1596 37.6372 59.8523 37.0781 60.4113C36.5191 60.9703 35.8264 61.2498 35 61.2498ZM46.6667 61.2498C45.8403 61.2498 45.1476 60.9703 44.5885 60.4113C44.0295 59.8523 43.75 59.1596 43.75 58.3332V43.7498C43.75 42.9234 44.0295 42.2307 44.5885 41.6717C45.1476 41.1127 45.8403 40.8332 46.6667 40.8332C47.4931 40.8332 48.1858 41.1127 48.7448 41.6717C49.3038 42.2307 49.5833 42.9234 49.5833 43.7498V58.3332C49.5833 59.1596 49.3038 59.8523 48.7448 60.4113C48.1858 60.9703 47.4931 61.2498 46.6667 61.2498ZM58.3333 61.2498C57.5069 61.2498 56.8142 60.9703 56.2552 60.4113C55.6962 59.8523 55.4167 59.1596 55.4167 58.3332V32.0832C55.4167 31.2568 55.6962 30.5641 56.2552 30.005C56.8142 29.446 57.5069 29.1665 58.3333 29.1665C59.1597 29.1665 59.8524 29.446 60.4115 30.005C60.9705 30.5641 61.25 31.2568 61.25 32.0832V58.3332C61.25 59.1596 60.9705 59.8523 60.4115 60.4113C59.8524 60.9703 59.1597 61.2498 58.3333 61.2498ZM40.8333 34.9269C40.0556 34.9269 39.3142 34.7811 38.6094 34.4894C37.9045 34.1977 37.2604 33.7846 36.6771 33.2498L29.1667 25.7394L13.7083 41.1977C13.125 41.7811 12.4323 42.0606 11.6302 42.0363C10.8281 42.012 10.1354 41.7082 9.55208 41.1248C9.01736 40.5415 8.76215 39.8488 8.78646 39.0467C8.81076 38.2446 9.09028 37.5762 9.625 37.0415L25.0104 21.6561C25.5938 21.0727 26.2378 20.6474 26.9427 20.38C27.6476 20.1127 28.3889 19.979 29.1667 19.979C29.9444 19.979 30.6979 20.1127 31.4271 20.38C32.1562 20.6474 32.7882 21.0727 33.3229 21.6561L40.8333 29.1665L56.2917 13.7082C56.875 13.1248 57.5677 12.8453 58.3698 12.8696C59.1719 12.8939 59.8646 13.1977 60.4479 13.7811C60.9826 14.3644 61.2378 15.0571 61.2135 15.8592C61.1892 16.6613 60.9097 17.3297 60.375 17.8644L44.9896 33.2498C44.4549 33.7846 43.8229 34.1977 43.0938 34.4894C42.3646 34.7811 41.6111 34.9269 40.8333 34.9269Z" />
    </IconWrapper>
  );
};

export default AnalyticsIcon;
