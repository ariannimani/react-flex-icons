import SuspendIcon from "./SuspendIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("SuspendIcon", () => {
  const testId = "suspend"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<SuspendIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <SuspendIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<SuspendIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});