import BarIcon from "./BarIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("BarIcon", () => {
  const testId = "bar"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<BarIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <BarIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<BarIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
