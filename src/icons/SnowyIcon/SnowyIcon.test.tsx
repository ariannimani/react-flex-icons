import SnowyIcon from "./SnowyIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("SnowyIcon", () => {
  const testId = "snowy"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<SnowyIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <SnowyIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<SnowyIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
