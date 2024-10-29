import PasswordResetIcon from "./PasswordResetIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("PasswordResetIcon", () => {
  const testId = "password-reset"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<PasswordResetIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <PasswordResetIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<PasswordResetIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
