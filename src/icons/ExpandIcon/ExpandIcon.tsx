import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const ExpandIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper testId="expand" size={size} color={color} {...rest}>
      <path d="M20.4168 49.5835H29.1668C29.9932 49.5835 30.6859 49.863 31.245 50.422C31.804 50.9811 32.0835 51.6738 32.0835 52.5002C32.0835 53.3265 31.804 54.0193 31.245 54.5783C30.6859 55.1373 29.9932 55.4168 29.1668 55.4168H17.5002C16.6738 55.4168 15.9811 55.1373 15.422 54.5783C14.863 54.0193 14.5835 53.3265 14.5835 52.5002V40.8335C14.5835 40.0071 14.863 39.3144 15.422 38.7554C15.9811 38.1963 16.6738 37.9168 17.5002 37.9168C18.3266 37.9168 19.0193 38.1963 19.5783 38.7554C20.1373 39.3144 20.4168 40.0071 20.4168 40.8335V49.5835ZM49.5835 20.4168H40.8335C40.0071 20.4168 39.3144 20.1373 38.7554 19.5783C38.1963 19.0193 37.9168 18.3266 37.9168 17.5002C37.9168 16.6738 38.1963 15.9811 38.7554 15.422C39.3144 14.863 40.0071 14.5835 40.8335 14.5835H52.5002C53.3265 14.5835 54.0193 14.863 54.5783 15.422C55.1373 15.9811 55.4168 16.6738 55.4168 17.5002V29.1668C55.4168 29.9932 55.1373 30.6859 54.5783 31.245C54.0193 31.804 53.3265 32.0835 52.5002 32.0835C51.6738 32.0835 50.9811 31.804 50.422 31.245C49.863 30.6859 49.5835 29.9932 49.5835 29.1668V20.4168Z" />
    </IconWrapper>
  );
};

export default ExpandIcon;