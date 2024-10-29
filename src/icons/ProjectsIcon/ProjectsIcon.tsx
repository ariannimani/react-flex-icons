import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const ProjectsIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper testId="projects" size={size} color={color} {...rest}>
      <path d="M11.6663 58.3332C10.0622 58.3332 8.68891 57.762 7.54655 56.6196C6.40419 55.4773 5.83301 54.104 5.83301 52.4998V17.4998C5.83301 15.8957 6.40419 14.5224 7.54655 13.38C8.68891 12.2377 10.0622 11.6665 11.6663 11.6665H26.7601C27.5379 11.6665 28.2792 11.8123 28.984 12.104C29.6889 12.3957 30.3087 12.8089 30.8434 13.3436L34.9997 17.4998H58.333C59.9372 17.4998 61.3104 18.071 62.4528 19.2134C63.5952 20.3557 64.1663 21.729 64.1663 23.3332V52.4998C64.1663 54.104 63.5952 55.4773 62.4528 56.6196C61.3104 57.762 59.9372 58.3332 58.333 58.3332H11.6663Z" />
    </IconWrapper>
  );
};

export default ProjectsIcon;
