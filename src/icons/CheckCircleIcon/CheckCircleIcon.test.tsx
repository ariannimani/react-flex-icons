import CheckCircleIcon from "./CheckCircleIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("CheckCircleIcon", () => {
  const testId = "check-circle";

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<CheckCircleIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<CheckCircleIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
