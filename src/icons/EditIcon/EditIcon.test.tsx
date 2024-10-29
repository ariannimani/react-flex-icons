import EditIcon from "./EditIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("EditIcon", () => {
  const testId = "edit"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<EditIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <EditIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<EditIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
