import LogsIcon from "./LogsIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("LogsIcon", () => {
  const testId = "logs"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<LogsIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <LogsIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<LogsIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
