import AuditIcon from "./AuditIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("AuditIcon", () => {
  const testId = "audit"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<AuditIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <AuditIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<AuditIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
