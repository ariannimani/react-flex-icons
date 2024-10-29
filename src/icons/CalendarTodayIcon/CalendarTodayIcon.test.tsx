import CalendarTodayIcon from "./CalendarTodayIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("CalendarTodayIcon", () => {
  const testId = "calendar-today"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<CalendarTodayIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <CalendarTodayIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<CalendarTodayIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
