import WarningIcon from "./WarningIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("WarningIcon", () => {
  const testId = "warning"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<WarningIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <WarningIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<WarningIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
