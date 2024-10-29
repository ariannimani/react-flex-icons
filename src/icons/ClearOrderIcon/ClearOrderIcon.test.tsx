import ClearOrderIcon from "./ClearOrderIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ClearOrderIcon", () => {
  const testId = "clear-order"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<ClearOrderIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <ClearOrderIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<ClearOrderIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
