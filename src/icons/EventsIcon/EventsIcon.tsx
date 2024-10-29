import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const EventsIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper testId="events" size={size} color={color} {...rest}>
      <g clipPath="url(#clip0_8919_24193)">
        <path d="M2.04773 53.458H55.6439C56.1246 53.458 56.5892 53.2898 56.9577 52.9833C57.4724 52.5522 69.2153 42.4503 69.9314 20.644H12.3702C11.6569 40.4383 0.842231 49.7421 0.729843 49.8349C0.070966 50.3917 -0.171447 51.301 0.124972 52.1102C0.419341 52.9173 1.1865 53.458 2.04773 53.458Z" />
        <path d="M67.9488 8.33856H57.6944V6.28769C57.6944 5.1392 56.792 4.23682 55.6435 4.23682C54.4951 4.23682 53.5927 5.1392 53.5927 6.28769V8.33856H43.2016V6.28769C43.2016 5.1392 42.2992 4.23682 41.1507 4.23682C40.0022 4.23682 39.0998 5.1392 39.0998 6.28769V8.33856H28.8455V6.28769C28.8455 5.1392 27.9431 4.23682 26.7946 4.23682C25.6461 4.23682 24.7437 5.1392 24.7437 6.28769V8.33856H14.4893C13.3409 8.33856 12.4385 9.24095 12.4385 10.3894V16.5421H69.9997V10.3894C69.9997 9.24095 69.0973 8.33856 67.9488 8.33856Z" />
        <path d="M59.5911 56.1277C58.4774 57.055 57.0796 57.5598 55.6435 57.5598H12.4385V63.7124C12.4385 64.846 13.3558 65.7633 14.4893 65.7633H67.9488C69.0824 65.7633 69.9997 64.846 69.9997 63.7124V40.7227C66.0456 50.4234 60.5279 55.3436 59.5911 56.1277Z" />
      </g>
      <defs>
        <clipPath id="clip0_8919_24193">
          <rect width="70" height="70" fill="white" />
        </clipPath>
      </defs>
    </IconWrapper>
  );
};

export default EventsIcon;