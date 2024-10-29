import CalendarEventIcon from "./CalendarEventIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("CalendarEventIcon", () => {
  const testId = "calendar-event"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<CalendarEventIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <CalendarEventIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<CalendarEventIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
