import CircleProgressIcon from "./CircleProgressIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("CircleProgressIcon", () => {
  const testId = "circle-progress"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<CircleProgressIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <CircleProgressIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<CircleProgressIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});