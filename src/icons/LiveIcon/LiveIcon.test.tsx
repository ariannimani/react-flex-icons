import LiveIcon from "./LiveIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("LiveIcon", () => {
  const testId = "live"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<LiveIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <LiveIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<LiveIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
