import RobotIcon from "./RobotIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("RobotIcon", () => {
  const testId = "robot"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<RobotIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <RobotIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<RobotIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
