import RainIcon from "./RainIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("RainIcon", () => {
  const testId = "rain"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<RainIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <RainIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<RainIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
