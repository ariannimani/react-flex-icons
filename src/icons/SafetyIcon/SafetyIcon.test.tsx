import SafetyIcon from "./SafetyIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("SafetyIcon", () => {
  const testId = "safety"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<SafetyIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <SafetyIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<SafetyIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
