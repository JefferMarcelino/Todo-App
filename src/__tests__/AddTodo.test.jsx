import { fireEvent, render } from "../test-utils";
import AddTodo from "../components/AddTodo";

describe("AddTodo component", () => {
  afterEach(() => {
    localStorage.clear();
  });

  test("Render component", () => {
    render(<AddTodo />);
    expect(true).toBeTruthy();
  });

  test("Add todo", () => {
    const { getByPlaceholderText, getByText } = render(<AddTodo />);

    const input = getByPlaceholderText('New Todo...');
    const addButton = getByText('Add');

    fireEvent.change(input, { target: { value: 'Task 1' } });

    fireEvent.click(addButton);

    const todos = JSON.parse(`${ localStorage.getItem("tasks") }`);

    expect(todos[0].task).toBe("Task 1");
  });

  test("Not adding empty task description", () => {
    const { getByPlaceholderText, getByText } = render(<AddTodo />);

    const input = getByPlaceholderText('New Todo...');
    const addButton = getByText('Add');

    fireEvent.change(input, { target: { value: '' } });

    fireEvent.click(addButton);

    const todos = JSON.parse(`${ localStorage.getItem("tasks") }`);

    expect(todos.length).toBe(0);
  });
})