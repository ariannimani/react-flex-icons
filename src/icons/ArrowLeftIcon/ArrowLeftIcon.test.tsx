import ArrowLeftIcon from "./ArrowLeftIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ArrowLeftIcon", () => {
  const testId = "arrow-left"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<ArrowLeftIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <ArrowLeftIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<ArrowLeftIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
