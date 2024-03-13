import App from "../App";
import { render } from "../test-utils";

test('Render the main page', () => {
  render(<App />);

  expect(true).toBeTruthy();
});