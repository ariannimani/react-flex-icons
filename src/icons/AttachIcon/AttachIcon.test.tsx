import AttachIcon from "./AttachIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("AttachIcon", () => {
  const testId = "attach"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<AttachIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <AttachIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<AttachIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
