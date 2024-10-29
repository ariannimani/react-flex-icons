import GenerateExistingFileIcon from "./GenerateExistingFileIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("GenerateExistingFileIcon", () => {
  const testId = "generate-existing-file"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<GenerateExistingFileIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <GenerateExistingFileIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<GenerateExistingFileIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
