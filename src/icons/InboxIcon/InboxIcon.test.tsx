import InboxIcon from "./InboxIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("InboxIcon", () => {
  const testId = "inbox"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<InboxIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <InboxIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<InboxIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
