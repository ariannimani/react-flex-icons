import NotesIcon from "./NotesIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("NotesIcon", () => {
  const testId = "notes"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<NotesIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <NotesIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<NotesIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
