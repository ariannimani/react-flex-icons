import StarFilledIcon from "./StarFilledIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("StarFilledIcon", () => {
  const testId = "star-filled"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<StarFilledIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <StarFilledIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<StarFilledIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
