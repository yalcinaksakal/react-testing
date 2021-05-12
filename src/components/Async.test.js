import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    //   Arrange
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Post" }],
    });
    render(<Async />);
    // ACT

    //Assert
    //find  queries return promises
    // second argument is exact, third one is timeout. Default timeout is 1 second
    // jest.setTimeout(30000)
    const listItemElements = await screen.findAllByRole("listitem");

    expect(listItemElements).not.toHaveLength(0);
  });
});
