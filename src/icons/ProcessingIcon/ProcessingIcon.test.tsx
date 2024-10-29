import ProcessingIcon from "./ProcessingIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ProcessingIcon", () => {
  const testId = "processing"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<ProcessingIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <ProcessingIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<ProcessingIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
