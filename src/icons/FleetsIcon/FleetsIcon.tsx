import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const FleetsIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper testId="fleets" size={size} color={color} {...rest}>
      <path d="M17.5003 58.3332C15.0698 58.3332 13.0038 57.4825 11.3024 55.7811C9.60102 54.0797 8.75033 52.0137 8.75033 49.5832H5.83366C5.00727 49.5832 4.31456 49.3037 3.75553 48.7446C3.19651 48.1856 2.91699 47.4929 2.91699 46.6665V17.4998C2.91699 15.8957 3.48817 14.5224 4.63053 13.38C5.77289 12.2377 7.14616 11.6665 8.75033 11.6665H43.7503C45.3545 11.6665 46.7278 12.2377 47.8701 13.38C49.0125 14.5224 49.5837 15.8957 49.5837 17.4998V23.3332H55.417C56.3406 23.3332 57.2156 23.5398 58.042 23.953C58.8684 24.3662 59.5489 24.9373 60.0837 25.6665L66.5003 34.1978C66.6948 34.4408 66.8406 34.7082 66.9378 34.9998C67.035 35.2915 67.0837 35.6075 67.0837 35.9478V46.6665C67.0837 47.4929 66.8041 48.1856 66.2451 48.7446C65.6861 49.3037 64.9934 49.5832 64.167 49.5832H61.2503C61.2503 52.0137 60.3996 54.0797 58.6982 55.7811C56.9969 57.4825 54.9309 58.3332 52.5003 58.3332C50.0698 58.3332 48.0038 57.4825 46.3024 55.7811C44.601 54.0797 43.7503 52.0137 43.7503 49.5832H26.2503C26.2503 52.0137 25.3996 54.0797 23.6982 55.7811C21.9969 57.4825 19.9309 58.3332 17.5003 58.3332ZM17.5003 52.4998C18.3267 52.4998 19.0194 52.2203 19.5784 51.6613C20.1375 51.1023 20.417 50.4096 20.417 49.5832C20.417 48.7568 20.1375 48.0641 19.5784 47.505C19.0194 46.946 18.3267 46.6665 17.5003 46.6665C16.6739 46.6665 15.9812 46.946 15.4222 47.505C14.8632 48.0641 14.5837 48.7568 14.5837 49.5832C14.5837 50.4096 14.8632 51.1023 15.4222 51.6613C15.9812 52.2203 16.6739 52.4998 17.5003 52.4998ZM52.5003 52.4998C53.3267 52.4998 54.0194 52.2203 54.5784 51.6613C55.1375 51.1023 55.417 50.4096 55.417 49.5832C55.417 48.7568 55.1375 48.0641 54.5784 47.505C54.0194 46.946 53.3267 46.6665 52.5003 46.6665C51.6739 46.6665 50.9812 46.946 50.4222 47.505C49.8632 48.0641 49.5837 48.7568 49.5837 49.5832C49.5837 50.4096 49.8632 51.1023 50.4222 51.6613C50.9812 52.2203 51.6739 52.4998 52.5003 52.4998ZM49.5837 37.9165H61.9795L55.417 29.1665H49.5837V37.9165Z" />
    </IconWrapper>
  );
};

export default FleetsIcon;