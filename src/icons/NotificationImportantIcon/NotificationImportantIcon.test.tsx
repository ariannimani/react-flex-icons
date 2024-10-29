import NotificationImportantIcon from "./NotificationImportantIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("NotificationImportantIcon", () => {
  const testId = "notification-important"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<NotificationImportantIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <NotificationImportantIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<NotificationImportantIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
