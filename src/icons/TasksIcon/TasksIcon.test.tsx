import TasksIcon from "./TasksIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("TasksIcon", () => {
  const testId = "tasks"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<TasksIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <TasksIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<TasksIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
