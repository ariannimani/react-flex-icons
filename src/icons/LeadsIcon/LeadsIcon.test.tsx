import LeadsIcon from "./LeadsIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("LeadsIcon", () => {
  const testId = "leads"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<LeadsIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <LeadsIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<LeadsIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
