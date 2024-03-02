import { render, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import NewListing from "../components/NewListing";
import { BrowserRouter as Router } from "react-router-dom";

test("renders NewListing and checks form submission", async () => {
  const { getByLabelText, getByText } = render(
    <Router>
      <NewListing />
    </Router>
  );

  // Check if form elements are present
  expect(getByText(/Job title:/i)).to.exist;
  expect(getByText(/Department:/i)).to.exist;
  expect(getByText(/Salary:/i)).to.exist;
  expect(getByText(/Posting date:/i)).to.exist;
  expect(getByText(/Closing date:/i)).to.exist;
  expect(getByText(/Role Basis:/i)).to.exist;
  expect(getByText(/Role type:/i)).to.exist;
  expect(getByText(/Role location:/i)).to.exist;
  expect(getByText(/Full description:/i)).to.exist;

  // Simulate form submission
  const submitButton = getByText(/Save/i);
  fireEvent.click(submitButton);

  // Add more assertions based on what you expect to happen when the form is submitted
});

test("submits the form", async ({ is }) => {
  let submitted = false;
  const onSubmit = () => {
    submitted = true;
  };
  const { getByLabelText, getByText } = render(NewListing, { props: { onSubmit } });

  await fireEvent.update(getByText(/Job title:/i), "Software Engineer");
  await fireEvent.update(getByText(/Department:/i), "Engineering");
  await fireEvent.update(getByText(/Salary:/i), "100000");
  await fireEvent.update(getByText(/Posting date:/i), "2022-01-01");
  await fireEvent.update(getByText(/Closing date:/i), "2022-02-01");

  await fireEvent.click(getByText("Save"));

  is(submitted, true);
});
