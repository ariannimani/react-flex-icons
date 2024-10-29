import RefreshIcon from "./RefreshIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("RefreshIcon", () => {
  const testId = "refresh"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<RefreshIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <RefreshIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<RefreshIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
