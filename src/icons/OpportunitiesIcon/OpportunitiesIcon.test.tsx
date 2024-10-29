import OpportunitiesIcon from "./OpportunitiesIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("OpportunitiesIcon", () => {
  const testId = "opportunities"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<OpportunitiesIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <OpportunitiesIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<OpportunitiesIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
