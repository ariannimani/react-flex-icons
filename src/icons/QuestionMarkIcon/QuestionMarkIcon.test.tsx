import QuestionMarkIcon from "./QuestionMarkIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("QuestionMarkIcon", () => {
  const testId = "question-mark"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<QuestionMarkIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <QuestionMarkIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<QuestionMarkIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
