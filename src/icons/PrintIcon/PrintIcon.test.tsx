import PrintIcon from "./PrintIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("PrintIcon", () => {
  const testId = "print"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<PrintIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <PrintIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<PrintIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
