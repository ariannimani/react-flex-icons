import SalesIcon from "./SalesIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("SalesIcon", () => {
  const testId = "sales"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<SalesIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <SalesIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<SalesIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
