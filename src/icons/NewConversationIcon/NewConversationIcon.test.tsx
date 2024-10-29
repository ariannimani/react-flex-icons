import NewConversationIcon from "./NewConversationIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("NewConversationIcon", () => {
  const testId = "new-conversation"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<NewConversationIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <NewConversationIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<NewConversationIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
