import TutorialsIcon from "./TutorialsIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("TutorialsIcon", () => {
  const testId = "tutorials"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<TutorialsIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <TutorialsIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<TutorialsIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
