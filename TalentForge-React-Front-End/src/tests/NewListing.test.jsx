import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { test, describe, expect, it, beforeEach } from "vitest";
import NewListing from "../components/NewListing";

describe("NewListing", () => {
  beforeEach(() => {
    render(<NewListing />);
  });

  test("renders form fields correctly", () => {
    const jobTitleInput = screen.getByLabelText(/Job title:/i);
    expect(jobTitleInput).toBeInTheDocument();

    const departmentInput = screen.getByLabelText(/Department:/i);
    expect(departmentInput).toBeInTheDocument();

    const closingDateInput = screen.getByLabelText(/Closing date:/i);
    expect(closingDateInput).toBeInTheDocument();
  });

  test("renders role basis radio buttons correctly", () => {
    const fullTimeInput = screen.getByLabelText(/Full Time/i);
    expect(fullTimeInput).toBeInTheDocument();
    expect(fullTimeInput).toBeChecked();

    const partTimeInput = screen.getByLabelText(/Part Time/i);
    expect(partTimeInput).toBeInTheDocument();
    expect(partTimeInput).not.toBeChecked();

    const otherInputs = screen.getAllByText(/Other/i);
    otherInputs.forEach((input) => {
      expect(input).toBeInTheDocument();
      expect(input).not.toBeChecked();
    });
  });

  test("renders role type radio buttons correctly", () => {
    const permanentInput = screen.getByLabelText(/Permanent/i);
    expect(permanentInput).toBeInTheDocument();
    expect(permanentInput).toBeChecked();
  });

  test("changes radio button selection on click", () => {
    const { getAllByLabelText } = render(<NewListing />);
    const radioButtons = getAllByLabelText("Part Time");
    const radioButton = radioButtons.find((button) => button.name === "hours");

    fireEvent.click(radioButton);
  });
});
