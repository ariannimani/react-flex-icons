import AccountingIcon from "./AccountingIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("AccountingIcon", () => {
  const testId = "accounting"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<AccountingIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <AccountingIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<AccountingIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
