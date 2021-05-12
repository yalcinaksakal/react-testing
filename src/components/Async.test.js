import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    //   Arrange
    render(<Async />);
    // ACT

    //Assert
    //find  queries return promises
    // second argument is exact, third one is timeout. Default timeout is 1 second
    const listItemElements = await screen.findAllByRole("listitem");

    expect(listItemElements).not.toHaveLength(0);
  });
});
