import ImageIcon from "./ImageIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ImageIcon", () => {
  const testId = "image"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<ImageIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <ImageIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<ImageIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
