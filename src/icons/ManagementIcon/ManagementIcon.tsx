import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const ManagementIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper testId="management" size={size} color={color} {...rest}>
      <path d="M11.6663 61.2502C10.0622 61.2502 8.68891 60.679 7.54655 59.5366C6.40419 58.3943 5.83301 57.021 5.83301 55.4168V23.3335C5.83301 21.7293 6.40419 20.3561 7.54655 19.2137C8.68891 18.0713 10.0622 17.5002 11.6663 17.5002H23.333V11.6668C23.333 10.0627 23.9042 8.6894 25.0465 7.54704C26.1889 6.40468 27.5622 5.8335 29.1663 5.8335H40.833C42.4372 5.8335 43.8104 6.40468 44.9528 7.54704C46.0952 8.6894 46.6663 10.0627 46.6663 11.6668V17.5002H58.333C59.9372 17.5002 61.3104 18.0713 62.4528 19.2137C63.5952 20.3561 64.1663 21.7293 64.1663 23.3335V55.4168C64.1663 57.021 63.5952 58.3943 62.4528 59.5366C61.3104 60.679 59.9372 61.2502 58.333 61.2502H11.6663ZM29.1663 17.5002H40.833V11.6668H29.1663V17.5002Z" />
    </IconWrapper>
  );
};

export default ManagementIcon;