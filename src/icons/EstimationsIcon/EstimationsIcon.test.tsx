import EstimationsIcon from "./EstimationsIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("EstimationsIcon", () => {
  const testId = "estimations"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<EstimationsIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <EstimationsIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<EstimationsIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
