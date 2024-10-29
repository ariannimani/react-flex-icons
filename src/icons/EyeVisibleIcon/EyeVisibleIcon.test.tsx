import EyeVisibleIcon from "./EyeVisibleIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("EyeVisibleIcon", () => {
  const testId = "eye-visible"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<EyeVisibleIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <EyeVisibleIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<EyeVisibleIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
