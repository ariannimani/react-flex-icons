import SubContractorsIcon from "./SubContractorsIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("SubContractorsIcon", () => {
  const testId = "sub-contractors"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<SubContractorsIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <SubContractorsIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<SubContractorsIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
