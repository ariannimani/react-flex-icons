import React from "react";
import { IconProps } from "../../types";
import { IconWrapper } from "../../components/IconWrapper";

const NotificationImportantIcon: React.FC<IconProps> = ({
  size = "medium",
  color = "inherit",
  ...rest
}) => {
  return (
    <IconWrapper
      testId="notification-important"
      size={size}
      color={color}
      {...rest}
    >
      <path d="M14.5827 55.4154C13.7563 55.4154 13.0636 55.1358 12.5046 54.5768C11.9455 54.0178 11.666 53.3251 11.666 52.4987C11.666 51.6723 11.9455 50.9796 12.5046 50.4206C13.0636 49.8615 13.7563 49.582 14.5827 49.582H17.4993V29.1654C17.4993 25.1306 18.7146 21.5456 21.1452 18.4102C23.5757 15.2747 26.7355 13.2209 30.6243 12.2487V10.207C30.6243 8.99175 31.0497 7.95877 31.9004 7.10807C32.7511 6.25738 33.7841 5.83203 34.9994 5.83203C36.2146 5.83203 37.2476 6.25738 38.0983 7.10807C38.949 7.95877 39.3744 8.99175 39.3744 10.207V12.2487C43.2632 13.2209 46.423 15.2747 48.8535 18.4102C51.2841 21.5456 52.4994 25.1306 52.4994 29.1654V49.582H55.416C56.2424 49.582 56.9351 49.8615 57.4941 50.4206C58.0532 50.9796 58.3327 51.6723 58.3327 52.4987C58.3327 53.3251 58.0532 54.0178 57.4941 54.5768C56.9351 55.1358 56.2424 55.4154 55.416 55.4154H14.5827ZM34.9994 64.1654C33.3952 64.1654 32.0219 63.5942 30.8796 62.4518C29.7372 61.3095 29.166 59.9362 29.166 58.332H40.8327C40.8327 59.9362 40.2615 61.3095 39.1191 62.4518C37.9768 63.5942 36.6035 64.1654 34.9994 64.1654ZM34.9994 37.9154C35.8257 37.9154 36.5184 37.6358 37.0775 37.0768C37.6365 36.5178 37.916 35.8251 37.916 34.9987V26.2487C37.916 25.4223 37.6365 24.7296 37.0775 24.1706C36.5184 23.6115 35.8257 23.332 34.9994 23.332C34.173 23.332 33.4803 23.6115 32.9212 24.1706C32.3622 24.7296 32.0827 25.4223 32.0827 26.2487V34.9987C32.0827 35.8251 32.3622 36.5178 32.9212 37.0768C33.4803 37.6358 34.173 37.9154 34.9994 37.9154ZM34.9994 46.6654C35.8257 46.6654 36.5184 46.3858 37.0775 45.8268C37.6365 45.2678 37.916 44.5751 37.916 43.7487C37.916 42.9223 37.6365 42.2296 37.0775 41.6706C36.5184 41.1115 35.8257 40.832 34.9994 40.832C34.173 40.832 33.4803 41.1115 32.9212 41.6706C32.3622 42.2296 32.0827 42.9223 32.0827 43.7487C32.0827 44.5751 32.3622 45.2678 32.9212 45.8268C33.4803 46.3858 34.173 46.6654 34.9994 46.6654Z" />
    </IconWrapper>
  );
};

export default NotificationImportantIcon;