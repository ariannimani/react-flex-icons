import LoadingIcon from "./LoadingIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("LoadingIcon", () => {
  const testId = "loading"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<LoadingIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <LoadingIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<LoadingIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});