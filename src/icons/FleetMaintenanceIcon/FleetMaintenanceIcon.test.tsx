import FleetMaintenanceIcon from "./FleetMaintenanceIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("FleetMaintenanceIcon", () => {
  const testId = "fleet-maintenance"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<FleetMaintenanceIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <FleetMaintenanceIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<FleetMaintenanceIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
