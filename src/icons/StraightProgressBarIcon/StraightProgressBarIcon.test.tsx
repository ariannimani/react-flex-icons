import StraightProgressBarIcon from "./StraightProgressBarIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("StraightProgressBarIcon", () => {
  const testId = "straight-progress-bar"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<StraightProgressBarIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <StraightProgressBarIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<StraightProgressBarIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
