import WorldIcon from "./WorldIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("WorldIcon", () => {
  const testId = "world"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<WorldIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <WorldIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<WorldIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
