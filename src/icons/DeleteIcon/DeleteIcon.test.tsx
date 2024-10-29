import DeleteIcon from "./DeleteIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("DeleteIcon", () => {
  const testId = "delete"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<DeleteIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <DeleteIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<DeleteIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
