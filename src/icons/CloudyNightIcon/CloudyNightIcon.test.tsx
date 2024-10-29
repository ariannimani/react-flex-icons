import CloudyNightIcon from "./CloudyNightIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("CloudyNightIcon", () => {
  const testId = "cloudy-night"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<CloudyNightIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <CloudyNightIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<CloudyNightIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
