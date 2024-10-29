import FileUploadFailedIcon from "./FileUploadFailedIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("FileUploadFailedIcon", () => {
  const testId = "file-upload-failed"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<FileUploadFailedIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <FileUploadFailedIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<FileUploadFailedIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
