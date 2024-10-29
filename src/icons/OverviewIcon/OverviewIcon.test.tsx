import OverviewIcon from "./OverviewIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("OverviewIcon", () => {
  const testId = "overview"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<OverviewIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <OverviewIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<OverviewIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
