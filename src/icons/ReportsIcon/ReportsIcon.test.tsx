import ReportsIcon from "./ReportsIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ReportsIcon", () => {
  const testId = "reports"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<ReportsIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <ReportsIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<ReportsIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
