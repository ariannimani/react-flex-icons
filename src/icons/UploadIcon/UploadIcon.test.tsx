import UploadIcon from "./UploadIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("UploadIcon", () => {
  const testId = "upload"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<UploadIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <UploadIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<UploadIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});