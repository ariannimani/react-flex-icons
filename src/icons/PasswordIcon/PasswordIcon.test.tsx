import PasswordIcon from "./PasswordIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("PasswordIcon", () => {
  const testId = "password"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<PasswordIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <PasswordIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<PasswordIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
