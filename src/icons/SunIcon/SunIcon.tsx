import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const SunIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper testId="sun" size={size} color={color} {...rest}>
      <g clip-path="url(#clip0_8215_16957)">
        <path d="M55.7366 10.6523H13.128C11.4471 10.6523 10.0845 12.015 10.0845 13.6958V56.3045C10.0845 57.9854 11.4471 59.348 13.128 59.348H55.7366C57.4175 59.348 58.7801 57.9854 58.7801 56.3045V13.6958C58.7801 12.015 57.4175 10.6523 55.7366 10.6523Z" />
        <path d="M66.7136 32.281L36.5847 2.15206C35.3961 0.963512 33.4691 0.963512 32.2806 2.15206L2.15166 32.281C0.963103 33.4695 0.963104 35.3965 2.15166 36.5851L32.2806 66.714C33.4691 67.9025 35.3961 67.9025 36.5847 66.714L66.7136 36.5851C67.9021 35.3965 67.9021 33.4695 66.7136 32.281Z" />
        <path
          d="M34.4325 51.739C43.6772 51.739 51.1716 44.2446 51.1716 34.9999C51.1716 25.7552 43.6772 18.2607 34.4325 18.2607C25.1876 18.2607 17.6934 25.7552 17.6934 34.9999C17.6934 44.2446 25.1876 51.739 34.4325 51.739Z"
          fill={color === "white" ? "#1264A3" : "#F4F5F6"}
        />
        <path d="M34.436 48.7027C42.0019 48.7027 48.1353 42.5693 48.1353 35.0035C48.1353 27.4376 42.0019 21.3042 34.436 21.3042C26.87 21.3042 20.7368 27.4376 20.7368 35.0035C20.7368 42.5693 26.87 48.7027 34.436 48.7027Z" />
      </g>
      <defs>
        <clipPath id="clip0_8215_16957">
          <rect width="70" height="70" fill="white" />
        </clipPath>
      </defs>
    </IconWrapper>
  );
};

export default SunIcon;
