import ThunderIcon from "./ThunderIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ThunderIcon", () => {
  const testId = "thunder"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<ThunderIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <ThunderIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<ThunderIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
