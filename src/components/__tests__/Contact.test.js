import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../../components/ContactUs";
import "@testing-library/jest-dom";

describe("Contact Us Component Test Cases", () => {
  test("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should get button inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should get Submit Text in contact-us component", () => {
    render(<Contact />);

    const buttonText = screen.getByText("Submit");

    expect(buttonText).toBeInTheDocument();
  });

  test("Should load 2 inputbox in contact-us component", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });
});
