import PauseIcon from "./PauseIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("PauseIcon", () => {
  const testId = "pause"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<PauseIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <PauseIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<PauseIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
