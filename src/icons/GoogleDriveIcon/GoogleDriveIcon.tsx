import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const GoogleDriveIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper testId="google-drive" size={size} color={color} {...rest}>
      <path
        d="M42.2844 11.6667H27.8026C27.2224 11.6667 26.6864 11.9629 26.3963 12.4445C26.1062 12.9261 26.1061 13.5185 26.3963 14.0001L41.8786 39.6664H60.1407L43.6891 12.443C43.3991 11.9629 42.8631 11.6667 42.2844 11.6667Z"
        {...(!color && { fill: "#FBBC04" })}
      />
      <path
        d="M23.964 16.3281L7.51095 43.554C7.22715 44.0219 7.21925 44.5961 7.48714 45.073L14.5014 57.5173C14.7804 58.0125 15.3179 58.3254 15.9061 58.333H15.93C16.5087 58.333 17.0462 58.0368 17.3363 57.5552L33.0839 31.4474L23.964 16.3281Z"
        {...(!color && { fill: "#34A853" })}
      />
      <path
        d="M62.4792 43.5359C62.1875 43.0665 61.6579 42.7778 61.0856 42.7778H30.0858L20.7041 58.3332H54.0714C54.6676 58.3332 55.2162 58.0202 55.4999 57.5175L62.5142 45.0732C62.7852 44.5901 62.7725 44.0068 62.4792 43.5359Z"
        {...(!color && { fill: "#4285F4" })}
      />
    </IconWrapper>
  );
};

export default GoogleDriveIcon;
