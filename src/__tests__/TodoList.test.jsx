import { fireEvent, render } from "../test-utils";
import TodoList from "../components/TodoList";

describe("TodoList component", () => {
  afterEach(() => {
    localStorage.clear();
  });

  test("Render component", () => {
    render(<TodoList />);

    expect(true).toBeTruthy();
  });

  test("Render with todos", () => {
    const todos = [
      { id: 1, task: "Task 1", did: false },
      { id: 2, task: "Task 2", did: true }
    ];

    localStorage.setItem("tasks", JSON.stringify(todos));

    const { getByText, getAllByText } = render(<TodoList />);
    
    todos.forEach(todo => {
      expect(getByText(todo.task)).toBeInTheDocument();
    });
    
    expect(getAllByText(/Task/i).length).toBe(todos.length);
  });

  test("Render with no todos", () => {
    const { getByText } = render(<TodoList />);
    expect(getByText("You have no todos, yay!")).toBeInTheDocument();
  });
  
  test("Clicking todo toggles 'did' class", () => {
    const todos = [{ id: 1, task: "Task 1", did: false }];

    localStorage.setItem("tasks", JSON.stringify(todos));

    const { getByText } = render(<TodoList />);

    const todo = getByText("Task 1");
    fireEvent.click(todo);

    expect(todo.classList.contains("did")).toBeTruthy();
    
    fireEvent.click(todo);

    expect(todo.classList.contains("did")).toBeFalsy();
  });
  
  test("Local storage is updated correctly on todo click", () => {
    const todos = [{ id: 1, task: "Task 1", did: false }];

    localStorage.setItem("tasks", JSON.stringify(todos));

    const { getByText } = render(<TodoList />);

    const todo = getByText("Task 1");
    fireEvent.click(todo);

    const updatedTodos = JSON.parse(localStorage.getItem("tasks"));

    expect(updatedTodos[0].did).toBe(true);
  });

  test("Local storage is updated correctly on todo deletion", () => {
    let todos = [{ id: 1, task: "Task 1", did: false }];

    localStorage.setItem("tasks", JSON.stringify(todos));

    const { getByText, queryByText } = render(<TodoList />);

    const deleteButton = getByText("Task 1").nextSibling;
    fireEvent.click(deleteButton);

    expect(queryByText("Task 1")).not.toBeInTheDocument();

    const updatedTodos = JSON.parse(localStorage.getItem("tasks"));
    
    expect(updatedTodos.length).toBe(0);
  });
});
