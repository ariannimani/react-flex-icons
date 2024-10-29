import LogOutIcon from "./LogOutIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("LogOutIcon", () => {
  const testId = "log-out"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<LogOutIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <LogOutIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<LogOutIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
