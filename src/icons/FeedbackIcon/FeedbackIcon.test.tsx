import FeedbackIcon from "./FeedbackIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("FeedbackIcon", () => {
  const testId = "feedback"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<FeedbackIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <FeedbackIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<FeedbackIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
