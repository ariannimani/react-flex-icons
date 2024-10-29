import FleetsIcon from "./FleetsIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("FleetsIcon", () => {
  const testId = "fleets"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<FleetsIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <FleetsIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<FleetsIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
