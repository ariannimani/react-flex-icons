import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const StraightProgressBarIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper
      testId="straight-progress-bar"
      size={size}
      color={color}
      {...rest}
    >
      <path d="M12.2505 25.7012H56.0005V32.7012H12.2505V25.7012Z" />
      <path d="M12.2505 14.0986H44.6255V21.0986H12.2505V14.0986Z" />
      <path d="M12.2505 37.3032H22.7505V44.3032H12.2505V37.3032Z" />
      <path d="M12.2505 48.9058H35.0005V55.9058H12.2505V48.9058Z" />
      <path d="M60.375 61.25H9.625C9.39294 61.25 9.17038 61.1578 9.00628 60.9937C8.84219 60.8296 8.75 60.6071 8.75 60.375V9.625C8.75 9.39294 8.84219 9.17038 9.00628 9.00628C9.17038 8.84219 9.39294 8.75 9.625 8.75C9.85706 8.75 10.0796 8.84219 10.2437 9.00628C10.4078 9.17038 10.5 9.39294 10.5 9.625V59.5H60.375C60.6071 59.5 60.8296 59.5922 60.9937 59.7563C61.1578 59.9204 61.25 60.1429 61.25 60.375C61.25 60.6071 61.1578 60.8296 60.9937 60.9937C60.8296 61.1578 60.6071 61.25 60.375 61.25Z" />
    </IconWrapper>
  );
};

export default StraightProgressBarIcon;
