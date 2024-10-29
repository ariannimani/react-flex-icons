import ExpandIcon from "./ExpandIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ExpandIcon", () => {
  const testId = "expand"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<ExpandIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <ExpandIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<ExpandIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
