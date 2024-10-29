import ArrowRightIcon from "./ArrowRightIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ArrowRightIcon", () => {
  const testId = "arrow-right"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<ArrowRightIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <ArrowRightIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<ArrowRightIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
