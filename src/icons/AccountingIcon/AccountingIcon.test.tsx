import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import AccountingIcon from "./AccountingIcon";

describe("AccountingIcon", () => {
  const testId = "accounting";

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<AccountingIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("icon medium");
  });
  it("renders the icon with custom size", () => {
    const { getByTestId } = render(<AccountingIcon size="large" />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("icon large");
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(<AccountingIcon className="custom-class" />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("icon medium custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<AccountingIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
