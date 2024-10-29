import PdfIcon from "./PdfIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("PdfIcon", () => {
  const testId = "pdf"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<PdfIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <PdfIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<PdfIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
