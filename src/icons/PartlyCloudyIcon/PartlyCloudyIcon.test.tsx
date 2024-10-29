import PartlyCloudyIcon from "./PartlyCloudyIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("PartlyCloudyIcon", () => {
  const testId = "partly-cloudy"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<PartlyCloudyIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <PartlyCloudyIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<PartlyCloudyIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
