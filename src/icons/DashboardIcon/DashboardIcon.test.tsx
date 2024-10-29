import DashboardIcon from "./DashboardIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("DashboardIcon", () => {
  const testId = "dashboard"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<DashboardIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <DashboardIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<DashboardIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
