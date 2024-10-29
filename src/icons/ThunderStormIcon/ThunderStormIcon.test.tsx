import ThunderStormIcon from "./ThunderStormIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ThunderStormIcon", () => {
  const testId = "thunder-storm"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<ThunderStormIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <ThunderStormIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<ThunderStormIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
