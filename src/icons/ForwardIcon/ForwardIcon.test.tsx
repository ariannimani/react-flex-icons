import ForwardIcon from "./ForwardIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ForwardIcon", () => {
  const testId = "forward"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<ForwardIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <ForwardIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<ForwardIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
