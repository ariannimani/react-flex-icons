import BuildingIcon from "./BuildingIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("BuildingIcon", () => {
  const testId = "building"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<BuildingIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <BuildingIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<BuildingIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
