import InspectionsIcon from "./InspectionsIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("InspectionsIcon", () => {
  const testId = "inspections"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<InspectionsIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <InspectionsIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<InspectionsIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
