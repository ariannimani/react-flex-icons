import ConfirmedIcon from "./ConfirmedIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ConfirmedIcon", () => {
  const testId = "confirmed"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<ConfirmedIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <ConfirmedIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<ConfirmedIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
