import ContactsIcon from "./ContactsIcon";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("ContactsIcon", () => {
  const testId = "contacts"

  it("renders the icon with default props", () => {
    const { getByTestId } = render(<ContactsIcon />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toBeInTheDocument();
  });

  it("renders the icon with custom className", () => {
    const { getByTestId } = render(
      <ContactsIcon className="custom-class" />
    );
    const icon = getByTestId(`${testId}-icon`);
    expect(icon).toHaveClass("custom-class");
  });

  it("renders the icon with custom opacity", () => {
    const { getByTestId } = render(<ContactsIcon opacity={0.5} />);
    const icon = getByTestId(`${testId}-icon`);
    expect(icon.style.opacity).toBe("0.5");
  });
});
