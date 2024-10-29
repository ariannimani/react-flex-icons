import MapIcon from "./MapIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("MapIcon", () => {
  const testId = "map"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<MapIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <MapIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<MapIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
