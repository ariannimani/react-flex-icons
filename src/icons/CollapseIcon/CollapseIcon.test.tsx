import CollapseIcon from "./CollapseIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("CollapseIcon", () => {
  const testId = "collapse"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<CollapseIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <CollapseIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<CollapseIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
