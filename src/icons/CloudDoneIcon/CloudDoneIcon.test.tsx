import CloudDoneIcon from "./CloudDoneIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("CloudDoneIcon", () => {
  const testId = "cloud-done"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<CloudDoneIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <CloudDoneIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<CloudDoneIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
