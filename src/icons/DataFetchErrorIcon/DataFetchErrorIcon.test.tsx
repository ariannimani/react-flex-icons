import DataFetchErrorIcon from "./DataFetchErrorIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("DataFetchErrorIcon", () => {
  const testId = "data-fetch-error"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<DataFetchErrorIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <DataFetchErrorIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<DataFetchErrorIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
