import CloudyIcon from "./CloudyIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("CloudyIcon", () => {
  const testId = "cloudy"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<CloudyIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <CloudyIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<CloudyIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
