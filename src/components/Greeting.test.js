import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";
describe("Greeting component", () => {
  test('renders "Hello World" as a text', () => {
    // 3As
    // Arrange
    render(<Greeting />);
    // Act

    // Assert
    const welcomeElement = screen.getByText("Welcome", { exact: false });
    expect(welcomeElement).toBeInTheDocument();
  });

  test('renders "First test page" as a text if the button was NOT clicked', () => {
    // 3As
    // Arrange
    render(<Greeting />);
    // Act

    // Assert
    const textElement = screen.getByText("First test page", { exact: true });
    expect(textElement).toBeInTheDocument();
  });

  test('renders "Toggled" as a text if the button was CLICKED', () => {
    // 3As
    // Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // Assert
    const textElement = screen.getByText("Toggled", { exact: true });
    expect(textElement).toBeInTheDocument();
  });
  test('does NOT render "First test page" as a text if the button was CLICKED', () => {
    // 3As
    // Arrange
    render(<Greeting />);
    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    // Assert
    //by default exact is true
    const textElement = screen.queryByText("First test page", { exact: false });

    expect(textElement).toBeNull();
  });
});
