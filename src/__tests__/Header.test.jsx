import Header from "../components/Header";
import { render } from "../test-utils";

test("Render the header component", () => {
  const { getByText } = render(<Header />);
  
  const headerElement = getByText("Todo List");
  
  expect(headerElement).toBeInTheDocument();
  expect(headerElement.tagName).toBe("H1");
});