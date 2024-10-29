import InventoryIcon from "./InventoryIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("InventoryIcon", () => {
  const testId = "inventory"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<InventoryIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <InventoryIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<InventoryIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
