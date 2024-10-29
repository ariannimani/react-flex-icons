import LockIcon from "./LockIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("LockIcon", () => {
  const testId = "lock"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<LockIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <LockIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<LockIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
