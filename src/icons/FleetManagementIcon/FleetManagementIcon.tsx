import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const FleetManagementIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper testId="fleet-management" size={size} color={color} {...rest}>
      <path d="M17.5 55.4168V56.8752C17.5 58.0904 17.0747 59.1234 16.224 59.9741C15.3733 60.8248 14.3403 61.2502 13.125 61.2502C11.9097 61.2502 10.8767 60.8248 10.026 59.9741C9.17535 59.1234 8.75 58.0904 8.75 56.8752V36.021C8.75 35.6807 8.77431 35.3404 8.82292 35.0002C8.87153 34.6599 8.94444 34.3439 9.04167 34.0522L14.5104 18.521C14.8993 17.3543 15.6042 16.4064 16.625 15.6772C17.6458 14.9481 18.7882 14.5835 20.0521 14.5835H49.9479C51.2118 14.5835 52.3542 14.9481 53.375 15.6772C54.3958 16.4064 55.1007 17.3543 55.4896 18.521L60.9583 34.0522C61.0556 34.3439 61.1285 34.6599 61.1771 35.0002C61.2257 35.3404 61.25 35.6807 61.25 36.021V56.8752C61.25 58.0904 60.8246 59.1234 59.974 59.9741C59.1233 60.8248 58.0903 61.2502 56.875 61.2502C55.6597 61.2502 54.6267 60.8248 53.776 59.9741C52.9253 59.1234 52.5 58.0904 52.5 56.8752V55.4168H17.5ZM16.9167 29.1668H53.0833L50.0208 20.4168H19.9792L16.9167 29.1668ZM21.875 46.6668C23.0903 46.6668 24.1233 46.2415 24.974 45.3908C25.8247 44.5401 26.25 43.5071 26.25 42.2918C26.25 41.0766 25.8247 40.0436 24.974 39.1929C24.1233 38.3422 23.0903 37.9168 21.875 37.9168C20.6597 37.9168 19.6267 38.3422 18.776 39.1929C17.9253 40.0436 17.5 41.0766 17.5 42.2918C17.5 43.5071 17.9253 44.5401 18.776 45.3908C19.6267 46.2415 20.6597 46.6668 21.875 46.6668ZM48.125 46.6668C49.3403 46.6668 50.3733 46.2415 51.224 45.3908C52.0746 44.5401 52.5 43.5071 52.5 42.2918C52.5 41.0766 52.0746 40.0436 51.224 39.1929C50.3733 38.3422 49.3403 37.9168 48.125 37.9168C46.9097 37.9168 45.8767 38.3422 45.026 39.1929C44.1753 40.0436 43.75 41.0766 43.75 42.2918C43.75 43.5071 44.1753 44.5401 45.026 45.3908C45.8767 46.2415 46.9097 46.6668 48.125 46.6668Z" />
    </IconWrapper>
  );
};

export default FleetManagementIcon;