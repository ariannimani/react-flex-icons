import LocationIcon from "./LocationIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("LocationIcon", () => {
  const testId = "location"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<LocationIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <LocationIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<LocationIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});