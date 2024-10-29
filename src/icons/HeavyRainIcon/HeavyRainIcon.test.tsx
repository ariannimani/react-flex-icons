import HeavyRainIcon from "./HeavyRainIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("HeavyRainIcon", () => {
  const testId = "heavy-rain"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<HeavyRainIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <HeavyRainIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<HeavyRainIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
