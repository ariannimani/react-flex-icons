import CloudOffIcon from "./CloudOffIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("CloudOffIcon", () => {
  const testId = "cloud-off"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<CloudOffIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <CloudOffIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<CloudOffIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
