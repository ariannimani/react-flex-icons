import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const CloudDoneIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper testId="cloud-done" size={size} color={color} {...rest}>
      <path d="M30.1159 41.1992L26.0326 37.1159C25.4492 36.5326 24.7687 36.2409 23.9909 36.2409C23.2131 36.2409 22.5326 36.5326 21.9492 37.1159C21.3659 37.6992 21.0742 38.3919 21.0742 39.194C21.0742 39.9961 21.3659 40.6888 21.9492 41.2721L28.1471 47.543C28.7305 48.1263 29.411 48.418 30.1888 48.418C30.9666 48.418 31.6471 48.1263 32.2305 47.543L44.5534 35.2201C45.1367 34.6367 45.4284 33.9319 45.4284 33.1055C45.4284 32.2791 45.1367 31.5742 44.5534 30.9909C43.9701 30.4076 43.2652 30.1159 42.4388 30.1159C41.6124 30.1159 40.9076 30.4076 40.3242 30.9909L30.1159 41.1992ZM18.9596 58.3346C14.536 58.3346 10.7565 56.8034 7.62109 53.7409C4.48568 50.6784 2.91797 46.9353 2.91797 42.5117C2.91797 38.7201 4.06033 35.3416 6.34505 32.3763C8.62977 29.411 11.6194 27.5152 15.3138 26.6888C16.5291 22.2166 18.9596 18.5951 22.6055 15.8242C26.2513 13.0534 30.3832 11.668 35.0013 11.668C40.6888 11.668 45.5135 13.6489 49.4753 17.6107C53.4371 21.5725 55.418 26.3971 55.418 32.0846C58.7721 32.4735 61.5551 33.9197 63.7669 36.4232C65.9787 38.9267 67.0846 41.8555 67.0846 45.2096C67.0846 48.8555 65.8086 51.9544 63.2565 54.5065C60.7044 57.0586 57.6055 58.3346 53.9596 58.3346H18.9596Z" />
    </IconWrapper>
  );
};

export default CloudDoneIcon;