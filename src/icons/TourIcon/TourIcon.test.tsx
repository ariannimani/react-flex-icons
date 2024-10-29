import TourIcon from "./TourIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("TourIcon", () => {
  const testId = "tour"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<TourIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <TourIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<TourIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
