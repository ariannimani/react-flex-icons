import SettingsIcon from "./SettingsIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("SettingsIcon", () => {
  const testId = "settings"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<SettingsIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <SettingsIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<SettingsIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
