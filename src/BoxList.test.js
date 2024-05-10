import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

// smoke test
it("renders without crashing", function () {
  render(<BoxList />);
});

// snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add and delete a new item", function () {
  const { getByLabelText, queryByText } = render(<BoxList />);

  // no items yet
  expect(queryByText("X")).not.toBeInTheDocument();

  const backgroundInput = getByLabelText("Background:");
  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const addBtn = queryByText("Add box!");

  // fill out the form
  fireEvent.change(backgroundInput, { target: { value: "blue" } });
  fireEvent.change(widthInput, { target: { value: "100px" } });
  fireEvent.change(heightInput, { target: { value: "100px" } });
  fireEvent.click(addBtn);

  // delete button next the box div exists!
  expect(queryByText("X")).toBeInTheDocument();

  //   delete the box
  const deleteBtn = queryByText("X");
  fireEvent.click(deleteBtn);
  //   the box is deleted
  expect(queryByText("X")).not.toBeInTheDocument();
});
