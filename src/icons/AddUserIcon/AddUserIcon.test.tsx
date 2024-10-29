import AddUserIcon from "./AddUserIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("AddUserIcon", () => {
  const testId = "add-user"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<AddUserIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <AddUserIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<AddUserIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
