import Contact from "../Contact.js";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });
});

test("Should load input name inside Contact component", () => {
  render(<Contact />);

  const input = screen.getByPlaceholderText("name");

  expect(input).toBeInTheDocument();
});

test("Should load 2 input boxes on the Contact Component", () => {
  render(<Contact />);

  const inputBoxes = screen.getAllByRole("textbox");
  console.log(inputBoxes[0]);
  expect(inputBoxes.length).toBe(2);
});
