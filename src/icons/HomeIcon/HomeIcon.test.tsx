import HomeIcon from "./HomeIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("HomeIcon", () => {
  const testId = "home"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<HomeIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <HomeIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<HomeIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});