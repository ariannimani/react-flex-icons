import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import IconWrapper from "./IconWrapper";

describe("IconWrapper Component", () => {
  test("renders children correctly", () => {
    const { getByText } = render(
      <IconWrapper>
        <text>Test Icon</text>
      </IconWrapper>
    );
    expect(getByText("Test Icon")).toBeInTheDocument();
  });

  test("renders with default viewBox if not provided", () => {
    const { getByTestId } = render(<IconWrapper />);
    expect(getByTestId("-icon")).toHaveAttribute("viewBox", "0 0 70 70");
  });

  test("renders with specified viewBox", () => {
    const { getByTestId } = render(<IconWrapper viewBox="0 0 50 50" />);
    expect(getByTestId("-icon")).toHaveAttribute("viewBox", "0 0 50 50");
  });
  test("renders with additional className", () => {
    const { getByTestId } = render(<IconWrapper className="extra-class" />);
    expect(getByTestId("-icon")).toHaveClass("extra-class");
  });
});
