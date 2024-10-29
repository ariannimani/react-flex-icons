import ClearFilterIcon from "./ClearFilterIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ClearFilterIcon", () => {
  const testId = "clear-filter"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<ClearFilterIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <ClearFilterIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<ClearFilterIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
