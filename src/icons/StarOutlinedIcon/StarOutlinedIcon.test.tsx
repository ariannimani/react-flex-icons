import StarOutlinedIcon from "./StarOutlinedIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("StarOutlinedIcon", () => {
  const testId = "star-outlined"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<StarOutlinedIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <StarOutlinedIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<StarOutlinedIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
