import CrewMemberIcon from "./CrewMemberIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("CrewMemberIcon", () => {
  const testId = "crew-member"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<CrewMemberIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <CrewMemberIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<CrewMemberIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
