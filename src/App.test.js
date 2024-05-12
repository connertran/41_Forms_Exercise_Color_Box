import { render } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
  const { queryByText } = render(<App />);
  const title = queryByText("Homepage");
  expect(title).toBeInTheDocument();
});
