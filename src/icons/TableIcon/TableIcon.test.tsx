import TableIcon from "./TableIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("TableIcon", () => {
  const testId = "table"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<TableIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <TableIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<TableIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
