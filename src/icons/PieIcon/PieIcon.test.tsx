import PieIcon from "./PieIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("PieIcon", () => {
  const testId = "pie"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<PieIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <PieIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<PieIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});