import NotificationIcon from "./NotificationIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("NotificationIcon", () => {
  const testId = "notification"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<NotificationIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <NotificationIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<NotificationIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
