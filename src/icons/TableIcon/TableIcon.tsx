import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const TableIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper testId="table" size={size} color={color} {...rest}>
      <path d="M8.75 23.3333V14.5833C8.75 12.9792 9.32118 11.6059 10.4635 10.4635C11.6059 9.32118 12.9792 8.75 14.5833 8.75H55.4167C57.0208 8.75 58.3941 9.32118 59.5365 10.4635C60.6788 11.6059 61.25 12.9792 61.25 14.5833V23.3333H8.75ZM14.5833 61.25C12.9792 61.25 11.6059 60.6788 10.4635 59.5365C9.32118 58.3941 8.75 57.0208 8.75 55.4167V29.1667H21.875V61.25H14.5833ZM48.125 61.25V29.1667H61.25V55.4167C61.25 57.0208 60.6788 58.3941 59.5365 59.5365C58.3941 60.6788 57.0208 61.25 55.4167 61.25H48.125ZM27.7083 61.25V29.1667H42.2917V61.25H27.7083Z" />
    </IconWrapper>
  );
};

export default TableIcon;
