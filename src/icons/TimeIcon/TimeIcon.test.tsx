import TimeIcon from "./TimeIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("TimeIcon", () => {
  const testId = "time"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<TimeIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <TimeIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<TimeIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
