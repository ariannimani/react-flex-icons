import SortIcon from "./SortIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("SortIcon", () => {
  const testId = "sort"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<SortIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <SortIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<SortIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
