import DownloadIcon from "./DownloadIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("DownloadIcon", () => {
  const testId = "download"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<DownloadIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <DownloadIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<DownloadIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
