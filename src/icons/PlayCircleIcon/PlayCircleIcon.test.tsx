import PlayCircleIcon from "./PlayCircleIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("PlayCircleIcon", () => {
  const testId = "play-circle"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<PlayCircleIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <PlayCircleIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<PlayCircleIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
