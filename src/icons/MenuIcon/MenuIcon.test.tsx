import MenuIcon from "./MenuIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("MenuIcon", () => {
  const testId = "menu"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<MenuIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <MenuIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<MenuIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
