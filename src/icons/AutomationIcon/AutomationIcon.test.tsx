import AutomationIcon from "./AutomationIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("AutomationIcon", () => {
  const testId = "automation"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<AutomationIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <AutomationIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<AutomationIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
