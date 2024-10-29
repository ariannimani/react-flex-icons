import ExcelIcon from "./ExcelIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ExcelIcon", () => {
  const testId = "excel"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<ExcelIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <ExcelIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<ExcelIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
