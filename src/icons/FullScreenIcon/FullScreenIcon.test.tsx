import FullScreenIcon from "./FullScreenIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("FullScreenIcon", () => {
  const testId = "full-screen"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<FullScreenIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <FullScreenIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<FullScreenIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
