import DatabaseIcon from "./DatabaseIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("DatabaseIcon", () => {
  const testId = "database"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<DatabaseIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <DatabaseIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<DatabaseIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
