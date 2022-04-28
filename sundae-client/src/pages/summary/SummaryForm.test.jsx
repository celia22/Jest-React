import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import SummaryForm from "./SummaryForm";
import userEvent from "@testing-library/user-event";

test("initial conditions", () => {
  render(<SummaryForm />);

  // check that the button starts out enabled and check that the checkbox starts out unchecked
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const confirmButton = screen.getByRole("button", {
    name: "Confirm order",
  });
  expect(confirmButton).toBeDisabled();
  expect(checkbox).not.toBeChecked();
});

test("clicking the checkbox", () => {
  render(<SummaryForm />);
  const confirmButton = screen.getByRole("button", {
    name: "Confirm order",
  });
  const checkbox = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });

  // button enables when checkbox checked
  userEvent.click(checkbox);
  expect(confirmButton).toBeEnabled();

  // button disables when checkbox checked
  userEvent.click(checkbox);
  expect(confirmButton).toBeDisabled();
});

test("popover responds to hover", async () => {
  render(<SummaryForm />);

  // popover starts out hidden
  const nullPopver = screen.queryByText(/no ice cream will be delivered/i);
  expect(nullPopver).not.toBeInTheDocument();

  // popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  userEvent.hover(termsAndConditions);

  const popover = screen.getByText(/no ice cream will be delivered/i);
  expect(popover).toBeInTheDocument();

  // popover disappears when mouse out

  userEvent.unhover(termsAndConditions);
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will be delivered/i)
  );
});
