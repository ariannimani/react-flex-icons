import WordIcon from "./WordIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("WordIcon", () => {
  const testId = "word"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<WordIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <WordIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<WordIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
