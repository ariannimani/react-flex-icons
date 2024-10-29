import SendMessageIcon from "./SendMessageIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("SendMessageIcon", () => {
  const testId = "send-message"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<SendMessageIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <SendMessageIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<SendMessageIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
